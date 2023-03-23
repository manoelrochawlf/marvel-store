export const errorInterceptor = (error) => {

    if(error.message === 'Network Error') {
        return Promise.reject(new Error('Conection Error'));
    };
    if(error.response?.status === 401) {
    };
    
    return Promise.reject(error);
}