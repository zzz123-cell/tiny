import React from "react";
import useVM from "@beisen/vm";
import Request from "@beisen/vm/lib/request";

import VM, { IState } from "./controllers/example";
import { IProps } from "./models/example";
import { useInit } from "./effects/example";
import Services from "./services/example";

const Example: React.FunctionComponent<IProps> = props => {
  //#region state
  const [state, vm] = useVM<IState, VM>({
    name: "CMP",
    model: {
      isLoading: false,
      data: "default data"
    },
    vm: VM,
    providers: [Services, Request]
  });

  //#endregion

  //#region Effects
  useInit(vm);

  //#endregion

  //#region EventHandlers
  const handleClick = () => {
    vm.setData("data was set");
  };

  //#endregion

  //#region render
  return (
    <div>
      {state.isLoading ? <div>loading...</div> : <div>{state.data}</div>}
      <button onClick={handleClick}>set</button>
    </div>
  );
  //#endregion
};
export default Example;
