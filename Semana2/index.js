import React from "react";
import ReactDOM from "react-dom";

const Padre = (props) =>{
    return(
        <div
            style={{
                width: "75%",
                background:"#FFEFD5",
                height:"200px",
                padding: "20px",

            }}
            >
                <h5>Soy un padre</h5>
                {props.children}
            </div>
    );
};

const Hijo = (props) => {
    return (
        <div
            style={{
                width: "50%",
                background:"#FA8072",
                height:"100px",
                padding: "20px",
                color: "white",
                fontSize: "30px",
            }}
            >
                {props.author}
            </div>
    );
};

const App =() =>{
    return(
        <Padre>
            <Hijo autor="Soy un hijo" />
        </Padre>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));