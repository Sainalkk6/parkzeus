import { Transaction, TransactionAttributes } from "../sequelize/models/Transaction"

const createEntryLog = async (data: TransactionAttributes) => {
    const isIn = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', "DESC"]] })
    if (isIn && isIn.entryTime == null) {
        const result = await Transaction.create(data)
        return result.id
    }

    if (isIn !== null && isIn?.entryTime !== null) {
        await Transaction.update({ invalidatedAt: new Date() }, { where: { identifierId: isIn.identifierId } })
        const result = await Transaction.create(data)
        return result.id
    }
    if (isIn == null) {
        const result = await Transaction.create(data)
        return result.id
    }



}

const createExitLog = async (data: TransactionAttributes) => {
    const isOut = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', 'DESC']] })
    if (isOut?.entryTime && isOut.exitTime == null) {
        await Transaction.update({ exitTime: new Date() }, { where: { identifierId: isOut.identifierId, id:isOut.id } })
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