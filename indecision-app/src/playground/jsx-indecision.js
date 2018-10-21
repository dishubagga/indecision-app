const template1 = <p>This is JSX from app.js</p>;

const app = {
    title: 'Indecision app',
    subtitle: 'hello',
    location: 'New York',
    options: []
};

const getLocation = (location)=>{
    if (location) {
        return <p>location: {location}!</p>;
    }
    else {
        return 'Unknown';
    }
}

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option =  e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        renderApp();
    }
}

const removeAll = ()=>{
    app.options=[];
    renderApp();
}

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option); 
}

const appRoot = document.getElementById("app");


const renderApp = ()=>{
    let template = (
        <div>
            <h1>title: {app.title ? app.title : "No title"} </h1>
           
            <p>{app.subtitle ?  app.subtitle: "No subtitle"}</p> 
    
            {getLocation(app.location)}
            <p>{app.options.length>0 ? "Here are your options":"No options"}</p>
            <button disabled={!app.options.length > 0} onClick={onMakeDecision}>What Should i do?</button>
            <button onClick = {removeAll}>Remove all</button>
            
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }    
            </ol>
            
            <p>{app.options.length}</p>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button> Add Button </button>
            </form>
    
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
renderApp();

