(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(11),o=n.n(c),i=n(13),u=n(14),s=n(19),l=n(16),d=n(18),f=n(17),p=(n(39),function(){return a.a.createElement("header",null,"What the Splash!")}),O=n(27),h=(n(40),function(e){var t=e.children,n=e.loading,r=Object(O.a)(e,["children","loading"]);return a.a.createElement("button",Object.assign({disabled:n,className:"button"},r),t)}),b=(n(41),{LOAD:"IMAGES_LOAD",LOAD_SUCCESS:"IMAGES_LOAD_SUCCESS",LOAD_FAIL:"IMAGES_LOAD_FAIL",FETCH:"IMAGES_FETCH"}),m=function(e){return{type:b.LOAD_FAIL,err:e}},E=function(e){return{type:b.LOAD_SUCCESS,data:e}},_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchApi()}},{key:"render",value:function(){var e=this.props,t=e.fetchApi,n=e.statusLoad,r=e.images;return a.a.createElement("div",{className:"content"},a.a.createElement("section",{className:"grid"},r.map(function(e){return a.a.createElement("div",{key:e.id,className:"item item-".concat(Math.ceil(e.height/e.width))},a.a.createElement("img",{src:e.urls.small,alt:e.user.username}))})),a.a.createElement(h,{onClick:function(){return!n&&t()},loading:n},"Loadmore"))}}]),t}(r.Component),v=Object(f.b)(function(e){return{statusLoad:e.isLoading,images:e.data}},function(e){return{fetchApi:function(){return e({type:b.FETCH})}}})(_),w=n(6),j=n(23),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.LOAD_SUCCESS:return[].concat(Object(j.a)(e),Object(j.a)(t.data));default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return(arguments.length>1?arguments[1]:void 0).type===b.LOAD_SUCCESS?e+1:e},L=function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case b.LOAD_SUCCESS:return!1;default:return!0}},A=Object(w.c)({data:S,isLoading:L,currentPage:g}),C=n(29),D=n(7),k=n.n(D),x=n(8),y=n(28),I=function(){var e=Object(y.a)(k.a.mark(function e(t){var n,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.unsplash.com/photos/").concat("?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02","&per_page=3&page=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,!(n.status>=400)){e.next=8;break}throw new Error(n.errors);case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=k.a.mark(F),T=k.a.mark(M),U=function(e){return e.currentPage};function F(){var e,t;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(x.d)(U);case 3:return e=n.sent,n.next=6,Object(x.b)(I,e);case 6:return t=n.sent,n.next=9,Object(x.c)(E(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(x.c)(m(n.t0));case 15:case"end":return n.stop()}},N,null,[[0,11]])}function M(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)(b.FETCH,F);case 2:case"end":return e.stop()}},T)}var X=k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)([M()]);case 2:case"end":return e.stop()}},e)}),G=Object(C.a)(),H=function(){var e=Object(w.e)(A,window.__REDUX_DEVTOOLS_EXTENSION__?Object(w.d)(Object(w.a)(G),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(w.a)(G));return G.run(X),e}(),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(f.a,{store:H},a.a.createElement(r.Fragment,null,a.a.createElement(p,null),a.a.createElement(v,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.c67199cc.chunk.js.map