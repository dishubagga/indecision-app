import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp.js'

class OldSyntax{
    constructor(){
        this.name="Mike"
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `hello my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
console.log(oldSyntax.getGreeting());

class NewSyntax{
    name = 'dishu';
    getGreeting = () =>{
        return `my name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const getGreeting1 = newSyntax.getGreeting;
console.log(getGreeting1());
console.log(newSyntax.getGreeting());






ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));