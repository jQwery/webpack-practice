import Post from "./Post";
import './styles/styles.css'
import json from './assets/json.json'
import WebPackLogo from './assets/webpack-logo.png'

const post = new Post('WebPack post title', WebPackLogo);

console.log('Post to str: ', post.toString())

console.log('JSON', json)