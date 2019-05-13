import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "../assets/global.css"
import Title from "../components/title"
import firebase from "firebase"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBziLwjuiOea2awTRZ05r-WqFzl2zWgfNI",
  authDomain: "th-webpage.firebaseapp.com",
  databaseURL: "https://th-webpage.firebaseio.com",
  projectId: "th-webpage",
  storageBucket: "th-webpage.appspot.com",
  messagingSenderId: "706455690961",
  appId: "1:706455690961:web:e61b26930afd93c2",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      introduction: "",
      photo: "",
    }
  }

  componentDidMount() {
    let database = firebase.database()
    database
      .ref("/profile")
      .once("value")
      .then(snapshot => {
        this.setState({
          introduction: snapshot.val() && snapshot.val().intro,
          photo: snapshot.val() && snapshot.val().photo,
        })
      })
  }

  render() {
    return (
      <div>
        <Title
          pagetitle="Theethawat Savastham"
          subtitle="<TheethawatSpace is the space of 'ธีร์ธวัช สวาสดิ์ธรรม'/> "
        />

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img
                className="img-fluid"
                alt="Theethawat Photo"
                src={this.state.photo}
              />
            </div>
            <div className="col-sm-8">
              <h3 className="kanit ">What is Theethawat ?</h3>
              <p className="kanitlight">{this.state.introduction}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default index
