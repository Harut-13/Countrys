import axios from "axios";
import { getALLAC } from "../store/store";

const instance=axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const countriesAPI ={
    getAll(dispatch){
        instance.get('/all')
        .then(res => dispatch(getALLAC(res.data)))
    }, 
    getCouuntry(){
        instance.get(`/name/usa`)
        .then(res => console.log(res.data))
    }
}
