(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function e(n){r(this,e),this.value=n,this.children=[]},o=function(){function e(n){r(this,e),this.root=new a(n)}var n,o,i;return n=e,(o=[{key:"insert",value:function(e){var n=new a(e);if(this.root)for(var t=this.root;t;)if(e<t.value){if(null==t.children[0]||"none"==t.children[0].value)return t.children[0]=n,void(t.children[1]||(t.children[1]=new a("none")));t=t.children[0]}else{if(null==t.children[1]||"none"==t.children[1].value)return t.children[0]||(t.children[0]=new a("none")),void(t.children[1]=n);t=t.children[1]}else this.root=n}}])&&t(n.prototype,o),i&&t(n,i),e}();function i(e){return Math.floor(Math.random()*e)+1}e.exports={createTree:function(e){var n={},t=e,r=i(e);n[r]=!0;var l=new o;for(l.root=new a(r);Object.entries(n).length<t;)n[r=i(e)]||(n[r]=!0,l.insert(r));return l}}},165:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(102),i=t.n(o),l=t(40),c=t(101),u=t(162),s=t(166),d=t(156),f=t(160),p=t(161),h=t(158),m=t(164),v=t(94),g=t(132),b=t(77),x=t(159),y=t(141),w=t(87);var E=function(e,n){var t={top:80,bottom:80},r=800-t.top-t.bottom,a=w.e(e.current).append("svg").attr("id","currentTree").attr("width","100%").attr("height",r+t.top+t.bottom).attr("viewBox","0 0 1000 1000").append("g").attr("transform","translate(0,"+t.top+")"),o=0,i=w.i().size([1e3,r+t-top]),l=w.a(n,(function(e){return e.children}));l.x0=500,l.y0=0,function e(n){var t=i(l),r=t.descendants(),c=t.descendants().slice(1);r.forEach((function(e){e.y=100*e.depth}));var u=a.selectAll("g.node").data(r,(function(e){return e.id||(e.id=++o)})),s=u.enter().append("g").attr("class",(function(e){return isNaN(e.value)?"hidden":"node"})).attr("id",(function(e){return"node".concat(e.value)})).attr("transform",(function(e){return"translate("+n.x0+","+n.y0+")"})).on("click",m);s.append("circle").attr("class","node").attr("r",1e-6).attr("value",(function(e){return isNaN(e.value)?"":e.data.value})).style("fill",(function(e){return e._children?"lightsteelblue":"#fff"})),s.append("text").attr("dy","0").attr("dx","0").attr("text-anchor","middle").attr("alignment-baseline","central").attr("value",(function(e){return isNaN(e.value)?"":e.data.value})).text((function(e){return isNaN(e.value)?"":e.data.value}));var d=s.merge(u);d.transition().duration(750).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})),d.select("circle.node").attr("r",20).style("fill",(function(e){return e._children?"lightsteelblue":"#fff"})).attr("cursor","pointer");var f=u.exit().transition().duration(750).attr("transform",(function(e){return"translate("+n.x+","+n.y+")"})).remove();f.select("circle").attr("r",1e-6),f.select("text").style("fill-opacity",1e-6);var p=a.selectAll("path.link").data(c,(function(e){return e.id}));p.enter().insert("path","g").attr("class",(function(e){return isNaN(e.value)?"link hidden ":"link"})).attr("d",(function(e){var t={x:n.x0,y:n.y0};return h(t,t)})).merge(p).transition().duration(750).attr("d",(function(e){return h(e,e.parent)}));p.exit().transition().duration(750).attr("d",(function(e){n.x,n.y})).remove();function h(e,n){return"M ".concat(e.x," ").concat(e.y,"\n        C ").concat((e.x+n.x)/2," ").concat(e.y,",\n          ").concat((e.x+n.x)/2," ").concat(n.y,",\n          ").concat(n.x," ").concat(n.y)}function m(n){n.children?(n._children=n.children,n.children=null):(n.children=n._children,n._children=null),e(n)}r.forEach((function(e){e.x0=e.x,e.y0=e.y}))}(l)};var k=function(){var e=w.e("#currentTree");e&&e.remove()};function S(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw o}}}}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function C(e,n){w.e("#node".concat(e.value)).select("text").transition().duration(500).delay(500*n).attr("fill","white"),w.e("#node".concat(e.value)).select("circle").transition().duration(500).delay(500*n).style("fill","black")}function T(e){var n,t=function e(n){var t,r=[],a=S(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;if("number"==typeof o.value){var i={};i.value=o.value,r.push(i)}o.children.length>0&&(r=r.concat(e(o.children)))}}catch(e){a.e(e)}finally{a.f()}return r}(e),r=(t.sort((function(e,n){return e.value-n.value})),0),a=S(t);try{for(a.s();!(n=a.n()).done;){C(n.value,r),r+=1}}catch(e){a.e(e)}finally{a.f()}}function j(e){var n,t=function e(n){var t,r=[],a=S(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;if(0===o.children.length){if("number"==typeof o.value){var i={};i.value=o.value,r.push(i)}}else{r=r.concat(e(o.children));var l={};l.value=o.value,r.push(l)}}}catch(e){a.e(e)}finally{a.f()}return r}(e),r=0,a=S(t);try{for(a.s();!(n=a.n()).done;){C(n.value,r),r+=1}}catch(e){a.e(e)}finally{a.f()}}t(92);function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),n.default=function(){var e=O(Object(r.useState)({}),2),n=e[0],t=e[1],o=O(Object(r.useState)(10),2),u=o[0],S=o[1],z=O(Object(r.useState)(!1),2),A=z[0],N=z[1],B=O(Object(r.useState)({}),2),I=(B[0],B[1],O(Object(r.useState)(!1),2)),M=I[0],P=I[1],_=Object(r.useRef)(null),F=Object(c.b)({opacity:1,from:{opacity:0},config:{duration:1500}});return Object(r.useEffect)((function(){Object.entries(n).length>0&&(k(),E(_,n.root))}),[n]),a.a.createElement("div",null,a.a.createElement(s.a,{w:"100%",h:"100px",spacing:"80px"},!A&&a.a.createElement(c.a.div,{style:F},a.a.createElement(d.a,{marginTop:"25vh",w:"100%",h:"140px"},a.a.createElement(f.a,{w:["400px","400px","700px","700px"],h:"140px"},a.a.createElement(p.a,{as:"h1",fontSize:"4xl"},"Welcome to our BST traversal visualizer!"),a.a.createElement(h.a,{as:"i",fontSize:"2xl"},"To begin, please enter the number of nodes you would like in your binary search tree")))),A&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{marginTop:"20px",w:"100%",h:"50px"},a.a.createElement(f.a,{w:"800px",h:"50px"},a.a.createElement(p.a,{as:"h1",size:"lg"},"Now choose a type of binary tree traversal")))),a.a.createElement(d.a,null,!A&&a.a.createElement(h.a,{fontSize:"xl"},"Number of Nodes (1-50)"),!A&&a.a.createElement(m.a,{autoFocus:!0,fontSize:"xl",width:"14",type:"number",name:"numNodes",value:u,min:"1",max:"50",onChange:function(e){return function(e){(e.target.value<50||e.target.value>1)&&S(e.target.value)}(e)}})),a.a.createElement(v.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6"},!A&&a.a.createElement(g.a,{id:"create-tree",onClick:function(){!function(){if(u<50&&u>0){k(),A||N(!0);var e=Object(y.createTree)(u);E(_,e.root),t(e)}else S(10),console.log("error")}()}},"Create Binary Search Tree"))),a.a.createElement(b.a,{direction:"row",flexWrap:"wrap",justify:"center"},A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",onClick:function(){!function(e){var n=[],t=0;for(n.push(e.root);0!==n.length;){var r=n.pop();if(C(r,t),"number"==typeof r.value&&(t+=1),0!==r.children.length)for(var a=0;a<r.children.length;a++)n.push(r.children[r.children.length-a-1])}}(n)}},"PreOrder"),A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",onClick:function(){j([n.root])}},"PostOrder"),A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",onClick:function(){T([n.root])}},"InOrder"),A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",onClick:function(){!function(e){var n=[],t=0;for(n.push(e.root);0!==n.length;){var r=n.shift();if(C(r,t),"number"==typeof r.value&&(t+=1),0!==r.children.length)for(var a=0;a<r.children.length;a++)n.push(r.children[a])}}(n)}},"Breadth First"),A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",id:"create-tree",onClick:function(){w.f(".node").selectAll("circle").style("fill","#fff").attr("stroke","steelblue").attr("stroke-width","3"),w.f(".node").selectAll("text").attr("fill","black").attr("font","2.5em")}},"Reset"),A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",id:"create-tree",onClick:function(){N(!1)}},"New Tree"),A&&a.a.createElement(g.a,{colorScheme:"blue",size:"lg",variant:"outline",spacing:"6",id:"create-tree",as:l.b,to:"/"},"Main Menu")),a.a.createElement("div",null,A&&a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,{size:"lg",variant:"outline",spacing:"6",onClick:function(){P(!0)}},"Click here for more about traversal types"),a.a.createElement(i.a,{isOpen:M,contentLabel:"Tree Traversal Explanations"},a.a.createElement("button",{onClick:function(){P(!1)}},"Close"),a.a.createElement(h.a,null),"   ",a.a.createElement(h.a,null,"Preorder Traversal:"),a.a.createElement(h.a,null,"1. Visit root"),a.a.createElement(h.a,null,"2. Traverse left subtree by recursively calling Preorder function"),a.a.createElement(h.a,null,"3. Traverse right subtree by recursively calling Preorder function")," ",a.a.createElement(h.a,null,"Postorder Traversal"),a.a.createElement(h.a,null,"1. Traverse left subtree by recursively calling Postorder function"),a.a.createElement(h.a,null,"2. Traverse right subtree by recursively calling Postorder function"),a.a.createElement(h.a,null,"3. Visit root")," ",a.a.createElement(h.a,null,"Inorder Traversal:"),a.a.createElement(h.a,null,"1. Traverse left subtree by recursively calling Inorder function"),a.a.createElement(h.a,null,"2. Visit root"),a.a.createElement(h.a,null,"3. Traverse right subtree by recursively calling Inorder function")," ",a.a.createElement(h.a,null,"Breadth First Order Traversal:"),a.a.createElement(h.a,null,"Visit every node on a level before going to another level")))),A&&a.a.createElement("div",{ref:_}))}},92:function(e,n,t){var r=t(99),a=t(93);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},93:function(e,n,t){(n=t(100)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  background-color: #d6e1ea;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a3c9f4' fill-opacity='0.38'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.main-header {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 1em;\n  margin-bottom: 2em;\n  color: #fff;\n}\n\n.navbar {\n  text-align: center;\n  background-color: #1a1a1a;\n  color: white;\n  height: 3.5em;\n}\n\n.titleContainer {\n  height: 100%;\n  width: 100%;\n  background-color: #1a1a1a;\n  box-shadow: 2px 2px 7px 2px #808080;\n}\n\n#title {\n  font-size: 2.5em;\n  color: white;\n}\n\n#mainContainer {\n  display: grid;\n  text-align: center;\n  background-color: #f2f2f2;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100vh;\n  justify-content: start;\n}\n\n#sideBar {\n  background-color: #333333;\n}\n\n#d3tree {\n  height: 800px;\n  width: 1000px;\n}\n\n#object {\n  color: white;\n}\n\n#generate {\n  height: 50px;\n  width: 300px;\n  margin: 2em;\n  font-size: 1em;\n  padding: 0.5em;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #808080;\n  outline: none;\n}\n\n#generate:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n  border: 1px solid #808080;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n.traversalBtns {\n  height: 50px;\n  width: 100px;\n  margin: 1em 0;\n  font-size: 1em;\n  padding: 0.5em;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #a6a6a6;\n  outline: none;\n}\n\n.traversalBtns:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n  border: 1px solid #808080;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n.traversalLBtns {\n  height: 50px;\n  width: 200px;\n  margin: 1em 0;\n  font-size: 1em;\n  padding: 0.5em;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #a6a6a6;\n  outline: none;\n}\n\n.traversalLBtns:hover {\n  cursor: pointer;\n  background-color: #d9d9d9;\n  border: 1px solid #808080;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n#reset {\n  height: 50px;\n  width: 150px;\n  margin: 1em 0;\n  font-size: 1em;\n  padding: 0.5em;\n  background-color: #999999;\n  border-radius: 5px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 2px 2px 7px 2px #a6a6a6;\n  outline: none;\n}\n\n#reset:hover {\n  cursor: pointer;\n  background-color: #808080;\n  border: 1px solid white;\n  box-shadow: 2px 2px 7px 2px #595959;\n  font-size: 1.02em;\n}\n\n.link {\n  fill: none;\n  stroke: blue;\n  stroke-width: 1.5px;\n}\n\n.node circle {\n  fill: #fff;\n  stroke: blue;\n  stroke-width: 1.5px;\n}\n\n.node_hidden {\n  display: none;\n  stroke: black;\n  stroke-width: 5px;\n}\n\n.hidden {\n  display: none;\n}\n\n.node text {\n  font: 1.5em sans-serif;\n}\n\ndiv {\n  text-align: center;\n}\nrect {\n  fill: rgb(83, 80, 252);\n}\n.sorted {\n  fill: rgb(0, 23, 128);\n}\n.min {\n  fill: rgb(0, 23, 128);\n}\n.testing {\n  fill: rgb(0, 23, 128);\n}\n\n.modal {\n  background: rgba(0, 0, 0, 0.6);\n}\n.modal-container {\n  position: absolute;\n  width: 60%;\n  background: #ffffff;\n  left: 25%;\n  top: 30%;\n  padding: 20px;\n}\n",""]),e.exports=n}}]);