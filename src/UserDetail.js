import React, {Component} from 'react';
import Basics from './Basics'
import Advanced from './Advanced'
import Producers from './Producers'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer,faUserAlt,faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faHammer,faUserAlt,faUsers);

export default class UserDetail extends Component {

    render(){
        let {userInfo, loading} = this.props;    

        if(loading){
            return (<LoadingCard />);    
        } else if (userInfo) {
            return this.showUserInfo(userInfo);
        } else {
            //show nothing
            return (<div id="userinfo"><br/></div>);
        }
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


}

const LoadingCard = () => (
    <div id="loading" className="loading">
        <img width="60px" height="60px" alt="Loading..." src={require('./assets/spinners/loading5.gif')} />
    </div>
)
