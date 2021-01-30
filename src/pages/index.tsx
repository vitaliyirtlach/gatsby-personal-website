import { RouteComponentProps } from "@reach/router"
import React from "react"
import { AppLayout } from "../components/layout/layout"
import "./index.scss"
import HomeStyles from "../styles/Home.module.scss"
import { Tooltip } from "@material-ui/core"
import { IconByName } from "../shared/utils/IconByName"
import { socialLinks } from "../shared/utils/socialLinks"

// @ts-ignore
import Fade from 'react-reveal/Fade';


interface Props extends RouteComponentProps {}

const App: React.FC<Props> = (): JSX.Element => {
  return ( 
  <AppLayout title="Home">
    <div className={HomeStyles["welcome"]}>
        <Fade left>
            <div className={HomeStyles["headings"]}>
                <div style={{textAlign: "center", fontSize: '100%', padding: 5}}>
                    <div>👋  Welcome!</div>
                    <div>I am fullstack developer</div>
                </div>
                <div className={HomeStyles["social"]}>
                    {socialLinks.map(link => 
                        <Tooltip key={link.href} title={link.href}>
                            <a target="blank" href={link.href || "black"}>
                                <IconByName name={link.icon} size={24}/>
                            </a>
                        </Tooltip>
                    )}
                </div>
            </div>
        </Fade>
        <Fade right>
            <Tooltip title="Image with my laptop">
                <img src="./mainimage.jpg" />
            </Tooltip>
        </Fade>
    </div>
  </AppLayout>
  )
}

export default App