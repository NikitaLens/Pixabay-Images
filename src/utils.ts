import { API_KEY, PAGE_SIZE } from './constants/config';

export const getUrl = (search: string, page: number) =>
  `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(search)}&page=${page}&per_page=${PAGE_SIZE}`;
