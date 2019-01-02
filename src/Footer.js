import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare,faUser,faWallet,faBatteryFull,faGlobe,faBatteryHalf } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare,faUser,faWallet,faBatteryFull,faGlobe,faBatteryHalf);

class Footer extends Component {


  render() {
      return (
        <div className="jumbotron text-center bottom">
          <p>Made with ❤ by <a href="https://www.eosoceania.io">EOS Oceania</a></p>
          <p>Contribute on <a href="https://github.com/eosoceania/eoslist">Github</a> or message us on <a href="https://t.me/joinchat/IB6xJg7tmo7v4knEJyQRSw">Telegram</a>.</p>
          <p>Connect with us: <a href="https://t.me/joinchat/IB6xJg7tmo7v4knEJyQRSw">Telegram</a> | <a href="https://discord.gg/eAdBZBv">Discord</a> | <a href="https://steemit.com/@eosoceania">Steemit</a>.</p>
        </div>
      );

  }
}

export default Footer
