const VERCEL_PROXY_URL = process.env.EXPO_PUBLIC_VERCEL_PROXY_URL;
const APP_VALIDATION_TOKEN = process.env.EXPO_PUBLIC_APP_VALIDATION_TOKEN;

interface EmergencyPayload {
  protocol_id: string;
  latitude: number;
  longitude: number;
  device_id?: string;
}

export async function sendEmergencyWhatsApp(payload: EmergencyPayload) {

    const formattedPayload = {
        protocol_id: payload?.protocol_id || "unknown_protocol",
        latitude: payload?.latitude ?? 0,
        longitude: payload?.longitude ?? 0,
        device_id: payload?.device_id || "unknown_device",
    };

    try {
        const response = await fetch(`${VERCEL_PROXY_URL}/api/whatsapp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-App-Local-Token': APP_VALIDATION_TOKEN || '',
        },
        body: JSON.stringify( formattedPayload ),
        });

        if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Falha ao acionar socorro via WhatsApp:', error);
        throw error;
    }
}