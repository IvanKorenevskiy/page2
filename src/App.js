import React from "react";
import 'antd/dist/antd.css';
import "./App.scss";
import Header from "./components/header/header";
import Transfer from "./components/transfer/transfer";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Transfer/>
      <Footer/>
    </div>
  );
}


export default App;
