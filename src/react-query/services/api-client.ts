import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  // if we use a function here, we will lose the context of this cause when the react query calls the function,
  // it will call it with the context of the react query, so we need to use an arrow function(don't have a it's own this)
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (newRecord: T) => {
    return axiosInstance
      .post<T>(this.endpoint, newRecord)
      .then((res) => res.data);
  };
}

export default APIClient;
