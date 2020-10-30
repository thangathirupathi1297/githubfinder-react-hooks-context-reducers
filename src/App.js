import React, { useState,useContext } from 'react'

import './App.css';
import Home from '../src/components/pages/home'
import Navbar from './components/Navbar'
import User from './components/User'
import About from './components/pages/About'
import Reducer from './components/context/reduser';
import NotFound from './components/pages/NotFound';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Gitcontext from './components/context/Gitcontext'

function  App() 
{
  const gitContext=useContext(Gitcontext)
    
  
  
  
  
  
    // const [users,setUsers]=useState([]);
    // const [user,setUser]=useState({});
    // const [repos,setRepos]=useState([]);
    // const [loading,setLoading]=useState(false);
    // const [alert,setAlert]=useState(null) ; 
     
    

  
  // async componentDidMount(){
   

  //   this.setState({loading:true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   this.setState({users:res.data,loading:false})    
  // }
  //Git search
  // const searchUser = async text =>{
  //   setLoading(true)
  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   setUsers(res.data.items)
  //   setLoading(false)
   
  // }
  //get single user profile
  // const getUser = async login =>
  // {
  //   setLoading(true)
  //   const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   setUser(res.data)
  //   setLoading(false)
  // }
  ///Get user repo

  // const getUserrepo = async login =>
  // {
  //   setLoading(true)
  //   const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=all&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //  setRepos(res.data)
  //   setLoading(false)
  // }
  //clear
  // const clearUser=() =>setUsers([])
  //alert
  // const setAlerts =(msg) =>{
  //   setAlert({msg})
  //   setTimeout(() => setAlert(null),2000)
  // }


  
   
  
  return (
<Reducer>
    <Router>
     <div className="App">
     
                 <Navbar icon=" fa fa-github" title="Git-Finder"  />
    
                 <div className="container">
                 <Switch>
               
                <Route  exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component ={User} />
                <Route component={NotFound} />
                
                 </Switch>
                 </div>
    </div>
    </Router>
    </Reducer>
  );
}


export default App;
