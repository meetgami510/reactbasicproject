//Hooks : it allows you to use state and other React feacture without writing a class . 
// does not works incides the class
// react hooks always be used at the top level of the React functions.

import React ,{useState} from 'react';

let count = 0;

const App = () => {
    const state = useState();

    const [count , setCount] = useState(0);

    const IncNum = () => {
        setCount(count+1);
    };
  
    return (
      <>
        <h1> {count} </h1>
        <button onClick = {IncNum}> Click Me</button>
      </>
    );
};

export default App;
