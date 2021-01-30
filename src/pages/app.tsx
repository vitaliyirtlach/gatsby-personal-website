import React from "react"
import { Router } from "@reach/router"
import Home from "./index"
import About from "./about"
import Blog from "./blog"
import Contact from "./contact"

export default (): JSX.Element =>
    <Router basepath="/app">
        <Home path="/" />
        <About path="/about" />
        <Blog path="/blog" />
        <Contact path="/blog" />
    </Router>