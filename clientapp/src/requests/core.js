import axios from "axios";
import {LOCAL_STORAGE_NAMES} from "../constants/localStorageNames"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE_NAMES.JWT_TOKEN)}`,
        'Content-Type': 'application/json',
    }
});

export const getRequest = (url, params = null, options = null) => 
    axiosInstance.get(url, { params, ...options });
  
export const postRequest = (url, data, params = null, options = null) =>
    axiosInstance.post(url, data, { params, ...options });

export const putRequest = (url, data, params = null, options = null) =>
    axiosInstance.put(url, data, { params, ...options });

export const patchRequest = (url, data, params = null, options = null) =>
    axiosInstance.patch(url, data, { params, ...options });

export const deleteRequest = (url, params = null, options = null) =>
    axiosInstance.delete(url, { params, ...options });
