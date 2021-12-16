import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1"
})


axiosInstance.interceptors.request.use(
    function (config){
        console.log(config)

        // config.params['language'] = "ar"
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.request.use(
    function (response){
        return response
    },
    function(error){
        return Promise.reject(error)
    }
)