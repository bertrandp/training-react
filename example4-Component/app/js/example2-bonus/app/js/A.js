import {square, diag} from "./AB";

var squareA = square(42);
var para = document.createElement('P');
var elem = document.createTextNode(squareA);
para.appendChild(elem);
document.body.appendChild(para);

var diagA = diag(42, 10);
var para2 = document.createElement('P');
var elem2 = document.createTextNode(diagA);
para2.appendChild(elem2);
document.body.appendChild(para2);