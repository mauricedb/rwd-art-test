webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-light navbar-toggleable-md bg-faded\">\r\n    <button aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler navbar-toggler-right\"\r\n      type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"navbarCollapsed = true\">Rowood</a>\r\n\r\n    <div class=\"navbar-collapse collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\" (click)=\"navbarCollapsed = true\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"!isLoggedin\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLoggedin\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_company_service__ = __webpack_require__("../../../../../src/app/utils/company.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(companyService) {
        this.companyService = companyService;
        this.title = "app";
        this.navbarCollapsed = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.companyService.fetchCompanyId().subscribe(function () { });
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedin", {
        get: function () {
            return !!localStorage.access_token;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_company_service__["a" /* CompanyService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_company_service__ = __webpack_require__("../../../../../src/app/utils/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_group_article_group_service__ = __webpack_require__("../../../../../src/app/article-group/article-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__article_article_service__ = __webpack_require__("../../../../../src/app/article/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__packing_packing_service__ = __webpack_require__("../../../../../src/app/packing/packing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__history_history_service__ = __webpack_require__("../../../../../src/app/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__article_groups_article_groups_component__ = __webpack_require__("../../../../../src/app/article-groups/article-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__article_group_article_group_component__ = __webpack_require__("../../../../../src/app/article-group/article-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__packing_packing_component__ = __webpack_require__("../../../../../src/app/packing/packing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__history_purchases_purchases_component__ = __webpack_require__("../../../../../src/app/history/purchases/purchases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__history_sales_sales_component__ = __webpack_require__("../../../../../src/app/history/sales/sales.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__["a" /* LoginPageComponent */]
    },
    {
        path: "ag/:agCode",
        component: __WEBPACK_IMPORTED_MODULE_13__article_group_article_group_component__["a" /* ArticleGroupComponent */]
    },
    {
        path: "art/:artCode",
        component: __WEBPACK_IMPORTED_MODULE_14__article_article_component__["a" /* ArticleFromRouteComponent */]
    },
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_12__article_groups_article_groups_component__["a" /* ArticleGroupsComponent */]
    }
];
if (!localStorage.access_token) {
    routes.push({
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__article_groups_article_groups_component__["a" /* ArticleGroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__article_group_article_group_component__["a" /* ArticleGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__article_article_component__["b" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__article_article_component__["a" /* ArticleFromRouteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__packing_packing_component__["a" /* PackingComponent */],
            __WEBPACK_IMPORTED_MODULE_16__history_purchases_purchases_component__["a" /* PurchasesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__history_sales_sales_component__["a" /* SalesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__utils_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_8__article_group_article_group_service__["a" /* ArticleGroupService */],
            __WEBPACK_IMPORTED_MODULE_9__article_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_10__packing_packing_service__["a" /* PackingService */],
            __WEBPACK_IMPORTED_MODULE_11__history_history_service__["a" /* HistoryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article-group/article-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".art-code, .cost-px, .qty-free {\r\n  margin: 3px;\r\n}\r\n\r\n.art-code {\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  text-overflow: ellipsis;\r\n  -webkit-box-flex: 4;\r\n      -ms-flex: 4 4 0px;\r\n          flex: 4 4 0;\r\n}\r\n\r\n.cost-px {\r\n  text-align: right;\r\n  -webkit-box-flex: 2;\r\n      -ms-flex: 2 2 0px;\r\n          flex: 2 2 0;\r\n}\r\n\r\n.qty-free {\r\n  text-align: right;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 0px;\r\n          flex: 1 1 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-group/article-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"list-group-item\" *ngFor=\"let article of articles | async\" (click)=\"openArticle(article)\">\r\n    <span class=\"art-code\">{{article.artCode}}</span>\r\n    <span class=\"cost-px\">{{article.costPx | currency:'EUR':true}}</span>\r\n\r\n    <span class=\"qty-free\">\r\n      <span class=\"badge badge-default badge-pill\">{{article.qtyFree2}}</span>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/article-group/article-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article_service__ = __webpack_require__("../../../../../src/app/article/article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleGroupComponent = (function () {
    function ArticleGroupComponent(activatedRoute, articleService, router) {
        this.activatedRoute = activatedRoute;
        this.articleService = articleService;
        this.router = router;
    }
    ArticleGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articles = this.activatedRoute.params
            .map(function (params) { return params.agCode; })
            .switchMap(function (agCode) { return _this.articleService.getArticles(agCode); });
    };
    ArticleGroupComponent.prototype.openArticle = function (article) {
        this.router.navigate(["/art/", article.artCode]);
    };
    return ArticleGroupComponent;
}());
ArticleGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "app-article-group",
        template: __webpack_require__("../../../../../src/app/article-group/article-group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-group/article-group.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__article_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_article_service__["a" /* ArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ArticleGroupComponent);

var _a, _b, _c;
//# sourceMappingURL=article-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/article-group/article-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring__ = __webpack_require__("../../../../querystring-es3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs.operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("../../../../../src/app/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__article_article_service__ = __webpack_require__("../../../../../src/app/article/article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleGroupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var avHost = "https://AccountView.net/api/v3";
var ArticleGroupService = (function () {
    function ArticleGroupService(http, articleService) {
        this.http = http;
        this.articleService = articleService;
        this.allGroups$ = null;
    }
    ArticleGroupService.prototype.getAllGroups = function () {
        var _this = this;
        if (!this.allGroups$) {
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]();
            options.headers.append("authorization", localStorage.token_type + " " + localStorage.access_token);
            options.headers.append("x-company", localStorage.company_id);
            this.allGroups$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of("")
                .map(function (filter) {
                return Object.assign({}, {
                    businessObject: "AG1",
                    SortFields: ["ag_desc"].join(","),
                    pageSize: 1000,
                    fields: ["ag_code", "ag_desc"].join(",")
                });
            })
                .map(function (query) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_querystring__["stringify"])(query); })
                .map(function (query) { return avHost + "/AccountViewData?" + query; })
                .switchMap(function (url) { return _this.http.get(url, options); })
                .map(function (rsp) { return rsp.json(); })
                .map(function (data) { return data.ART_GRP; })
                .map(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* formatProperties */])(data); })
                .map(function (data) {
                return data.map(function (group) { return Object.assign(group, { qtyTech: 0, qtyBestel: 0 }); });
            })
                .catch(function (err) {
                console.warn(err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
            })
                .publishReplay(1)
                .refCount()
                .combineLatest(this.articleService.getAllArticles(), function (groups, articles) {
                groups.forEach(function (grp) {
                    grp.qtyTech = articles.filter(function (art) { return art.agCode === grp.agCode && art.qtyTech; }).length;
                    grp.qtyBestel = articles.filter(function (art) { return art.agCode === grp.agCode && art.qtyBestel; }).length;
                });
                return groups.filter(function (grp) { return grp.qtyTech || grp.qtyBestel; });
            })
                .do(console.table);
        }
        return this.allGroups$;
    };
    ArticleGroupService.prototype.getGroups = function () {
        return this.getAllGroups();
    };
    return ArticleGroupService;
}());
ArticleGroupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__article_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__article_article_service__["a" /* ArticleService */]) === "function" && _b || Object])
], ArticleGroupService);

var _a, _b;
//# sourceMappingURL=article-group.service.js.map

/***/ }),

/***/ "../../../../../src/app/article-groups/article-groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-groups/article-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"list-group-item\" *ngFor=\"let group of articleGroups | async\" (click)=\"openGroup(group)\">\r\n      {{group.agDesc}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/article-groups/article-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_group_article_group_service__ = __webpack_require__("../../../../../src/app/article-group/article-group.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleGroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleGroupsComponent = (function () {
    function ArticleGroupsComponent(articleGroupService, router) {
        this.articleGroupService = articleGroupService;
        this.router = router;
    }
    ArticleGroupsComponent.prototype.ngOnInit = function () {
        this.articleGroups = this.articleGroupService.getGroups();
    };
    ArticleGroupsComponent.prototype.openGroup = function (group) {
        this.router.navigate(["/ag/", group.agCode]);
    };
    return ArticleGroupsComponent;
}());
ArticleGroupsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "app-article-groups",
        template: __webpack_require__("../../../../../src/app/article-groups/article-groups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-groups/article-groups.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_group_article_group_service__["a" /* ArticleGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_group_article_group_service__["a" /* ArticleGroupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ArticleGroupsComponent);

var _a, _b;
//# sourceMappingURL=article-groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\">\r\n    <div class=\"form-group justify-content-between\">\r\n      <span>{{ article.artCode }}</span>\r\n      <span>{{ article.costPx | currency:'EUR':true }}</span>\r\n      <span class=\"badge badge-default badge-pill\">{{article.qtyFree2}}</span>\r\n  </div>\r\n  <div style=\"display:none;\">\r\n    <div class=\"form-group\">\r\n      <label>Artikel group</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.agCode}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Omschrijving</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.artDesc1}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Last Costpx</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.lCostpx}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Best. Costpx</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.bCostpx}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Staffelprijs</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.k1Qdpx}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Tech</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.qtyTech}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Besteld</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.qtyBestel}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label> #vor.mnd</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.k1Qtypm}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>#laatste jaar</label>\r\n      <div class=\"input-group\">\r\n        <span class=\"form-control\">\r\n          {{article.k1Qtypy}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-packing [artCode]=\"article.artCode\"></app-packing>\r\n  <!--<app-purchases [artCode]=\"article.artCode\"></app-purchases>-->\r\n  <app-sales [artCode]=\"article.artCode\"></app-sales>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service__ = __webpack_require__("../../../../../src/app/article/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article__ = __webpack_require__("../../../../../src/app/article/article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__article__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArticleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleFromRouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    return ArticleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__article__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__article__["Article"]) === "function" && _a || Object)
], ArticleComponent.prototype, "article", void 0);
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__("../../../../../src/app/article/article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArticleComponent);

var ArticleFromRouteComponent = (function () {
    function ArticleFromRouteComponent(activatedRoute, articleService) {
        this.activatedRoute = activatedRoute;
        this.articleService = articleService;
    }
    ArticleFromRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article = this.activatedRoute.params
            .map(function (params) { return params.artCode; })
            .switchMap(function (artCode) { return _this.articleService.getArticle(artCode); });
    };
    return ArticleFromRouteComponent;
}());
ArticleFromRouteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: '<app-article [article]="article | async"></app-article>',
        styles: [__webpack_require__("../../../../../src/app/article/article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */]) === "function" && _c || Object])
], ArticleFromRouteComponent);

var _a, _b, _c;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring__ = __webpack_require__("../../../../querystring-es3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs.operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("../../../../../src/app/utils/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var avHost = "https://AccountView.net/api/v3";
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.allArticles$ = null;
    }
    ArticleService.prototype.getAllArticles = function () {
        var _this = this;
        if (!this.allArticles$) {
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]();
            options.headers.append("authorization", localStorage.token_type + " " + localStorage.access_token);
            options.headers.append("x-company", localStorage.company_id);
            this.allArticles$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(0)
                .map(function () { return [
                {
                    controlSource: "article.qty_tech",
                    operator: "notequal",
                    valueType: "N",
                    value: 0
                },
                {
                    controlSource: "article.qty_bestel",
                    operator: "notequal",
                    valueType: "N",
                    value: 0
                }
            ]; })
                .map(function (filter) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* filterArrToObject */])(filter); })
                .map(function (filter) {
                return Object.assign({}, {
                    businessObject: "AK1",
                    pageSize: 1000,
                    matchAnyFilter: true,
                    fields: [
                        "art_code",
                        "ag_code",
                        "art_desc1",
                        "qty_free2",
                        "cost_px",
                        "l_costpx",
                        "b_costpx",
                        "k1_qdpx",
                        "qty_tech",
                        "qty_bestel",
                        "k1_qtypm",
                        "k1_qtypy"
                    ].join(",")
                }, filter);
            })
                .map(function (query) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_querystring__["stringify"])(query); })
                .map(function (query) { return avHost + "/AccountViewData?" + query; })
                .switchMap(function (url) { return _this.http.get(url, options); })
                .map(function (rsp) { return rsp.json(); })
                .map(function (data) { return data.ARTICLE; })
                .map(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* formatProperties */])(data); })
                .publishReplay(1)
                .refCount();
        }
        return this.allArticles$;
    };
    ArticleService.prototype.getArticles = function (agCode) {
        return this.getAllArticles()
            .map(function (data) { return data.filter(function (art) { return art.agCode === agCode; }); })
            .catch(function (err) {
            console.warn(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        })
            .do(console.table);
    };
    ArticleService.prototype.getArticle = function (artCode) {
        return this.getAllArticles()
            .mergeMap(function (e) { return e; })
            .filter(function (art) { return art.artCode === artCode; })
            .catch(function (err) {
            console.warn(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        })
            .do(console.log);
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ArticleService);

var _a;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ "../../../../../src/app/article/article.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=article.js.map

/***/ }),

/***/ "../../../../../src/app/history/history-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryType; });
var HistoryType;
(function (HistoryType) {
    HistoryType[HistoryType["Purchase"] = 2] = "Purchase";
    HistoryType[HistoryType["Sales"] = 1] = "Sales";
})(HistoryType || (HistoryType = {}));
//# sourceMappingURL=history-type.js.map

/***/ }),

/***/ "../../../../../src/app/history/history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring__ = __webpack_require__("../../../../querystring-es3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs.operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_type__ = __webpack_require__("../../../../../src/app/history/history-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("../../../../../src/app/utils/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var avHost = "https://AccountView.net/api/v3";
var HistoryService = (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.getPurchases = function (artCode) {
        return this.getHistory(artCode, __WEBPACK_IMPORTED_MODULE_5__history_type__["a" /* HistoryType */].Purchase);
    };
    HistoryService.prototype.getSales = function (artCode) {
        return this.getHistory(artCode, __WEBPACK_IMPORTED_MODULE_5__history_type__["a" /* HistoryType */].Sales);
    };
    HistoryService.prototype.getHistory = function (artCode, historyType) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]();
        options.headers.append("authorization", localStorage.token_type + " " + localStorage.access_token);
        options.headers.append("x-company", localStorage.company_id);
        return (__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(artCode)
            .map(function (artCode) { return [
            {
                controlSource: "art_code",
                value: artCode
            },
            {
                controlSource: "hst_ah.hdr_type",
                valueType: "N",
                value: historyType
            }
        ]; })
            .map(function (filter) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* filterArrToObject */])(filter); })
            .map(function (filter) {
            return Object.assign({}, {
                businessObject: "ALH",
                pageSize: 20,
                SortFields: "hst_ah.del_date",
                SortOrder: "descending",
                fields: [
                    // "hst_al.rec_id",
                    // "hst_ah.hdr_type",
                    // "hst_ah.rpl_inv",
                    "hst_ah.dc_name",
                    // "hst_ah.inv_date",
                    "hst_ah.del_date",
                    // "hst_al.art_code",
                    "hst_ah.ship_mth",
                    "hst_al.unit_px",
                    "hst_al.art_unit",
                    "hst_al.pack_qty",
                    "hst_al.pack_cont",
                    "hst_al.k1_saw",
                    "hst_al.k1_marge",
                    "hst_al.eutr_lev",
                    "hst_al.cost_px",
                    "hst_al.l_costpx",
                    // "hst_ah.po_dlb",
                    "hst_al.direct_px",
                    // "hst_al.vsrc_code",
                    "hst_al.vpack_qty",
                    "hst_ah.vdisc_desc",
                    "hst_ah.ship_cost",
                    "hst_ah.ord_cost",
                    "hst_ah.comment1",
                    "hst_ah.comment2",
                    "hst_ah.del_addr"
                ].join(",")
            }, filter);
        })
            .map(function (query) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_querystring__["stringify"])(query); })
            .map(function (query) { return avHost + "/AccountViewData?" + query; })
            .switchMap(function (url) { return _this.http.get(url, options); })
            .map(function (rsp) { return rsp.json(); })
            .map(function (data) { return data.HST_AL; })
            .map(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* formatProperties */])(data); })
            .catch(function (err) {
            console.warn(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        })
            .do(console.table));
    };
    return HistoryService;
}());
HistoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HistoryService);

var _a;
//# sourceMappingURL=history.service.js.map

/***/ }),

/***/ "../../../../../src/app/history/purchases/purchases.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/purchases/purchases.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Inkoop</h3>\r\n\r\n<ul>\r\n  <li *ngFor=\"let purchase of purchases | async\">\r\n    <div>\r\n      <span>{{ purchase.hstAhDcName }}</span>\r\n      <span>({{ purchase.hstAhShipMth }})</span>\r\n      <span>€ {{ purchase.lCostpx }}</span>\r\n      <span>{{ purchase.artUnit }}</span>\r\n      <span>{{ purchase.hstAhDelDate }}</span>\r\n    </div>\r\n    <div>\r\n      <div>Aantal pakken {{ purchase.vpackQty }}</div>\r\n      <div>Pakinhoud {{ purchase.packCont }}</div>\r\n      <div>Inkoopsprijs en eenheid € {{ purchase.unitPx }}/{{ purchase.artUnit }}</div>\r\n      <div>Directe levering {{ purchase.directPx }}</div>\r\n      <div>Betalingsconditie {{ purchase.hstAhVdiscDesc }}</div>\r\n      <div>Vervoerskosten € {{ purchase.hstAhShipCost }}</div>\r\n      <div>Orderkosten  € {{ purchase.hstAhOrdCost }}</div>\r\n      <div>Omschrijving order {{ purchase.hstAhComment1 }}</div>\r\n      <div>Afleverdebiteur {{ purchase.hstAhDelAddr }}</div>\r\n    </div>\r\n    \r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/history/purchases/purchases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_service__ = __webpack_require__("../../../../../src/app/history/history.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PurchasesComponent = (function () {
    function PurchasesComponent(historyService) {
        this.historyService = historyService;
    }
    PurchasesComponent.prototype.ngOnInit = function () {
        this.purchases = this.historyService.getPurchases(this.artCode);
    };
    return PurchasesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PurchasesComponent.prototype, "artCode", void 0);
PurchasesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "app-purchases",
        template: __webpack_require__("../../../../../src/app/history/purchases/purchases.component.html"),
        styles: [__webpack_require__("../../../../../src/app/history/purchases/purchases.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */]) === "function" && _a || Object])
], PurchasesComponent);

var _a;
//# sourceMappingURL=purchases.component.js.map

/***/ }),

/***/ "../../../../../src/app/history/sales/sales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Verkoop</h3>\r\n\r\n<div class=\"list-group\">\r\n  <div class=\"list-group-item xjustify-content-between\" *ngFor=\"let sale of sales | async\">\r\n    <div class=\"justify-content-between\">\r\n      <span>{{ sale.hstAhDcName }}</span>\r\n      <span>({{ sale.hstAhShipMth }})</span>\r\n<!--<br/>-->\r\n</div>\r\n    <div class=\"justify-content-between\">\r\n      <span>{{ sale.unitPx | currency:'EUR':true }}</span>\r\n      <span class=\"float-right\">{{ sale.hstAhDelDate | date:shortDate }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ul>\r\n  <li *ngFor=\"let sale of sales | async\">\r\n    <div style=\"display:none;\">\r\n      <div>Aantal pakken {{ sale.vpackQty }}</div>\r\n      <div>Pakinhoud {{ sale.packCont }}</div>\r\n      <div>Zagen {{ sale.k1Saw }}</div>\r\n      <div>Marge netto verkoop% {{ sale.k1Marge }}</div>\r\n      <div>Gem. kostprijs {{ sale.costPx }}</div>\r\n      <div>Directe levering {{ sale.directPx }}</div>\r\n      <div>Leverancier code: {{ sale.eutrLev }}</div>\r\n      <div>Betalingsconditie {{ sale.hstAhVdiscDesc }}</div>\r\n      <div>Vervoerskosten € {{ sale.hstAhShipCost }}</div>\r\n      <div>Orderkosten € {{ sale.hstAhOrdCost }}</div>\r\n      <div>Omschrijving order {{ sale.hstAhComment1 }}</div>\r\n      <div>Afleverdebiteur {{ sale.hstAhDelAddr }}</div>\r\n      <div>Externe notitie: {{ sale.hstAhComment2 }}</div>\r\n    </div>\r\n\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/history/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_service__ = __webpack_require__("../../../../../src/app/history/history.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesComponent = (function () {
    function SalesComponent(historyService) {
        this.historyService = historyService;
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.sales = this.historyService.getSales(this.artCode);
    };
    return SalesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SalesComponent.prototype, "artCode", void 0);
SalesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-sales',
        template: __webpack_require__("../../../../../src/app/history/sales/sales.component.html"),
        styles: [__webpack_require__("../../../../../src/app/history/sales/sales.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */]) === "function" && _a || Object])
], SalesComponent);

var _a;
//# sourceMappingURL=sales.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<a href={{loginUrl}} class=\"btn btn-primary btn-block\">\r\n  Login\r\n</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var clientId = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].clientId;
// let clientId = "BX01gag79AOiUiIE54RPimlDP3Au6PoQUpYFJUy3";
// let clientId = "fET0BNGfZ7cE6n2NegNJQdJ0N4pguUZvw4THtTdN";
// switch (process.env.APP_TARGET) {
//   case 'prod':
//     clientId = 'kYAPEUagpvVUdtetoCkopdljRblzZGNcKIyUSXcK';
//     break;
//   case 'test':
//     clientId = 'U68NYSUA1nybdBQlwMawPUGebR1lTJBzicVkVo2U';
//     break;
//   case 'dev':
//     clientId = 'e9TdWbEDZSdf8iN20pFauOwj12HtiaXxzkmcT8gN';
//     break;
//   default:
//     throw new Error(`Unkown target ${process.env.APP_TARGET}`);
// }
var baseURL = "https://accountview.net/";
var scope = "readaccountviewdata";
var redirectUri = location.origin + "/get-token.html";
var LoginPageComponent = (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.loginUrl = baseURL + "ams/authorize.aspx?response_type=token&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&scope=" + scope;
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "app-login-page",
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginPageComponent);

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/packing/packing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/packing/packing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <div class=\"list-group-item justify-content-between\" *ngFor=\"let pack of packs | async\">\r\n    <span>{{ pack.packCont}}</span>\r\n    <span>{{ pack.veutrLev}}</span>\r\n    <span>{{ pack.pqtyFree2 }}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/packing/packing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__packing_service__ = __webpack_require__("../../../../../src/app/packing/packing.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackingComponent = (function () {
    function PackingComponent(packingService) {
        this.packingService = packingService;
    }
    PackingComponent.prototype.ngOnInit = function () {
        this.packs = this.packingService.getPacks(this.artCode);
    };
    return PackingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PackingComponent.prototype, "artCode", void 0);
PackingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "app-packing",
        template: __webpack_require__("../../../../../src/app/packing/packing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/packing/packing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__packing_service__["a" /* PackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__packing_service__["a" /* PackingService */]) === "function" && _a || Object])
], PackingComponent);

var _a;
//# sourceMappingURL=packing.component.js.map

/***/ }),

/***/ "../../../../../src/app/packing/packing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring__ = __webpack_require__("../../../../querystring-es3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs.operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("../../../../../src/app/utils/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var avHost = "https://AccountView.net/api/v3";
var PackingService = (function () {
    function PackingService(http) {
        this.http = http;
    }
    PackingService.prototype.getPacks = function (artCode) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]();
        options.headers.append("authorization", localStorage.token_type + " " + localStorage.access_token);
        options.headers.append("x-company", localStorage.company_id);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(0)
            .map(function () { return [
            {
                controlSource: "art_pack.art_code",
                value: artCode
            }
        ]; })
            .map(function (filter) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* filterArrToObject */])(filter); })
            .map(function (filter) {
            return Object.assign({}, {
                businessObject: "PCK",
                pageSize: 1000,
                SortFields: ["pack_cont", "veutr_lev"].join(","),
                fields: ["pack_cont", "veutr_lev", "pqty_free2"].join(",")
            }, filter);
        })
            .map(function (query) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_querystring__["stringify"])(query); })
            .map(function (query) { return avHost + "/AccountViewData?" + query; })
            .switchMap(function (url) { return _this.http.get(url, options); })
            .map(function (rsp) { return rsp.json(); })
            .map(function (data) { return data.ART_PACK; })
            .map(function (data) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* formatProperties */])(data); })
            .catch(function (err) {
            console.warn(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        })
            .do(function (x) { return console.table(x); });
    };
    return PackingService;
}());
PackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PackingService);

var _a;
//# sourceMappingURL=packing.service.js.map

/***/ }),

/***/ "../../../../../src/app/rxjs.operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_publishReplay__ = __webpack_require__("../../../../rxjs/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_publishReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_publishReplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);










//# sourceMappingURL=rxjs.operators.js.map

/***/ }),

/***/ "../../../../../src/app/utils/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs.operators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var avHost = "https://AccountView.net/api/v3";
var CompanyService = (function () {
    function CompanyService(http, router) {
        this.http = http;
        this.router = router;
    }
    CompanyService.prototype.fetchCompanyId = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]();
        options.headers.append("authorization", localStorage.token_type + " " + localStorage.access_token);
        return this.http
            .get(avHost + "/companies", options)
            .map(function (rsp) { return rsp.json(); })
            .do(function (companies) {
            if (companies.length) {
                localStorage.company_id = companies[0].Id;
            }
            else {
                throw new Error("No companies found.");
            }
        })
            .catch(function (err) {
            if (err.status === 401) {
                _this.router.navigate(["/login"]);
            }
            else {
                console.warn(err);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
        });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CompanyService);

var _a, _b;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "../../../../../src/app/utils/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelcase__ = __webpack_require__("../../../../lodash.camelcase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelcase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_camelcase__);
/* harmony export (immutable) */ __webpack_exports__["b"] = formatProperties;
/* harmony export (immutable) */ __webpack_exports__["a"] = filterArrToObject;

function formatProperties(data) {
    return data.map(function (json) {
        var result = {};
        Object.keys(json).forEach(function (key) { return (result[__WEBPACK_IMPORTED_MODULE_0_lodash_camelcase___default()(key)] = json[key]); });
        return result;
    });
}
function filterArrToObject(items) {
    return items.reduce(function (filter, item, i) {
        var nr = i + 1;
        filter["filterControlSource" + nr] = item.controlSource;
        filter["filterOperator" + nr] = item.operator || "equal";
        filter["filterValueType" + nr] = item.valueType || "C";
        filter["filterValue" + nr] = item.value;
        filter["filterIsListOfValues" + nr] = item.isListOfValues || false;
        return filter;
    }, {});
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    clientId: "fET0BNGfZ7cE6n2NegNJQdJ0N4pguUZvw4THtTdN"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map