"use strict";(self["webpackChunkprotein_code_challenge"]=self["webpackChunkprotein_code_challenge"]||[]).push([[878],{878:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{attrs:{sm:"12"}},[i("v-sheet",{attrs:{rounded:"lg"}},[i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mt-5",attrs:{elevation:"2"},on:{click:t.importData}},[t._v(" Import Data ")])],1),i("v-virtual-scroll",{attrs:{items:t.operations,height:"500","item-height":"64"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return[i("v-list-item",{key:o.id},[i("v-list-item-action",[i("v-btn",{attrs:{fab:"",small:"",depressed:"",color:"primary"}},[t._v(" "+t._s(o.id)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" Operation #"+t._s(o.uid)+" "),i("br"),i("strong",[t._v(" process time: "+t._s(null!=o.finishedAt?(o.finishedAt-o.startedAt)/1e3+" (ms)":"processing..."))])])],1),i("v-list-item-action",[o.inProgress?[i("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})]:[i("v-icon",{staticStyle:{color:"green"},attrs:{large:""}},[t._v(" mdi-checkbox-marked-circle ")])]],2)],1),i("v-divider")]}}])})],1)],1)],1)},s=[],n=i(4665),r=i(5260);window.addEventListener("online",(()=>{console.log("Became online")})),window.addEventListener("offline",(()=>{console.log("Became offline")}));var a={computed:{...(0,n.Se)({operations:"operationsModule/getAll"})},methods:{importData(){const t={method:"fetchData"};r.Z.postMessage(JSON.stringify(t))}}},l=a,c=i(1001),d=(0,c.Z)(l,o,s,!1,null,null,null),m=d.exports},5260:function(t,e,i){var o=i(9397);const s=new Worker("./worker-functions.js",{type:"module"});s.onmessage=t=>{o.Z.dispatch(`${t.data.module}Module/${t.data.action}`,t.data.payload)},e["Z"]=s}}]);
//# sourceMappingURL=878.0cc47827.js.map