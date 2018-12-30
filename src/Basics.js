import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Alert, Progress } from 'reactstrap';
import "./App.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faUser,faWallet,faBatteryFull,faGlobe,faBatteryHalf } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare,faUser,faWallet,faBatteryFull,faGlobe,faBatteryHalf);

var bootstrap = require('bootstrap');

class Basics extends Component {


  render() {
      return (


            <div className="container" id="basics">
    <div className="row">
      <div className="col-sm-3">
            <div className="hero-widget well well-sm">
                  <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                    <CardTitle className="text"><FontAwesomeIcon icon="user" /> {this.props.name}</CardTitle>
                    <CardSubtitle className="text-muted">Account name</CardSubtitle>
                  </Card>
              </div>
      </div>
          <div className="col-sm-3">
              <div className="hero-widget well well-sm">
                  <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                    <CardTitle className="text"><FontAwesomeIcon icon="wallet" /> {this.props.liquid}</CardTitle>
                    <CardSubtitle className="text-muted">Liquid</CardSubtitle>
                  </Card>
              </div>
      </div>
          <div className="col-sm-3">
              <div className="hero-widget well well-sm">

                  <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                    <CardTitle className="text"><FontAwesomeIcon icon="battery-half" /> {this.props.cpu}</CardTitle>
                    <CardSubtitle className="text-muted">CPU staked</CardSubtitle>
                  </Card>

              </div>
        </div>
          <div className="col-sm-3">
              <div className="hero-widget well well-sm">

                  <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                    <CardTitle className="text"><FontAwesomeIcon icon="globe" /> {this.props.net}</CardTitle>
                    <CardSubtitle className="text-muted">NET staked</CardSubtitle>
                  </Card>


              </div>
      </div>
    </div>
    </div>


);

  }
}

export default Basics
