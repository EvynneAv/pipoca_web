import { api } from '../api/index';
import { type Session } from '../types';
import { useUserStore } from '../stores/userStore';

class SessionService {
  constructor() {}

  async all(page = 1, pageSize = 24): Promise<Session[]> {
    const { data } = await api.get('/sessions', {
      params: {
        populate: ['movie', 'movie.poster'],
      },
    });
    console.log(data.data);
    return data.data;
  }
  async get(id: number): Promise<Session> {
    const { data } = await api.get(`/sessions/${id}`, {
      params: {
        populate: ['movie', 'movie.poster'],
      },
    });
    return data.data;
  }
  async delete(id: number): Promise<Session> {
    const userStore = useUserStore();
    const { data } = await api.delete(`/sessions/${id}`, {
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
    });
    return data.data;
  }
}

export const sessionService = new SessionService();
