import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { BrowserRouter } from "react-router-dom";
import { listMovie } from "../redux/actions/listMovie";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(listMovie());
  }, []);

  return (
    <div className="content">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
