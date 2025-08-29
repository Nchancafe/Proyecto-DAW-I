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
  contenido: Camisa[];
  paginaActual: number;
  tamanio: number;
  totalElementos: number;
  totalPaginas: number;
  primera: boolean;
  ultima: boolean;
  vacia: boolean;
}

// ---- para el evio del form en crear camisa
export interface CamisaCreate {
  descripcion: string;
  id_marca: number;
  color: string;
  talla: 'S' | 'M' | 'L' | 'XL';
  manga: 'Corta' | 'Larga';
  stock: number;
  precio_costo: number;
  precio_venta: number;
  id_estante: number;
  estado: boolean;  
}

export interface Marca   { id_marca: number; descripcion: string; }
export interface Estante { id_estante: number; descripcion: string; }

