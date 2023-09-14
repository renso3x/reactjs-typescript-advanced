// Generic HTTP
import axios from "axios";

interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = axios.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return {
      request,
      cancel: () => controller.abort(),
    };
  }

  //  Since this is generic we need to add a generic id
  update<T extends Entity>(entity: T) {
    return axios.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
