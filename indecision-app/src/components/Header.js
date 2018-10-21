import React from "react";

const Header = (props) => {
    return(

        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>

    );
}

Header.defaultProps = {
    title:"Indecesion-app",
    subtitle:"Welcome to app"
}
export default Header;
