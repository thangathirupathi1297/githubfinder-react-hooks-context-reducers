import React,{useReducer} from 'react'
import Gitcontext from './Gitcontext'
import axios from 'axios'

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const initialstate = {
    users:[],
    user:{},
    repo:[],
    alert:null,
    loading:false
};
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'Searchuser':
            return {
                ...state,
                users:action.payload,
                loading:false
            }
            case 'Getuser':
                return {
                    ...state,
                    user:action.payload,
                    loading:false
                }
                case 'GetRepo':
                    return {
                        ...state,
                        repo:action.payload,
                        loading:false
                    }
                    case 'Clearuser':
                        return {
                            ...state,
                            users:[],
                            loading:false
                        }
                        case 'SetAlert':
                            return {
                                ...state,
                                alert:action.payload,
                                loading:false
                            }
                            case 'Removealert':
                                return {
                                    ...state,
                                    alert:null,
                                    loading:false
                                }
                case 'Loading':
                return{ 
                    ...state,
                    loading:true
               
                   
                }
                default:
                    return state
    }
};
const Reduser = (props) => {
   
  
    const [state,dispatch]=useReducer(reducer,initialstate);


    //Search user..........
    const searchUsers = async text =>
    {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        
        dispatch({
            type:'Searchuser',
            payload:res.data.items
            
        })
      };
//Get single user profile
const getUser = async login =>
{
  setLoading()
  const res = await axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${ githubClientSecret}`);
  dispatch({
    type:'Getuser',
    payload:res.data

  })
}
//get repos
const getUserrepo = async login =>
{
  setLoading()
  const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=all&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

  dispatch( 
  {
      type:'GetRepo',
      payload:res.data
  })
}
//Clear users
const clearUser=() =>{dispatch({type:'Clearuser'})}

//set Alert
const setAlerts =(msg) =>{
    dispatch( 
        {
            type:'SetAlert',
            payload:{msg}
        })
    setTimeout(() => dispatch({ type: 'Removealert' }),2000)
  }


      //Set loading
      const setLoading=()=>{dispatch({type:'Loading'})}

    return (
        <Gitcontext.Provider
        value={
            {
                users:state.users,
                loading:state.loading,
                user:state.user,
                repo:state.repo,
                alert:state.alert,
                searchUsers,
                getUser,
                setLoading,
                getUserrepo,
                clearUser,
                setAlerts
            }
        } >
         {props.children}
         
            
        </Gitcontext.Provider>
    )
};

export default Reduser
