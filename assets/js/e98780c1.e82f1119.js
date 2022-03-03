"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[122],{1814:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return h}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=a(1736),s=a(1128),i=["components"],c={title:"Frozen Architecture"},d=void 0,m={unversionedId:"sdk/kotlin/realm-database/frozen-architecture",id:"sdk/kotlin/realm-database/frozen-architecture",title:"Frozen Architecture",description:"Unlike the other Realm SDKs, the Kotlin SDK",source:"@site/docs/sdk/kotlin/realm-database/frozen-architecture.mdx",sourceDirName:"sdk/kotlin/realm-database",slug:"/sdk/kotlin/realm-database/frozen-architecture",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/frozen-architecture",tags:[],version:"current",frontMatter:{title:"Frozen Architecture"},sidebar:"kotlin",previous:{title:"Write Transactions",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/write-transactions"},next:{title:"Supported Types",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/schemas/supported-types"}},h=[{value:"Work with Frozen Objects",id:"work-with-frozen-objects",children:[{value:"Access a Live Version of Frozen Object",id:"access-a-live-version-of-frozen-object",children:[],level:3}],level:2},{value:"Thread-safe Realms",id:"thread-safe-realms",children:[{value:"Access Changes",id:"access-changes",children:[],level:3},{value:"Lazy Loading",id:"lazy-loading",children:[],level:3}],level:2}],u={toc:h};function k(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Unlike the other Realm SDKs, the Kotlin SDK\ndoes not provide live objects and collections that\nupdate simultaneously with underlying data. Instead,\nthe Kotlin SDK works exclusively with ",(0,l.kt)("strong",{parentName:"p"},"frozen objects"),"\nthat can be passed between threads safely."),(0,l.kt)("h2",{id:"work-with-frozen-objects"},"Work with Frozen Objects"),(0,l.kt)("p",null,"Because frozen objects don't automatically update when data changes\nin your realm, they work a little differently from the live objects\nyou may have used in other Realm SDKs."),(0,l.kt)("h3",{id:"access-a-live-version-of-frozen-object"},"Access a Live Version of Frozen Object"),(0,l.kt)("p",null,"In order to modify objects, they must be live. You can convert a frozen\nobject to a live object in a transaction with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-mutable-realm/find-latest.html"},(0,l.kt)("inlineCode",{parentName:"a"},"mutableRealm.findLatest()")),".\nLive objects are only accessible inside of a write transaction within\na ",(0,l.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/write.html"},(0,l.kt)("inlineCode",{parentName:"a"},"write")),"\nor ",(0,l.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/write-blocking.html"},(0,l.kt)("inlineCode",{parentName:"a"},"writeBlocking")),"\nclosure."),(0,l.kt)("p",null,"Objects returned from a write closure become frozen objects when the\nwrite transaction completes."),(0,l.kt)(r.Z,{language:"kotlin",mdxType:"CodeBlock"},s.Z),(0,l.kt)("h2",{id:"thread-safe-realms"},"Thread-safe Realms"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/index.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Realm")),"\nclass is no longer thread-confined, so you can share a single realm\nacross multiple threads. You no longer need to handle the realm\nlifecycle explicitly with calls to\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/close.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Realm.close()"))),(0,l.kt)("h3",{id:"access-changes"},"Access Changes"),(0,l.kt)("p",null,"To access changes to objects and collections, use\n",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coroutines-overview.html"},"Coroutines"),"\nand the ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/flow.html"},"Flow API"),". Changes\nare thread-safe, so you can access them from any context. Notifications\nare handled on a dedicated internal notifier thread. Frozen objects now\nsupport change listeners."),(0,l.kt)(r.Z,{language:"kotlin",mdxType:"CodeBlock"},'val config = RealmConfiguration.Builder()\n    .schema(setOf(Task::class))\n    .build()\nval realm = Realm.open(config)\n\n// fetch objects from a realm as Flowables\nCoroutineScope(Dispatchers.Main).launch {\n    val flow: Flow<ResultsChange<Task>> = realm.query<Task>().asFlow()\n    flow.collect { task ->\n        Log.v("Task: $task")\n    }\n}\n\n// write an object to the realm in a coroutine\nCoroutineScope(Dispatchers.Main).launch {\n    realm.write {\n        copyToRealm(Task().apply { name = "my task"; status = "Open"})\n    }\n}\n'),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"The Flows API Requires Kotlinx Coroutines")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To use the Flows API in your KMM project, install the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.coroutines#multiplatform"},"kotlinx.coroutines"),"\nlibrary."))),(0,l.kt)("p",null,"Just like in other Realm SDKs, write transactions implicitly\nadvance your realm to the most recent version of data stored on disk."),(0,l.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,l.kt)("p",null,"Realm objects are still lazy-loaded by default. This allows\nyou to query large collections of objects without reading large amounts\nof data from disk. This also means that the first access to\na field of an object will always return the most recent data."))}k.isMDXComponent=!0},1128:function(e,t){t.Z="val sample: Sample? =\n    realm.query<Sample>()\n        .first().find()\n\n// delete one object synchronously\nrealm.writeBlocking {\n    val liveSample: Sample? =\n        this.findLatest(sample!!)\n    liveSample?.delete()\n}\n\n// delete a query result asynchronously\nGlobalScope.launch {\n    realm.write {\n        query<Sample>()\n            .first()\n            .find()\n            .also { delete(it!!) }\n    }\n}\n"}}]);