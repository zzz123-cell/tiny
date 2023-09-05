import { Injectable, Injector } from "@beisen/vm";
import Request from "@beisen/vm/lib/request";

const url = "http://10.129.7.191:7300/mock/5ff80c7140a755002021ec3f/example";

@Injectable()
class Services {
  async requestData(data): Promise<any> {
    const resp = await Injector.resolve<Request>(Request).get<any>(url, {
      data: data
    });
    return resp;
  }
}

export default Services;
