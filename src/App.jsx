
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
 import { Button } from 'react-bootstrap';
 import Navbar from './comp'


function App() {
const[Note,setNote]=useState('')
const[list,setlist]=useState([])


const message=event=>{
setNote(event.target.value);

}




const click=()=>{
  
  setlist(a=>[...a,Note])
  


}


 const items=list.map((x,i)=>{
 return <div className='qq' > <h3> {x}</h3> <Button variant="primary" onClick={()=>{
  setlist((b)=>(b=b.filter((c,o)=>o!=i)));

}

}
>delete</Button> &nbsp; &nbsp;
 

  
 </div>
})

  return (

    <div>
                   <Navbar></Navbar> 

    <div id='full'>

      
      
      <div className='main'>
      

      <div>
        <h1>TO DO LIST</h1>
        <br />

        <input type="text" name="" id="inp"  value={Note} onChange={message}></input>
        &nbsp;
        <Button variant="primary"  onClick={click}>ADD TO DO</Button> 




       <div className="last" > {items} </div>
      </div>


    </div></div></div>

  )
}

export default App