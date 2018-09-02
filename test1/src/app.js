const app ={
    title:"Indecision app",
    subtitle:"hello",
    location:"new York",
    options:[]
}

const onFormSubmit=(e) =>{
    e.preventDefault();
    let option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        render();
    }
}
const remove = ()=>{
    app.options=[];
    render();
}

const makeDecision = ()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum] || "kuch v nai";
    alert(option);
}

const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.subtitle}</h2>
            <p>{app.location}</p>
            <p>{!app.options.length>0 || app.options.length} </p>
            <p>{app.options.map((option)=> `hello the option is ${option}`)}</p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Button</button>
            </form>
            <br/>
            <button onClick={makeDecision}>Make decision</button>
            <br/>
            <button onClick={remove}>Remove all</button>
        </div>
    );
    ReactDOM.render(template,document.getElementById("app"));
}
render();

