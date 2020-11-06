import React, { Component } from 'react'
import Nav from './container/nav/Nav'
import { BrowserRouter } from 'react-router-dom';


 class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Nav/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;