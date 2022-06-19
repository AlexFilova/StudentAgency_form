import api from './api';

export const fetchData = async () => {
  try {
    const res = await api.get('/data');
    if(!res.status){
      throw Error()
    }
        return res.data;
    
  } catch (error) {
    console.log(error.message);
  }
  };