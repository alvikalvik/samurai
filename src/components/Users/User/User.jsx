import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../../../assets/img/avatar.png';
import { followAPI } from '../../api/api';

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
        followAPI.unfollowUser(props.userData.id)
            .then( data => {    
                if (data.resultCode === 0) {
                    props.unfollow(props.userData.id);
                }             
            })
            .catch(err => console.log(err));
    };

    const handleFollow = () => {
        followAPI.followUser(props.userData.id)        
            .then( data => { 
                if (data.resultCode === 0) {
                    props.follow(props.userData.id);
                }             
            })
            .catch(err => console.log(err));
    };

    return (
        <UserWrapper>
            <UserPhotoWrapper>
                <NavLink to="/profile/2">
                    <img src={props.userData.photos.small ?? avatar} alt="Avatar" />
                </NavLink>
                
                {props.userData.followed
                    ? <button onClick={handleUnfollow}>Unfollow</button>
                    : <button onClick={handleFollow}>Follow</button>
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