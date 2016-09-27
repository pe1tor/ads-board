!function(){"use strict";angular.module("angularRails",["ngAnimate","ngCookies","ngTouch","ngSanitize","selectize","ngMessages","ngAria","ngResource","satellizer","ui.router","ui.bootstrap","toastr","rails","ng-token-auth"])}(),function(){"use strict";function e(){function e(e,a,t,i){}e.$inject=["$scope","$rootScope","$auth","CurrentUser"];var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("angularRails").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(e,a,t,i,n,l){e.Config={create:!0,valueField:"id",labelField:"name",delimiter:"|",placeholder:"Pick something",onInitialize:function(e){l.query().then(function(a){a.forEach(function(a){e.addOption(a)}),n.get(i.id).then(function(a){a.categories.forEach(function(a){e.addItem(a.id)})})})}}}e.$inject=["$scope","$rootScope","$auth","$stateParams","Ad","Category"];var a={restrict:"E",templateUrl:"app/components/categorySelectize/categorySelectize.html",scope:{},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("angularRails").directive("categorySelectize",e)}(),function(){"use strict";angular.module("angularRails").controller("UsersController",["$rootScope","$scope","$state","$stateParams","$auth","$location",function(e,a,t,i,n,l){a.submitRegistration=function(e){n.submitRegistration(e)},e.$on("auth:registration-email-success",function(e,a){l.path("/ads")}),e.$on("auth:registration-email-error",function(e,a){alert("Registration failed: "+a.errors.full_messages[0])})}])}(),function(){"use strict";angular.module("angularRails").controller("AdsShowController",["$rootScope","$scope","$state","$stateParams","$auth","$location","Ad",function(e,a,t,i,n,l,r){var o=function(){r.get(i.id).then(function(e){a.ad=e})["catch"](function(){l.path("/ads")})};o()}])}(),function(){"use strict";angular.module("angularRails").controller("AdsNewController",["$rootScope","$scope","$state","$stateParams","$auth","$location","Ad","CurrentUser",function(e,a,t,i,n,l,r,o){a["new"]=function(){a.Ad=new r,a.title&&""!==a.title&&a.body&&""!==a.body&&a.price&&""!==a.price&&(a.Ad.title=a.title,a.Ad.body=a.body,a.Ad.price=a.price,a.Ad.user_id=n.user.id,a.Ad.category_attributes=void 0===a.$$childHead.categories?"":a.$$childHead.categories.map(Number),a.Ad.save().then(function(){l.path("/ads/my_ads")})["catch"](function(){alert("Operation failed")}),l.path("/ads"))}}])}(),function(){"use strict";angular.module("angularRails").controller("AdsIndexController",["$rootScope","$scope","$state","$stateParams","$auth","$location","Ad",function(e,a,t,i,n,l,r){var o=function(){r.query().then(function(e){a.ads=e})};a.authenticate=function(e){n.authenticate(e)},a.submitLogin=function(e){n.submitLogin(e)},o()}])}(),function(){"use strict";angular.module("angularRails").controller("AdsEditController",["$rootScope","$scope","$state","$stateParams","$auth","$location","CurrentUser","Ad",function(e,a,t,i,n,l,r,o){a.update=function(){a.editAdForm.$valid&&o.get(i.id).then(function(e){e.title=a.ad.title,e.body=a.ad.body,e.price=a.ad.price,e.category_attributes=void 0===a.$$childHead.categories?"":a.$$childHead.categories.map(Number),e.save().then(function(){l.path("/ads/my_ads")})["catch"](function(){alert("Operation failed")})})};var s=function(){o.get(i.id).then(function(t){r.query().then(function(i){i.id===t.user.id?a.ad=t:(e.message="You haven't rights for this operation",l.path("/ads"))})})};s()}])}(),function(){"use strict";angular.module("angularRails").controller("AdsDeleteController",["$rootScope","$scope","$state","$stateParams","$auth","$location","Ad","CurrentUser",function(e,a,t,i,n,l,r,o){a.delete_ad=function(e){confirm("Are you sure you want to delete this ad?")&&r.get(e).then(function(e){o.query().then(function(t){t.id===e.user.id&&e["delete"]().then(function(){a.ads=r.query(),l.path("/ads")})})})}}])}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("angularRails").run(e)}(),function(){"use strict";function e(e,a){e.state("ads",{url:"/ads",templateUrl:"app/ads/index.html",controller:"AdsIndexController"}).state("ads.new",{url:"/new",views:{"@":{templateUrl:"app/ads/new.html"}},resolve:{check:["$location","CurrentUser",function(e,a){a.query().then(function(a){a||e.path("/ads")})}]},controller:"AdsNewController"}).state("ads.show",{url:"/{id:[0-9]+}",views:{"@":{templateUrl:"app/ads/show.html"}},controller:"AdsShowController"}).state("ads.my_ads",{url:"/my_ads",views:{"@":{templateUrl:"app/ads/my_ads.html"}},resolve:{check:["$location","CurrentUser",function(e,a){a.query().then(function(a){a||e.path("/ads")})}]},controller:"AdsIndexController"}).state("ads.edit",{url:"/{id:[0-9]+}/edit",views:{"@":{templateUrl:"app/ads/edit.html"}},resolve:{check:["$location","CurrentUser",function(e,a){a.query().then(function(a){a||e.path("/ads")})}]},controller:"AdsEditController"}).state("users",{url:"/sign_up",templateUrl:"app/users/signUp.html",controller:"UsersController",controllerAs:"users"}),a.otherwise("/ads")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angularRails").config(e).factory("Ad",["railsResourceFactory",function(e){return e({url:"/api/ads",name:"ad",update:{method:"PUT"}})}]).factory("Category",["railsResourceFactory",function(e){return e({url:"/api/categories",name:"category"})}]).factory("CurrentUser",["railsResourceFactory",function(e){return e({url:"/api/get_current_user",name:"current_user"})}])}(),function(){"use strict";angular.module("angularRails")}(),function(){"use strict";function e(e,a,t){e.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0,t.configure({apiUrl:"http://localhost:3000/api",storage:"cookies",facebook:{clientId:"1102903999763763",name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:window.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}}})}e.$inject=["$logProvider","toastrConfig","$authProvider"],angular.module("angularRails").config(e)}(),angular.module("angularRails").run(["$templateCache",function(e){e.put("app/ads/edit.html",'<div class=container><!-- navbar component --><div><acme-navbar></acme-navbar></div><div class="panel panel-default"><div class=panel-heading>Edit advertisement</div><div class=panel-body><div class=col-lg-6><form name=editAdForm novalidate ng-controller=AdsEditController ng-submit=update()><label>Title</label><input type=text name=Title placeholder="Enter Title" ng-model=ad.title class=form-control required><br><label>Content</label><textarea name=Body placeholder=Content ng-model=ad.body class=form-control required></textarea><br><label>Price</label><input type=text name=Price placeholder="Enter Price" ng-model=ad.price class=form-control required><br><label>Pick categories</label><div><category-selectize></category-selectize></div><br><input type=submit class="btn btn-primary" value=Update ng-disabled=editAdForm.$invalid></form></div></div></div></div>'),e.put("app/ads/index.html",'<div class=container><!-- navbar component --><div><acme-navbar></acme-navbar></div><div class="panel panel-default"><div class=panel-heading>Current Ads</div><div class=panel-body><form ng-submit=submitLogin(loginForm) role=form ng-init="loginForm = {}" ng-if=!user.signedIn><div class=col-lg-3><input type=email class=form-control id=email ng-model=loginForm.email placeholder=Email></div><div class=col-lg-3><input type=password class=form-control id=password ng-model=loginForm.password placeholder=Password></div><button type=submit class="btn btn-default">Sign In</button> <a href=#/sign_up ng-if=!user.signedIn>Sign Up</a></form><div ng-if=!user.signedIn class=col-lg-12><a ng-click="authenticate(\'facebook\')">Sign in with Facebook</a></div><br><p ng-if=user.signedIn>Hi, {{ user.email }}</p><button class="btn btn-default" ng-click=signOut() ng-if=user.signedIn>Sign out</button><br><div class="alert alert-warning" ng-if=!user.signedIn>Please, sign in for adding your advertisement</div><br><div class="alert alert-warning" ng-if=message>{{message}}</div><div id=postlist ng-repeat="ad in ads"><div class=panel><div class=panel-heading><div class=text-center><div class=row><div class=col-sm-9><h3 class=pull-left>{{ ad.title }}</h3></div><div class=col-sm-9><i class=pull-left ng-repeat="category in ad.categories">{{category.name}}{{$last ? \'\' : \', \'}}</i></div><div class=col-sm-3><h4 class=pull-right><small><em>{{ ad.user.email }} at {{ ad.createdAt.slice(0,10) }}<br>{{ ad.createdAt.slice(11,16) }}</em></small></h4></div></div></div></div><div class=panel-body>{{ ad.body.slice(0,100) }}... <a href=#/ads/{{ad.id}}>Read more</a></div></div></div></div></div></div>'),e.put("app/ads/my_ads.html",'<div class=container ng-controller=AdsIndexController><!-- navbar component --><div><acme-navbar></acme-navbar></div><div class="panel panel-default"><div class=panel-heading>Your ads</div><div class=panel-body><p ng-if=user.signedIn>Hi, {{ user.email }}</p><button class="btn btn-default" ng-click=signOut() ng-if=user.signedIn>Sign out</button><br><div class="alert alert-warning" ng-if=!user.signedIn>Please, sign in for adding your advertisement</div><div id=postlist ng-repeat="ad in ads" ng-if="ad.user.id == user.id"><div class=panel><div class=panel-heading><div class=text-center><div class=row><div class=col-sm-9><h3 class=pull-left>{{ ad.title }}</h3></div><div class=col-sm-9><i class=pull-left ng-repeat="category in ad.categories">{{category.name}}{{$last ? \'\' : \', \'}}</i></div><div class=col-sm-3><h4 class=pull-right><small><em>Created At {{ ad.createdAt.slice(0,10) }}<br>{{ ad.createdAt.slice(11,16) }}</em></small></h4><br><br><br><p class=pull-right><a href=#/ads/{{ad.id}}/edit class="btn btn-sm btn-default">Edit</a> <a ng-click=delete_ad(ad.id) ng-controller=AdsDeleteController class="btn btn-sm btn-danger">Delete</a></p></div></div></div></div><div class=panel-body>{{ ad.body.slice(0,100) }}... <a href=#/ads/{{ad.id}}>Read more</a></div></div></div></div></div></div>'),e.put("app/ads/new.html",'<div class=container xmlns=http://www.w3.org/1999/html><!-- navbar component --><div><acme-navbar></acme-navbar></div><div class="panel panel-default"><div class=panel-heading>Create advertisement</div><div class=panel-body><div class=col-lg-6><form name=newAdForm novalidate ng-controller=AdsNewController ng-submit=new()><label>Title</label><input type=text name=Title placeholder="Enter Title" ng-model=title class=form-control required><br><label>Content</label><textarea name=Body placeholder=Content ng-model=body class=form-control required></textarea><br><label>Price</label><input type=text name=Price placeholder="Enter Price" ng-model=price class=form-control required><br><label>Pick categories</label><div><category-selectize></category-selectize></div><br><input type=submit class="btn btn-primary" value=Create ng-disabled=newAdForm.$invalid></form></div></div></div></div>'),e.put("app/ads/show.html","<div ng-controller=AdsShowController class=container xmlns=http://www.w3.org/1999/html><!-- navbar component --><div><acme-navbar></acme-navbar></div><div class=\"panel panel-default\"><div class=panel-heading><b>{{ad.title}}</b><b> by {{ad.user.email}}</b></div><div class=panel-body><div class=col-lg-6><p>{{ad.body}}</p><br><label>Price:</label><p>{{ad.price}}</p><label>Categories:</label><br><i ng-repeat=\"category in ad.categories\">{{category.name}}{{$last ? '' : ', '}}</i><br><br><label>Status:</label><p>{{ad.status}}</p><br><label>Created At:</label><p>{{ ad.createdAt.slice(0,10) }} {{ ad.createdAt.slice(11,16) }}</p><br><label>Last Updated:</label><p>{{ ad.updatedAt.slice(0,10) }} {{ ad.updatedAt.slice(11,16) }}</p><br><a href=#/ads>Back...</a></div></div></div></div>"),e.put("app/users/signUp.html",'<div class=container><!-- navbar component --><div><acme-navbar></acme-navbar></div><div class="panel panel-default"><div class=panel-heading>Sign Up</div><div class=panel-body><div class=col-lg-6><form ng-submit=submitRegistration(registrationForm) role=form ng-init="registrationForm = {}"><div class=form-group><label>E-mail</label><input type=email name=email ng-model=registrationForm.email required class=form-control></div><div class=form-group><label>Password</label><input type=password name=password ng-model=registrationForm.password required class=form-control></div><div class=form-group><label>Password Confirmation</label><input type=password name=password_confirmation ng-model=registrationForm.password_confirmation required class=form-control></div><button type=submit class="btn btn-default">Register</button></form></div></div></div></div>'),e.put("app/components/categorySelectize/categorySelectize.html","<selectize config=Config options=Options items=Items ng-model=categories></selectize>"),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand ng-href=#/ads><span class="glyphicon glyphicon-home"></span> Ads Board</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav col-lg-3"><li><a href=#/ads/my_ads>My Ads</a></li><li><a ng-href=#/ads/new class="glyphicon glyphicon-plus"></a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-1485c25390.js.map
