export interface Marca {
  id: number;
  descripcion: string;
  estado: string;
}

export interface ApiResponseMarca {
  contenido: Marca[];
  paginaActual: number;
  tamanio: number;
  totalElementos: number;
  totalPaginas: number;
  primera: boolean;
  ultima: boolean;
  vacia: boolean;
}
