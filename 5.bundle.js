(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(n,e,o){"use strict";o.r(e);var r=o(1),t=o.n(r),a=o(40),i=o(128),d=(o(90),o(76)),s=o(129),l=o(94),p=o(131),x=o(161);e.default=function(){var n=Object(i.b)({opacity:1,from:{opacity:0}});return t.a.createElement(t.a.Fragment,null,t.a.createElement(d.a,{w:"100%",h:"100px"}),t.a.createElement(i.a.div,{style:n},t.a.createElement(s.a,{as:"h1",size:"2xl"},"VisuTreeSort"),t.a.createElement(x.a,{as:"i",fontSize:"30px"},"visualizing binary tree traversals and sorting algorithms through animation")),t.a.createElement(d.a,{w:"100%",h:"100px"}),t.a.createElement(l.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6"},t.a.createElement(p.a,{as:a.b,to:"/bst"},"Binary Tree Traversal"),t.a.createElement(p.a,{as:a.b,to:"/sort"},"Sorting Algorithms")))}},90:function(n,e,o){var r=o(91),t=o(92);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var a={insert:"head",singleton:!1};r(t,a);n.exports=t.locals||{}},92:function(n,e,o){(e=o(93)(!1)).push([n.i,"body {\n  margin: 0;\n  padding: 0;\n  background-color: #d6e1ea;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a3c9f4' fill-opacity='0.38'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.main-header {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 1em;\n  margin-bottom: 2em;\n  color: #fff;\n}\n\n.navbar {\n  text-align: center;\n  background-color: #1a1a1a;\n  color: white;\n  height: 3.5em;\n}\n\n.titleContainer {\n  height: 100%;\n  width: 100%;\n  background-color: #1a1a1a;\n  box-shadow: 2px 2px 7px 2px #808080;\n}\n\n#title {\n  font-size: 2.5em;\n  color: white;\n}\n\n#mainContainer {\n  display: grid;\n  text-align: center;\n  background-color: #f2f2f2;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100vh;\n  justify-content: start;\n}\n\n#sideBar {\n  background-color: #333333;\n}\n\n#d3tree {\n  height: 800px;\n  width: 1000px;\n}\n\n#object {\n  color: white;\n}\n\n#generate {\n  height: 50px;\n  width: 300px;\n  margin: 2em;\n  font-size: 1em;\n  padding: 0.5em;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #808080;\n  outline: none;\n}\n\n#generate:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n  border: 1px solid #808080;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n.traversalBtns {\n  height: 50px;\n  width: 100px;\n  margin: 1em 0;\n  font-size: 1em;\n  padding: 0.5em;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #a6a6a6;\n  outline: none;\n}\n\n.traversalBtns:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n  border: 1px solid #808080;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n.traversalLBtns {\n  height: 50px;\n  width: 200px;\n  margin: 1em 0;\n  font-size: 1em;\n  padding: 0.5em;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #a6a6a6;\n  outline: none;\n}\n\n.traversalLBtns:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n  border: 1px solid #808080;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n#reset {\n  height: 50px;\n  width: 150px;\n  margin: 1em 0;\n  font-size: 1em;\n  padding: 0.5em;\n  background-color: #999999;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #a6a6a6;\n  outline: none;\n}\n\n#reset:hover {\n  cursor: pointer;\n  background-color: #808080;\n  border: 1px solid white;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n.link {\n  fill: none;\n  stroke: blue;\n  stroke-width: 1.5px;\n}\n\n.node circle {\n  fill: #fff;\n  stroke: blue;\n  stroke-width: 1.5px;\n}\n\n.node_hidden {\n  display: none;\n  stroke: black;\n  stroke-width: 5px;\n}\n\n.hidden {\n  display: none;\n}\n\n.node text {\n  font: 1.5em sans-serif;\n}\n\ndiv {\n  text-align: center;\n}\nrect {\n  fill: rgb(83, 80, 252);\n}\n.sorted {\n  fill: rgb(0, 23, 128);\n}\n.min {\n  fill: rgb(0, 23, 128);\n}\n.testing {\n  fill: rgb(0, 23, 128);\n}\n\n.modal {\n  background: rgba(0, 0, 0, 0.6);\n}\n.modal-container {\n  position: absolute;\n  width: 60%;\n  background: #ffffff;\n  left: 25%;\n  top: 30%;\n  padding: 20px;\n}\n",""]),n.exports=e}}]);