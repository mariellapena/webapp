import { Player } from './types';

export const MOCK_PLAYERS: Player[] = [
  {
    id: '17-1',
    name: 'Josean Coronado',
    category: 'Sub-17',
    metrics: { cmj: 34.2, rsi: 1.19, imtp: 19.5 },
    status: 'Reactivo-elastico',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.2386, huella_izquierdo: 'Pie Cavo', 
      ics_derecho: 0.2346, huella_derecho: 'Pie Cavo', 
      categoria_final: 'Pie Cavo', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/1_JoseanCoronado_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/1_JoseanCoronado_Derecha.png'
    }
  },
  {
    id: '17-2',
    name: 'Ivan Rios',
    category: 'Sub-17',
    metrics: { cmj: 34.5, rsi: 0.71, imtp: 10.9 },
    status: 'SSC moderado',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3266, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3666, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/2_IvanRios_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/2_IvanRios_Derecha.png'
    }
  },
  {
    id: '17-3',
    name: 'Itzel Sorjano',
    category: 'Sub-17',
    metrics: { cmj: 28.2, rsi: 1.13, imtp: 25.0 },
    status: 'Reactivo / bajo CEA',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.318, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3906, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/3_ItzelSorjano_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/3_ItzelSorjano_Derecha.png'
    }
  },
  {
    id: '17-4',
    name: 'Fabio Romero',
    category: 'Sub-17',
    metrics: { cmj: 38.2, rsi: 1.44, imtp: 19.6 },
    status: 'Reactivo / bajo CEA',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.403, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3488, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/4_FabioRomero_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/4_FabioRomero_Derecha.png'
    }
  },
  {
    id: '17-5',
    name: 'Gonzalo Maldonado',
    category: 'Sub-17',
    metrics: { cmj: 31.2, rsi: 0.81, imtp: 12.5 },
    status: 'QC: CMJ<SJ',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3697, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3746, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/5_Gonzalo Maldonado_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/5_Gonzalo Maldonado_Derecha.png'
    }
  },
  {
    id: '17-6',
    name: 'Luis Carmen',
    category: 'Sub-17',
    metrics: { cmj: 28.5, rsi: 0.96, imtp: 16.6 },
    status: 'QC: CMJ<SJ',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.47, huella_izquierdo: 'Pie Plano', 
      ics_derecho: 0.4517, huella_derecho: 'Pie Plano', 
      categoria_final: 'Pie Plano', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/6_LuisCarmen_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/6_LuisCarmen_Derecha.png'
    }
  },
  {
    id: '17-7',
    name: 'Sebastian Perez',
    category: 'Sub-17',
    metrics: { cmj: 36.5, rsi: 0.93, imtp: 9.2 },
    status: 'Explosivo CEA alto',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.5323, huella_izquierdo: 'Pie Plano', 
      ics_derecho: 0.4685, huella_derecho: 'Pie Plano', 
      categoria_final: 'Pie Plano', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/7_SebastianPerez_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/7_SebastianPerez_Derecha.png'
    }
  },
  {
    id: '17-8',
    name: 'Matias Flores',
    category: 'Sub-17',
    metrics: { cmj: 27.8, rsi: 0.98, imtp: 21.8 },
    status: 'SSC moderado',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3594, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.4055, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/8_MatiasFlores_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/8_MatiasFlores_Derecha.png'
    }
  },
  {
    id: '17-9',
    name: 'Samir Villegas',
    category: 'Sub-17',
    metrics: { cmj: 36.4, rsi: 0.61, imtp: 18.0 },
    status: 'Deficit reactivo',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3129, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3264, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/9_SamirVillegas_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/9_SamirVillegas_Derecha.png'
    }
  },
  {
    id: '17-10',
    name: 'Victor Hoyos',
    category: 'Sub-17',
    metrics: { cmj: 32.5, rsi: 0.85, imtp: 14.2 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3523, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3556, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/10_VictorHoyos_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/10_VictorHoyos_Derecha.png'
    }
  },
  {
    id: '17-11',
    name: 'Aaron Relayza',
    category: 'Sub-17',
    metrics: { cmj: 33.8, rsi: 0.92, imtp: 15.6 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.4048, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.4451, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/11_AaronRelayza_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/11_AaronRelayza_Derecha.png'
    }
  },
  {
    id: '17-12',
    name: 'Luis Panta',
    category: 'Sub-17',
    metrics: { cmj: 31.4, rsi: 0.78, imtp: 13.8 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.4187, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.4103, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/12_LuisPanta_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/12_LuisPanta_Derecha.png'
    }
  },
  {
    id: '17-13',
    name: 'Isaac Rodriguez',
    category: 'Sub-17',
    metrics: { cmj: 35.2, rsi: 1.05, imtp: 17.4 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3066, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3021, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/13_IsaacRodriguez_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/13_IsaacRodriguez_Derecha.png'
    }
  },
  {
    id: '17-14',
    name: 'Flavio Sanchez',
    category: 'Sub-17',
    metrics: { cmj: 30.6, rsi: 0.82, imtp: 12.8 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3313, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.4173, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/14_FlavioSanchez_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/14_FlavioSanchez_Derecha.png'
    }
  },
  {
    id: '17-15',
    name: 'George Camacho',
    category: 'Sub-17',
    metrics: { cmj: 34.8, rsi: 1.12, imtp: 18.2 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.2256, huella_izquierdo: 'Pie Cavo', 
      ics_derecho: 0.2369, huella_derecho: 'Pie Cavo', 
      categoria_final: 'Pie Cavo', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/15_GeorgeCamacho_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/15_GeorgeCamacho_Derecha.png'
    }
  },
  {
    id: '17-16',
    name: 'Alberto Elias',
    category: 'Sub-17',
    metrics: { cmj: 32.2, rsi: 0.88, imtp: 14.8 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3089, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3185, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_17/16_AlbertoElias_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/16_AlbertoElias_Derecha.png'
    }
  },
  {
    id: '17-17',
    name: 'Miroel Coronado',
    category: 'Sub-17',
    metrics: { cmj: 33.5, rsi: 0.95, imtp: 16.2 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.2334, huella_izquierdo: 'Pie Cavo', 
      ics_derecho: 0.3221, huella_derecho: 'Pie Normal', 
      categoria_final: 'Indeterminado', isDiscordant: true,
      imageIzquierda: '/huellas/Sub_17/17_MiroelCoronado_Izquierda.png',
      imageDerecha: '/huellas/Sub_17/17_MiroelCoronado_Derecha.png'
    }
  },
  {
    id: '16-1',
    name: 'Xavi Ccoñas',
    category: 'Sub-16',
    metrics: { cmj: 30.5, rsi: 0.85, imtp: 13.2 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.345, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3864, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/1_XaviCconas_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/1_XaviCconas_Derecha.png'
    }
  },
  {
    id: '16-2',
    name: 'Enzo Vasquez',
    category: 'Sub-16',
    metrics: { cmj: 31.8, rsi: 0.92, imtp: 14.6 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3644, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.558, huella_derecho: 'Pie Plano', 
      categoria_final: 'Indeterminado', isDiscordant: true,
      imageIzquierda: '/huellas/Sub_16/2_EnzoVasquez_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/2_EnzoVasquez_Derecha.png'
    }
  },
  {
    id: '16-3',
    name: 'Gabriel Lumba',
    category: 'Sub-16',
    metrics: { cmj: 29.2, rsi: 0.78, imtp: 11.4 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.5453, huella_izquierdo: 'Pie Plano', 
      ics_derecho: 0.484, huella_derecho: 'Pie Plano', 
      categoria_final: 'Pie Plano', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/3_GabrielLumba_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/3_GabrielLumba_Derecha.png'
    }
  },
  {
    id: '16-4',
    name: 'Adriano Valdiviezo',
    category: 'Sub-16',
    metrics: { cmj: 32.4, rsi: 0.95, imtp: 15.2 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.417, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.3953, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/4_AdrianoValdiviezo_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/4_AdrianoValdiviezo_Derecha.png'
    }
  },
  {
    id: '16-5',
    name: 'Leandro Chumbe',
    category: 'Sub-16',
    metrics: { cmj: 30.8, rsi: 0.82, imtp: 12.6 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.4353, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.4209, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/5_LeandroChumbe_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/5_LeandroChumbe_Derecha.png'
    }
  },
  {
    id: '16-6',
    name: 'Andreu Cristobal',
    category: 'Sub-16',
    metrics: { cmj: 31.5, rsi: 0.88, imtp: 13.8 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.3995, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.4387, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/6_AndreuCristobal_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/6_AndreuCristobal_Derecha.png'
    }
  },
  {
    id: '16-7',
    name: 'Andre Martinez',
    category: 'Sub-16',
    metrics: { cmj: 33.2, rsi: 1.02, imtp: 16.4 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.2966, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.2819, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/7_AndreMartinez_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/7_AndreMartinez_Derecha.png'
    }
  },
  {
    id: '16-8',
    name: 'Fabrizio Estacio',
    category: 'Sub-16',
    metrics: { cmj: 32.8, rsi: 0.98, imtp: 15.8 },
    status: 'Normal',
    hasPodography: true,
    podography: { 
      ics_izquierdo: 0.2835, huella_izquierdo: 'Pie Normal', 
      ics_derecho: 0.2669, huella_derecho: 'Pie Normal', 
      categoria_final: 'Pie Normal', isDiscordant: false,
      imageIzquierda: '/huellas/Sub_16/8_FabrizioEstacio_Izquierda.png',
      imageDerecha: '/huellas/Sub_16/8_FabrizioEstacio_Derecha.png'
    }
  },
];
