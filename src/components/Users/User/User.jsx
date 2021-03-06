import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../../../assets/img/avatar.png';

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
        &:disabled {
            background-color: grey;
            opacity: 0.6;
        }
    }
`;

const UserInfoWrapper = styled.div`
    flex-grow: 2;    
    padding: 10px;
    border: 2px solid lightgreen;
    overflow: hidden;
    max-width: 100%;
`;

const UserName = styled.div`
    font-size: 20px;
    font-weight: 700;
    overflow: hidden;
    max-width: 100%;
    word-break: break-all;
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
    max-width: 100%;
    overflow: hidden;
    word-break: break-all;
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
                <NavLink to={`/profile/${props.userData.id}`}>
                    <img src={props.userData.photos.small ?? avatar} alt="Avatar" />
                </NavLink>
                
                {props.userData.followed
                    ? <button                    
                        onClick={handleUnfollow}
                        disabled={props.followingInProgress.some( item => item === props.userData.id)}
                      >Unfollow</button>
                    : <button
                        onClick={handleFollow}
                        disabled={props.followingInProgress.some( item => item === props.userData.id)}
                      >Follow</button>
                }
                
            </UserPhotoWrapper>
            <UserInfoWrapper>
                <UserName>
                    {props.userData.name} <span>({"props.userData.location.country"}, {"props.userData.location.city"})</span>
                </UserName>
                <UserStatus>{props.userData.status}</UserStatus>
            </UserInfoWrapper>            
        </UserWrapper>
    )
}

export default User;