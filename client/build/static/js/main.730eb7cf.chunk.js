(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),l=a.n(o),c=a(8),s=a(9),i=a(11),u=a(10),m=a(12),h=(a(79),a(80),a(33)),p=a(31),d=a(127),g=a(126),E=a(69),b=a(128),f=a(129),O=a(130),k=a(131),y=a(132),v=a(133),S=a(15),j=a(21),w=a.n(j),_=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"GET_ERRORS",payload:{msg:e,status:t,id:a}}},C=function(){return{type:"CLEAR_ERRORS"}},N=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{onClick:this.props.signout,href:"/"},"Sign Out"))}}]),t}(n.Component),D=Object(S.b)(null,{signout:function(){return{type:"SIGNOUT_SUCCESS"}}})(A),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,o=r.a.createElement(n.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(g.a,{href:"/"},"Home")),r.a.createElement(d.a,null,r.a.createElement(g.a,{href:"/library"},"Library")),r.a.createElement(d.a,null,r.a.createElement(g.a,{href:"/explore"},"Explore")),r.a.createElement(d.a,null,r.a.createElement(D,null)),r.a.createElement(d.a,null,r.a.createElement(E.a,{href:"/profile",color:"warning",className:"ml-4"},a?a.name[0]:""))),l=r.a.createElement(n.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(g.a,{href:"/sign-up"},"Sign Up")),r.a.createElement(d.a,null,r.a.createElement(g.a,{href:"/sign-in"},"Sign In")));return r.a.createElement("div",null,r.a.createElement(b.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(f.a,null,r.a.createElement(O.a,{href:"/"},"KindleShare"),r.a.createElement(k.a,{onClick:this.toggle}),r.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(v.a,{className:"ml-auto",navbar:!0},t?o:l)))))}}]),t}(n.Component),T=Object(S.b)((function(e){return{auth:e.auth}}),null)(I),L=a(73),P=a(134),G=a(135),B=a(136),R=a(137),U=a(138),F=a(139),x=a(4),K=a.n(x);var H=function(e){var t=e.books,a=e.deleteBook,o=Object(n.useState)("1"),l=Object(L.a)(o,2),c=l[0],s=l[1],i=function(e){var n=t[e.target.value];a(n._id)};return r.a.createElement("div",null,r.a.createElement(v.a,{className:"scrolling-wrapper",tabs:!0},t.map((function(e,t){return r.a.createElement(d.a,{className:"book-card",key:t},r.a.createElement(g.a,{className:K()({active:c===t}),onClick:function(){var e;c!==(e=t)&&s(e)}},r.a.createElement(E.a,{onClick:i,value:t,className:"book-delete-btn",color:"danger"},"x"),r.a.createElement(P.a,null,r.a.createElement(G.a,{top:!0,src:e.cover,alt:"book cover"}))))}))),r.a.createElement(B.a,{activeTab:c},t.map((function(e,t){return r.a.createElement(R.a,{key:t,tabId:t},r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"mb-3",target:"_blank",href:e.amazon_link,color:"warning"},"See it on amazon"),r.a.createElement("br",null),e.title,r.a.createElement("br",null),e.author,r.a.createElement("br",null),e.highlights.length," Highlights"),r.a.createElement(U.a,null,e.highlights.map((function(e,t){return r.a.createElement(F.a,{key:t},e)}))))}))))},M=function(){return function(e,t){e(z()),w.a.get("/books",N(t)).then((function(t){return e({type:"GET_BOOKS",payload:t.data})})).catch((function(t){return e(_(t.response.data,t.response.status))}))}},X=function(e){return function(t,a){e.map((function(e){return w.a.post("/books",e,N(a)).then((function(e){return t({type:"ADD_BOOKS",payload:e.data})})).catch((function(e){return t(_(e.response.data,e.response.status))}))}))}},z=function(){return{type:"BOOKS_LOADING"}},J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){alert("This feature isn't available yet")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getBooks()}},{key:"render",value:function(){if(!this.props.token)return r.a.createElement(p.a,{to:"/login"});var e=this.props.books.books;return r.a.createElement(f.a,null,r.a.createElement(E.a,{color:"warning",onClick:this.onClick},"Sync highlights"),r.a.createElement("br",null),r.a.createElement("br",null),e.length>0?r.a.createElement(H,{deleteBook:this.props.deleteBook,books:e}):null)}}]),t}(n.Component),q=Object(S.b)((function(e){return{books:e.book,token:e.auth.token}}),{getBooks:M,fetchBooks:function(){return function(e){w.a.get("/books/kindle").then((function(t){e(X(t.data))})).catch((function(e){return console.log(e)}))}},deleteBook:function(e){return function(t,a){w.a.delete("/books/".concat(e),N(a)).then((function(a){t({type:"DELETE_BOOK",payload:e})}))}}})(J),V=a(28),W=a(140),$=a(141),Q=a(142),Y=a(143),Z=a(144),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:"",msg:null},a.handleChange=function(e){a.setState(Object(V.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){a.props.clearErrors(),e.preventDefault();var t=a.state,n={name:t.name,email:t.email,password:t.password};a.props.signup(n)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.error;t!==e.error&&("SIGNUP_FAIL"===t.id?this.setState({msg:t.msg.msg}):this.setState({msg:null}))}},{key:"render",value:function(){return this.props.isAuthenticated?r.a.createElement(p.a,{to:"/"}):r.a.createElement(f.a,null,this.state.msg?r.a.createElement(W.a,{color:"danger"},this.state.msg):null,r.a.createElement($.a,{onSubmit:this.handleSubmit},r.a.createElement(Q.a,null,r.a.createElement(Y.a,{for:"name"},"Name"),r.a.createElement(Z.a,{onChange:this.handleChange,type:"name",name:"name",placeholder:"Name"})),r.a.createElement(Q.a,null,r.a.createElement(Y.a,{for:"name"},"Email"),r.a.createElement(Z.a,{onChange:this.handleChange,type:"email",name:"email",placeholder:"Email"})),r.a.createElement(Q.a,null,r.a.createElement(Y.a,{for:"password"},"Pasword"),r.a.createElement(Z.a,{onChange:this.handleChange,type:"password",name:"password",placeholder:"Password"})),r.a.createElement(E.a,null,"Submit")))}}]),t}(n.Component),te=Object(S.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{signup:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var r=JSON.stringify({name:t,email:a,password:n});w.a.post("/users",r,{headers:{"Content-type":"application/json"}}).then((function(t){return e({type:"SIGNUP_SUCCESS",payload:t.data})})).catch((function(t){e(_(t.response.data,t.response.status,"SIGNUP_FAIL")),e({type:"SIGNUP_FAIL"})}))}},clearErrors:C})(ee),ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",msg:null},a.handleChange=function(e){a.setState(Object(V.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){a.props.clearErrors(),e.preventDefault();var t=a.state,n={email:t.email,password:t.password};a.props.signin(n)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.error;t!==e.error&&("SIGNIN_FAIL"===t.id?this.setState({msg:t.msg.msg}):this.setState({msg:null}))}},{key:"render",value:function(){return this.props.isAuthenticated?r.a.createElement(p.a,{to:"/"}):r.a.createElement(f.a,null,this.state.msg?r.a.createElement(W.a,{color:"danger"},this.state.msg):null,r.a.createElement($.a,{onSubmit:this.handleSubmit},r.a.createElement(Q.a,null,r.a.createElement(Y.a,{for:"name"},"Email"),r.a.createElement(Z.a,{onChange:this.handleChange,type:"email",name:"email",placeholder:"Email"})),r.a.createElement(Q.a,null,r.a.createElement(Y.a,{for:"password"},"Pasword"),r.a.createElement(Z.a,{onChange:this.handleChange,type:"password",name:"password",placeholder:"Password"})),r.a.createElement(E.a,null,"Login")))}}]),t}(n.Component),ne=Object(S.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{signin:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});w.a.post("/auth",n,{headers:{"Content-type":"application/json"}}).then((function(t){return e({type:"SIGNIN_SUCCESS",payload:t.data})})).catch((function(t){e(_(t.response.data,t.response.status,"SIGNIN_FAIL")),e({type:"SIGNIN_FAIL"})}))}},clearErrors:C})(ae),re=a(152),oe=a(153);var le=function(){return r.a.createElement(f.a,null,r.a.createElement(U.a,{flush:!0},r.a.createElement(F.a,{disabled:!0,tag:"a",href:"#"},"Othmane followed you"),r.a.createElement(F.a,{disabled:!0,tag:"a",href:"#"},"Othmane responded to your post"),r.a.createElement(F.a,{disabled:!0,tag:"a",href:"#"},"Bill Gates has added a book to his library")))},ce=a(156),se=a(145),ie=a(146),ue=a(147),me=a(157),he=a(158),pe=a(159),de=a(148),ge=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,bookDropdownOpen:!1,highlightDropdownOpen:!1,bookToShare:null,highlightToShare:"",comment:""},a.openPostModal=function(){a.setState({modal:!a.state.modal})},a.toggleBookDropDown=function(){a.setState({bookDropdownOpen:!a.state.bookDropdownOpen})},a.toggleHighlightDropDown=function(){a.setState({highlightDropdownOpen:!a.state.highlightDropdownOpen})},a.handleCommentChange=function(e){a.setState({comment:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={username:a.props.user.name,book_id:a.state.bookToShare.book_id,highlight_author:a.state.bookToShare.author,highlight:a.state.highlightToShare,comment:a.state.comment};a.props.addPost(t),a.setState({bookToShare:null,highlightToShare:"",comment:"",modal:!1}),console.log(t)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books,a=this.state,n=a.bookToShare,o=a.highlightToShare;return r.a.createElement("div",null,r.a.createElement(E.a,{color:"warning",onClick:this.openPostModal},"Share insight"),r.a.createElement(ce.a,{isOpen:this.state.modal,toggle:this.openPostModal},r.a.createElement(se.a,null,r.a.createElement("blockquote",null,n?r.a.createElement("div",null,r.a.createElement("p",{className:"highlight"},o),r.a.createElement("footer",null,"- ",n.author)):null),r.a.createElement(Z.a,{onChange:this.handleCommentChange,value:this.state.comment,placeholder:"Share your thoughts..."})),r.a.createElement(ie.a,null,r.a.createElement(ue.a,null,r.a.createElement(me.a,{addonType:"append",isOpen:this.state.bookDropdownOpen,toggle:this.toggleBookDropDown},r.a.createElement(he.a,{caret:!0},"Choose a Book"),r.a.createElement(pe.a,{className:"drop-down-menu"},t.map((function(t){return r.a.createElement(de.a,{onClick:function(){return e.setState({bookToShare:t})},key:t.book_id},t.title)})))),r.a.createElement(Z.a,{readOnly:!0,value:n?n.title:""})),r.a.createElement(ue.a,null,r.a.createElement(me.a,{addonType:"append",isOpen:this.state.highlightDropdownOpen,toggle:this.toggleHighlightDropDown},r.a.createElement(he.a,{caret:!0},"Choose a Highlight"),r.a.createElement(pe.a,{className:"drop-down-menu"},n?n.highlights.map((function(t,a){return r.a.createElement(de.a,{key:a,onClick:function(){return e.setState({highlightToShare:t})}},t)})):r.a.createElement(de.a,{disabled:!0},"Choose a book first"))),r.a.createElement(E.a,{className:"ml-3",onClick:this.handleSubmit,color:"secondary"},"Share")))))}}]),t}(n.Component),Ee=a(149),be=a(150),fe=a(151);var Oe=function(e){var t=e.highlight,a=e.highlightAuthor;return r.a.createElement("div",null,r.a.createElement("blockquote",null,r.a.createElement("h2",{className:"highlight"},t),r.a.createElement("footer",null,a)))};var ke=function(e){var t=e.post;return r.a.createElement(Ee.a,null,r.a.createElement(be.a,null,t.username?t.username:"anonymous"),r.a.createElement(fe.a,null,r.a.createElement(Oe,{highlight:t.highlight,highlightAuthor:t.highlight_author}),r.a.createElement("h4",{className:"comment"},t.comment)))},ye=function(){return{type:"POSTS_LOADING"}},ve=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getBooks(),this.props.getPosts()}},{key:"render",value:function(){var e=this.props.books.books,t=this.props.posts.posts;return r.a.createElement(f.a,{className:"feed"},r.a.createElement(ge,{books:e,addPost:this.props.addPost,user:this.props.auth.user}),r.a.createElement("br",null),r.a.createElement("div",{className:"toast-block"},t.map((function(e){return r.a.createElement(ke,{key:e._id,post:e})}))))}}]),t}(n.Component),Se=Object(S.b)((function(e){return{books:e.book,posts:e.post,auth:e.auth}}),{getBooks:M,getPosts:function(){return function(e,t){e(ye()),w.a.get("/posts",N(t)).then((function(t){return e({type:"GET_POSTS",payload:t.data})})).catch((function(t){return e(_(t.response.data,t.response.status))}))}},addPost:function(e){return function(t,a){w.a.post("/posts",e,N(a)).then((function(e){return t({type:"ADD_POST",payload:e.data})})).catch((function(e){return t(_(e.response.data,e.response.status))}))}}})(ve),je=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuthenticated?r.a.createElement(f.a,null,r.a.createElement(re.a,null,r.a.createElement(oe.a,{xs:"8"},r.a.createElement(Se,null)),r.a.createElement(oe.a,{xs:"4"},r.a.createElement(le,null))),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement(p.a,{to:"/sign-in"})}}]),t}(n.Component),we=Object(S.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))(je),_e=a(154),Ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a.setLoading=function(e){e.preventDefault(),a.setState({loading:!a.state.loading})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("form",{onSubmit:this.setLoading},r.a.createElement(Z.a,{placeholder:"Search ..."})),r.a.createElement("br",null),this.state.loading?r.a.createElement(f.a,null,r.a.createElement(_e.a,{color:"warning"})):null)}}]),t}(n.Component),Ne=a(155);var Ae=function(e){var t=e.books;return r.a.createElement(U.a,null,t.map((function(e){return r.a.createElement(F.a,{key:e._id},r.a.createElement(Ne.a,null,r.a.createElement(Ne.a,{left:!0,target:"_blank",href:e.amazon_link},r.a.createElement(Ne.a,{className:"mr-3",object:!0,src:e.cover,alt:"book cover"})),r.a.createElement(Ne.a,{body:!0},r.a.createElement(Ne.a,{heading:!0},e.title),r.a.createElement("p",null,e.author))))})))};var De=function(e){var t=e.posts;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(ke,{post:e})})))},Ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:"1"},a.toggle=function(e){a.state.activeTab!==e&&a.setState({activeTab:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getBooks()}},{key:"render",value:function(){var e=this,t=this.toggle,a=this.state.activeTab,n=this.props.book.books,o=this.props.post.posts;return null==this.props.auth.user?r.a.createElement(f.a,null,r.a.createElement(_e.a,{color:"warning"})):!1===this.props.isAuthenticated?r.a.createElement(p.a,{to:"/sign-in"}):r.a.createElement(f.a,null,r.a.createElement(Ne.a,{className:"profile-description"},r.a.createElement(Ne.a,{left:!0},r.a.createElement(Ne.a,{className:"profile-image",object:!0,src:"https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",alt:"Profile image"})),r.a.createElement(Ne.a,{body:!0},r.a.createElement(Ne.a,{heading:!0},"Bill Gates"),r.a.createElement("p",null,'I\'m a book lover. I regularly schedule off weeks that I dedicate to reading and catching up on my "To Read List".',r.a.createElement("br",null),"Follow me and you'll get exclusive access to my library"),r.a.createElement(E.a,{className:"follow-btn",size:"lg",color:"warning"},"Follow"))),r.a.createElement("div",null,r.a.createElement(v.a,{tabs:!0},r.a.createElement(d.a,null,r.a.createElement(g.a,{className:K()({active:"1"===a}),onClick:function(){t("1")}},"Library")),r.a.createElement(d.a,null,r.a.createElement(g.a,{className:K()({active:"2"===a}),onClick:function(){t("2"),e.props.getPostsByUserId(e.props.auth.user._id)}},"Posts"))),r.a.createElement(B.a,{activeTab:a},r.a.createElement(R.a,{tabId:"1"},r.a.createElement(re.a,null,r.a.createElement(oe.a,{sm:"12"},r.a.createElement(Ae,{books:n})))),r.a.createElement(R.a,{tabId:"2"},r.a.createElement(re.a,null,r.a.createElement(oe.a,{sm:"12"},r.a.createElement(De,{posts:o})))))))}}]),t}(n.Component),Te=Object(S.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,auth:e.auth,book:e.book,post:e.post}}),{getBooks:M,getPostsByUserId:function(e){return function(t,a){t(ye()),w.a.get("/posts",{params:{userId:e}},N(a)).then((function(e){return t({type:"GET_POSTS",payload:e.data})})).catch((function(e){return t(_(e.response.data,e.response.status))}))}}})(Ie),Le=a(30),Pe=a(72),Ge=a(41),Be=a(18),Re={books:[],loading:!1},Ue={msg:{},status:null,id:null},Fe={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},xe={posts:[],loading:!1},Ke=Object(Le.c)({book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return Object(Be.a)({},e,{books:t.payload,loading:!1});case"ADD_BOOKS":return Object(Be.a)({},e,{books:[t.payload].concat(Object(Ge.a)(e.books))});case"DELETE_BOOK":return Object(Be.a)({},e,{books:e.books.filter((function(e){return e._id!==t.payload}))});case"BOOKS_LOADING":return Object(Be.a)({},e,{loading:!0});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(Be.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(Be.a)({},e,{isAuthenticated:!0,isLoading:!1,user:t.payload});case"SIGNIN_SUCCESS":case"SIGNUP_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(Be.a)({},e,{},t.payload,{isAuthenticated:!0,isLoading:!1});case"AUTH_ERROR":case"SIGNIN_FAIL":case"SIGNOUT_SUCCESS":case"SIGNUP_FAIL":return localStorage.removeItem("token"),Object(Be.a)({},e,{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return Object(Be.a)({},e,{posts:t.payload,loading:!1});case"ADD_POST":return Object(Be.a)({},e,{posts:[t.payload].concat(Object(Ge.a)(e.posts))});case"POSTS_LOADING":return Object(Be.a)({},e,{loading:!0});default:return e}}}),He=[Pe.a],Me=Object(Le.e)(Ke,{},Object(Le.d)(Le.a.apply(void 0,He),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Xe=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){Me.dispatch((function(e,t){e({type:"USER_LOADING"}),w.a.get("/auth/user",N(t)).then((function(t){return e({type:"USER_LOADED",payload:t.data})})).catch((function(t){e(_(t.response.data,t.response.status)),e({type:"AUTH_ERROR"})}))}))}},{key:"render",value:function(){return r.a.createElement(S.a,{store:Me},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:we}),r.a.createElement(p.b,{path:"/library",component:q}),r.a.createElement(p.b,{path:"/sign-up",component:te}),r.a.createElement(p.b,{path:"/sign-in",component:ne}),r.a.createElement(p.b,{path:"/profile",component:Te}),r.a.createElement(p.b,{path:"/explore",component:Ce})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,a){e.exports=a(125)},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.730eb7cf.chunk.js.map