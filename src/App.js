import React, { Component } from 'react'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut,faCheckSquare,faHammer,faUserAlt,faUsers, faThermometerHalf } from '@fortawesome/free-solid-svg-icons'
import { Progress } from 'reactstrap';
import GenericUtil from './util/GenericUtil';
import {LoadingCard} from './util/ComponentUtil';

import SearchBar from './SearchBar';
import UserDetail from './UserDetail';
import Client from './http/client';


library.add(faUserAstronaut,faHammer,faCheckSquare,faUserAlt,faUsers, faThermometerHalf);

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userInfoLoading: true,
      userInfo: null,
      userInfoRespMsg: null,
      currStatusLoading: true,
      currStatus: null,
      currStatusRespMsg: null
/*      {
        name: '',
        liquid: '',
        cpu: '',
        net: '',
        cpu_limit: {},
        net_limit: {},
        ram_quota: '',
        ram_usage: '',
        permissions: {},
        producers: []
      } 
*/
    };

    this.loadUserInfo.bind(this);
    this.loadCurrencyStatus.bind(this);
    this.loadUserInfo('philostratus');
    this.loadCurrencyStatus();
  }

  loadUserInfo(term){
    this.setState({userInfoLoading: true});
    Client.loadUserInfo(term, (error, res, body) => {
      let {eMsg, retObj} = Client.handleLoadUserInfo(error, res, body);
      this.setState({userInfoLoading: false, userInfoRespMsg: eMsg, userInfo: retObj});
    });
  }

  loadCurrencyStatus(){
    this.setState({currStatusLoading: true});
    Client.loadCurrencyStatus((error, res, body) => {
      let {eMsg, retObj} = Client.handleLoadCurrencyStatus(error, res, body);
      this.setState({currStatusLoading: false, currStatusRespMsg: eMsg, currStatus: retObj});
    })
  }

  renderCurrStatus(){
    if(!this.state.currStatusLoading && this.state.currStatus) {
      let {issuer, max_supply, supply} = this.state.currStatus;
      let fMaxSupply = GenericUtil.parseFloat(max_supply);
      let fSupply = GenericUtil.parseFloat(supply);
      let progress = ( fSupply / fMaxSupply ) * 100;
      console.log("progress", progress);
      return (
        <div className="currencyStatus">
          <h4 className="text-center"><FontAwesomeIcon icon="thermometer-half" /> Currency Status</h4>
          <p className="text-center">
            <strong>Issuer:</strong> {issuer} 
            &nbsp; <strong>Max Supply:</strong> {GenericUtil.numberWithCommas(fMaxSupply)} 
            &nbsp; <strong>Supply:</strong> {GenericUtil.numberWithCommas(fSupply)} 
          </p>
          <Progress value={progress} />
          <br/>
        </div>
      );
    } else {
      return (<LoadingCard />);
    }
  }

  render() {
    //console.log(permissions[0].required_auth.keys[0].key);

   //console.log(JSON.stringify(this.state.permissions[0]).substring(30,60));
   // var res = str.substring(30,str.length -20);
   // console.log(res);
    return (
      <div className="MyApp">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <h1 className="text-center"><FontAwesomeIcon icon="user-astronaut" /> EOSplorer <span className="beta">Beta</span></h1>
            <p className="text-center">Your EOS account explorer.</p>
            <SearchBar searchUserInfo={(term) => this.loadUserInfo(term)} errorMessage={this.state.userInfoRespMsg}/>
          </div>
        </div>
        
        <UserDetail userInfo={this.state.userInfo} loading={this.state.userInfoLoading}/>
        {this.renderCurrStatus()}

        <Footer />
      </div>
    );
  }


/* not being used so commenting out for now
validate(term){
    var i=0;
    var check=true;
    for (i=0; i<term.length; i++){
      if (!isNaN(term * 1)){
        }else{
          if (term === term.toUpperCase()) {
            check=false;
          }
    return check
    }
  }
}
*/


}


export default App
