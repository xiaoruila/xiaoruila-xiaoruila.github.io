import e,{memo as t}from"react";import n from"../Icon/index.js";const l=t((t=>{const{type:l,size:i,disabled:o,radius:a,loading:s,onClick:d,children:r,className:c,style:u}=t;return e.createElement("div",null,e.createElement("button",{className:(i?.includes("middle")?"o-button-middle":i?.includes("large")?"o-button-large":"o-button-small")+" o-button o-button"+(["default","primary","success","warning","danger","text"].includes(l)&&!l?.includes("default")?`-${l}`:"")+(a?" o-button-radius":"")+("string"==typeof c?" "+c:""),style:u,disabled:o,onClick:e=>{s||"function"==typeof d&&d(e)}},s&&e.createElement("div",{style:{margin:"5px 10px 5px 5px"}},e.createElement(n,{name:"loading",spin:!0,size:1.5})),r))}));export{l as default};