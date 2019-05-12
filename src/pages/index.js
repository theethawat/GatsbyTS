import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "../assets/global.css"
import Title from "../components/title"
import { Link } from "gatsby"
export default () => (
  <div>
    <Title
      pagetitle="Theethawat Savastham"
      subtitle="<TheethawatSpace is the space of 'ธีร์ธวัช สวาสดิ์ธรรม'/> "
    />

    <div className="container">
      <h3 className="kanit ">What is Theethawat ?</h3>
      <div className="row">
        <div className="col sm-9">
          <div className="row">
            <div className="col sm-9">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
            </div>
            <div className="col sm-3" />
          </div>
        </div>
        <div className="col sm-3" />
      </div>
    </div>
  </div>
)
