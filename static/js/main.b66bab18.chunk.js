(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var r=s(3),i=s.n(r),a=s(14),n=s.n(a),c=s(5),o=s.n(c),m=s(15),d=s(16),u=s(17),l=s(20),j=s(19),v=s(18),p=s.n(v),h=s(2),b=s.n(h),g=(s(46),s(0));function y(e){e.id;var t=e.year,s=e.title,r=e.summary,i=e.poster,a=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:i,alt:s,title:s}),Object(g.jsxs)("div",{className:"movie__data",children:[Object(g.jsx)("h3",{className:"movie__title",children:s}),Object(g.jsx)("h5",{className:"movie__year",children:t}),Object(g.jsxs)("p",{className:"movie__summary",children:[r.slice(0,140),"..."]}),Object(g.jsxs)("ul",{className:"movie__genres",children:[" ",a.map((function(e,t){return Object(g.jsx)("li",{className:"genres__genre",children:e},t)}))]})]})]})}y.prototype={id:b.a.number.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,summary:b.a.string.isRequired,poster:b.a.string.isRequired,genres:b.a.arrayOf(b.a.string).isRequired};var O=y,_=(s(48),function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rationg");case 2:s=t.sent,r=s.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"renderMovies",value:function(e){return e.map((function(e){return Object(g.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__test",children:'"Loading..."'})}):Object(g.jsx)("div",{className:"movies",children:this.renderMovies(s)})})}}]),s}(i.a.Component));n.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b66bab18.chunk.js.map