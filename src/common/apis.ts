import { AxiosPromise } from "axios";
import axios from 'axios'
import {message} from 'antd'

import nProgress from "nprogress";
export const makeGet = (url: string, data: any) => {
  nProgress.start()
  return axios.get(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  }).finally(()=>{
    nProgress.done()
  })
};
export const makePost = (url: string, data: any) => {
  nProgress.start()
  return axios.post(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  }).finally(()=>{
    nProgress.done()
  })
};
export const makeDel = (url: string, data: any) => {
  nProgress.start()
  return axios.delete(url, {
    params: {
      ...data,
    },
  }).then(res => res.data)
   .catch(err=>{
    message.error(err)
  }).finally(()=>{
    nProgress.done()
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
export const getUsers = (data?: any): AxiosPromise<any> => makeGet('/api/users', data);
export const loginUser = (url:string,data?: any): AxiosPromise<any> => makeGet(url, data);
export const getRights = (data?: any): AxiosPromise<any> => makeGet('/api/rights', data);
export const getChildren = (data?: any): AxiosPromise<any> => makeGet('/api/children', data);