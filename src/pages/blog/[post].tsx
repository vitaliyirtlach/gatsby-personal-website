import React, { useEffect, useState } from "react"
import { AppLayout } from "../../components/layout/layout"
import { IPost } from "../../shared/interfaces/IPost"
import PostStyles from "../../styles/Post.module.scss"
import Typography from "@material-ui/core/Typography"
import { getPost } from "../../shared/api/getPost"

const Post: React.FC = ({params}: any) => {
    const [post, setPost] = useState<IPost | null>(null)
    useEffect(() => {
        getPost(params.post).then(data => {
            if (!data) { window.location.href = "/" }
            else setPost(data)
            console.log(data)
        })
    }, [])
    return ( 
    <AppLayout title="Blog">
        <div className={PostStyles["post"]}>
            {
                !post ? <div>Loading post...</div> :
                <article className="uk-article">
                    <Typography variant="h3" gutterBottom>
                        {post.title}   
                    </Typography>
                    <p className="uk-article-meta">{post.date}</p>
                    <div className={PostStyles["tags"]}>
                        {post.tags.map(tag => 
                            <span className="uk-label">{tag}</span>
                        )}
                    </div>
                    {post.items.map(item => {
                        switch(item.type) {
                            case "text":
                                return <div key={item.content} className={`uk-text-lead uk-margin ${PostStyles["text"]}`}>{item.content}</div>
                            case "heading":
                                const anchor = item.content.replace(/\s/g, "_")
                                return (
                                    <Typography key={item.content} variant="h4" gutterBottom>
                                        <a id={anchor} href={`#${anchor}`} className={PostStyles["heading"]}>{item.content}</a> 
                                    </Typography>
                                )
                            case "image":
                                return (
                                <div className={PostStyles['image']} key={item.content}>
                                    <img src={item.content} />
                                </div>)
                        }
                    })}
                </article>
            }
        </div>
    </AppLayout> )
} 

export default Post 