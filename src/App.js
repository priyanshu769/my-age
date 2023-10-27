import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState("")
  const [currentTime, setCurrentTime] = useState("Run")
  const dob = new Date('1998-06-06T00:00:00').getTime()
  const [timeDiff, setTimeDiff] = useState("Run")

  useEffect(() => {
    let myInterVal;
    myInterVal = setInterval(() => {
      setCurrentTime(new Date().getTime())
      setTimeDiff(currentTime - dob)
      setAge(timeDiff / 1000 / 60 / 60 / 24 / 365)
    }, 200)
    return () => clearInterval(myInterVal)
  }, [currentTime, dob, timeDiff])

  return (
    <div className="App">
      <div className="verticalCenter">
        <h1 className='headText'>Age:</h1>
        <h1 className='time'>{age.toString().slice(0, 13)}</h1>
      </div>
    </div>
  );
}

export default App;
