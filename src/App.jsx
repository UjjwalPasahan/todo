import { useState } from 'react'
import './index.css'

function App() {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useState([])

  const addTodo = (e) => {
    setTodo(e.target.value)
  }

  const addTodoHandler = () => {
    setTasks([{todo},...tasks])
    console.log(tasks)
 
  }

  const handledel = (i)=>{
    const tasksCopy = [...tasks]
    tasksCopy.splice(i,1)
    setTasks(tasksCopy)
  }

  let render = <h4>no tasks</h4>

  if (tasks.length>0) {
    render = tasks.map((t,i)=>{
    return(
        <div className='flex items-center justify-center rounded-3xl'>
          <h4 className='bg-black text-white py-6 px-64 mb-[10px]'>{t.todo}</h4>
        <button onClick={()=>{handledel(i)}}>delete</button>
        </div>
        )
      })
  }

  

  return (
    <>
        <div  >
          <h2 className='bg-slate-400 text-center font-black text-2xl py-6 '>Todo list</h2>
        </div>

        <div className='flex items-center justify-center'>
          <form onSubmit={(e) => {
            e.preventDefault()
            setTodo('')
          }}>
            <input
            type='text'
            className='m-12 p-3 border-slate-950 border-2' 
              value={todo}
              onChange={addTodo}
              placeholder='Enter Task'
            />
            <button className='text-white bg-slate-800 py-2 px-6 rounded-full' onClick={addTodoHandler}>add todo</button>
          </form>
        </div>

        <div className='flex justify-center items-center'>
          <li className='list-none'>
          {render}
          </li>
          
        </div>
    </>
  )
}

export default App
