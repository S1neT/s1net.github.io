webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("/5sW"),a=n("mtWM"),r=n.n(a),u={name:"app",data:function(){return{userAgent:"",currentQuote:{},quotes:[{content:"Overcoming fear and conceiving this 'art of more' should be a fundamental practice in what it is that you do and make.",author:"Chase Jarvis"},{content:"As everything in this world is but a sham, Death is the only sincerity",author:"Yamamoto Tsunetomo"},{content:"The world needs actual excitement and emotion more than it needs cool people.",author:"Amanda Palmer"}]}},created:function(){this.displayQuote()},methods:{displayQuote:function(){var t=this,e=Math.floor(Math.random()*(this.quotes.length-0));this.currentQuote=this.quotes[e],r.a.get("http://httpbin.org/user-agent").then(function(e){t.userAgent=e.data["user-agent"]}).catch(function(t){console.log(t)})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("blockquote",{on:{click:function(e){t.displayQuote()}}},[n("p",[t._v(t._s(t.currentQuote.content))]),t._v(" "),n("footer",[t._v(" \n      — "),n("cite",[t._v(t._s(t.currentQuote.author))]),t._v(" "),n("p",[t._v("Your user agent: "+t._s(t.userAgent))])])])])},staticRenderFns:[]};var s=n("VU/8")(u,i,!1,function(t){n("aNwJ")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",render:function(t){return t(s)}})},aNwJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9062f418f04891736149.js.map