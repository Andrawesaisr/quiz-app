
import React from 'react';
import First from './component/first'
import Second from './component/second'
import './style.css'

export default function App(){
    const [mode,setMode]=React.useState(true)
    const [q,setQ]=React.useState([])
  
    function change(){
        setMode(mode=>!mode)
       
    }

    React.useEffect(() => {
          fetch("https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=boolean")
            .then(res=>res.json())
            .then(data=>setQ(data.results))
    }, [])

console.log(q)

return(
<div>
 
    {mode &&   <First 
    value={change}
 
  />}
    {!mode && <Second
    array={q}
    value={change}
    />}
</div>
)

}