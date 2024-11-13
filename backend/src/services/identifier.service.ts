import Identifier, { IdentifierAttributes } from "../sequelize/models/Identifier"

const getAll = async () => {
    const result = await Identifier.findAll()
    return result
}

const deleteSpecificIdentifier = async (id: number) => {
    await Identifier.destroy({ where: { id: id } })
}

const edit = async (data: IdentifierAttributes, id: string) => {
    await Identifier.update(data, { where: { id: id } })
}

const createIdentifier = async (data: IdentifierAttributes) => {
    await Identifier.create({...data})
}

const getSpecific = async (id: string) => {
   return await Identifier.findOne({ where: { id: Number(id) } })
}

export { createIdentifier, getSpecific, edit, deleteSpecificIdentifier, getAll }