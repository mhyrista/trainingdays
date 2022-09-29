(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{329:function(t,e,a){t.exports=a.p+"assets/img/finalArchitecture.46a7e675.png"},330:function(t,e,a){t.exports=a.p+"assets/img/startingpoint01.c5ea4369.png"},331:function(t,e,a){t.exports=a.p+"assets/img/deploytoazure.e0e5d477.png"},332:function(t,e,a){t.exports=a.p+"assets/img/startingpoint02.52c69db3.png"},333:function(t,e,a){t.exports=a.p+"assets/img/lbconfig01.4d6699a0.png"},334:function(t,e,a){t.exports=a.p+"assets/img/lbconfig02.9d3bdae5.png"},335:function(t,e,a){t.exports=a.p+"assets/img/lbconfig03.f76302ff.png"},336:function(t,e,a){t.exports=a.p+"assets/img/lbresult1.7db2edf5.png"},337:function(t,e,a){t.exports=a.p+"assets/img/lbresult2.4be32af5.png"},730:function(t,e,a){"use strict";a.r(e);var r=a(10),o=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"challenge-6-networking-load-balancing-your-www-server-farm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenge-6-networking-load-balancing-your-www-server-farm"}},[t._v("#")]),t._v(" Challenge 6: Networking - Load balancing your WWW Server Farm")]),t._v(" "),e("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),e("ul",[e("li",[t._v("How to load balance http traffic to 2 webserver VMs")]),t._v(" "),e("li",[t._v("Create an external load balancer using the Azure portal")]),t._v(" "),e("li",[t._v("Learn to know the requirements for an Azure external load balancer and how to configure it.")])]),t._v(" "),e("p",[t._v("Our final architecture should look like this:\n"),e("img",{attrs:{src:a(329),alt:"Final architecture"}})]),t._v(" "),e("p",[t._v("At first you will deploy the "),e("em",[t._v("start environment")]),t._v(" and then you will add the external "),e("em",[t._v("load balancer")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#deploy-the-starting-point"}},[t._v("Deploy the Starting Point")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#deploy-the-load-balancer"}},[t._v("Deploy the Load Balancer")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#test-server-outage-optional"}},[t._v("Test server outage (optional)")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#cleanup"}},[t._v("Cleanup")])])]),t._v(" "),e("h2",{attrs:{id:"deploy-the-starting-point"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-starting-point"}},[t._v("#")]),t._v(" Deploy the Starting Point")]),t._v(" "),e("p",[t._v("In this directory there is an ARM-template which includes 2 web server VMs and its requirements (networking, disks,...):")]),t._v(" "),e("p",[e("img",{attrs:{src:a(330),alt:"'Starting Point' Architecture"}})]),t._v(" "),e("p",[t._v("Deploy this scenario into your subscription by "),e("strong",[t._v("clicking")]),t._v(" on the "),e("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-06%2Fchallengestart%2Fchallengestart.json"}},[e("img",{attrs:{src:a(331)}})]),t._v("\nbutton.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("Resource group")])]),t._v(" "),e("td",[e("strong",[t._v("(new)")]),t._v(" rg-lbwww")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Location")])]),t._v(" "),e("td",[t._v("West Europe")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Admin user")])]),t._v(" "),e("td",[t._v("demouser")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Admin password")])]),t._v(" "),e("td",[t._v("%some complex value%")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Vm Size")])]),t._v(" "),e("td",[t._v("Standard_B2s  or try e.g. Standard_F2s_v2")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Disk Sku")])]),t._v(" "),e("td",[t._v("StandardSSD_LRS")])])])]),t._v(" "),e("p",[t._v("The result should look similar to this:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(332),alt:"Deployment result"}})]),t._v(" "),e("h2",{attrs:{id:"deploy-the-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-load-balancer"}},[t._v("#")]),t._v(" Deploy the Load Balancer")]),t._v(" "),e("p",[t._v("Now let's add an external Azure load balancer in front of the two parallel web server machines.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Azure Portal] \n-> '+' Add \n-> Search the marketplace for 'Load balancer'\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("em",[t._v("Resource group")])]),t._v(" "),e("td",[t._v("rg-lbwww")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Name")])]),t._v(" "),e("td",[t._v("lb-wwwfarm")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Region")])]),t._v(" "),e("td",[t._v("West Europe")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Type")])]),t._v(" "),e("td",[t._v("Public")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("SKU")])]),t._v(" "),e("td",[t._v("Basic")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Public IP address")])]),t._v(" "),e("td",[t._v("%Use existing%")])]),t._v(" "),e("tr",[e("td",[e("em",[t._v("Choose public IP address")])]),t._v(" "),e("td",[t._v("pip-wwwfarm")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("📝To get your load balancer working you need to configure the following:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("A "),e("em",[t._v("backend pool")]),t._v(" that contains the endpoints i.e. the VMs to which the traffic will be routed.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(333),alt:"backend pool"}})])]),t._v(" "),e("li",[e("p",[t._v("A "),e("em",[t._v("health probe")]),t._v(" for TCP port 80 (http) to check if the endpoints are 'responsive' to web requests")]),t._v(" "),e("p",[e("img",{attrs:{src:a(334),alt:"health probe"}})])]),t._v(" "),e("li",[e("p",[t._v("A "),e("em",[t._v("lb rule")]),t._v(" to forward incoming traffic (TCP port 80) on lb's frontend IP address to backend pool (TCP port 80)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(335),alt:"lb rule"}})])])])]),t._v(" "),e("p",[t._v("To check if your lb is working do a HTTP request to the endpoint "),e("code",[t._v("http://%PIP of your lb%")]),t._v(". Depending which endpoint serves your request the result should look like:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(336),alt:"lbresult1"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(337),alt:"lbresult2"}})]),t._v(" "),e("h2",{attrs:{id:"test-server-outage-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-server-outage-optional"}},[t._v("#")]),t._v(" Test server outage (optional)")]),t._v(" "),e("ol",[e("li",[t._v("Stop one VM and verify if the webpage is still served.")]),t._v(" "),e("li",[t._v("Restart the VM and check if the lb notices it and re-balances load.")])]),t._v(" "),e("h2",{attrs:{id:"cleanup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[t._v("#")]),t._v(" Cleanup")]),t._v(" "),e("p",[t._v("Delete the resource group "),e("code",[t._v("rg-lbwww")]),t._v(".")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/day1/challenge-05/"}},[t._v("◀ Previous challenge")]),t._v(" | "),e("RouterLink",{attrs:{to:"/day1/"}},[t._v("🔼 Day 1")]),t._v(" | "),e("RouterLink",{attrs:{to:"/day1/challenge-07/"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);