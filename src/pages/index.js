import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/global.css'
import Header from "../components/header"
import { Link } from "gatsby"
export default () => (
  <div>
    <Header headerText="Theethawat Savastham" />
    <div className="container">
      <h3 className="prompt ">ธีร์ธวัช สวาสดิ์ธรรม</h3>
      <h4 className="">Computer Engineering Student, Prince of Songkla University</h4>
      <Link to="/about/">about</Link>
      <h2>Hello Tin </h2>
    </div>
  </div>
)
