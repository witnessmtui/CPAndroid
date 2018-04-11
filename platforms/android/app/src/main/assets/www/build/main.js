webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IiformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function IiformPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IiformPage.prototype.onClickSubmitII = function () {
        this.navCtrl.popToRoot();
    };
    IiformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iiform',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/iiform/iiform.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Initial Investigation form</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-item>\n	    <ion-label color="primary">Name of Child:</ion-label>\n	    <ion-textarea placeholder=" first,middle,surname"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Case Number:</ion-label>\n	    <ion-textarea placeholder=" case_number"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Address of Child:</ion-label>\n	    <ion-textarea placeholder="contact details"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Sources of Information:</ion-label>\n	    	<ion-select multiple="true">\n		    	<ion-option value="s1">Child/Family\'s reopened file</ion-option>\n		    	<ion-option value="s2">Visit to the Child\'s home</ion-option>\n		    	<ion-option value="s3">Interview with the Child</ion-option>\n		    	<ion-option value="s4">Interview with the Parent, Carer  or Guardian</ion-option>\n		    	<ion-option value="s5">Interview with Siblings or Other family members</ion-option>\n		    	<ion-option value="s6">Interview with a neighbour/Community member</ion-option>\n		    	<ion-option value="s7">Interview with a Teacher</ion-option>\n		    	<ion-option value="s8">Interview with a Health worker</ion-option>\n		    	<ion-option value="s9">Medical Examination</ion-option>\n		    	<ion-option value="s0">Other</ion-option>\n		    <ion-textarea placeholder=" describe challenges faced during obtaining Information "></ion-textarea>\n		    </ion-select>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Emergency Action(s):</ion-label>\n	    <ion-select [(ngModel)]="emergencyAct">\n		    	<ion-option value="e1">Police Involvement</ion-option>\n		    	<ion-option value="e2">Medical Examination</ion-option>\n		 </ion-select>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Cause of Concern:</ion-label>\n	    <ion-textarea placeholder=" what harm a child suffered/at risk of suffering"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Risk Assessment:</ion-label>\n	    <ion-textarea placeholder=" ReasonforReferral"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Outcome of Investigation and Suggested Action(s):</ion-label>\n			<ion-select [(ngModel)]="outcomeofInv">\n		    	<ion-option value="o1">The child is suffering harm or is at immediate risk of significant harm and emergency action is needed to safeguard the child</ion-option>\n		    	<ion-option value="o2">Reasonable cause to believe the child is suffering or at risk of harm and further SWO interventions are required</ion-option>\n		    	<ion-option value="o3">No reasonable cause to believe the child is suffering or at risk of harm,  but refer the family to MVCC/Service provider</ion-option>\n		    	<ion-option value="o4">No reasonable cause to believe the child is suffering or at risk of harm and no action required(case closed)</ion-option>\n		    </ion-select>\n	</ion-item>\n</ion-content>\n<ion-footer padding>\n	<ion-row right>\n		<ion-col text-right>\n			<button ion-button (click)="onClickSubmitII()">Submit</button>\n		</ion-col>\n	</ion-row>\n</ion-footer>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/iiform/iiform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IiformPage);
    return IiformPage;
}());

//# sourceMappingURL=iiform.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IiviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enrol_enrol__ = __webpack_require__(50);
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
    function IiviewPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.enrolPage = __WEBPACK_IMPORTED_MODULE_2__enrol_enrol__["a" /* EnrolPage */];
    }
    IiviewPage.prototype.onClickEnrol = function () {
        this.navCtrl.push(this.enrolPage);
    };
    IiviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iiview',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/iiview/iiview.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Iiview</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>\n    Hi, I am II view\n<ion-footer>\n  <ion-row left><ion-col text-left>\n    <button ion-button (click)="onClickEdit()">Edit</button>\n  </ion-col>\n  <ion-col text-right>\n    <button ion-button (click)="onClickEnrol()">Enrol</button>\n  </ion-col>\n</ion-row>\n</ion-footer>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/iiview/iiview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], IiviewPage);
    return IiviewPage;
}());

//# sourceMappingURL=iiview.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    IrformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-irform',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/irform/irform.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Initial Referral form</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-item>\n	    <ion-label color="primary">Date of Referral:</ion-label>\n	    <ion-textarea placeholder=" DD/MM/YYYY"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Name of Child:</ion-label>\n	    <ion-textarea placeholder=" first,middle,surname"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Sex:</ion-label>\n	    <ion-select [(ngModel)]="sex">\n	    		<ion-option value="f">Female</ion-option>\n	    		<ion-option value="m">Male</ion-option>\n	 	</ion-select>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Age:</ion-label>\n	    <ion-textarea placeholder="date of birth or age"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Case Number:</ion-label>\n	    <ion-textarea placeholder=" case_number"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Address of Child:</ion-label>\n	    <ion-textarea placeholder="contact details"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Source of Referral:</ion-label>\n			<ion-select [(ngModel)]="SourceofReferral">\n		    	<ion-option value="s1">MVCC</ion-option>\n		    	<ion-option value="s2">Child Survivor</ion-option>\n		    	<ion-option value="s3">Parent(s) or Guardians</ion-option>\n		    	<ion-option value="s4">Other Family Member(s)</ion-option>\n		    	<ion-option value="s5">Neighbor or community member</ion-option>\n		    	<ion-option value="s6">Teacher</ion-option>\n		    	<ion-option value="s7">Police Officer</ion-option>\n		    	<ion-option value="s8">Village or Mtaa Administration</ion-option>\n		    	<ion-option value="s9">Other Professional</ion-option>\n		    	<ion-option value="s0">Child Helpline</ion-option>\n		    </ion-select>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Method of Referral:</ion-label>\n	    	<ion-select [(ngModel)]="MethodofReferral">\n		    	<ion-option value="m1">face to face</ion-option>\n		    	<ion-option value="m2">Telephone</ion-option>\n		    	<ion-option value="m3">Letter/Email</ion-option>\n		    	<ion-option value="m4">Other method</ion-option>\n			</ion-select>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Reason for Referral:</ion-label>\n	    <ion-textarea placeholder=" ReasonforReferral"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Prior History:</ion-label>\n	    <ion-textarea placeholder=" previous DSWO involvement with Child or Family"></ion-textarea>\n		</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Assessment of Intake SWO:</ion-label>\n	    <ion-textarea placeholder=" describe hazard/harm which a child is likely to face"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Cause of Concern:</ion-label>\n	   <ion-select [(ngModel)]="causeofConcern">\n		    	<ion-option value="c1">Yes</ion-option>\n		    	<ion-option value="c2">No</ion-option>\n		</ion-select>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Emergency Actions:</ion-label>\n	    <ion-textarea placeholder=" emergency action to be taken only if Cause of concern is Yes "></ion-textarea>\n	</ion-item>\n</ion-content>\n<ion-footer>\n<ion-row right>\n		<ion-col text-right>\n			<button ion-button (click)="onClickSubmitIR()">Submit</button>\n		</ion-col>\n</ion-row>\n</ion-footer>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/irform/irform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IrformPage);
    return IrformPage;
}());

//# sourceMappingURL=irform.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainmenu_mainmenu__ = __webpack_require__(105);
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
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.onGoToRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.onGoToMainmenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mainmenu_mainmenu__["a" /* MainmenuPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/login/login.html"*/'<<ion-header>\n  <ion-navbar>\n    <ion-title>\n     CP App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<form padding>\n 	  <ion-item>\n      <ion-label color="primary" stacked>Username</ion-label>\n      <ion-input placeholder="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Password</ion-label>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n    <ion-row center>\n      <ion-col text-center><button ion-button (click)="onGoToMainmenu()">login</button></ion-col> \n    </ion-row>\n    <ion-row center>  \n      <ion-col text-center><button ion-button clear (click)="onGoToRegistration()">Register here...</button>  \n    </ion-col> \n      </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function RegistrationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RegistrationPage.prototype.onGoToSubmitReg = function () {
        this.navCtrl.popToRoot();
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/registration/registration.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Registration Form</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-item>\n		<ion-label color="primary">Name:</ion-label>\n			<ion-textarea placeholder="fullname"></ion-textarea>\n	</ion-item>\n	<ion-item>\n		<ion-label color="primary">Registration number:</ion-label>\n	    	<ion-textarea placeholder=" registration number"></ion-textarea>\n	</ion-item>\n	<ion-item>\n		<ion-label color="primary">Category:</ion-label>\n			<ion-select [(ngModel)]="category">\n				<ion-option value="swo">SWO</ion-option>\n				<ion-option value="trained">Trained Officer</ion-option>\n		</ion-select>\n	</ion-item>\n	<ion-item>\n		<ion-label color="primary">Gender</ion-label>\n			<ion-select [(ngModel)]="gender">\n	    		<ion-option value="f">Female</ion-option>\n	    		<ion-option value="m">Male</ion-option>\n	 		</ion-select>\n	<ion-item>\n		<ion-label color="primary">Email:</ion-label>\n			<ion-textarea placeholder=" email address"></ion-textarea>\n	</ion-item>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Phone number:</ion-label>\n	    	<ion-textarea placeholder=" +255758020001"></ion-textarea>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary"> Password:</ion-label>\n	    	<ion-input placeholder="enter password"></ion-input>\n	</ion-item>\n	<ion-item>\n	    <ion-label color="primary">Re-enter Password:</ion-label>\n	    	<ion-input placeholder="re-enter password"></ion-input>\n	</ion-item>\n</ion-content>\n<ion-footer>\n	<ion-row right>\n		<ion-col text-right>\n			<button ion-button (click)="onGoToSubmitReg()">Submit</button>\n		</ion-col>\n	</ion-row>\n</ion-footer>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainmenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__irform_irform__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iiform_iiform__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__irview_irview__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__iiview_iiview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enrol_enrol__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__ = __webpack_require__(106);
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
    function MainmenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.irPage = __WEBPACK_IMPORTED_MODULE_4__irview_irview__["a" /* IrviewPage */];
        this.iiPage = __WEBPACK_IMPORTED_MODULE_5__iiview_iiview__["a" /* IiviewPage */];
        this.irfrmPage = __WEBPACK_IMPORTED_MODULE_2__irform_irform__["a" /* IrformPage */];
        this.iifrmPage = __WEBPACK_IMPORTED_MODULE_3__iiform_iiform__["a" /* IiformPage */];
        this.enrlPage = __WEBPACK_IMPORTED_MODULE_6__enrol_enrol__["a" /* EnrolPage */];
        this.ntficationsPage = __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__["a" /* NotificationsPage */];
    }
    MainmenuPage.prototype.onGoToIR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__irform_irform__["a" /* IrformPage */]);
    };
    MainmenuPage.prototype.onGoToII = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__iiform_iiform__["a" /* IiformPage */]);
    };
    MainmenuPage.prototype.onGoToIRView = function () {
        this.navCtrl.push(this.irPage);
    };
    MainmenuPage.prototype.onGoToIIView = function () {
        this.navCtrl.push(this.iiPage);
    };
    MainmenuPage.prototype.onClickNotifications = function () {
        this.navCtrl.push(this.ntficationsPage);
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
    MainmenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mainmenu',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/mainmenu/mainmenu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Main Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-list>\n    <button ion-item>Fill forms</button>\n      <button ion-button clear  (click)="onGoToIR()">Initial Referral</button><hr>\n	    <button ion-button clear (click)="onGoToII()">Initial Investigation</button><hr>\n    <button ion-item>View forms</button>  \n      <button ion-button clear  (click)="onGoToReceived()">Received Forms</button><hr>\n        <button ion-button clear (click)="onGoToIRView()"> IR View </button><hr>\n        <button ion-button clear (click)="onGoToIIView()"> II View </button><hr>\n      <button ion-button clear (click)="onGoToForms()">My Forms</button><hr>\n        <button ion-button clear (click)="onGoToMyIR()"> IR Forms </button><hr>\n        <button ion-button clear (click)="onGoToMyII()"> II Forms </button><hr>\n    <button ion-item (click)="onClickNotifications()">Notifications</button>\n    <button ion-item (click)="onClickEnroleCase()">Enrol Case</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/mainmenu/mainmenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MainmenuPage);
    return MainmenuPage;
}());

//# sourceMappingURL=mainmenu.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/notifications/notifications.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<p>\n  Hi, all Notifications will be viewed here\n</p>\n</ion-content>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/enrol/enrol.module": [
		279,
		7
	],
	"../pages/iiform/iiform.module": [
		280,
		6
	],
	"../pages/iiview/iiview.module": [
		281,
		5
	],
	"../pages/irform/irform.module": [
		282,
		4
	],
	"../pages/login/login.module": [
		283,
		3
	],
	"../pages/mainmenu/mainmenu.module": [
		286,
		2
	],
	"../pages/notifications/notifications.module": [
		284,
		1
	],
	"../pages/registration/registration.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IrviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IrviewPage = (function () {
    function IrviewPage() {
    }
    IrviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-irview',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/irview/irview.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Irview</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<p>\n  Hi, I am IR view...List of received IR forms will be viewed here\n</p>\n</ion-content>\n<ion-footer>\n  <ion-row left><ion-col text-left>\n  <button ion-button (click)="onClickEdit()">Edit</button>\n  </ion-col>\n  <ion-col text-right>\n  <button ion-button (click)="onClickGoOn()">Go On</button>\n  </ion-col>\n</ion-row>\n</ion-footer>\n'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/irview/irview.html"*/,
        })
    ], IrviewPage);
    return IrviewPage;
}());

//# sourceMappingURL=irview.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_irview_irview__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_iiview_iiview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_enrol_enrol__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mainmenu_mainmenu__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_irform_irform__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_iiform_iiform__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_irview_irview__["a" /* IrviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_iiview_iiview__["a" /* IiviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enrol_enrol__["a" /* EnrolPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mainmenu_mainmenu__["a" /* MainmenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_irform_irform__["a" /* IrformPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_iiform_iiform__["a" /* IiformPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/enrol/enrol.module#EnrolPageModule', name: 'EnrolPage', segment: 'enrol', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/iiform/iiform.module#IiformPageModule', name: 'IiformPage', segment: 'iiform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/iiview/iiview.module#IiviewPageModule', name: 'IiviewPage', segment: 'iiview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/irform/irform.module#IrformPageModule', name: 'IrformPage', segment: 'irform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainmenu/mainmenu.module#MainmenuPageModule', name: 'MainmenuPage', segment: 'mainmenu', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_irview_irview__["a" /* IrviewPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_iiview_iiview__["a" /* IiviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enrol_enrol__["a" /* EnrolPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mainmenu_mainmenu__["a" /* MainmenuPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_irform_irform__["a" /* IrformPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_iiform_iiform__["a" /* IiformPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/wity/SWOFlow/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/wity/SWOFlow/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function EnrolPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EnrolPage.prototype.onClickSubmit = function () {
        this.navCtrl.popToRoot();
    };
    EnrolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enrol',template:/*ion-inline-start:"/home/wity/SWOFlow/src/pages/enrol/enrol.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Enrol</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<ion-list>\n  <ion-item>\n      <ion-label>Enrolling Organization Unit:</ion-label>\n      <ion-input type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label>Date of Initial Referal:</ion-label>\n      <ion-input type="Date"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label>Case Sequence No:</ion-label>\n      <ion-input type="text"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Source of Referral:</ion-label>\n      <ion-select>\n      <ion-option >Child survivor</ion-option>\n      <ion-option >Parent(s) or Guardians</ion-option>\n      <ion-option >Other family member(s)</ion-option>\n      <ion-option >Neighbour or community member</ion-option>\n      <ion-option >Teacher</ion-option>\n      <ion-option >Health worker</ion-option>\n      <ion-option >Police officer</ion-option>\n      <ion-option >Village or Mtaa administration</ion-option>\n      <ion-option >Other proffesional</ion-option>\n      <ion-option >Child helpline</ion-option>\n      <ion-option >Others</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label>Area/Place of incidence:</ion-label>\n      <ion-input type="text"></ion-input>\n  </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row right><ion-col text-right>\n  <button ion-button (click)="onClickSubmit()">Submit</button>\n  </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"/home/wity/SWOFlow/src/pages/enrol/enrol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EnrolPage);
    return EnrolPage;
}());

//# sourceMappingURL=enrol.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map