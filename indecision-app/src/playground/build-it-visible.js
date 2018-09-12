class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            console.log(this.state.visibility);
            return {
                visibility : !prevState.visibility
            }
        })

    }
    render(){ 
        return(
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? "Hide" : "Show"}
                    </button>
                    {this.state.visibility && (
                        <div>
                            <h1>Hey here are some</h1>
                        </div>
                    )}
                </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));


// let visibility = false;
// const change = ()=> {
//     visibility = !visibility;
//     render();
// }
// const appRoot = document.getElementById("app");


// const render = ()=>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle!</h1>
//             <button onClick={change}>
//                 {visibility ? "Hidde details":"Show details"}
//             </button>
//             {visibility &&
//                 (<div>
//                     <h3>these are details</h3>
//                 </div>)
//             }
//         </div>
    
//     );
//     ReactDOM.render(template,appRoot);

// }
// render();