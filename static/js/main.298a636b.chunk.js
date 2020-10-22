(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"selectStatus",(function(){return Ee})),a.d(r,"selectIsInitialized",(function(){return fe})),a.d(r,"selectError",(function(){return _e}));var c=a(0),n=a.n(c),s=a(18),i=a.n(s),o=(a(84),a(49)),u=a.n(o),l=a(39),m=a.n(l),p=a(65),d=a.n(p),h=a(66),E=a.n(h),f=n.a.memo((function(e){var t=e.icon,a=e.name;return n.a.createElement("div",null,n.a.createElement("img",{src:t,alt:a}))})),_=a(132),b=n.a.memo((function(e){var t=e.status;return n.a.createElement("div",{className:m.a.header},n.a.createElement("div",{className:m.a.container},n.a.createElement(f,{icon:d.a,name:"Rick"}),n.a.createElement("div",{className:m.a.title},n.a.createElement("h1",null,"Rick & Morty")),n.a.createElement(f,{icon:E.a,name:"Morty"})),n.a.createElement("div",{className:m.a.loader},"loading"===t&&n.a.createElement(_.a,{color:"secondary"})))})),v=a(15),g=a(68),O=a.n(g),j=a(11),N=a(71),x=a(51),S=a.n(x),k=a(40),P=a.n(k),T=a(30),w=n.a.memo((function(e){var t=e.character;return n.a.createElement("div",{className:P.a.wrapper},n.a.createElement(T.b,{to:"/character/".concat(t.id)},n.a.createElement("div",{className:P.a.container},n.a.createElement("div",{className:P.a.characterPhoto},n.a.createElement("img",{src:t.image,alt:t.name})),n.a.createElement("div",{className:P.a.characterName},n.a.createElement("h3",null,t.name)))))})),A=a(69),y=a(70),C=a(26),L="rick-and-morty/charactersList/SET-CHARACTERS",R={info:{},characters:[]},I=function(e){return{type:L,data:e}},D=n.a.memo((function(){var e=Object(c.useState)(!0),t=Object(N.a)(e,2),a=t[0],r=t[1],s=Object(v.b)(),i=Object(v.c)((function(e){return e.charactersList.characters})),o=Object(v.c)((function(e){return e.charactersList.info.next})),u=1;if(o){var l=o.indexOf("?page=")+6;u=Number(o.slice(l))}return n.a.createElement("div",{className:S.a.wrapper},n.a.createElement(A.a,{className:S.a.container,dataLength:i.length,next:function(){o?s(function(e){return{type:"rick-and-morty/charactersList/SET-CHARACTERS-LIST",nextPageNumber:e}}(u)):r(!1)},hasMore:a,loader:""},i.map((function(e){return n.a.createElement(w,{key:e.id,character:e})}))))})),H=a(17),B=a.n(H),z="rick-and-morty/characterPage/SET-CHARACTERS",M="rick-and-morty/characterPage/GET-CHARACTER",X="rick-and-morty/characterPage/SET-FIRST-EPISODE-TITLE",U="rick-and-morty/characterPage/CLEAR-STATE",W={character:{},firstEpisodeTitle:""},J=a(134),Y=n.a.memo((function(){var e,t=Object(j.h)().id,a=Object(v.c)((function(e){return e.characterPage.character})),r=Object(v.c)((function(e){return e.characterPage.firstEpisodeTitle})),s=Object(v.b)();Object(c.useEffect)((function(){return s(function(e){return{type:M,id:e}}(t)),function(){s({type:U})}}),[s,t]);var i=Object(j.g)(),o=a.status,u="";switch(o){case"Alive":u=B.a.characterStatusAlive;break;case"Dead":u=B.a.characterStatusDead}return n.a.createElement("div",{className:B.a.container},n.a.createElement("div",{className:B.a.characterPhoto},n.a.createElement("img",{src:a.image,alt:a.name})),n.a.createElement("div",{className:B.a.characterDescription},n.a.createElement("div",{className:B.a.descriptionBlock},n.a.createElement("div",{className:B.a.characterName},n.a.createElement("h3",null,a.name)),n.a.createElement("div",{className:B.a.characterStatus},n.a.createElement("span",null,n.a.createElement("span",{className:u},o)," - ",a.gender," ")),n.a.createElement("div",{className:B.a.description},n.a.createElement("span",{className:B.a.sectionTitle}," Last known location:"),n.a.createElement("span",{className:B.a.descriptionName},null===(e=a.location)||void 0===e?void 0:e.name)),n.a.createElement("div",{className:B.a.description},n.a.createElement("span",{className:B.a.sectionTitle}," First seen in:"),n.a.createElement("span",{className:B.a.descriptionName},r))),n.a.createElement(J.a,{onClick:function(){i.goBack()},variant:"contained"},"Back")))})),G=a(48),F=a.n(G),K=function(){return n.a.createElement("div",{className:F.a.container},n.a.createElement("span",{className:F.a.errorNumber},"404"),n.a.createElement("span",{className:F.a.text},"Page not found"))},V=function(){return n.a.createElement("div",{className:O.a.container},n.a.createElement(j.d,null,n.a.createElement(j.b,{exact:!0,path:"/",render:function(){return n.a.createElement(j.a,{to:"/charactersList"})}}),n.a.createElement(j.b,{path:"/charactersList",render:function(){return n.a.createElement(D,null)}}),n.a.createElement(j.b,{path:"/character/:id",render:function(){return n.a.createElement(Y,null)}}),n.a.createElement(j.b,{path:"*",render:function(){return n.a.createElement(K,null)}})))},q=a(136),Z=a(138),$=a(137),Q=a(25),ee="rick-and-morty/app/SET-APP-STATUS",te="rick-and-morty/app/INITIALIZE-APP",ae="rick-and-morty/app/SET-ERROR",re={status:"idle",isInitialized:!1,error:null},ce={setAppStatus:function(e){return{type:ee,status:e}},initializeApp:function(){return{type:te}},setAppError:function(e){return{type:ae,error:e}}},ne=a(72),se=a(22),ie=a.n(se),oe=a(10),ue=a(54),le=a.n(ue),me=le.a.create({baseURL:"https://rickandmortyapi.com/api/character/"}),pe=function(e){return me.get("?page=".concat(e))},de=function(e){return me.get("".concat(e))},he=function(e){return le.a.get(e)},Ee=function(e){return e.app.status},fe=function(e){return e.app.isInitialized},_e=function(e){return e.app.error},be=ie.a.mark(xe),ve=ie.a.mark(Se),ge=ie.a.mark(ke),Oe=ie.a.mark(Pe),je=ie.a.mark(Te),Ne=ie.a.mark(we);function xe(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.c)(te,Se);case 2:case"end":return e.stop()}}),be)}function Se(){var e;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(oe.a)(pe);case 3:return e=t.sent,t.next=6,Object(oe.b)(I(e.data));case 6:t.next=14;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(oe.b)(ce.setAppError(t.t0.message?{error:t.t0.message}:{error:"Some error occurred"}));case 12:return t.next=14,Object(oe.b)(ce.setAppStatus("failed"));case 14:case"end":return t.stop()}}),ve,null,[[0,8]])}function ke(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.c)(M,Pe);case 2:case"end":return e.stop()}}),ge)}function Pe(e){var t,a;return ie.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(oe.b)(ce.setAppStatus("loading"));case 2:return r.prev=2,r.next=5,Object(oe.a)(de,e.id);case 5:return t=r.sent,r.next=8,Object(oe.b)((n=t.data,{type:z,character:n}));case 8:return r.next=10,Object(oe.a)(he,t.data.episode[0]);case 10:return a=r.sent,r.next=13,Object(oe.b)((c=a.data,{type:X,episode:c}));case 13:return r.next=15,Object(oe.b)(ce.setAppStatus("success"));case 15:r.next=23;break;case 17:return r.prev=17,r.t0=r.catch(2),r.next=21,Object(oe.b)(ce.setAppError(r.t0.message?{error:r.t0.message}:{error:"Some error occurred"}));case 21:return r.next=23,Object(oe.b)(ce.setAppStatus("failed"));case 23:case"end":return r.stop()}var c,n}),Oe,null,[[2,17]])}function Te(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.c)("rick-and-morty/charactersList/SET-CHARACTERS-LIST",we);case 2:case"end":return e.stop()}}),je)}function we(e){var t;return ie.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(oe.b)(ce.setAppStatus("loading"));case 2:return a.prev=2,a.next=5,Object(oe.a)(pe,e.nextPageNumber);case 5:return t=a.sent,a.next=8,Object(oe.b)(I(t.data));case 8:return a.next=10,Object(oe.b)(ce.setAppStatus("success"));case 10:a.next=18;break;case 12:return a.prev=12,a.t0=a.catch(2),a.next=16,Object(oe.b)(ce.setAppError(a.t0.message?{error:a.t0.message}:{error:"Some error occurred"}));case 16:return a.next=18,Object(oe.b)(ce.setAppStatus("failed"));case 18:case"end":return a.stop()}}),Ne,null,[[2,12]])}var Ae=Object(ne.a)(),ye=Object(Q.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(C.a)({},e,{status:t.status});case te:return Object(C.a)({},e,{isInitialized:!0});case ae:return Object(C.a)({},e,{error:t.error});default:return e}},charactersList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(C.a)({},e,{info:t.data.info,characters:Object(y.a)(e.characters).concat(t.data.results)});default:return e}},characterPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(C.a)({},e,{character:t.character});case X:return Object(C.a)({},e,{firstEpisodeTitle:t.episode.name});case U:return Object(C.a)({},e,{character:{},firstEpisodeTitle:""});default:return e}}}),Ce=Object(Q.e)(ye,Object(Q.d)(Object(Q.a)(Ae),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));function Le(e){var t=Object(v.b)();return Object(c.useMemo)((function(){return Object(Q.b)(e,t)}),[e,t])}Ae.run(xe),Ae.run(ke),Ae.run(Te),window.store=Ce;var Re=function(e){return n.a.createElement($.a,Object.assign({elevation:6,variant:"filled"},e))},Ie=function(){var e=Object(v.c)(r.selectError),t=Le(ce).setAppError,a=function(e,a){t(null)};return n.a.createElement(Z.a,{open:null!==e,autoHideDuration:6e3,onClose:a},n.a.createElement(Re,{onClose:a,severity:"error"},e))},De=n.a.memo((function(){var e=Le(ce).initializeApp;Object(c.useEffect)((function(){e()}),[e]);var t=Object(v.c)(r.selectStatus);return Object(v.c)(r.selectIsInitialized)?n.a.createElement("div",{className:u.a.app},n.a.createElement(Ie,null),n.a.createElement(b,{status:t}),n.a.createElement(V,null)):n.a.createElement("div",{className:u.a.circularProgress},n.a.createElement(q.a,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v.a,{store:Ce},n.a.createElement(T.a,{basename:"/rick-and-morty"},n.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){e.exports={container:"CharacterPage_container__BkTgT",characterPhoto:"CharacterPage_characterPhoto__3euwL",characterDescription:"CharacterPage_characterDescription__2ArcM",descriptionBlock:"CharacterPage_descriptionBlock__2Sn5o",characterName:"CharacterPage_characterName__2bTkJ",characterStatus:"CharacterPage_characterStatus__3Pnk_",characterStatusDead:"CharacterPage_characterStatusDead__1gDyA",characterStatusAlive:"CharacterPage_characterStatusAlive__2tSmf",description:"CharacterPage_description__NYWYX",sectionTitle:"CharacterPage_sectionTitle__1nTLG",descriptionName:"CharacterPage_descriptionName__1CdN0",backButton:"CharacterPage_backButton__1oYLj"}},39:function(e,t,a){e.exports={header:"Header_header__3Ds3u",container:"Header_container__HqwOg",title:"Header_title__2aOO2",loader:"Header_loader__3nR23"}},40:function(e,t,a){e.exports={wrapper:"Character_wrapper__2zd9d",container:"Character_container__KNExY",characterPhoto:"Character_characterPhoto__2jo_I",characterName:"Character_characterName__3ST3N"}},48:function(e,t,a){e.exports={container:"Page404_container__KL3MC",errorNumber:"Page404_errorNumber__P1XJD",text:"Page404_text__1W5wG"}},49:function(e,t,a){e.exports={app:"App_app__208gC",circularProgress:"App_circularProgress__3f7Uj"}},51:function(e,t,a){e.exports={wrapper:"CharactersList_wrapper__1WybH",container:"CharactersList_container__25T5R"}},65:function(e,t,a){e.exports=a.p+"static/media/rick_96136.e7fefe76.svg"},66:function(e,t,a){e.exports=a.p+"static/media/morty_96215.646d32ec.svg"},68:function(e,t,a){e.exports={container:"Main_container__1fCbX"}},79:function(e,t,a){e.exports=a(108)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.298a636b.chunk.js.map