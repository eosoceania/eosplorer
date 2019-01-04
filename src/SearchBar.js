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
        const isEnabled = this.canBeSubmitted();
        let errorMessage = this.props.errorMessage;

        return (
            <div id="searchbar" className="searchbar">
                {(errorMessage && <Notification msg={errorMessage} />)}
                {!isEnabled && <Notification msg="Account name must be 12 characters."/>}
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

const Notification = (props) => (
    <p style={aStyle}>{props.msg}</p>
  )
  