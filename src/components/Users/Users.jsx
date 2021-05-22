import {Component} from 'react';
import User from "./User/User"
import * as axios from 'axios';

class Users extends Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${this.props.currentPage}`)
            .then( response => {                
                this.props.setUsers(response.data);
            });
    }    

    handlePageClick = (e, i) => {        
        e.preventDefault();        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${i}`)
            .then( response => {                
                this.props.setUsers(response.data);
                this.props.setCurrentPage(i);
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

        const pagesCount = Math.ceil(this.props.totalCount / this.props.usersCountOnPage);

        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {            
            const aStyle = i === this.props.currentPage ? {color: 'red',} : null; 
            pages.push(<span key={i}> <a
                            href="#l"
                            onClick={ (e) => this.handlePageClick(e, i) }
                            style={aStyle}                            
                        >{i}</a> </span>);            
        }

        return (
            <div>
                {pages}
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