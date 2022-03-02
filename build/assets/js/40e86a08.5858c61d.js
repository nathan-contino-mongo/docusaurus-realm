"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[19],{5755:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),r=t(1736),l=["components"],s={title:"Kotlin SDK (Alpha)",sidebar_position:1},d=void 0,c={unversionedId:"sdk/kotlin/intro",id:"sdk/kotlin/intro",title:"Kotlin SDK (Alpha)",description:"This SDK is currently offered as an alpha release. We encourage you to try out the feature and give feedback. However, be aware that APIs and functionality are subject to change.",source:"@site/docs/sdk/kotlin/intro.mdx",sourceDirName:"sdk/kotlin",slug:"/sdk/kotlin/intro",permalink:"/docs/sdk/kotlin/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Kotlin SDK (Alpha)",sidebar_position:1},sidebar:"kotlin",next:{title:"Install",permalink:"/docs/category/install"}},m=[{value:"Local Realm Database",id:"local-realm-database",children:[{value:"Define an Object Schema",id:"define-an-object-schema",children:[],level:3},{value:"Query Realm Database",id:"query-realm-database",children:[],level:3},{value:"Update Objects",id:"update-objects",children:[],level:3}],level:2},{value:"Get Started",id:"get-started",children:[],level:2}],u={toc:m};function p(e){var a=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Alpha Release")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This SDK is currently offered as an alpha release. We encourage you to try out the feature and give feedback. However, be aware that APIs and functionality are subject to change."))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/realm/realm-kotlin"},"MongoDB Realm Kotlin SDK"),"\nallows you to use Realm Database from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android and iOS applications written with ",(0,i.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mobile/home.html"},"Kotlin Multiplatform Mobile\n(KMM)")),(0,i.kt)("li",{parentName:"ul"},"Standalone Android applications")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Sync Support In Development")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The SDK currently supports some, but not all, Realm Sync functionality.\nFor more information about supported behavior, see the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-sync/io.realm.mongodb/index.html"},"API reference"),"."))),(0,i.kt)("h2",{id:"local-realm-database"},"Local Realm Database"),(0,i.kt)("p",null,"With the MongoDB Realm Kotlin SDK, you can access objects stored in a\nlocal instance of Realm Database. With Realm Database, you can:"),(0,i.kt)("h3",{id:"define-an-object-schema"},"Define an Object Schema"),(0,i.kt)("p",null,"Define your object schema with marked Kotlin classes:"),(0,i.kt)(r.Z,{language:"kotlin",mdxType:"CodeBlock"},'class Frog : RealmObject {\n    var name: String = ""\n    var age: Int = 0\n    var species: String? = null\n    var owner: String? = null\n}\n'),(0,i.kt)("h3",{id:"query-realm-database"},"Query Realm Database"),(0,i.kt)("p",null,"Query for stored objects:"),(0,i.kt)(r.Z,{className:"language-kotlin",mdxType:"CodeBlock"},'val config = RealmConfiguration.Builder()\n    .schema(setOf(Frog::class))\n    .build()\nval realm = Realm.open(config)\nval frogsQuery = realm.query<Frog>()\nval numTadpoles = frogsQuery.query("age > $0", 2).count()\nLog.v("Tadpoles: $numTadpoles")\nval numFrogsNamedJasonFunderburker = frogsQuery.query("name == $0", "Jason Funderburker").count()\nLog.v("Frogs named Jason Funderburker: $numFrogsNamedJasonFunderburker")\nval numFrogsWithoutOwners = frogsQuery.query("owner == null").count()\nLog.v("Frogs without owners: $numFrogsWithoutOwners")\n'),(0,i.kt)("h3",{id:"update-objects"},"Update Objects"),(0,i.kt)("p",null,"Update objects in Realm Database by updating field values on an instance of the object within a transaction:"),(0,i.kt)(r.Z,{className:"language-kotlin",mdxType:"CodeBlock"},'val config = RealmConfiguration.Builder()\n    .schema(setOf(Frog::class))\n    .build()\nval realm = Realm.open(config)\n// start a write transaction\nrealm.writeBlocking {\n    // get a frog from the database to update\n    val frog = query<Frog>()\n        .query("name == $0 LIMIT(1)", "Benjamin Franklin").first().find()\n    // change the frog\'s name\n    frog?.name = "George Washington"\n    // change the frog\'s species\n    frog?.species = "American bullfrog"\n} // when the transaction completes, the frog\'s name and species\n// are updated in the database\n'),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"To start using the MongoDB Realm Kotlin SDK in your application, see\nthe installation guide for ",(0,i.kt)("a",{parentName:"p",href:"./install/kotlin-multiplatform"},"Kotlin Multiplatform"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"./install/android"},"Android"),"."),(0,i.kt)("p",null,"Once you've installed the SDK, check out the Quick Start."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This SDK is Currently in Alpha")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Kotlin SDK, like KMM itself, is currently in alpha. The API may change in future releases."))))}p.isMDXComponent=!0}}]);