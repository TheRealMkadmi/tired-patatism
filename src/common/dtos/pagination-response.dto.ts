export interface PaginatedResponseDto<T> {
  data: T[];
  totalCount: number;
  offset: number;
  limit: number;
  search: string;
}
