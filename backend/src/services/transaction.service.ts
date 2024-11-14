import { Transaction, TransactionAttributes } from "../sequelize/models/Transaction"

const createEntryLog = async (data: TransactionAttributes) => {
    const isIn = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', "ASC"]] })
    if (isIn !== null) {
        if (isIn.entryTime && !isIn.exitTime) {
            Transaction.update({ invalidatedAt: new Date() }, { where: { identifierId: isIn.identifierId } })
            Transaction.create({ ...data, entryTime: new Date() })
        }
    }

    if (!isIn) {
        await Transaction.create(data)
    }
}

const createExitLog = async (data: TransactionAttributes) => {
    const isOut = await Transaction.findOne({ where: { identifierId: data.identifierId }, order: [['id', 'ASC']] })
    if (isOut !== null) {
        if (isOut.entryTime && !isOut.exitTime) {
            Transaction.update({ exitTime: new Date() }, { where: { identifierId: isOut.identifierId } })
        } else if (!isOut.entryTime && isOut.exitTime) {
            Transaction.update({ invalidatedAt: new Date() }, { where: { identifierId: isOut.identifierId } })
            Transaction.create({ ...data, exitTime: new Date() })
        }
    }
    if (!isOut) {
        await Transaction.create(data)
    }
}

export { createEntryLog, createExitLog }