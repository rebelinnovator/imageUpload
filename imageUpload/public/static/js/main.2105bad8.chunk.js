(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(79)},44:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),o=a.n(s),l=(a(44),a(3)),c=a(4),i=a(6),m=a(5),u=a(7),p=a(84),d=a(82),h=a(24),g=a.n(h),b=a(13),f=a.n(b),v=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},E=function(e){return{type:"SET_CURRENT_USER",payload:e}},w=a(14),y=a(15),O=a(36),j=a(20),N=a(71),x={isAuthenticated:!1,user:{},loading:!1},C={},k=Object(y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(j.a)({},e,{isAuthenticated:!N(t.payload),user:t.payload});case"USER_LOADING":return Object(j.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),S=[O.a],R=Object(y.e)(k,{},Object(y.d)(y.a.apply(void 0,S),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||y.d)),_=a(81),T=(n.Component,f.a.create({baseURL:"http://localhost:5555/api"})),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.get("/facebooks/get",{params:{token:"3vjelxmei@jdifeialkjcia34asldf0-3kjlsdkj92l-aod=2g6+39kzcvhgrg9jdh3idjsl2"}}).then(function(t){console.log(t.data),e.setState({products:t.data.products})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},"Landing",this.state.products.map(function(e,t){return r.a.createElement("div",{className:"col-3",style:{border:"1px solid blue",margin:"10px",padding:"10px"}},r.a.createElement("img",{src:e.image,style:{width:"300px",height:"300px"}}),r.a.createElement("div",null,"name:",e.name),r.a.createElement("div",null,"price:",e.price),r.a.createElement("div",null,"location:",e.location),r.a.createElement("div",null,"date:",e.date))})))}}]),t}(n.Component),A=a(16),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault(),T.post("/facebooks/post",{params:Object(j.a)({},a.state)}).then(function(e){console.log(e.data),1==e.data.result&&alert("success"),a.setState({})})},a.onChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(A.a)({},t,n),function(){console.log(a.state)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"name",onChange:this.onChange,placeholder:"name",required:!0}),r.a.createElement("input",{type:"text",name:"image",onChange:this.onChange,placeholder:"imageurl",required:!0}),r.a.createElement("input",{type:"text",name:"location",onChange:this.onChange,placeholder:"location",required:!0}),r.a.createElement("input",{type:"number",name:"price",onChange:this.onChange,placeholder:"price",required:!0}),r.a.createElement("input",{type:"date",name:"date",onChange:this.onChange,placeholder:"publishdate",required:!0}),r.a.createElement("input",{type:"submit"})))}}]),t}(n.Component),D=a(85),P=a(18),F=a.n(P),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(A.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(_.a,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(_.a,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:F()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:F()("",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:F()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:F()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),q=(Object(w.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){f.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(D.a)(I)),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(A.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(_.a,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(_.a,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:F()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:F()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login With OTPs"))))))}}]),t}(n.Component)),M=(Object(w.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){f.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),v(a);var n=g()(a);t(E(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(q),a(38)),W=a(83),B=(Object(w.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(M.a)(e,["component","auth"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(W.a,{to:"/login"})}}))}),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"landing-copy col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into a full-stack"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"whitepanda")," Assignment  \ud83d\udc4f")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"))))}}]),t}(n.Component)),G=(Object(w.b)(function(e){return{auth:e.auth}},{logoutUser:function(){return function(e){localStorage.removeItem("jwtToken"),v(!1),e(E({}))}}})(B),a(77),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{store:R},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{exact:!0,path:"/processpanel",component:U}),r.a.createElement(d.a,{exact:!0,path:"/",component:L}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.2105bad8.chunk.js.map