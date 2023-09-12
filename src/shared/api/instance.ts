import axios from "axios";
import {BASE_URL} from "./consts";

export const baseInstance = axios.create({
    baseURL: BASE_URL
})