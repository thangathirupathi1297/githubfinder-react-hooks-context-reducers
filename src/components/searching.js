import React, { useContext, useState } from 'react'
import Search from './Search'
import Gitcontext from './context/Gitcontext'

function  Searching(props)  {
    const gitContext=useContext(Gitcontext)
   const {users,clearUser,searchUsers, setAlerts}=gitContext
        const [text,setText]=useState('')
    
   const onSubmit =(e) =>
    {
        e.preventDefault();
        if(text === ""){
         setAlerts('enter somthing.....')

        }else
        {
        searchUsers(text)
           setText('')
        }
    }
   const onChange =(e) =>
    {
        setText(e.target.value)
        
    }
    
  
        
        return (
            <div>
               
               <form onSubmit={onSubmit} className="container-fluied">
                <input style={{width:'100%',display:'block',padding:'14px'}} 
                type="text" placeholder="Search Users..."
                 onChange={onChange} value={text} />
                <input style={{display:'block',marginLeft:'auto',marginRight:'auto'}} 
                type="Submit" value="Search" className="btn btn-dark btn-block" /> 
            </form>
            {users.length > 0 && (<button className=" m-2 btn btn-light btn-block" onClick={clearUser}>Clear</button>)}
           
            </div>
        )
    }


export default Searching
