import React,{useState} from 'react'

// var today = new Date();

// var todtim = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

const App1 = () => {
    let newTime  = new Date().toLocaleTimeString();
    // const [todtim , setCount] = useState(0); 
    // const mytime = () => {
    //     setCount(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());
    // }
    const [ctime , setCount] = useState(newTime);

    const gettime = () => {
        setCount(new Date().toLocaleTimeString());
    }
  return (
    <>
        <h1>{newTime}</h1>
        <button onClick = {gettime}>
            For today time
        </button>
    </>

  )
}

export default App1;
