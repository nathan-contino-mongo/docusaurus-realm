"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[674],{8215:function(e,t,n){var l=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var l=n(7462),a=n(7294),r=n(2389),i=n(9548),o=n(6010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,h=e.groupId,k=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=m[0])?void 0:r.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,a.useState)(f),w=x[0],T=x[1],C=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=b[h];null!=j&&j!==w&&g.some((function(e){return e.value===j}))&&T(j)}var q=function(e){var t=e.currentTarget,n=C.indexOf(t),l=g[n].value;l!==w&&(E(t),T(l),null!=h&&N(h,l))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=C.indexOf(e.currentTarget)+1;n=C[l]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:q,onClick:q},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,r.Z)();return a.createElement(u,(0,l.Z)({key:String(t)},e))}},1758:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(9877),o=n(8215),s=n(1736),u=["components"],d={title:"Realm Query Language"},p=void 0,c={unversionedId:"sdk/kotlin/realm-database/query-language",id:"sdk/kotlin/realm-database/query-language",title:"Realm Query Language",description:"Overview",source:"@site/docs/sdk/kotlin/realm-database/query-language.mdx",sourceDirName:"sdk/kotlin/realm-database",slug:"/sdk/kotlin/realm-database/query-language",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/query-language",tags:[],version:"current",frontMatter:{title:"Realm Query Language"},sidebar:"kotlin",previous:{title:"Delete All Objects of a Type",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/delete/delete-all-objects-of-a-type"},next:{title:"Write Transactions",permalink:"/docusaurus-realm/sdk/kotlin/realm-database/write-transactions"}},h=[{value:"Overview",id:"overview",children:[],level:2},{value:"Expressions",id:"expressions",children:[],level:2},{value:"Dot Notation",id:"dot-notation",children:[],level:2},{value:"Subqueries",id:"subqueries",children:[{value:"Example",id:"example",children:[],level:3},{value:"About the Examples On This Page",id:"about-the-examples-on-this-page",children:[],level:3}],level:2},{value:"Operators",id:"operators",children:[{value:"Comparison Operators",id:"comparison-operators",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"Logical Operators",id:"logical-operators",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"String Operators",id:"string-operators",children:[{value:"Case Insensitivity",id:"case-insensitivity",children:[],level:4},{value:"Example",id:"example-3",children:[],level:4}],level:3},{value:"Aggregate Operators",id:"aggregate-operators",children:[{value:"Example",id:"example-4",children:[],level:4}],level:3},{value:"Collection Operators",id:"collection-operators",children:[{value:"Example",id:"example-5",children:[],level:4}],level:3},{value:"Sort, Distinct, Limit",id:"sort-distinct-limit",children:[{value:"Example",id:"example-6",children:[],level:4}],level:3}],level:2}],k={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Realm Database supports a string-based query language to constrain\nsearches when retrieving objects. Queries evaluate a predicate for every\nobject in the collection being queried. If the predicate resolves\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", Realm Database includes the object in the results\ncollection."),(0,r.kt)("p",null,"You can use Realm Query Language in most Realm SDKs with your SDK's filter\nor query methods. The Swift SDK is the exception, as it uses the NSPredicate\nquery API."),(0,r.kt)("p",null,"You can also use Realm Query Language to browse for data in\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/realm/studio/#std-label-realm-studio"},"Realm Studio"),"."),(0,r.kt)("h2",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"Filters consist of ",(0,r.kt)("strong",{parentName:"p"},"expressions")," in a predicate. An expression consists of\none of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name of a property of the object currently being evaluated."),(0,r.kt)("li",{parentName:"ul"},"An operator and up to two argument expression(s). For example, in the\nexpression ",(0,r.kt)("inlineCode",{parentName:"li"},"A + B"),", the entirety of ",(0,r.kt)("inlineCode",{parentName:"li"},"A + B")," is an expression, but ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),"\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," are also argument expressions to the operator ",(0,r.kt)("inlineCode",{parentName:"li"},"+"),". "),(0,r.kt)("li",{parentName:"ul"},"A value, such as a string (",(0,r.kt)("inlineCode",{parentName:"li"},"'hello'"),") or a number (",(0,r.kt)("inlineCode",{parentName:"li"},"5"),").")),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},'"progressMinutes > 1 AND assignee == $0",\n"Ali"\n'),(0,r.kt)("h2",{id:"dot-notation"},"Dot Notation"),(0,r.kt)("p",null,"When referring to an object property, you can use ",(0,r.kt)("strong",{parentName:"p"},"dot notation")," to refer\nto child properties of that object. You can even refer to the properties of\nembedded objects and relationships with dot notation."),(0,r.kt)("p",null,"For example, consider a query on an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"workplace")," property that\nrefers to a Workplace object. The Workplace object has an embedded object\nproperty, ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),". You can chain dot notations to refer to the zipcode\nproperty of that address: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nworkplace.address.zipcode == 10012\n")),(0,r.kt)("h2",{id:"subqueries"},"Subqueries"),(0,r.kt)("p",null,"You can iterate through a collection property with another query using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"SUBQUERY()")," predicate function. ",(0,r.kt)("inlineCode",{parentName:"p"},"SUBQUERY()")," has the following signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nSUBQUERY(<collection>, <variableName>, <predicate>)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collection"),": the name of the property to iterate through"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"variableName"),": a variable name of the current element to use in the subquery"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicate"),": a string that contains the subquery predicate. You can use the\nvariable name specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"variableName")," to refer to the currently-iterated\nelement.")),(0,r.kt)("p",null,"A subquery iterates through the given collection and checks the given\npredicate against each object in the collection. The predicate may refer\nto the current iterated object with the variable name passed to\n",(0,r.kt)("inlineCode",{parentName:"p"},"SUBQUERY()"),"."),(0,r.kt)("p",null,"A subquery expression resolves to an array. Realm Database only\nsupports the ",(0,r.kt)("inlineCode",{parentName:"p"},"@count")," ",(0,r.kt)("a",{parentName:"p",href:"#aggregate-operators"},"aggregate operator"),"\non this result. This allows you to count how\nmany objects in the subquery input collection matched the predicate."),(0,r.kt)("p",null,"You can use the count of the subquery result as you would any other\nnumber in a valid expression. In particular, you can compare the count\nwith a number literal (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),") or another property (such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"quota"),")."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following example shows two filters on a ",(0,r.kt)("inlineCode",{parentName:"p"},"projects")," collection."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first returns projects with tasks that have not been completed by a user named Alex."),(0,r.kt)("li",{parentName:"ul"},"The second returns the projects where the number of completed tasks is greater than or equal to the project's quota value.")),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},'  "SUBQUERY(tasks, $task, $task.isComplete == false AND $task.assignee == \'Alex\').@count > 0"\n\n  "SUBQUERY(tasks, $task, $task.isComplete == true).@count >= quota"\n'),(0,r.kt)("h3",{id:"about-the-examples-on-this-page"},"About the Examples On This Page"),(0,r.kt)("p",null,"The examples in this page use a simple data set for a task list app.\nThe two Realm object types are ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),"\nhas a name, assignee's name, and completed flag. There is also an\narbitrary number for priority -- higher is more important -- and a\ncount of minutes spent working on it. A ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," has zero or more\n",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks")," and an optional quota for minimum number of tasks expected\nto be completed."),(0,r.kt)("p",null,"See the schema for these two classes, ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),", below:"),(0,r.kt)(i.Z,{groupId:"sdks",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin SDK",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"kotlin",mdxType:"CodeBlock"},"class Task() {\n    var id: Long = 0 // Kotlin SDK does not yet support ObjectId\n    lateinit var name: String\n    var isComplete: Boolean = false\n    var assignee: String? = null\n    var priority: Int = 0\n    var progressMinutes: Int = 0\n}\n\nclass Project() {\n    var id: Long = 0 // Kotlin SDK does not yet support ObjectId\n    lateinit var name: String\n    lateinit var tasks: Array<Task>\n    var quota: Int? = null\n}\n")),(0,r.kt)(o.Z,{value:"swift",label:"Swift SDK",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"swift",mdxType:"CodeBlock"},"class Task {\n   ObjectId id;\n   string name;\n   bool isComplete;\n   string? assignee;\n   int priority;\n   int progressMinutes;\n}\n\nclass Project {\n   ObjectId id;\n   string name;\n   Task[] tasks;\n   int? quota;\n}"))),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("p",null,"There are several types of operators available to query a\nRealm collection. With these operators, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compare values"),(0,r.kt)("li",{parentName:"ul"},"Perform logical evaluations"),(0,r.kt)("li",{parentName:"ul"},"Compare string values"),(0,r.kt)("li",{parentName:"ul"},"Aggregate collection properties"),(0,r.kt)("li",{parentName:"ul"},"Evaluate sets"),(0,r.kt)("li",{parentName:"ul"},"Sort and limit results")),(0,r.kt)("h3",{id:"comparison-operators"},"Comparison Operators"),(0,r.kt)("p",null,"The most straightforward operation in a search is to compare\nvalues."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Types Must Match")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The type on both sides of the operator must be equivalent. For\nexample, comparing an ObjectId with string will result in a precondition\nfailure with a message like:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"\"Expected object of type object id for property 'id' on object of type \n'User', but received: 11223344556677889900aabb (Invalid value)\"\n")),(0,r.kt)("p",{parentName:"div"},"You can compare any numeric type with any other numeric type,\nincluding decimal, float, and Decimal128."))),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"between")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand numerical or date expression is between or equal to the right-hand range. For dates, this evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand date is within the right-hand date range.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"=="),", ",(0,r.kt)("code",null,"=")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand expression is equal to the right-hand expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,">")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand numerical or date expression is greater than the right-hand numerical or date expression. For dates, this evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand date is later than the right-hand date.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,">=")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand numerical or date expression is greater than or equal to the right-hand numerical or date expression. For dates, this evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand date is later than or the same as the right-hand date.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"in")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand expression is in the right-hand list or string.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"<")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand numerical or date expression is less than the right-hand numerical or date expression. For dates, this evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand date is earlier than the right-hand date.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"<=")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand numeric expression is less than or equal to the right-hand numeric expression. For dates, this evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand date is earlier than or the same as the right-hand date.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"!="),", ",(0,r.kt)("code",null,"<>=")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand expression is not equal to the right-hand expression."))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,"The following example uses the query engine's\ncomparison operators to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find high priority tasks by comparing the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"priority")," property value with a threshold number, above which priority can be considered high."),(0,r.kt)("li",{parentName:"ul"},"Find long-running tasks by seeing if the ",(0,r.kt)("inlineCode",{parentName:"li"},"progressMinutes")," property is at or above a certain value."),(0,r.kt)("li",{parentName:"ul"},"Find unassigned tasks by finding tasks where the ",(0,r.kt)("inlineCode",{parentName:"li"},"assignee")," property is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},"Find tasks within a certain time range by finding tasks where the ",(0,r.kt)("inlineCode",{parentName:"li"},"progressMinutes")," property is between two numbers.")),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},'  "priority > 5"\n\n  "progressMinutes > 120"\n\n  "assignee == nil"\n\n  "progressMinutes BETWEEN { 30,60 }"\n'),(0,r.kt)("h3",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("p",null,"You can make compound predicates using logical operators."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"AND"),", ",(0,r.kt)("code",null,"&&")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if both left-hand and right-hand expressions are ",(0,r.kt)("code",null,"true"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"NOT"),", ",(0,r.kt)("code",null,"!")),(0,r.kt)("td",null,"Negates the result of the given expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"OR"),", ",(0,r.kt)("code",null,"||")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if either expression returns ",(0,r.kt)("code",null,"true"),"."))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"We can use the query language's logical operators to find\nall of Ali's completed tasks. That is, we find all tasks\nwhere the ",(0,r.kt)("inlineCode",{parentName:"p"},"assignee")," property value is equal to 'Ali' AND\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"isComplete")," property value is ",(0,r.kt)("code",null,"true"),":"),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},"\"assignee == 'Ali' AND isComplete == true\"\n"),(0,r.kt)("h3",{id:"string-operators"},"String Operators"),(0,r.kt)("p",null,"You can compare string values using these string operators.\nRegex-like wildcards allow more flexibility in search."),(0,r.kt)("h4",{id:"case-insensitivity"},"Case Insensitivity"),(0,r.kt)("p",null,"You can use the following modifiers with the string operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[c]")," for case insensitivity.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\"name CONTAINS[c] 'a'\"\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"beginsWith")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand string expression begins with the right-hand string expression. This is similar to ",(0,r.kt)("code",null,"contains"),", but only matches if the right-hand string expression is found at the beginning of the left-hand string expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"in")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand string expression is found anywhere in the right-hand string expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contains")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the right-hand string expression is found anywhere in the left-hand string expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"endsWith")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand string expression ends with the right-hand string expression. This is similar to ",(0,r.kt)("code",null,"contains"),", but only matches if the left-hand string expression is found at the very end of the right-hand string expression.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"like")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand string expression matches the right-hand string wildcard string expression. A wildcard string expression is a string that uses normal characters with two special wildcard characters, including ",(0,r.kt)("code",null,"*")," (matches zero or more of any character) and ",(0,r.kt)("code",null,"?"),' (matches any character). For example, the wildcard string "d?g" matches "dog", "dig", and "dug", but not "ding", "dg", or "a dog".')),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"=="),", ",(0,r.kt)("code",null,"=")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand string is lexicographically equal to the right-hand string.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"!="),", ",(0,r.kt)("code",null,"<>")),(0,r.kt)("td",null,"Evaluates to ",(0,r.kt)("code",null,"true")," if the left-hand string is not lexicographically equal to the right-hand string."))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"We use the query engine's string operators to find:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projects with a name starting with the letter 'e'"),(0,r.kt)("li",{parentName:"ul"},"Projects with names that contain 'ie'")),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},"  \"name BEGINSWITH[c] 'e'\"\n\n  \"name CONTAINS 'ie'\"\n"),(0,r.kt)("h3",{id:"aggregate-operators"},"Aggregate Operators"),(0,r.kt)("p",null,"You can apply an aggregate operator to a collection property of a Realm\nobject. Aggregate operators traverse a collection and reduce it to a\nsingle value."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"@avg")),(0,r.kt)("td",null,"Evaluates to the average value of a given numerical property across a collection. If any values are ",(0,r.kt)("code",null,"null"),", they are not counted in the result.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"@count")),(0,r.kt)("td",null,"Evaluates to the number of objects in the given collection. This is currently only supported on to-many relationship collections and not on lists of primitives. In order to use ",(0,r.kt)("code",null,"@count"),"on a list of primitives, consider wrapping the primitives in a Realm object.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"@max")),(0,r.kt)("td",null,"Evaluates to the highest value of a given numerical property across a collection.",(0,r.kt)("code",null,"null")," values are ignored.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"@min")),(0,r.kt)("td",null,"Evaluates to the lowest value of a given numerical property across a collection.",(0,r.kt)("code",null,"null")," values are ignored.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"@sum")),(0,r.kt)("td",null,"Evaluates to the sum of a given numerical property across a collection, excluding ",(0,r.kt)("code",null,"null")," values."))),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("p",null,"These examples all query for projects containing tasks that meet\nthis criteria:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projects with average task priority above 5."),(0,r.kt)("li",{parentName:"ul"},"Projects with a task whose priority is less than 5."),(0,r.kt)("li",{parentName:"ul"},"Projects with a task whose priority is greater than 5."),(0,r.kt)("li",{parentName:"ul"},"Projects with more than 5 tasks."),(0,r.kt)("li",{parentName:"ul"},"Projects with long-running tasks.")),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},'  "tasks.@avg.priority > 5"\n\n  "tasks.@max.priority < 5"\n\n  "tasks.@min.priority > 5"\n\n  "tasks.@count > 5"\n\n  "tasks.@sum.progressMinutes > 100"\n'),(0,r.kt)("h3",{id:"collection-operators"},"Collection Operators"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"collection operator")," uses specific rules to determine whether\nto pass each input collection object to the output\ncollection by applying a given predicate to every element of\na given list property of\nthe object."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ALL")),(0,r.kt)("td",null,"Returns objects where the predicate evaluates to ",(0,r.kt)("code",null,"true")," for all objects in the collection.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ANY"),", ",(0,r.kt)("code",null,"SOME")),(0,r.kt)("td",null,"Returns objects where the predicate evaluates to ",(0,r.kt)("code",null,"true")," for any objects in the collection.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"NONE")),(0,r.kt)("td",null,"Returns objects where the predicate evaluates to false for all objects in the collection."))),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("p",null,"We use the query engine's collection operators to find:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projects with no complete tasks."),(0,r.kt)("li",{parentName:"ul"},"Projects with any top priority tasks.")),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},'  "NONE tasks.isComplete == true"\n\n  "ANY tasks.priority == 10"\n'),(0,r.kt)("h3",{id:"sort-distinct-limit"},"Sort, Distinct, Limit"),(0,r.kt)("p",null,"You can use additional operators in your queries to sort and limit the\nresults collection."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"SORT")),(0,r.kt)("td",null,"Specify the name of the property to compare. You can optionally specify ascending (",(0,r.kt)("code",null,"ASC"),") or descending (",(0,r.kt)("code",null,"DESC"),") order. If you specify multiple SORT fields, the query sorts by the first field, and then the second. For example, if you ",(0,r.kt)("code",null,"SORT (priority, name)"),", the query returns sorted by priority, and then by name when priority value is the same.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"DISTINCT")),(0,r.kt)("td",null,"Specify a name of the property to compare. Remove duplicates for that property in the results collection. If you specify multiple DISTINCT fields, the query removes duplicates by the first field, and then the second. For example, if you ",(0,r.kt)("code",null,"DISTINCT (name, assignee)"),", the query only removes duplicates where the values of both properties are the same.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LIMIT")),(0,r.kt)("td",null,"Limit the results collection to the specified number."))),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("p",null,"We use the query engine's sort, distinct, and limit operators to find: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tasks where the assignee is Ali"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sorted by priority in descending order"),(0,r.kt)("li",{parentName:"ul"},"Enforcing uniqueness by name"),(0,r.kt)("li",{parentName:"ul"},"Limiting the results to 5 tasks")))),(0,r.kt)(s.Z,{language:"javascript",mdxType:"CodeBlock"},"\"assignee = 'Ali' SORT(priority DESC) DISTINCT(name) LIMIT(5)\"\n"))}m.isMDXComponent=!0}}]);