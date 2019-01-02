import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare,faVoteYea} from '@fortawesome/free-solid-svg-icons'

library.add(faVoteYea,faCheckSquare);


class Producers extends Component {


  render() {
      return (

    <div className="container">
          <div className="row">
              <div className="col-sm-12">
                  <p className="text-center"><b><FontAwesomeIcon icon="vote-yea" /> {this.props.name}</b> has cast {this.props.producers.length} of 30 votes</p>
                  <table>
                      <thead>
                          <tr>
                              <th>Vote</th>
                              <th>Producer</th>
                          </tr>
                      </thead>
                      <tbody>
                        {this.props.producers.map(function(name, index){
                            return <tr key={"producerinfo_"+(index+1)}><td>{index+1}</td><td><FontAwesomeIcon icon="check-square" /> {name}</td></tr>;
                        })}
                      </tbody>
                  </table>
              </div>
            </div>
      </div>

);

  }
}

export default Producers
