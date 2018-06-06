import React, { Component } from "react";
import { Layout } from "antd";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import "antd/dist/antd.css";
import "./App.css";
import Slider from "./components/layout/Slider";
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";
import CreateNote from "./components/createnote/CreateNote";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Slider collapsed={this.state.collapsed} />
                        <Layout>
                            <Header
                                collapsed={this.state.collapsed}
                                onToggle={this.toggle}
                            />

                            <Layout.Content className="content-container">
                                <Route path="/" exact component={Dashboard} />
                                <Route
                                    path="/createnote"
                                    exact
                                    component={CreateNote}
                                />
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
