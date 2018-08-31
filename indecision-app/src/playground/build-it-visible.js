
let visibility = false;
const change = ()=> {
    visibility = !visibility;
    render();
}
const appRoot = document.getElementById("app");


const render = ()=>{
    const template = (
        <div>
            <h1>Visibility Toggle!</h1>
            <button onClick={change}>
                {visibility ? "Hidde details":"Show details"}
            </button>
            {visibility &&
                (<div>
                    <h3>these are details</h3>
                </div>)
            }
        </div>
    
    );
    ReactDOM.render(template,appRoot);

}
render();