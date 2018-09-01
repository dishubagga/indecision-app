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
    render() {
        return (
            <div>
                <button>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {/* <Option options={this.props.options}/> */}
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
    render() {
        return (
            <div>
                <form >  
                    <input type="text" name="input"></input>
                    <button >Add Options</button>
                </form>
            </div>
        );

    }
}


const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(<IndecesionApp/>, document.getElementById("app"));