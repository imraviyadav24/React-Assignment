(this.webpackJsonpravi_project1=this.webpackJsonpravi_project1||[]).push([[0],{121:function(e,t,s){},122:function(e,t,s){},227:function(e,t,s){},247:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(22),i=s.n(c),l=(s(121),s(7)),r=s(8),o=s(11),d=s(12),j=(s(122),s(16)),u=s(25),h=s(107),b=s(13),x="TOKEN_LOADING",p="TOKEN_LOADED",O="TASK_LOADING",m="TASK_LOADED",f="USER_LOADING",g="USER_LOADED",y="AUTH_ERROR",k={token:"",isLoading:!1,isAuthenticated:null,user:null,data:null,tasks:null},_=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case p:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0,isLoading:!1,data:t.payload,token:t.payload.results.token});case O:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case m:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,tasks:t.payload});case f:return Object(b.a)(Object(b.a)({},e),{},{isUpdate:!1,isLoading:!0});case g:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload.results});case y:return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{token:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),v=[h.a],T=Object(u.e)(_,{},Object(u.d)(u.a.apply(void 0,v),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),S=s(254),C=s(249),A=s(108),D=s(26),L=s(250),E=s(34),I=s(35),w=s(1),N=function(e){var t=e.task,s=e.handleToggle;return Object(w.jsx)(S.a,{children:Object(w.jsx)(S.a.Header,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(A.a,{sm:3,children:Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(w.jsx)("img",{style:{width:"2rem",height:"2rem",borderRadius:"20px"},src:t.user_icon}),Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:t.task_msg.charAt(0).toUpperCase()+t.task_msg.slice(1)})}),Object(w.jsx)("span",{style:{fontSize:"8px",color:"red"},children:Object(w.jsx)("b",{children:t.task_date})})]})]})}),Object(w.jsx)(A.a,{sm:3,children:Object(w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:"Date"})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:Object(w.jsx)("b",{children:t.task_date})})]})})}),Object(w.jsx)(A.a,{sm:3,children:Object(w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:"Time"})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:Object(w.jsx)("b",{children:t.task_time})})]})})}),Object(w.jsx)(A.a,{sm:2,children:Object(w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:"Is Completed"})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:1===t.is_completed?"Yes":"No"})]})})}),Object(w.jsx)(A.a,{sm:1,children:Object(w.jsx)("button",{onClick:function(e){return s(e,t.id)},style:{width:"1.5rem",height:"1.5rem",border:"none",backgroundColor:"transparent"},variant:"outline-primary",children:Object(w.jsx)(E.a,{style:{color:"#3bb1c4"},icon:I.a})})})]})})})},z=s(42),R=s(116),F=s(252),K=(s(227),s(30)),U=s.n(K),B=function(){return function(e,t){e({type:x});var s=JSON.stringify({email:"spicebluetest2@gmail.com",password:"12345678"});console.log(s),U.a.post("https://stage.api.sloovi.com/login",s,{headers:{"Content-Type":"application/json"}}).then((function(t){return e({type:p,payload:t.data})})).catch((function(t){console.log(t),e({type:"TOKEN_ERROR"})})),setTimeout((function(){G()(e,t),P()(e,t)}),1e3)}},G=function(){return function(e,t){e({type:f});var s=t().auth.token;console.log("Token",s);var n={headers:{"Content-Type":"application/json"}};s&&(n.headers.Authorization="Bearer "+s),U.a.get("https://stage.api.sloovi.com/user",n).then((function(t){return e({type:g,payload:t.data})})).catch((function(t){console.log(t),e({type:y})}))}},P=function(){return function(e,t){e({type:O});var s=t().auth.token;console.log("Token",s);var n={headers:{"Content-Type":"application/json"}};s&&(n.headers.Authorization="Bearer "+s),U.a.get("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",n).then((function(t){return e({type:m,payload:t.data})})).catch((function(t){console.log(t),e({type:"TOKEN_ERROR"})}))}},J=z.a().shape({task_msg:z.b().required(),task_date:z.b().required(),time:z.b().required()});var V=Object(j.b)((function(e){return{user:e.auth.user}}),{fetchToken:B,getTasks:P,addTask:function(e){var t=e.assigned_user,s=e.task_date,n=e.task_time,a=e.task_msg,c=e.is_completed;return function(e,i){var l=i().auth.token;console.log("Token",l);var r={headers:{"Content-Type":"application/json"}};l&&(r.headers.Authorization="Bearer "+l);var o=JSON.stringify({assigned_user:t,task_date:s,task_time:n,task_msg:a,is_completed:c});console.log(o),U.a.post("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",o,r).then((function(t){return e({type:"ADD_TASK",payload:t.data})})).catch((function(t){console.log(t),e({type:"ADD_TASK_FAIL"})}))}},editTask:function(e){var t=e.task_id,s=e.assigned_user,n=e.task_date,a=e.task_time,c=e.task_msg,i=e.is_completed;return function(e,l){var r=l().auth.token;console.log("Token",r),console.log("Token",s,n,a,c,i);var o={headers:{"Content-Type":"application/json"}};r&&(o.headers.Authorization="Bearer "+r);var d=JSON.stringify({assigned_user:s,task_date:n,task_time:a,task_msg:c,is_completed:i});console.log(d),U.a.put("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+t,d,o).then((function(t){return e({type:"UPDATE_TASK",payload:t.data})})).catch((function(t){console.log(t),e({type:"UPDATE_TASK_FAIL"})}))}},deleteTask:function(e){var t=e.task_id;return function(e,s){var n=s().auth.token;console.log("Token",n);var a={headers:{"Content-Type":"application/json"}};n&&(a.headers.Authorization="Bearer "+n),U.a.delete("https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+t,a).then((function(t){return e({type:"DELETE_TASK",payload:t.data})})).catch((function(t){console.log(t),e({type:"DELETE_TASK_FAIL"})}))}}})((function(e){var t=e.handleToggle,s=e.user,n=e.addTask,a=e.task,c=e.editTask,i=e.deleteTask,l=e.fetchToken;console.log("task Id for Edit",a);var r=a.length>0?a[0].id:"",o=a.length>0?a[0].task_msg:"New Task",d=a.length>0?a[0].task_date:"",j=a.length>0?new Date(1e3*a[0].task_time).toISOString().substr(11,8):"",u=a.length>0?a[0].is_completed:0;return console.log("New Time",j),Object(w.jsx)(R.a,{validationSchema:J,initialValues:{task_msg:o,task_date:d,time:j,status:u},onSubmit:function(e){console.log("onSUbmit");var i=e.task_msg,o=e.task_date,d=e.time,j=e.status,u=3600*parseInt(d.split(":")[0])+60*parseInt(d.split(":")[1]),h="1"==j?1:0,b=s.id,x={assigned_user:b,task_date:o,task_time:u,task_msg:i,is_completed:h};if(0==a.length)n(x);else{console.log("Edit Submit");var p={task_id:r,assigned_user:b,task_date:o,task_time:u,task_msg:i,is_completed:h};console.log(p),c(p)}l(),t()},children:function(e){var n=e.handleSubmit,c=e.handleChange,o=(e.handleBlur,e.values),d=(e.touched,e.isValid,e.errors);return Object(w.jsxs)(F.a,{noValidate:!0,onSubmit:n,children:[Object(w.jsx)(F.a.Row,{children:Object(w.jsxs)(F.a.Group,{as:A.a,md:4,children:[Object(w.jsx)(F.a.Label,{children:"Task Description"}),Object(w.jsx)(F.a.Control,{type:"text",name:"task_msg",value:o.task_msg,onChange:c,isInvalid:!!d.task_msg}),Object(w.jsx)(F.a.Control.Feedback,{type:"invalid",children:d.task_msg})]})}),Object(w.jsxs)(F.a.Row,{children:[Object(w.jsxs)(F.a.Group,{as:A.a,sm:"8",children:[Object(w.jsx)(F.a.Label,{children:"Date"}),Object(w.jsx)(F.a.Control,{type:"date",name:"task_date",value:o.task_date,onChange:c,isInvalid:!!d.task_date}),Object(w.jsx)(F.a.Control.Feedback,{type:"invalid",children:d.task_date})]}),Object(w.jsxs)(F.a.Group,{as:A.a,sm:"4",children:[Object(w.jsx)(F.a.Label,{children:"Time"}),Object(w.jsx)(F.a.Control,{type:"time",name:"time",value:o.time,onChange:c,isInvalid:!!d.time}),Object(w.jsx)(F.a.Control.Feedback,{type:"invalid",children:d.time})]})]}),Object(w.jsxs)(F.a.Row,{children:[Object(w.jsxs)(F.a.Group,{as:A.a,children:[Object(w.jsx)(F.a.Label,{children:"Assign User"}),Object(w.jsx)(F.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"inlineFormCustomSelectPref",custom:!0,children:Object(w.jsx)("option",{value:"0",children:s?s.name:""})})]}),Object(w.jsxs)(F.a.Group,{children:[Object(w.jsx)(F.a.Label,{children:"Status"}),Object(w.jsxs)(F.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"inlineFormCustomSelectPref",custom:!0,name:"status",value:o.status,onChange:c,children:[Object(w.jsx)("option",{value:"0",children:"Pending"}),Object(w.jsx)("option",{value:"1",children:"Completed"})]})]})]}),a.length>0?Object(w.jsx)(L.a,{onClick:function(){i({task_id:r}),l(),t()},className:"mr-2",variant:"outline-danger",children:Object(w.jsx)(E.a,{icon:I.c})}):null,Object(w.jsxs)(F.a.Row,{style:{display:"flex",justifyContent:"flex-end",width:"100%"},children:[Object(w.jsx)(L.a,{className:"mr-2",variant:"outline-danger",onClick:t,children:"Cancle"}),Object(w.jsx)(L.a,{type:"submit",children:"Submit"})]})]})}})})),H=Object(j.b)((function(e){return{tasks:e.auth.tasks}}))((function(e){var t=Object(n.useState)(!1),s=Object(D.a)(t,2),a=s[0],c=s[1],i=Object(n.useState)(null),l=Object(D.a)(i,2),r=l[0],o=l[1],d=function(e,t){c(!a),o(t)};return Object(w.jsxs)(S.a,{style:{margin:"10px"},children:[Object(w.jsx)(S.a.Header,{style:{padding:"1px"},children:Object(w.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(w.jsxs)("h6",{style:{marginLeft:"1rem"},children:["Tasks",Object(w.jsx)("span",{style:{color:"#c4c4c4",marginLeft:".5rem"},children:e.tasks?e.tasks.results.length:0})]}),Object(w.jsx)("div",{style:{borderLeft:"1px solid #cbced4"},children:Object(w.jsx)(L.a,{onClick:d,variant:"light",style:{border:"none"},children:Object(w.jsx)(E.a,{icon:I.b})})})]})}),Object(w.jsx)(S.a.Body,{children:a?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(V,{task:e.tasks.results.filter((function(e){return e.id===r})),handleToggle:d})}):Object(w.jsx)(w.Fragment,{children:e.tasks?Object(w.jsx)(w.Fragment,{children:e.tasks.results.map((function(e){return Object(w.jsx)(N,{handleToggle:d,task:e},e.id)}))}):null})})]})})),X=Object(j.b)((function(e){return{user:e.auth.user}}))((function(e){return console.log("User Body",e),Object(w.jsxs)(w.Fragment,{children:[e?Object(w.jsx)(S.a,{style:{border:"1px solid gray",margin:"10px"},children:Object(w.jsx)(S.a.Header,{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(A.a,{sm:3,children:Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(w.jsx)("img",{style:{width:"2rem",height:"2rem",borderRadius:"20px"},src:e.user?e.user.icon:""}),Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:e.user?e.user.name:""})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:e.user?e.user.email:""})]})]})}),Object(w.jsx)(A.a,{sm:3,children:Object(w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:"Company"})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:Object(w.jsx)("b",{children:e.user?e.user.company:""})})]})})}),Object(w.jsx)(A.a,{sm:3,children:Object(w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:"Joined"})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:Object(w.jsx)("b",{children:e.user?e.user.created.split("T")[0]:""})})]})})}),Object(w.jsx)(A.a,{sm:3,children:Object(w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(w.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(w.jsx)("h7",{style:{color:"gray",fontSize:"10px"},children:Object(w.jsx)("b",{children:"Phone Number"})}),Object(w.jsx)("span",{style:{fontSize:"8px"},children:e.user?e.user.phone:""})]})})})]})})}):null,Object(w.jsx)(H,{})]})})),q=s(251),M=s(253),Y=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:null,dropdownOpen:!1,isOpen:!1},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,s=e.data;return Object(w.jsx)(w.Fragment,{children:t?Object(w.jsxs)(q.a,{style:{color:"white"},variant:"dark",bg:"dark",expand:"sm",children:[Object(w.jsx)(q.a.Brand,{href:"#home",children:"React Assignment"}),Object(w.jsx)(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(q.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(M.a,{style:{display:"flex",alignItems:"center"},className:"ml-auto",children:[Object(w.jsx)(M.a.Link,{href:"#home",children:s?s.message:""}),Object(w.jsx)("img",{style:{width:"2rem",height:"2rem",borderRadius:"20px"},src:s.results?s.results.icon:""})]})})]}):null})}}]),s}(n.Component),Q=Object(j.b)((function(e){return{auth:e.auth}}))(Y),W=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){T.dispatch(B())}},{key:"render",value:function(){return Object(w.jsx)(j.a,{store:T,children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(Q,{}),Object(w.jsx)(X,{})]})})}}]),s}(n.Component),Z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,255)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};s(246);i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.getElementById("root")),Z()}},[[247,1,2]]]);
//# sourceMappingURL=main.022c2375.chunk.js.map