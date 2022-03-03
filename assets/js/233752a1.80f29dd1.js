"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[218],{2122:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=t(7462),l=t(3366),o=(t(7294),t(3905)),i=t(1736),r=["components"],s={title:"Quick Start"},m=void 0,d={unversionedId:"sdk/kotlin/quick-start",id:"sdk/kotlin/quick-start",title:"Quick Start",description:"This page contains information to quickly get Realm Database",source:"@site/docs/sdk/kotlin/quick-start.mdx",sourceDirName:"sdk/kotlin",slug:"/sdk/kotlin/quick-start",permalink:"/docusaurus-realm/sdk/kotlin/quick-start",tags:[],version:"current",frontMatter:{title:"Quick Start"},sidebar:"kotlin",previous:{title:"Install (Kotlin Multiplatform)",permalink:"/docusaurus-realm/sdk/kotlin/install/kotlin-multiplatform"},next:{title:"Realm Database Overview",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/overview"}},c=[{value:"Define Your Object Model",id:"define-your-object-model",children:[],level:2},{value:"Open a Realm",id:"open-a-realm",children:[],level:2},{value:"Create, Read, Update, and Delete Objects",id:"create-read-update-and-delete-objects",children:[],level:2},{value:"Complete Example",id:"complete-example",children:[],level:2}],k={toc:c};function p(e){var a=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page contains information to quickly get Realm Database\nintegrated into your app. Before you begin, ensure you have installed\nthe Kotlin SDK for your platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./install/android"},"Android")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./install/kotlin-multiplatform"},"Kotlin Multiplatform"))),(0,o.kt)("h2",{id:"define-your-object-model"},"Define Your Object Model"),(0,o.kt)("p",null,"Your application's ",(0,o.kt)("strong",{parentName:"p"},"data model")," defines the structure of data\nstored within Realm Database.\nYou can define your application's data model via Kotlin\nclasses in your application code with\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/sync/data-model/create-a-schema/#std-label-create-schema-from-rom"},"Realm Object Models"),"."),(0,o.kt)("p",null,"To define your application's data model, add the following class\ndefinition to your application code:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},'class Task : RealmObject {\n    var name: String = "new task"\n    var status: String = "Open"\n}\n'),(0,o.kt)("h2",{id:"open-a-realm"},"Open a Realm"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm-configuration/index.html"},"RealmConfiguration"),"\nto control the specifics of the realm you\nwould like to open, including the name, location, and schema.\nPass your configuration to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/index.html"},"Realm constructor"),"\nto generate an instance of that realm:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},"val config = RealmConfiguration.Builder()\n    .schema(setOf(Task::class))\n    .build()\nval realm: Realm = Realm.open(config)\n"),(0,o.kt)("h2",{id:"create-read-update-and-delete-objects"},"Create, Read, Update, and Delete Objects"),(0,o.kt)("p",null,"Once opened, you can create objects within a realm in a\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/index.html#1141849336%2FFunctions%2F1327329691"},"write transaction block"),"."),(0,o.kt)("p",null,"To create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Task"),", instantiate an instance of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," class and add it to the realm in a write transaction block:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},'realm.writeBlocking {\n    copyToRealm(Task().apply {\n        name = "Do work"\n        status = "Open"\n    })\n}\n'),(0,o.kt)("p",null,"You can retrieve a collection of all tasks in the realm with the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/objects.html"},"io.realm.objects()"),"\nconvenience wrapper:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},"// all tasks in the realm\nval tasks = realm.query<Task>().find()\n"),(0,o.kt)("p",null,"You can also filter a collection to retrieve a more specific collection\nof objects:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},'// all tasks in the realm\nval tasksThatBeginWIthD = realm.query<Task>("name BEGINSWITH $0", "D").find()\nval openTasks = realm.query<Task>("status == $0", "Open").find()\n'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Realm Query Language")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can find more information about string Realm Database queries in\nthe ",(0,o.kt)("a",{parentName:"p",href:"sdk/kotlin/realm-database/query-language"},"Realm Query Language Reference"),"."))),(0,o.kt)("p",null,"To modify a task, update its properties in a write transaction block:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},'realm.writeBlocking {\n    findLatest(openTasks[0])?.status = "In Progress"\n}\n'),(0,o.kt)("p",null,"Finally, you can delete a task by calling the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm-object/index.html#2054000914%2FExtensions%2F1327329691"},"object.delete()"),"\nmethod in a write transaction block:"),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},"realm.writeBlocking {\n    findLatest(tasks[0])?.delete()\n}\n"),(0,o.kt)("h2",{id:"complete-example"},"Complete Example"),(0,o.kt)("p",null,"If you're running this project in a fresh KMM template project, you can\ncopy and paste into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeting.greeting()")," method in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"commonMain")," module."),(0,o.kt)(i.Z,{language:"kotlin",mdxType:"CodeBlock"},'val config = RealmConfiguration.Builder()\n    .schema(setOf(Task::class))\n    .build()\nval realm: Realm = Realm.open(config)\nrealm.writeBlocking {\n    copyToRealm(Task().apply {\n        name = "Do work"\n        status = "Open"\n    })\n}\n// all tasks in the realm\nval tasks = realm.query<Task>().find()\n// all tasks in the realm\nval tasksThatBeginWIthD = realm.query<Task>("name BEGINSWITH $0", "D").find()\nval openTasks = realm.query<Task>("status == $0", "Open").find()\nrealm.writeBlocking {\n    findLatest(openTasks[0])?.status = "In Progress"\n}\nrealm.writeBlocking {\n    findLatest(tasks[0])?.delete()\n}\n'))}p.isMDXComponent=!0}}]);