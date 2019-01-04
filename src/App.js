import React, { Component } from 'react'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut,faCheckSquare,faHammer,faUserAlt,faUsers } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';
import UserDetail from './UserDetail';

var request = require('request');

library.add(faUserAstronaut,faHammer,faCheckSquare,faUserAlt,faUsers);

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userInfo: null,
      userInfoRespMsg: null,
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
    this.loadUserInfo('philostratus');
    this.handleUserInfoReponse.bind(this);
  }

  loadUserInfo(term){
    this.setState({loading: true});
    
    var options = {
      method: 'POST',
      url: 'https://api.eosnewyork.io/v1/chain/get_account',
      body: { account_name: term },
      json: true
    };

    //console.log("load user info, handleUserInfoReponse: ", handleUserInfoReponse);
    request(options, this.handleUserInfoReponse.bind(this));

  }

  handleUserInfoReponse(error, response, body){
    let errorMsgStr = "An unexpected error occured while getting user detail please try again later.";
    if (error) { this.setState({loading: false, userInfoRespMsg: errorMsgStr, userInfo: null}); }
    console.log("request result returned", response, "App:", this);      
    if (response.statusCode === 200) {
      let userInfo =  {
        name: body.account_name, liquid: body.core_liquid_balance, cpu : body.total_resources.cpu_weight, 
        net : body.total_resources.net_weight, cpu_limit: body.cpu_limit, net_limit: body.net_limit, 
        ram_quota: body.ram_quota, ram_usage: body.ram_usage, producers : body.voter_info.producers
      };
      this.setState({loading: false, userInfoRespMsg: null, userInfo});
      //console.log("userInfo: ", userInfo);
    } else {  
      this.setState({loading: false, userInfoRespMsg: errorMsgStr, userInfo: null});
      //console.log("error getting response: ", response.statusCode, body);
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
            <br />
            <SearchBar searchUserInfo={(term) => this.loadUserInfo(term)} errorMessage={this.state.userInfoRespMsg}/>
          </div>
        </div>
        
        <UserDetail userInfo={this.state.userInfo} loading={this.state.loading}/>

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
