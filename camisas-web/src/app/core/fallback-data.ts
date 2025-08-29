// info por defecto para cargar si falla el serv
export interface MarcaDTO { id_marca: number; descripcion: string; }
export interface EstanteDTO { id_estante: number; descripcion: string; }

export const DEFAULT_MARCAS: MarcaDTO[] = [
  { id_marca: 1, descripcion: 'Masterly' },
  { id_marca: 2, descripcion: 'Requena' },
  { id_marca: 3, descripcion: 'Morgan' },
  { id_marca: 4, descripcion: 'Nice' },
  { id_marca: 5, descripcion: 'John Holden' },
  { id_marca: 6, descripcion: 'John Jairo' },
  { id_marca: 7, descripcion: 'Cavalier' },
  { id_marca: 8, descripcion: 'Alexander' },
  { id_marca: 9, descripcion: 'Smith' },
  { id_marca: 10, descripcion: 'Galton' },
  { id_marca: 11, descripcion: 'Doger' },
];

export const DEFAULT_ESTANTES: EstanteDTO[] = [
  { id_estante: 1, descripcion: 'A1' }, { id_estante: 2, descripcion: 'A2' },
  { id_estante: 3, descripcion: 'A3' }, { id_estante: 4, descripcion: 'A4' },
  { id_estante: 5, descripcion: 'B1' }, { id_estante: 6, descripcion: 'B2' },
  { id_estante: 7, descripcion: 'B3' }, { id_estante: 8, descripcion: 'B4' },
  { id_estante: 9, descripcion: 'C1' }, { id_estante: 10, descripcion: 'C2' },
  { id_estante: 11, descripcion: 'C3' }, { id_estante: 12, descripcion: 'C4' },
];
