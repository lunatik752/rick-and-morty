import React from 'react';
import style from  './App.module.scss';
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className={style.app}>
<Header/>
    </div>
  );
}

export default App;
