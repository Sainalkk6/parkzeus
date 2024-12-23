import { Transaction, TransactionAttributes } from "../sequelize/models/Transaction"

const createEntryLog = async (data: TransactionAttributes) => {
    const isIn = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', "DESC"]] })

    if (!isIn || (!isIn.entryTime && isIn.exitTime) || (isIn.entryTime && isIn.exitTime)) {
        const result = await Transaction.create(data)
        return result.id
    }

    if (isIn && (isIn?.entryTime && !isIn.exitTime)) {
        await Transaction.update({ invalidatedAt: new Date() }, { where: { id: isIn.id, } })
        const result = await Transaction.create(data)
        return result.id
    }
}

const createExitLog = async (data: TransactionAttributes) => {
    const isOut = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', 'DESC']] })
    if (isOut?.entryTime && isOut.exitTime == null) {
        await Transaction.update({ exitTime: new Date(), invalidatedAt: null }, { where: { identifierId: isOut.identifierId, id: isOut.id } })
        return isOut.id
    }

    if (isOut == null) {
        const result = await Transaction.create({ ...data, invalidatedAt: new Date() })
        return result.id
    }


    if (isOut !== null && isOut.exitTime !== null) {
        const result = await Transaction.create({ ...data, invalidatedAt: new Date() })
        return result.id
    }
}

export { createEntryLog, createExitLog }