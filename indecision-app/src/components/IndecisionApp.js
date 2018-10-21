import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : props.options
        };
    }

    handleAddOption(option){
        if(!option){
            return "please enter valid value"
        }
        else if(this.state.options.indexOf(option) > -1){
            return "this option already exsist"
        }
        this.setState((prevState) =>{
            return{
                options : prevState.options.concat([option])
            }
        })
    }

    handleDeleteOptions(){
        this.setState(() => ({
            options:[]
        }))
    }

    handleDeleteOption(optionToRemove){
            console.log(optionToRemove)
            this.setState((prevState)=>({
                options : prevState.options.filter((option)=>{
                    return optionToRemove != option;
                })
            }))
    }
    render(){
        return(
            <div>
                <Header/>
                <AddOption handleAddOption = {this.handleAddOption}/>
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />

            </div>
        )
    }

}

IndecisionApp.defaultProps = {
    options:[]
}