(this["webpackJsonpsoveltava-harjoitustyo-cmipo003xamk"]=this["webpackJsonpsoveltava-harjoitustyo-cmipo003xamk"]||[]).push([[0],{635:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),c=a.n(r),s=a(27),l=a(680),o=a(705),j=a(695),d=a(686),b=a(120),u=a(710),h=a(685),x=a(684),m=a(79),O=a(143),p=a.n(O),g=a(636),f=a(47),v=a.n(f),y=a(706),k=a(1),w=Object(l.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function S(e){var t=e.jobs,a=e.setJobs,n=e.loggedIn,r=w(),c=i.a.useState(!1),l=Object(s.a)(c,2),o=l[0],j=l[1];return Object(k.jsx)("div",{container:!0,className:r.root,children:t.map((function(e){return Object(k.jsxs)(u.a,{expanded:o===e.id,onChange:(i=e.id,function(e,t){j(!!t&&i)}),children:[Object(k.jsxs)(x.a,{expandIcon:Object(k.jsx)(p.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(k.jsxs)(m.a,{className:r.heading,children:[e.jobTitle,", ",e.employer]}),Object(k.jsxs)(m.a,{className:r.secondaryHeading,children:[Object(y.a)(e.startDate,"dd.MM.y")," - ",Object(y.a)(e.endDate,"dd.MM.y")]})]}),Object(k.jsx)(h.a,{children:Object(k.jsxs)(d.a,{container:!0,spacing:4,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{children:e.description})}),n?Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(g.a,{onClick:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));a(n)}(e.id)},children:Object(k.jsx)(v.a,{})})}):Object(k.jsx)(k.Fragment,{})]})})]},e.id);var i}))})}var T=a(687),C=a(688),N=Object(l.a)((function(e){return{root:{display:"flex",marginBottom:10},content:{flex:"1 0 auto"}}}));function I(e){var t=e.studies,a=e.setStudies,n=e.loggedIn,i=N();return Object(k.jsx)(k.Fragment,{children:t.map((function(e){return Object(k.jsx)(T.a,{className:i.root,children:Object(k.jsxs)(C.a,{className:i.content,children:[Object(k.jsx)(m.a,{component:"h6",variant:"h6",children:e.school}),Object(k.jsxs)(m.a,{variant:"subtitle2",color:"textSecondary",children:[e.field,", ",e.startTime," - ",e.endTime]}),n?Object(k.jsx)(g.a,{onClick:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));a(n)}(e.id)},children:Object(k.jsx)(v.a,{})}):Object(k.jsx)(k.Fragment,{})]})},e.id)}))})}var W=Object(l.a)((function(e){return{root:{display:"flex",marginBottom:10},content:{flex:"1 0 auto"}}}));function z(e){var t=e.courses,a=e.setCourses,n=e.loggedIn,i=W();return Object(k.jsx)(k.Fragment,{children:t.map((function(e){return Object(k.jsx)(T.a,{className:i.root,children:Object(k.jsxs)(C.a,{className:i.content,children:[Object(k.jsxs)(m.a,{component:"h6",variant:"h6",children:[e.course,", ",e.school]}),Object(k.jsxs)(m.a,{variant:"subtitle2",color:"textSecondary",children:[e.startTime," - ",e.endTime]}),n?Object(k.jsx)(g.a,{onClick:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));a(n)}(e.id)},children:Object(k.jsx)(v.a,{})}):Object(k.jsx)(k.Fragment,{})]})},e.id)}))})}var B=a(5),D=a(689),L=Object(B.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(D.a),P=Object(l.a)({root:{minWidth:275},pos:{marginBottom:12}});function R(e){var t=e.techs,a=e.setTechs,n=e.loggedIn,i=P();return Object(k.jsx)(T.a,{className:i.root,variant:"outlined",children:Object(k.jsxs)(C.a,{children:[Object(k.jsx)(m.a,{variant:"h5",component:"h2",children:"Teknologiat"}),Object(k.jsx)(m.a,{className:i.pos,color:"textSecondary",children:"Osaamistaso"}),t.map((function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(d.a,{container:!0,children:[Object(k.jsx)(d.a,{item:!0,xs:10,children:Object(k.jsxs)(m.a,{variant:"body2",component:"p",children:[e.title,Object(k.jsx)(L,{variant:"determinate",value:e.value})]})}),n?Object(k.jsx)(d.a,{xs:2,children:Object(k.jsx)(g.a,{onClick:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));a(n)}(e.id)},children:Object(k.jsx)(v.a,{})})}):Object(k.jsx)(k.Fragment,{})]})})}))]})})}var F=a(712),K=a(109),M=a.n(K),U=Object(l.a)((function(e){return{root:{minWidth:275,display:"flex",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},pos:{marginBottom:12},chip:{margin:e.spacing(.5)}}}));function A(e){var t=e.skills,a=e.setSkills,n=e.loggedIn,i=U();return Object(k.jsx)(T.a,{className:i.root,variant:"outlined",children:Object(k.jsxs)(C.a,{children:[Object(k.jsx)(m.a,{variant:"h5",component:"h2",children:"Taidot"}),Object(k.jsx)(m.a,{className:i.pos,color:"textSecondary",children:"Muut ohjelmistot ja osaaminen"}),n?t.map((function(e){var t,n;return"React"===e.label&&(t=Object(k.jsx)(M.a,{})),Object(k.jsx)("li",{children:Object(k.jsx)(F.a,{icon:t,label:e.label,onDelete:"React"===e.label?void 0:(n=e,function(){a((function(e){return e.filter((function(e){return e.id!==n.id}))}))}),className:i.chip,color:"primary"})},e.key)})):t.map((function(e){var t;return"React"===e.label&&(t=Object(k.jsx)(M.a,{})),Object(k.jsx)("li",{children:Object(k.jsx)(F.a,{icon:t,label:e.label,className:i.chip,color:"primary"})},e.key)}))]})})}var H=Object(l.a)((function(e){return{paper:{backgroundColor:"#37474f",color:"white",padding:8}}}));function J(e){var t=e.title,a=H();return Object(k.jsx)(b.a,{className:a.paper,children:Object(k.jsx)(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,children:t})})}var G=a(41),E=a(707),V=a(35),q=a(708),X=a(144),Q=a(163),Y=a(692),Z=a(26),$=a(709),_=Object(l.a)((function(e){return{root:{display:"flex",padding:20}}}));function ee(e){var t=e.jobs,a=e.setJobs,i=_(),r=Object(n.useState)(new Date),c=Object(s.a)(r,2),l=c[0],o=c[1],j=Object(n.useState)(new Date),u=Object(s.a)(j,2),h=u[0],x=u[1],O=Object(Z.e)(),p=Object(n.useRef)({}),g=function(e){p.current[e.target.name]=e.target.value};return Object(k.jsx)(b.a,{children:Object(k.jsx)("div",{className:i.root,children:Object(k.jsx)(V.a,{utils:X.a,locale:Q.fi,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Lis\xe4\xe4 uusi ty\xf6"})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(q.a,{label:"Alkamisaika",inputVariant:"outlined",fullWidth:!0,size:"small",cancelLabel:"Peruuta",ampm:!1,value:l,onChange:o,format:"dd.MM.y",name:"alku"})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(q.a,{label:"P\xe4\xe4ttymisaika",inputVariant:"outlined",fullWidth:!0,size:"small",cancelLabel:"Peruuta",ampm:!1,value:h,onChange:x,format:"dd.MM.y",name:"loppu"})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Ty\xf6nantaja",variant:"outlined",fullWidth:!0,size:"small",name:"employer",onChange:g})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Titteli",variant:"outlined",fullWidth:!0,size:"small",name:"jobTitle",onChange:g})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Kuvaus",variant:"outlined",fullWidth:!0,size:"small",name:"description",onChange:g})}),Object(k.jsx)(d.a,{item:!0,xs:4,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault();var n={id:Object($.a)(),employer:p.current.employer,jobTitle:p.current.jobTitle,startDate:l,endDate:h,description:p.current.description};a([].concat(Object(G.a)(t),[n])),O.push("/")},children:"Lis\xe4\xe4"})})]})})})})}var te=Object(l.a)((function(e){return{root:{display:"flex",padding:20}}}));function ae(e){var t=e.studies,a=e.setStudies,i=te(),r=Object(Z.e)(),c=Object(n.useRef)({}),s=function(e){e.preventDefault();var n={id:Object($.a)(),school:c.current.school,startTime:c.current.startTime,endTime:c.current.endTime,field:c.current.field};a([].concat(Object(G.a)(t),[n])),r.push("/")},l=function(e){c.current[e.target.name]=e.target.value};return Object(k.jsx)("form",{onSubmit:s,children:Object(k.jsx)(b.a,{children:Object(k.jsx)("div",{className:i.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Lis\xe4\xe4 uusi tutkinto"})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Koulu",variant:"outlined",fullWidth:!0,size:"small",name:"school",onChange:l})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Tutkinto",variant:"outlined",fullWidth:!0,size:"small",name:"field",onChange:l})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Aloitusaika",variant:"outlined",fullWidth:!0,size:"small",name:"startTime",onChange:l})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"P\xe4\xe4ttymisaika",variant:"outlined",fullWidth:!0,size:"small",name:"endTime",onChange:l})}),Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",onClick:s,children:"Lis\xe4\xe4"})})]})})})})}var ne=Object(l.a)((function(e){return{root:{display:"flex",padding:20}}}));function ie(e){var t=e.courses,a=e.setCourses,i=ne(),r=Object(Z.e)(),c=Object(n.useRef)({}),s=function(e){c.current[e.target.name]=e.target.value};return Object(k.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object($.a)(),school:c.current.school,course:c.current.course,startTime:c.current.startTime,endTime:c.current.endTime};a([].concat(Object(G.a)(t),[n])),r.push("/")},children:Object(k.jsx)(b.a,{children:Object(k.jsx)("div",{className:i.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Lis\xe4\xe4 uusi kurssi"})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Kurssi",variant:"outlined",fullWidth:!0,size:"small",name:"course",onChange:s})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Koulu",variant:"outlined",fullWidth:!0,size:"small",name:"school",onChange:s})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"Aloitusaika",variant:"outlined",fullWidth:!0,size:"small",name:"startTime",onChange:s})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(E.a,{label:"P\xe4\xe4ttymisaika",variant:"outlined",fullWidth:!0,size:"small",name:"endTime",onChange:s})}),Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",children:"Lis\xe4\xe4"})})]})})})})}var re=a(714),ce=Object(l.a)((function(e){return{root:{display:"flex",padding:20}}}));function se(e){var t=e.techs,a=e.setTechs,i=ce(),r=Object(Z.e)(),c=Object(n.useRef)({}),l=Object(n.useState)(),o=Object(s.a)(l,2),j=o[0],u=o[1];return console.log(j),Object(k.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object($.a)(),title:c.current.title,value:parseInt(j)};a([].concat(Object(G.a)(t),[n])),r.push("/")},children:Object(k.jsx)(b.a,{className:i.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Lis\xe4\xe4 uusi teknologia"})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Teknologia",variant:"outlined",fullWidth:!0,size:"small",name:"title",onChange:function(e){c.current[e.target.name]=e.target.value}})}),Object(k.jsxs)(d.a,{item:!0,xs:12,children:[Object(k.jsx)(m.a,{variant:"body2",children:"Osaamistaso (%)"}),Object(k.jsx)(re.a,{defaultValue:50,name:"value","aria-labelledby":"discrete-slider-small-steps",step:5,marks:!0,min:0,max:100,valueLabelDisplay:"auto",onChange:function(e,t){return u(t)}})]}),Object(k.jsx)(d.a,{item:!0,xs:4,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",children:"Lis\xe4\xe4"})})]})})})}var le=Object(l.a)((function(e){return{root:{display:"flex",padding:20}}}));function oe(e){var t=e.skills,a=e.setSkills,i=le(),r=Object(Z.e)(),c=Object(n.useRef)({});return Object(k.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object($.a)(),label:c.current.label};a([].concat(Object(G.a)(t),[n])),r.push("/")},children:Object(k.jsx)(b.a,{className:i.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:1,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Lis\xe4\xe4 uusi taito"})}),Object(k.jsx)(d.a,{item:!0,xs:9,children:Object(k.jsx)(E.a,{label:"Taito",variant:"outlined",fullWidth:!0,size:"small",name:"label",onChange:function(e){c.current[e.target.name]=e.target.value}})}),Object(k.jsx)(d.a,{item:!0,xs:3,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",children:"Lis\xe4\xe4"})})]})})})}var je=Object(l.a)((function(e){return{appBarSpacer:e.mixins.toolbar,container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}));function de(e){var t=e.loggedIn,a=je(),n=i.a.useState([{id:Object($.a)(),employer:"Riversoft Oy",startDate:new Date(2020,9,28),endDate:new Date,jobTitle:"Full stack developer",description:"Full stack developer"}]),r=Object(s.a)(n,2),c=r[0],l=r[1],o=i.a.useState([{id:Object($.a)(),school:"Kaakkois-Suomen ammattikorkeakoulu",startTime:"syksy 2020",endTime:"jatkuu",field:"Tradenomi, tietojenk\xe4sittely"}]),u=Object(s.a)(o,2),h=u[0],x=u[1],m=i.a.useState([{id:Object($.a)(),course:"Elements of AI",school:"Helsingin yliopisto",startTime:"syksy 2020",endTime:"jatkuu"}]),O=Object(s.a)(m,2),p=O[0],g=O[1],f=i.a.useState([{id:Object($.a)(),title:"C#",value:75}]),v=Object(s.a)(f,2),y=v[0],w=v[1],T=i.a.useState([{id:Object($.a)(),label:"Adobe Photoshop"}]),C=Object(s.a)(T,2),N=C[0],W=C[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:a.appBarSpacer}),Object(k.jsx)(j.a,{maxWidth:"lg",className:a.container,children:Object(k.jsxs)(d.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:3,children:[Object(k.jsx)(d.a,{item:!0,xs:8,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(J,{title:"Ty\xf6historia"})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(b.a,{style:{backgroundColor:"lightgreen"},children:Object(k.jsx)(S,{jobs:c,setJobs:l,loggedIn:t})})}),t?Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(ee,{jobs:c,setJobs:l})}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(J,{title:"Koulutus"})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(I,{studies:h,setStudies:x,loggedIn:t})}),t?Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(ae,{studies:h,setStudies:x})}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(J,{title:"Kurssit"})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(z,{courses:p,setCourses:g,loggedIn:t})}),t?Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(ie,{courses:p,setCourses:g})}):Object(k.jsx)(k.Fragment,{})]})}),Object(k.jsx)(d.a,{item:!0,xs:4,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(R,{techs:y,setTechs:w,loggedIn:t})}),t?Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(se,{techs:y,setTechs:w})}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(A,{skills:N,setSkills:W,loggedIn:t})}),t?Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(oe,{skills:N,setSkills:W})}):Object(k.jsx)(k.Fragment,{})]})})]})})]})}var be=a(3),ue=a(696),he=a(693),xe=a(164),me=a.n(xe),Oe=a(165),pe=a.n(Oe),ge=a(28),fe=Object(l.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1}}}));function ve(e){var t=e.open,a=e.handleDrawerOpen,n=fe();return Object(k.jsx)(ue.a,{position:"absolute",className:Object(be.a)(n.appBar,t&&n.appBarShift),style:{backgroundColor:"#263238"},children:Object(k.jsxs)(he.a,{className:n.toolbar,children:[Object(k.jsx)(g.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:a,className:Object(be.a)(n.menuButton,t&&n.menuButtonHidden),children:Object(k.jsx)(me.a,{})}),Object(k.jsx)(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title,children:"R\xe9sum\xe9"}),Object(k.jsx)(g.a,{color:"inherit",component:ge.b,to:"/Login",children:Object(k.jsx)(pe.a,{})})]})})}var ye=a(96),ke=a(57),we=a(711),Se=a(694),Te=a(697),Ce=a(166),Ne=a.n(Ce),Ie=a(169),We=a.n(Ie),ze=a(699),Be=a(698),De=a(700),Le=a(168),Pe=a.n(Le),Re=a(167),Fe=a.n(Re),Ke=Object(l.a)((function(e){return{toolbarIcon:Object(ke.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),backgroundColor:"#37474f"},drawerPaperClose:Object(ye.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),drawerStyle:{backgroundColor:"#37474f"}}}));function Me(e){var t=e.open,a=e.handleDrawerClose,n=Ke();return Object(k.jsx)("div",{className:n.drawerStyle,children:Object(k.jsxs)(we.a,{variant:"permanent",classes:{paper:Object(be.a)(n.drawerPaper,!t&&n.drawerPaperClose)},open:t,children:[Object(k.jsx)("div",{className:n.toolbarIcon,children:Object(k.jsx)(g.a,{onClick:a,children:Object(k.jsx)(Ne.a,{style:{color:"white"}})})}),Object(k.jsx)(Te.a,{}),Object(k.jsxs)(Se.a,{children:[Object(k.jsxs)(Be.a,{button:!0,component:ge.b,to:"/",children:[Object(k.jsx)(ze.a,{children:Object(k.jsx)(Fe.a,{style:{color:"white"}})}),Object(k.jsx)(De.a,{primary:"Resum\xe9",style:{color:"white"}})]}),Object(k.jsxs)(Be.a,{button:!0,component:ge.b,to:"/Projects",children:[Object(k.jsx)(ze.a,{children:Object(k.jsx)(Pe.a,{style:{color:"white"}})}),Object(k.jsx)(De.a,{primary:"Projects",style:{color:"white"}})]}),Object(k.jsxs)(Be.a,{button:!0,component:ge.b,to:"/About",children:[Object(k.jsx)(ze.a,{children:Object(k.jsx)(We.a,{style:{color:"white"}})}),Object(k.jsx)(De.a,{primary:"About me",style:{color:"white"}})]})]}),Object(k.jsx)(Te.a,{})]})})}var Ue=a(701),Ae=a(703),He=a(702),Je=Object(l.a)({media:{height:140},card:{height:"100%",display:"flex",flexDirection:"column"}});function Ge(e){var t=e.projects,a=e.setProjects,n=e.loggedIn,i=Je();return Object(k.jsx)(d.a,{container:!0,spacing:4,children:t.map((function(e){return Object(k.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsxs)(T.a,{className:i.card,children:[Object(k.jsxs)(Ue.a,{children:[Object(k.jsx)(He.a,{className:i.media,image:e.image,title:"Image"}),Object(k.jsxs)(C.a,{children:[Object(k.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(k.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description}),n?Object(k.jsx)(g.a,{onClick:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));a(n)}(e.id)},children:Object(k.jsx)(v.a,{})}):Object(k.jsx)(k.Fragment,{})]})]}),Object(k.jsxs)(Ae.a,{children:[Object(k.jsx)(Y.a,{size:"small",color:"primary",href:e.publishUrl,children:"Sovellus"}),Object(k.jsx)(Y.a,{size:"small",color:"primary",href:e.projectUrl,children:"L\xe4hdekoodi"})]})]})},e.id)}))})}var Ee=a.p+"static/media/projekti.44b8f5cb.png",Ve=a(690),qe=a(691),Xe=a(704),Qe=Object(l.a)((function(e){return{root:{display:"flex",padding:20}}}));function Ye(e){var t=e.projects,a=e.setProjects,i=e.open,r=e.setOpen,c=Qe(),s=Object(Z.e)(),l=Object(n.useRef)({}),o=function(e){l.current[e.target.name]=e.target.value};return Object(k.jsx)("div",{children:Object(k.jsxs)(Ve.a,{open:i,onClose:function(){r(!1)},"aria-labelledby":"form-dialog-title",children:[Object(k.jsx)(Xe.a,{id:"form-dialog-title",children:"Lis\xe4\xe4 uusi projekti"}),Object(k.jsx)(qe.a,{children:Object(k.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object($.a)(),title:l.current.title,description:l.current.description,image:l.current.image,projectUrl:l.current.projectUrl,publishUrl:l.current.publishUrl};a([].concat(Object(G.a)(t),[n])),s.push("/projects")},children:Object(k.jsx)("div",{className:c.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:2,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Otsikko",variant:"outlined",fullWidth:!0,size:"small",name:"title",onChange:o})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Kuvaus",variant:"outlined",fullWidth:!0,size:"small",name:"description",onChange:o})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Kuvan polku",variant:"outlined",fullWidth:!0,size:"small",name:"image",onChange:o})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Projektin polku",variant:"outlined",fullWidth:!0,size:"small",name:"projectUrl",onChange:o})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(E.a,{label:"Sovelluksen polku",variant:"outlined",fullWidth:!0,size:"small",name:"publishUrl",onChange:o})}),Object(k.jsx)(d.a,{item:!0,xs:12}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Lis\xe4\xe4"})}),Object(k.jsx)(d.a,{item:!0,xs:6,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",fullWidth:!0,children:"Peruuta"})})]})})})})]})})}var Ze=Object(l.a)((function(e){return{appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4),margin:80}}}));function $e(e){var t=e.loggedIn,a=Ze(),n=i.a.useState(!1),r=Object(s.a)(n,2),c=r[0],l=r[1],o=i.a.useState([{id:Object($.a)(),title:"Verkostoitumisj\xe4rjestelm\xe4",description:"Helsingin yliopiston Web-palvelinohjelmointi 2020 -kurssin lopputy\xf6, jossa piti tehd\xe4 LinkedIni\xe4 vastaava verkostoitumispalvelu. Teht\xe4v\xe4ss\xe4 tuli tehd\xe4 sek\xe4 Backend ett\xe4 Frontend k\xe4ytt\xe4en Java-ohjelmointikielt\xe4.",image:"".concat(Ee),projectUrl:"https://github.com/Sha3dyn/Wepa-projekti",publishUrl:"https://stark-crag-75293.herokuapp.com/login"}]),d=Object(s.a)(o,2),b=d[0],u=d[1];return Object(k.jsxs)("div",{className:a.appBarSpacer,children:[Object(k.jsx)("div",{className:a.content,children:Object(k.jsxs)(j.a,{maxWidth:"lg",className:a.container,children:[t?Object(k.jsx)("div",{style:{marginBottom:10},children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",onClick:function(){l(!0)},children:"Lis\xe4\xe4"})}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(Ge,{projects:b,setProjects:u,loggedIn:t})]})}),Object(k.jsx)(Ye,{projects:b,setProjects:u,open:c,setOpen:l})]})}var _e=a.p+"static/media/kuva.fe62f247.jpg",et=a(170),tt=a.n(et),at=a(174),nt=a.n(at),it=a(176),rt=a.n(it),ct=a(177),st=a.n(ct),lt=a(171),ot=a.n(lt),jt=a(172),dt=a.n(jt),bt=a(173),ut=a.n(bt),ht=a(175),xt=a.n(ht),mt=Object(l.a)((function(e){return{appBarSpacer:e.mixins.toolbar,root:{height:"100vh"},content:{flexGrow:1,overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4),margin:80},image:{backgroundImage:"url(".concat(_e,")"),backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"left",color:"white"}}}));function Ot(){var e=mt();return Object(k.jsx)("div",{className:e.appBarSpacer,children:Object(k.jsx)("div",{className:e.content,children:Object(k.jsx)(j.a,{maxWidth:"lg",className:e.container,children:Object(k.jsxs)(d.a,{container:!0,component:"main",className:e.root,children:[Object(k.jsx)(d.a,{item:!0,xs:!1,sm:4,md:6,className:e.image}),Object(k.jsx)(d.a,{item:!0,xs:12,sm:8,md:6,component:b.a,elevation:6,square:!0,style:{backgroundColor:"#37474f"},children:Object(k.jsxs)("div",{className:e.paper,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{variant:"h4",children:"Tietoa minusta"})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{variant:"subtitle2",paragraph:!0,style:{color:"lightgreen"},children:"35 v / full stack web developer"})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{variant:"body2",paragraph:!0,style:{color:"white"},children:"Laatua, k\xe4ytt\xe4j\xe4yst\xe4v\xe4llisyytt\xe4, tyylikkyytt\xe4 ja tuloksellisuutta arvostava, intohimoinen full stack sovelluskehitt\xe4j\xe4. Taustalla on useapia projekteja niin harrastuspohjalta kuin oikeille asiakkaille oikeiseen k\xe4ytt\xf6\xf6n tulleista sovelluksistakin. Pid\xe4n itseni kehitt\xe4misest\xe4 ja uuden oppimisesta. T\xe4ll\xe4 hetkell\xe4 olen ty\xf6ss\xe4, mutta olen aina valmis ottamaan uusia sivuprojekteja. My\xf6s pelinkehityksen eri osa-alueilta."})}),Object(k.jsx)(Te.a,{style:{backgroundColor:"gray",margin:10}}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Palveluni"})}),Object(k.jsxs)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:8,children:[Object(k.jsxs)(d.a,{item:!0,xs:6,children:[Object(k.jsx)(tt.a,{}),Object(k.jsx)(m.a,{paragraph:!0,variant:"body1",style:{color:"lightgreen"},children:"Sovelluskehitys"}),Object(k.jsx)(m.a,{variant:"body2",children:"Erilaisten sovellusten kehitt\xe4minen tarpeidesi ja toiveidesi mukaisesti."})]}),Object(k.jsxs)(d.a,{item:!0,xs:6,children:[Object(k.jsx)(ot.a,{}),Object(k.jsx)(m.a,{paragraph:!0,variant:"body1",style:{color:"lightgreen"},children:"Graafinen suunnittelu"}),Object(k.jsx)(m.a,{variant:"body2",children:"Erilaiset graafiset suunnitelmat ja toteutukset, kuvank\xe4sittely, pikseli- ja vektorigrafiikka sek\xe4 3D-mallinnus."})]}),Object(k.jsxs)(d.a,{item:!0,xs:6,children:[Object(k.jsx)(dt.a,{}),Object(k.jsx)(m.a,{paragraph:!0,variant:"body1",style:{color:"lightgreen"},children:"Tietokanta"}),Object(k.jsx)(m.a,{paragraph:!0,variant:"body2",children:"Tietokantojen asennukset, konfiguroinnit ja yhteyksien luominen sovelluksesi ja tietokannan v\xe4lille"})]}),Object(k.jsxs)(d.a,{item:!0,xs:6,children:[Object(k.jsx)(ut.a,{}),Object(k.jsx)(m.a,{paragraph:!0,variant:"body1",style:{color:"lightgreen"},children:"Tietoturva"}),Object(k.jsx)(m.a,{paragraph:!0,variant:"body2",children:"Tietoturvan arvioinnit ja strategian laatiminen"})]})]}),Object(k.jsx)(Te.a,{style:{backgroundColor:"gray",margin:10}}),Object(k.jsxs)(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(g.a,{href:"https://www.facebook.com/mirka.poikelin",style:{color:"white"},children:Object(k.jsx)(nt.a,{})})}),Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(g.a,{style:{color:"white"},href:"https://www.linkedin.com/in/mirka-poikelin-23198a190/",children:Object(k.jsx)(xt.a,{})})}),Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(g.a,{style:{color:"white"},href:"https://www.instagram.com/sha3dyn/",children:Object(k.jsx)(rt.a,{})})}),Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(g.a,{style:{color:"white"},href:"https://github.com/Sha3dyn",children:Object(k.jsx)(st.a,{})})})]})]})})]})})})})}var pt=Object(l.a)((function(e){return{root:{display:"flex",marginTop:80,padding:20},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151}}}));function gt(e){var t=e.loggedIn,a=e.setLoggedIn,i=pt(),r=Object(Z.e)(),c=Object(n.useRef)({}),l=Object(n.useState)({}),o=Object(s.a)(l,2),u=o[0],h=o[1],x=function(e){c.current[e.target.name]=e.target.value};return t?Object(k.jsx)(j.a,{maxWidth:"sm",children:Object(k.jsx)(b.a,{className:i.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:1,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Haluatko varmasti kirjautua ulos?"})}),Object(k.jsx)(d.a,{item:!0,xs:3,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",onClick:function(){return a(!1),void r.push("/")},fullWidth:!0,children:"Ok"})}),Object(k.jsx)(d.a,{item:!0,xs:3,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",component:ge.b,to:"/",fullWidth:!0,children:"Peruuta"})})]})})}):Object(k.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={};c.current.username&&c.current.password||(t=Object(ke.a)(Object(ke.a)({},t),{},{username:"T\xe4yt\xe4 kaikki kent\xe4t!"})),"Teppo"===c.current.username&&"Testaaja"===c.current.password||(t=Object(ke.a)(Object(ke.a)({},t),{},{username:"Tarkista tiedot!"})),Object.entries(t).length>0?h(Object(ke.a)({},t)):(a(!0),r.push("/"))},children:Object(k.jsx)(j.a,{maxWidth:"sm",children:Object(k.jsx)(b.a,{className:i.root,children:Object(k.jsxs)(d.a,{container:!0,spacing:1,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(m.a,{paragraph:!0,variant:"h6",children:"Kirjaudu sis\xe4\xe4n"})}),Object(k.jsx)(d.a,{item:!0,xs:4,children:Object(k.jsx)(E.a,{label:"K\xe4ytt\xe4j\xe4tunnus",variant:"outlined",fullWidth:!0,size:"small",name:"username",onChange:x,error:Boolean(u.username),helperText:u.username})}),Object(k.jsx)(d.a,{item:!0,xs:4,children:Object(k.jsx)(E.a,{label:"Salasana",variant:"outlined",fullWidth:!0,size:"small",name:"password",type:"password",onChange:x,error:Boolean(u.password),helperText:u.password})}),Object(k.jsx)(d.a,{item:!0,xs:3,children:Object(k.jsx)(Y.a,{variant:"contained",color:"primary",type:"submit",children:"Lis\xe4\xe4"})})]})})})})}var ft=Object(l.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,height:"100vh",overflow:"auto"}}}));function vt(){var e=ft(),t=i.a.useState(!0),a=Object(s.a)(t,2),n=a[0],r=a[1],c=i.a.useState(!1),l=Object(s.a)(c,2),j=l[0],d=l[1];return Object(k.jsx)("div",{className:e.root,children:Object(k.jsxs)(ge.a,{children:[Object(k.jsx)(o.a,{}),Object(k.jsx)(ve,{open:n,handleDrawerOpen:function(){r(!0)},loggedIn:j,setLoggedIn:d}),Object(k.jsx)(Me,{open:n,handleDrawerClose:function(){r(!1)}}),Object(k.jsxs)("main",{className:e.content,children:[Object(k.jsx)(Z.a,{exact:!0,path:"/",children:Object(k.jsx)(de,{loggedIn:j})}),Object(k.jsx)(Z.a,{exact:!0,path:"/Projects",children:Object(k.jsx)($e,{loggedIn:j})}),Object(k.jsx)(Z.a,{exact:!0,path:"/About",component:Ot}),Object(k.jsx)(Z.a,{exact:!0,path:"/Login",children:Object(k.jsx)(gt,{loggedIn:j,setLoggedIn:d})})]})]})})}var yt=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(vt,{})})};c.a.render(Object(k.jsx)(yt,{}),document.getElementById("root"))}},[[635,1,2]]]);
//# sourceMappingURL=main.1221d1bb.chunk.js.map