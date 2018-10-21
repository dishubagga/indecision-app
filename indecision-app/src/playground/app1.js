class IndecisionApp extends React.Component {
    render(){
        const title = "IndecisionApp";
        const subtitle= "Give your Life to Computer";
        const options = ['one','two','three'];
        return (
            <div>
                <Header title={title} />
                <Options options={options}/>
            </div>
        )

    };
}

class Options extends React.Component {
    render() {
        return(
            <Option options={this.props.options}/>    
        )
    }

}
class Option extends React.Component {
    render(){
        return(
            <ol>
                {this.props.options.map((option)=> <li key={option}>{option}</li> )}
            </ol>
        )

    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    };
}

ReactDOM.render(<IndecisionApp />,document.getElementById("app"));