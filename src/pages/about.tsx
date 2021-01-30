import { Typography } from "@material-ui/core"
import { RouteComponentProps } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { AppLayout } from "../components/layout/layout"
import { IconByName } from "../shared/utils/IconByName"
import AboutStyles from "../styles/About.module.scss"

interface Props extends RouteComponentProps {}

const imageQuery = graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
`
const technologies = ["react", "gatsby", "typescript", "graphql", "postgresql"]

const AboutPage: React.FC<Props> = ({ children }): JSX.Element => {
    const images = useStaticQuery(imageQuery)
    return (
        <AppLayout title="About">
            <h1 className="uk-heading-divider">About</h1>
            <article className="uk-article">
                <p className="uk-text-lead">
                    Hi my name is Vitaliy! I am {new Date().getFullYear() - 2005} years old. I am from Ukraine. My hobby is doing sport like football, volleyball and others. I started learn programming on JavaScript in January 2020 but I interested in it since 2018.  
                </p>
                <p>There are my some photos</p>
                <ul className={AboutStyles["images"]}>
                  {images.allFile.edges.map(({node}: any) => 
                      <li>
                        <img key={node.publicURL} src={node.publicURL} alt={node.name} />
                      </li>
                  )}
                </ul>
                <Typography variant="h5" gutterBottom>
                  My favorite technologies right now are:
                </Typography>
                <ul className="uk-list uk-list-divider">
                  {technologies.map(technology => {
                    return <li><IconByName name={technology} /> {technology.toUpperCase()}</li>
                  })}
                </ul>
                
            </article>
        </AppLayout>
    )
}

export default AboutPage