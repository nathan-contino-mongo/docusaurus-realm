"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[218],{8215:function(e,a,t){var l=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return d}});var l=t(7462),n=t(7294),r=t(2389),o=t(9548),i=t(6010),s="tabItem_LplD";function c(e){var a,t,r,c=e.lazy,d=e.block,m=e.defaultValue,u=e.values,p=e.groupId,h=e.className,k=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:k.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,o.lx)(f,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(a=null!=m?m:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(r=k[0])?void 0:r.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,C=g.setTabGroupChoices,N=(0,n.useState)(v),w=N[0],T=N[1],R=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=y[p];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&T(x)}var D=function(e){var a=e.currentTarget,t=R.indexOf(a),l=f[t].value;l!==w&&(j(a),T(l),null!=p&&C(p,l))},Z=function(e){var a,t=null;switch(e.key){case"ArrowRight":var l=R.indexOf(e.currentTarget)+1;t=R[l]||R[0];break;case"ArrowLeft":var n=R.indexOf(e.currentTarget)-1;t=R[n]||R[R.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var a=e.value,t=e.label,r=e.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return R.push(e)},onKeyDown:Z,onFocus:D,onClick:D},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":w===a})}),null!=t?t:a)}))),c?(0,n.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function d(e){var a=(0,r.Z)();return n.createElement(c,(0,l.Z)({key:String(a)},e))}},2895:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return h}});var l=t(7462),n=t(3366),r=(t(7294),t(3905)),o=t(9877),i=t(8215),s=t(1736),c="var cars = realm.all<Car>();\nvar myCar = cars[0];\nprint('My car is ${myCar.make} ${myCar.model}');\n",d=["components"],m={title:"Quick Start"},u=void 0,p={unversionedId:"sdk/kotlin/quick-start",id:"sdk/kotlin/quick-start",title:"Quick Start",description:"This page contains information to quickly get Realm Database integrated",source:"@site/docs/sdk/kotlin/quick-start.mdx",sourceDirName:"sdk/kotlin",slug:"/sdk/kotlin/quick-start",permalink:"/docusaurus-realm/sdk/kotlin/quick-start",tags:[],version:"current",frontMatter:{title:"Quick Start"},sidebar:"kotlin",previous:{title:"Install (Kotlin Multiplatform)",permalink:"/docusaurus-realm/sdk/kotlin/install/kotlin-multiplatform"},next:{title:"Realm Database",permalink:"/docusaurus-realm/sdk/kotlin/realm-database"}},h=[{value:"Define Your Object Model",id:"define-your-object-model",children:[{value:"Create Data Model",id:"create-data-model",children:[],level:3},{value:"Generate RealmObject Class",id:"generate-realmobject-class",children:[],level:3}],level:2},{value:"Open a Realm",id:"open-a-realm",children:[],level:2},{value:"Work with Realm Objects",id:"work-with-realm-objects",children:[{value:"Create Objects",id:"create-objects",children:[],level:3},{value:"Update Objects",id:"update-objects",children:[],level:3},{value:"Query for Objects",id:"query-for-objects",children:[],level:3},{value:"Delete Objects",id:"delete-objects",children:[],level:3}],level:2},{value:"Close a Realm",id:"close-a-realm",children:[],level:2},{value:"Further Examples",id:"further-examples",children:[],level:2}],k={toc:h};function f(e){var a=e.components,t=(0,n.Z)(e,d);return(0,r.kt)("wrapper",(0,l.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page contains information to quickly get Realm Database integrated\ninto your Flutter app."),(0,r.kt)("p",null,"Before you begin, ensure you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./install#installation"},"Installed the Flutter\nSDK"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Local Realm Database Only")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Flutter SDK currently only supports local Realm Database. You cannot\nuse the Flutter SDK to connect to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/cloud#std-label-realm-cloud"},"MongoDB Realm application\nservices")," or use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/sync/learn/overview#std-label-sync"},"Realm\nSync"),"."))),(0,r.kt)("h2",{id:"define-your-object-model"},"Define Your Object Model"),(0,r.kt)("p",null,"Your application's ",(0,r.kt)("strong",{parentName:"p"},"data model")," defines the structure of data stored\nwithin Realm Database. You can define your application's data model via\nDart classes in your application code with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/sync/data-model/create-a-schema#std-label-create-schema-from-rom"},"Realm Object\nModels"),".\nYou then have to generate the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/RealmObject-class.html"},"RealmObject"),"\nclass that's used within your application."),(0,r.kt)("h3",{id:"create-data-model"},"Create Data Model"),(0,r.kt)("p",null,"To define your application's data model, add a Realm model class\ndefinition to your application code."),(0,r.kt)("p",null,"Some considerations when defining your Realm model class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import package at the top of your class definition file."),(0,r.kt)("li",{parentName:"ul"},"In your file, give your class a private name (starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"),\nsuch as a file ",(0,r.kt)("inlineCode",{parentName:"li"},"car.dart")," with a class ",(0,r.kt)("inlineCode",{parentName:"li"},"_Car"),". You generate the\npublic RealmObject class using the command in the Generate\nRealmObject Class section. This command outputs a public class, such\nas ",(0,r.kt)("inlineCode",{parentName:"li"},"Car"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure to include the generated file name, such as\n",(0,r.kt)("inlineCode",{parentName:"li"},"part car.g.dart"),", before the code defining your model. This is\nrequired to generate the RealmObject class.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"import 'package:realm/realm.dart';\n\npart 'car.g.dart';\n\n@RealmModel()\nclass _Car {\n  @PrimaryKey()\n  late final String make;\n\n  late String? model;\n  late int? miles;\n}\n")),(0,r.kt)(i.Z,{value:"dart",label:"Dart",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"import 'package:realm_dart/realm.dart';\n\npart 'car.g.dart';\n\n@RealmModel()\nclass _Car {\n  @PrimaryKey()\n  late final String make;\n\n  late String? model;\n  late int? miles;\n}\n"))),(0,r.kt)("h3",{id:"generate-realmobject-class"},"Generate RealmObject Class"),(0,r.kt)("p",null,"Now generate a RealmObject class ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," from the data model class ",(0,r.kt)("inlineCode",{parentName:"p"},"Car"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flutter pub run realm generate\n"))),(0,r.kt)(i.Z,{value:"dart",label:"Dart",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dart run realm_dart generate\n")))),(0,r.kt)("p",null,"Running this creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," class in a ",(0,r.kt)("inlineCode",{parentName:"p"},"car.g.dart")," file located in the\ndirectory where you defined the model class per the above Create Data\nModel section. This ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," class is public and part of the same library\nas the ",(0,r.kt)("inlineCode",{parentName:"p"},"_Car")," data model class. The generated ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," class is what's used\nthroughout your application."),(0,r.kt)("p",null,"If you'd like to watch your data model class to generate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Car"),"\nclass whenever there's a change to ",(0,r.kt)("inlineCode",{parentName:"p"},"_Car"),", run:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"flutter",label:"Flutter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flutter pub run realm generate --watch\n"))),(0,r.kt)(i.Z,{value:"dart",label:"Dart",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dart run realm_dart generate --watch\n")))),(0,r.kt)("h2",{id:"open-a-realm"},"Open a Realm"),(0,r.kt)("p",null,"Use the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Configuration-class.html"},"Configuration"),"\nclass to control the specifics of the realm you would like to open,\nincluding schema."),(0,r.kt)("p",null,"Pass your configuration to the ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Realm-class.html"},"Realm\nconstructor"),"\nto generate an instance of that realm:"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"var config = Configuration([Car.schema]);\nvar realm = Realm(config);\n"),(0,r.kt)("p",null,"You can now use that realm instance to work with objects in the\ndatabase."),(0,r.kt)("h2",{id:"work-with-realm-objects"},"Work with Realm Objects"),(0,r.kt)("p",null,"Once you've opened a realm, you can create objects within it using a\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Realm/write.html"},"write transaction\nblock"),"."),(0,r.kt)("h3",{id:"create-objects"},"Create Objects"),(0,r.kt)("p",null,"To create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Car"),", instantiate an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," class and\nadd it to the realm in a write transaction block:"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"final car = Car('Tesla', model: 'Model S', miles: 42);\nrealm.write(() {\n  realm.add(car);\n});\n"),(0,r.kt)("h3",{id:"update-objects"},"Update Objects"),(0,r.kt)("p",null,"To modify a car, update its properties in a write transaction block:"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"realm.write(() {\n  car.miles = 99;\n});\n"),(0,r.kt)("h3",{id:"query-for-objects"},"Query for Objects"),(0,r.kt)("p",null,"Retrieve a collection of all objects of a data model in the realm with\nthe\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Realm/all.html"},"Realm.all()"),"\nmethod:"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},c),(0,r.kt)("p",null,"Filter a collection to retrieve a specific segment of objects with the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Realm/query.html"},"Realm.query()"),"\nmethod:"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},c),(0,r.kt)("p",null,"Sort the results using ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pCreating.html"},"NSPredicate\nsyntax"),":"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"realm.write(() {\n  realm.add(Car('BMW', model: 'Z4', miles: 42));\n  realm.add(Car('Audi', model: 'A8', miles: 99));\n  realm.add(Car('Mercedes', model: 'G-Wagon', miles: 2));\n});\nfinal sortedCars = realm.query<Car>('TRUEPREDICATE SORT(model ASC)');\nfor (var car in sortedCars) {\n  print(car.model);\n}\n// prints 'A8', 'G-Wagon', 'Z4'\n"),(0,r.kt)("h3",{id:"delete-objects"},"Delete Objects"),(0,r.kt)("p",null,"Delete a car by calling the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Realm/delete.html"},"Realm.delete()"),"\nmethod in a write transaction block:"),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"realm.write(() {\n  realm.delete(car);\n});\n"),(0,r.kt)("p",null,"Delete multiple cars with the\n",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/realm/latest/realm/Realm/deleteMany.html"},"Realm.deleteMany()"),"\nmethod in a write transaction block."),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"realm.write(() {\n  realm.deleteMany(cars);\n});\n"),(0,r.kt)("h2",{id:"close-a-realm"},"Close a Realm"),(0,r.kt)("p",null,"Once you've finished working with a realm, close it to prevent memory\nleaks."),(0,r.kt)(s.Z,{className:"language-dart",mdxType:"CodeBlock"},"realm.close();\n"),(0,r.kt)("h2",{id:"further-examples"},"Further Examples"),(0,r.kt)("p",null,"For further examples of all the Flutter SDK methods described above and\nmore, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/realm/realm-dart-samples"},"Realm Dart Samples Github\nrepo"),"."))}f.isMDXComponent=!0}}]);