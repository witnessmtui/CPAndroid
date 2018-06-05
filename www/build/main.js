webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__irform_irform__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iiform_iiform__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iiview_iiview__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enrol_enrol__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mainmenu_view_options_view_options__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__received_form_received_form__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MainmenuPage = (function () {
    function MainmenuPage(store, navCtrl, navParams, popoverCtrl) {
        var _this = this;
        this.store = store;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.iiPage = __WEBPACK_IMPORTED_MODULE_4__iiview_iiview__["a" /* IiviewPage */];
        this.irfrmPage = __WEBPACK_IMPORTED_MODULE_2__irform_irform__["a" /* IrformPage */];
        this.iifrmPage = __WEBPACK_IMPORTED_MODULE_3__iiform_iiform__["a" /* IiformPage */];
        this.enrlPage = __WEBPACK_IMPORTED_MODULE_5__enrol_enrol__["a" /* EnrolPage */];
        this.ntficationsPage = __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */];
        this.fillup = true;
        this.filldown = false;
        this.initial = true;
        this.viewup = true;
        this.viewdown = false;
        this.vform = true;
        this.categ = false;
        this.category = [];
        this.store.get('user').then(function (val) {
            _this.category = val.data.user.category;
            if (_this.category == "swo") {
                _this.categ = true;
            }
        });
    }
    MainmenuPage.prototype.onGoToIR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__irform_irform__["a" /* IrformPage */]);
    };
    MainmenuPage.prototype.onGoToII = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__iiform_iiform__["a" /* IiformPage */]);
    };
    MainmenuPage.prototype.onGoToIIView = function () {
        this.navCtrl.push(this.iiPage);
    };
    MainmenuPage.prototype.receivedForms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__received_form_received_form__["a" /* ReceivedFormPage */]);
    };
    MainmenuPage.prototype.onClickEnroleCase = function () {
        this.navCtrl.push(this.enrlPage);
    };
    MainmenuPage.prototype.onGoToMyIR = function () {
        this.navCtrl.popToRoot();
    };
    MainmenuPage.prototype.onGoToMyII = function () {
        this.navCtrl.popToRoot();
    };
    MainmenuPage.prototype.myForms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__iiview_iiview__["a" /* IiviewPage */]);
    };
    MainmenuPage.prototype.closeInitial = function () {
        this.fillup = false;
        this.filldown = true;
        this.initial = false;
    };
    MainmenuPage.prototype.viewInitial = function () {
        this.fillup = true;
        this.filldown = false;
        this.initial = true;
    };
    MainmenuPage.prototype.view = function () {
        this.viewup = true;
        this.viewdown = false;
        this.vform = true;
    };
    MainmenuPage.prototype.closeview = function () {
        this.viewup = false;
        this.viewdown = true;
        this.vform = false;
    };
    MainmenuPage.prototype.onShowOptions = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__mainmenu_view_options_view_options__["a" /* ViewOptionsPage */]);
        popover.present({ ev: event });
    };
    return MainmenuPage;
}());
MainmenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mainmenu',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\mainmenu\mainmenu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Main Menu</ion-title>\n\n\n\n     <ion-buttons end>\n\n      <button ion-button icon-only (click)="onShowOptions($event)" ></button><ion-icon name="arrow-dropright"></ion-icon>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h4 *ngIf="filldown" (click)="viewInitial()">Fill forms <ion-icon name="ios-arrow-dropdown" ></ion-icon></h4><h4 *ngIf="fillup" (click)="closeInitial()">Fill forms <ion-icon name="ios-arrow-dropup" ></ion-icon></h4>\n\n      <!-- <button ion-button clear  (click)="onGoToIR()">Initial Referral</button><hr> -->\n\n	    <button ion-button clear (click)="onGoToII()" *ngIf="initial" >Initial Investigation</button><hr>\n\n    <h4 *ngIf="viewdown" (click)="view()">View forms <ion-icon name="ios-arrow-dropdown" ></ion-icon></h4><h4 *ngIf="viewup" (click)="closeview()">View forms <ion-icon name="ios-arrow-dropup" ></ion-icon></h4>\n\n\n\n      <button ion-button clear *ngIf="vform && categ" (click)="receivedForms()">Received Forms</button><br>\n\n         <!--<button ion-button clear (click)="onGoToIRView()"> IR View </button><hr> -->\n\n      <button ion-button clear *ngIf="vform" (click)="myForms()">My Forms</button><hr>\n\n        <!-- <button ion-button clear (click)="onGoToMyIR()"> IR Forms </button><hr> -->\n\n    <h4  (click)="onClickNotifications()">Notifications</h4>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\mainmenu\mainmenu.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]) === "function" && _d || Object])
], MainmenuPage);

var _a, _b, _c, _d;
//# sourceMappingURL=mainmenu.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IiformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IiformPage = (function () {
    function IiformPage(store, http, formBuilder, navCtrl, loadingCtrl, toastCtrl) {
        this.store = store;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.selectOptions = ['Police Involvement', 'Medical Examination'];
        this.loading = [];
        this.id = [];
        this.investigation = this.formBuilder.group({
            childName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            source_info: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            challenges_faced: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            emergency_action: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cause_concern: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            risk_assessment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            outcome_investigation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            comments_swo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    IiformPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.get('user').then(function (val) {
            _this.id = val.data.user.id;
            _this.category = val.data.user.category;
        });
    };
    IiformPage.prototype.investigationForm = function () {
        var _this = this;
        var childName = this.investigation.controls["childName"].value, cause_concern = this.investigation.controls["cause_concern"].value, contactNumber = this.investigation.controls["contactNumber"].value, outcome_investigation = this.investigation.controls["outcome_investigation"].value, emergency_action = this.investigation.controls["emergency_action"].value, risk_assessment = this.investigation.controls["risk_assessment"].value, source_info = this.investigation.controls["source_info"].value, challenges_faced = this.investigation.controls["challenges_faced"].value, comments_swo = this.investigation.controls["comments_swo"].value;
        this.showLoader();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), user_id = this.id, user_category = this.category, url = 'http://192.168.43.137:8000/api/initial/investigations', body = { user_category: user_category, challenges_faced: challenges_faced, user_id: user_id, childName: childName, source_info: source_info, cause_concern: cause_concern, contactNumber: contactNumber, emergency_action: emergency_action, risk_assessment: risk_assessment, outcome_investigation: outcome_investigation, comments_swo: comments_swo };
        this.http.post(url, body, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.sendNotification("You are successfully submit your form");
            _this.navCtrl.pop();
        }, function (error) {
            if (error.status === 401) {
                _this.sendNotification("User does not exist!!");
            }
            if (error.status === 0) {
                _this.sendNotification("Server is temporary not responding!!");
            }
            else {
                _this.sendNotification("Please check your internet connections!!");
            }
            //   console.log(error);
        });
        this.loading.dismiss();
    };
    IiformPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'waiting...'
        });
        this.loading.present();
    };
    IiformPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return IiformPage;
}());
IiformPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-iiform',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\iiform\iiform.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Initial Investigation form</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding>\n\n  	<ion-label color="primary"><h3>To be filled by {{category}} </h3></ion-label>\n\n      <form [formGroup]="investigation" (ngSubmit)="investigationForm()">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label stacked><h2>Child Name</h2> </ion-label>\n\n            <ion-input type="text" formControlName="childName" ></ion-input>\n\n          </ion-item>\n\n\n\n  		<ion-item>\n\n  			<ion-label stacked><h2>Address of Child:</h2> </ion-label>\n\n  			<ion-input type="text" formControlName="contactNumber"></ion-input>\n\n  		  </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked><h2>Sources of Information:</h2></ion-label>\n\n              <ion-select formControlName="source_info">\n\n                <ion-option value="Child/Family\'s reopened file">Child/Family\'s reopened file</ion-option>\n\n                <ion-option value="Visit to the Child\'s home">Visit to the Child\'s home</ion-option>\n\n                <ion-option value="Interview with the Child">Interview with the Child</ion-option>\n\n                <ion-option value="Interview with the Parent, Carer  or Guardian">Interview with the Parent, Carer  or Guardian</ion-option>\n\n                <ion-option value="Interview with Siblings or Other family members">Interview with Siblings or Other family members</ion-option>\n\n                <ion-option value="Interview with a neighbour/Community member">Interview with a neighbour/Community member</ion-option>\n\n                <ion-option value="Interview with a Teache">Interview with a Teacher</ion-option>\n\n                <ion-option value="Interview with a Health worker">Interview with a Health worker</ion-option>\n\n                <ion-option value="Medical Examination">Medical Examination</ion-option>\n\n                <ion-option value="Other">Other</ion-option>\n\n              </ion-select>\n\n        </ion-item>\n\n\n\n  			<ion-item>\n\n  			  <ion-label stacked><h2>Challenges faced</h2> </ion-label>\n\n          <ion-textarea placeholder=" describe challenges faced during obtaining Information" formControlName="challenges_faced"></ion-textarea>\n\n  			</ion-item>\n\n\n\n        <ion-item>\n\n      	    <ion-label stacked><h2>Emergency Action(s):</h2></ion-label>\n\n      	    <ion-select formControlName="emergency_action">\n\n      		    	<ion-option value="Police Involvement">Police Involvement</ion-option>\n\n      		    	<ion-option value="Medical Examination">Medical Examination</ion-option>\n\n      		 </ion-select>\n\n      	</ion-item>\n\n\n\n        <ion-item>\n\n      	    <ion-label stacked><h2>Cause of Concern:</h2></ion-label>\n\n      	    <ion-textarea  formControlName="cause_concern"></ion-textarea>\n\n      	</ion-item>\n\n\n\n        <ion-item>\n\n      	    <ion-label stacked><h2>Risk Assessment:</h2></ion-label>\n\n      	    <ion-textarea  formControlName="risk_assessment"></ion-textarea>\n\n      	</ion-item>\n\n\n\n        <ion-item>\n\n      	    <ion-label stacked><h2>Outcome of Investigation and Suggested Action(s):</h2></ion-label>\n\n      			<ion-select formControlName="outcome_investigation">\n\n      		    	<ion-option value="The child is suffering harm or is at immediate risk of significant harm and emergency action is needed to safeguard the child">The child is suffering harm or is at immediate risk of significant harm and emergency action is needed to safeguard the child</ion-option>\n\n      		    	<ion-option value="Reasonable cause to believe the child is suffering or at risk of harm and further SWO interventions are required">Reasonable cause to believe the child is suffering or at risk of harm and further SWO interventions are required</ion-option>\n\n      		    	<ion-option value="No reasonable cause to believe the child is suffering or at risk of harm,  but refer the family to MVCC/Service provider">No reasonable cause to believe the child is suffering or at risk of harm,  but refer the family to MVCC/Service provider</ion-option>\n\n      		    	<ion-option value="No reasonable cause to believe the child is suffering or at risk of harm and no action required(case closed)">No reasonable cause to believe the child is suffering or at risk of harm and no action required(case closed)</ion-option>\n\n      		    </ion-select>\n\n      	</ion-item>\n\n\n\n  		  <ion-item>\n\n      	    <ion-label stacked><h2>Comments from SWO</h2></ion-label>\n\n      	    <ion-textarea formControlName="comments_swo"></ion-textarea>\n\n      	</ion-item>\n\n\n\n        </ion-list>\n\n\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-4> <button ion-button color="secondary" type="submit" [disabled]="!investigation.valid"> Save</button></ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </form>\n\n  </ion-content>\n\n<!--d><h2>Sources of Information:</h2></ion-label>\n\n  <ion-select multiple="true"  -->\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\iiform\iiform.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], IiformPage);

//# sourceMappingURL=iiform.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IiviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_form_view_form__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IiviewPage = (function () {
    function IiviewPage(store, http, navCtrl, navParams, toastCtrl) {
        this.store = store;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.id = [];
        this.myForms = [];
    }
    IiviewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.get('user').then(function (val) {
            _this.id = val.data.user.id;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = 'http://192.168.43.137:8000/api/myForms/' + _this.id;
            _this.http.get(url, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.myForms = data.myForms;
                console.log(data);
            }, function (error) {
                console.log(error);
                if (error.status === 404) {
                    _this.sendNotification("Currently you dont have any form!!");
                }
                else {
                    _this.sendNotification("Something went wrong!!");
                }
            });
        });
    };
    IiviewPage.prototype.ViewForm = function (forms) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_form_view_form__["a" /* ViewFormPage */], { form: forms });
    };
    IiviewPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return IiviewPage;
}());
IiviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-iiview',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\iiview\iiview.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Iiview</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n <ion-item *ngFor="let forms of myForms">\n\n  <h3>Name of Child: {{forms.childName}}</h3>\n\n  <h3>Case Number: {{forms.case_number}}</h3>\n\n  <h3>Address of Child: {{forms.contactNumber}}</h3>\n\n\n\n  <button ion-button clear item-end (click)="ViewForm(forms)">View</button>\n\n </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n\n\n<!--\n\n<ion-footer>\n\n  <ion-row left><ion-col text-left>\n\n    <button ion-button (click)="onClickEdit()">Edit</button>\n\n  </ion-col>\n\n  <ion-col text-right>\n\n  <button ion-button (click)="onClickEnrol()">Enrol</button>\n\n  </ion-col>\n\n</ion-row>\n\n</ion-footer>  -->\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\iiview\iiview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], IiviewPage);

//# sourceMappingURL=iiview.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_form_edit_form__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enrol_enrol__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewFormPage = (function () {
    function ViewFormPage(navParams, store, http, formBuilder, navCtrl, loadingCtrl, toastCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = [];
        this.id = [];
        this.form = [];
        this.swo = false;
    }
    ViewFormPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.form = this.navParams.get('form');
        console.log(this.form);
        this.store.get('user').then(function (val) {
            _this.id = val.data.user.id;
            _this.category = val.data.user.category;
            if (_this.category == "swo") {
                _this.swo = true;
            }
        });
    };
    ViewFormPage.prototype.Enrol = function () {
        if (this.form.status == "Enrolled") {
            this.sendNotification("Form is already enrolled");
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__enrol_enrol__["a" /* EnrolPage */], { form: this.form });
        }
    };
    ViewFormPage.prototype.edit = function () {
        if (this.form.status == "Enrolled") {
            this.sendNotification("Form is already enrolled");
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_form_edit_form__["a" /* EditFormPage */], { form: this.form });
        }
    };
    ViewFormPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return ViewFormPage;
}());
ViewFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-form',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\view-form\view-form.html"*/'<!--\n  Generated template for the ViewFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ViewForm</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n<p>Child Name:</p><strong><p>{{form.childName}}</p></strong>\n<p>Address of the Child :</p> <strong><p>{{form.contactNumber}}</p></strong>\n<p>Case Number</p><strong><p>{{form.case_number}}</p></strong>\n<p>Source of Information:</p> <strong><p>{{form.source_info}}</p></strong>\n<p>Challenges Faced during obtaining Info:</p> <strong><p>{{form.challenges_faced}}</p></strong>\n<p>Emmergency Action:</p> <strong><p>{{form.emergency_action}}</p></strong>\n<p>Cause of Concern:</p> <strong><p>{{form.cause_concern}}</p></strong>\n<p>Risk Assessment:</p> <strong><p>{{form.risk_assessment}}</p></strong>\n<p>Outcome of Investigation:</p> <strong><p>{{form.outcome_investigation}}</p></strong>\n<p>Comments from SWO:</p> <strong><p>{{form.comments_swo}}</p></strong>\n\n</ion-content>\n<ion-footer>\n  <ion-row left><ion-col text-left>\n    <button ion-button (click)="edit()">Edit</button>\n  </ion-col>\n  <ion-col text-right>\n  <button *ngIf="swo" ion-button (click)="Enrol()">Enrol</button>\n  </ion-col>\n</ion-row>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\view-form\view-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ViewFormPage);

//# sourceMappingURL=view-form.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\notifications\notifications.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<p>\n\n  Hi, all Notifications will be viewed here\n\n</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgetpass_forgetpass__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainmenu_mainmenu__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(store, http, navCtrl, navParams, formBuilder, loadingCtrl, toastCtrl) {
        this.store = store;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = [];
        this.login = this.formBuilder.group({
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.get('user').then(function (val) {
            _this.login.patchValue({
                phone_number: val.data.user.phone_number,
                password: val.password
            });
        }, function (error) {
            console.log('no stored values');
        });
    };
    LoginPage.prototype.logForm = function () {
        var _this = this;
        var phone_number = this.login.controls["phone_number"].value, password = this.login.controls["password"].value;
        this.showLoader();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = 'http://192.168.43.137:8000/api/user/login', body = { phone_number: phone_number, password: password };
        this.http.post(url, body, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var userdata = { data: data, password: password };
            _this.store.set('user', userdata);
            _this.sendNotification("You are successfully login");
            console.log(data);
            if (data.user.category == "swo") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__mainmenu_mainmenu__["a" /* MainmenuPage */]);
            }
            if (data.user.category == "trained") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__mainmenu_mainmenu__["a" /* MainmenuPage */]);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.sendNotification("Wrong Phone Number or Password");
            }
            if (error.status === 500) {
                _this.sendNotification("Sorry,Internal server error");
            }
            else if (error.status === 0) {
                _this.sendNotification("Please check your internet connections!!");
            }
        });
        this.loading.dismiss();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.forgetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgetpass_forgetpass__["a" /* ForgetpassPage */]);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Login in...'
        });
        this.loading.present();
    };
    LoginPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\login\login.html"*/'<!--\n  Generated template for the ForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title align="center">CP App</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding align="center">\n  <ion-label color="primary"><h3>Login to CP App</h3></ion-label>\n    <form [formGroup]="login" (ngSubmit)="logForm()">\n      <ion-list>\n          <ion-item>\n            <ion-label stacked><h2>Phone Number</h2> </ion-label>\n            <ion-input type="text" formControlName="phone_number" ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked><h2>Password</h2></ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n      </ion-list>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4> <button ion-button color="secondary" type="submit" [disabled]="!login.valid"><ion-icon name="log-in"></ion-icon><pre> </pre> Login</button></ion-col>\n              <ion-col col-8><a href="#" (click)="forgetPass()" align="center"><ion-label>Forget Password</ion-label></a></ion-col>\n            </ion-row>\n          </ion-grid>\n        </form><br>\n\n  <ion-label>You don\'t have an acount? <a href="#" (click)="register()">Register here</a></ion-label>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationPage = (function () {
    function RegistrationPage(http, formBuilder, navCtrl, loadingCtrl, toastCtrl) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = [];
        this.register = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            registration_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            repeat_pass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    RegistrationPage.prototype.regForm = function () {
        var _this = this;
        var name = this.register.controls["name"].value, phone_number = this.register.controls["phone_number"].value, registration_number = this.register.controls["registration_number"].value, category = this.register.controls["category"].value, email = this.register.controls["email"].value, gender = this.register.controls["gender"].value, password = this.register.controls["password"].value, repeat_pass = this.register.controls["repeat_pass"].value;
        this.showLoader();
        if (password === repeat_pass) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = 'http://192.168.43.137:8000/api/user', body = { name: name, password: password, phone_number: phone_number, registration_number: registration_number, email: email, gender: gender, category: category };
            this.http.post(url, body, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.sendNotification("You are successfully create your account");
                _this.navCtrl.pop();
            }, function (error) {
                if (error.status === 422) {
                    _this.sendNotification("Email/Phone number already exist!!");
                }
                if (error.status === 0) {
                    _this.sendNotification("Please check your internet connections!!");
                }
                else {
                    _this.sendNotification("Server is temporary not responding!!");
                }
                //   console.log(error);
            });
            this.loading.dismiss();
        }
        else {
            this.sendNotification('Password and Repeat Password do not match');
            this.loading.dismiss();
        }
    };
    RegistrationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering...'
        });
        this.loading.present();
    };
    RegistrationPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    RegistrationPage.prototype.onGoToSubmitReg = function () {
        this.navCtrl.popToRoot();
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registration',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\registration\registration.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Registration Form</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-label color="primary"><h3>Register to CP App</h3></ion-label>\n\n    <form [formGroup]="register" (ngSubmit)="regForm()">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label stacked><h2>Full Name</h2> </ion-label>\n\n          <ion-input type="text" formControlName="name" ></ion-input>\n\n        </ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked><h2>Registration number</h2> </ion-label>\n\n			<ion-input type="text" formControlName="registration_number" ></ion-input>\n\n		  </ion-item>\n\n\n\n			<ion-item>\n\n			  <ion-label stacked><h2>Email</h2> </ion-label>\n\n			  <ion-input type="text" formControlName="email" ></ion-input>\n\n			</ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked><h2>Phone Number</h2> </ion-label>\n\n            <ion-input type="text" formControlName="phone_number" ></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n			<ion-label stacked ><h2>Category</h2></ion-label>\n\n				<ion-select formControlName="category" >\n\n					<ion-option value="swo">SWO</ion-option>\n\n					<ion-option value="trained">Trained Officer</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label stacked><h2>Gender</h2></ion-label>\n\n				<ion-select formControlName="gender" >\n\n					<ion-option value="f">Female</ion-option>\n\n					<ion-option value="m">Male</ion-option>\n\n				 </ion-select>\n\n			 </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked><h2>Password</h2></ion-label>\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label stacked><h2>Repeat Password</h2></ion-label>\n\n            <ion-input type="password" formControlName="repeat_pass"></ion-input>\n\n		  </ion-item>\n\n\n\n      </ion-list>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-4> <button ion-button color="secondary" type="submit" [disabled]="!register.valid"><ion-icon name="log-in"></ion-icon><pre> </pre> Register</button></ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\registration\registration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetpassPage = (function () {
    function ForgetpassPage(http, formBuilder, navCtrl, loadingCtrl, toastCtrl) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = [];
        this.forgetp = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            repeat_pass: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ForgetpassPage.prototype.forgetpass = function () {
        var _this = this;
        var name = this.forgetp.controls["name"].value, phone_number = this.forgetp.controls["phone_number"].value, password = this.forgetp.controls["password"].value, repeat_pass = this.forgetp.controls["repeat_pass"].value;
        this.showLoader();
        if (password === repeat_pass) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = 'http://192.168.43.137:8000/api/user/forgetPass', body = { name: name, phone_number: phone_number, password: password };
            this.http.post(url, body, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.sendNotification("You are successfully renew your password");
                _this.navCtrl.pop();
            }, function (error) {
                if (error.status === 0) {
                    _this.sendNotification("Please check your internet connections!!");
                }
                else if (error.status === 402) {
                    _this.sendNotification("Full name Invalid, please register");
                }
                else if (error.status === 401) {
                    _this.sendNotification("Invalid phone_number, please enter details correctly");
                }
                else {
                    _this.sendNotification("Server is temporary not responding!!");
                }
                //   console.log(error);
            });
            this.loading.dismiss();
        }
        else {
            this.sendNotification('Password and Repeat Password do not match');
            this.loading.dismiss();
        }
    };
    ForgetpassPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Waiting...'
        });
        this.loading.present();
    };
    ForgetpassPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return ForgetpassPage;
}());
ForgetpassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgetpass',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\forgetpass\forgetpass.html"*/'<!--\n  Generated template for the ForgetpassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forget Password</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-label color="primary"><h4>Enter your previous details</h4></ion-label>\n    <form [formGroup]="forgetp" (ngSubmit)="forgetpass()">\n      <ion-list>\n\n            <ion-item>\n              <ion-label stacked><h2>Your Full Name</h2></ion-label>\n              <ion-input type="name" formControlName="name"></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label stacked><h2>Your Email/Phone Number</h2> </ion-label>\n            <ion-input type="text" formControlName="phone_number" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked><h2>New Password</h2></ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked><h2>Repeat New Password</h2></ion-label>\n            <ion-input type="password" formControlName="repeat_pass"></ion-input>\n          </ion-item>\n\n      </ion-list>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4> <button ion-button color="secondary" type="submit" [disabled]="!forgetp.valid"><ion-icon name=""></ion-icon>FORGET Password</button></ion-col>\n            </ion-row>\n          </ion-grid>\n        </form><br>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\forgetpass\forgetpass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ForgetpassPage);

//# sourceMappingURL=forgetpass.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditFormPage = (function () {
    function EditFormPage(navParams, store, http, formBuilder, navCtrl, loadingCtrl, toastCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = [];
        this.id = [];
        this.form = [];
        this.category = [];
        this.investigation = this.formBuilder.group({
            childName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            source_info: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            challenges_faced: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            emergency_action: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cause_concern: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            risk_assessment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            outcome_investigation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            comments_swo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    EditFormPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.get('user').then(function (val) {
            _this.id = val.data.user.id;
            _this.category = val.data.user.category;
            _this.form = _this.navParams.get('form');
        });
    };
    EditFormPage.prototype.investigationForm = function () {
        var _this = this;
        if (this.form.status == "Enroled") {
            this.sendNotification("Form is already enrolled, You can't edit");
        }
        else {
            var childName = this.investigation.controls["childName"].value, cause_concern = this.investigation.controls["cause_concern"].value, contactNumber = this.investigation.controls["contactNumber"].value, outcome_investigation = this.investigation.controls["outcome_investigation"].value, emergency_action = this.investigation.controls["emergency_action"].value, risk_assessment = this.investigation.controls["risk_assessment"].value, source_info = this.investigation.controls["source_info"].value, challenges_faced = this.investigation.controls["challenges_faced"].value, comments_swo = this.investigation.controls["comments_swo"].value;
            this.showLoader();
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), form_id = this.form.id, url = 'http://192.168.43.137:8000/api/edit/investigations', body = { challenges_faced: challenges_faced, form_id: form_id, childName: childName, source_info: source_info, cause_concern: cause_concern, contactNumber: contactNumber, emergency_action: emergency_action, risk_assessment: risk_assessment, outcome_investigation: outcome_investigation, comments_swo: comments_swo };
            this.http.post(url, body, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.sendNotification("You are successfully edit your form");
                _this.navCtrl.pop();
            }, function (error) {
                if (error.status === 401) {
                    _this.sendNotification("User does not exist!!");
                }
                if (error.status === 0) {
                    _this.sendNotification("Server is temporary not responding!!");
                }
                else {
                    _this.sendNotification("Please check your internet connections!!");
                }
                //   console.log(error);
            });
            this.loading.dismiss();
        }
    };
    EditFormPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'waiting...'
        });
        this.loading.present();
    };
    EditFormPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return EditFormPage;
}());
EditFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-form',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\edit-form\edit-form.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title> Edit Initial Investigation form</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n  	<ion-label color="primary"><h3>To be filled by {{category}} </h3></ion-label>\n      <form [formGroup]="investigation" (ngSubmit)="investigationForm()">\n        <ion-list>\n          <ion-item>\n            <ion-label stacked><h2>Child Name</h2> </ion-label>\n            <ion-input type="text" formControlName="childName" value= "{{form.childName}}" ></ion-input>\n          </ion-item>\n\n  		<ion-item>\n  			<ion-label stacked><h2>Address of Child:</h2> </ion-label>\n  			<ion-input type="text" formControlName="contactNumber" value="{{form.contactNumber}}"></ion-input>\n  		  </ion-item>\n\n        <ion-item>\n            <ion-label stacked><h2>Sources of Information:</h2></ion-label>\n              <ion-select formControlName="source_info">\n                <ion-option value="s1">Child/Family\'s reopened file</ion-option>\n                <ion-option value="s2">Visit to the Child\'s home</ion-option>\n                <ion-option value="s3">Interview with the Child</ion-option>\n                <ion-option value="s4">Interview with the Parent, Carer  or Guardian</ion-option>\n                <ion-option value="s5">Interview with Siblings or Other family members</ion-option>\n                <ion-option value="s6">Interview with a neighbour/Community member</ion-option>\n                <ion-option value="s7">Interview with a Teacher</ion-option>\n                <ion-option value="s8">Interview with a Health worker</ion-option>\n                <ion-option value="s9">Medical Examination</ion-option>\n                <ion-option value="s0">Other</ion-option>\n              </ion-select>\n        </ion-item>\n\n  			<ion-item>\n  			  <ion-label stacked><h2>Challenges faced</h2> </ion-label>\n          <ion-textarea placeholder="describe challenges faced during obtaining Information" formControlName="challenges_faced" value="{{form.challenges_faced}}"></ion-textarea>\n  			</ion-item>\n\n        <ion-item>\n      	    <ion-label stacked><h2>Emergency Action(s):</h2></ion-label>\n      	    <ion-select formControlName="emergency_action">\n      		    	<ion-option value="e1">Police Involvement</ion-option>\n      		    	<ion-option value="e2">Medical Examination</ion-option>\n      		 </ion-select>\n      	</ion-item>\n\n        <ion-item>\n      	    <ion-label stacked><h2>Cause of Concern:</h2></ion-label>\n      	    <ion-textarea  formControlName="cause_concern" value="{{form.cause_concern}}"></ion-textarea>\n      	</ion-item>\n\n        <ion-item>\n      	    <ion-label stacked><h2>Risk Assessment:</h2></ion-label>\n      	    <ion-textarea  formControlName="risk_assessment" value="{{form.risk_assessment}}"></ion-textarea>\n      	</ion-item>\n\n        <ion-item>\n      	    <ion-label stacked><h2>Outcome of Investigation and Suggested Action(s):</h2></ion-label>\n      			<ion-select formControlName="outcome_investigation">\n      		    	<ion-option value="o1">The child is suffering harm or is at immediate risk of significant harm and emergency action is needed to safeguard the child</ion-option>\n      		    	<ion-option value="o2">Reasonable cause to believe the child is suffering or at risk of harm and further SWO interventions are required</ion-option>\n      		    	<ion-option value="o3">No reasonable cause to believe the child is suffering or at risk of harm,  but refer the family to MVCC/Service provider</ion-option>\n      		    	<ion-option value="o4">No reasonable cause to believe the child is suffering or at risk of harm and no action required(case closed)</ion-option>\n      		    </ion-select>\n      	</ion-item>\n\n  		  <ion-item>\n      	    <ion-label stacked><h2>Comments from {{category}}</h2></ion-label>\n      	    <ion-textarea formControlName="comments_swo" value="{{form.comments_swo}}"></ion-textarea>\n      	</ion-item>\n\n        </ion-list>\n\n            <ion-grid>\n              <ion-row>\n                <ion-col col-4> <button ion-button color="secondary" type="submit" [disabled]="!investigation.valid"> Save</button></ion-col>\n              </ion-row>\n            </ion-grid>\n          </form>\n  </ion-content>\n<!--d><h2>Sources of Information:</h2></ion-label>\n  <ion-select multiple="true"  -->\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\edit-form\edit-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], EditFormPage);

//# sourceMappingURL=edit-form.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewOptionsPage = (function () {
    function ViewOptionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ViewOptionsPage.prototype.onAction = function (action) {
        this.viewCtrl.dismiss({ action: action });
    };
    return ViewOptionsPage;
}());
ViewOptionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-options',
        template: "\n\n\t<ion-grid text-center>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t<h3>View</h3>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n    <ion-row>\n\t\t\t<ion-col>\n\t\t\t<button ion-button outline(click)=\"onAction('iiview') \">Initial investigation form\n\t\t\t</button>\n\t\t\t</ion-col>\n      </ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t<button ion-button outline(click)=\"onAction('receicedforms') \">Received forms\n\t\t\t</button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</ion-grid>\n "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], ViewOptionsPage);

//# sourceMappingURL=view-options.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivedFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_form_view_form__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ReceivedFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReceivedFormPage = (function () {
    function ReceivedFormPage(store, http, navCtrl, navParams, toastCtrl) {
        this.store = store;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.id = [];
        this.myForms = [];
    }
    ReceivedFormPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store.get('user').then(function (val) {
            _this.id = val.data.user.id;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = 'http://192.168.43.137:8000/api/receivedForms';
            _this.http.get(url, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.myForms = data.myForms;
                console.log(data);
            }, function (error) {
                console.log(error);
                if (error.status === 404) {
                    _this.sendNotification("Currently you dont have any form!!");
                }
                else {
                    _this.sendNotification("Something went wrong!!");
                }
            });
        });
    };
    ReceivedFormPage.prototype.ViewForm = function (forms) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_form_view_form__["a" /* ViewFormPage */], { form: forms });
    };
    ReceivedFormPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return ReceivedFormPage;
}());
ReceivedFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-received-form',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\received-form\received-form.html"*/'<!--\n  Generated template for the ReceivedFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Received Form</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n <ion-item *ngFor="let forms of myForms">\n  <h3>Name of Child: {{forms.childName}}</h3>\n  <h3>Case Number: {{forms.case_number}}</h3>\n  <h3>Address of Child: {{forms.contactNumber}}</h3>\n\n  <button ion-button clear item-end (click)="ViewForm(forms)">View</button>\n </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\received-form\received-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], ReceivedFormPage);

//# sourceMappingURL=received-form.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_enrol_enrol__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mainmenu_mainmenu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_iiform_iiform__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_iiview_iiview__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mainmenu_view_options_view_options__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_iiform__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forgetpass_forgetpass__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_view_form_view_form__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_form_edit_form__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_received_form_received_form__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_iiview_iiview__["a" /* IiviewPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_edit_form_edit_form__["a" /* EditFormPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_enrol_enrol__["a" /* EnrolPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mainmenu_mainmenu__["a" /* MainmenuPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_forgetpass_forgetpass__["a" /* ForgetpassPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mainmenu_view_options_view_options__["a" /* ViewOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_iiform_iiform__["a" /* IiformPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_view_form_view_form__["a" /* ViewFormPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_received_form_received_form__["a" /* ReceivedFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_iiview_iiview__["a" /* IiviewPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_enrol_enrol__["a" /* EnrolPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mainmenu_mainmenu__["a" /* MainmenuPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_iiform_iiform__["a" /* IiformPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mainmenu_view_options_view_options__["a" /* ViewOptionsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_forgetpass_forgetpass__["a" /* ForgetpassPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_received_form_received_form__["a" /* ReceivedFormPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_view_form_view_form__["a" /* ViewFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_edit_form_edit_form__["a" /* EditFormPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__services_iiform__["a" /* IiformService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_iiview_iiview__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_enrol_enrol__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mainmenu_mainmenu__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_iiform_iiform__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(store, platform, statusBar, splashScreen) {
        this.store = store;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_mainmenu_mainmenu__["a" /* MainmenuPage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { title: 'Initial Investigation form', component: __WEBPACK_IMPORTED_MODULE_8__pages_iiform_iiform__["a" /* IiformPage */] },
            { title: 'IiviewPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_iiview_iiview__["a" /* IiviewPage */] },
            { title: 'Enrolment', component: __WEBPACK_IMPORTED_MODULE_6__pages_enrol_enrol__["a" /* EnrolPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  <button (click)="logout()" ion-button>Logout</button>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IrformPage = (function () {
    function IrformPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IrformPage.prototype.onClickSubmitIR = function () {
        this.navCtrl.popToRoot();
    };
    return IrformPage;
}());
IrformPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-irform',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\irform\irform.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Initial Referral form</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-item>\n\n	    <ion-label color="primary">Date of Referral:</ion-label>\n\n	    <ion-textarea placeholder=" DD/MM/YYYY"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Name of Child:</ion-label>\n\n	    <ion-textarea placeholder=" first,middle,surname"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Sex:</ion-label>\n\n	    <ion-select [(ngModel)]="sex">\n\n	    		<ion-option value="f">Female</ion-option>\n\n	    		<ion-option value="m">Male</ion-option>\n\n	 	</ion-select>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Age:</ion-label>\n\n	    <ion-textarea placeholder="date of birth or age"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Case Number:</ion-label>\n\n	    <ion-textarea placeholder=" case_number"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Address of Child:</ion-label>\n\n	    <ion-textarea placeholder="contact details"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Source of Referral:</ion-label>\n\n			<ion-select [(ngModel)]="SourceofReferral">\n\n		    	<ion-option value="s1">MVCC</ion-option>\n\n		    	<ion-option value="s2">Child Survivor</ion-option>\n\n		    	<ion-option value="s3">Parent(s) or Guardians</ion-option>\n\n		    	<ion-option value="s4">Other Family Member(s)</ion-option>\n\n		    	<ion-option value="s5">Neighbor or community member</ion-option>\n\n		    	<ion-option value="s6">Teacher</ion-option>\n\n		    	<ion-option value="s7">Police Officer</ion-option>\n\n		    	<ion-option value="s8">Village or Mtaa Administration</ion-option>\n\n		    	<ion-option value="s9">Other Professional</ion-option>\n\n		    	<ion-option value="s0">Child Helpline</ion-option>\n\n		    </ion-select>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Method of Referral:</ion-label>\n\n	    	<ion-select [(ngModel)]="MethodofReferral">\n\n		    	<ion-option value="m1">face to face</ion-option>\n\n		    	<ion-option value="m2">Telephone</ion-option>\n\n		    	<ion-option value="m3">Letter/Email</ion-option>\n\n		    	<ion-option value="m4">Other method</ion-option>\n\n			</ion-select>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Reason for Referral:</ion-label>\n\n	    <ion-textarea placeholder=" ReasonforReferral"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Prior History:</ion-label>\n\n	    <ion-textarea placeholder=" previous DSWO involvement with Child or Family"></ion-textarea>\n\n		</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Assessment of Intake SWO:</ion-label>\n\n	    <ion-textarea placeholder=" describe hazard/harm which a child is likely to face"></ion-textarea>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Cause of Concern:</ion-label>\n\n	   <ion-select [(ngModel)]="causeofConcern">\n\n		    	<ion-option value="c1">Yes</ion-option>\n\n		    	<ion-option value="c2">No</ion-option>\n\n		</ion-select>\n\n	</ion-item>\n\n	<ion-item>\n\n	    <ion-label color="primary">Emergency Actions:</ion-label>\n\n	    <ion-textarea placeholder=" emergency action to be taken only if Cause of concern is Yes "></ion-textarea>\n\n	</ion-item>\n\n</ion-content>\n\n<ion-footer>\n\n<ion-row right>\n\n		<ion-col text-right>\n\n			<button ion-button (click)="onClickSubmitIR()">Submit</button>\n\n		</ion-col>\n\n</ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\irform\irform.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], IrformPage);

//# sourceMappingURL=irform.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IiformService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_info__ = __webpack_require__(280);

var IiformService = (function () {
    function IiformService() {
        //VARIABLE TO DEFINE LIST OF  INGREDIENTS
        this.infos = [];
    }
    IiformService.prototype.addItem = function (name, caseNumber, contactNumber) {
        this.infos.push(new __WEBPACK_IMPORTED_MODULE_0__models_info__["a" /* Info */](name, caseNumber, contactNumber));
        console.log(this.infos);
    };
    /**ADD MORE THAN 1 ITEM AND RECEIVE A LIST OF INGREDIENTS AT THE END**/
    IiformService.prototype.addItems = function (items) {
        (_a = this.infos).push.apply(_a, items);
        var _a;
    };
    IiformService.prototype.getItems = function () {
        return this.infos.slice();
    };
    IiformService.prototype.removeItem = function (index) {
        this.infos.splice(index, 1);
    };
    return IiformService;
}());

//# sourceMappingURL=iiform.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Info; });
var Info = (function () {
    function Info(name, caseNumber, contactNumber) {
        this.name = name;
        this.caseNumber = caseNumber;
        this.contactNumber = contactNumber;
    }
    return Info;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnrolPage = (function () {
    function EnrolPage(navParams, store, http, formBuilder, navCtrl, loadingCtrl, toastCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = [];
        this.form = [];
        this.enrol = this.formBuilder.group({
            Organization_unit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            date_refferal: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            source_refferal: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            area_incidence: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    EnrolPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.form = this.navParams.get('form');
        this.store.get('user').then(function (val) {
            _this.category = val.data.user.category;
        });
    };
    EnrolPage.prototype.enrolForm = function () {
        var _this = this;
        var Organization_unit = this.enrol.controls["Organization_unit"].value, area_incidence = this.enrol.controls["area_incidence"].value, date_refferal = this.enrol.controls["date_refferal"].value, source_refferal = this.enrol.controls["source_refferal"].value;
        this.showLoader();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), form = this.form, url = 'http://192.168.43.137:8000/api/initial/enrols', body = { form: form, Organization_unit: Organization_unit, source_refferal: source_refferal, area_incidence: area_incidence, date_refferal: date_refferal, };
        this.http.post(url, body, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.sendNotification("You are successfully enroll the form");
            _this.navCtrl.pop();
        }, function (error) {
            if (error.status === 401) {
                _this.sendNotification("User does not exist!!");
            }
            if (error.status === 0) {
                _this.sendNotification("Server is temporary not responding!!");
            }
            else {
                _this.sendNotification("Please check your internet connections!!");
            }
            //   console.log(error);
        });
        this.loading.dismiss();
    };
    EnrolPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'waiting...'
        });
        this.loading.present();
    };
    EnrolPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 5000
        });
        notification.present();
    };
    return EnrolPage;
}());
EnrolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enrol',template:/*ion-inline-start:"C:\Users\Ritta\CPAndroid\src\pages\enrol\enrol.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Enrol</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="enrol" (ngSubmit)="enrolForm()">\n\n\n\n<ion-list>\n\n  <ion-item>\n\n      <ion-label>Enrolling Organization Unit:</ion-label>\n\n      <ion-input type="text"  formControlName="Organization_unit"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Date of Initial Referal:</ion-label>\n\n      <ion-input type="Date"  formControlName="date_refferal"></ion-input>\n\n  </ion-item>\n\n<!--  <ion-item>\n\n      <ion-label>Case Sequence No:</ion-label>\n\n      <ion-input type="text"  formControlName="case_sequence"></ion-input>\n\n  </ion-item>  -->\n\n  <ion-item>\n\n    <ion-label>Source of Referral:</ion-label>\n\n      <ion-select formControlName="source_refferal">\n\n      <ion-option >Child survivor</ion-option>\n\n      <ion-option >Parent(s) or Guardians</ion-option>\n\n      <ion-option >Other family member(s)</ion-option>\n\n      <ion-option >Neighbour or community member</ion-option>\n\n      <ion-option >Teacher</ion-option>\n\n      <ion-option >Health worker</ion-option>\n\n      <ion-option >Police officer</ion-option>\n\n      <ion-option >Village or Mtaa administration</ion-option>\n\n      <ion-option >Other proffesional</ion-option>\n\n      <ion-option >Child helpline</ion-option>\n\n      <ion-option >Others</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label>Area/Place of incidence:</ion-label>\n\n      <ion-input type="text"  formControlName="area_incidence"></ion-input>\n\n  </ion-item>\n\n  </ion-list>\n\n  <button ion-button type="submit" [disabled]="!enrol.valid">Submit</button>\n\n</form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-row right><ion-col text-right>\n\n  </ion-col>\n\n  </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Ritta\CPAndroid\src\pages\enrol\enrol.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], EnrolPage);

/*     let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
             options  : any      = new RequestOptions({ headers: headers }),
             url      : any       = 'http://192.168.43.137:8000/api/enrol/'+ this.form.id;

             this.http.get(url,options).map(res =>res.json())
             .subscribe(
              data =>  {
                  this.enrols = data.enrols;
                  console.log(data);
                  this.sendNotification("You have successfully enrol this form!");
              },

            error => {
              console.log(error);
              if (error.status === 404) {
                this.sendNotification("Currently formnot found!!");
              }
              else{
                this.sendNotification("Something went wrong!!");
              }

   });  */
//# sourceMappingURL=enrol.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map