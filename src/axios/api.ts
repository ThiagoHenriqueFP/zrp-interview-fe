import axios from 'axios';

export class ApiService {
  public static instance = axios.create({baseURL: "https://poke-api-1.onrender.com"})
}