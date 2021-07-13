export type PostDataType = {
    id: number,
    message: string,
    likesCount: string
}
export type UserProfilePhotosType = {
    small: string | null
    large: string | null
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: UserProfilePhotosType
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: UserProfilePhotosType
    followed: boolean
}

export type DialogsUserDataType = {
    id: number,
    name: string
}
export type DialogsMessagesDataType = {
    id: number,
    message: string
}