import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <ul class="topnav">
                    <li><a class="active" href="#news">Salary</a></li>
                    <li><a href="#news">Contact</a></li>
                    <li class="right"><a href="#contact">About</a></li>
                </ul>
            </div>
        );
    }
}

export default App;