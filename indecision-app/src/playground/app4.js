class IndecisionApp extends React.Component {
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

const Header = (props) => {
    return(

        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>

    );
}

Header.defaultProps = {
    title:"Indecesion-app",
    subtitle:"Welcome to app"
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }       
    }
    handleAddOption(e) {
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

const Options = (props)=> {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
           {
                props.options.map((option)=> (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />    
                ))
           }
        </div>
    )
}

const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button 
                 onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >Remove</button>
        </div>
    )
}

ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));