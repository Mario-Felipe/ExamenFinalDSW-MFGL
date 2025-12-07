import { EmpleoResponse } from './empleo.response';

export class EmpleoListResponse {
  empleos!: EmpleoResponse[];
  totalCount!: number;
  page!: number;
  pageSize!: number;
}
