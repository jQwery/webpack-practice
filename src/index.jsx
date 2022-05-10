import Post from "@models/Post";
import './styles/styles'
import json from './assets/json'
import WebPackLogo from './assets/webpack-logo'
import xml from './assets/data'
import csv from './assets/data'
import * as $ from 'jquery'
import './styles/less.less'
import './styles/sass.scss'
import './babel'
import React from 'react'
import { render } from "react-dom";

const post = new Post('WebPack post title', WebPackLogo);

console.log('Post to str: ', post.toString())

//$('pre').addClass('code').html(post.toString())

const App = () => (
    <div className="container">
        <h1>WebPack - pratcice</h1>
        <hr/>
        <div className="logo"></div>
        <hr/>
        <pre></pre>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))

//console.log('XML', xml)
//console.log('JSON', json)
//console.log('CSV', csv)