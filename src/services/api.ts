import axios from 'axios'

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/'
const apiKey = '73a70d052907f8020f59ffd206209d48'

const baseURL = urlBaseMarvel + 'characters?apikey=' + apiKey

export const api = axios.create({ baseURL })
