(this["webpackJsonplittle-twitter"]=this["webpackJsonplittle-twitter"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(10),c=n.n(i),o=(n(15),n(2)),r=n(3),l=n(4),u=n(5),d=n(7),j=n(6),b=(n(16),n(9)),m=(n(17),n(0)),h=function(t){var e=t.text,n=t.like,a=t.onLike,s=t.onDelete,i="post-item__container ";return n&&(i+="like "),Object(m.jsxs)("div",{className:i,children:[Object(m.jsx)("span",{className:"post-form__post-text",children:e}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",onClick:a,className:"post-item__btn",children:Object(m.jsx)("img",{src:"./heart.svg",alt:"minus",className:"post-item__img"})}),Object(m.jsx)("button",{type:"button",onClick:s,className:"post-item__btn",children:Object(m.jsx)("img",{src:"./trash.svg",alt:"minus",className:"post-item__img"})})]})]})},f=(n(19),["id"]),O=["id"],p=function(t){var e,n=t.posts,a=t.onDelete,s=t.onLike;return e=t.onlyLiked?n.filter((function(t){return t.like})).map((function(t){var e=t.id,n=Object(b.a)(t,O);return Object(m.jsx)("li",{className:"post-list-item",children:Object(m.jsx)(h,Object(o.a)(Object(o.a)({},n),{},{onDelete:function(){return a(e)},onLike:function(){return s(e)}}))},e)})):n.map((function(t){var e=t.id,n=Object(b.a)(t,f);return Object(m.jsx)("li",{className:"post-list-item",children:Object(m.jsx)(h,Object(o.a)(Object(o.a)({},n),{},{onDelete:function(){return a(e)},onLike:function(){return s(e)}}))},e)})),Object(m.jsx)("ul",{className:"posts-list",children:e})},x=(n(20),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={text:""},t.onSubmit=function(e){e.preventDefault(),t.state.text&&(t.props.onAdd(t.state.text),t.setState({text:""}))},t.onChange=function(e){t.setState({text:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.onSubmit,className:"post-form__container",children:[Object(m.jsx)("input",{value:this.state.text,onChange:this.onChange,type:"text",placeholder:"New post",className:"post-form__input"}),Object(m.jsx)("button",{type:"submit",className:"post-form__btn",children:"Add post"})]})}}]),n}(s.a.Component)),k=(n(21),function(t){var e=t.numOfPosts,n=t.numOfLikedPosts;return Object(m.jsxs)("header",{className:"header__container",children:[Object(m.jsx)("h1",{className:"header__title",children:"Little twitter"}),Object(m.jsxs)("div",{className:"header__counter-container",children:[Object(m.jsxs)("p",{className:"header__counter",children:["Posts: ",e]}),Object(m.jsxs)("p",{className:"header__counter",children:["Liked: ",n]})]})]})}),v=function(t){var e=t.showLiked,n="nav__filter-btn ";return t.onlyLiked&&(n+="filter-btn_push"),Object(m.jsx)("button",{onClick:e,className:n,children:"Show only liked posts"})},_=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={data:[],onlyLiked:!1},t.maxId=0,t.onAdd=function(e){var n={text:e,id:t.maxId++,like:!1};t.setState((function(t){var e=t.data;return{data:[].concat(Object(r.a)(e),[n])}})),localStorage.setItem(n.id,JSON.stringify(n))},t.onDelete=function(e){t.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e}));return{data:[].concat(Object(r.a)(n.slice(0,a)),Object(r.a)(n.slice(a+1)))}})),localStorage.removeItem(e)},t.onLike=function(e){t.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),s=n[a],i=Object(o.a)(Object(o.a)({},s),{},{like:!s.like});return localStorage.setItem(i.id,JSON.stringify(i)),{data:[].concat(Object(r.a)(n.slice(0,a)),[i],Object(r.a)(n.slice(a+1)))}}))},t.showLiked=function(){t.setState({onlyLiked:!t.state.onlyLiked})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=function(e){if(!localStorage.hasOwnProperty(e))return"continue";var n=JSON.parse(localStorage.getItem(e));t.maxId=e+1,t.setState((function(t){var e=t.data;return{data:[].concat(Object(r.a)(e),[n])}}))};for(var n in localStorage)e(n)}},{key:"render",value:function(){var t=this.state.data.length,e=this.state.data.filter((function(t){return t.like})).length;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(k,{numOfPosts:t,numOfLikedPosts:e}),Object(m.jsx)("nav",{className:"main__nav",children:Object(m.jsx)(v,{showLiked:this.showLiked,onlyLiked:this.state.onlyLiked})}),Object(m.jsxs)("div",{className:"main__posts-container",children:[Object(m.jsx)(x,{onAdd:this.onAdd}),Object(m.jsx)(p,{posts:this.state.data,onlyLiked:this.state.onlyLiked,onDelete:this.onDelete,onLike:this.onLike})]}),Object(m.jsx)("aside",{className:"main__aside"})]})}}]),n}(s.a.Component);c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4b2717ce.chunk.js.map