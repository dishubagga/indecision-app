"use strict";

console.log("app started");

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Dishu"
    ),
    React.createElement(
        "p",
        null,
        "20"
    ),
    React.createElement(
        "p",
        null,
        "New York"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
