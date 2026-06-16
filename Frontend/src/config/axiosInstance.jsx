import axios from 'axios'

const axiosInstance=axios.create({
    baseURL: "http://localhost:3000"
})


axiosInstance.interceptors.response.use({
    (response)=>{
        console.log("axios instance Response=>",result)
    },
    (err)=>{
        console.log("axios Instance Error=>",err)
    }
})



export default axiosInstance