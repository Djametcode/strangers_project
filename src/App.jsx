import { Fragment } from "react";
import Headers from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <Fragment>
      <div className=" sticky top-0">
        <Headers />
      </div>
      <div className=" flex justify-center items-center h-screen w-screen bg-slate-300 font-geologica">
        <div className=" flex justify-center items-center">
          <Login />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
