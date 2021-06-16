import profileReducer, { addPost } from "./profileReduser";

const initialState = {        
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: "15"},
        {id: 2, message: "Hello World!!!", likesCount: "13"},
        {id: 3, message: "And hello to you from the World!", likesCount: "99"},
    ],
    profile: null,
    status: ''
};

it('length of posts should be incremented (New post should be added)', () => {
    const action = addPost("test text for new post", null, null);
    let newState = profileReducer(initialState, action);
    expect(newState.postsData.length).toBe(4);
});

it('message of new post should be correct', () => {
    const action = addPost("test text for new post", null, null);
    let newState = profileReducer(initialState, action);
    expect(newState.postsData[3].message).toBe("test text for new post");
});

