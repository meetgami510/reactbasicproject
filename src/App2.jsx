import React,{useState} from 'react'

const App2 = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime , setCount] = useState(time);

    const update = () => {
        setCount(new Date().toLocaleTimeString());
    }
    setInterval(update,1000);
  return (
    <>
        <h1>{ctime}</h1>
        {/* <h1>this is meet gami</h1> */}
    </>
  )
}

export default App2;
