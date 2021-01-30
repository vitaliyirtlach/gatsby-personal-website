import { RouteComponentProps } from "@reach/router";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react"
import { AppLayout } from "../../components/layout/layout";
import { IPost } from "../../shared/interfaces/IPost";
import { getPosts } from "../../shared/api/getPosts";
import Typography from "@material-ui/core/Typography";

interface Props extends RouteComponentProps {}

const styles = {
    badges: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center"
    },
    subBadge: {
        marginLeft: "5px"
    },
    title: {
        fontSize: "1.5rem",
        color: "black"
    }
}


const Blog: React.FC<Props> = React.memo(({children}) => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => { 
        getPosts().then(posts => {
            setPosts(posts)
        }) 
    }, [])
    return ( 
    <AppLayout title="Blog">
        <h1>Blog</h1>
        {!posts.length ? 
        <div className="uk-margin uk-card uk-card-default uk-card-body">
            Check later...
        </div> : ""}
        {posts.map(post => 
            <Typography  key={post.id} variant="h5" gutterBottom>
                <Link className="uk-card uk-card-default uk-card-body uk-animation-fade" to={`/blog/${post.id}`}># {post.title}</Link>
            </Typography>
        )}
    </AppLayout> )
})

export default Blog