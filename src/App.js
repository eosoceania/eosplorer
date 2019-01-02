import React, { Component } from 'react'
import Basics from './Basics'
import Advanced from './Advanced'
import Producers from './Producers'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut,faCheckSquare,faHammer,faUserAlt,faUsers } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';

var request = require('request');

library.add(faUserAstronaut,faHammer,faCheckSquare,faUserAlt,faUsers);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userinfo: null 
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

  }

  loadUserInfo(term){
    //this.setState({loading: true});
    
    var options = {
      method: 'POST',
      url: 'https://api.eosnewyork.io/v1/chain/get_account',
      body: { account_name: term },
      json: true
    };

    request(options, function (error, response, body){
      if (error) throw new Error(error);
      this.setState({loading: false, userinfo: {
        name: body.account_name, liquid: body.core_liquid_balance, cpu : body.total_resources.cpu_weight, 
        net : body.total_resources.net_weight, cpu_limit: body.cpu_limit, net_limit: body.net_limit, 
        ram_quota: body.ram_quota, ram_usage: body.ram_usage, producers : body.voter_info.producers}});
      console.log(body);
    }.bind(this));

  }

  render() {

    let userinfo = this.state.userinfo;
    
    

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
            {this.state.loading && <Child />}
            <SearchBar searchUserInfo={this.loadUserInfo} />
          </div>
        </div>
        
        {(userinfo)? this.showUserInfo(userinfo) : <Child />}
          
        <Footer />
      </div>
    );
  }

  showUserInfo(userinfo){
    let cpuProgress=userinfo.cpu_limit.used / userinfo.cpu_limit.max * 100;
    let netProgress=userinfo.net_limit.used / userinfo.net_limit.max * 100;
    let producers = userinfo.producers;

    return (
      <div id="userinfo">
        <br /><hr/>
        <h4 className="text-center"><FontAwesomeIcon icon="users" /> General</h4>
        
        <Basics name={userinfo.name} liquid={userinfo.liquid} cpu={userinfo.cpu} net={userinfo.net}/>
        <Advanced ram={userinfo.ram_quota} ram_usage={userinfo.ram_usage} liquid={userinfo.liquid} 
          cpuProg={cpuProgress} netProg={netProgress} netObj={userinfo.net_limit} cpuObj={userinfo.cpu_limit}
          net={userinfo.net}/>
        <br/>

        <h4 className="text-center"><FontAwesomeIcon icon="hammer" /> Governance</h4>
        <Producers name={userinfo.name} producers={producers} />
        <br /><br />
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
const Child = () => (
    <img width="60px" height="60px" alt="Loading..." src={require('./assets/spinners/loading5.gif')} />
)


export default App
