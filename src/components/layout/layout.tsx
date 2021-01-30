import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { 
  AppBar, 
  Avatar, 
  IconButton, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  SwipeableDrawer, 
  Toolbar, 
  Tooltip, 
  Typography 
} from "@material-ui/core"

import {BiMenu} from "@react-icons/all-files/bi/BiMenu"
import {BsHouse} from "@react-icons/all-files/bs/BsHouse"
import {CgCoffee} from "@react-icons/all-files/cg/CgCoffee"
import {IoChatbubbleEllipsesOutline} from "@react-icons/all-files/io5/IoChatbubbleEllipsesOutline"
import {SiAboutDotMe} from "@react-icons/all-files/si/SiAboutDotMe"
interface AppLayoutProps {
  title: string
}

const pageRoutingLinks = [
  {
    path: "/",
    name: "Home",
    icon: BsHouse
  },
  {
    path: "/blog",
    name: "Blog",
    icon: CgCoffee
  },
  {
    path: "/about",
    name: "About",
    icon: SiAboutDotMe
  },
  {
    path: "/contact",
    name: "Contact",
    icon: IoChatbubbleEllipsesOutline
  },
]

export const AppLayout: React.FC<AppLayoutProps> = ({ children, title = "Vitaliy Irtlach"  }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
      <>
      <Helmet>
        <title>{ title }</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.11/dist/css/uikit.min.css" />
      </Helmet>

      <AppBar position="static" color="default">
          <Toolbar>
              <IconButton onClick={() => setMenuOpen(true)} edge="start" color="inherit" aria-label="menu">
                  <BiMenu />
              </IconButton>
              <Tooltip title="My photo">
                <Avatar alt="Vitaliy Irtlach avatar" src="./images/about/63682036.jpg" />
              </Tooltip>
              <Typography color="inherit" variant="h6" style={{flexGrow: 1, marginLeft: 10}}>
                  Vitaliy Irtlach | { title }
              </Typography>
          </Toolbar>
      </AppBar>
      
      <SwipeableDrawer
            anchor={"left"}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            onOpen={() => setMenuOpen(true)}
      >
          <div style={{width: 250}}>
          {pageRoutingLinks.map(link => 
          <Link key={link.path} to={link.path}>
            <ListItem button key={link.name}>
              <ListItemIcon><link.icon size={24} color="black"/></ListItemIcon>
              <ListItemText> {link.name} </ListItemText>
            </ListItem>
          </Link>
          )}
          </div>
      </SwipeableDrawer>
      {title === "Home" ? children : 
      <div className="container">
         {children}
      </div> }
      
    </>
    )
}