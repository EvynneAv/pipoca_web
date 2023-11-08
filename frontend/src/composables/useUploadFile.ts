import { baseURL } from '../api/index';

export function getUploadURL(url: string) {
  return `${baseURL}${url}`;
}
