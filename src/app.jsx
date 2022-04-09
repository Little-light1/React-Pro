import React, { useState } from "react";
import FormPage from "./pages/FormPage";
import ContextPage from "./pages/ContextPage";
import { myContext } from "./context/contextStore";
const ContextPageFake = React.memo(() => <ContextPage />);
const App = () => {
  const [contextValue, setContextValue] = useState({ theme: "blue" });

  return (
    <React.Fragment>
      <div style={{ border: `2px solid ${contextValue.theme}`, color: contextValue.theme, padding: "10px" }}>
        <myContext.Provider value={{ contextValue, setContextValue }}>
          <FormPage />
          <hr />
          <ContextPageFake />
        </myContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default App;
