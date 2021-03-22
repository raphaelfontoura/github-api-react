import './app.css';
import Routes from "./Routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
