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
        this.state = {
            options : ['Thing one', 'Thing two', 'Thing four']
        };
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
                <AddOption />    
            </div>
        );
    } 
}
class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div> 
        );  
    }
}

class Action extends React.Component {
    
    render() {
        return (
            <div>
                <button 
                    onClick = {this.props.handlePick}
                    disabled = {!this.props.hasOptions}    
                >
                    What should i do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {/* <Option options={this.props.options}/> */}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option)=> <Option key={option} optionText={option} /> )
                }
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        console.log(this.props.options);
        return (
            <div>
                {/* {this.props.options.map((option)=><li key={option}>{option} </li>)} */}
                {this.props.optionText}
            </div>    
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        if(e.target.elements.input.value){
            alert("yes");
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>  
                    <input type="text" name="input"></input>
                    <button >Add Options</button>
                </form>
            </div>
        );

    }
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