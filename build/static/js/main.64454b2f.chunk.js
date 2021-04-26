(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[1],{10:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return d}));var r=n(3),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),o=Object(r.b)("contacts/fetchContactsError"),u=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),l=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/chageFilter")},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(52),c=n.n(r),a=n(1),o=function(t){var e=t.children;return Object(a.jsx)("div",{className:c.a.Container,children:e})}},52:function(t,e,n){t.exports={Container:"Container_Container__1V1G6"}},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return E}));var r=n(3),c={registerRequest:Object(r.b)("auth/registerRequest"),registerSuccess:Object(r.b)("auth/registerSuccess"),registerError:Object(r.b)("auth/registerError"),loginRequest:Object(r.b)("auth/loginRequest"),loginSuccess:Object(r.b)("auth/loginSuccess"),loginError:Object(r.b)("auth/loginError"),logoutRequest:Object(r.b)("auth/logoutRequest"),logoutSuccess:Object(r.b)("auth/logoutSuccess"),logoutError:Object(r.b)("auth/logoutError"),getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")},a=n(16),o=n.n(a),u=n(23),s=n(18),i=n.n(s);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var b,l,j,d,O=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},f=function(){i.a.defaults.headers.common.Authorization=""},g={register:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(c.registerRequest()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:r=e.sent,O(r.data.token),n(c.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(c.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(c.loginRequest()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:r=e.sent,O(r.data.token),n(c.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(c.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(c.logoutRequest()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:f(),e(c.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(c.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(u.a)(o.a.mark((function t(e,n){var r,a,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return O(a),e(c.getCurrentUserRequest()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:u=t.sent,e(c.getCurrentUserSuccess(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(c.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},h=n(4),p=n(7),x={name:null,email:null},v=Object(r.c)(x,(b={},Object(h.a)(b,c.registerSuccess,(function(t,e){return e.payload.user})),Object(h.a)(b,c.loginSuccess,(function(t,e){return e.payload.user})),Object(h.a)(b,c.logoutSuccess,(function(){return x})),Object(h.a)(b,c.getCurrentUserSuccess,(function(t,e){return e.payload})),b)),m=Object(r.c)(null,(l={},Object(h.a)(l,c.registerSuccess,(function(t,e){return e.payload.token})),Object(h.a)(l,c.loginSuccess,(function(t,e){return e.payload.token})),Object(h.a)(l,c.logoutSuccess,(function(){return null})),l)),y=function(t,e){return e.payload},k=Object(r.c)(null,(j={},Object(h.a)(j,c.registerError,y),Object(h.a)(j,c.loginError,y),Object(h.a)(j,c.logoutError,y),Object(h.a)(j,c.getCurrentUserError,y),j)),C=Object(r.c)(!1,(d={},Object(h.a)(d,c.registerSuccess,(function(){return!0})),Object(h.a)(d,c.loginSuccess,(function(){return!0})),Object(h.a)(d,c.getCurrentUserSuccess,(function(){return!0})),Object(h.a)(d,c.registerError,(function(){return!1})),Object(h.a)(d,c.loginError,(function(){return!1})),Object(h.a)(d,c.getCurrentUserError,(function(){return!1})),Object(h.a)(d,c.logoutError,(function(){return!1})),d)),S=Object(p.c)({user:v,isAuthenticated:C,token:m,error:k}),E={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}}},87:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var r,c,a=n(0),o=n.n(a),u=n(25),s=n.n(u),i=n(15),b=n(9),l=n(51),j=n(36),d=n(37),O=n(39),f=n(38),g=n(5),h=n(8),p=n(1),x={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},v=Object(b.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("nav",{children:[Object(p.jsx)(i.b,{to:"/",exact:!0,style:x.link,activeStyle:x.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(p.jsx)(i.b,{to:"/contacts",exact:!0,style:x.link,activeStyle:x.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})})),m=n.p+"static/media/default-avatar.ec618d9c.png",y=(n(40),n(91)),k={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},C={onLogout:h.a.logOut},S=Object(b.b)((function(t){return{name:h.c.getUserName(t),avatar:m}}),C)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(p.jsxs)("div",{style:k.container,children:[Object(p.jsx)("img",{src:e,alt:"",width:"32",style:k.avatar}),Object(p.jsxs)("span",{style:k.name,children:["Welcome, ",n]}),Object(p.jsx)(y.a,{type:"button",variant:"primary",onClick:r,children:"Logout"})]})})),E={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},A=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{to:"/register",exact:!0,style:E.link,activeStyle:E.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)(i.b,{to:"/login",exact:!0,style:E.link,activeStyle:E.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},U={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},R=Object(b.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("header",{style:U.header,children:[Object(p.jsx)(v,{}),e?Object(p.jsx)(S,{}):Object(p.jsx)(A,{})]})})),w=n(49),q=n(19),L=n(29),I=Object(b.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(L.a)(t,["component","isAuthenticated","redirectTo"]);return Object(p.jsx)(g.b,Object(q.a)(Object(q.a)({},c),{},{render:function(t){return n?Object(p.jsx)(e,Object(q.a)({},t)):Object(p.jsx)(g.a,{to:r})}}))})),T=Object(b.b)((function(t){return{isAuthenticated:h.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(L.a)(t,["component","isAuthenticated","redirectTo"]);return Object(p.jsx)(g.b,Object(q.a)(Object(q.a)({},c),{},{render:function(t){return n&&c.restricted?Object(p.jsx)(g.a,{to:r}):Object(p.jsx)(e,Object(q.a)({},t))}}))})),z=n(90),B=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,99))})),N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,100))})),W=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,101))})),D=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,103))})),F=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(p.jsxs)(w.a,{children:[Object(p.jsx)(R,{}),Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsx)(z.a,{animation:"border",variant:"danger",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})}),children:Object(p.jsxs)(g.d,{children:[Object(p.jsx)(T,{exact:!0,path:"/",component:B}),Object(p.jsx)(T,{path:"/register",restricted:!0,component:N,redirectTo:"/contacts"}),Object(p.jsx)(T,{path:"/login",restricted:!0,component:W,redirectTo:"/contacts"}),Object(p.jsx)(I,{path:"/contacts",component:D,redirectTo:"/login"})]})})]})}}]),n}(a.Component),G={onGetCurrentUser:h.a.getCurrentUser},_=Object(b.b)(null,G)(F),J=n(28),M=n(3),P=n(53),V=n.n(P),H=n(17),K=n(54),Q=n.n(K),X=n(4),Y=n(7),Z=n(10),$=Object(M.c)([],(r={},Object(X.a)(r,Z.j,(function(t,e){return e.payload})),Object(X.a)(r,Z.c,(function(t,e){var n=e.payload;return[].concat(Object(J.a)(t),[n])})),Object(X.a)(r,Z.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),tt=Object(M.c)(!1,(c={},Object(X.a)(c,Z.i,(function(){return!0})),Object(X.a)(c,Z.j,(function(){return!1})),Object(X.a)(c,Z.h,(function(){return!1})),Object(X.a)(c,Z.b,(function(){return!0})),Object(X.a)(c,Z.c,(function(){return!1})),Object(X.a)(c,Z.a,(function(){return!1})),Object(X.a)(c,Z.f,(function(){return!0})),Object(X.a)(c,Z.g,(function(){return!1})),Object(X.a)(c,Z.e,(function(){return!1})),c)),et=Object(M.c)("",Object(X.a)({},Z.d,(function(t,e){return e.payload}))),nt=Object(M.c)(null,{}),rt=Object(Y.c)({items:$,filter:et,loading:tt,error:nt}),ct=[].concat(Object(J.a)(Object(M.d)({serializableCheck:{ignoredActions:[H.a,H.f,H.b,H.c,H.d,H.e]}})),[V.a]),at={key:"auth",storage:Q.a,whitelist:["token"]},ot=Object(M.a)({reducer:{auth:Object(H.g)(at,h.b),contacts:rt},middleware:ct,devTools:!1}),ut={store:ot,persistor:Object(H.h)(ot)};n(87),n(88);s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(b.a,{store:ut.store,children:Object(p.jsx)(l.a,{loading:null,persistor:ut.persistor,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(_,{})})})})}),document.getElementById("root"))}},[[89,2,3]]]);
//# sourceMappingURL=main.64454b2f.chunk.js.map