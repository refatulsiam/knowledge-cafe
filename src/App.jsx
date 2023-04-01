import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './Components/Question/Question';


const App = () => {

  const [times, setTimes] = useState(0);
  const [texts, setTexts] = useState([]);


  const addReadingTime = (time) => {

    setTimes(times + time);

  }

  const addBookMark = (text) => {
    if (texts.includes(text)) {
      toast.error("The Blog Already Added !");
    } else {
      setTexts([...texts, text]);
    }
  };

  return (
    <div className="App container-fluid">
      <div>
        <Header></Header>
      </div>
      <div className='d-flex row mx-md-5 px-md-5 mt-md-3 mt-4'>
        <div className='col-md-8'>
          <Cards addReadingTime={addReadingTime} addBookMark={addBookMark}></Cards>
        </div>
        <div className='col-md-4'>
          <Cart times={times} texts={texts} ></Cart>
        </div>
      </div>
      <div className='mb-3 mx-md-5 px-md-5 mt-md-3'>
        <Question></Question>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );

};

export default App;