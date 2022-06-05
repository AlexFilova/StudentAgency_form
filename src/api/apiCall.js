import api from './api';

export const fetchData = async () => {
    const res = await api.get('/data');
    return res.data;
  };