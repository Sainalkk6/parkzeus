import { Device, DeviceAttributes } from "../sequelize/models/Device";

const createDevice = async (data: DeviceAttributes) => {
    await Device.create(data);
    return ("Data has been added successfully")
}


const getAllDevices = async () => {
    const result = await Device.findAll()
    return result
}

const deleteSpecificDevice = async (id: string) => {
    await Device.destroy({ where: { id: id } })
}

const edit = async (data: DeviceAttributes, id: string) => {
    await Device.update(data, { where: { id } })
}

export { createDevice, getAllDevices, deleteSpecificDevice, edit }