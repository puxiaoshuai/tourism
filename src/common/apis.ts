import { AxiosPromise } from "axios";
import axios from 'axios'
import {message} from 'antd'

const handleResponse =(response:any)=>{
  if(response.status === 200){
    return response.data
  }else {
    return Promise.reject(`发生异常，状态码${response.status},${response.statusText}`);
  }
}
export const makeGet = (url: string, data: any) => {
  return axios.get(url, {
    params: {
      ...data,
    },
  }).then(res => handleResponse(res))
   .catch(err=>{
    message.error(err)
  })
};
export const makePost = (url: string, data: any) => {
  return axios.post(url, {
    params: {
      ...data,
    },
  }).then(res => handleResponse(res))
   .catch(err=>{
    message.error(err)
  })
};
export const makeDel = (url: string, data: any) => {
  return axios.delete(url, {
    params: {
      ...data,
    },
  }).then(res => handleResponse(res))
   .catch(err=>{
    message.error(err)
  })
};
export const makePut = (url: string, data: any) => {
  return axios.put(url, {
    params: {
      ...data,
    },
  }).then(res => handleResponse(res))
   .catch(err=>{
    message.error(err)
  })
};

//请求api
export const getSideMenus = (data?: any): AxiosPromise<any> => makeGet('/news/rights?_embed=children', data);