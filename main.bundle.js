webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.sidenav-content {\n  position:absolute;\n  top: 65px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow-y: scroll;\n}\n\n.sidenav-content::-webkit-scrollbar {\n  display: none;\n}\n\nmat-toolbar {\n  background-color: #3e78b2;\n}\n\nmat-toolbar > button:hover {\n  background-color: #1439cd;\n}\n\n.title {\n  color: #f5ce33;\n  float: left;\n  clear: left;\n  font-size: large;\n}\n\n.subtitle {\n  color: #f5ce33;\n  float: left;\n  clear: left;\n  padding-left: 15px;\n  font-size: small;\n}\n", "", {"version":3,"sources":["C:/Github/drumband/src/app/C:/Github/drumband/app.component.css"],"names":[],"mappings":"AAAA;EACE;sDACoD;EACpD,oBAAe;MAAf,mBAAe;UAAf,eAAe;CAChB;;AAED;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,YAAY;EACZ,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;CAClB","file":"app.component.css","sourcesContent":[".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.sidenav-content {\n  position:absolute;\n  top: 65px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow-y: scroll;\n}\n\n.sidenav-content::-webkit-scrollbar {\n  display: none;\n}\n\nmat-toolbar {\n  background-color: #3e78b2;\n}\n\nmat-toolbar > button:hover {\n  background-color: #1439cd;\n}\n\n.title {\n  color: #f5ce33;\n  float: left;\n  clear: left;\n  font-size: large;\n}\n\n.subtitle {\n  color: #f5ce33;\n  float: left;\n  clear: left;\n  padding-left: 15px;\n  font-size: small;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z6\">\n  <div class=\"titlecontainer\" [routerLink]=\"['/']\">\n      <span class=\"title\">Drumband</span>\n      <span class=\"subtitle\">Padvinders van Sint-Joris</span>\n  </div>\n  <span class=\"example-fill-remaining-space\"></span>\n  <button mat-button [routerLink]=\"['/calendar']\">Optredens</button>\n  <button mat-button [routerLink]=\"['/scores']\">Liedjes</button>\n  <button mat-button [routerLink]=\"['/contact']\">Contact</button>\n</mat-toolbar>\n\n<div class=\"sidenav-content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, googleAnalyticsEventsService) {
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_http_interceptor__ = __webpack_require__("./src/app/core/http.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scores_overview_overview_component__ = __webpack_require__("./src/app/scores/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scores_detail_detail_component__ = __webpack_require__("./src/app/scores/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__scores_scores_service__ = __webpack_require__("./src/app/scores/scores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule(matIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__scores_overview_overview_component__["a" /* ScoreOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_21__scores_detail_detail_component__["a" /* ScoreDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__calendar_calendar_component__["a" /* CalendarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_23__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_23__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                MaterialModule,
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__routing_module__["a" /* RoutingModule */],
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9__core_http_interceptor__["a" /* AppHttpInterceptor */],
                    multi: true
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* LOCALE_ID */], useValue: 'nl_BE' },
                __WEBPACK_IMPORTED_MODULE_15__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */],
                __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_service__["b" /* CalendarService */],
                __WEBPACK_IMPORTED_MODULE_19__loader_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_22__scores_scores_service__["a" /* ScoresService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatIconRegistry */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".example-card {\n    width: 400px;\n    margin: 10px auto;\n  }\n  \n  .example-header-image {\n    background-image: url('http://www.padvindersvansintjorisizegem.be/sites/default/files/styles/blog/public/scouts.JPG');\n    background-size: cover;\n  }", "", {"version":3,"sources":["C:/Github/drumband/src/app/calendar/C:/Github/drumband/calendar.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;GACnB;;EAED;IACE,sHAAsH;IACtH,uBAAuB;GACxB","file":"calendar.component.css","sourcesContent":[".example-card {\n    width: 400px;\n    margin: 10px auto;\n  }\n  \n  .example-header-image {\n    background-image: url('http://www.padvindersvansintjorisizegem.be/sites/default/files/styles/blog/public/scouts.JPG');\n    background-size: cover;\n  }"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"calendar\">\n  <mat-card class=\"example-card\" *ngFor=\"let event of calendar.items\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{event.summary}} -  {{event.start.dateTime | date:'short':'':'nl-BE'}}</mat-card-title>\n      <mat-card-subtitle>{{event.location}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{event.attachments[0].fileUrl}}\" alt=\"{{event.attachments[0].title}}\">\n    <mat-card-content>\n      <p>{{event.discription}}</p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button><mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-facebook-square\"></mat-icon></button>         \n    </mat-card-actions>\n  </mat-card>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__("./src/app/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calenderService, googleAnalyticsEventsService) {
        this.calenderService = calenderService;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.calendar = new __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarEvents */]();
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleAnalyticsEventsService.emitEvent('calendar', 'init', '', 0);
        this.calenderService.getCalendarEvent().subscribe(function (res) {
            _this.calendar = res;
        });
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("./src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__calendar_service__["b" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CalendarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Creator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Organizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attachment; });
var CalendarEvents = /** @class */ (function () {
    function CalendarEvents() {
        this.defaultReminders = new Array();
        this.items = new Array();
    }
    return CalendarEvents;
}());

var CalendarItem = /** @class */ (function () {
    function CalendarItem() {
        this.attachments = new Array();
    }
    return CalendarItem;
}());

var Creator = /** @class */ (function () {
    function Creator(email, name) {
        this.email = email;
        this.displayName = name;
    }
    return Creator;
}());

var Organizer = /** @class */ (function () {
    function Organizer(email, name, self) {
        this.email = email;
        this.displayName = name;
        this.self = self;
    }
    return Organizer;
}());

var Attachment = /** @class */ (function () {
    function Attachment() {
    }
    return Attachment;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_models__ = __webpack_require__("./src/app/calendar/calendar.models.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__calendar_models__["b"]; });
/* unused harmony reexport CalendarItem */
/* unused harmony reexport Creator */
/* unused harmony reexport Organizer */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/calendar/v3/calendars/' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].calendarId + '/events?key=' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].calendarApiKey;
    }
    CalendarService.prototype.getCalendarEvent = function () {
        var _this = this;
        return this.http.get(this.url)
            .map(function (res) {
            var events = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["b" /* CalendarEvents */]();
            events.kind = res.kind;
            events.etag = res.etag;
            events.summary = res.summary;
            events.updated = res.updated;
            events.timeZone = res.timeZone;
            events.accessRole = res.accessRole;
            events.defaultReminders = res.defaultReminders;
            events.nextSyncToken = res.nextSyncToken;
            for (var _i = 0, _a = res.items; _i < _a.length; _i++) {
                var item = _a[_i];
                var i = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["c" /* CalendarItem */]();
                i.kind = item.kind;
                i.etag = item.etag;
                i.id = item.id;
                i.status = item.status;
                i.htmlLink = item.htmlLink;
                i.created = item.created;
                i.updated = item.updated;
                i.summary = item.summary;
                i.location = item.location;
                i.htmlLink = item.htmlLink;
                i.creator = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["d" /* Creator */](item.creator.email, item.creator.displayName);
                i.organizer = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["e" /* Organizer */](item.organizer.email, item.organizer.displayName, item.organizer.self);
                i.start = item.start;
                i.end = item.end;
                i.iCalUID = item.iCalUID;
                i.sequence = item.sequence;
                for (var _b = 0, _c = item.attachments; _b < _c.length; _b++) {
                    var a = _c[_b];
                    var attachment = new __WEBPACK_IMPORTED_MODULE_4__calendar_models__["a" /* Attachment */]();
                    attachment.fileUrl = _this.buildPublicUrlFromCalendatAttachmentFile(a.fileUrl);
                    attachment.title = a.title;
                    attachment.iconLink = a.iconLink;
                    attachment.fileId = a.fileId;
                    i.attachments.push(attachment);
                }
                events.items.push(i);
            }
            return events;
        });
    };
    CalendarService.prototype.buildPublicUrlFromCalendatAttachmentFile = function (url) {
        var id = url.split('https://drive.google.com/file/d/').pop().split('/').shift();
        return "https://docs.google.com/uc?id=" + id;
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CalendarService);
    return CalendarService;
}());




/***/ }),

/***/ "./src/app/core/google-analytics-events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsEventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleAnalyticsEventsService = /** @class */ (function () {
    function GoogleAnalyticsEventsService() {
    }
    GoogleAnalyticsEventsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    GoogleAnalyticsEventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], GoogleAnalyticsEventsService);
    return GoogleAnalyticsEventsService;
}());



/***/ }),

/***/ "./src/app/core/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppHttpInterceptor = /** @class */ (function () {
    function AppHttpInterceptor(loader) {
        this.loader = loader;
    }
    AppHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log('intercepted request ... ');
        this.loader.show();
        // Clone the request to add the new header.
        // const authReq = req.clone({ headers: req.headers.set('headerName', 'headerValue') });
        // console.log('Sending request with new header now ...');
        // send the newly created request
        return next.handle(req)
            .do(function (response) {
            if (response instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                _this.loader.hide();
            }
        }, function (error) {
            console.log('Error Occurred');
            console.log(error);
            _this.loader.hide();
        });
    };
    AppHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__loader_loader_service__["a" /* LoaderService */]])
    ], AppHttpInterceptor);
    return AppHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.loader-hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div>\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scores_overview_overview_component__ = __webpack_require__("./src/app/scores/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scores_detail_detail_component__ = __webpack_require__("./src/app/scores/detail/detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_2__calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: 'score/:id', component: __WEBPACK_IMPORTED_MODULE_4__scores_detail_detail_component__["a" /* ScoreDetailComponent */] },
    { path: 'scores', component: __WEBPACK_IMPORTED_MODULE_3__scores_overview_overview_component__["a" /* ScoreOverviewComponent */] },
    { path: 'contact', redirectTo: '/' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/scores/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "#embed-container {\n    height: 100%;\n    overflow-y: hidden;\n}", "", {"version":3,"sources":["C:/Github/drumband/src/app/scores/detail/C:/Github/drumband/detail.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;CACtB","file":"detail.component.css","sourcesContent":["#embed-container {\n    height: 100%;\n    overflow-y: hidden;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scores/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"embed-container\"></div>\n"

/***/ }),

/***/ "./src/app/scores/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreDetailComponent = /** @class */ (function () {
    function ScoreDetailComponent(activatedRoute, googleAnalyticsEventsService) {
        this.activatedRoute = activatedRoute;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
    }
    ScoreDetailComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        this.googleAnalyticsEventsService.emitEvent('scoreDetail', 'init', 'scoreId', +id);
        // this.coursesObservable = this.getCourses('/scores');
        var container = document.getElementById('embed-container');
        var embed = new Flat.Embed(container, {
            score: id,
            width: '100%',
            height: '100%',
            embedParams: {
                appId: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].flatAppId,
                controlsFloating: false
            }
        });
    };
    ScoreDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scores-detail',
            template: __webpack_require__("./src/app/scores/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/scores/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], ScoreDetailComponent);
    return ScoreDetailComponent;
}());



/***/ }),

/***/ "./src/app/scores/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "  \r\n  h6 { font-size: 1.5rem; margin-top: 0; }\r\n  p { margin: 0; }\r\n  i.large { font-size: 48px; }\r\n  .card,\r\n  .card-panel { -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14); box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14); }\r\n  .container-fluid {\r\n    padding: 1rem 1.5rem;\r\n    margin: auto;\r\n  }\r\n  .row { margin: 0 -0.75rem; }\r\n  @media only screen and (min-width: 993px) {\r\n    .main { padding-left: 250px; }\r\n  }\r\n  /* cards */\r\n  .card .card-action { border-top: none; }\r\n  .card .card-action a { color: #fff !important; }\r\n  table { font-size: 13px; }\r\n  table td:first-of-type,\r\n  table th:first-of-type { padding-left: 24px; }\r\n  table td:last-of-type,\r\n  table th:last-of-type { padding-right: 24px; }\r\n  table.bordered > thead,\r\n  table.bordered > tbody > tr {\r\n    border-bottom: 1px solid rgba(0, 0, 0, .060);\r\n  }\r\n  .card table tr:last-child { border-bottom: none; }\r\n  .card-text { width: calc(100% - 60px); }\r\n  .card-icon i {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: rgba(0, 0, 0, .25);\r\n  }", "", {"version":3,"sources":["C:/Github/drumband/src/app/scores/overview/C:/Github/drumband/overview.component.css"],"names":[],"mappings":";EACE,KAAK,kBAAkB,CAAC,cAAc,EAAE;EACxC,IAAI,UAAU,EAAE;EAChB,UAAU,gBAAgB,EAAE;EAC5B;gBACc,iDAAyC,CAAzC,yCAAyC,EAAE;EAEzD;IACE,qBAAqB;IACrB,aAAa;GACd;EACD,OAAO,mBAAmB,EAAE;EAE5B;IACE,QAAQ,oBAAoB,EAAE;GAC/B;EAED,WAAW;EAEX,qBAAqB,iBAAiB,EAAE;EAExC,uBAAuB,uBAAuB,EAAE;EAEhD,QAAQ,gBAAgB,EAAE;EAE1B;2BACyB,mBAAmB,EAAE;EAE9C;0BACwB,oBAAoB,EAAE;EAE9C;;IAEE,6CAA6C;GAC9C;EAED,4BAA4B,oBAAoB,EAAE;EAElD,aAAa,yBAAyB,EAAE;EAExC;IACE,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;GAC3B","file":"overview.component.css","sourcesContent":["  \r\n  h6 { font-size: 1.5rem; margin-top: 0; }\r\n  p { margin: 0; }\r\n  i.large { font-size: 48px; }\r\n  .card,\r\n  .card-panel { box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14); }\r\n  \r\n  .container-fluid {\r\n    padding: 1rem 1.5rem;\r\n    margin: auto;\r\n  }\r\n  .row { margin: 0 -0.75rem; }\r\n    \r\n  @media only screen and (min-width: 993px) {\r\n    .main { padding-left: 250px; }\r\n  }\r\n  \r\n  /* cards */ \r\n  \r\n  .card .card-action { border-top: none; }\r\n  \r\n  .card .card-action a { color: #fff !important; }\r\n  \r\n  table { font-size: 13px; }\r\n  \r\n  table td:first-of-type,\r\n  table th:first-of-type { padding-left: 24px; }\r\n  \r\n  table td:last-of-type,\r\n  table th:last-of-type { padding-right: 24px; }\r\n  \r\n  table.bordered > thead,\r\n  table.bordered > tbody > tr {\r\n    border-bottom: 1px solid rgba(0, 0, 0, .060);\r\n  }\r\n  \r\n  .card table tr:last-child { border-bottom: none; }\r\n  \r\n  .card-text { width: calc(100% - 60px); }\r\n  \r\n  .card-icon i {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: rgba(0, 0, 0, .25);\r\n  }"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/scores/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col s12 m4\" *ngFor=\"let score of scores\">\n                <div class=\"card blue white-text\" [routerLink]=\"['/score', score.id]\">\n                  <div class=\"card-content valign-wrapper\">\n                    <div class=\"card-text\">\n                      <h6>{{score.title}}</h6>\n                      <p>{{score.composer}}</p>\n                    </div>\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons medium valign\">description</i>\n                    </div>\n                  </div>\n                  <div class=\"card-action\">\n                    <a href=\"#\">View report</a>\n                  </div>\n                </div>\n              </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/scores/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scores_service__ = __webpack_require__("./src/app/scores/scores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_google_analytics_events_service__ = __webpack_require__("./src/app/core/google-analytics-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreOverviewComponent = /** @class */ (function () {
    function ScoreOverviewComponent(scoreService, router, googleAnalyticsEventsService) {
        this.scoreService = scoreService;
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.scores = new Array();
    }
    ScoreOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleAnalyticsEventsService.emitEvent('scoreOverview', 'init', '', 0);
        this.scoreService.getAllScores().subscribe(function (data) {
            _this.scores = data;
        });
    };
    ScoreOverviewComponent.prototype.onClickScoreDetail = function (id) {
        this.router.navigate(["score/" + id]);
    };
    ScoreOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scores-overview',
            template: __webpack_require__("./src/app/scores/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/scores/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__scores_service__["a" /* ScoresService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_google_analytics_events_service__["a" /* GoogleAnalyticsEventsService */]])
    ], ScoreOverviewComponent);
    return ScoreOverviewComponent;
}());



/***/ }),

/***/ "./src/app/scores/score.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Score; });
var Score = /** @class */ (function () {
    function Score(id, title, composer) {
        this.id = id;
        this.title = title;
        this.composer = composer;
    }
    return Score;
}());



/***/ }),

/***/ "./src/app/scores/scores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__score_model__ = __webpack_require__("./src/app/scores/score.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoresService = /** @class */ (function () {
    function ScoresService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].flatUri + "/users/" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].flatUser + "/scores";
    }
    ScoresService.prototype.getAllScores = function () {
        return this.http.get(this.url).map(function (res) {
            var scoreArray = new Array();
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var score = res_1[_i];
                scoreArray.push(new __WEBPACK_IMPORTED_MODULE_3__score_model__["a" /* Score */](score.id, score.title, score.composer));
            }
            return scoreArray;
        });
    };
    ScoresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScoresService);
    return ScoresService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    calendarId: 'spjvj2a6rdp3rf57c18834ti2g@group.calendar.google.com',
    calendarApiKey: 'AIzaSyCedN1Z2LIsNfTnUBurTJZrUynE-sqMSsk',
    firebaseConfig: {
        apiKey: 'AIzaSyAAfDoYCqW1LkvkWDw1E-YUNovAoAAfpP4',
        authDomain: 'drumband-193616.firebaseapp.com',
        databaseURL: 'https://drumband-193616.firebaseio.com',
        projectId: 'drumband-193616',
        storageBucket: 'drumband-193616.appspot.com',
        messagingSenderId: '1092695911267'
    },
    flatUri: 'https://api.flat.io/v2',
    flatAppId: '5a74505db8bdfd7777ec4219',
    flatUser: 'jens_malfait',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_locales_nl_be__ = __webpack_require__("./node_modules/@angular/common/locales/nl-be.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css__ = __webpack_require__("./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_css__);


__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* registerLocaleData */](__WEBPACK_IMPORTED_MODULE_0__angular_common_locales_nl_be__["a" /* default */]);






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map