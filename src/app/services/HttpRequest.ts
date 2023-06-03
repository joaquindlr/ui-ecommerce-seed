import axios, { AxiosInstance } from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2FxdWluMUB0ZXN0LmNvbSIsInVzZXJuYW1lIjoiam9hcXVpbiB0ZXN0IiwiaXNBZG1pbiI6ZmFsc2UsImlzU2VsbGVyIjp0cnVlLCJpc0NsaWVudCI6ZmFsc2UsIm1hcmtldElkIjoxLCJpYXQiOjE2ODU4MzQ3ODgsImV4cCI6MTY4NTkyMTE4OH0.2nhJB4o2TqI7oHcEaCDeo8tfaQKxrY2n7oPONLVrDRk";

const httpRequest: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpRequest.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpRequest;
