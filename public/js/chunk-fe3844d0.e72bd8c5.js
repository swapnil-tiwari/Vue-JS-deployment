(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe3844d0"],{"18b8":function(e,t,a){},d7f8:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"fa fa-align-justify"}),a("strong",[e._v("Inventory")])]),a("b-list-group",[a("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-1"},[e._v(e._s(e.chats.room_name))])]),a("p",{staticClass:"mb-1"},[e._v("\n                "+e._s(e.chats.room_site)+"\n              ")])])],1)],1),a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v("Update/Delete")]),e._v(" Inventory\n        ")]),a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateData(t)}}},[a("b-form-group",{attrs:{description:"Enter the Site",label:"Site Id","label-for":"basicText","label-cols":3,horizontal:!0}},[a("cool-select",{attrs:{items:e.items,loading:e.loading,"item-text":"siteid",placeholder:"Just Type The Site ID/Name","disable-filtering-by-search":""},on:{search:e.onSearch},model:{value:e.chats.room_site,callback:function(t){e.$set(e.chats,"room_site",t)},expression:"chats.room_site"}})],1),a("b-form-group",{attrs:{description:"Enter the Room Name",label:"Room Name","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text",placeholder:"Enter the room Name"},model:{value:e.chats.room_name,callback:function(t){e.$set(e.chats,"room_name",t)},expression:"chats.room_name"}})],1),a("b-form-group",{attrs:{description:"Allowed Users",label:"Allowed Users","label-for":"basicText","label-cols":3,horizontal:!0}},[a("cool-select",{attrs:{items:e.items2,loading:e.loading,"item-text":"name",placeholder:"Enter The User ID","disable-filtering-by-search":""},on:{search:e.onSearch2},model:{value:e.chats.allowed_users,callback:function(t){e.$set(e.chats,"allowed_users",t)},expression:"chats.allowed_users"}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[a("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),a("b-button",{attrs:{type:"submit",size:"sm",variant:"danger"},on:{click:function(t){return e.delData()}}},[a("i",{staticClass:"fa fa-ban"}),e._v(" Reset")])],1)],1)],1)],1)],1)},n=[],s=(a("96cf"),a("3b8d")),o=(a("28a5"),a("cadf"),a("551c"),a("f751"),a("097d"),a("f1fb")),i=a("bc3a"),c=a.n(i),l=a("b955"),u=a("78de"),m=a("e7ce"),h=a("97b8"),p=a("ea9d"),d=a("e6ad"),f=a("1eaf"),g=a("bf76"),b=window.location.href,v=b.split("chatgroups/",24).pop();console.log(v);var w={name:"dashboard",components:{Callout:o["d"],CardLine1ChartExample:l["a"],CardLine2ChartExample:u["a"],CardLine3ChartExample:m["a"],CardBarChartExample:h["a"],MainChartExample:p["a"],SocialBoxChartExample:d["a"],CalloutChartExample:f["a"],CoolSelect:g["CoolSelect"]},data:function(){return{selected:null,items:[],items2:[],loading:!1,timeoutId:null,noData:!1,errors:[],chats:{room_name:"",room_site:"",allowed_users:[],_id:v},response:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:c.a.get("https://selacious-cloud-siteapi.herokuapp.com/chats/".concat(v)).then(function(e){t.chats=e.data});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{variant:function(e){var t;return e<=25?t="info":e>25&&e<=50?t="success":e>50&&e<=75?t="warning":e>75&&e<=100&&(t="danger"),t},flag:function(e){return"flag-icon flag-icon-"+e},updateData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:c.a.put("https://selacious-cloud-siteapi.herokuapp.com/chats/".concat(v),this.chats).then(function(e){console.log(e),t.$router.push("/chatgroups")});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),delData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:c()({method:"DELETE",url:"https://selacious-cloud-siteapi.herokuapp.com/chats/".concat(v),data:this.chat,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.chats=e.data,t.$router.push("/chatgroups")},function(e){console.error(e)});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onSearch:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=2,this.noData=!1,!(t.length<a)){e.next=6;break}return this.items=[],this.loading=!1,e.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/sites");case 2:return t=e.sent,e.next=5,t.json();case 5:r.items=e.sent,r.loading=!1,r.items.length||(r.noData=!0),console.log(r.items);case 9:case"end":return e.stop()}},e,this)})),500);case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onSearch2:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=2,this.noData=!1,!(t.length<a)){e.next=6;break}return this.items2=[],this.loading=!1,e.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:r.items2=e.sent,r.loading=!1,r.items2.length||(r.noData=!0),console.log(r.items2);case 9:case"end":return e.stop()}},e,this)})),500);case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},y=w,x=(a("e570"),a("2877")),_=Object(x["a"])(y,r,n,!1,null,null,null);t["default"]=_.exports},e570:function(e,t,a){"use strict";var r=a("18b8"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-fe3844d0.e72bd8c5.js.map