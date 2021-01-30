import { IPost } from "../interfaces/IPost"

export const getPost = async (id: string): Promise<IPost> => {
    const res = await fetch(`https://gatsby-personal-website-b20ab-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`)
    const data = await res.json()
    if (!data) return data
    return {...data, id}
}