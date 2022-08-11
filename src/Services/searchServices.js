import * as instance from '~/utils/request';

export const get = async (q, type = 'less') => {
    try {
        const respone = await instance.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return respone.data;
    } catch (error) {
        console.log(error);
    }
};
