import React from "react";
//chapters
//level-1
import StateHook from "../hooks/level1/useState";
import LifeCycles from "../hooks/level1/useEffect";
import Ref from "../hooks/level1/useRef/Ref";
import Reducer from "../hooks/level1/useReducer/Reducer";
import { StateContextProvider } from "../hooks/level1/useReducer/context/StateContext";
import Callback from "../hooks/level1/useCallback/Callback";
import Memo from "../hooks/level1/useMemo/Memo";
function Core() {
  return (
    <div>
      <div>
        {/* Level-1 */}
        {/* <StateHook /> */}
        {/* <LifeCycles /> */}
        {/* <Ref /> */}
        {/* <StateContextProvider>
        <Reducer />
      </StateContextProvider> */}
        {/* <Callback /> */}
        <Memo />
      </div>
    </div>
  );
}

export default Core;
