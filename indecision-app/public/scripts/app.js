"use strict";

console.log("app is running");

var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js"
);

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision app"
    ),
    React.createElement(
        "p",
        null,
        "hello"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "first"
        ),
        React.createElement(
            "li",
            null,
            "second"
        )
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
