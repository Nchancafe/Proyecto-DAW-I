export interface Camisa {
  id: number;
  descripcion: string;
  marca: string;
  color: string;
  talla: string;
  manga: string;
  stock: number;
  precioCosto: number;
  precioVenta: number;
  estante: string;
  estado: string;
}

export interface ApiResponseCamisa {
  data: {
    contenido: Camisa[];
    paginaActual: number;
    tamanio: number;
    totalElementos: number;
    totalPaginas: number;
    primera: boolean;
    ultima: boolean;
    vacia: boolean;
  };
}

