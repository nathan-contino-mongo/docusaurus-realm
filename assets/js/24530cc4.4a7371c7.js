"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[411],{9674:function(e,a,l){l.r(a),l.d(a,{contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var n=l(7462),t=l(3366),o=(l(7294),l(3905)),r=l(1736),s=["components"],i={title:"Open and Close a Realm"},m=void 0,d={unversionedId:"sdk/kotlin/realm-database/open-and-close-a-realm",id:"sdk/kotlin/realm-database/open-and-close-a-realm",title:"Open and Close a Realm",description:"Open a Realm",source:"@site/docs/sdk/kotlin/realm-database/open-and-close-a-realm.mdx",sourceDirName:"sdk/kotlin/realm-database",slug:"/sdk/kotlin/realm-database/open-and-close-a-realm",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/open-and-close-a-realm",tags:[],version:"current",frontMatter:{title:"Open and Close a Realm"},sidebar:"kotlin",previous:{title:"Frozen Architecture",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/frozen-architecture"},next:{title:"Supported Types",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/schemas/supported-types"}},c=[{value:"Open a Realm",id:"open-a-realm",children:[],level:2},{value:"Close a Realm",id:"close-a-realm",children:[],level:2}],p={toc:c};function u(e){var a=e.components,l=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"open-a-realm"},"Open a Realm"),(0,o.kt)("p",null,"To open a {+realm+}, create a\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm-configuration/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"RealmConfiguration"))," with\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm-configuration/-builder/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"RealmConfiguration.Builder")),"\nand pass the resulting :file:",(0,o.kt)("inlineCode",{parentName:"p"},"RealmConfiguration")," to\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/library-base/-realm%20-kotlin%20-multiplatform%20-s-d-k/io.realm/-realm/-companion/open.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Realm.open()")),":"),(0,o.kt)(r.Z,{language:"kotlin",mdxType:"CodeBlock"},'val config = RealmConfiguration.Builder()\n    .schema(setOf(CRUDTest.Frog::class))\n    // specify name so realm doesn\'t just use the "default.realm" file\n    .name(REALM_NAME)\n    .build()\nval realm = Realm.open(config)\nLog.v("Successfully opened realm: ${realm.configuration.name}")\n'),(0,o.kt)("h2",{id:"close-a-realm"},"Close a Realm"),(0,o.kt)("p",null,"You can close a realm with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm-sdks/kotlin/latest/io.realm/-realm/close.html?"},(0,o.kt)("inlineCode",{parentName:"a"},"realm.close()")),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"close()")," method blocks until all write transactions on the\nrealm have completed."),(0,o.kt)(r.Z,{language:"kotlin",mdxType:"CodeBlock"},"realm.close()\n"))}u.isMDXComponent=!0}}]);