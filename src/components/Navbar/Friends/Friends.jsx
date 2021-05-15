import styled from 'styled-components';

const FriendsHeader = styled.h3`
        display: block;
        text-align: center;
        margin: 50px 0 0 0;
        padding: 0;
    `;

const FriendsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 15px 0 0 0;
`;

const LinksListItem = styled.li`
    display: block; 
    overflow: hidden;        
`;

const LinksListA = styled.a`
    display: block;
    margin: 0 auto;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    transition: filter 0.6s;
    &:hover {
        filter: brightness(1.1);
    }
`;

const LinksListImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
`;

const LinksListText = styled.span`
    display: block;
    margin-top: 5px;       
`;

const Friends = ({friendsData}) => {     

    const friendsElements = friendsData
        .map( ({id, name, img}) => {
            return <LinksListItem key={id}>
                <LinksListA href="#f">
                    <LinksListImg src={img} alt={name} />
                    <LinksListText>{name}</LinksListText>
                </LinksListA>
            </LinksListItem>
        });   


    return (
        <>
            <FriendsHeader>Friends</FriendsHeader>
            <FriendsList>            
                {friendsElements}                                  
            </FriendsList>
        </>        
    );
};

export default Friends;

