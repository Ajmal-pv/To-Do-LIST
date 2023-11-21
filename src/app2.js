





import  './App.css';
import {useState}  from 'react'



function App() {
  const [Todos,setToDos]=useState([])
  const [Todo,setToDo]=useState('')
 

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2> whoops It's Tuesday </h2>
    </div>
    <div className="input">
      <input value={Todo} onChange={(e)=>{setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{
        setToDos([...Todos,{id:Date.now(), text:Todo,status:false}])
      }} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      { Todos.map((obj)=>{
     return( <div className="todo">
        <div className="left">
          <input value={obj.status} onChange={(e)=>{
               setToDos(Todos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
               }))
          }} type="checkbox" name="" id="" />
          <p> {obj.text} </p>
        </div>
        <div className="right">
        
        <i class="fas fa-edit"></i>
          <i onClick={()=>{
            setToDos(Todos.filter(obj2=>{
              if(obj2.id!==obj.id){
                    return obj2
              }
            }))
          }}  className="fas fa-times"></i>
        </div>
      </div>  )
      })
      }
    </div>



   
  </div>
 
);
}
   
 

export default App;

