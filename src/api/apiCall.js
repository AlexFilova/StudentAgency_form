import {apiOptions, apiUsers} from './api';

export const fetchData = async () => {
          try {
            const res = await apiOptions.get('/options');
            if(!res.status){
              throw Error()
            } return res.data;  
          } catch (error) {
            console.log(error.message);
          }
  };

export const postData = async (data) => {
          try {
            const res = await apiUsers.post('/users', data);
            if(!res.status){
              throw Error()
            } else {
              window.location.href = 'http://localhost:3000/done';
            }
              return res.data;
          } catch (error) {
            console.log(error.message);
            window.location.href = 'http://localhost:3000/no_data_sent';
          }
  };