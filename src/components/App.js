
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   const [name, setName] = useState("");
//   return (
//     <div>
//         {/* Do not remove the main div */}
    
//     <p>Enter your name:</p>
//       <input onChange={(e) => setName(e.target.value)}></input>
//       <p>{name}</p>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {

//   const [name, setName] = useState("");
//   return (
//     <div>
//         <p>Enter your name:</p>
//         <input onChange={(e) => setName(e.target.value)}></input>
//         <p>Hello, {name}!</p>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {

//   const [name, setName] = useState("");
//   return (
//     <div>
//         <p id="prompt">Enter your name:</p>
//         <input id="nameInput" onChange={(e) => setName(e.target.value)}></input>
//         <p id="greeting">Hello, {name}!</p>
//     </div>
//   )
// }

// export default App

import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [input,setInput] = useState('');
  const onInput = (e)=>{
      const {value} = e.target
    setInput(value)
  }
  const onClear = ()=>{
    setInput('')
  }
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Enter your name:</p>
    <input value={input} onChange={onInput} />
    {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
