import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Inputs from './component/Inputs';
import { useState } from 'react';

function App() {
  const dataArr=[]

const[Data,setdata]=useState(dataArr);
// console.log(data);

  return (
    <div className="App">
      <Header></Header>
      <Inputs data={Data} setdata={setdata} dataArr={dataArr} />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
