import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "../assets/global.css"
import Title from "./title"

export default ({ children }) => (
  <div>
    <Title />
    <div className="container">
      <h3 className="kanit" />
      <h5 className="kanit is-secondary">Writing By Theethawat Savastham</h5>
      {children}
    </div>
  </div>
)
