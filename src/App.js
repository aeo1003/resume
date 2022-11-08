import './App.css';

import MyHeader from './MyHeader';

import {DatosJson} from './contexto/Contexto';
import Datos2 from './Datos2';



function App() {
// <MyHeader />
  return (
    <>
      
      <DatosJson>
        <MyHeader />
        <Datos2 />
      </DatosJson>
    </>
  );
}

export default App;
