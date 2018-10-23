import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error : undefined
    }
    handleAddOption = (e)=> {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value="";
        this.setState(()=>{
            return( {error} )
        })
    }
    render(){
        return(
            <div>
                {this.state.error}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}