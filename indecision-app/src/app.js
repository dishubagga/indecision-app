console.log("app is running");

var template = <p>This is JSX from app.js</p>;

var app = {
    title: 'Indecision app',
    subtitle: 'hello',
    location: 'New York',
    options: [1,2,3]
};

let getLocation = (location)=>{
    if (location) {
        return <p>location: {location}!</p>;
    }
    else {
        return 'Unknown';
    }
}

var template = (
    <div>
        <h1>title: {app.title ? app.title : "No title"} </h1>
       
        <p>{app.subtitle ?  app.subtitle: "No subtitle"}</p> 
        {/* {app.subtitle && <p>{app.subtitle}</p>} */}

        {getLocation(app.location)}
        
        {app.options.length > 0 && <p>{app.options}</p>}
        
        <ol>
            <li>first</li>
            <li>second</li>
        </ol>

    </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);