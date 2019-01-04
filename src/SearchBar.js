import React, {Component} from 'react';


const aStyle={color:'red'};

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term : 'philostratus'
        }
    }

    render(){
        let errorMessage = this.props.errorMessage;

        return (
            <div id="searchbar" className="searchbar">
                {(errorMessage && <Notification msg={errorMessage} />)}
                {!this.canBeSubmitted() && <Notification />}
                <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
                <button className="btn btn-primary" disabled={!isEnabled} 
                    onClick={()=> this.props.searchUserInfo(this.state.term)}>Get Account Info</button>
                
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
    }
    
    // jack: I don't understand the logic here, must it be 12 length, no more no less?
    canBeSubmitted() {
        return (this.state.term.length === 12);
        //return true;
    }


}

const Notification = (msg="Invalid account name.") => (
    <p style={aStyle}>{msg.msg}</p>
  )
  