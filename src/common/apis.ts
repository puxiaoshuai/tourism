import { AxiosPromise } from "axios";
import axios from 'axios'
import {message} from 'antd'

export const makeGet = (url: string, data: any) => {
  return axios.get(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  })
};
export const makePost = (url: string, data: any) => {
  return axios.post(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  })
};
export const makeDel = (url: string, data: any) => {
  return axios.delete(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  })
};
export const makePut = (url: string, data: any) => {
  return axios.put(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  })
};
export const makeUpdate = (url: string, data: any) => {
  return axios.patch(url, {...data}).then(res => res.data)
   .catch(err=>{
    message.error(err)
  })
};

//请求api
export const getSideMenus = (data?: any): AxiosPromise<any> => makeGet('/api/rights?_embed=children', data);
export const updateRights = (url:string,data?: any): AxiosPromise<any> => makeUpdate(url, data);
export const getRoles = (data?: any): AxiosPromise<any> => makeGet('/api/roles/', data);
export const updateRoles = (url:string,data?: any): AxiosPromise<any> => makeUpdate(url, data);