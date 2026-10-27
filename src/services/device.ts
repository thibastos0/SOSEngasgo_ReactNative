import * as SecureStore from "expo-secure-store";
import * as Crypto from "expo-crypto";

async function save(deviceId: string) {
  await SecureStore.setItemAsync("device_id", deviceId);
}

export async function getOrCreateDeviceId() {
  let result = await SecureStore.getItemAsync("device_id");
  if (!result) {
    result = Crypto.randomUUID();
    await save(result);
  }
  return result;
}


export function generateEmergencyProtocol(deviceId: string) {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const sequence = `${hours}${minutes}${seconds}`;

    // Monta a string: SOC-YYYYMMDD-HHMMSS
    const protocolString = `SOC-${year}${month}${day}-${sequence}`;

    return {
        deviceId: deviceId,
        protocol: protocolString,
        createdAt: now.toISOString()
    };
}