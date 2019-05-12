import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "../assets/global.css"
import Header from "./header"

export default props => (
  <div>
    <Header />
    <div className="thp-title-1 d-flex  justify-content-center">
      <div className="align-self-center">
        <h1> {props.pagetitle} </h1>
        <h3 className="kanitlight"> {props.subtitle} </h3>
      </div>
    </div>
  </div>
)
