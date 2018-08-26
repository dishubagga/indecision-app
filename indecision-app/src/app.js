console.log("app is running");

var template = <p>This is JSX from app.js</p>;

var template = (
    <div>
        <h1>Indecision app</h1>
        <p>hello</p>
    
        <ol>
            <li>first</li>
            <li>second</li>
        </ol>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);