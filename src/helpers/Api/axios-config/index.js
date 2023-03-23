import axios from "axios";
import CryptoJS from "crypto-js";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const marvelApiUrl = "https://gateway.marvel.com/v1/public/";
const marvelPublicKey = "5f16f757bb9f6b02a49bdabf278cbd95";
const marvelPrivateKey = "1e04714572aa80f5b737f591b75b6e65ea01c166";

const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + marvelPrivateKey + marvelPublicKey).toString();

const Api = axios.create({
  baseURL: marvelApiUrl,
  params: {
    ts: ts,
    apikey: marvelPublicKey,
    hash: hash
  }
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export default Api;