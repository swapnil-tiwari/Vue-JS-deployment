(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-025e13cb"],{"3b1e":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v("Chat Groups ")]),t("small",[a._v(" Click to update/delete")])]),a._l(a.chats,function(e){return t("b-list-group",{key:e._id},[t("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"chatgroups/"+e._id}},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[a._v(a._s(e.room_name))])]),t("p",{staticClass:"mb-1"},[a._v("\n                "+a._s(e.room_site)+"\n              ")])])],1)})],2),t("router-link",{attrs:{to:{name:"Create Chat Groups"}}},[t("b-button",{attrs:{type:"submit",value:"Add Product",variant:"outline-dark"}},[a._v(" Add Chat Group ")])],1)],1)],1)},r=[],s=(t("96cf"),t("3b8d")),i=(t("28a5"),t("f1fb")),u=t("bc3a"),o=t.n(u),c=t("b955"),l=t("78de"),p=t("e7ce"),d=t("97b8"),m=t("ea9d"),f=t("e6ad"),g=t("1eaf"),h=window.location.href,v=(h.split("8080",24).pop(),{name:"dashboard",components:{Callout:i["d"],CardLine1ChartExample:c["a"],CardLine2ChartExample:l["a"],CardLine3ChartExample:p["a"],CardBarChartExample:d["a"],MainChartExample:m["a"],SocialBoxChartExample:f["a"],CalloutChartExample:g["a"]},data:function(){return{selected:"Month",chats:[],errors:[],key:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var a=Object(s["a"])(regeneratorRuntime.mark(function a(){var e=this;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:o.a.get("https://selacious-cloud-siteapi.herokuapp.com/chats").then(function(a){e.chats=a.data});case 1:case"end":return a.stop()}},a,this)}));function e(){return a.apply(this,arguments)}return e}(),methods:{variant:function(a){var e;return a<=25?e="info":a>25&&a<=50?e="success":a>50&&a<=75?e="warning":a>75&&a<=100&&(e="danger"),e},flag:function(a){return"flag-icon flag-icon-"+a},sendData:function(){var a=Object(s["a"])(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:o()({method:"POST",url:"https://selacious-cloud-siteapi.herokuapp.com/chats/",data:this.input,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){},function(a){console.error(a)});case 1:case"end":return a.stop()}},a,this)}));function e(){return a.apply(this,arguments)}return e}()}}),b=v,y=(t("686c"),t("2877")),w=Object(y["a"])(b,n,r,!1,null,null,null);e["default"]=w.exports},"686c":function(a,e,t){"use strict";var n=t("ffb6"),r=t.n(n);r.a},ffb6:function(a,e,t){}}]);
//# sourceMappingURL=chunk-025e13cb.32e61c95.js.map