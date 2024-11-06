import { Camera, CameraAttributes } from "../sequelize/models/Camera"
import data from "../../dummyData/data.json"
import { NewCameraType } from "types/types";
const getDeviceCameras = async (id: string) => {
    const cams = data.cameras
    const savedCamera = await Camera.findAll({ where: { deviceId: Number(id), saved: true } });

    let cameras: NewCameraType[] = [...savedCamera];


    cams.forEach(camera => {
        const found = savedCamera.find(scam => scam.name === camera.name);
        if (!found) {
            cameras.push({
                cameraId: camera.camera_id,
                name: camera.name,
                activated: camera.activated,
                external_id: camera.external_id, saved: false
            });
        }
    });

    return cameras
}

const edit = async (camera: CameraAttributes, id: string) => {
    await Camera.update(camera, { where: { cameraId: id } })
}

const deleteCam = async (id: string) => {
    await Camera.destroy({ where: { cameraId: id } })
}

const addCam = async (camera: CameraAttributes) => {
    await Camera.create(camera)
}

export { getDeviceCameras, edit, deleteCam, addCam }