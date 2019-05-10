import React, { Component } from "react"
export default props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation" aria-label="main navigation">
        <a className="navbar-brand text-white prompt">TheethawatSpace</a>
    </nav> 
    <br/>
    <div className="container">
        <h4 className="prompt">{props.headerText}</h4>
    </div>
    
  </div>
)
