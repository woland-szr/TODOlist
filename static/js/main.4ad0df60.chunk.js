(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),r=n.n(i),l=n(1),u=n(4),m=n(5),o=n(7),s=n(6),h=(n(13),function(e){var t=e.id,n=e.changeTime,a=e.changeAl,i=e.itemName;return c.a.createElement("li",{title:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435: ".concat(n)},c.a.createElement("input",{type:"checkbox",onChange:function(){return a(t)}}),c.a.createElement("label",null,i))}),d=function(e){var t=e.message;return c.a.createElement("div",{className:"alert"},t)},f=function(e){var t=e.onClickBtn;return c.a.createElement("button",{onClick:function(){t()}},"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e?")},p=(n(14),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).changeAlert=function(e){var t=new Date;t=t.toLocaleString("ru",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timezone:"UTC"});var n=a.state.items.find((function(t){return t.id===e})),c=a.state.items.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{checked:!n.checked,changeTime:t}):a}));a.setState({items:c}),a.setState({alert:"\u0412\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438 \u0437\u0430\u0434\u0430\u0447\u0443 '".concat(n.title,"' ").concat(t)})},a.onClickBtn=function(){var e=a.state.items.filter((function(e){return!0===e.checked}));a.setState({alert:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0434\u0435\u043b: ".concat(e.length)})},a.state={items:[{id:1,title:"\u0414\u0435\u043b\u043e \u21161",checked:!1,changeTime:""},{id:2,title:"\u0414\u0435\u043b\u043e \u21162",checked:!1,changeTime:""},{id:3,title:"\u0414\u0435\u043b\u043e \u21163",checked:!1,changeTime:""}],alert:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b:"),c.a.createElement("ul",null,this.state.items.map((function(t){return c.a.createElement(h,{id:t.id,key:t.id,changeTime:t.changeTime,changeAl:e.changeAlert,itemName:t.title})}))),c.a.createElement("div",{className:"info"},c.a.createElement("span",null,"\u0418\u043d\u0444\u043e:\xa0"),c.a.createElement(d,{message:this.state.alert})),c.a.createElement(f,{onClickBtn:this.onClickBtn}))}}]),n}(c.a.Component));var g=function(){return c.a.createElement("div",null,c.a.createElement(p,null))};n(15);r.a.render(c.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4ad0df60.chunk.js.map