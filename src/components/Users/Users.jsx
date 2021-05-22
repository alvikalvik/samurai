import User from "./User/User"
const Users = (props) => { 
    const usersArray = props.users.map( u => {
        return <User key={u.id}
                    userData={u}                
                    follow={props.follow}
                    unfollow={props.unfollow}                
                />;
    });

    const pagesCount = Math.ceil(props.totalCount / props.usersCountOnPage);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {            
        const aStyle = i === props.currentPage ? {color: 'red',} : null; 
        pages.push(<span key={i}> <a
                            href="#l"
                            onClick={ (e) => props.handlePageClick(e, i) }
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

export default Users;