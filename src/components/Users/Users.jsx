import {Component} from 'react';
import User from "./User/User"
import * as axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( response => {                
                props.setUsers(response.data.items);
            });
    }
    
    render() {
        const usersArray = this.props.users.map( u => {
            return <User key={u.id}
                        userData={u}                
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}                
                    />;
        });
        return (
            <div>
                {usersArray}
            </div>
        );
    }

    
}

// const Users = (props) => {
//     //Tempoary IF !!!
//     if (props.users.length === 0) {        
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then( response => {                
//                 props.setUsers(response.data.items);
//             });  
//     }
    
//     const usersArray = props.users.map( u => {
//         return <User key={u.id}
//                     userData={u}                
//                     follow={props.follow}
//                     unfollow={props.unfollow}                
//                 />;
//     });
//     return (
//         <div>
//             {usersArray}
//         </div>
//     );
// }

export default Users;