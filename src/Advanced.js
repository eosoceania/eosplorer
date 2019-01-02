import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardText, CardTitle, CardSubtitle, Progress } from 'reactstrap';
import "./App.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faMicrochip,faTachometerAlt);


class Advanced extends Component {


  render() {
      return (

            <div className="container" id="basics">
    <div className="row">
      <div className="col-sm-3">
            <div className="hero-widget well well-sm">
                  <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                    <CardTitle className="text"><FontAwesomeIcon icon="microchip" /> {this.props.ram} Bytes</CardTitle>
                    <CardSubtitle className="text-muted">RAM</CardSubtitle>
                  </Card>
              </div>
      </div>
          <div className="col-sm-3">
              <div className="hero-widget well well-sm">

              <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                <CardTitle className="text"><FontAwesomeIcon icon="tachometer-alt" /> {(this.props.ram_usage / this.props.ram * 100).toFixed(2)} %</CardTitle>
                <CardText>
                  <Progress color="primary" value={this.props.ram_usage / this.props.ram * 100} />
                </CardText>
                <CardSubtitle className="text-muted">RAM - {this.props.ram_usage/1000} kB / {this.props.ram/1000} kB</CardSubtitle>
              </Card>

              </div>
      </div>
          <div className="col-sm-3">
              <div className="hero-widget well well-sm">

              <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                <CardTitle className="text"><FontAwesomeIcon icon="tachometer-alt" /> {this.props.cpuProg.toFixed(2)} %</CardTitle>
                <CardText>
                  <Progress color="success" value={this.props.cpuProg} />
                </CardText>
                <CardSubtitle className="text-muted">CPU - {this.props.cpuObj.used/1000} ms / {this.props.cpuObj.max/1000} ms</CardSubtitle>
              </Card>


              </div>
        </div>
          <div className="col-sm-3">
              <div className="hero-widget well well-sm">
              <Card body style={{ backgroundColor: '#f9f9f9', borderColor: '#333' }}>
                <CardTitle className="text"><FontAwesomeIcon icon="tachometer-alt" /> {this.props.netProg.toFixed(2)} %</CardTitle>
                <CardText>
                  <Progress color="warning" value={this.props.netProg} />
                </CardText>
                <CardSubtitle className="text-muted">NET - {this.props.netObj.used/1000} kB / {this.props.netObj.max/1000} kB</CardSubtitle>
              </Card>

              </div>
      </div>
    </div>
    </div>


);

  }
}

export default Advanced
