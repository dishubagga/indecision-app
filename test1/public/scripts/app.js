"use strict";

var app = {
    title: "Indecision app",
    subtitle: "hello",
    location: "new York",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};
var remove = function remove() {
    app.options = [];
    render();
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum] || "kuch v nai";
    alert(option);
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "h2",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.location
        ),
        React.createElement(
            "p",
            null,
            !app.options.length > 0 || app.options.length,
            " "
        ),
        React.createElement(
            "p",
            null,
            app.options.map(function (option) {
                return "hello the option is " + option;
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Button"
            )
        ),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: makeDecision },
            "Make decision"
        ),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: remove },
            "Remove all"
        )
    );
    ReactDOM.render(template, document.getElementById("app"));
};
render();
