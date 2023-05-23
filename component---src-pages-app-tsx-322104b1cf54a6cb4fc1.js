"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[891,49,845,473],{5815:function(e,t,n){var a=n(7294);t.Z=e=>a.createElement("button",{className:e.styles,onClick:e.onButtonClick},e.content)},3932:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);const l=(0,a.createContext)([]);var r=n(1883),c=n(5815);var o=()=>a.createElement("nav",null,a.createElement(r.rU,{to:"/"}," Home "),a.createElement(r.rU,{to:"/products"},"Products"),a.createElement(r.rU,{to:"/about"},"About"),a.createElement(c.Z,{content:a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6ElEQVR4nO2ZO0tcQRSAv1VBCVhrwG0Eo65CCGLjL1DE1s4gGBFlEVkQ7PILUgQCFjYW4qrrAxG1CiL2NilEsPKBibj4wELwFQZOsYTsLi5zZu4sfnCaYQ57vnvnzs5h4I3o0QucAi8F4grYBT4DMSLKSRGJf2M2qjInOUUe55lTBwwBdzLPvJnI0SMyRqK7yNwvIrJP4FQDlyLTRuDMiUiSwBkWkQyB80FELqK6e72GM5FJEDjzIjJG4IyIyCKB0yIif8rpO2khcBZeeUbTiB0bIqMREDmyIZKIgMhXGyLmI//tUeIZaMQSGY8iP7FI0qPIgE2Rdk8SN8A7myIx+VN0LTKDAiseRLo0RMYdSxxqHYs+OhaZQolYTh+vHU9AHEXWHIlso8yEI5F+bZFPDiSyQI22SIX8kKbIDxyxrizS4UokpSjxC4d0KIqkXIpUyj2KbYkHoB7HbCg0T9/xwKQUME3gdIrIAYFTJU2PWRLvCZwNeSuDlMn9yS6BU5tzrP8GtLo4I2nRB9xb3Ib3fMvYEnkEGnxfmm5KESa2ZCydJyddQo4651JA7pOMy5g58v+PbIEcs6174bZAUdcWc9RZlQK2pJi49NxmbNlijjrNebpGM9ZkMQcXmCWyJOvbhHmqxQoqJYe/S/viCgHGEU4AAAAASUVORK5CYII=",alt:"Cart"})}));function m(){return a.createElement("footer",null,a.createElement("p",null,"Created by Ahmad Mughrabi"))}function i(e){let{children:t}=e;const{0:n,1:r}=(0,a.useState)([]);return a.createElement(a.Fragment,null,a.createElement(l.Provider,{value:{CartContext:[n,r]}},a.createElement(o,null),t,a.createElement(m,null)))}},3334:function(e,t,n){var a=n(7294);t.Z=e=>a.createElement("section",{className:e.containerStyle},a.createElement("h1",{className:e.textStyle},e.text))},2766:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(7294),l=n(3932),r=n(3334);t.default=e=>a.createElement(l.Z,null,a.createElement(r.Z,{containerStyle:"",textStyle:"",text:"Hahaa!"}));const c=()=>a.createElement("title",null,"About")},9303:function(e,t,n){n.r(t);var a=n(7294),l=n(7896),r=n(3932),c=n(7943),o=n(2766),m=n(4683);t.default=()=>a.createElement(r.Z,null,a.createElement(l.Router,{basepath:"/app"},a.createElement(c.default,{path:"/products"}),a.createElement(m.default,{path:"/products/:id"}),a.createElement(o.default,{path:"/about"})))},4683:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return o}});var a=n(7294),l=n(3932),r=n(5815);var c=e=>a.createElement("section",{className:"product"},a.createElement("section",null,a.createElement("img",{src:e.image})),a.createElement("section",null,a.createElement("h1",null,e.name),a.createElement("h2",null,e.price),a.createElement("p",null,e.description),a.createElement(r.Z,{content:"ADD"})));var o=e=>a.createElement(l.Z,null,a.createElement(c,{name:e.name,image:e.image,price:e.price,description:e.description}));const m=()=>a.createElement("title",null,"Product")},7943:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return o}});var a=n(7294),l=n(3932),r=n(7896);var c=e=>a.createElement(r.Link,{to:e.id.toString()},a.createElement("section",{className:"flex flex-col justify-between place-self-center rounded-xl p-3 m-5 min-h-full w-64 border-4 border-zinc-600 shadow-2xl"},a.createElement("section",{className:""},a.createElement("img",{src:e.image,className:"m-auto h-44 w-auto filter-none"})),a.createElement("section",{className:"flex flex-col min-h-full h-32 justify-between"},a.createElement("h1",{className:""},e.name),a.createElement("h2",{className:"ml-auto font-bold"},e.price))));var o=e=>{const{0:t,1:n}=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch("https://fakestoreapi.com/products/").then((e=>e.json())).then((e=>{let t=[];e.map((e=>{"men's clothing"!==e.category&&"women's clothing"!==e.category||t.push(e)})),n(t)}))}),[]),a.createElement(l.Z,null,a.createElement("section",{className:"grid grid-cols-3 w-10/12 mx-auto gap-y-12 mx-20 my-28"},t.map((e=>a.createElement(c,{id:e.id,name:e.title,image:e.image,price:e.price})))))};const m=()=>a.createElement("title",null,"Products")}}]);
//# sourceMappingURL=component---src-pages-app-tsx-322104b1cf54a6cb4fc1.js.map