(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb434b0"],{"0551":function(t,e,a){},2280:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-card",[a("b-form",{attrs:{action:"inventories"},on:{submit:function(e){return e.preventDefault(),t.sendData(e)}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("Create")]),t._v(" Chat Group\n          ")]),a("b-form-group",{attrs:{description:"Enter the Site",label:"Site Id","label-for":"basicText","label-cols":3,horizontal:!0}},[a("cool-select",{attrs:{items:t.items,loading:t.loading,"item-text":"siteid",placeholder:"Just Type The Site ID/Name","disable-filtering-by-search":""},on:{search:t.onSearch},model:{value:t.input.room_site,callback:function(e){t.$set(t.input,"room_site",e)},expression:"input.room_site"}})],1),a("b-form-group",{attrs:{description:"Enter the Room Name",label:"Room Name","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text",placeholder:"Enter the room Name"},model:{value:t.input.room_name,callback:function(e){t.$set(t.input,"room_name",e)},expression:"input.room_name"}})],1),a("b-form-group",{attrs:{description:"Allowed Users",label:"Allowed Users","label-for":"basicText","label-cols":3,horizontal:!0}},t._l(t.input.allowed_users,function(e,n){return a("b-col",{key:n,attrs:{cols:"13"}},[a("cool-select",{attrs:{items:t.items2,loading:t.loading,"item-text":"name",placeholder:"Enter The User ID","disable-filtering-by-search":""},on:{search:t.onSearch2},model:{value:t.input.allowed_users[n],callback:function(e){t.$set(t.input.allowed_users,n,e)},expression:"input.allowed_users[index]"}}),a("br")],1)}),1),a("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.deleteuser()}}},[a("i",{staticClass:"fa fa-ban"}),t._v(" - Delete User")]),a("b-button",{staticClass:"float-right",attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(e){return t.adduser()}}},[a("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" + Add User")]),a("br"),a("br"),a("b-form-group",{attrs:{description:"Group Admins",label:"Group Admins","label-for":"basicText","label-cols":3,horizontal:!0}},t._l(t.input.group_admins,function(e,n){return a("b-col",{key:n,attrs:{cols:"13"}},[a("cool-select",{attrs:{items:t.items3,loading:t.loading,"item-text":"name",placeholder:"Enter The Admin ID","disable-filtering-by-search":""},on:{search:t.onSearch3},model:{value:t.input.group_admins[n],callback:function(e){t.$set(t.input.group_admins,n,e)},expression:"input.group_admins[index]"}}),a("br")],1)}),1),a("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.deleteadmin()}}},[a("i",{staticClass:"fa fa-ban"}),t._v(" - Delete Admin")]),a("b-button",{staticClass:"float-right",attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(e){return t.addadmin()}}},[a("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" + Add Admin")]),a("br"),a("br"),a("b-form-group",{attrs:{label:"Only Admins can Send Messages","label-for":"basicRadiosCustom","label-cols":3,horizontal:!0}},[a("b-form-radio-group",{attrs:{id:"basicRadiosCustom",value:"1",stacked:""}},[a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.only_admins,expression:"input.only_admins"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadio1",name:"customRadio",value:"yes"},domProps:{checked:t._q(t.input.only_admins,"yes")},on:{change:function(e){return t.$set(t.input,"only_admins","yes")}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customRadio1"}},[t._v("Yes")])]),a("div",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.only_admins,expression:"input.only_admins"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadio2",name:"customRadio",value:"no",checked:""},domProps:{checked:t._q(t.input.only_admins,"no")},on:{change:function(e){return t.$set(t.input,"only_admins","no")}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customRadio2"}},[t._v("No")])])])],1),a("b-form-group",{attrs:{description:"Emergency Contacts",label:"Emergency Contacts","label-for":"basicText","label-cols":3,horizontal:!0}},t._l(t.input.emergency_contacts,function(e,n){return a("b-col",{key:n,attrs:{cols:"13"}},[a("cool-select",{attrs:{items:t.items4,loading:t.loading,"item-text":"name",placeholder:"Enter The Contacts ID","disable-filtering-by-search":""},on:{search:t.onSearch4},model:{value:t.input.emergency_contacts[n],callback:function(e){t.$set(t.input.emergency_contacts,n,e)},expression:"input.emergency_contacts[index]"}}),a("br")],1)}),1),a("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.deletecontact()}}},[a("i",{staticClass:"fa fa-ban"}),t._v(" - Delete Contact")]),a("b-button",{staticClass:"float-right",attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(e){return t.addcontact()}}},[a("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" + Add Contact")]),a("br"),a("br"),a("br"),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[a("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" Submit")]),a("router-link",{attrs:{to:{path:"/chatgroups"}}},[a("b-button",{attrs:{type:"reset",size:"sm",variant:"danger"}},[a("i",{staticClass:"fa fa-ban"}),t._v(" Reset")])],1)],1)],1)],1)],1)],1)},r=[],s=(a("96cf"),a("3b8d")),i=(a("28a5"),a("cadf"),a("551c"),a("f751"),a("097d"),a("f1fb")),o=a("bc3a"),c=a.n(o),u=a("b955"),l=a("78de"),m=a("e7ce"),d=a("97b8"),p=a("ea9d"),h=a("e6ad"),f=a("1eaf"),g=a("bf76"),b=window.location.href,v=(b.split("8080",24).pop(),{name:"dashboard",components:{Callout:i["d"],CardLine1ChartExample:u["a"],CardLine2ChartExample:l["a"],CardLine3ChartExample:m["a"],CardBarChartExample:d["a"],MainChartExample:p["a"],SocialBoxChartExample:h["a"],CalloutChartExample:f["a"],CoolSelect:g["CoolSelect"]},data:function(){return{selected:null,items:[],items2:[],items3:[],items4:[],loading:!1,timeoutId:null,noData:!1,myvals:[],inventorys:[],resp:[],errors:[],input:{id:"",room_name:"",room_site:"",allowed_users:[],group_admins:[],only_admins:"",emergency_contacts:[]},key:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:c.a.get("https://selacious-cloud-siteapi.herokuapp.com/chats").then(function(t){e.inventorys=t.data});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{variant:function(t){var e;return t<=25?e="info":t>25&&t<=50?e="success":t>50&&t<=75?e="warning":t>75&&t<=100&&(e="danger"),e},flag:function(t){return"flag-icon flag-icon-"+t},sendData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("trigger"),c.a.post("https://selacious-cloud-siteapi.herokuapp.com/chats/",this.input).then(function(t){console.log(t),e.$router.push("/chatgroups")});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onSearch:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=2,this.noData=!1,!(e.length<a)){t.next=6;break}return this.items=[],this.loading=!1,t.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/sites");case 2:return e=t.sent,t.next=5,e.json();case 5:n.items=t.sent,n.loading=!1,n.items.length||(n.noData=!0),console.log(n.items);case 9:case"end":return t.stop()}},t,this)})),500);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onSearch2:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=2,this.noData=!1,!(e.length<a)){t.next=6;break}return this.items2=[],this.loading=!1,t.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/users");case 2:return e=t.sent,t.next=5,e.json();case 5:n.items2=t.sent,n.loading=!1,n.items2.length||(n.noData=!0),console.log(n.items2);case 9:case"end":return t.stop()}},t,this)})),500);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onSearch3:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=2,this.noData=!1,!(e.length<a)){t.next=6;break}return this.items3=[],this.loading=!1,t.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/users");case 2:return e=t.sent,t.next=5,e.json();case 5:n.items3=t.sent,n.loading=!1,n.items3.length||(n.noData=!0),console.log(n.items3);case 9:case"end":return t.stop()}},t,this)})),500);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onSearch4:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=2,this.noData=!1,!(e.length<a)){t.next=6;break}return this.items4=[],this.loading=!1,t.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/users");case 2:return e=t.sent,t.next=5,e.json();case 5:n.items4=t.sent,n.loading=!1,n.items4.length||(n.noData=!0),console.log(n.items4);case 9:case"end":return t.stop()}},t,this)})),500);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),adduser:function(){this.input.allowed_users.push("")},deleteuser:function(t){this.input.allowed_users.splice(t,1)},addadmin:function(){this.input.group_admins.push("")},deleteadmin:function(t){this.input.group_admins.splice(t,1)},addcontact:function(){this.input.emergency_contacts.push("")},deletecontact:function(t){this.input.emergency_contacts.splice(t,1)}}}),y=v,w=(a("f7a2"),a("2877")),x=Object(w["a"])(y,n,r,!1,null,null,null);e["default"]=x.exports},f7a2:function(t,e,a){"use strict";var n=a("0551"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-0bb434b0.a182e21c.js.map