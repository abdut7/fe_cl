import {  useState } from "react";


function Demo(){

    let [arr,setArr] = useState([{'id':1},{'id':3},{'id':5}])
    let handle = ()=>{
        setArr([{'id':1},{'id':2},{'id':3}])
    }
  
    return(
        <div>
            <h1>Demo</h1>
            {arr.map(value=>{
                return (<h1 key={value.id}>{value.id}</h1>);
            })}
            <button onClick={handle}>rr</button>
        </div>
    )
}

export default Demo;