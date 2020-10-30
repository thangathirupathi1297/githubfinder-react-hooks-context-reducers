import React, {useContext} from 'react'
import Useritem from '../components/Useritem'
import Spinner from '../components/spinner'
import Gitcontext from './context/Gitcontext'
function Users(props)  {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          user:[
    //        {
    //             id: 1,
    //             avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",
    //             html_url:"https://github.com/mojombo",
    //             login:"mojombo",
    //        },
    //        {
    //         id: 2,
    //         avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4",
    //         html_url:"https://github.com/defunkt",
    //         login:"defunkt",
    //         },

    //          ]
    //     }
    // }
    const gitContext=useContext(Gitcontext)
    const {users ,loading}=gitContext
    if(loading){
        return(
            <Spinner />

        )
    }else
    {
        return (

            <div style={userstyle} className="users">
                {
                
                users.map(user => ( <Useritem key={user.id} user={user}></Useritem>))}
                
            </div>
                )
        }
    }
const userstyle={
    display:"grid",
    gridTemplateColumns:'repeat(2, 1fr)',
    gridGap:'1rem'
    
};

export default Users
