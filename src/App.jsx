import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const name = "Shaqayeq";
  const age = 21;
  const online = true;
  const Skills = ['Computer skills', 'English '];

  return (
      <div>
        <h1>Hello react</h1>
        <p>I am ,{name}</p>
        <p>I am ,{age}</p>
        <p>My situation is , {online ? "online" : "offline"}</p>
        <p>my favorite things</p>
        <ul>
          {
            Skills.map((skill,index)=>(
              <li key={index}>{skill}</li>
            ))
          }
        </ul>
      </div>  
  );
}

export default App