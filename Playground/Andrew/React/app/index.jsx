require('jquery');
/*global $*/
$.fn.DOM = function() {
    return this.get(0);
}

import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

console.log("JS -> Hello!");

var pageRoot = $(".supercontainer");
var div = $("<div/>");

pageRoot.append(div.clone()).append(div.clone());

var childOne = pageRoot.children().eq(0);
var childTwo = pageRoot.children().eq(1);

childOne.append($("<h1/>").text("HELLO WORLD!"));

var cbButton = function(number){
        console.log("Super Callback Val: " + number);
    }

class App extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            number : 0
        };
        this.cb = this.cb.bind(this);
    }
    
    cb(number){
        cbButton(number);
        this.setState({number});
    }
    
    render() {
        return (
            <div>
                <p> Hello React! {this.state.number}</p>
                <AwesomeComponent cbFunc={this.cb} />
            </div>
        );
    }
}


render(<App/>, childTwo.DOM());
