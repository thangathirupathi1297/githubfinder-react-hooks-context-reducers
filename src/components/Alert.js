import React,{useContext} from 'react'
import Gitcontext from './context/Gitcontext'

const Alert = () => {
    const gitContext=useContext(Gitcontext)
     const {alert}=gitContext
    return (
    alert !== null && (<div className='bg-muted text-muted' >
        <i className="fa fa-exclamation-triangle" style={{fontSize:'12px' }}/>
        {alert.msg}</div>)
    )
}

export default Alert
