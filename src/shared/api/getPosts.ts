import { IPost } from "../interfaces/IPost"

export const getPosts = async(): Promise<IPost[]> => {
    const res = await fetch("https://gatsby-personal-website-b20ab-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
    const posts = await res.json()
    if (!posts) return [] 
    return Object.keys(posts).map(id => {
        return { id, ...posts[id] }
    })
}