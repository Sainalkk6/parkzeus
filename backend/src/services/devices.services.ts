import { Device, DeviceAttributes } from "../sequelize/models/Device";

const createDevice = async (data: DeviceAttributes) => {
    try {
        await Device.create(data);
        return ("Data has been added successfully")
    } catch (error) {
        return error
    }
}


const getAllDevices = async () => {
    const result = Device.findAll()
    return result
}

const deleteSpecificDevice = async (id: string) => {
    await Device.destroy({ where: { id: id } })
}

const edit = async (data: DeviceAttributes, id: string) => {
    await Device.update(data, { where: { id } })
}

export { createDevice, getAllDevices, deleteSpecificDevice, edit }