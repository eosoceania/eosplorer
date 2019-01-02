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
        
        return (
            <div id="searchbar">
                {!isEnabled && <Notification />}
                <form className="text-center" onSubmit={()=> this.props.searchUserInfo(this.state.term)}>
                <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
                <button className="btn btn-primary" disabled={!isEnabled} type="submit">Get Account Info</button>
                </form>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
    }
    
    // jack: I don't understand the logic here, must it be 12 length, no more no less?
    canBeSubmitted() {
        //return (this.state.term.length === 12);
        return true;
    }


}

const Notification = () => (
    <p style={aStyle}>Invalid account name.</p>
  )
  