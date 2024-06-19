import React from "react";
import Todos from "./components/Todos";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Todos />
        <h3>Total Todos:</h3>
      </div>
    </RecoilRoot>
  );
}

export default App;
