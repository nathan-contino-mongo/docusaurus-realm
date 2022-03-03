"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[712],{3401:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=n(1736),r=["components"],c={title:"Connect to a Realm App"},p=void 0,l={unversionedId:"sdk/kotlin/app-services/connect",id:"sdk/kotlin/app-services/connect",title:"Connect to a Realm App",description:"The App client is the interface to the MongoDB Realm",source:"@site/docs/sdk/kotlin/app-services/connect.mdx",sourceDirName:"sdk/kotlin/app-services",slug:"/sdk/kotlin/app-services/connect",permalink:"/docusaurus-realm/sdk/kotlin/app-services/connect",tags:[],version:"current",frontMatter:{title:"Connect to a Realm App"},sidebar:"kotlin",previous:{title:"App Services Overview",permalink:"/docusaurus-realm/sdk/kotlin/app-services/overview"},next:{title:"Register Users",permalink:"/docusaurus-realm/sdk/kotlin/app-services/register-users"}},d=[{value:"Access the App Client",id:"access-the-app-client",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," client is the interface to the MongoDB Realm\nbackend. It provides access to ",(0,i.kt)("a",{parentName:"p",href:"sdk/kotlin/app-services/authenticate-users"},"authentication"),"\nand Sync."),(0,i.kt)("h2",{id:"access-the-app-client"},"Access the App Client"),(0,i.kt)("p",null,"Pass the App ID for your backend, which you can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/get-started/find-your-project-or-app-id/#std-label-find-your-app-id"},"find in the Realm UI"),"."),(0,i.kt)(s.Z,{language:"kotlin",mdxType:"CodeBlock"},"val app = App.create(YOUR_APP_ID)\n"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can create multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," instances to connect to multiple\nbackends or to the same backend with different configurations. All\n",(0,i.kt)("inlineCode",{parentName:"p"},"App")," instances that share the same App ID use the same underlying\nconnection."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For more granular control of the details of your app connection,\nsuch as custom timeouts for connections and keys for local encryption,\nuse the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-sync/-realm%20-kotlin%20-multiplatform%20-s-d-k%20-%20-sync/io.realm.mongodb/-app-configuration/-builder/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AppConfiguration.Builder")),"\nto control details of your ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),":"),(0,i.kt)(s.Z,{language:"kotlin",mdxType:"CodeBlock"},"App.create(\n    AppConfiguration.Builder(YOUR_APP_ID)\n    .log(LogLevel.ALL)\n    .build())\n"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Most Configuration is Optional")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For most use cases, you only need your application's App ID to connect\nto MongoDB Realm. The other settings demonstrated here are optional."))))}u.isMDXComponent=!0}}]);