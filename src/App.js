import React  from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import GithubSearchApp from "./Components/GithubSearchApp";
import Logo from "./assets/Logo.png";
let App = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-primary">
                <img
                    src={Logo}
                    className="img-fluid logo"
                    alt="brand"
                    style={{width: "48px", height: "40px"}}
                />
                <div className="container">
                    <a href="" className="navbar-brand"><h3>GitHUb Profile Search using React Redux</h3></a>
                </div>
            </nav>
            <Provider store={store}>
                <GithubSearchApp/>
            </Provider>
        </div>
    )
}

export default App;
