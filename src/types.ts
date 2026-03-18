export interface PodographyData {
  ics_izquierdo: number;
  huella_izquierdo: string;
  ics_derecho: number;
  huella_derecho: string;
  categoria_final: string;
  isDiscordant: boolean;
  imageIzquierda?: string;
  imageDerecha?: string;
}

export interface Player {
  id: string;
  name: string;
  category: string;
  metrics: {
    cmj: number;
    rsi: number;
    imtp: number;
  };
  status: string;
  hasPodography: boolean;
  podography?: PodographyData;
}
