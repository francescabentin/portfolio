import '../styles/App.scss';
import Landing from './Landing';
import Principal from './Principal';
import Error from './Error';
import { Route, Routes } from 'react-router-dom'






function App() {

console.log("Bienvenido a mi portfolio!!!")

  return (


    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/principal" element={<Principal/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>


  );
};

export default App;