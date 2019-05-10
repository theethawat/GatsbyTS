import React from "react"
import Header from '../components/header'
import {Link} from "gatsby"

export default () => (
    <div>
        <Header headerText="About"/>
        <h3>Hello this is about </h3>
        <Link to="/">Home</Link>
    </div>
)