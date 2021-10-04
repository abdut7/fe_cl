import axios from "axios";
import swal from 'sweetalert'

function axiosCall(method,url,data = {},customerHeader = {}){
    let header = {
            ...{'Content-Type':'application/json', Authorization:window.localStorage.getItem('user_token')},
            ...customerHeader
        }

        //Authorization:localStorage.getItem('user_token')
    return axios.request({
        baseURL:'http://65.0.249.156:3000',
        url,
        method,
        data,
        headers:header
    }).then(res=>{
        return res;
    }).catch(res=>{
        if(res.response)
            swal(res.response.statusText,res.response.data.errCommon[0].strMessage)
        if(!res.response)
            swal("Error","Oops something went wrong");
        return Promise.reject(res)
    })
}

export function get(url,data = {},customerHeader = {}){
    return axiosCall('GET',url,data,customerHeader);
}

export function post(url,data = {},customerHeader = {}){
    return axiosCall('POST',url,data,customerHeader);
}

export function put(url,data = {},customerHeader = {}){
    return axiosCall('PUT',url,data,customerHeader);
}

export function del(url,data = {},customerHeader = {}){
    return axiosCall('DELETE',url,data,customerHeader);
}

export default function custom(method,url,data = {},customerHeader = {}){
    return axiosCall(method,url,data,customerHeader)
}
