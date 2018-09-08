const obj = {
    name:"dishu",
    getName(){
        return this.name;
    }
}
const Nama = obj.getName.bind(obj);
console.log(Nama()); 


class IndecesionApp extends React.Component {
    render() {
        const title="Indecision App";
        const subtitle = "Put your life in the hands of computer!";
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
    handlePick() {
        alert("handlePick");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert("removeall");
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                {/* <Option options={this.props.options}/> */}
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
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