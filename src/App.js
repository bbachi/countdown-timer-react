import './App.css';
import CountDownTimer from './CountDownTimer';

function App() {

  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default App;
