export const MANEUVER_ASSETS: Record<string, any> = {
    'sos_initial_banner.gif': require('../../assets/images/sos_initial_banner.gif'),
    'manobra_lactente.gif': require('../../assets/images/manobra_lactente.gif'),
    'heimlich_adulto.gif': require('../../assets/images/heimlich_adulto.gif'),
    'heimlich_infantil.gif': require('../../assets/images/heimlich_infantil.gif'),
    'heimlich_gestante.gif': require('../../assets/images/heimlich_gestante.gif'),
    'rcp_emergencia.gif': require('../../assets/images/rcp_emergencia.gif'),
    'rcp_adulto.gif': require('../../assets/images/rcp_adulto.gif'),
    'rcp_infantil.gif': require('../../assets/images/rcp_infantil.gif'),
    'rcp_lactente.gif': require('../../assets/images/rcp_lactente.gif'),
    'desobstrucao_vias_aereas.gif': require('../../assets/images/desobstrucao_vias_aereas.gif'),
    'desobstrucao_vias_aereas_infantil.gif': require('../../assets/images/desobstrucao_vias_aereas_infantil.gif'),
    'desobstrucao_vias_aereas_lactente.gif': require('../../assets/images/desobstrucao_vias_aereas_lactente.gif'),
    'audio_error.png': require('../../assets/images/audio_error.png'),
};

export const getManeuverAsset = (imageName: string | null | undefined): any => {
    if (!imageName || !MANEUVER_ASSETS[imageName]) {
        return MANEUVER_ASSETS['sos_initial_banner.gif']; 
    }

    const cleanName = imageName.trim().toLowerCase();

    if (!MANEUVER_ASSETS[cleanName]) {
        console.warn(`Asset "${cleanName}" não encontrado em MANEUVER_ASSETS. Exibindo banner padrão.`);
        return MANEUVER_ASSETS['sos_initial_banner.gif'];
    }

    return MANEUVER_ASSETS[cleanName];
};