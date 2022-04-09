import React, { useState } from "react";
import { myContext } from "./context/contextStore";
import { HOC } from "./Hoc/Hoc";
import { HocFun } from "./Hoc/HocFun";
import FormPage from "./pages/FormPage";
import ContextPage from "./pages/ContextPage";
import HOCPage from "./pages/HOCPage";
const ContextPageFake = HocFun(ContextPage);
const HOCPageFake = HOC(HOCPage);

const App = () => {
  const [contextValue, setContextValue] = useState({ theme: "blue" });

  return (
    <React.Fragment>
      <div style={{ border: `2px solid ${contextValue.theme}`, color: contextValue.theme, padding: "10px" }}>
        <myContext.Provider value={{ contextValue, setContextValue }}>
          <FormPage />
          <hr style={{ borderColor: contextValue.theme }} />
          <ContextPageFake />
          <hr style={{ borderColor: contextValue.theme }} />
          <HOCPageFake age={18} />
        </myContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default App;
