console.log("app is running");

// var template = <p>This is JSX from app.js</p>;

// var app = {
//     title: 'Indecision app',
//     subtitle: 'hello',
//     location: 'New York',
//     options: [1,2,3]
// };

// let getLocation = (location)=>{
//     if (location) {
//         return <p>location: {location}!</p>;
//     }
//     else {
//         return 'Unknown';
//     }
// }

// var template = (
//     <div>
//         <h1>title: {app.title ? app.title : "No title"} </h1>
       
//         <p>{app.subtitle ?  app.subtitle: "No subtitle"}</p> 
//         {/* {app.subtitle && <p>{app.subtitle}</p>} */}

//         {getLocation(app.location)}
        
//         {app.options.length > 0 && <p>{app.options}</p>}
        
//         <ol>
//             <li>first</li>
//             <li>second</li>
//         </ol>

//     </div>
// );

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    
}
const minusOne = () => {
    count--;
    renderCounterApp();
    
}
const reset = () => {
    count=0;
    renderCounterApp();
    
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={ reset}>reset</button>
    </div>

);

var appRoot = document.getElementById("app");


const renderCounterApp = ()=>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={ reset}>reset</button>
        </div>
    
    );
    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();