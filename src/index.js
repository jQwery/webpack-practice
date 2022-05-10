import Post from "@models/Post";
import './styles/styles'
import json from './assets/json'
import WebPackLogo from './assets/webpack-logo'
import xml from './assets/data'
import csv from './assets/data'
import * as $ from 'jquery'

const post = new Post('WebPack post title', WebPackLogo);

console.log('Post to str: ', post.toString())

$('pre').addClass('code').html(post.toString())

console.log('XML', xml)
console.log('JSON', json)
console.log('CSV', csv)