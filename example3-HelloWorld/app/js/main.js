import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

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

const list = _.map(helloWorlds, value => {
    return React.createElement('p', {key:value.country}, value.hello);
});

const root = React.createElement('div', {key:'yo'}, list);

ReactDOM.render(root,document.getElementById('app'));