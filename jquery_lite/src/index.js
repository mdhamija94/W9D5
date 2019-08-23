const DomNodeCollection = require('./dom_node_collection.js');

window.$l = function(selector){
  let nodeArray = [];
  if (typeof selector === "string"){
    let nodelist = document.querySelectorAll(selector);
     nodeArray = Array.from(nodelist);
  } else if (selector instanceof HTMLElement){
     nodeArray = Array.from(selector);
  }

  return new DomNodeCollection(nodeArray);
};



window.$l = function (func) {
  // let nodeArray = [];
  let funcQueue = [];
  funcQueue.push(func);
  

  if (typeof selector === "string") {
    let nodelist = document.querySelectorAll(selector);
    nodeArray = Array.from(nodelist);
  } else if (selector instanceof HTMLElement) {
    nodeArray = Array.from(selector);
  }

  return new DomNodeCollection(nodeArray);
};
document.addEventListener("DOMContentLoaded", function () {
  console.log('Your document is ready!');
});