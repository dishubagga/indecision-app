// const obj = {
//     name:"dishu",
//     getName(){
//         return this.name;
//     }
// }
// const Nama = obj.getName.bind(obj);
// console.log(Nama()); 


class IndecesionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : ['Thing one', 'Thing two', 'Thing four']
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
        this.setState((prevState) =>{
            return{
                options : []
            }
        })
    }
    handlePick(){
        console.log(this.state.options.length);
        this.setState(() => {
            const randomNum = Math.floor(Math.random()*this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option); 
        })
    }
    render() {
        const title="Indecision App";
        const subtitle = "Put your life in the hands of computer!";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>    
            </div>
        );
    } 
}

const Header = (props)=> {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div> 
    );      
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick = {props.handlePick}
                disabled = {!props.hasOptions}    
            >
                What should i do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {/* <Option options={this.props.options}/> */}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option)=> <Option key={option} optionText={option} /> )
            }
        </div>
    );
}
 const Option = (props)=>{
    return (
        <div>
            {/* {this.props.options.map((option)=><li key={option}>{option} </li>)} */}
            {props.optionText}
        </div>    
    );
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
        this.setState(()=>{
            return {error}
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>  
                    <input type="text" name="option"></input>
                    <button >Add Options</button>
                </form>
            </div>
        );

    }
}

const User = (props)=>{
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

ReactDOM.render(<IndecesionApp/>, document.getElementById("app"));