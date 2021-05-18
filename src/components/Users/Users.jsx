import User from "./User/User"

const Users = (props) => {
    //Tempoary IF !!!
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'User 1',
                photo: 'https://www.byrdie.com/thmb/Jjj54SaUGDzwW7h5MxQI8hsNXnw=/1000x1000/filters:fill(auto,1)/Stocksy_txp67ff3d0fWrz200_Medium_3514532-crop-29154df0578b40309acce7c668e12faa.jpg',
                status: 'Status message',
                isFollowed: false,
                location: {
                    country: 'Ukraine',
                    city: 'Kiev'
                }
            },
            {
                id: 2,
                fullName: 'User 2',
                photo: 'https://www.bioid.com/wp-content/uploads/face-database-bioid.jpg',
                status: 'Status message 2',
                isFollowed: true,
                location: {
                    country: 'Ukraine',
                    city: 'Lviv'
                }
            },
            {
                id: 3,
                fullName: 'USER 3',
                photo: 'https://static-bebeautiful-in.unileverservices.com/Unlock-flawless-skin_MobileHomeFeature.jpg',
                status: 'Status message 3',
                isFollowed: false,
                location: {
                    country: 'USA',
                    city: 'MIAMI'
                }
            },        
        ]);
    }



    const usersArray = props.users.map( u => {
        return <User key={u.id}
                    userData={u}                
                    follow={props.follow}
                    unfollow={props.unfollow}                
                />;
    });
    return (
        <div>
            {usersArray}
        </div>
    );
}

export default Users;