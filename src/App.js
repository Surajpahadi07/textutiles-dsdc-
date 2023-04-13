import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type,msg)=>{
   setAlert({
    type : type,
    message : msg
   });
   setTimeout(()=>{
    setAlert(null)
   },1300)
  }

  const fun = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'light mode is enabled')
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success', 'dark mode is enabled')
    }
  }



  return (
    <>
      <Navbar mode={mode} light="light" handleMode={fun} title="Suraj" titleFirst="HOME" />
      <Alert alert={alert}></Alert>
      <Textform  mode={mode} showAlert ={showAlert}></Textform>
      
    </>
  );
};
export default App;
