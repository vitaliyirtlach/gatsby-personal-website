interface IPostText {
    type: "text"
    content: string
}
interface IPostHeading {
    type: "heading"
    content: string
}

interface IPostImage {
    type: "image"
    content: string
}

export interface IPost {
    title: string
    date: string
    tags: string[]
    id: string
    items: Array<IPostText | IPostHeading | IPostImage>
}