"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[452],{3678:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={title:"Flutter SDK (Beta)",description:"Build Flutter applications in Dart with Realm."},s=void 0,u={unversionedId:"sdk/flutter/intro",id:"sdk/flutter/intro",title:"Flutter SDK (Beta)",description:"Build Flutter applications in Dart with Realm.",source:"@site/docs/sdk/flutter/intro.mdx",sourceDirName:"sdk/flutter",slug:"/sdk/flutter/intro",permalink:"/docusaurus-realm/sdk/flutter/intro",tags:[],version:"current",frontMatter:{title:"Flutter SDK (Beta)",description:"Build Flutter applications in Dart with Realm."},sidebar:"flutter",previous:{title:"Install Realm",permalink:"/docusaurus-realm/sdk/flutter/install"},next:{title:"Quick Start",permalink:"/docusaurus-realm/sdk/flutter/quick-start"}},d=[{value:"Supported Realm Features",id:"supported-realm-features",children:[{value:"Alpha Limitations",id:"alpha-limitations",children:[],level:3}],level:2},{value:"Get Started",id:"get-started",children:[],level:2},{value:"Dart Standalone Realm",id:"dart-standalone-realm",children:[],level:2},{value:"Flutter SDK Reference",id:"flutter-sdk-reference",children:[],level:2}],p={toc:d};function c(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Beta Release")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This SDK is currently offered as an ",(0,r.kt)("strong",{parentName:"p"},"beta")," release. We encourage you\nto try out the feature and ",(0,r.kt)("a",{parentName:"p",href:"https://feedback.mongodb.com/forums/923521-realm/"},"give\nfeedback"),". However,\nbe aware that APIs and functionality are subject to change."),(0,r.kt)("p",{parentName:"div"},"The MongoDB Realm Flutter SDK enables client applications written in\n",(0,r.kt)("a",{parentName:"p",href:"https://dart.dev/"},"Dart")," for the ",(0,r.kt)("a",{parentName:"p",href:"https://flutter.dev/"},"Flutter"),"\nplatform to access data stored in local realms."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Local Realm Database Only")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Flutter SDK currently only supports local Realm Database. You cannot\nuse the Flutter SDK to connect to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/cloud#std-label-realm-cloud"},"MongoDB Realm application\nservices")," or use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/sync/learn/overview#std-label-sync"},"Realm\nSync"),"."))),(0,r.kt)("h2",{id:"supported-realm-features"},"Supported Realm Features"),(0,r.kt)("p",null,"The alpha version of the SDK supports the following Realm features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create Realm objects"),(0,r.kt)("li",{parentName:"ul"},"Retrieve, query, sort, and filter Realm objects"),(0,r.kt)("li",{parentName:"ul"},"Update Realm objects"),(0,r.kt)("li",{parentName:"ul"},"Delete Realm objects")),(0,r.kt)("h3",{id:"alpha-limitations"},"Alpha Limitations"),(0,r.kt)("p",null,"Because this is an alpha version of the SDK, functionality is limited\nand there are specific configuration considerations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The alpha version of the SDK enables working with a local-only (on\ndevice) Realm database. Realm Sync functionality is not yet\nimplemented."),(0,r.kt)("li",{parentName:"ul"},"The SDK doesn't have built-in functionality to interact with\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/realm/cloud#std-label-realm-cloud"},"MongoDB Realm application\nservices"),"."),(0,r.kt)("li",{parentName:"ul"},"The SDK doesn't support Flutter on Linux desktop yet.")),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"To start using the MongoDB Realm Flutter SDK in your Flutter\napplication, see ",(0,r.kt)("a",{parentName:"p",href:"./install"},"Install Realm for Flutter")," to add the Flutter SDK dependency and then check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"./quick-start"},"Quick Start"),"."),(0,r.kt)("h2",{id:"dart-standalone-realm"},"Dart Standalone Realm"),(0,r.kt)("p",null,"In addition to using Realm with Flutter, you can also use Realm with\nprojects that just use Dart, like a CLI application or web server."),(0,r.kt)("p",null,"The usage for Realm with Dart is the same as the Flutter SDK, except you\nmust install and set up a separate package."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./install#dart-standalone-installation"},"Learn how to set up Realm in your Dart\nproject.")),(0,r.kt)("h2",{id:"flutter-sdk-reference"},"Flutter SDK Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/"},"Explore the reference documentation on\npub.dev.")))}c.isMDXComponent=!0}}]);