import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { useRef } from "react";
import './App.css';

function App() {
  const pages = 4;

  const arrLoop = () => {
    const newArr = [];
    for (let i = 1; i <= pages; i++) {
      newArr.push(
        <center>
          <img
            key={i}
            className='picture'
            src={process.env.PUBLIC_URL + '/images/picture' + i + '.png'}
            alt=""
            />
          </center>
          );
    }
    return newArr;
  };

  const scrollRef = useRef();

  function down() {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }

  function top() {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  return (
    <div className="App" ref={scrollRef}>
      <h1>문버드 만화</h1>
      <h4>작가: 작가</h4>
      {arrLoop()}
      <div className='abs'>
        <button className='btn' onClick={top}><FaArrowAltCircleUp className="icon"/></button>
        <button className='btn' onClick={down}><FaArrowAltCircleDown className="icon"/></button>
      </div>
    </div>
  );
}
export default App;
