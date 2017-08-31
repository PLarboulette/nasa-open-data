

import React from 'react'
import Header from './Header'
import Pictures from "./pictures/Pictures";

const users = [
    {
        id : "1",
        firstName : "Bruce",
        lastName: "Wayne"
    },
    {
        id : "2",
        firstName : "Clark",
        latName : "Kent"
    }
];

const App = () => (
    <div>
        <Header />
        <Pictures/>
    </div>
);

export default App;