(window["webpackJsonpWeather-Web-App-City-Wise"]=window["webpackJsonpWeather-Web-App-City-Wise"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/01d.3077681e.svg"},,function(t,e,a){var n={"./01d.svg":8,"./01n.svg":21,"./02d.svg":22,"./02n.svg":23,"./03d.svg":24,"./03n.svg":25,"./04d.svg":26,"./04n.svg":27,"./09d.svg":28,"./09n.svg":29,"./10d.svg":30,"./10n.svg":31,"./11d.svg":32,"./11n.svg":33,"./13d.svg":34,"./13n.svg":35,"./50d.svg":36,"./50n.svg":37,"./cloudy_moon.svg":38};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id=10},,function(t,e,a){t.exports=a(41)},,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){t.exports=a.p+"static/media/01n.3077681e.svg"},function(t,e,a){t.exports=a.p+"static/media/02d.144d9a47.svg"},function(t,e,a){t.exports=a.p+"static/media/02n.144d9a47.svg"},function(t,e,a){t.exports=a.p+"static/media/03d.8d2c0b2d.svg"},function(t,e,a){t.exports=a.p+"static/media/03n.8d2c0b2d.svg"},function(t,e,a){t.exports=a.p+"static/media/04d.5a81a676.svg"},function(t,e,a){t.exports=a.p+"static/media/04n.5a81a676.svg"},function(t,e,a){t.exports=a.p+"static/media/09d.a92066b1.svg"},function(t,e,a){t.exports=a.p+"static/media/09n.a92066b1.svg"},function(t,e,a){t.exports=a.p+"static/media/10d.810f7538.svg"},function(t,e,a){t.exports=a.p+"static/media/10n.810f7538.svg"},function(t,e,a){t.exports=a.p+"static/media/11d.0fc0affe.svg"},function(t,e,a){t.exports=a.p+"static/media/11n.0fc0affe.svg"},function(t,e,a){t.exports=a.p+"static/media/13d.dc58368f.svg"},function(t,e,a){t.exports=a.p+"static/media/13n.dc58368f.svg"},function(t,e,a){t.exports=a.p+"static/media/50d.1186186b.svg"},function(t,e,a){t.exports=a.p+"static/media/50n.1186186b.svg"},function(t,e,a){t.exports=a.p+"static/media/cloudy_moon.961673a4.svg"},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(11),r=a.n(s),c=(a(17),a(6)),o=a.n(c),p=a(7),d=a(1),l=a(2),u=a(4),h=a(3),m=a(5),f=(a(19),a(20),function(t){function e(){return Object(d.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(t){var e=this.props.city?null:i.a.createElement("h1",{className:"title"},"Weather Forecast");return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"inner-main"},e,i.a.createElement("img",{src:this.props.data?a(10)("./".concat(this.props.data.icon,".svg")):a(8),alt:"sun",style:{visibility:this.props.city?"visible":"hidden",opacity:this.props.city?"1":"0"}}),i.a.createElement("div",{className:"today",style:{visibility:this.props.city?"visible":"hidden",opacity:this.props.city?"1":"0"}},i.a.createElement("span",null,"Today"),i.a.createElement("h1",null,this.props.city),i.a.createElement("p",null,"Temperature: ",this.props.data?Math.round(this.props.data.temp-273.15):0,"\xb0C"),i.a.createElement("p",null,this.props.data?this.props.data.weather_desc.toLowerCase():""))),this.props.children)}}]),e}(i.a.Component)),v=(a(39),function(t){function e(){return Object(d.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(t){var e=this,a=function(){var t=Object(p.a)(o.a.mark(function t(a){var n,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.persist(),n=a.which?a.which:a.keyCode,i=a.target.value,13!==n){t.next=18;break}if(!/^[a-zA-Z\xe4\xf6\xfc\xc4\xd6\xdc\xdf ]+$/.test(i)){t.next=15;break}return a.target.classList.add("loading"),t.next=8,e.props.makeApiCall(i);case 8:if(!t.sent){t.next=12;break}a.target.placeholder="Enter a City...",t.next=13;break;case 12:a.target.placeholder="City was not found, try again...";case 13:t.next=16;break;case 15:a.target.placeholder="Please enter a valid city name...";case 16:a.target.classList.remove("loading"),a.target.value="";case 18:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n={top:this.props.city?"-380px":"-20px",width:"calc(100% - 40%)",display:"inline-block",padding:"10px 0px 10px 30px",lineHeight:"120%",position:"relative",height:"60px",borderRadius:"20px",outline:"none",border:"2px solid #FFF",fontSize:"20px",transition:"all 0.5s ease-out 0s"};return i.a.createElement("input",{className:"city-input",style:n,type:"text",placeholder:"Enter a City...",onKeyPress:a})}}]),e}(i.a.Component)),y=(a(40),function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).getDay=function(t){var e=new Array(7);return e[0]="Sunday",e[1]="Monday",e[2]="Tuesday",e[3]="Wednesday",e[4]="Thursday",e[5]="Friday",e[6]="Saturday",e[new Date(t).getDay()]},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(t){return i.a.createElement("div",{className:"weather-box"},i.a.createElement("h1",null,this.props.date?this.getDay(this.props.date):""),i.a.createElement("img",{src:this.props.icon?a(10)("./".concat(this.props.icon,".svg")):a(8),alt:"sun"}),i.a.createElement("span",{className:"temp"},Math.round(this.props.temp-273.15),"\xb0C"))}}]),e}(i.a.Component)),g=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={city:void 0,days:new Array(5)},a.updateState=function(t){for(var e=t.city.name,n=[],i=a.getDayIndices(t),s=0;s<5;s++)n.push({date:t.list[i[s]].dt_txt,weather_desc:t.list[i[s]].weather[0].description,icon:t.list[i[s]].weather[0].icon,temp:t.list[i[s]].main.temp});a.setState({city:e,days:n})},a.makeApiCall=function(){var t=Object(p.a)(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&APPID=6557810176c36fac5f0db536711a6c52")).then(function(t){return t.json()});case 2:if("200"!==(n=t.sent).cod){t.next=9;break}return t.next=6,a.updateState(n);case 6:return t.abrupt("return",!0);case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.getDayIndices=function(t){var e=[];e.push(0);for(var a=0,n=t.list[a].dt_txt.slice(8,10),i=0;i<4;i++){for(;n===t.list[a].dt_txt.slice(8,10)||"15"!==t.list[a].dt_txt.slice(11,13);)a++;e.push(a),n=t.list[a].dt_txt.slice(8,10)}return e},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(f,{data:this.state.days[0],city:this.state.city},i.a.createElement(v,{city:this.state.city,makeApiCall:this.makeApiCall.bind(this)}),i.a.createElement(function(){var e=t.state.days.slice(1).map(function(t){return i.a.createElement("li",null,i.a.createElement(y,t))});return i.a.createElement("ul",{className:"weather-box-list"},e)},null))))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.8f327b6f.chunk.js.map