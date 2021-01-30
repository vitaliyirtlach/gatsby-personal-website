import { Link } from "gatsby"
import React from "react"
import { AppLayout } from "../components/layout/layout"

export default () => (
<AppLayout title="Page not found">
    Not Found! 404!
    <Link to="/">Back to home</Link>
</AppLayout>
)
