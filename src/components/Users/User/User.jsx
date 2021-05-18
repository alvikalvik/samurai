import styled from 'styled-components';

const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 10px;    
`;

const UserPhotoWrapper = styled.div`
    width: 100px;
    margin-right: 20px;
    img {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
    }
    button {
        display: block;
        margin: 10px auto;
        width: 80px;
        border: none;
        height: 25px;
        background-color: lightgreen; 
        color: #ffffff;       
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
`;

const UserInfoWrapper = styled.div`
    flex-grow: 2;    
    padding: 10px;
    border: 2px solid lightgreen;
    overflow: hidden;
`;

const UserName = styled.div`
    font-size: 20px;
    font-weight: 700;
    span {
        font-size: 14px;
        font-weight: 400;
    }
`;

const UserStatus = styled.div`
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #ffffff;
`;

const User = (props) => {
    const handleUnfollow = () => {
        props.unfollow(props.userData.id);
    };

    const handleFollow = () => {
        props.follow(props.userData.id);
    };

    return (
        <UserWrapper>
            <UserPhotoWrapper>
                <img src={props.userData.photo} alt="Avatar" />
                {props.userData.isFollowed
                    ? <button onClick={handleUnfollow}>Unfollow</button>
                    : <button onClick={handleFollow}>Follow</button>
                }
                
            </UserPhotoWrapper>
            <UserInfoWrapper>
                <UserName>
                    {props.userData.fullName} <span>({props.userData.location.country}, {props.userData.location.city})</span>
                </UserName>
                <UserStatus>{props.userData.status}</UserStatus>
            </UserInfoWrapper>            
        </UserWrapper>
    )
}

export default User;