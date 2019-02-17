import Api from '@/services/Api';


export default {
    addProduct (params) {
            return Api().post('products', params,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
    getProduct (id) {
        return Api().get(`products/${id}`);
    }
};