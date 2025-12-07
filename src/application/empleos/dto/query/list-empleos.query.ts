export class ListEmpleosQuery {
  page = 1;
  pageSize = 10;
  searchTerm?: string;
  categoria?: string;
  empresa?: string;
  nivel?: string;
  areaTrabajo?: string;
  minSueldo?: number;
  maxSueldo?: number;
}
