webpackJsonp([0],{0:function(e,t){},"1zXC":function(e,t){},HXJp:function(e,t,s){"use strict";function i(e){s("zGYn")}var a=s("OTVy"),c=s("eR2b"),n=s("VU/8"),l=i,r=n(a.a,c.a,!1,l,"data-v-06f00eea",null);t.a=r.exports},Jylr:function(e,t,s){"use strict";t.a={data:function(){return{cusname:"",username:"",getservices:"",getservicesname:"",getservicestype:"",check:[],sendapp:[],selectall:"",selectallvdi:"",selectallxenapp:"",vdiIndex:""}},created:function(){this.getservice()},watch:{selectall:function(e){var t=0;if(!1===this.selectall)for(t=0;t<this.getservicesname.length;t++)this.check[t]=!1;else for(t=0;t<this.getservicesname.length;t++)this.check[t]=!0},selectallvdi:function(e){var t=0;if(!1===this.selectallvdi)for(t=0;t<2;t++)this.check[t]=!1;else for(t=0;t<2;t++)this.check[t]=!0},selectallxenapp:function(e){var t=0;if(!1===this.selectallxenapp)for(t=2;t<this.getservicesname.length;t++)this.check[t]=!1;else for(t=2;t<this.getservicesname.length;t++)this.check[t]=!0}},methods:{getservice:function(){var e=this;this.$http.post("http://203.154.89.108:5000/Getservice").then(function(t){e.getservicesname=t.body.name,e.getservicestype=t.body.type;for(var s=0;s<e.getservicesname.length;s++)e.check[s]=!1,console.log(s)},function(t){e.getservicesname="error",e.getservicestype="error"})},pro:function(){this.$router.push("/provisionapp")},depro:function(){this.$router.push("/de-provisionapp")},deletes:function(){this.$router.push("/deletes")},createcus:function(){this.$router.push("/createcus")},submit:function(){for(var e=this,t=0,s=0;s<16;s++)!0===this.check[s]&&(this.sendapp[t]=this.getservicesname[s],t+=1);""===this.username?this.$http.post("http://203.154.89.108:5000/de-provisionappcus",{cus:this.cusname,app:this.sendapp}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")}):this.$http.post("http://203.154.89.108:5000/de-provisionappuser",{cus:this.cusname,user:this.username,app:this.sendapp}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")})}}}},M93x:function(e,t,s){"use strict";function i(e){s("dUQo")}var a=s("xJD8"),c=s("jC6n"),n=s("VU/8"),l=i,r=n(a.a,c.a,!1,l,null,null);t.a=r.exports},N5cq:function(e,t,s){"use strict";function i(e){s("1zXC")}var a=s("PhS0"),c=s("ZyvH"),n=s("VU/8"),l=i,r=n(a.a,c.a,!1,l,"data-v-91fc4a30",null);t.a=r.exports},NGW3:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),a=s("M93x"),c=s("YaEn"),n=s("kVq8"),l=(s.n(n),s("Cw2q")),r=(s.n(l),s("t2+U")),o=s.n(r),u=s("oYt9");i.a.use(u.a),i.a.use(o.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:c.a,template:"<App/>",components:{App:a.a}})},OTVy:function(e,t,s){"use strict";t.a={data:function(){return{cusname:"",username:"",getservices:"",getservicesname:"",getservicestype:"",check:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],sendapp:[]}},created:function(){},methods:{pro:function(){this.$router.push("/provisionapp")},depro:function(){this.$router.push("/de-provisionapp")},deletes:function(){this.$router.push("/deletes")},createcus:function(){this.$router.push("/createcus")},submit:function(){var e=this;""===this.username?this.$http.post("http://203.154.89.108:5000/deletecus",{cus:this.cusname}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")}):this.$http.post("http://203.154.89.108:5000/deleteuser",{cus:this.cusname,user:this.username}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")})}}}},PhS0:function(e,t,s){"use strict";t.a={data:function(){return{cusname:"",no_user:"",getservices:"",getservicesname:"",getservicestype:"",fullname:"",check:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],sendapp:[]}},created:function(){},methods:{pro:function(){this.$router.push("/provisionapp")},depro:function(){this.$router.push("/de-provisionapp")},deletes:function(){this.$router.push("/deletes")},createcus:function(){this.$router.push("/createcus")},submit:function(){var e=this;""===this.no_user?this.$http.post("http://203.154.89.108:5000/createcus",{full:this.fullname,cus:this.cusname}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")}):this.$http.post("http://203.154.89.108:5000/createuser",{full:this.fullname,cus:this.cusname,user:this.no_user}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")})}}}},UdIB:function(e,t){},YaEn:function(e,t,s){"use strict";var i=s("7+uW"),a=s("/ocq"),c=s("HXJp"),n=s("eZY0"),l=s("uIr1"),r=s("N5cq");i.a.use(a.a),t.a=new a.a({mode:"history",routes:[{path:"/",component:n.a},{path:"/deletes",component:c.a},{path:"/provisionapp",component:n.a},{path:"/de-provisionapp",component:l.a},{path:"/createcus",component:r.a}]})},ZyvH:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("br"),e._v(" "),s("h1",{staticStyle:{color:"white"}},[e._v("Testing API Citrix® CloudPortal™")]),e._v(" "),s("div",{staticClass:"ui grid",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"four wide column",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"ui segment",staticStyle:{"margin-top":"-64px","margin-right":"35px",height:"133%",background:"rgba(7, 27, 56, 0.73)","text-align":"left"}},[s("br"),e._v(" "),s("label",{staticStyle:{"font-size":"35px",color:"white"}},[e._v("MENU")]),e._v(" "),s("hr"),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.createcus}},[s("i",{staticClass:"add circle icon"}),e._v(" create customer\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.pro}},[s("i",{staticClass:"green genderless icon"}),e._v(" Provision app\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.depro}},[s("i",{staticClass:"yellow genderless icon"}),e._v(" De-Provision app \n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.deletes}},[s("i",{staticClass:"red remove circle icon"}),e._v(" Delete user or customer\n")])])]),e._v(" "),s("div",{staticClass:"twelve wide column",staticStyle:{background:"white","margin-left":"-48px"}},[s("h1",[e._v("Create User or Customer")]),e._v(" "),s("form",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("Full name Customer")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.fullname,expression:"fullname"}],attrs:{type:"text",placeholder:"Full Name of Customer"},domProps:{value:e.fullname},on:{input:function(t){t.target.composing||(e.fullname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("Customer name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cusname,expression:"cusname"}],attrs:{type:"text",placeholder:"Customer Name"},domProps:{value:e.cusname},on:{input:function(t){t.target.composing||(e.cusname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("Number of user")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.no_user,expression:"no_user"}],attrs:{type:"text",placeholder:"Number of user"},domProps:{value:e.no_user},on:{input:function(t){t.target.composing||(e.no_user=t.target.value)}}})])]),e._v(" "),s("button",{staticClass:"ui primary button menus",on:{click:e.submit}},[e._v("\n  Submit\n")])]),e._v(" "),s("div",{staticClass:"four wide column"})])])},a=[],c={render:i,staticRenderFns:a};t.a=c},bMwo:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("br"),e._v(" "),s("h1",{staticStyle:{color:"white"}},[e._v("Testing API Citrix® CloudPortal™")]),e._v(" "),s("div",{staticClass:"ui grid",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"four wide column",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"ui segment",staticStyle:{"margin-top":"-64px","margin-right":"35px",height:"133%",background:"rgba(7, 27, 56, 0.73)","text-align":"left"}},[s("br"),e._v(" "),s("label",{staticStyle:{"font-size":"35px",color:"white"}},[e._v("MENU")]),e._v(" "),s("hr"),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.createcus}},[s("i",{staticClass:"add circle icon"}),e._v(" create customer\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.pro}},[s("i",{staticClass:"green genderless icon"}),e._v(" Provision app\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.depro}},[s("i",{staticClass:"yellow genderless icon"}),e._v(" De-Provision app \n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.deletes}},[s("i",{staticClass:"red remove circle icon"}),e._v(" Delete user or customer\n")])])]),e._v(" "),s("div",{staticClass:"twelve wide column",staticStyle:{background:"white","margin-left":"-48px"}},[s("h1",[e._v("De-Provisioning")]),e._v(" "),s("form",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("Customer name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cusname,expression:"cusname"}],attrs:{type:"text",placeholder:"Customer Name"},domProps:{value:e.cusname},on:{input:function(t){t.target.composing||(e.cusname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("User name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"User Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"fields",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectall,expression:"selectall"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectall)?e._i(e.selectall,null)>-1:e.selectall},on:{__c:function(t){var s=e.selectall,i=t.target,a=!!i.checked;if(Array.isArray(s)){var c=e._i(s,null);i.checked?c<0&&(e.selectall=s.concat([null])):c>-1&&(e.selectall=s.slice(0,c).concat(s.slice(c+1)))}else e.selectall=a}}}),e._v(" "),s("label",[e._v("SELECT ALL")])])]),e._v(" "),s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectallxenapp,expression:"selectallxenapp"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectallxenapp)?e._i(e.selectallxenapp,null)>-1:e.selectallxenapp},on:{__c:function(t){var s=e.selectallxenapp,i=t.target,a=!!i.checked;if(Array.isArray(s)){var c=e._i(s,null);i.checked?c<0&&(e.selectallxenapp=s.concat([null])):c>-1&&(e.selectallxenapp=s.slice(0,c).concat(s.slice(c+1)))}else e.selectallxenapp=a}}}),e._v(" "),s("label",[e._v("SELECT ALL Xenapp")])])]),e._v(" "),s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectallvdi,expression:"selectallvdi"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectallvdi)?e._i(e.selectallvdi,null)>-1:e.selectallvdi},on:{__c:function(t){var s=e.selectallvdi,i=t.target,a=!!i.checked;if(Array.isArray(s)){var c=e._i(s,null);i.checked?c<0&&(e.selectallvdi=s.concat([null])):c>-1&&(e.selectallvdi=s.slice(0,c).concat(s.slice(c+1)))}else e.selectallvdi=a}}}),e._v(" "),s("label",[e._v("SELECT ALL VDI")])])])]),e._v(" "),s("hr"),e._v(" "),e._l(e.getservicesname,function(t,i){return s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.check[i],expression:"check[index]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.check[i])?e._i(e.check[i],null)>-1:e.check[i]},on:{__c:function(t){var s=e.check[i],a=t.target,c=!!a.checked;if(Array.isArray(s)){var n=e._i(s,null);a.checked?n<0&&(e.check[i]=s.concat([null])):n>-1&&(e.check[i]=s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.check,i,c)}}}),e._v(" "),s("label",[e._v(e._s(t))])])])})],2),e._v(" "),s("button",{staticClass:"ui primary button menus",on:{click:e.submit}},[e._v("\n  Submit\n")])]),e._v(" "),s("div",{staticClass:"four wide column"})])])},a=[],c={render:i,staticRenderFns:a};t.a=c},"cq+f":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("br"),e._v(" "),s("h1",{staticStyle:{color:"white"}},[e._v("Testing API Citrix® CloudPortal™")]),e._v(" "),s("div",{staticClass:"ui grid",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"four wide column",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"ui segment",staticStyle:{"margin-top":"-64px","margin-right":"35px",height:"133%",background:"rgba(7, 27, 56, 0.73)","text-align":"left"}},[s("br"),e._v(" "),s("label",{staticStyle:{"font-size":"35px",color:"white"}},[e._v("MENU")]),e._v(" "),s("hr"),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.createcus}},[s("i",{staticClass:"add circle icon"}),e._v(" create customer\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.pro}},[s("i",{staticClass:"green genderless icon"}),e._v(" Provision app\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.depro}},[s("i",{staticClass:"yellow genderless icon"}),e._v(" De-Provision app \n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.deletes}},[s("i",{staticClass:"red remove circle icon"}),e._v(" Delete user or customer\n")])])]),e._v(" "),s("div",{staticClass:"twelve wide column",staticStyle:{background:"white","margin-left":"-48px"}},[s("h1",[e._v("Provisioning")]),e._v(" "),s("form",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("Customer name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cusname,expression:"cusname"}],attrs:{type:"text",placeholder:"Customer Name"},domProps:{value:e.cusname},on:{input:function(t){t.target.composing||(e.cusname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("User name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"User Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"fields",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectall,expression:"selectall"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectall)?e._i(e.selectall,null)>-1:e.selectall},on:{__c:function(t){var s=e.selectall,i=t.target,a=!!i.checked;if(Array.isArray(s)){var c=e._i(s,null);i.checked?c<0&&(e.selectall=s.concat([null])):c>-1&&(e.selectall=s.slice(0,c).concat(s.slice(c+1)))}else e.selectall=a}}}),e._v(" "),s("label",[e._v("SELECT ALL")])])]),e._v(" "),s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectallxenapp,expression:"selectallxenapp"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectallxenapp)?e._i(e.selectallxenapp,null)>-1:e.selectallxenapp},on:{__c:function(t){var s=e.selectallxenapp,i=t.target,a=!!i.checked;if(Array.isArray(s)){var c=e._i(s,null);i.checked?c<0&&(e.selectallxenapp=s.concat([null])):c>-1&&(e.selectallxenapp=s.slice(0,c).concat(s.slice(c+1)))}else e.selectallxenapp=a}}}),e._v(" "),s("label",[e._v("SELECT ALL Xenapp")])])]),e._v(" "),s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectallvdi,expression:"selectallvdi"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectallvdi)?e._i(e.selectallvdi,null)>-1:e.selectallvdi},on:{__c:function(t){var s=e.selectallvdi,i=t.target,a=!!i.checked;if(Array.isArray(s)){var c=e._i(s,null);i.checked?c<0&&(e.selectallvdi=s.concat([null])):c>-1&&(e.selectallvdi=s.slice(0,c).concat(s.slice(c+1)))}else e.selectallvdi=a}}}),e._v(" "),s("label",[e._v("SELECT ALL VDI")])])])]),e._v(" "),s("hr"),e._v(" "),e._l(e.getservicesname,function(t,i){return s("div",{staticClass:"field",staticStyle:{"text-align":"left"}},[s("div",{staticClass:"ui checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.check[i],expression:"check[index]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.check[i])?e._i(e.check[i],null)>-1:e.check[i]},on:{__c:function(t){var s=e.check[i],a=t.target,c=!!a.checked;if(Array.isArray(s)){var n=e._i(s,null);a.checked?n<0&&(e.check[i]=s.concat([null])):n>-1&&(e.check[i]=s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.check,i,c)}}}),e._v(" "),s("label",[e._v(e._s(t))])])])})],2),e._v(" "),s("button",{staticClass:"ui primary button menus",on:{click:e.submit}},[e._v("\n  Submit\n")])]),e._v(" "),s("div",{staticClass:"four wide column"})])])},a=[],c={render:i,staticRenderFns:a};t.a=c},dUQo:function(e,t){},eR2b:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("br"),e._v(" "),s("h1",{staticStyle:{color:"white"}},[e._v("Testing API Citrix® CloudPortal™")]),e._v(" "),s("div",{staticClass:"ui grid",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"four wide column",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"ui segment",staticStyle:{"margin-top":"-64px","margin-right":"35px",height:"133%",background:"rgba(7, 27, 56, 0.73)","text-align":"left"}},[s("br"),e._v(" "),s("label",{staticStyle:{"font-size":"35px",color:"white"}},[e._v("MENU")]),e._v(" "),s("hr"),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.createcus}},[s("i",{staticClass:"add circle icon"}),e._v(" create customer\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.pro}},[s("i",{staticClass:"green genderless icon"}),e._v(" Provision app\n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.depro}},[s("i",{staticClass:"yellow genderless icon"}),e._v(" De-Provision app \n")]),e._v(" "),s("button",{staticClass:"ui button menus menubutton",on:{click:e.deletes}},[s("i",{staticClass:"red remove circle icon"}),e._v(" Delete user or customer\n")])])]),e._v(" "),s("div",{staticClass:"twelve wide column",staticStyle:{background:"white","margin-left":"-48px"}},[s("h1",[e._v("Delete")]),e._v(" "),s("form",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("Customer name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.cusname,expression:"cusname"}],attrs:{type:"text",placeholder:"Customer Name"},domProps:{value:e.cusname},on:{input:function(t){t.target.composing||(e.cusname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",{staticStyle:{"text-align":"left"}},[e._v("User name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"User Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),e._v(" "),s("button",{staticClass:"ui bprimary button menus",on:{click:e.submit}},[e._v("\n  Submit\n")])]),e._v(" "),s("div",{staticClass:"four wide column"})])])},a=[],c={render:i,staticRenderFns:a};t.a=c},eZY0:function(e,t,s){"use strict";function i(e){s("NGW3")}var a=s("fJcp"),c=s("cq+f"),n=s("VU/8"),l=i,r=n(a.a,c.a,!1,l,"data-v-0b71745a",null);t.a=r.exports},fJcp:function(e,t,s){"use strict";t.a={data:function(){return{cusname:"",username:"",getservices:"",getservicesname:"",getservicestype:"",check:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],sendapp:[],selectall:"",selectallvdi:"",selectallxenapp:""}},created:function(){this.getservice()},watch:{selectall:function(e){var t=0;if(!1===this.selectall)for(t=0;t<this.getservicesname.length;t++)this.check[t]=!1;else for(t=0;t<this.getservicesname.length;t++)this.check[t]=!0},selectallvdi:function(e){var t=0;if(!1===this.selectallvdi)for(t=0;t<2;t++)this.check[t]=!1;else for(t=0;t<2;t++)this.check[t]=!0},selectallxenapp:function(e){var t=0;if(!1===this.selectallxenapp)for(t=2;t<this.getservicesname.length;t++)this.check[t]=!1;else for(t=2;t<this.getservicesname.length;t++)this.check[t]=!0}},methods:{getservice:function(){var e=this;this.$http.post("http://203.154.89.108:5000/Getservice").then(function(t){e.getservicesname=t.body.name,e.getservicestype=t.body.type,console.log(e.getservicesname);for(var s=0;s<e.getservicesname.length;s++)e.check[s]=!1,console.log(s)},function(t){e.getservicesname="error",e.getservicestype="error"})},pro:function(){this.$router.push("/provisionapp")},depro:function(){this.$router.push("/de-provisionapp")},deletes:function(){this.$router.push("/deletes")},createcus:function(){this.$router.push("/createcus")},submit:function(){var e=this,t=0;this.sendapp=[];for(var s=0;s<16;s++)!0===this.check[s]&&(this.sendapp[t]=this.getservicesname[s],t+=1);""===this.username?this.$http.post("http://203.154.89.108:5000/provisionappcus",{cus:this.cusname,app:this.sendapp}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")}):this.$http.post("http://203.154.89.108:5000/provisionappuser",{cus:this.cusname,user:this.username,app:this.sendapp}).then(function(t){e.$swal("--result--",t.body,"success")},function(t){e.$swal("--result--",t.body,"error")})}}}},jC6n:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],c={render:i,staticRenderFns:a};t.a=c},kVq8:function(e,t){},oF1Z:function(e,t){},uIr1:function(e,t,s){"use strict";function i(e){s("oF1Z")}var a=s("Jylr"),c=s("bMwo"),n=s("VU/8"),l=i,r=n(a.a,c.a,!1,l,"data-v-0ccd1b52",null);t.a=r.exports},xJD8:function(e,t,s){"use strict";t.a={name:"app"}},zGYn:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.56f03a569c1fe676725c.js.map