(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(171),i=n(162);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(u.b,null))}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),u=n(8),i=n.n(u),o=n(154),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(51);n.d(t,"waitForRouteChange",function(){return s.a});var l=n(159),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(33);n.d(t,"parsePath",function(){return f.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"db",function(){return i}),n.d(a,"auth",function(){return o});var r={};n.r(r),n.d(r,"doCreateUserWithEmailAndPassword",function(){return d}),n.d(r,"doSignInWithEmailAndPassword",function(){return f}),n.d(r,"doSignOut",function(){return m}),n.d(r,"doPasswordReset",function(){return p}),n.d(r,"doPasswordUpdate",function(){return h});var u={};n.r(u),n.d(u,"doCreateUser",function(){return g}),n.d(u,"onceGetUsers",function(){return v});var i,o,c=n(164),s=n.n(c),l=(n(165),n(166),{apiKey:"AIzaSyC8AhZsZOL-y9j0TRPgCetyHL84ZPIkM3o",authDomain:"blog-baddb.firebaseapp.com",databaseURL:"https://blog-baddb.firebaseio.com",projectId:"blog-baddb",storageBucket:"blog-baddb.appspot.com",messagingSenderId:"704457494574"});s.a.apps.length||s.a.initializeApp(l),"undefined"!=typeof window&&(i=s.a.database(),o=s.a.auth());var d=function(e,t){return o.createUserWithEmailAndPassword(e,t)},f=function(e,t){return o.signInWithEmailAndPassword(e,t)},m=function(){return o.signOut()},p=function(e){return o.sendPasswordResetEmail(e)},h=function(e){return o.currentUser.updatePassword(e)},g=function(e,t,n){return i.ref("users/"+e).set({username:t,email:n})},v=function(){return i.ref("users").once("value")};n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return a})},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},158:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"f",function(){return r}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});var a="/",r="/signup",u="/signin",i="/pw-forget",o="/home",c="/account"},159:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Firebase Authentication"}}}}},161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(8),i=n.n(u),o=n(34),c=n(1),s=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,n){"use strict";var a=n(160),r=n(0),u=n.n(r),i=n(163),o=n.n(i),c=n(155),s=n(157),l=n(156),d=function(){return u.a.createElement("button",{type:"button",onClick:l.a.doSignOut},"Sign Out")},f=n(158),m=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(c.Link,{to:f.c},"Landing")),u.a.createElement("li",null,u.a.createElement(c.Link,{to:f.b},"Home")),u.a.createElement("li",null,u.a.createElement(c.Link,{to:f.a},"Account")),u.a.createElement("li",null,u.a.createElement(d,null)))},p=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(c.Link,{to:f.c},"Landing")),u.a.createElement("li",null,u.a.createElement(c.Link,{to:f.e},"Sign In")))},h=function(){return u.a.createElement(s.a.Consumer,null,function(e){return e?u.a.createElement(m,null):u.a.createElement(p,null)})},g=n(13),v=n.n(g);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).state={authUser:null},n}v()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this;"undefined"!=typeof window&&l.c.auth.onAuthStateChanged(function(t){t?e.setState(function(){return{authUser:t}}):e.setState(function(){return{authUser:null}})})},a.render=function(){var t=this.state.authUser;return u.a.createElement(s.a.Provider,{value:t},u.a.createElement(e,this.props))},n}(u.a.Component)}(function(e){var t=e.children;return u.a.createElement(c.StaticQuery,{query:"3470870683",render:function(e){return u.a.createElement("div",null,u.a.createElement(o.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),u.a.createElement("div",{className:"app"},u.a.createElement(h,null),u.a.createElement("hr",null),t))},data:a})})},171:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n(52);var a=n(13),r=n.n(a),u=n(0),i=n.n(u),o=n(155),c=n(156),s=n(158),l=function(e,t){return function(){var n;return(n={})[e]=t,n}},d={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,u=t.passwordOne;c.a.doCreateUserWithEmailAndPassword(r,u).then(function(e){c.b.doCreateUser(e.user.uid,a,r).then(function(){n.setState(function(){return Object.assign({},d)}),Object(o.navigate)(s.b)}).catch(function(e){n.setState(l("error",e))})}).catch(function(e){n.setState(l("error",e))}),e.preventDefault()},n.state=Object.assign({},d),n}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.username,a=t.email,r=t.passwordOne,u=t.passwordTwo,o=t.error,c=r!==u||""===r||""===n||""===a;return i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("input",{value:n,onChange:function(t){return e.setState(l("username",t.target.value))},type:"text",placeholder:"Full Name"}),i.a.createElement("input",{value:a,onChange:function(t){return e.setState(l("email",t.target.value))},type:"text",placeholder:"Email Address"}),i.a.createElement("input",{value:r,onChange:function(t){return e.setState(l("passwordOne",t.target.value))},type:"password",placeholder:"Password"}),i.a.createElement("input",{value:u,onChange:function(t){return e.setState(l("passwordTwo",t.target.value))},type:"password",placeholder:"Confirm Password"}),i.a.createElement("button",{disabled:c,type:"submit"},"Sign Up"),o&&i.a.createElement("p",null,o.message))},t}(u.Component),m=function(){return i.a.createElement("p",null,"Don't have an account? ",i.a.createElement(o.Link,{to:s.f},"Sign Up"))};t.b=f}}]);
//# sourceMappingURL=component---src-pages-signup-js-acd133b34bb23a6679b8.js.map