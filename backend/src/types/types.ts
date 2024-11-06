export type NewCameraType = {
    cameraId: number;
    name: string;
    activated: boolean;
    external_id: number | null;
    deviceId?: number;
    createdAt?: Date;
    ip?: string;
    port?: number;
    saved?: boolean;
}