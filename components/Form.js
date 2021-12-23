import React, { useState } from 'react'
import firebase from '../firebase'
import TodoList from './TodoList';




function Form() {
    
    const [title, setTitle] = useState('');
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    }
    const createTodo = ()=>{
        const todoRef = firebase.database().ref('Todo')
        const todo = {
            title,
            
        }
        todoRef.push(todo)
    }
    return (
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-chat">
   <div className="flex sm:items-center justify-center py-3 border-b-2 border-gray-200 bg-green-800">
      <div className='op '>MEECHAT</div>
      <div className="flex items-center space-x-4">
        
      
      </div>
  
   </div>

   <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
     <TodoList/>

   </div>

   <div className="border-t-2 border-gray-200 px-4 pt-4 mb-24 sm:mb-24">
      <div className="relative flex">
         <span className="absolute inset-y-0 flex items-center">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
               </svg>
            </button>
         </span>
       
         <input type="text" placeholder="Write Something" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3" onChange={handleOnChange} value={title}/>
 
         <div className="absolute right-0 items-center inset-y-0  sm:flex">
         
     
            <button  onClick={createTodo} type="button" className="inline-flex items-center justify-center  rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
            </button>
         </div>
      </div>
   </div>
</div>

        
            

     
    )
}


export default Form
