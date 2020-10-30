import React, { useEffect,useContext } from 'react'
import Spinner from './spinner'
import {Link} from 'react-router-dom'
import Repos from './repos'
import Gitcontext from './context/Gitcontext'
function User({ match }) 
{
   
    const gitContext=useContext(Gitcontext)
    const {getUser,getUserrepo,loading,repo ,user}=gitContext
    useEffect( ()=>{
        getUser(match.params.login);
       getUserrepo(match.params.login);
        // //eslint-disable-next-line    
    },[]);
    
    
    
   
     
        const {name,login,email,followers,public_repos,following,html_url,avatar_url,blog,bio,location,hierable}=user
        
        if(loading)
        {
        return <Spinner />
           
    }
    else
    {
        return(
           
            <>
           <Link to="/" className="btn btn-light">back to search</Link>
           Hierable:{''}
           {hierable ? <i className="fa fa-check-circle text-success"></i> : <i className='fa fa-times-circle text-danger'></i> }
             <div className="card-deck">
             <div className='card ' >
                 <img  src={avatar_url} className="rounded-circle mx-auto d-block" style={{width:"150px"}} />
                 <h1>{name}</h1>
        <p className="text-muted">Location:{location}</p>

             </div>
             <div className="card ">
                 {bio && <>
                 <p>Bio:{bio}</p>
                 </>}
                 <a className="btn btn-dark  " href={html_url}>Visit GIT Profile</a>
                 {email && <h1>Email:{email}</h1>}
                 <h4 style={{fontSize:'calc(5px + 2vw)'}} className="text-muted">Username:{login}</h4>
                 {blog && <p className="text-muted m-1">Website: <a href={blog}>{blog}</a></p>}
             </div>
             </div>
             <div className="text-center m-3">
                 <span className="badge badge-primary d-inline">Followers:{followers} </span>
                 <span className="badge badge-success  d-inline">Following:{following} </span>
                 <span className="badge badge-danger  d-inline">Public Repos:{public_repos} </span>
             </div>
             <h1>New Repos</h1>
             <Repos repo={repo}/>
            </>
        )
    }
    }


export default User
