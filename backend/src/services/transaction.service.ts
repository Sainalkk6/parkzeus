import { Transaction, TransactionAttributes } from "../sequelize/models/Transaction"

const createEntryLog = async (data: TransactionAttributes) => {
    const isIn = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', "DESC"]] })
    if (isIn && isIn.entryTime == null) {
        await Transaction.create(data)
    }

    if (isIn !== null && isIn?.entryTime !== null) {
        await Transaction.update({ invalidatedAt: new Date () }, { where: { identifierId: isIn.identifierId } })
        await Transaction.create(data)
    }

    if (isIn == null) {
        await Transaction.create(data)
    }

}

const createExitLog = async (data: TransactionAttributes) => {
    const isOut = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', 'DESC']] })
    if (isOut?.entryTime && isOut.exitTime == null) {
        await Transaction.update({ exitTime: new Date() }, { where: { identifierId: isOut.identifierId } })
    }

    if (isOut == null) {
        await Transaction.create(data)
    }

    if (isOut !== null && isOut.exitTime !== null) {
        await Transaction.update({ invalidatedAt: new Date() }, { where: { identifierId: isOut.identifierId } })
        await Transaction.create(data)
    }
}

export { createEntryLog, createExitLog }