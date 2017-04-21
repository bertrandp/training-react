import ReactDom from 'react-dom';
import React from 'react';
import Table from './table.js';

const helloWorlds = [
    {region: 'asia', country: 'Japan', hello: 'こんにちは'},
    {region: 'asia', country: 'China', hello: '你好'},
    {region: 'asia', country: 'Korea', hello: '여보세요'},
    {region: 'asia', country: 'Vietnam', hello: 'chào bạn'},
    {region: 'europa', country: 'France', hello: 'Bonjour'},
    {region: 'europa', country: 'Germany', hello: 'Hallo'},
    {region: 'europa', country: 'Italy', hello: 'Ciao'},
    {region: 'america', country: 'Canada', hello: 'CréVindiou'},
    {region: 'america', country: 'USA', hello: 'Hello'},
    {region: 'america', country: 'Mexico', hello: 'Hola'},
];

ReactDom.render(<Table list={helloWorlds} />, document.getElementById('app'));