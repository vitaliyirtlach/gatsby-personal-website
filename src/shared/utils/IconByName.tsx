import React from "react"
import {icons} from "./icons"
interface Props {
    name: string,
    size?: number,
}
export const IconByName: React.FC<Props> = ({name, size = 24 }) => {
    const Icon = icons[name.toLowerCase()].icon
    const color = icons[name.toLowerCase()].color || "black"
    return <Icon size={size} color={color} style={{marginRight: "5px"}} />
}