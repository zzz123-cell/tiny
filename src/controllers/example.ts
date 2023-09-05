import { Action, Flow, Injector } from "@beisen/vm";
import Services from "../services/example";

export interface IState {
  data: any;
  isLoading: boolean;
}

class VM {
  @Flow({
    pending: (state: IState) => {
      state.isLoading = true;
    },
    fulfilled: (state: IState, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    rejected: (state: IState) => {
      state.isLoading = false;
    }
  })
  public async init(data): Promise<any> {
    const resp = await Injector.resolve<Services>(Services).requestData(data);
    return resp.data;
  }

  @Action()
  public setData(state: IState, action) {
    state.data = action.payload;
  }
}

export default VM;
