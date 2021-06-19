import User from "./User/User"
import Pagination from "../common/Pagination/Pagination";

const Users = (props) => {     
    const usersArray = props.users.map( u => {
        return <User key={u.id}
                    userData={u}
                    followingInProgress={props.followingInProgress}                    
                    follow={props.follow}
                    unfollow={props.unfollow}                
                />;
    });

    return (
        <div>            
            <Pagination
                totalCount={props.totalCount}
                itemsCountOnPage={props.usersCountOnPage}
                currentPage={props.currentPage}
                postionSize={10}
                handlePageClick={props.handlePageClick}
            />
            {usersArray}                
        </div>            
    );
        
}

export default Users;