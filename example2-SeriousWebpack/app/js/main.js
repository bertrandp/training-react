import _ from 'lodash';

const letters = ['a', 'c', 'd', 'j'];

_.forEach(letters, value => {
    var para = document.createElement('P');
    var elem = document.createTextNode(value);
    para.appendChild(elem);
    document.body.appendChild(para);
});