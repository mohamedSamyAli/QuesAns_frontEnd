import {appurl} from "./Url"
const axios = require('axios')

const instance = axios.create({
    baseURL: appurl,
    headers: {
        'content-Type':'application/json',
        'Authorization':"Bearer "+localStorage.getItem("token")
}
  });

  export default instance;