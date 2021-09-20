import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

it("renders without problems", ()=>{

const div = document.createElement("div");
ReactDom.render(<App />, div)

});