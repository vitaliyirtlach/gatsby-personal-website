import { IconType } from "@react-icons/all-files/lib"

// Simple Icons
import {SiAmazon} from "@react-icons/all-files/si/SiAmazon" 
import {SiAngular} from "@react-icons/all-files/si/SiAngular" 
import {SiVueDotJs} from "@react-icons/all-files/si/SiVueDotJs"
import {SiVisualstudiocode} from "@react-icons/all-files/si/SiVisualstudiocode"
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript"
import {SiPostgresql} from "@react-icons/all-files/si/SiPostgresql"
import {SiHtml5} from "@react-icons/all-files/si/SiHtml5"
import {SiReact} from "@react-icons/all-files/si/SiReact"
import {SiCodepen} from "@react-icons/all-files/si/SiCodepen"
import {SiCss3} from "@react-icons/all-files/si/SiCss3"
import {SiGatsby} from "@react-icons/all-files/si/SiGatsby"
import {SiGraphql} from "@react-icons/all-files/si/SiGraphql"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook"
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter"
import { SiStackoverflow } from "@react-icons/all-files/si/SiStackoverflow"
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify"
import { SiInstagram } from "@react-icons/all-files/si/SiInstagram"
import { SiKaggle } from "@react-icons/all-files/si/SiKaggle"
import { SiGmail } from "@react-icons/all-files/si/SiGmail"

interface IconsType {
    [key: string]: {
        icon: IconType,
        color?: string
    }
}

export const icons: IconsType = {
    "angular": {
        icon: SiAngular,
        color: "#B52E31"
    },
    "react": {
        icon: SiReact,
        color: "#00d8ff"
    },
    "vue": {
        icon: SiVueDotJs,
        color: "#42b883"
    }, 
    "gatsby": {
        icon: SiGatsby,
        color: "#663399"
    },
    "codepen": {
        icon: SiCodepen,
    },
    "css": {
        icon: SiCss3,
        color: "#2965f1"
    },
    "html": {
        icon: SiHtml5,
        color: "#e34c26 "
    },
    "typescript": {
        icon: SiTypescript,
        color: "#007acc"
    },
    "vscode": {
        icon: SiVisualstudiocode,
        color: "#0078d7 "
    },
    "postgresql": {
        icon: SiPostgresql,
        color: "#0064a5"
    },
    "amazon": {
        icon: SiAmazon,
        color: "#FF9900"
    },
    "graphql": {
        icon: SiGraphql,
        color: "#e535ab"
    },
    "github": {
        icon: SiGithub,
        color: "black"
    },
    "twitter": {
        icon: SiTwitter,
        color: "#1DA1F2"
    },
    "instagram": {
        icon: SiInstagram,
        color: "#405DE6"
    },
    "facebook": {
        icon: SiFacebook,
        color: "#4267B2"
    },
    "linkedin": {
        icon: SiLinkedin,
        color: "#2867b2"
    },
    "spotify": {
        icon: SiSpotify,
        color: "#1DB954"
    },
    "stackoverflow": {
        icon: SiStackoverflow,
        color: "#f48024"
    },
    "kaggle": {
        icon: SiKaggle,
        color: "#20beff"
    },
    "gmail": {
        icon: SiGmail,
        color: "#EA4335"
    }
}