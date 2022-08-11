import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, param = {}) => {
    const respone = await instance.get(path, param);
    return respone.data;
};

export default instance;
