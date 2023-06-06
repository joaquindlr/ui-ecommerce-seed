import axios, { AxiosInstance } from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2FxdWluMUB0ZXN0LmNvbSIsInVzZXJuYW1lIjoiam9hcXVpbiB0ZXN0IiwiaXNBZG1pbiI6ZmFsc2UsImlzU2VsbGVyIjp0cnVlLCJpc0NsaWVudCI6ZmFsc2UsIm1hcmtldElkIjoxLCJpYXQiOjE2ODYwODczNzMsImV4cCI6MTY4NjE3Mzc3M30.16aFMlb-gk_h0beSrkR0s5pydBrQPp2akqPO9tFEBTQ";

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
