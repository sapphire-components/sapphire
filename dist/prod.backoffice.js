/*! prod.backoffice.js || Version: 5.5.289 || Generated: Thu Feb 26 2026 11:08:09 GMT+0000 (Western European Standard Time) */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backoffice/01-components/layout/layout-backoffice.js":
/***/ (function() {

$(document).ready(function () {


  var regex = RegExp("Layout");
  var wordList = $('.Page').attr('class').split(" ").filter((elem, index) => {
    return regex.test(elem);
  })
  $('.ViewStateCounter > div').append(' ' + wordList);


  var isDesktop = $(".Page").hasClass("desktop");
  var isPhone = $(".Page").hasClass("phone");
  var UseSidebar = $(".Sidebar").css("display") != "none";

  if (isPhone) $(".Others_Menu ").detach().prependTo(".Application_Menu");

  // open responsive menu
  $("a.Header_ButtonMenu").click(function () {

    // if opened
    if ($(".Page").hasClass("active")) {
      $(".Page").removeClass("active");
    } else {
      $(".Page").addClass("active");
    }

    return false;
  });


  // close resposive menu when click out
  $(".Page.tablet > .Content").click(function () {
    $(".Page").removeClass("active");
  });

  // Open sidebar
  $("a.Header_ButtonSidebar").click(function () {

    // if open
    if ($(".Sidebar").hasClass("open")) {
      $(".Sidebar").removeClass("open");
    } else {
      $(".Sidebar").addClass("open");
    }

    return false;
  });


  // if sidebar
  if (UseSidebar) {
    $(".Page").addClass("UseSidebar");
  } else {

    // if fade active
    if ($(".Page").hasClass("UseHeaderFade")) {

      $header = $('.Header');
      $titleHeight = $(".Title_Section").outerHeight();
      var $headerBackground = $('.Header_background');

      var alpha = 0;
      var lastComma = "";
      $(window).scroll(function () {
        if ($(this).scrollTop() > $headerHeight) {
          $headerBackground.fadeIn();
        } else {
          $headerBackground.fadeOut();
        }
      });

    }
  }

  $(window).scroll(function () {
    /*     $('.Page thead th').css('top',$('.MainContent_others').outerHeight());
         $('.MainContent_others').css('padding-top','20px');*/

  });

  $('.Menu_TopMenu').on('click', 'a', function () {
    $(this).blur();
  });



  /* caj: solves the * in mandatory 
  $('input.Mandatory, select.Mandatory').parent().addClass('ListInputMandatory');*/

});

/***/ }),

/***/ "./src/backoffice/styles.scss":
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Cannot find module 'var(--app-base-url)/Sapphire_Resources/img/upDownArrows.png'\n    at tryRunOrWebpackError (C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\HookWebpackError.js:114:9)\n    at __webpack_require_module__ (C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5578:12)\n    at __webpack_require__ (C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5525:18)\n    at C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5613:20\n    at symbolIterator (C:\\OutSystems\\Sapphire\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\OutSystems\\Sapphire\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\OutSystems\\Sapphire\\node_modules\\tapable\\lib\\HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5500:43\n    at symbolIterator (C:\\OutSystems\\Sapphire\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\OutSystems\\Sapphire\\node_modules\\neo-async\\async.js:2297:7)\n-- inner error --\nError: Cannot find module 'var(--app-base-url)/Sapphire_Resources/img/upDownArrows.png'\n    at webpackMissingModule (C:\\OutSystems\\Sapphire\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[1]!C:\\OutSystems\\Sapphire\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\OutSystems\\Sapphire\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!C:\\OutSystems\\Sapphire\\src\\backoffice\\styles.scss:12:113)\n    at Module.<anonymous> (C:\\OutSystems\\Sapphire\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[1]!C:\\OutSystems\\Sapphire\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\OutSystems\\Sapphire\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!C:\\OutSystems\\Sapphire\\src\\backoffice\\styles.scss:12:247)\n    at C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:551:10\n    at Hook.eval [as call] (eval at create (C:\\OutSystems\\Sapphire\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5580:39\n    at tryRunOrWebpackError (C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\HookWebpackError.js:109:7)\n    at __webpack_require_module__ (C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5578:12)\n    at __webpack_require__ (C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5525:18)\n    at C:\\OutSystems\\Sapphire\\node_modules\\webpack\\lib\\Compilation.js:5613:20\n    at symbolIterator (C:\\OutSystems\\Sapphire\\node_modules\\neo-async\\async.js:3485:9)\n\nGenerated code for C:\\OutSystems\\Sapphire\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[1]!C:\\OutSystems\\Sapphire\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[2]!C:\\OutSystems\\Sapphire\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[1].use[3]!C:\\OutSystems\\Sapphire\\src\\backoffice\\styles.scss\n 1 | __webpack_require__.r(__webpack_exports__);\n 2 | /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"C:\\\\OutSystems\\\\Sapphire\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\noSourceMaps.js\");\n 3 | /* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n 4 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"C:\\\\OutSystems\\\\Sapphire\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\api.js\");\n 5 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n 6 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"C:\\\\OutSystems\\\\Sapphire\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\getUrl.js\");\n 7 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n 8 | // Imports\n 9 | \n10 | \n11 | \n12 | var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'var(--app-base-url)/Sapphire_Resources/img/upDownArrows.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n13 | var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n14 | var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n15 | // Module\n16 | ___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n/* stylelint-disable CssSyntaxError */\\n/* Font base: 14px */\\n/* Header */\\n/*\\n  Reusable images should go here and be used as variables.\\n  References: you can then search easily for its usage using the variable name.\\n  Consistency: if you need to update the image, no need to go into several places: just change here.\\n*/\\n/*------------------------------------------------------------*/\\n/* 10.3 Sapphire Auxiliar Classes  ****************************/\\n/*------------------------------------------------------------*/\\na.Button.AddPatient:before,\\na.Button.Add:before,\\na.Button.Accounting:before,\\na.Button.Label:before,\\na.Button.Allergies:before,\\na.Button.Admissions:before,\\na.Button.Ambulatory:before,\\na.Button.Ampoule:before,\\na.Button.ApiTypeExternal:before,\\na.Button.ApiTypeInterEnvironment:before,\\na.Button.ApiTypeInternal:before,\\na.Button.ApiTypeSameEnvironment:before,\\na.Button.Appointment:before,\\na.Button.ArabicToEnglish:before,\\na.Button.Assessment:before,\\na.Button.AllUnits:before,\\na.Button.ArrowDrop:before,\\na.Button.Attention:before,\\na.Button.Barcode:before,\\na.Button.Biometrics:before,\\na.Button.Blood:before,\\na.Button.BloodBag:before,\\na.Button.BloodTransfusion:before,\\na.Button.BloodTubes:before,\\na.Button.BloodType:before,\\na.Button.Bottle:before,\\na.Button.AddNoteWhite:before,\\na.Button.Addendum:before,\\na.Button.AdmitPatient:before,\\na.Button.Administration:before,\\na.Button.AssignFile:before,\\na.Button.Attachment:before,\\na.Button.AvailabilityWhite:before,\\na.Button.Bed:before,\\na.Button.Calendar:before,\\na.Button.Cancel:before,\\na.Button.Change:before,\\na.Button.Changeleft:before,\\na.Button.Changeright:before,\\na.Button.Check:before,\\na.Button.CheckinWhite:before,\\na.Button.CheckoutWhite:before,\\na.Button.CKey:before,\\na.Button.ConfirmSchedule:before,\\na.Button.Copy:before,\\na.Button.CallNextTicket:before,\\na.Button.Capsule:before,\\na.Button.CashKD:before,\\na.Button.Camera:before,\\na.Button.Campaign:before,\\na.Button.ChangeDown:before,\\na.Button.ChangeLeft:before,\\na.Button.ChangeRight:before,\\na.Button.ChangeUp:before,\\na.Button.ChangeUpDown:before,\\na.Button.Checklist:before,\\na.Button.ChronicDiseases:before,\\na.Button.Circle:before,\\na.Button.CircleOpen:before,\\na.Button.CircleQuestionMark:before,\\na.Button.Clear:before,\\na.Button.Collaboration:before,\\na.Button.CollapseArrow:before,\\na.Button.Comment:before,\\na.Button.ConfigureMedicationLabel:before,\\na.Button.ConfigWardDashboard:before,\\na.Button.MedicalSupplies:before,\\na.Button.ControlledMedication:before,\\na.Button.CreateFromThis:before,\\na.Button.CreditCard:before,\\na.Button.Crutches:before,\\na.Button.CreatePatientWhite:before,\\na.Button.DischargePatient:before,\\na.Button.DoctorUnit:before,\\na.Button.Dashed:before,\\na.Button.Delete:before,\\na.Button.DiabetesChart:before,\\na.Button.Diagnosis:before,\\na.Button.Diet:before,\\na.Button.DiseasesInfectious:before,\\na.Button.Disposable:before,\\na.Button.Doctor:before,\\na.Button.DoctorNotes:before,\\na.Button.Documents:before,\\na.Button.Drag:before,\\na.Button.Drinker:before,\\na.Button.Drops:before,\\na.Button.Drugs:before,\\na.Button.Download:before,\\na.Button.Emergency:before,\\na.Button.End:before,\\na.Button.EmergencyPrescription:before,\\na.Button.EmergencyTreatment:before,\\na.Button.EmptyBed:before,\\na.Button.EndVisit:before,\\na.Button.EnglishToArabic:before,\\na.Button.Eraser:before,\\na.Button.Error:before,\\na.Button.Evening:before,\\na.Button.ExpandArrow:before,\\na.Button.Expired:before,\\na.Button.FamilyHistory:before,\\na.Button.FileTracking:before,\\na.Button.FindPatient:before,\\na.Button.FlowSheet:before,\\na.Button.FluidBalance:before,\\na.Button.FollowUp:before,\\na.Button.FontBalance:before,\\na.Button.FontCareplan:before,\\na.Button.FontDNR:before,\\na.Button.FontGoal:before,\\na.Button.FontIntervention:before,\\na.Button.FontPriority:before,\\na.Button.FontProblem:before,\\na.Button.Fontrefresh:before,\\na.Button.Forward:before,\\na.Button.FastForward:before,\\na.Button.FastAppointment:before,\\na.Button.Filter:before,\\na.Button.Given:before,\\na.Button.GotoPatientWhite:before,\\na.Button.GroupPatients:before,\\na.Button.Gel:before,\\na.Button.GeneralInfo:before,\\na.Button.Globe:before,\\na.Button.Glass:before,\\na.Button.GetRide:before,\\na.Button.GroupOfActions:before,\\na.Button.Habits:before,\\na.Button.HornWhite:before,\\na.Button.HandleDrag:before,\\na.Button.Home:before,\\na.Button.Hours:before,\\na.Button.IconTemp:before,\\na.Button.Image:before,\\na.Button.Inbox:before,\\na.Button.Injection:before,\\na.Button.Insurance:before,\\na.Button.InsuranceCoverage:before,\\na.Button.Investigation:before,\\na.Button.Invoice:before,\\na.Button.LockWhite:before,\\na.Button.LabExamination:before,\\na.Button.LastItemSeen:before,\\na.Button.Line:before,\\na.Button.lines_thickness:before,\\na.Button.LocationPin:before,\\na.Button.Lock:before,\\na.Button.Logout:before,\\na.Button.MachineTranslation:before,\\na.Button.Management:before,\\na.Button.MappingsAll:before,\\na.Button.MappingsMany:before,\\na.Button.MappingsOnlyOne:before,\\na.Button.Maximize:before,\\na.Button.MedCommittee:before,\\na.Button.MedicalEpisode:before,\\na.Button.MedicalFile:before,\\na.Button.MedicationReconciliation:before,\\na.Button.MedicineAdministration:before,\\na.Button.MedInteractions:before,\\na.Button.Message:before,\\na.Button.Minimize:before,\\na.Button.Morning:before,\\na.Button.MoveDown:before,\\na.Button.MoveUp:before,\\na.Button.MyInfo:before,\\na.Button.MedicalCommittee:before,\\na.Button.MergePatient:before,\\na.Button.Minus:before,\\na.Button.Next:before,\\na.Button.NotGiven:before,\\na.Button.Night:before,\\na.Button.NearExpiry:before,\\na.Button.NewBorn:before,\\na.Button.Nobed:before,\\na.Button.Note:before,\\na.Button.Notification:before,\\na.Button.NursingCarePlan:before,\\na.Button.OPD:before,\\na.Button.OPDFollowup:before,\\na.Button.Overdue:before,\\na.Button.OccupiedBed:before,\\na.Button.OpenNewWindow:before,\\na.Button.OrderSet:before,\\na.Button.OutOnPass:before,\\na.Button.PatientDiet:before,\\na.Button.PatientDirections:before,\\na.Button.Pencil:before,\\na.Button.PhysicalExam:before,\\na.Button.Powder:before,\\na.Button.Pregnancy:before,\\na.Button.PreMedCommittee:before,\\na.Button.PreMedCommitteeFollowUp:before,\\na.Button.Preparation:before,\\na.Button.Print:before,\\na.Button.Procedure:before,\\na.Button.PHFS:before,\\na.Button.Patient:before,\\na.Button.PatientHistory:before,\\na.Button.Pause:before,\\na.Button.Play:before,\\na.Button.Plus:before,\\na.Button.PreMedicalCommittee:before,\\na.Button.Prescription:before,\\na.Button.Previous:before,\\na.Button.Printer:before,\\na.Button.RateChange:before,\\na.Button.ReleaseBedWhite:before,\\na.Button.ReopenVisit:before,\\na.Button.Request:before,\\na.Button.Resume:before,\\na.Button.RoomWhite:before,\\na.Button.RecallTicket:before,\\na.Button.ReferralLetter:before,\\na.Button.Remarks:before,\\na.Button.Remove:before,\\na.Button.Reopen:before,\\na.Button.Reports:before,\\na.Button.ResetQueue:before,\\na.Button.ReturnStock:before,\\na.Button.Room:before,\\na.Button.SOPD:before,\\na.Button.Save:before,\\na.Button.Schedule:before,\\na.Button.ScheduleAdmission:before,\\na.Button.ScheduleAdmission:before,\\na.Button.ScheduleAppointment:before,\\na.Button.ScheduleProcedure:before,\\na.Button.ScheduleSurgery:before,\\na.Button.SearchWhite:before,\\na.Button.SendToDoctor:before,\\na.Button.SetAsValid:before,\\na.Button.Stocks:before,\\na.Button.Success:before,\\na.Button.Sachet:before,\\na.Button.SapphireLogo:before,\\na.Button.SapphireLogoVertical_v2:before,\\na.Button.SapphireSymbol:before,\\na.Button.Search:before,\\na.Button.Selection:before,\\na.Button.Serum:before,\\na.Button.ShapesIcon:before,\\na.Button.Share:before,\\na.Button.RescheduleAll:before,\\na.Button.Sickleave:before,\\na.Button.Similar:before,\\na.Button.Smartphone:before,\\na.Button.Smoker:before,\\na.Button.SocialServices:before,\\na.Button.SquareFillIcon:before,\\na.Button.SquareLineIcon:before,\\na.Button.Star:before,\\na.Button.StarFull:before,\\na.Button.StartVisit:before,\\na.Button.StatisticalData:before,\\na.Button.Suppository:before,\\na.Button.Surgery:before,\\na.Button.SurgeryManagement:before,\\na.Button.SurgeryReport:before,\\na.Button.Symptoms:before,\\na.Button.Tablet:before,\\na.Button.Tasks:before,\\na.Button.Telephone:before,\\na.Button.Text:before,\\na.Button.ToolbarArrowLeft:before,\\na.Button.ToolbarArrowRight:before,\\na.Button.TreatmentPlan:before,\\na.Button.Triage:before,\\na.Button.TrolleyEmpty:before,\\na.Button.TrolleyFull:before,\\na.Button.TemporaryBed:before,\\na.Button.TemporaryBedFull:before,\\na.Button.Ticket:before,\\na.Button.TransferPatient:before,\\na.Button.UnlockWhite:before,\\na.Button.UnmergePatient:before,\\na.Button.Unavailability:before,\\na.Button.Undo:before,\\na.Button.Unlock:before,\\na.Button.Unmerge:before,\\na.Button.Upload:before,\\na.Button.Validate:before,\\na.Button.VitalSigns:before,\\na.Button.View:before,\\na.Button.Wheelchair:before,\\na.Button.XRay:before,\\na.Button.WristBand:before,\\na.Button.Warning:before,\\na.Button.Temperature:before,\\na.Button.Bento:before,\\na.Button.Scales:before,\\na.Button.Sign:before,\\na.Button.BloodTubes2:before,\\na.Button.Attach:before,\\na.Button.Warning2:before,\\na.Button.Video:before {\\n  content: \\\"\\\\e686\\\";\\n  display: inline-block;\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1.1467992em;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: normal;\\n  margin-right: 0.5715rem;\\n  speak: none;\\n  text-transform: none;\\n  vertical-align: top;\\n}\\n\\na.Button.Administration:before {\\n  content: \\\"\\\\e606\\\";\\n}\\n\\na.Button.ApiTypeExternal:before {\\n  content: \\\"\\\\e96b\\\";\\n}\\n\\na.Button.ApiTypeInterEnvironment:before {\\n  content: \\\"\\\\e96c\\\";\\n}\\n\\na.Button.ApiTypeInternal:before {\\n  content: \\\"\\\\e96d\\\";\\n}\\n\\na.Button.ApiTypeSameEnvironment:before {\\n  content: \\\"\\\\e96e\\\";\\n}\\n\\na.Button.Label:before {\\n  content: \\\"\\\\e665\\\";\\n}\\n\\na.Button.Calendar:before {\\n  content: \\\"\\\\e60b\\\";\\n}\\n\\na.Button.Check:before {\\n  content: \\\"\\\\e692\\\";\\n}\\n\\na.Button.Printer:before {\\n  content: \\\"\\\\e63a\\\";\\n}\\n\\na.Button.RateChange:before {\\n  content: \\\"\\\\e966\\\";\\n}\\n\\na.Button.SendToDoctor:before {\\n  content: \\\"\\\\e61a\\\";\\n}\\n\\na.Button.SetAsValid:before {\\n  content: \\\"\\\\e64d\\\";\\n}\\n\\na.Button.ConfirmSchedule:before {\\n  content: \\\"\\\\e641\\\";\\n}\\n\\na.Button.Schedule:before {\\n  content: \\\"\\\\e641\\\";\\n}\\n\\na.Button.Emergency:before {\\n  background-color: #ff3e2d;\\n  border-radius: 50%;\\n  color: #fff !important;\\n  content: \\\"\\\\e61e\\\";\\n  font-size: 12px;\\n  height: 18px;\\n  line-height: 16px;\\n  margin-bottom: 4px;\\n  vertical-align: middle;\\n  width: 18px;\\n}\\n\\na.Button.RoomWhite:before {\\n  content: \\\"\\\\e631\\\";\\n}\\n\\na.Button.AssignFile:before {\\n  content: \\\"\\\\e652\\\";\\n}\\n\\na.Button.ReleaseBedWhite:before {\\n  content: \\\"\\\\e61f\\\";\\n}\\n\\na.Button.CheckoutWhite:before {\\n  content: \\\"\\\\e621\\\";\\n}\\n\\na.Button.CheckinWhite:before {\\n  content: \\\"\\\\e644\\\";\\n}\\n\\na.Button.GroupPatients:before {\\n  content: \\\"\\\\e628\\\";\\n}\\n\\na.Button.GotoPatientWhite:before {\\n  content: \\\"\\\\e633\\\";\\n}\\n\\na.Button.CreatePatientWhite:before {\\n  content: \\\"\\\\e605\\\";\\n}\\n\\na.Button.SearchWhite:before {\\n  content: \\\"\\\\e646\\\";\\n}\\n\\na.Button.HornWhite:before {\\n  content: \\\"\\\\e61e\\\";\\n}\\n\\na.Button.LockWhite:before {\\n  content: \\\"\\\\e65b\\\";\\n}\\n\\na.Button.UnlockWhite:before {\\n  content: \\\"\\\\e64c\\\";\\n}\\n\\na.Button.AvailabilityWhite:before {\\n  content: \\\"\\\\e641\\\";\\n}\\n\\na.Button.AddNoteWhite:before {\\n  content: \\\"\\\\e630\\\";\\n}\\n\\na.Button.ScheduleAppointment:before {\\n  content: \\\"\\\\e609\\\";\\n}\\n\\na.Button.ScheduleProcedure:before {\\n  content: \\\"\\\\e63b\\\";\\n}\\n\\na.Button.ScheduleSurgery:before {\\n  content: \\\"\\\\e648\\\";\\n}\\n\\na.Button.ScheduleAdmission:before {\\n  content: \\\"\\\\e653\\\";\\n}\\n\\na.Button.Invoice:before {\\n  content: \\\"\\\\e62c\\\";\\n}\\n\\na.Button.PHFS:before {\\n  content: \\\"\\\\e636\\\";\\n}\\n\\na.Button.MergePatient:before {\\n  content: \\\"\\\\e62f\\\";\\n}\\n\\na.Button.UnmergePatient:before {\\n  content: \\\"\\\\e65e\\\";\\n}\\n\\na.Button.AdmitPatient:before {\\n  content: \\\"\\\\e607\\\";\\n}\\n\\na.Button.DischargePatient:before {\\n  content: \\\"\\\\e618\\\";\\n}\\n\\na.Button.Prescription:before {\\n  content: \\\"\\\\e639\\\";\\n}\\n\\na.Button.Stocks:before {\\n  content: \\\"\\\\e651\\\";\\n}\\n\\na.Button.TransferPatient:before {\\n  content: \\\"\\\\e66c\\\";\\n}\\n\\na.Button.End:before {\\n  content: \\\"\\\\e620\\\";\\n}\\n\\na.Button.Pause:before {\\n  content: \\\"\\\\e635\\\";\\n}\\n\\na.Button.Cancel {\\n  color: #000;\\n}\\n\\na.Button.Cancel:before {\\n  color: #000;\\n  content: \\\"\\\\e60c\\\";\\n}\\n\\na.Button.Is_Default.Cancel:before,\\n.Button.Is_Default.Cancel:before {\\n  color: #fff;\\n  content: \\\"\\\\e60c\\\";\\n}\\n\\na.Button.Second.Cancel,\\na.Button.Second.Cancel:before {\\n  color: #fff;\\n}\\n\\na.Button.Second.Cancel:focus,\\na.Button.Second:hover.Cancel:before,\\na.Button.Second:focus.Cancel:before {\\n  color: #333;\\n}\\n\\na.Button.Add:before {\\n  content: \\\"\\\\e604\\\";\\n}\\n\\na.Button.Download:before {\\n  content: \\\"\\\\e644\\\";\\n  margin-top: -1px;\\n  transform: rotateZ(90deg);\\n}\\n\\na.Button.Previous:before {\\n  content: \\\"\\\\e610\\\";\\n  margin-left: -10px;\\n  transform: rotateZ(90deg);\\n}\\n\\na.Button.Next:before {\\n  content: \\\"\\\\e611\\\";\\n  float: right;\\n  margin-right: 0;\\n  transform: rotateZ(90deg);\\n}\\n\\na.Button.Save:before {\\n  content: \\\"\\\\e640\\\";\\n}\\n\\na.Button.Warning:before {\\n  content: \\\"\\\\e64e\\\";\\n}\\n\\na.Button.Copy:before {\\n  content: \\\"\\\\e615\\\";\\n}\\n\\na.Button.Change:before {\\n  content: \\\"\\\\e60f\\\";\\n}\\n\\na.Button.Filter:before {\\n  content: \\\"\\\\e67a\\\";\\n}\\n\\na.Button.FastAppointment:before {\\n  content: \\\"\\\\e676\\\";\\n}\\n\\na.Button.ReopenVisit:before {\\n  content: \\\"\\\\e678\\\";\\n}\\n\\na.Button.Plus:before {\\n  content: \\\"\\\\e698\\\";\\n}\\n\\na.Button.Minus:before {\\n  content: \\\"\\\\e68f\\\";\\n  font-size: 24px;\\n}\\n\\na.Button.Habits:before {\\n  content: \\\"\\\\e699\\\";\\n}\\n\\na.Button.Investigation:before {\\n  content: \\\"\\\\e69a\\\";\\n}\\n\\na.Button.OPD:before {\\n  content: \\\"\\\\e69b\\\";\\n}\\n\\na.Button.Patient:before {\\n  content: \\\"\\\\e633\\\";\\n}\\n\\na.Button.PatientHistory:before {\\n  content: \\\"\\\\e69f\\\";\\n}\\n\\na.Button.Changeleft:before {\\n  content: \\\"\\\\e69c\\\";\\n}\\n\\na.Button.Changeright:before {\\n  content: \\\"\\\\e69d\\\";\\n}\\n\\na.Button.Play:before {\\n  content: \\\"\\\\e69e\\\";\\n}\\n\\na.Button.Bed:before {\\n  content: \\\"\\\\e6a0\\\";\\n}\\n\\na.Button.SOPD:before {\\n  content: \\\"\\\\e6a1\\\";\\n}\\n\\na.Button.OPDFollowup:before {\\n  content: \\\"\\\\e6a2\\\";\\n}\\n\\na.Button.ScheduleAdmission:before {\\n  content: \\\"\\\\e6a3\\\";\\n}\\n\\na.Button.Resume:before {\\n  content: \\\"\\\\e65a\\\";\\n}\\n\\na.Button.Request:before {\\n  content: \\\"\\\\e66b\\\";\\n}\\n\\na.Button.TemporaryBed:before {\\n  content: \\\"\\\\e915\\\";\\n}\\n\\na.Button.PreMedicalCommittee:before {\\n  content: \\\"\\\\e90d\\\";\\n}\\n\\na.Button.TemporaryBedFull:before {\\n  content: \\\"\\\\e90f\\\";\\n}\\n\\na.Button.MedicalCommittee:before {\\n  content: \\\"\\\\e91a\\\";\\n}\\n\\na.Button.Addendum:before {\\n  content: \\\"\\\\e91d\\\";\\n}\\n\\na.Button.Ticket:before {\\n  content: \\\"\\\\e91e\\\";\\n}\\n\\na.Button.View:before {\\n  content: \\\"\\\\e91f\\\";\\n}\\n\\na.Button.Given:before {\\n  content: \\\"\\\\e920\\\";\\n}\\n\\na.Button.NotGiven:before {\\n  content: \\\"\\\\e921\\\";\\n}\\n\\na.Button.Overdue:before {\\n  content: \\\"\\\\e922\\\";\\n}\\n\\na.Button.DoctorUnit:before {\\n  content: \\\"\\\\e657\\\";\\n}\\n\\na.Button.Success:before {\\n  content: \\\"\\\\e646\\\";\\n}\\n\\na.Button.Accounting:before {\\n  content: \\\"\\\\e603\\\";\\n}\\n\\na.Button.Admissions:before {\\n  content: \\\"\\\\e653\\\";\\n}\\n\\na.Button.Allergies:before {\\n  content: \\\"\\\\e659\\\";\\n}\\n\\na.Button.Ambulatory:before {\\n  content: \\\"\\\\e90e\\\";\\n}\\n\\na.Button.Ampoule:before {\\n  content: \\\"\\\\e608\\\";\\n}\\n\\na.Button.Appointment:before {\\n  content: \\\"\\\\e609\\\";\\n}\\n\\na.Button.ArabicToEnglish:before {\\n  content: \\\"\\\\e601\\\";\\n}\\n\\na.Button.Assessment:before {\\n  content: \\\"\\\\e679\\\";\\n}\\n\\na.Button.AddPatient:before {\\n  content: \\\"\\\\e605\\\";\\n}\\n\\na.Button.ArabicToEnglish:before {\\n  content: \\\"\\\\e601\\\";\\n}\\n\\na.Button.AllUnits:before {\\n  content: \\\"\\\\e695\\\";\\n}\\n\\na.Button.Attention:before {\\n  content: \\\"\\\\e939\\\";\\n}\\n\\na.Button.Barcode:before {\\n  content: \\\"\\\\e672\\\";\\n}\\n\\na.Button.Biometrics:before {\\n  content: \\\"\\\\e667\\\";\\n}\\n\\na.Button.Blood:before {\\n  content: \\\"\\\\e685\\\";\\n}\\n\\na.Button.BloodBag:before {\\n  content: \\\"\\\\e943\\\";\\n}\\n\\na.Button.BloodTransfusion:before {\\n  content: \\\"\\\\e90a\\\";\\n}\\n\\na.Button.BloodTubes:before {\\n  content: \\\"\\\\e944\\\";\\n}\\n\\na.Button.BloodType:before {\\n  content: \\\"\\\\e677\\\";\\n}\\n\\na.Button.Bottle:before {\\n  content: \\\"\\\\e60a\\\";\\n}\\n\\na.Button.CallNextTicket:before {\\n  content: \\\"\\\\e68c\\\";\\n}\\n\\na.Button.Capsule:before {\\n  content: \\\"\\\\e60d\\\";\\n}\\n\\na.Button.CashKD:before {\\n  content: \\\"\\\\e60e\\\";\\n}\\n\\na.Button.Camera:before {\\n  content: \\\"\\\\e670\\\";\\n}\\n\\na.Button.Campaign:before {\\n  content: \\\"\\\\e93e\\\";\\n}\\n\\na.Button.ChangeDown:before {\\n  content: \\\"\\\\e610\\\";\\n}\\n\\na.Button.ChangeLeft:before {\\n  content: \\\"\\\\e69c\\\";\\n}\\n\\na.Button.ChangeRight:before {\\n  content: \\\"\\\\e69d\\\";\\n}\\n\\na.Button.ChangeUp:before {\\n  content: \\\"\\\\e611\\\";\\n}\\n\\na.Button.ChangeUpDown:before {\\n  content: \\\"\\\\e612\\\";\\n}\\n\\na.Button.Checklist:before {\\n  content: \\\"\\\\e66d\\\";\\n}\\n\\na.Button.ChronicDiseases:before {\\n  content: \\\"\\\\e68e\\\";\\n}\\n\\na.Button.Circle:before {\\n  content: \\\"\\\\e68a\\\";\\n}\\n\\na.Button.CircleOpen:before {\\n  content: \\\"\\\\e92a\\\";\\n}\\n\\na.Button.CircleQuestionMark {\\n  position: relative;\\n}\\n\\na.Button.CircleQuestionMark:before {\\n  content: \\\"\\\\e68a\\\";\\n}\\n\\na.Button.CircleQuestionMark:after {\\n  bottom: 0%;\\n  color: #fff;\\n  content: \\\"?\\\";\\n  font-family: \\\"globeregular\\\";\\n  left: 10%;\\n  position: absolute;\\n}\\n\\na.Button.Clear:before {\\n  content: \\\"\\\\e604\\\";\\n  display: inline-block;\\n  transform: rotateZ(45deg);\\n}\\n\\na.Button.Collaboration:before {\\n  content: \\\"\\\\e613\\\";\\n}\\n\\na.Button.CollapseArrow:before {\\n  content: \\\"\\\\e65f\\\";\\n  display: inline-block;\\n  transform: rotateX(180deg);\\n}\\n\\na.Button.Comment:before {\\n  content: \\\"\\\\e614\\\";\\n}\\n\\na.Button.ConfigureMedicationLabel:before {\\n  content: \\\"\\\\e67f\\\";\\n}\\n\\na.Button.ConfigWardDashboard:before {\\n  content: \\\"\\\\e91c\\\";\\n}\\n\\na.Button.MedicalSupplies:before {\\n  content: \\\"\\\\e964\\\";\\n}\\n\\na.Button.ControlledMedication:before {\\n  content: \\\"\\\\e95f\\\";\\n}\\n\\na.Button.CreateFromThis:before {\\n  content: \\\"\\\\e615\\\";\\n}\\n\\na.Button.CreditCard:before {\\n  content: \\\"\\\\e616\\\";\\n}\\n\\na.Button.Crutches:before {\\n  content: \\\"\\\\e965\\\";\\n}\\n\\na.Button.Dashed:before {\\n  content: \\\"\\\\e92b\\\";\\n}\\n\\na.Button.Delete:before {\\n  content: \\\"\\\\e617\\\";\\n}\\n\\na.Button.DiabetesChart:before {\\n  content: \\\"\\\\e909\\\";\\n}\\n\\na.Button.Diagnosis:before {\\n  content: \\\"\\\\e661\\\";\\n}\\n\\na.Button.Diet:before {\\n  content: \\\"\\\\e696\\\";\\n}\\n\\na.Button.DiseasesInfectious:before {\\n  content: \\\"\\\\e658\\\";\\n}\\n\\na.Button.Disposable:before {\\n  content: \\\"\\\\e619\\\";\\n}\\n\\na.Button.Doctor:before {\\n  content: \\\"\\\\e61a\\\";\\n}\\n\\na.Button.DoctorNotes:before {\\n  content: \\\"\\\\e61b\\\";\\n}\\n\\na.Button.Documents:before {\\n  content: \\\"\\\\e61c\\\";\\n}\\n\\na.Button.Drag:before {\\n  content: \\\"\\\\e919\\\";\\n}\\n\\na.Button.Drinker:before {\\n  content: \\\"\\\\e662\\\";\\n}\\n\\na.Button.Drops:before {\\n  content: \\\"\\\\e61d\\\";\\n}\\n\\na.Button.Drugs:before {\\n  content: \\\"\\\\e660\\\";\\n}\\n\\na.Button.EmergencyPrescription:before {\\n  content: \\\"\\\\e689\\\";\\n}\\n\\na.Button.EmergencyTreatment:before {\\n  content: \\\"\\\\e688\\\";\\n}\\n\\na.Button.EmptyBed:before {\\n  content: \\\"\\\\e61f\\\";\\n}\\n\\na.Button.EndVisit:before {\\n  content: \\\"\\\\e621\\\";\\n}\\n\\na.Button.EnglishToArabic:before {\\n  content: \\\"\\\\e602\\\";\\n}\\n\\na.Button.Eraser:before {\\n  content: \\\"\\\\e924\\\";\\n}\\n\\na.Button.Error:before {\\n  content: \\\"\\\\e622\\\";\\n}\\n\\na.Button.Evening:before {\\n  content: \\\"\\\\e903\\\";\\n}\\n\\na.Button.ExpandArrow:before {\\n  content: \\\"\\\\e65f\\\";\\n}\\n\\na.Button.Expired:before {\\n  content: \\\"\\\\e960\\\";\\n}\\n\\na.Button.FastForward:before {\\n  content: \\\"\\\\e65f\\\";\\n  transform: rotate(-90deg);\\n}\\n\\na.Button.FamilyHistory:before {\\n  content: \\\"\\\\e68d\\\";\\n}\\n\\na.Button.FileTracking:before {\\n  content: \\\"\\\\e623\\\";\\n}\\n\\na.Button.FindPatient:before {\\n  content: \\\"\\\\e64b\\\";\\n}\\n\\na.Button.FlowSheet:before {\\n  content: \\\"\\\\e908\\\";\\n}\\n\\na.Button.FluidBalance:before {\\n  content: \\\"\\\\e901\\\";\\n}\\n\\na.Button.FollowUp:before {\\n  content: \\\"\\\\e684\\\";\\n}\\n\\na.Button.FontBalance:before {\\n  content: \\\"\\\\e936\\\";\\n}\\n\\na.Button.FontCareplan:before {\\n  content: \\\"\\\\e93c\\\";\\n}\\n\\na.Button.FontDNR:before {\\n  content: \\\"\\\\e937\\\";\\n}\\n\\na.Button.FontGoal:before {\\n  content: \\\"\\\\e93f\\\";\\n}\\n\\na.Button.FontIntervention:before {\\n  content: \\\"\\\\e93a\\\";\\n}\\n\\na.Button.FontPriority:before {\\n  content: \\\"\\\\e93d\\\";\\n}\\n\\na.Button.FontProblem:before {\\n  content: \\\"\\\\e93b\\\";\\n}\\n\\na.Button.Fontrefresh:before {\\n  content: \\\"\\\\e938\\\";\\n}\\n\\na.Button.Forward:before {\\n  content: \\\"\\\\e912\\\";\\n}\\n\\na.Button.Gel:before {\\n  content: \\\"\\\\e624\\\";\\n}\\n\\na.Button.GetRide:before {\\n  content: \\\"\\\\e945\\\";\\n}\\n\\na.Button.GeneralInfo:before {\\n  content: \\\"\\\\e625\\\";\\n}\\n\\na.Button.Glass:before {\\n  content: \\\"\\\\e626\\\";\\n}\\n\\na.Button.Globe:before {\\n  content: \\\"\\\\e968\\\";\\n}\\n\\na.Button.GroupOfActions:before {\\n  content: \\\"\\\\e627\\\";\\n}\\n\\na.Button.HandleDrag:before {\\n  content: \\\"\\\\e656\\\";\\n}\\n\\na.Button.Home:before {\\n  content: \\\"\\\\e629\\\";\\n}\\n\\na.Button.Hours:before {\\n  content: \\\"\\\\e62a\\\";\\n}\\n\\na.Button.IconTemp:before {\\n  content: \\\"\\\\e686\\\";\\n}\\n\\na.Button.Image:before {\\n  content: \\\"\\\\e92d\\\";\\n}\\n\\na.Button.Inbox:before {\\n  content: \\\"\\\\e671\\\";\\n}\\n\\na.Button.Injection:before {\\n  content: \\\"\\\\e62b\\\";\\n}\\n\\na.Button.Insurance:before {\\n  content: \\\"\\\\e923\\\";\\n}\\n\\na.Button.InsuranceCoverage:before {\\n  content: \\\"\\\\e961\\\";\\n}\\n\\na.Button.LabExamination:before {\\n  content: \\\"\\\\e668\\\";\\n}\\n\\na.Button.LastItemSeen:before {\\n  content: \\\"\\\\e600\\\";\\n}\\n\\na.Button.Line:before {\\n  content: \\\"\\\\e92e\\\";\\n}\\n\\na.Button.lines_thickness:before {\\n  content: \\\"\\\\e935\\\";\\n}\\n\\na.Button.LocationPin:before {\\n  content: \\\"\\\\e941\\\";\\n}\\n\\na.Button.Lock:before {\\n  content: \\\"\\\\e65b\\\";\\n}\\n\\na.Button.Logout:before {\\n  content: \\\"\\\\e62d\\\";\\n}\\n\\na.Button.MachineTranslation:before {\\n  content: \\\"\\\\e96a\\\";\\n}\\n\\na.Button.Management:before {\\n  content: \\\"\\\\e62e\\\";\\n}\\n\\na.Button.MappingsAll:before {\\n  content: \\\"\\\\e95c\\\";\\n}\\n\\na.Button.MappingsMany:before {\\n  content: \\\"\\\\e95d\\\";\\n}\\n\\na.Button.MappingsOnlyOne:before {\\n  content: \\\"\\\\e95e\\\";\\n}\\n\\na.Button.Maximize:before {\\n  content: \\\"\\\\e694\\\";\\n}\\n\\na.Button.MedCommittee:before {\\n  content: \\\"\\\\e91a\\\";\\n}\\n\\na.Button.MedicalEpisode:before {\\n  content: \\\"\\\\e67e\\\";\\n}\\n\\na.Button.MedicalFile:before {\\n  content: \\\"\\\\e652\\\";\\n}\\n\\na.Button.MedicationReconciliation:before {\\n  content: \\\"\\\\e680\\\";\\n}\\n\\na.Button.MedicineAdministration:before {\\n  content: \\\"\\\\e66e\\\";\\n}\\n\\na.Button.Message:before {\\n  content: \\\"\\\\e66f\\\";\\n}\\n\\na.Button.Minimize:before {\\n  content: \\\"\\\\e693\\\";\\n}\\n\\na.Button.Morning:before {\\n  content: \\\"\\\\e905\\\";\\n}\\n\\na.Button.MoveDown:before {\\n  content: \\\"\\\\e914\\\";\\n}\\n\\na.Button.MoveUp:before {\\n  content: \\\"\\\\e913\\\";\\n}\\n\\na.Button.MyInfo:before {\\n  content: \\\"\\\\e673\\\";\\n}\\n\\na.Button.Night:before {\\n  content: \\\"\\\\e904\\\";\\n}\\n\\na.Button.Nobed:before {\\n  content: \\\"\\\\e940\\\";\\n}\\n\\na.Button.NearExpiry:before {\\n  content: \\\"\\\\e962\\\";\\n}\\n\\na.Button.NewBorn:before {\\n  content: \\\"\\\\e946\\\";\\n}\\n\\na.Button.Note:before {\\n  content: \\\"\\\\e630\\\";\\n}\\n\\na.Button.Notification:before {\\n  content: \\\"\\\\e650\\\";\\n}\\n\\na.Button.NursingCarePlan:before {\\n  content: \\\"\\\\e900\\\";\\n}\\n\\na.Button.OccupiedBed:before {\\n  content: \\\"\\\\e631\\\";\\n}\\n\\na.Button.OpenNewWindow:before {\\n  content: \\\"\\\\e90b\\\";\\n}\\n\\na.Button.OrderSet:before {\\n  content: \\\"\\\\e683\\\";\\n}\\n\\na.Button.OutOnPass:before {\\n  content: \\\"\\\\e632\\\";\\n}\\n\\na.Button.PatientDiet:before {\\n  content: \\\"\\\\e696\\\";\\n}\\n\\na.Button.PatientDirections:before {\\n  content: \\\"\\\\e634\\\";\\n}\\n\\na.Button.Pencil:before {\\n  content: \\\"\\\\e925\\\";\\n}\\n\\na.Button.PhysicalExam:before {\\n  content: \\\"\\\\e90c\\\";\\n}\\n\\na.Button.Powder:before {\\n  content: \\\"\\\\e637\\\";\\n}\\n\\na.Button.Pregnancy:before {\\n  content: \\\"\\\\e929\\\";\\n}\\n\\na.Button.PreMedCommittee:before {\\n  content: \\\"\\\\e90d\\\";\\n}\\n\\na.Button.PreMedCommitteeFollowUp:before {\\n  content: \\\"\\\\e91b\\\";\\n}\\n\\na.Button.Preparation:before {\\n  content: \\\"\\\\e638\\\";\\n}\\n\\na.Button.Print:before {\\n  content: \\\"\\\\e63a\\\";\\n}\\n\\na.Button.Procedure:before {\\n  content: \\\"\\\\e63b\\\";\\n}\\n\\na.Button.RecallTicket:before {\\n  content: \\\"\\\\e68b\\\";\\n}\\n\\na.Button.ReferralLetter:before {\\n  content: \\\"\\\\e682\\\";\\n}\\n\\na.Button.Remarks:before {\\n  content: \\\"\\\\e65d\\\";\\n}\\n\\na.Button.Remove:before {\\n  content: \\\"\\\\e63c\\\";\\n}\\n\\na.Button.Reopen:before {\\n  content: \\\"\\\\e678\\\";\\n}\\n\\na.Button.Reports:before {\\n  content: \\\"\\\\e63d\\\";\\n}\\n\\na.Button.ResetQueue:before {\\n  content: \\\"\\\\e687\\\";\\n}\\n\\na.Button.ReturnStock:before {\\n  content: \\\"\\\\e910\\\";\\n}\\n\\na.Button.Room:before {\\n  content: \\\"\\\\e63e\\\";\\n}\\n\\na.Button.Sachet:before {\\n  content: \\\"\\\\e63f\\\";\\n}\\n\\na.Button.SapphireLogo:before {\\n  content: \\\"\\\\e94c\\\";\\n}\\n\\na.Button.SapphireLogoVertical_v2:before {\\n  content: \\\"\\\\e94b\\\";\\n}\\n\\na.Button.SapphireSymbol:before {\\n  content: \\\"\\\\e655\\\";\\n}\\n\\na.Button.Search:before {\\n  content: \\\"\\\\e690\\\";\\n}\\n\\na.Button.Selection:before {\\n  content: \\\"\\\\e92f\\\";\\n}\\n\\na.Button.Serum:before {\\n  content: \\\"\\\\e642\\\";\\n}\\n\\na.Button.ShapesIcon:before {\\n  content: \\\"\\\\e932\\\";\\n}\\n\\na.Button.Share:before {\\n  content: \\\"\\\\e902\\\";\\n}\\n\\na.Button.RescheduleAll:before {\\n  content: \\\"\\\\e963\\\";\\n}\\n\\na.Button.Sickleave:before {\\n  content: \\\"\\\\e681\\\";\\n}\\n\\na.Button.Similar:before {\\n  content: \\\"\\\\e664\\\";\\n}\\n\\na.Button.Smartphone:before {\\n  content: \\\"\\\\e67b\\\";\\n}\\n\\na.Button.Smoker:before {\\n  content: \\\"\\\\e65c\\\";\\n}\\n\\na.Button.SocialServices:before {\\n  content: \\\"\\\\e643\\\";\\n}\\n\\na.Button.SquareFillIcon:before {\\n  content: \\\"\\\\e933\\\";\\n}\\n\\na.Button.SquareLineIcon:before {\\n  content: \\\"\\\\e934\\\";\\n}\\n\\na.Button.Star:before {\\n  content: \\\"\\\\e691\\\";\\n}\\n\\na.Button.StarFull:before {\\n  content: \\\"\\\\e697\\\";\\n}\\n\\na.Button.StartVisit:before {\\n  content: \\\"\\\\e644\\\";\\n}\\n\\na.Button.StatisticalData:before {\\n  content: \\\"\\\\e645\\\";\\n}\\n\\na.Button.Suppository:before {\\n  content: \\\"\\\\e647\\\";\\n}\\n\\na.Button.Surgery:before {\\n  content: \\\"\\\\e648\\\";\\n}\\n\\na.Button.SurgeryManagement:before {\\n  content: \\\"\\\\e64f\\\";\\n}\\n\\na.Button.SurgeryReport:before {\\n  content: \\\"\\\\e67d\\\";\\n}\\n\\na.Button.Symptoms:before {\\n  content: \\\"\\\\e669\\\";\\n}\\n\\na.Button.Tablet:before {\\n  content: \\\"\\\\e649\\\";\\n}\\n\\na.Button.Tasks:before {\\n  content: \\\"\\\\e64a\\\";\\n}\\n\\na.Button.Telephone:before {\\n  content: \\\"\\\\e67c\\\";\\n}\\n\\na.Button.Text:before {\\n  content: \\\"\\\\e930\\\";\\n}\\n\\na.Button.ToolbarArrowLeft:before {\\n  content: \\\"\\\\e906\\\";\\n}\\n\\na.Button.ToolbarArrowRight:before {\\n  content: \\\"\\\\e907\\\";\\n}\\n\\na.Button.TreatmentPlan:before {\\n  content: \\\"\\\\e674\\\";\\n}\\n\\na.Button.Triage:before {\\n  content: \\\"\\\\e911\\\";\\n}\\n\\na.Button.TrolleyEmpty:before {\\n  content: \\\"\\\\e917\\\";\\n}\\n\\na.Button.TrolleyFull:before {\\n  content: \\\"\\\\e916\\\";\\n}\\n\\na.Button.Unavailability:before {\\n  content: \\\"\\\\e663\\\";\\n}\\n\\na.Button.Undo:before {\\n  content: \\\"\\\\e926\\\";\\n}\\n\\na.Button.Unlock:before {\\n  content: \\\"\\\\e64c\\\";\\n}\\n\\na.Button.Unmerge:before {\\n  content: \\\"\\\\e65e\\\";\\n}\\n\\na.Button.Upload:before {\\n  content: \\\"\\\\e931\\\";\\n}\\n\\na.Button.Validate:before {\\n  content: \\\"\\\\e64d\\\";\\n}\\n\\na.Button.VitalSigns:before {\\n  content: \\\"\\\\e675\\\";\\n}\\n\\na.Button.Wheelchair:before {\\n  content: \\\"\\\\e918\\\";\\n}\\n\\na.Button.WristBand:before {\\n  content: \\\"\\\\e947\\\";\\n}\\n\\na.Button.XRay:before {\\n  content: \\\"\\\\e66a\\\";\\n}\\n\\na.Button.MedInteractions:before {\\n  content: \\\"\\\\e948\\\";\\n}\\n\\na.Button.CKey:before {\\n  content: \\\"\\\\e949\\\";\\n}\\n\\na.Button.ArrowDrop:before {\\n  content: \\\"\\\\e94a\\\";\\n}\\n\\na.Button.Temperature:before {\\n  content: \\\"\\\\e94d\\\";\\n}\\n\\na.Button.Bento:before {\\n  content: \\\"\\\\e94e\\\";\\n}\\n\\na.Button.Scales:before {\\n  content: \\\"\\\\e94f\\\";\\n}\\n\\na.Button.Sign:before {\\n  content: \\\"\\\\e950\\\";\\n}\\n\\na.Button.BloodTubes2:before {\\n  content: \\\"\\\\e942\\\";\\n}\\n\\na.Button.Attach:before {\\n  content: \\\"\\\\e951\\\";\\n}\\n\\na.Button.Warning2:before {\\n  content: \\\"\\\\e952\\\";\\n}\\n\\na.Button.Video:before {\\n  content: \\\"\\\\e953\\\";\\n}\\n\\na.Button.BloodPressure:before {\\n  content: \\\"\\\\e954\\\";\\n}\\n\\na.Button.CarryingInfants:before {\\n  content: \\\"\\\\e955\\\";\\n}\\n\\na.Button.Disable:before {\\n  content: \\\"\\\\e956\\\";\\n}\\n\\na.Button.Elderly:before {\\n  content: \\\"\\\\e957\\\";\\n}\\n\\na.Button.MentalDisorder:before {\\n  content: \\\"\\\\e958\\\";\\n}\\n\\na.Button.O2Saturation:before {\\n  content: \\\"\\\\e959\\\";\\n}\\n\\na.Button.RespiratoryRate:before {\\n  content: \\\"\\\\e95a\\\";\\n}\\n\\n.AR a.Button.Add:before,\\n.AR a.Button.AddPatient:before,\\n.AR a.Button.Attention:before,\\n.AR a.Button.AddNoteWhite:before,\\n.AR a.Button.Addendum:before,\\n.AR a.Button.Administration:before,\\n.AR a.Button.Accounting:before,\\n.AR a.Button.ArrowDrop:before,\\n.AR a.Button.BloodBag:before,\\n.AR a.Button.AdmitPatient:before,\\n.AR a.Button.AssignFile:before,\\n.AR a.Button.Attachment:before,\\n.AR a.Button.AvailabilityWhite:before,\\n.AR a.Button.accounting:before,\\n.AR a.Button.Allergies:before,\\n.AR a.Button.Admissions:before,\\n.AR a.Button.Ambulatory:before,\\n.AR a.Button.ApiTypeExternal:before,\\n.AR a.Button.ApiTypeInterEnvironment:before,\\n.AR a.Button.ApiTypeInternal:before,\\n.AR a.Button.ApiTypeSameEnvironment:before,\\n.AR a.Button.Ampoule:before,\\n.AR a.Button.Appointment:before,\\n.AR a.Button.ArabicToEnglish:before,\\n.AR a.Button.Assessment:before,\\n.AR a.Button.AllUnits:before,\\n.AR a.Button.Barcode:before,\\n.AR a.Button.Label:before,\\n.AR a.Button.Biometrics:before,\\n.AR a.Button.Blood:before,\\n.AR a.Button.BloodTransfusion:before,\\n.AR a.Button.BloodTubes:before,\\n.AR a.Button.BloodType:before,\\n.AR a.Button.Bottle:before,\\n.AR a.Button.Bed:before,\\n.AR a.Button.Calendar:before,\\n.AR a.Button.Cancel:before,\\n.AR a.Button.Change:before,\\n.AR a.Button.Changeleft:before,\\n.AR a.Button.Changeright:before,\\n.AR a.Button.Check:before,\\n.AR a.Button.CheckinWhite:before,\\n.AR a.Button.CheckoutWhite:before,\\n.AR a.Button.CKey:before,\\n.AR a.Button.ConfirmSchedule:before,\\n.AR a.Button.ControlledMedication:before,\\n.AR a.Button.Copy:before,\\n.AR a.Button.CreatePatientWhite:before,\\n.AR a.Button.CallNextTicket:before,\\n.AR a.Button.Capsule:before,\\n.AR a.Button.CashKD:before,\\n.AR a.Button.Camera:before,\\n.AR a.Button.Campaign:before,\\n.AR a.Button.ChangeDown:before,\\n.AR a.Button.ChangeLeft:before,\\n.AR a.Button.ChangeRight:before,\\n.AR a.Button.ChangeUp:before,\\n.AR a.Button.ChangeUpDown:before,\\n.AR a.Button.Checklist:before,\\n.AR a.Button.ChronicDiseases:before,\\n.AR a.Button.Circle:before,\\n.AR a.Button.CircleOpen:before,\\n.AR a.Button.CircleQuestionMark:before,\\n.AR a.Button.Clear:before,\\n.AR a.Button.Collaboration:before,\\n.AR a.Button.CollapseArrow:before,\\n.AR a.Button.Comment:before,\\n.AR a.Button.ConfigureMedicationLabel:before,\\n.AR a.Button.ConfigWardDashboard:before,\\n.AR a.Button.MedicalSupplies:before,\\n.AR a.Button.CreateFromThis:before,\\n.AR a.Button.CreditCard:before,\\n.AR a.Button.Crutches:before,\\n.AR a.Button.DischargePatient:before,\\n.AR a.Button.Download:before,\\n.AR a.Button.Dashed:before,\\n.AR a.Button.Delete:before,\\n.AR a.Button.DiabetesChart:before,\\n.AR a.Button.Diagnosis:before,\\n.AR a.Button.Diet:before,\\n.AR a.Button.DiseasesInfectious:before,\\n.AR a.Button.Disposable:before,\\n.AR a.Button.Doctor:before,\\n.AR a.Button.DoctorNotes:before,\\n.AR a.Button.Documents:before,\\n.AR a.Button.Drag:before,\\n.AR a.Button.Drinker:before,\\n.AR a.Button.Drops:before,\\n.AR a.Button.Drugs:before,\\n.AR a.Button.Emergency:before,\\n.AR a.Button.End:before,\\n.AR a.Button.EmergencyPrescription:before,\\n.AR a.Button.EmergencyTreatment:before,\\n.AR a.Button.EmptyBed:before,\\n.AR a.Button.EndVisit:before,\\n.AR a.Button.EnglishToArabic:before,\\n.AR a.Button.Eraser:before,\\n.AR a.Button.Error:before,\\n.AR a.Button.Evening:before,\\n.AR a.Button.ExpandArrow:before,\\n.AR a.Button.Expired:before,\\n.AR a.Button.FamilyHistory:before,\\n.AR a.Button.FileTracking:before,\\n.AR a.Button.FindPatient:before,\\n.AR a.Button.FlowSheet:before,\\n.AR a.Button.FluidBalance:before,\\n.AR a.Button.FollowUp:before,\\n.AR a.Button.FontBalance:before,\\n.AR a.Button.FontCareplan:before,\\n.AR a.Button.FontDNR:before,\\n.AR a.Button.FontGoal:before,\\n.AR a.Button.FontIntervention:before,\\n.AR a.Button.FontPriority:before,\\n.AR a.Button.FontProblem:before,\\n.AR a.Button.Fontrefresh:before,\\n.AR a.Button.Forward:before,\\n.AR a.Button.FastAppointment:before,\\n.AR a.Button.Filter:before,\\n.AR a.Button.Given:before,\\n.AR a.Button.GroupPatients:before,\\n.AR a.Button.GotoPatientWhite:before,\\n.AR a.Button.Gel:before,\\n.AR a.Button.GeneralInfo:before,\\n.AR a.Button.Globe:before,\\n.AR a.Button.Glass:before,\\n.AR a.Button.GetRide:before,\\n.AR a.Button.GroupOfActions:before,\\n.AR a.Button.Habits:before,\\n.AR a.Button.HornWhite:before,\\n.AR a.Button.HandleDrag:before,\\n.AR a.Button.Home:before,\\n.AR a.Button.Hours:before,\\n.AR a.Button.IconTemp:before,\\n.AR a.Button.Image:before,\\n.AR a.Button.Inbox:before,\\n.AR a.Button.Injection:before,\\n.AR a.Button.Insurance:before,\\n.AR a.Button.InsuranceCoverage:before,\\n.AR a.Button.Investigation:before,\\n.AR a.Button.Invoice:before,\\n.AR a.Button.LockWhite:before,\\n.AR a.Button.LabExamination:before,\\n.AR a.Button.LastItemSeen:before,\\n.AR a.Button.Line:before,\\n.AR a.Button.lines_thickness:before,\\n.AR a.Button.LocationPin:before,\\n.AR a.Button.Lock:before,\\n.AR a.Button.Logout:before,\\n.AR a.Button.MachineTranslation:before,\\n.AR a.Button.Management:before,\\n.AR a.Button.MappingsAll:before,\\n.AR a.Button.MappingsMany:before,\\n.AR a.Button.MappingsOnlyOne:before,\\n.AR a.Button.Maximize:before,\\n.AR a.Button.MedCommittee:before,\\n.AR a.Button.MedicalEpisode:before,\\n.AR a.Button.MedicalFile:before,\\n.AR a.Button.MedicationReconciliation:before,\\n.AR a.Button.MedicineAdministration:before,\\n.AR a.Button.Message:before,\\n.AR a.Button.Minimize:before,\\n.AR a.Button.Morning:before,\\n.AR a.Button.MoveDown:before,\\n.AR a.Button.MoveUp:before,\\n.AR a.Button.MyInfo:before,\\n.AR a.Button.MedicalCommittee:before,\\n.AR a.Button.MergePatient:before,\\n.AR a.Button.Minus:before,\\n.AR a.Button.NotGiven:before,\\n.AR a.Button.Night:before,\\n.AR a.Button.Nobed:before,\\n.AR a.Button.NearExpiry:before,\\n.AR a.Button.NewBorn:before,\\n.AR a.Button.Note:before,\\n.AR a.Button.Notification:before,\\n.AR a.Button.NursingCarePlan:before,\\n.AR a.Button.OPD:before,\\n.AR a.Button.OPDFollowup:before,\\n.AR a.Button.Overdue:before,\\n.AR a.Button.OccupiedBed:before,\\n.AR a.Button.OpenNewWindow:before,\\n.AR a.Button.OrderSet:before,\\n.AR a.Button.OutOnPass:before,\\n.AR a.Button.PatientDiet:before,\\n.AR a.Button.PatientDirections:before,\\n.AR a.Button.Pencil:before,\\n.AR a.Button.PhysicalExam:before,\\n.AR a.Button.Powder:before,\\n.AR a.Button.Pregnancy:before,\\n.AR a.Button.PreMedCommittee:before,\\n.AR a.Button.PreMedCommitteeFollowUp:before,\\n.AR a.Button.Preparation:before,\\n.AR a.Button.Print:before,\\n.AR a.Button.Procedure:before,\\n.AR a.Button.PHFS:before,\\n.AR a.Button.Patient:before,\\n.AR a.Button.PatientHistory:before,\\n.AR a.Button.Pause:before,\\n.AR a.Button.Play:before,\\n.AR a.Button.Plus:before,\\n.AR a.Button.PreMedicalCommittee:before,\\n.AR a.Button.Prescription:before,\\n.AR a.Button.Previous:before,\\n.AR a.Button.Printer:before,\\n.AR a.Button.RateChange:before,\\n.AR a.Button.ReleaseBedWhite:before,\\n.AR a.Button.ReopenVisit:before,\\n.AR a.Button.Request:before,\\n.AR a.Button.Resume:before,\\n.AR a.Button.RoomWhite:before,\\n.AR a.Button.RecallTicket:before,\\n.AR a.Button.ReferralLetter:before,\\n.AR a.Button.Remarks:before,\\n.AR a.Button.Remove:before,\\n.AR a.Button.Reopen:before,\\n.AR a.Button.Reports:before,\\n.AR a.Button.ResetQueue:before,\\n.AR a.Button.ReturnStock:before,\\n.AR a.Button.Room:before,\\n.AR a.Button.SOPD:before,\\n.AR a.Button.Sickleave:before,\\n.AR a.Button.Success:before,\\n.AR a.Button.Save:before,\\n.AR a.Button.Schedule:before,\\n.AR a.Button.ScheduleAdmission:before,\\n.AR a.Button.ScheduleAdmission:before,\\n.AR a.Button.ScheduleAppointment:before,\\n.AR a.Button.ScheduleProcedure:before,\\n.AR a.Button.ScheduleSurgery:before,\\n.AR a.Button.SearchWhite:before,\\n.AR a.Button.SendToDoctor:before,\\n.AR a.Button.SetAsValid:before,\\n.AR a.Button.Stocks:before,\\n.AR a.Button.Sachet:before,\\n.AR a.Button.SapphireLogo:before,\\n.AR a.Button.SapphireLogoVertical_v2:before,\\n.AR a.Button.SapphireSymbol:before,\\n.AR a.Button.Search:before,\\n.AR a.Button.Selection:before,\\n.AR a.Button.Serum:before,\\n.AR a.Button.ShapesIcon:before,\\n.AR a.Button.Share:before,\\n.AR a.Button.RescheduleAll:before,\\n.AR a.Button.Similar:before,\\n.AR a.Button.Smartphone:before,\\n.AR a.Button.Smoker:before,\\n.AR a.Button.SocialServices:before,\\n.AR a.Button.SquareFillIcon:before,\\n.AR a.Button.SquareLineIcon:before,\\n.AR a.Button.Star:before,\\n.AR a.Button.StarFull:before,\\n.AR a.Button.StartVisit:before,\\n.AR a.Button.StatisticalData:before,\\n.AR a.Button.Suppository:before,\\n.AR a.Button.Surgery:before,\\n.AR a.Button.SurgeryManagement:before,\\n.AR a.Button.SurgeryReport:before,\\n.AR a.Button.Symptoms:before,\\n.AR a.Button.Tablet:before,\\n.AR a.Button.Tasks:before,\\n.AR a.Button.Telephone:before,\\n.AR a.Button.Text:before,\\n.AR a.Button.ToolbarArrowLeft:before,\\n.AR a.Button.ToolbarArrowRight:before,\\n.AR a.Button.TreatmentPlan:before,\\n.AR a.Button.Triage:before,\\n.AR a.Button.TrolleyEmpty:before,\\n.AR a.Button.TrolleyFull:before,\\n.AR a.Button.TemporaryBed:before,\\n.AR a.Button.TemporaryBedFull:before,\\n.AR a.Button.Ticket:before,\\n.AR a.Button.TransferPatient:before,\\n.AR a.Button.UnlockWhite:before,\\n.AR a.Button.UnmergePatient:before,\\n.AR a.Button.Unavailability:before,\\n.AR a.Button.Undo:before,\\n.AR a.Button.Unlock:before,\\n.AR a.Button.Unmerge:before,\\n.AR a.Button.Upload:before,\\n.AR a.Button.Validate:before,\\n.AR a.Button.VitalSigns:before,\\n.AR a.Button.WristBand:before,\\n.AR a.Button.Wheelchair:before,\\n.AR a.Button.XRay:before,\\n.AR a.Button.View:before,\\n.AR a.Button.Warning:before,\\n.FA a.Button.Add:before,\\n.FA a.Button.AddPatient:before,\\n.FA a.Button.Administration:before,\\n.FA a.Button.Accounting:before,\\n.FA a.Button.AddNoteWhite:before,\\n.FA a.Button.Attention:before,\\n.FA a.Button.Addendum:before,\\n.FA a.Button.AdmitPatient:before,\\n.FA a.Button.ApiTypeExternal:before,\\n.FA a.Button.ApiTypeInterEnvironment:before,\\n.FA a.Button.ApiTypeInternal:before,\\n.FA a.Button.ApiTypeSameEnvironment:before,\\n.FA a.Button.AssignFile:before,\\n.FA a.Button.Label:before,\\n.FA a.Button.Attachment:before,\\n.FA a.Button.AvailabilityWhite:before,\\n.FA a.Button.accounting:before,\\n.FA a.Button.Allergies:before,\\n.FA a.Button.Admissions:before,\\n.FA a.Button.Ambulatory:before,\\n.FA a.Button.Ampoule:before,\\n.FA a.Button.Appointment:before,\\n.FA a.Button.ArabicToEnglish:before,\\n.FA a.Button.Assessment:before,\\n.FA a.Button.AllUnits:before,\\n.FA a.Button.Barcode:before,\\n.FA a.Button.Biometrics:before,\\n.FA a.Button.Blood:before,\\n.FA a.Button.BloodTransfusion:before,\\n.FA a.Button.BloodTubes:before,\\n.FA a.Button.BloodType:before,\\n.FA a.Button.BloodBag:before,\\n.FA a.Button.Bottle:before,\\n.FA a.Button.Bed:before,\\n.FA a.Button.Calendar:before,\\n.FA a.Button.Cancel:before,\\n.FA a.Button.Change:before,\\n.FA a.Button.Changeleft:before,\\n.FA a.Button.Changeright:before,\\n.FA a.Button.Check:before,\\n.FA a.Button.CheckinWhite:before,\\n.FA a.Button.CheckoutWhite:before,\\n.FA a.Button.ConfirmSchedule:before,\\n.FA a.Button.Copy:before,\\n.FA a.Button.CreatePatientWhite:before,\\n.FA a.Button.CallNextTicket:before,\\n.FA a.Button.Capsule:before,\\n.FA a.Button.CashKD:before,\\n.FA a.Button.Camera:before,\\n.FA a.Button.Campaign:before,\\n.FA a.Button.ChangeDown:before,\\n.FA a.Button.ChangeLeft:before,\\n.FA a.Button.ChangeRight:before,\\n.FA a.Button.ChangeUp:before,\\n.FA a.Button.ChangeUpDown:before,\\n.FA a.Button.Checklist:before,\\n.FA a.Button.ChronicDiseases:before,\\n.FA a.Button.Circle:before,\\n.FA a.Button.CircleOpen:before,\\n.FA a.Button.CircleQuestionMark:before,\\n.FA a.Button.Clear:before,\\n.FA a.Button.Collaboration:before,\\n.FA a.Button.CollapseArrow:before,\\n.FA a.Button.Comment:before,\\n.FA a.Button.ConfigureMedicationLabel:before,\\n.FA a.Button.ConfigWardDashboard:before,\\n.FA a.Button.MedicalSupplies:before,\\n.FA a.Button.ControlledMedication:before,\\n.FA a.Button.CreateFromThis:before,\\n.FA a.Button.CreditCard:before,\\n.FA a.Button.Crutches:before,\\n.FA a.Button.DischargePatient:before,\\n.FA a.Button.Download:before,\\n.FA a.Button.Dashed:before,\\n.FA a.Button.Delete:before,\\n.FA a.Button.DiabetesChart:before,\\n.FA a.Button.Diagnosis:before,\\n.FA a.Button.Diet:before,\\n.FA a.Button.DiseasesInfectious:before,\\n.FA a.Button.Disposable:before,\\n.FA a.Button.Doctor:before,\\n.FA a.Button.DoctorNotes:before,\\n.FA a.Button.Documents:before,\\n.FA a.Button.Drag:before,\\n.FA a.Button.Drinker:before,\\n.FA a.Button.Drops:before,\\n.FA a.Button.Drugs:before,\\n.FA a.Button.Emergency:before,\\n.FA a.Button.End:before,\\n.FA a.Button.EmergencyPrescription:before,\\n.FA a.Button.EmergencyTreatment:before,\\n.FA a.Button.EmptyBed:before,\\n.FA a.Button.EndVisit:before,\\n.FA a.Button.EnglishToArabic:before,\\n.FA a.Button.Eraser:before,\\n.FA a.Button.Error:before,\\n.FA a.Button.Evening:before,\\n.FA a.Button.ExpandArrow:before,\\n.FA a.Button.Expired:before,\\n.FA a.Button.FamilyHistory:before,\\n.FA a.Button.FileTracking:before,\\n.FA a.Button.FindPatient:before,\\n.FA a.Button.FlowSheet:before,\\n.FA a.Button.FluidBalance:before,\\n.FA a.Button.FollowUp:before,\\n.FA a.Button.FontBalance:before,\\n.FA a.Button.FontCareplan:before,\\n.FA a.Button.FontDNR:before,\\n.FA a.Button.FontGoal:before,\\n.FA a.Button.FontIntervention:before,\\n.FA a.Button.FontPriority:before,\\n.FA a.Button.FontProblem:before,\\n.FA a.Button.Fontrefresh:before,\\n.FA a.Button.Forward:before,\\n.FA a.Button.FastAppointment:before,\\n.FA a.Button.Filter:before,\\n.FA a.Button.Given:before,\\n.FA a.Button.GetRide:before,\\n.FA a.Button.GotoPatientWhite:before,\\n.FA a.Button.Gel:before,\\n.FA a.Button.GeneralInfo:before,\\n.FA a.Button.GroupPatients:before,\\n.FA a.Button.Globe:before,\\n.FA a.Button.Glass:before,\\n.FA a.Button.GroupOfActions:before,\\n.FA a.Button.Habits:before,\\n.FA a.Button.HornWhite:before,\\n.FA a.Button.HandleDrag:before,\\n.FA a.Button.Home:before,\\n.FA a.Button.Hours:before,\\n.FA a.Button.IconTemp:before,\\n.FA a.Button.Image:before,\\n.FA a.Button.Inbox:before,\\n.FA a.Button.Injection:before,\\n.FA a.Button.Insurance:before,\\n.FA a.Button.InsuranceCoverage:before,\\n.FA a.Button.Investigation:before,\\n.FA a.Button.Invoice:before,\\n.FA a.Button.LockWhite:before,\\n.FA a.Button.LabExamination:before,\\n.FA a.Button.LastItemSeen:before,\\n.FA a.Button.Line:before,\\n.FA a.Button.lines_thickness:before,\\n.FA a.Button.LocationPin:before,\\n.FA a.Button.Lock:before,\\n.FA a.Button.Logout:before,\\n.FA a.Button.MachineTranslation:before,\\n.FA a.Button.Management:before,\\n.FA a.Button.MappingsAll:before,\\n.FA a.Button.MappingsMany:before,\\n.FA a.Button.MappingsOnlyOne:before,\\n.FA a.Button.Maximize:before,\\n.FA a.Button.MedCommittee:before,\\n.FA a.Button.MedicalEpisode:before,\\n.FA a.Button.MedicalFile:before,\\n.FA a.Button.MedicationReconciliation:before,\\n.FA a.Button.MedicineAdministration:before,\\n.FA a.Button.Message:before,\\n.FA a.Button.Minimize:before,\\n.FA a.Button.Morning:before,\\n.FA a.Button.MoveDown:before,\\n.FA a.Button.MoveUp:before,\\n.FA a.Button.MyInfo:before,\\n.FA a.Button.MedicalCommittee:before,\\n.FA a.Button.MergePatient:before,\\n.FA a.Button.Minus:before,\\n.FA a.Button.NotGiven:before,\\n.FA a.Button.Night:before,\\n.FA a.Button.Nobed:before,\\n.FA a.Button.NearExpiry:before,\\n.FA a.Button.NewBorn:before,\\n.FA a.Button.Note:before,\\n.FA a.Button.Notification:before,\\n.FA a.Button.NursingCarePlan:before,\\n.FA a.Button.OPD:before,\\n.FA a.Button.OPDFollowup:before,\\n.FA a.Button.Overdue:before,\\n.FA a.Button.OccupiedBed:before,\\n.FA a.Button.OpenNewWindow:before,\\n.FA a.Button.OrderSet:before,\\n.FA a.Button.OutOnPass:before,\\n.FA a.Button.PatientDiet:before,\\n.FA a.Button.PatientDirections:before,\\n.FA a.Button.Pencil:before,\\n.FA a.Button.PhysicalExam:before,\\n.FA a.Button.Powder:before,\\n.FA a.Button.Pregnancy:before,\\n.FA a.Button.PreMedCommittee:before,\\n.FA a.Button.PreMedCommitteeFollowUp:before,\\n.FA a.Button.Preparation:before,\\n.FA a.Button.Print:before,\\n.FA a.Button.Procedure:before,\\n.FA a.Button.PHFS:before,\\n.FA a.Button.Patient:before,\\n.FA a.Button.Patient-history:before,\\n.FA a.Button.Pause:before,\\n.FA a.Button.PatientHistory:before,\\n.FA a.Button.Play:before,\\n.FA a.Button.Plus:before,\\n.FA a.Button.PreMedicalCommittee:before,\\n.FA a.Button.Prescription:before,\\n.FA a.Button.Previous:before,\\n.FA a.Button.Printer:before,\\n.FA a.Button.RateChange:before,\\n.FA a.Button.ReleaseBedWhite:before,\\n.FA a.Button.ReopenVisit:before,\\n.FA a.Button.Request:before,\\n.FA a.Button.Resume:before,\\n.FA a.Button.RoomWhite:before,\\n.FA a.Button.RecallTicket:before,\\n.FA a.Button.ReferralLetter:before,\\n.FA a.Button.Remarks:before,\\n.FA a.Button.Remove:before,\\n.FA a.Button.Reopen:before,\\n.FA a.Button.Reports:before,\\n.FA a.Button.ResetQueue:before,\\n.FA a.Button.ReturnStock:before,\\n.FA a.Button.Room:before,\\n.FA a.Button.SOPD:before,\\n.FA a.Button.Save:before,\\n.FA a.Button.Sickleave:before,\\n.FA a.Button.Success:before,\\n.FA a.Button.Schedule:before,\\n.FA a.Button.ScheduleAdmission:before,\\n.FA a.Button.ScheduleAdmission:before,\\n.FA a.Button.ScheduleAppointment:before,\\n.FA a.Button.ScheduleProcedure:before,\\n.FA a.Button.ScheduleSurgery:before,\\n.FA a.Button.SearchWhite:before,\\n.FA a.Button.SendToDoctor:before,\\n.FA a.Button.SetAsValid:before,\\n.FA a.Button.Stocks:before,\\n.FA a.Button.Sachet:before,\\n.FA a.Button.SapphireLogo:before,\\n.FA a.Button.SapphireLogoVertical_v2:before,\\n.FA a.Button.SapphireSymbol:before,\\n.FA a.Button.Search:before,\\n.FA a.Button.Selection:before,\\n.FA a.Button.Serum:before,\\n.FA a.Button.ShapesIcon:before,\\n.FA a.Button.Share:before,\\n.FA a.Button.RescheduleAll:before,\\n.FA a.Button.Similar:before,\\n.FA a.Button.Smartphone:before,\\n.FA a.Button.Smoker:before,\\n.FA a.Button.SocialServices:before,\\n.FA a.Button.SquareFillIcon:before,\\n.FA a.Button.SquareLineIcon:before,\\n.FA a.Button.Star:before,\\n.FA a.Button.StarFull:before,\\n.FA a.Button.StartVisit:before,\\n.FA a.Button.StatisticalData:before,\\n.FA a.Button.Suppository:before,\\n.FA a.Button.Surgery:before,\\n.FA a.Button.SurgeryManagement:before,\\n.FA a.Button.SurgeryReport:before,\\n.FA a.Button.Symptoms:before,\\n.FA a.Button.Tablet:before,\\n.FA a.Button.Tasks:before,\\n.FA a.Button.Telephone:before,\\n.FA a.Button.Text:before,\\n.FA a.Button.ToolbarArrowLeft:before,\\n.FA a.Button.ToolbarArrowRight:before,\\n.FA a.Button.TreatmentPlan:before,\\n.FA a.Button.Triage:before,\\n.FA a.Button.TrolleyEmpty:before,\\n.FA a.Button.TrolleyFull:before,\\n.FA a.Button.TemporaryBed:before,\\n.FA a.Button.TemporaryBedFull:before,\\n.FA a.Button.Ticket:before,\\n.FA a.Button.TransferPatient:before,\\n.FA a.Button.UnlockWhite:before,\\n.FA a.Button.UnmergePatient:before,\\n.FA a.Button.Unavailability:before,\\n.FA a.Button.Undo:before,\\n.FA a.Button.Unlock:before,\\n.FA a.Button.Unmerge:before,\\n.FA a.Button.Upload:before,\\n.FA a.Button.Validate:before,\\n.FA a.Button.VitalSigns:before,\\n.FA a.Button.Wheelchair:before,\\n.FA a.Button.XRay:before,\\n.FA a.Button.View:before,\\n.FA a.Button.WristBand:before,\\n.FA a.Button.Warning:before,\\na.Button.Temperature:before,\\na.Button.Bento:before,\\na.Button.Scales:before,\\na.Button.Sign:before,\\na.Button.BloodTubes2:before,\\na.Button.Attach:before,\\na.Button.Warning2:before,\\na.Button.Video:before {\\n  margin-left: 0.5715rem;\\n  margin-right: auto;\\n}\\n\\n.FA a.Button.Next:before,\\n.AR a.Button.Next:before {\\n  float: left;\\n  margin-right: 10px;\\n}\\n\\n.Heading1 {\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.714em;\\n  font-weight: normal;\\n  line-height: 1.17;\\n}\\n\\n.Heading2, .modalPopup.Open .modalPopup_title {\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.429em;\\n  font-weight: normal;\\n  line-height: 1.2;\\n}\\n\\n.Heading3 {\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.286em;\\n  font-weight: normal;\\n  line-height: 1.22;\\n}\\n\\n.Heading4,\\n.Heading5 {\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.143em;\\n  font-weight: normal;\\n  line-height: 1.13;\\n}\\n\\n.AR .Heading1,\\n.AR .Heading2,\\n.AR .modalPopup.Open .modalPopup_title,\\n.modalPopup.Open .AR .modalPopup_title,\\n.AR .Heading3,\\n.AR .Heading4,\\n.AR .Heading5 {\\n  font-family: \\\"TajawalBold\\\";\\n}\\n\\n.tablet .Heading1 {\\n  font-size: 1.571em;\\n  line-height: 1.18;\\n}\\n.tablet .Heading2, .tablet .modalPopup.Open .modalPopup_title, .modalPopup.Open .tablet .modalPopup_title {\\n  font-size: 1.286em;\\n  line-height: 1.11;\\n}\\n.tablet .Heading3 {\\n  font-size: 1.143em;\\n  line-height: 1.12;\\n}\\n.tablet .Heading4,\\n.tablet .Heading5 {\\n  font-size: 1em;\\n  line-height: 1.14;\\n}\\n\\n.TextHuge {\\n  font-size: 2.249em;\\n}\\n\\n.TextBig {\\n  font-size: 2.143em;\\n}\\n\\n.Text_large,\\n.TextLarge {\\n  font-size: 1.143em;\\n}\\n\\n.Text_small,\\n.TextSmall {\\n  font-size: 0.857em;\\n}\\n\\n.TextTiny {\\n  font-size: 0.786em;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody,\\nhtml {\\n  scroll-behavior: smooth;\\n  -servicestudio-scroll-behavior: initial;\\n}\\n\\nbody,\\nform,\\nhtml,\\n.Page {\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 14px;\\n  -webkit-font-smoothing: antialiased;\\n  height: 100%;\\n  position: relative;\\n}\\nbody.AR,\\nform.AR,\\nhtml.AR,\\n.Page.AR {\\n  font-family: \\\"TajawalRegular\\\";\\n}\\n\\nbody {\\n  background-color: #f3f3f3;\\n  margin: 0;\\n  overflow-x: hidden;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n}\\n\\nbody,\\ninput,\\nselect,\\ntextarea {\\n  color: #333;\\n  font-family: \\\"LatoRegular\\\";\\n  font-weight: normal;\\n  line-height: 1.43;\\n}\\n\\n.AR body,\\n.AR input,\\n.AR select,\\n.AR textarea {\\n  font-family: \\\"TajawalRegular\\\";\\n}\\n\\nfieldset,\\ntextarea,\\noption {\\n  font-family: \\\"LatoRegular\\\";\\n}\\n\\n.AR fieldset,\\n.AR textarea,\\n.AR option {\\n  font-family: \\\"TajawalRegular\\\";\\n}\\n\\na,\\nbody,\\nbutton,\\ndiv,\\nfieldset,\\nform,\\nhtml,\\nimg,\\ninput,\\nli,\\noptgroup,\\noption,\\nselect,\\nspan,\\ntable,\\ntbody,\\ntd,\\ntextarea,\\nth,\\nthead,\\ntr,\\nul {\\n  outline: 0 !important;\\n}\\n\\ndiv[onclick] {\\n  cursor: pointer;\\n}\\n\\n.AlertCardMessage {\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  padding: 10px;\\n  width: 100%;\\n}\\n.AlertCardMessage--Grey {\\n  background-color: #ebebeb;\\n}\\n.AlertCardMessage--Yellow {\\n  background-color: #ffeab5;\\n}\\n.AlertCardMessage--Beige {\\n  background-color: #f5f4e0;\\n}\\n\\n.DashboardCard {\\n  background-color: #fff;\\n  border-radius: 2px;\\n}\\n.DashboardCard__Header {\\n  display: flex;\\n}\\n.DashboardCard__Title {\\n  flex: 1;\\n}\\n.DashboardCard__Title a,\\n.DashboardCard__Title a:link,\\n.DashboardCard__Title a:visited {\\n  align-items: center;\\n  color: #333;\\n  display: inline-flex;\\n  font-size: 20px;\\n  font-weight: bold;\\n  height: 100%;\\n  padding: 20px;\\n  width: 100%;\\n}\\n.DashboardCard__Title a:hover,\\n.DashboardCard__Title a:link:hover,\\n.DashboardCard__Title a:visited:hover {\\n  color: #333 !important;\\n  text-decoration: none !important;\\n}\\n.DashboardCard__Items {\\n  display: flex;\\n  padding: 20px;\\n}\\n.DashboardCard__Items a:first-of-type {\\n  margin-left: 0;\\n}\\n.DashboardCard__Items a:last-of-type {\\n  margin-right: 0;\\n}\\n.DashboardCard__Items a,\\n.DashboardCard__Items a:link,\\n.DashboardCard__Items a:focus,\\n.DashboardCard__Items a:hover,\\n.DashboardCard__Items a:visited {\\n  color: #333 !important;\\n  margin: 0 6px;\\n  text-align: center;\\n  text-decoration: none !important;\\n}\\n.DashboardCard__Items a div:first-of-type,\\n.DashboardCard__Items a:link div:first-of-type,\\n.DashboardCard__Items a:focus div:first-of-type,\\n.DashboardCard__Items a:hover div:first-of-type,\\n.DashboardCard__Items a:visited div:first-of-type {\\n  font-size: 11px;\\n}\\n.DashboardCard__Content {\\n  padding: 20px;\\n}\\n\\n.ParentContainer {\\n  background-color: #f1f1f1;\\n}\\n\\n.EmptyText {\\n  color: #777777;\\n  font-size: 20px;\\n}\\n\\n.InputLabel_Container__Input {\\n  vertical-align: middle;\\n}\\n\\n.InputLabel_Container__label {\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  margin-left: 10px;\\n  vertical-align: middle;\\n}\\n\\n.SplitTablesContainer_space {\\n  background-color: #f5f5f5;\\n  height: 26px;\\n}\\n\\n.SplitTablesContainer_TablePlaceholder {\\n  padding-top: 26px;\\n}\\n\\n.SapphireSearchControl {\\n  display: table;\\n  position: relative;\\n}\\n\\n.SapphireSearch_show {\\n  margin-left: 40px !important;\\n}\\n.SapphireSearch_show, .SapphireSearch_clear {\\n  display: table-cell;\\n  padding: 0 10px 0 0;\\n  vertical-align: middle;\\n}\\n.SapphireSearch_show a, .SapphireSearch_clear a {\\n  color: #00ac94;\\n  cursor: auto;\\n  font-size: 16px;\\n  font-weight: 600 !important;\\n  line-height: 19px;\\n}\\n.SapphireSearch_input {\\n  display: table-cell;\\n  font-family: FontAwesome;\\n  font-style: normal;\\n  font-weight: normal;\\n  margin-right: 42px;\\n  padding-right: 40px;\\n  position: relative;\\n}\\n.SapphireSearch_input:after {\\n  color: #777777;\\n  content: \\\"\\\\e690\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 17px;\\n  left: 16px;\\n  line-height: 0;\\n  position: absolute;\\n  top: 22px;\\n  transform: scale(-1, 1);\\n}\\n.SapphireSearch_input.expanded:after {\\n  line-height: 0;\\n  top: 22px;\\n}\\n.SapphireSearch_input.expanded + .SapphireSearch_search {\\n  display: inline-block;\\n}\\n.SapphireSearch_input.expanded + .SapphireSearch_close.show {\\n  border-radius: 50%;\\n  cursor: auto;\\n  left: 310px;\\n  opacity: 1;\\n  pointer-events: none;\\n  position: absolute;\\n  top: 8px;\\n  visibility: visible;\\n}\\n.SapphireSearch_input input[type=text] {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 100px;\\n  color: #adadad;\\n  font-size: 16px;\\n  font-style: italic;\\n  height: 42px;\\n  line-height: 43px;\\n  min-width: 340px;\\n  padding-left: 46px;\\n  padding-right: 14px;\\n}\\n.SapphireSearch_input input[type=text].expanded {\\n  background-color: #fff;\\n  border: 2px solid #00bfa5;\\n  border-radius: 100px;\\n  caret-color: #00bfa5;\\n  color: #333;\\n  font-style: normal;\\n  font-weight: 400;\\n  height: 42px;\\n  padding-right: 34px;\\n  width: 340px;\\n}\\n.SapphireSearch_input input[type=text].expanded::-moz-placeholder {\\n  color: transparent;\\n}\\n.SapphireSearch_input input[type=text].expanded::placeholder {\\n  color: transparent;\\n}\\n.SapphireSearch_more a, .SapphireSearch_reset a {\\n  text-decoration: underline;\\n}\\n.SapphireSearch_close {\\n  border-radius: 50%;\\n  cursor: pointer;\\n  left: 310px;\\n  opacity: 1;\\n  opacity: 0;\\n  position: absolute;\\n  top: 8px;\\n  transition: visibility 1s, opacity 0s linear;\\n  visibility: hidden;\\n}\\n.SapphireSearch_close .CancelSearch {\\n  cursor: pointer;\\n}\\n\\n/* Tooltip container */\\n.SapphireTooltip {\\n  cursor: pointer;\\n  display: inline-block;\\n  position: relative;\\n}\\n.SapphireTooltip:hover .SapphireTooltip_text {\\n  cursor: pointer;\\n  left: 60%;\\n  margin-left: -60px;\\n  top: 100%;\\n  visibility: visible;\\n  width: 300px;\\n  z-index: 5;\\n}\\n.SapphireTooltip_expression:hover {\\n  text-decoration: underline;\\n}\\n.SapphireTooltip_text {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  box-shadow: 0 1px 3px 0 rgba(64, 66, 69, 0.12), 0 2px 16px 0 rgba(33, 43, 54, 0.08);\\n  color: #000;\\n  margin-top: 10px;\\n  padding: 5px 0;\\n  padding: 20px 20px 50px;\\n  position: absolute;\\n  text-align: left;\\n  visibility: hidden;\\n  width: 120px;\\n  z-index: 1;\\n}\\n.SapphireTooltip_text:after {\\n  border-bottom: 10px solid #f5f5f5;\\n  border-color: transparent transparent #f5f5f5 transparent;\\n  border-style: solid;\\n  border-width: 0 10px 10px 10px;\\n  content: \\\"\\\";\\n  height: 0;\\n  left: 35px;\\n  position: absolute;\\n  top: -10px;\\n  width: 0;\\n  z-index: 1;\\n}\\n.SapphireTooltip_text:before {\\n  border-bottom: 10px solid #d6d6d6;\\n  border-color: transparent transparent transparent transparent;\\n  border-style: solid;\\n  border-width: 0 10px 10px 10px;\\n  content: \\\"\\\";\\n  height: 0;\\n  left: 35px;\\n  position: absolute;\\n  top: -11px;\\n  width: 0;\\n  z-index: 1;\\n}\\n.SapphireTooltip_text:hover {\\n  cursor: pointer;\\n}\\n.SapphireTooltip__title {\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  line-height: 14px;\\n  margin-bottom: 9px;\\n}\\n.SapphireTooltip__data {\\n  color: #333333;\\n  font-size: 16px;\\n  line-height: 17px;\\n  margin-bottom: 30px;\\n  min-height: 24px;\\n  width: 242px;\\n}\\n.SapphireTooltip__data:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.TitleSubTitleElement {\\n  min-height: 50px;\\n}\\n.TitleSubTitleElement_title {\\n  color: #333;\\n  font-size: 18px;\\n  font-weight: 600;\\n  line-height: 22px;\\n  margin-bottom: 20px;\\n}\\n.TitleSubTitleElement_subtitle {\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  line-height: 22px;\\n  margin-right: 1px;\\n}\\n\\n.BreadActionsWrapper {\\n  background-color: #f3f3f3;\\n  max-width: 1439px;\\n  padding-bottom: 20px;\\n  padding-top: 20px;\\n  position: sticky;\\n  top: 0;\\n  width: 100%;\\n  z-index: 3;\\n}\\n\\n.MainContent_BreadCrumbs,\\n.MainContent_actions {\\n  vertical-align: middle;\\n}\\n\\n.MainContent_BreadCrumbs {\\n  margin-bottom: 20px;\\n}\\n\\n.MainContent_actions {\\n  text-align: right;\\n}\\n\\n.Page .MainContent_others {\\n  max-width: 1439px;\\n  min-height: 80px;\\n  top: 0;\\n  width: 100%;\\n  padding: 0;\\n  background-color: #f1f1f1;\\n  z-index: 2;\\n}\\n\\n.MainContent_navigationBar {\\n  display: block;\\n  padding-bottom: 20px;\\n  width: 100%;\\n}\\n\\n.Page thead th {\\n  background: #fff;\\n  position: sticky;\\n  top: 0;\\n  z-index: 1;\\n}\\n\\n.LayoutBackoffice .ViewStateCounter {\\n  color: #999;\\n  font-size: 11px;\\n  left: 5px;\\n  position: fixed;\\n  top: 0;\\n}\\n\\nbody {\\n  direction: ltr !important;\\n}\\n\\n.LayoutBackoffice .LoginWrapper {\\n  background-color: #fff;\\n  width: 100%;\\n}\\n.LayoutBackoffice .LoginWrapper .Columns {\\n  height: 100%;\\n  overflow-y: hidden;\\n}\\n.LayoutBackoffice .LoginWrapper .Columns2 > .Column {\\n  -servicestudio-width: 50%;\\n  -servicestudio-display: inline-block;\\n}\\n.LayoutBackoffice .LoginWrapper .Column.ColFirst {\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n}\\n.LayoutBackoffice .LoginWrapper .Column.ColLast {\\n  height: 100vh;\\n  line-height: 49px;\\n}\\n.LayoutBackoffice .LoginWrapper_LeftLogo {\\n  height: 100vh;\\n}\\n.LayoutBackoffice .LoginWrapper___Logo {\\n  font-size: 27px;\\n  font-weight: bold;\\n  line-height: 33px;\\n}\\n.LayoutBackoffice .LoginWrapper___Form {\\n  margin-top: 68px;\\n}\\n.LayoutBackoffice .LoginWrapper__LoginBox {\\n  margin: 0 auto;\\n  max-width: 250px;\\n}\\n.LayoutBackoffice .Form_Username {\\n  margin-bottom: 29px;\\n  line-height: 17px;\\n  color: #5c5c5c;\\n  font-size: 14px;\\n}\\n.LayoutBackoffice .Form_Password {\\n  margin-bottom: 26px;\\n  line-height: 17px;\\n  color: #5c5c5c;\\n  font-size: 14px;\\n}\\n.LayoutBackoffice .Form_Actions div:first-child {\\n  margin-bottom: 42px;\\n  vertical-align: middle;\\n}\\n.LayoutBackoffice .Form_Actions > div > div {\\n  margin-left: 10px;\\n}\\n\\n/*Desktop  Behavior*/\\n.desktop.hd .LoginWrapper___Logo {\\n  margin-top: 225px;\\n}\\n\\n.desktop.hd .Form_Actions img {\\n  margin-top: 251px;\\n}\\n\\n.desktop .LoginWrapper___Logo,\\n.desktop.small .LoginWrapper___Logo {\\n  margin-top: 50px;\\n}\\n\\n.desktop.small .Form_Actions img {\\n  margin-top: 70px;\\n}\\n\\n.desktop .Form_Actions img,\\n.desktop.big .Form_Actions img {\\n  margin-top: 170px;\\n}\\n\\n/*Tablet and phone Behavior*/\\n.phone .LoginWrapper__LoginBox {\\n  transform: translateY(25%);\\n}\\n\\n.phone.landscape .LoginWrapper__LoginBox {\\n  transform: translateY(0);\\n}\\n\\n.phone.landscape .Form_Actions div:first-child {\\n  margin-bottom: 10px;\\n}\\n\\n.phone.landscape .LoginWrapper___Form {\\n  margin-top: 26px;\\n}\\n\\n.phone.landscape .LoginWrapper___Logo {\\n  margin-top: 10px;\\n}\\n\\n.tablet .LoginWrapper__LoginBox {\\n  transform: translateY(50%);\\n}\\n\\n.tablet.landscape .LoginWrapper__LoginBox {\\n  transform: translateY(25%);\\n}\\n\\n.phone .LoginWrapper .Column.ColFirst,\\n.tablet .LoginWrapper .Column.ColFirst {\\n  display: none;\\n}\\n\\n.tablet .LoginWrapper .Column.ColLast {\\n  width: 100%;\\n}\\n\\n.tablet .LoginWrapper___Logo {\\n  margin-top: 50px;\\n}\\n\\n.tablet .Form_Actions img {\\n  margin-top: 20px;\\n}\\n\\n/* NavigationBar */\\n.NavigationBar a.InlineDropdown {\\n  border: none;\\n}\\n\\n.NavigationBar a.InlineDropdown .DropdownMenu {\\n  top: 160%;\\n}\\n\\n.NavigationBar a.InlineDropdown .DropdownMenu a {\\n  display: block;\\n  margin: 0;\\n  padding: 0;\\n  white-space: nowrap;\\n}\\n\\n.NavigationBar a.InlineDropdown .DropdownMenu a:hover,\\n.NavigationBar a.InlineDropdown .DropdownMenu a:link:hover {\\n  color: #00ac94;\\n  font-weight: initial;\\n}\\n\\n.NavigationBar a.InlineDropdown .InlineDropdown_icon .fa {\\n  animation: none;\\n  transform: rotate(-180deg);\\n  transition: all 0.3s ease-in;\\n}\\n\\n.NavigationBar a.InlineDropdown.open .InlineDropdown_icon .fa {\\n  transform: rotate(0deg);\\n}\\n\\n/* NavigationBar */\\n.lds-ring {\\n  display: inline-block;\\n  height: 32px;\\n  left: 50%;\\n  position: absolute;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 32px;\\n}\\n.lds-ring div {\\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\\n  border: 3px solid #fff;\\n  border-color: #00bfa5 transparent transparent transparent;\\n  border-radius: 50%;\\n  box-sizing: border-box;\\n  display: block;\\n  height: 16px;\\n  margin: 8px;\\n  position: absolute;\\n  width: 16px;\\n}\\n.lds-ring div:nth-child(1) {\\n  animation-delay: -0.45s;\\n}\\n.lds-ring div:nth-child(2) {\\n  animation-delay: -0.3s;\\n}\\n.lds-ring div:nth-child(3) {\\n  animation-delay: -0.15s;\\n}\\n.lds-ring--relative {\\n  left: unset;\\n  position: relative;\\n  top: unset;\\n  transform: unset;\\n}\\n.lds-ring--relative div {\\n  height: 24px;\\n  margin: 4px;\\n  width: 24px;\\n}\\n\\n@keyframes lds-ring {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.TableRecords {\\n  background-color: transparent;\\n  border-bottom: none;\\n  border-radius: 1px;\\n  border-top: none;\\n  margin-top: 0;\\n  padding: 0;\\n}\\n.TableRecords.ExpandableRows {\\n  border-collapse: collapse;\\n}\\n.TableRecords.ExpandableRows tbody {\\n  background-color: #fff;\\n}\\n.TableRecords.ExpandableRows .Link.ChangeUp {\\n  display: none;\\n}\\n.TableRecords.ExpandableRows .Link.ChangeDown {\\n  display: inline-block;\\n}\\n.TableRecords.ExpandableRows .ActiveRow .TableRecords_OddLine .ExpandLink .fa,\\n.TableRecords.ExpandableRows .ActiveRow .TableRecords_EvenLine .ExpandLink .fa {\\n  transform: rotate(0deg);\\n}\\n.TableRecords.ExpandableRows .ActiveRow .Link.ChangeUp {\\n  display: inline-block;\\n}\\n.TableRecords.ExpandableRows .ActiveRow .Link.ChangeDown {\\n  display: none;\\n}\\n.TableRecords.ExpandableRows .TableRecords_OddLine:first-child {\\n  width: 60px;\\n}\\n.TableRecords.ExpandableRows .TableRecords_OddLine .ExpandLink .fa,\\n.TableRecords.ExpandableRows .TableRecords_EvenLine .ExpandLink .fa {\\n  transform: rotate(-90deg);\\n}\\n.TableRecords.CustomTable {\\n  border-collapse: separate;\\n  border-spacing: 0 8px;\\n}\\n.TableRecords.CustomTable.ExpandableRows > tbody tr.ActiveRow td:first-child {\\n  border-bottom-left-radius: 0;\\n}\\n.TableRecords.CustomTable.ExpandableRows > tbody tr.ActiveRow td:last-child {\\n  border-bottom-right-radius: 0;\\n}\\n.TableRecords.CustomTable > tbody tr td:first-child {\\n  border-bottom-left-radius: 8px;\\n  border-top-left-radius: 8px;\\n  padding-left: 16px;\\n}\\n.TableRecords.CustomTable > tbody tr td:last-child {\\n  border-bottom-right-radius: 8px;\\n  border-top-right-radius: 8px;\\n  padding-right: 16px;\\n}\\n.TableRecords.CustomTable .TableRecords_OddLine,\\n.TableRecords.CustomTable .TableRecords_EvenLine {\\n  border-top: 1px solid #d6d6d6;\\n  padding: 16px 8px;\\n  vertical-align: middle;\\n}\\n.TableRecords.CustomTable .TableRecords_Header {\\n  height: 20px;\\n  padding: 0 8px;\\n}\\n.TableRecords.CustomTable .TableRecords_Header:empty {\\n  height: 0;\\n  padding: 0;\\n}\\n.TableRecords.CustomTable .TableRecords_ContentExpandable [ui=data-expandable-table-content] {\\n  border: 1px solid #d6d6d6;\\n  margin-top: -9px;\\n  position: relative;\\n}\\n.TableRecords.CustomTable .TableRowExpandable td {\\n  border: none;\\n}\\n.TableRecords.CustomTable .CustomTableIcon {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #f3f3f3;\\n  border-radius: 8px;\\n  height: 48px;\\n  width: 48px;\\n}\\n.TableRecords.NoSideBorders .TableRecords_OddLine:first-child,\\n.TableRecords.NoSideBorders .TableRecords_EvenLine:first-child,\\n.TableRecords.NoSideBorders .TableRecords_Header:first-child {\\n  padding-left: 0;\\n}\\n.AR .TableRecords.NoSideBorders .TableRecords_OddLine:first-child,\\n.AR .TableRecords.NoSideBorders .TableRecords_EvenLine:first-child,\\n.AR .TableRecords.NoSideBorders .TableRecords_Header:first-child {\\n  padding-left: 16px;\\n  padding-right: 0;\\n}\\n.TableRecords.NoSideBorders .TableRecords_Header:last-child {\\n  padding-right: 0;\\n}\\n.AR .TableRecords.NoSideBorders .TableRecords_Header:last-child {\\n  padding-left: 0;\\n  padding-right: 16px !important;\\n}\\n.TableRecords.NoSideBorders > tbody tr td {\\n  border-left: none !important;\\n  border-right: none !important;\\n}\\n.TableRecords.NoSideBorders > tbody tr td:first-child {\\n  padding-left: 0 !important;\\n}\\n.AR .TableRecords.NoSideBorders > tbody tr td:first-child {\\n  padding-left: 16px !important;\\n  padding-right: 0 !important;\\n}\\n.TableRecords.NoSideBorders > tbody tr td:last-child {\\n  padding-right: 0 !important;\\n}\\n.AR .TableRecords.NoSideBorders > tbody tr td:last-child {\\n  padding-left: 0 !important;\\n  padding-right: 16px !important;\\n}\\n.TableRecords > tbody > tr:first-child td {\\n  border-top: 1px solid #d6d6d6;\\n}\\n.TableRecords > tbody > tr:first-child td:first-child {\\n  border-top-left-radius: 8px;\\n}\\n.TableRecords > tbody > tr:first-child td:last-child {\\n  border-top-right-radius: 8px;\\n}\\n.TableRecords > tbody > tr:last-child td:first-child {\\n  border-bottom-left-radius: 8px;\\n}\\n.TableRecords > tbody > tr:last-child td:last-child {\\n  border-bottom-right-radius: 8px;\\n}\\n.TableRecords > tbody tr td:first-child {\\n  border-left: 1px solid #d6d6d6;\\n  padding-left: 16px !important;\\n}\\n.TableRecords > tbody tr td:last-child {\\n  border-right: 1px solid #d6d6d6;\\n  padding-right: 16px !important;\\n}\\n.TableRecords.TableRecordsNotes tbody td {\\n  font-size: 0.857em;\\n}\\n.TableRecords.TableRecordsNotes tbody tr:first-child td {\\n  border-top: 1px solid #00bfa5;\\n}\\n.TableRecords.TableRecordsNotes .TableRecords_Header {\\n  color: #00bfa5;\\n  line-height: 22px;\\n}\\n.TableRecords.TableRecordsNotes .NewMessage_Warning td {\\n  background-color: #f5f4e0;\\n}\\n.TableRecords.TableRecordsNotes .TableRecords_OddLine {\\n  background-color: unset;\\n}\\n.TableRecords_Header {\\n  background-color: transparent;\\n  border-bottom: none;\\n  color: #adadad;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 0.857em;\\n  height: 36px;\\n  padding: 8px 10px;\\n  text-align: left;\\n  text-transform: uppercase;\\n}\\n.TableRecords_Header:empty {\\n  height: 0;\\n  line-height: 0;\\n  padding: 0;\\n}\\n.TableRecords_OddLine, .TableRecords_EvenLine {\\n  background-color: #fff;\\n  border-bottom: 1px solid #d6d6d6;\\n  color: #333;\\n  min-height: 48px;\\n  padding: 10px;\\n  text-align: left;\\n  vertical-align: top;\\n}\\n.TableRecords_Wrapper.NoResponsive th.TableRecords_Header {\\n  border-top: 1px solid #d6d6d6;\\n}\\n.TableRecords_Wrapper.NoResponsive th.TableRecords_Header:first-child {\\n  border-left: 1px solid #d6d6d6;\\n}\\n.TableRecords_Wrapper.NoResponsive th.TableRecords_Header:last-child {\\n  border-right: 1px solid #d6d6d6;\\n}\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open td {\\n  border-bottom: 1px solid #d6d6d6;\\n}\\n.TableRecords_Wrapper.NoResponsive tr.ActiveRow td {\\n  border-bottom: 1px solid #00bfa5;\\n  border-top: 1px solid #00bfa5;\\n}\\n.TableRecords_Wrapper.NoResponsive tr.ActiveRow td:first-child {\\n  border-left: 1px solid #00bfa5;\\n}\\n.TableRecords_Wrapper.NoResponsive tr.ActiveRow td:last-child {\\n  border-right: 1px solid #00bfa5;\\n}\\n.TableRecords_Wrapper.NoResponsive .ActiveRow .TableRecords_OddLine .ExpandLink .fa,\\n.TableRecords_Wrapper.NoResponsive .ActiveRow .TableRecords_EvenLine .ExpandLink .fa {\\n  transform: rotate(0deg);\\n}\\n.TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr:hover {\\n  background: #fff;\\n}\\n.TableRecords_Wrapper.NoResponsive .TableRecords thead,\\n.TableRecords_Wrapper.NoResponsive .TableRecords tbody {\\n  background-color: #fff;\\n}\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header {\\n  color: #5c5c5c;\\n  font-weight: normal;\\n}\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header a,\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header a:link,\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header a:visited {\\n  color: #5c5c5c;\\n}\\n.TableRecords_Wrapper.NoResponsive .TableRecords_OddLine .ExpandLink .fa, .TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine .ExpandLink .fa {\\n  transform: rotate(-90deg);\\n}\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header:first-child, .TableRecords_Wrapper.NoResponsive .TableRecords_OddLine:first-child, .TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine:first-child {\\n  padding-left: 15px;\\n}\\n.TableRecords_ContentExpandable {\\n  display: contents;\\n}\\n.TableRecords th.SortColumns_Sorted:hover,\\n.TableRecords th.SortColumns_Sortable:hover {\\n  color: #00ac94;\\n  text-decoration: none;\\n}\\n.TableRecords th.SortColumns_Sorted {\\n  color: inherit;\\n}\\n.TableRecords th.SortColumns_Sorted::after {\\n  content: \\\"\\\\e913\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  margin: 0 4px;\\n}\\n.TableRecords th.SortColumns--ascending::after {\\n  content: \\\"\\\\e914\\\";\\n}\\n.TableRecords .LightGreen {\\n  color: #333;\\n}\\n.TableRecords .TableRowExpandable {\\n  display: none;\\n  transition: all 500ms;\\n  visibility: hidden;\\n}\\n.TableRecords .TableRowExpandable.open {\\n  display: table-row;\\n  visibility: visible;\\n}\\n.TableRecords .TableRowExpandable.TableContainerExpandable > td, .TableRecords .TableRowExpandable.TableContainerExpandable > td:first-child, .TableRecords .TableRowExpandable.TableContainerExpandable > td:last-child {\\n  padding: 0 !important;\\n}\\n\\n.AR .TableRecords.CustomTable.ExpandableRows > tbody tr.ActiveRow td:first-child,\\n.FA .TableRecords.CustomTable.ExpandableRows > tbody tr.ActiveRow td:first-child {\\n  border-bottom-right-radius: 0;\\n}\\n.AR .TableRecords.CustomTable.ExpandableRows > tbody tr.ActiveRow td:last-child,\\n.FA .TableRecords.CustomTable.ExpandableRows > tbody tr.ActiveRow td:last-child {\\n  border-bottom-left-radius: 0;\\n}\\n.AR .TableRecords.CustomTable > tbody tr td:first-child,\\n.FA .TableRecords.CustomTable > tbody tr td:first-child {\\n  border-radius: 0 8px 8px 0;\\n  padding-left: 8px;\\n  padding-right: 16px;\\n}\\n.AR .TableRecords.CustomTable > tbody tr td:last-child,\\n.FA .TableRecords.CustomTable > tbody tr td:last-child {\\n  border-bottom-left-radius: 8px;\\n  border-left: 1px solid #d6d6d6;\\n  border-top-left-radius: 8px;\\n  padding-left: 16px;\\n  padding-right: 8px;\\n}\\n.AR .TableRecords.CustomTable .TableRowExpandable.open td,\\n.FA .TableRecords.CustomTable .TableRowExpandable.open td {\\n  border: none;\\n}\\n.AR .TableRecords_Header,\\n.FA .TableRecords_Header {\\n  padding: 5px 10px 10px 0;\\n}\\n.AR .TableRecords_Header,\\n.AR .TableRecords_Header div, .AR .TableRecords_OddLine,\\n.AR .TableRecords_OddLine div, .AR .TableRecords_EvenLine,\\n.AR .TableRecords_EvenLine div,\\n.FA .TableRecords_Header,\\n.FA .TableRecords_Header div,\\n.FA .TableRecords_OddLine,\\n.FA .TableRecords_OddLine div,\\n.FA .TableRecords_EvenLine,\\n.FA .TableRecords_EvenLine div {\\n  text-align: right;\\n}\\n.AR .TableRecords_Header:last-child, .AR .TableRecords_OddLine:last-child, .AR .TableRecords_EvenLine:last-child,\\n.FA .TableRecords_Header:last-child,\\n.FA .TableRecords_OddLine:last-child,\\n.FA .TableRecords_EvenLine:last-child {\\n  padding-left: 16px;\\n  padding-right: 10px !important;\\n}\\n.AR .TableRecords_Header:first-child, .AR .TableRecords_OddLine:first-child, .AR .TableRecords_EvenLine:first-child,\\n.FA .TableRecords_Header:first-child,\\n.FA .TableRecords_OddLine:first-child,\\n.FA .TableRecords_EvenLine:first-child {\\n  padding-left: 0;\\n  padding-right: 16px;\\n}\\n.AR .TableRecords_OddLine:last-child, .AR .TableRecords_EvenLine:last-child,\\n.FA .TableRecords_OddLine:last-child,\\n.FA .TableRecords_EvenLine:last-child {\\n  border-left: 1px solid #d6d6d6;\\n  border-right: none;\\n}\\n.AR .TableRecords_OddLine:first-child, .AR .TableRecords_EvenLine:first-child,\\n.FA .TableRecords_OddLine:first-child,\\n.FA .TableRecords_EvenLine:first-child {\\n  border-left: none;\\n  border-right: 1px solid #d6d6d6;\\n}\\n.AR .TableRecords .TableRowExpandable.open td,\\n.FA .TableRecords .TableRowExpandable.open td {\\n  border-right: 1px solid #d6d6d6;\\n}\\n.AR .TableRecords_Wrapper.NoResponsive .TableRecords_Header,\\n.FA .TableRecords_Wrapper.NoResponsive .TableRecords_Header {\\n  text-align: right;\\n}\\n.AR .TableRecords_Wrapper.NoResponsive .TableRecords_OddLine,\\n.AR .TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine,\\n.FA .TableRecords_Wrapper.NoResponsive .TableRecords_OddLine,\\n.FA .TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine {\\n  text-align: right;\\n}\\n.AR .TableRecords_Wrapper.NoResponsive tr.ActiveRow td:first-child,\\n.FA .TableRecords_Wrapper.NoResponsive tr.ActiveRow td:first-child {\\n  border-left: none;\\n  border-right: 1px solid #00bfa5;\\n}\\n.AR .TableRecords_Wrapper.NoResponsive tr.ActiveRow td:last-child,\\n.FA .TableRecords_Wrapper.NoResponsive tr.ActiveRow td:last-child {\\n  border-left: 1px solid #00bfa5;\\n  border-right: none;\\n}\\n.AR .TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open .TableRowExpandable_Content.Column,\\n.FA .TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open .TableRowExpandable_Content.Column {\\n  padding-right: 10px;\\n  text-align: right;\\n}\\n.AR .TableRecords_Wrapper.NoResponsive tr.TableRowExpandable .TableRowExpandable_Content.Column,\\n.FA .TableRecords_Wrapper.NoResponsive tr.TableRowExpandable .TableRowExpandable_Content.Column {\\n  padding-right: 10px;\\n  text-align: right;\\n}\\n.AR .TableRecords_Wrapper .TableRecords_Header,\\n.FA .TableRecords_Wrapper .TableRecords_Header {\\n  padding: 10px;\\n}\\n\\n.InlineDropdown {\\n  cursor: pointer;\\n  height: -moz-fit-content;\\n  height: fit-content;\\n  position: relative;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n.InlineDropdown.open .InlineDropdown_icon, .InlineDropdown:hover .InlineDropdown_icon {\\n  background-color: #ebebeb;\\n}\\n.InlineDropdown:focus .InlineDropdown_text {\\n  border-bottom: 1px solid #333;\\n}\\n.InlineDropdown_text {\\n  color: #00ac94;\\n  font-family: \\\"LatoBold\\\";\\n}\\n.InlineDropdown_icon {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n  color: #00ac94;\\n  display: inline-flex;\\n  height: 18px;\\n  margin: 1px 0 0 5px;\\n  transition: all 500ms ease;\\n  width: 18px;\\n}\\n\\n.AR .InlineDropdown_icon,\\n.FA .InlineDropdown_icon {\\n  margin: 1px 5px 0 0;\\n}\\n\\n.country-list::-webkit-scrollbar {\\n  background-color: #fff;\\n  height: 14px;\\n  width: 14px;\\n}\\n.country-list::-webkit-scrollbar-thumb {\\n  background-color: #d6d6d6;\\n  background-clip: padding-box;\\n  border: 4px solid rgba(0, 0, 0, 0);\\n  border-radius: 9999px;\\n}\\n\\n.intl-tel-input.allow-dropdown input,\\n.intl-tel-input.allow-dropdown input[type=tel],\\n.intl-tel-input.allow-dropdown input[type=text], .intl-tel-input.separate-dial-code input,\\n.intl-tel-input.separate-dial-code input[type=tel],\\n.intl-tel-input.separate-dial-code input[type=text] {\\n  padding-right: 16px;\\n}\\n\\n.AR .intl-tel-input.allow-dropdown .flag-container, .AR .intl-tel-input.separate-dial-code .flag-container,\\n.FA .intl-tel-input.allow-dropdown .flag-container,\\n.FA .intl-tel-input.separate-dial-code .flag-container {\\n  left: auto;\\n}\\n.AR .intl-tel-input.allow-dropdown .selected-dial-code, .AR .intl-tel-input.separate-dial-code .selected-dial-code,\\n.FA .intl-tel-input.allow-dropdown .selected-dial-code,\\n.FA .intl-tel-input.separate-dial-code .selected-dial-code {\\n  direction: ltr;\\n  padding-left: 0;\\n  padding-right: 28px;\\n  text-align: end;\\n}\\n.AR .intl-tel-input.allow-dropdown .selected-flag .iti-arrow, .AR .intl-tel-input.separate-dial-code .selected-flag .iti-arrow,\\n.FA .intl-tel-input.allow-dropdown .selected-flag .iti-arrow,\\n.FA .intl-tel-input.separate-dial-code .selected-flag .iti-arrow {\\n  left: 6px;\\n  right: auto;\\n}\\n.AR .intl-tel-input.allow-dropdown .country-list, .AR .intl-tel-input.separate-dial-code .country-list,\\n.FA .intl-tel-input.allow-dropdown .country-list,\\n.FA .intl-tel-input.separate-dial-code .country-list {\\n  text-align: right;\\n}\\n.AR .intl-tel-input.allow-dropdown .country-list .flag-box, .AR .intl-tel-input.separate-dial-code .country-list .flag-box,\\n.FA .intl-tel-input.allow-dropdown .country-list .flag-box,\\n.FA .intl-tel-input.separate-dial-code .country-list .flag-box {\\n  margin-left: 6px;\\n  margin-right: 0;\\n}\\n.AR .intl-tel-input.allow-dropdown .selected-flag, .AR .intl-tel-input.separate-dial-code .selected-flag,\\n.FA .intl-tel-input.allow-dropdown .selected-flag,\\n.FA .intl-tel-input.separate-dial-code .selected-flag {\\n  padding: 0 8px 0 0;\\n}\\n.AR .intl-tel-input.allow-dropdown input,\\n.AR .intl-tel-input.allow-dropdown input[type=tel],\\n.AR .intl-tel-input.allow-dropdown input[type=text], .AR .intl-tel-input.separate-dial-code input,\\n.AR .intl-tel-input.separate-dial-code input[type=tel],\\n.AR .intl-tel-input.separate-dial-code input[type=text],\\n.FA .intl-tel-input.allow-dropdown input,\\n.FA .intl-tel-input.allow-dropdown input[type=tel],\\n.FA .intl-tel-input.allow-dropdown input[type=text],\\n.FA .intl-tel-input.separate-dial-code input,\\n.FA .intl-tel-input.separate-dial-code input[type=tel],\\n.FA .intl-tel-input.separate-dial-code input[type=text] {\\n  direction: ltr;\\n  padding-left: 16px !important;\\n  text-align: end;\\n}\\n.AR .intl-tel-input.allow-dropdown input,\\n.AR .intl-tel-input.allow-dropdown input[type=tel],\\n.AR .intl-tel-input.allow-dropdown input[type=text],\\n.FA .intl-tel-input.allow-dropdown input,\\n.FA .intl-tel-input.allow-dropdown input[type=tel],\\n.FA .intl-tel-input.allow-dropdown input[type=text] {\\n  padding-right: 52px;\\n}\\n.AR .intl-tel-input.separate-dial-code input,\\n.AR .intl-tel-input.separate-dial-code input[type=tel],\\n.AR .intl-tel-input.separate-dial-code input[type=text],\\n.FA .intl-tel-input.separate-dial-code input,\\n.FA .intl-tel-input.separate-dial-code input[type=tel],\\n.FA .intl-tel-input.separate-dial-code input[type=text] {\\n  padding-right: 92px;\\n}\\n\\n.DateTimeRangePicker {\\n  display: inline-block;\\n  position: relative;\\n  vertical-align: middle;\\n}\\n.DateTimeRangePicker.onlyDate .DateTimeRangePicker-input input[type=text] {\\n  width: 140px;\\n}\\n.DateTimeRangePicker.textTrigger {\\n  vertical-align: baseline;\\n}\\n.DateTimeRangePicker.textTrigger .DateTimeRangePicker-displayed:before {\\n  display: none;\\n}\\n.DateTimeRangePicker.textTrigger .DateTimeRangePicker-displayed input[type=text] {\\n  display: none;\\n}\\n.DateTimeRangePicker.textTrigger .DateTimeRangePicker-placeholder input[type=text] {\\n  visibility: visible;\\n}\\n.DateTimeRangePicker.textTrigger .DateTimeRangePicker-clear {\\n  line-height: unset;\\n}\\n.DateTimeRangePicker.rangeDates {\\n  min-width: 218px;\\n}\\n.DateTimeRangePicker.rangeDates .DateTimeRangePicker-input input[type] {\\n  min-width: 218px;\\n  width: 100%;\\n}\\n.DateTimeRangePicker-input {\\n  position: relative;\\n}\\n.DateTimeRangePicker-input input[type=text] {\\n  padding-right: 25px;\\n}\\n.DateTimeRangePicker-placeholder {\\n  display: block;\\n  line-height: 0;\\n  overflow: hidden;\\n  position: absolute;\\n  width: 0;\\n}\\n.DateTimeRangePicker-placeholder input[type=text] {\\n  border: none;\\n  box-shadow: none;\\n  margin: 0;\\n  padding: 0;\\n  padding-right: 25px;\\n  width: 100%;\\n}\\n.DateTimeRangePicker-displayed {\\n  position: relative;\\n}\\n.DateTimeRangePicker-displayed.ValidationMessageContainer {\\n  white-space: initial;\\n}\\n.DateTimeRangePicker-displayed input[type=text] {\\n  width: 100%;\\n}\\n.DateTimeRangePicker-input:before, .DateTimeRangePicker-displayed:before {\\n  color: #00bfa5;\\n  content: \\\"\\\\e60b\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  position: absolute;\\n  right: 9px;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n.DateTimeRangePicker-hidden input[type=text] {\\n  border: none !important;\\n  height: 15px !important;\\n  padding: 0 !important;\\n  width: 0 !important;\\n}\\n.DateTimeRangePicker-label {\\n  color: #00ac94;\\n  cursor: pointer;\\n  font-family: \\\"LatoBold\\\";\\n  vertical-align: baseline;\\n}\\n.DateTimeRangePicker-clear {\\n  color: #00ac94;\\n  cursor: pointer;\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: inherit;\\n  -webkit-font-smoothing: antialiased;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: normal;\\n  line-height: 36px;\\n  speak: none;\\n  text-transform: none;\\n  margin-left: 8px;\\n  /*top: 50%;\\n  transform: translateY(-50%);\\n  position: absolute;\\n  right: -20px;\\n  DE72425 if the clear is set with position absolute the devs need to take the space it takes into account, will change it to work like hour picker pattern (this way the behavior is consistent between patterns so it's another plus of doing this) */\\n}\\n.DateTimeRangePicker-clear:before {\\n  content: \\\"\\\\e604\\\";\\n  display: inline-block;\\n  transform: rotateZ(45deg);\\n}\\n.DateTimeRangePicker-clear.disabled {\\n  color: #777777;\\n  cursor: auto;\\n  /*display: none; DE72425*/\\n}\\n.DateTimeRangePicker-calendar-clear {\\n  color: #00bfa5;\\n  cursor: pointer;\\n  display: block;\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1.286em;\\n  -webkit-font-smoothing: antialiased;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: normal;\\n  line-height: 1;\\n  position: absolute;\\n  right: 10px;\\n  speak: none;\\n  text-transform: none;\\n  top: 10px;\\n}\\n.DateTimeRangePicker-calendar-clear:before {\\n  content: \\\"\\\\e604\\\";\\n  display: inline-block;\\n  transform: rotateZ(45deg);\\n}\\n.DateTimeRangePicker-calendar-clear.disabled {\\n  color: #777777;\\n  cursor: auto;\\n  display: none;\\n}\\n.DateTimeRangePicker-calendar-gotoday {\\n  color: #00bfa5;\\n  font-family: \\\"LatoBold\\\";\\n  text-align: center;\\n}\\n.DateTimeRangePicker-calendar-gotoday:hover {\\n  background-color: #f2fffd;\\n}\\n.DateTimeRangePicker > div {\\n  display: flex;\\n  position: relative;\\n  white-space: nowrap;\\n}\\n\\n.CalendarPopup {\\n  left: 50% !important;\\n  margin: 0 !important;\\n  max-width: 323px !important;\\n  min-width: 323px;\\n  position: absolute;\\n  top: 50% !important;\\n  transform: translate(-50%, -50%) !important;\\n}\\n.CalendarPopup::after, .CalendarPopup::before {\\n  display: none !important;\\n}\\n.CalendarPopup__Overlay {\\n  background-color: #131819;\\n  height: 100%;\\n  opacity: 0.3;\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n}\\n\\n.SmallPaddingInput .DateTimeRangePicker-input input[type=text] {\\n  padding-left: 10px;\\n}\\n.AR .SmallPaddingInput .DateTimeRangePicker-input input[type=text] {\\n  padding-left: 25px;\\n  padding-right: 10px;\\n}\\n\\n.AR .DateTimeRangePicker,\\n.FA .DateTimeRangePicker {\\n  display: inline-block;\\n  position: relative;\\n  vertical-align: middle;\\n}\\n.AR .DateTimeRangePicker-input:before, .AR .DateTimeRangePicker-displayed:before,\\n.FA .DateTimeRangePicker-input:before,\\n.FA .DateTimeRangePicker-displayed:before {\\n  left: 16px;\\n  right: auto;\\n}\\n.AR .DateTimeRangePicker-input input[type=text], .AR .DateTimeRangePicker-displayed input[type=text],\\n.FA .DateTimeRangePicker-input input[type=text],\\n.FA .DateTimeRangePicker-displayed input[type=text] {\\n  padding-left: 25px;\\n  padding-right: 16px;\\n}\\n.AR .DateTimeRangePicker-clear,\\n.FA .DateTimeRangePicker-clear {\\n  left: -20px;\\n  right: auto;\\n}\\n\\n/* UI DateRangePicker CSS - DateTimeRangePicker */\\n.daterangepicker {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 8px;\\n  display: none;\\n  left: 20px;\\n  margin-top: 7px;\\n  max-width: none;\\n  padding: 16px;\\n  position: absolute;\\n  top: 100px;\\n  width: auto;\\n  z-index: 31;\\n}\\n.daterangepicker:before, .daterangepicker:after {\\n  border-bottom-color: rgba(0, 0, 0, 0.2);\\n  content: \\\"\\\";\\n  display: inline-block;\\n  position: absolute;\\n}\\n.daterangepicker:before {\\n  border-bottom: 7px solid #d6d6d6;\\n  border-left: 7px solid transparent;\\n  border-right: 7px solid transparent;\\n  top: -7px;\\n}\\n.daterangepicker:after {\\n  border-bottom: 6px solid #fff;\\n  border-left: 6px solid transparent;\\n  border-right: 6px solid transparent;\\n  top: -6px;\\n}\\n.daterangepicker.opensleft:before {\\n  right: 9px;\\n}\\n.daterangepicker.opensleft:after {\\n  right: 10px;\\n}\\n.daterangepicker.openscenter:before {\\n  left: 0;\\n  margin-left: auto;\\n  margin-right: auto;\\n  right: 0;\\n  width: 0;\\n}\\n.daterangepicker.openscenter:after {\\n  left: 0;\\n  margin-left: auto;\\n  margin-right: auto;\\n  right: 0;\\n  width: 0;\\n}\\n.daterangepicker.opensright:before {\\n  left: 9px;\\n}\\n.daterangepicker.opensright:after {\\n  left: 10px;\\n}\\n.daterangepicker.drop-up {\\n  margin-top: -7px;\\n}\\n.daterangepicker.drop-up:before {\\n  border-bottom: initial;\\n  border-top: 7px solid #d6d6d6;\\n  bottom: -7px;\\n  top: initial;\\n}\\n.daterangepicker.drop-up:after {\\n  border-bottom: initial;\\n  border-top: 6px solid #fff;\\n  bottom: -6px;\\n  top: initial;\\n}\\n.daterangepicker.single .drp-selected {\\n  display: none;\\n}\\n.daterangepicker.single .calendar-table td.off {\\n  height: 40px;\\n  line-height: 40px;\\n  visibility: visible;\\n}\\n.daterangepicker.single .calendar-table td.start-date::before {\\n  background-color: #fff;\\n}\\n.daterangepicker.single .calendar-table td::before {\\n  content: unset;\\n}\\n.daterangepicker.show-calendar .drp-calendar {\\n  display: inline-block;\\n  vertical-align: top;\\n}\\n.daterangepicker.show-calendar .drp-buttons {\\n  display: block;\\n}\\n.daterangepicker.auto-apply .drp-buttons {\\n  display: none;\\n}\\n.daterangepicker.rtl .calendar-table th.next span {\\n  transform: rotate(135deg);\\n}\\n.daterangepicker.rtl .calendar-table th.prev span {\\n  transform: rotate(-45deg);\\n}\\n.daterangepicker.rtl .calendar-table th.month .yearselect,\\n.daterangepicker.rtl .calendar-table th.month .monthselect {\\n  background-position: 8px center;\\n}\\n.daterangepicker.rtl .calendar-time {\\n  direction: ltr;\\n}\\n.daterangepicker.rtl .drp-calendar.right {\\n  padding-left: 0;\\n  padding-right: 32px;\\n}\\n.daterangepicker .drp-selected {\\n  padding-right: 8px;\\n}\\n.daterangepicker .drp-calendar {\\n  display: none;\\n}\\n.daterangepicker .drp-calendar.single .calendar-table {\\n  border: none;\\n}\\n.daterangepicker .drp-calendar.right {\\n  padding-left: 32px;\\n}\\n.daterangepicker .drp-buttons {\\n  clear: both;\\n  display: none;\\n  line-height: 12px;\\n  margin-top: 8px;\\n  text-align: right;\\n  vertical-align: middle;\\n}\\n.daterangepicker .drp-buttons .btn {\\n  background-color: #00bfa5;\\n  border: 1px solid transparent;\\n  border-radius: 100px;\\n  color: #fff;\\n  cursor: pointer;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 0.929em;\\n  height: 30px;\\n  line-height: 0.929em;\\n  min-width: 76px;\\n  padding: 0 12px;\\n}\\n.daterangepicker .drp-buttons .btn.applyBtn:hover {\\n  background-color: #56d3c2;\\n  border: 1px solid transparent;\\n}\\n.daterangepicker .drp-buttons .btn.cancelBtn {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  color: #333;\\n  margin: 0 8px;\\n}\\n.daterangepicker .drp-buttons .btn.cancelBtn:hover {\\n  background-color: #ebebeb;\\n  border: 1px solid #d6d6d6;\\n  color: #333;\\n}\\n.daterangepicker .calendar-table thead tr:last-of-type {\\n  color: #777777;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 0.857em;\\n  height: 32px;\\n}\\n.daterangepicker .calendar-table thead tr:last-of-type th {\\n  font-size: 1em;\\n}\\n.daterangepicker .calendar-table th.next:hover,\\n.daterangepicker .calendar-table th.prev:hover {\\n  box-shadow: none;\\n}\\n.daterangepicker .calendar-table th.next span,\\n.daterangepicker .calendar-table th.prev span {\\n  border-color: #333;\\n  border-radius: 0;\\n  border-style: solid;\\n  border-width: 0 2px 2px 0;\\n  color: #fff;\\n  display: inline-block;\\n  padding: 3px;\\n}\\n.daterangepicker .calendar-table th.next span {\\n  transform: rotate(-45deg);\\n}\\n.daterangepicker .calendar-table th.prev span {\\n  transform: rotate(135deg);\\n}\\n.daterangepicker .calendar-table th.month {\\n  font-family: \\\"LatoBold\\\";\\n  width: auto;\\n}\\n.daterangepicker .calendar-table th.month .monthselect {\\n  min-width: 60px;\\n}\\n.daterangepicker .calendar-table th.month .yearselect {\\n  min-width: 70px;\\n}\\n.daterangepicker .calendar-table th.month .yearselect,\\n.daterangepicker .calendar-table th.month .monthselect {\\n  margin: 0 4px;\\n  padding: 0 8px;\\n}\\n.daterangepicker .calendar-table td.available,\\n.daterangepicker .calendar-table th.available {\\n  font-family: \\\"LatoBold\\\";\\n}\\n.daterangepicker .calendar-table td.available:hover,\\n.daterangepicker .calendar-table th.available:hover {\\n  background-color: #ebebeb;\\n}\\n.daterangepicker .calendar-table td.in-range {\\n  background-color: #f2fffd;\\n  color: #333;\\n}\\n.daterangepicker .calendar-table td.in-range::before {\\n  background-color: #f2fffd;\\n}\\n.daterangepicker .calendar-table td.today {\\n  background-color: #fff;\\n  box-shadow: inset 0 0 0 2px #00bfa5;\\n  color: #333;\\n}\\n.daterangepicker .calendar-table td.today:hover {\\n  background-color: #ebebeb;\\n}\\n.daterangepicker .calendar-table td.start-date::before {\\n  background-color: #f2fffd;\\n  border-bottom-left-radius: 100px;\\n  border-top-left-radius: 100px;\\n}\\n.daterangepicker .calendar-table td.end-date::before {\\n  background-color: #f2fffd;\\n  border-bottom-right-radius: 100px;\\n  border-top-right-radius: 100px;\\n}\\n.daterangepicker .calendar-table td.active {\\n  background-color: #00bfa5;\\n  border-radius: 100px;\\n  color: #fff;\\n}\\n.daterangepicker .calendar-table td.active:hover {\\n  background-color: #56d3c2;\\n  box-shadow: none;\\n}\\n.daterangepicker .calendar-table td.off {\\n  background-color: transparent;\\n  color: #777777;\\n  font-family: \\\"LatoRegular\\\";\\n  height: 0;\\n  line-height: 0;\\n  visibility: hidden;\\n}\\n.daterangepicker .calendar-table td.off:hover {\\n  background-color: #ebebeb;\\n  border-radius: 100px;\\n}\\n.daterangepicker .calendar-table td.disabled {\\n  color: #adadad;\\n  cursor: not-allowed;\\n  text-decoration: line-through;\\n}\\n.daterangepicker .calendar-table th,\\n.daterangepicker .calendar-table td {\\n  border: 1px solid transparent;\\n  border-radius: 100px;\\n  cursor: pointer;\\n  font-size: 1em;\\n  height: 40px;\\n  text-align: center;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n  width: 40px;\\n}\\n.daterangepicker .calendar-table th::before,\\n.daterangepicker .calendar-table td::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 40px;\\n  margin-top: -10px;\\n  position: absolute;\\n  width: 40px;\\n  z-index: -1;\\n}\\n.daterangepicker .calendar-time {\\n  line-height: 30px;\\n  margin: 8px auto 0 auto;\\n  position: relative;\\n  text-align: center;\\n}\\n.daterangepicker .calendar-time select.monthselect, .daterangepicker .calendar-time select.yearselect {\\n  cursor: default;\\n  height: auto;\\n  margin: 0;\\n  padding: 2px 5px;\\n}\\n.daterangepicker .calendar-time select.monthselect {\\n  margin-right: 2%;\\n  width: 56%;\\n}\\n.daterangepicker .calendar-time select.yearselect {\\n  width: 40%;\\n}\\n.daterangepicker .calendar-time select.hourselect, .daterangepicker .calendar-time select.minuteselect, .daterangepicker .calendar-time select.secondselect, .daterangepicker .calendar-time select.ampmselect {\\n  margin: 0 auto;\\n  outline: 0;\\n  padding: 0 0 0 10px;\\n  width: 50px;\\n}\\n.daterangepicker .calendar-time select.disabled {\\n  color: #777777;\\n  cursor: not-allowed;\\n}\\n.daterangepicker .ranges {\\n  float: none;\\n  margin: 0;\\n  text-align: left;\\n}\\n.daterangepicker .ranges ul {\\n  list-style: none;\\n  margin: 0 auto;\\n  padding: 0;\\n  width: 100%;\\n}\\n.daterangepicker .ranges li {\\n  cursor: pointer;\\n  font-size: 12px;\\n  padding: 8px 12px;\\n}\\n.daterangepicker .ranges li.active {\\n  background-color: #00bfa5;\\n  color: #fff;\\n}\\n.daterangepicker .ranges li:hover {\\n  background-color: #eee;\\n}\\n\\n.HourPicker {\\n  font-size: 1em;\\n  width: 100%;\\n}\\n.HourPicker:not(.HourPicker--textTrigger) .HourPicker__InputContainer:before {\\n  color: #00bfa5;\\n  content: \\\"\\\\e62a\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1.143em;\\n  position: absolute;\\n  right: 10px;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n.HourPicker--textTrigger .HourPicker__LabelValue {\\n  color: #00ac94;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: inherit;\\n  vertical-align: baseline;\\n}\\n.HourPicker--textTrigger .HourPicker__InputContainer {\\n  display: none;\\n}\\n.HourPicker__InputValue {\\n  font-size: inherit;\\n  padding-right: 26px;\\n  transition: all 0.3s ease;\\n  width: 100%;\\n}\\n.HourPicker__Placeholder {\\n  height: 0 !important;\\n  visibility: hidden;\\n  width: 0 !important;\\n}\\n.HourPicker__Displayed {\\n  align-items: center;\\n  display: flex;\\n  width: 100%;\\n}\\n.HourPicker__InputContainer {\\n  position: relative;\\n  width: 100%;\\n}\\n.HourPicker__ButtonClear {\\n  color: #00ac94;\\n  cursor: pointer;\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: inherit;\\n  -webkit-font-smoothing: antialiased;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: normal;\\n  margin: 0 10px;\\n  text-transform: none;\\n}\\n.HourPicker__ButtonClear:before {\\n  content: \\\"\\\\e604\\\";\\n  display: inline-block;\\n  transform: rotateZ(45deg);\\n}\\n\\n.SmallPaddingInput .HourPicker__InputContainer input {\\n  padding-left: 10px;\\n}\\n.AR .SmallPaddingInput .HourPicker__InputContainer input {\\n  padding-left: 16px;\\n  padding-right: 10px;\\n}\\n\\n/* RTL Adjustments - HourPicker */\\n.AR .HourPicker:not(.AR .HourPicker--textTrigger,\\n.FA .HourPicker--textTrigger) .HourPicker__InputContainer:before,\\n.FA .HourPicker:not(.AR .HourPicker--textTrigger,\\n.FA .HourPicker--textTrigger) .HourPicker__InputContainer:before {\\n  left: 10px;\\n  right: auto;\\n}\\n\\n/* UI TimePicker CSS - HourPicker */\\ndiv.ui-timepicker-container ::-webkit-scrollbar {\\n  box-sizing: border-box;\\n  height: 7px;\\n  width: 7px;\\n}\\ndiv.ui-timepicker-container ::-webkit-scrollbar-track {\\n  border-left: 5px solid #fff;\\n  border-right: 5px solid #fff;\\n}\\ndiv.ui-timepicker-container ::-webkit-scrollbar-thumb {\\n  border: 5px solid #d6d6d6;\\n  border-radius: 4px;\\n}\\ndiv.ui-timepicker-container {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  font-size: 1em;\\n  margin-top: 4px;\\n  min-width: 130px;\\n  z-index: 1 !important;\\n}\\ndiv.ui-timepicker-container .ui-state-hover {\\n  background-color: #f2fffd;\\n  border-color: transparent;\\n}\\ndiv.ui-timepicker-container .ui-corner-all {\\n  cursor: pointer;\\n  text-decoration: none;\\n}\\ndiv.ui-timepicker-container {\\n  /* RTL Adjustments - UI Timepicker */\\n}\\ndiv.ui-timepicker-container.rtl .ui-timepicker-viewport {\\n  list-style: none;\\n}\\ndiv.ui-timepicker-container.rtl.ui-timepicker-no-scrollbar .ui-timepicker-viewport {\\n  padding-left: 40px;\\n  padding-right: 0 !important;\\n}\\n\\n.IconVertical:hover {\\n  text-decoration: none;\\n}\\n.IconVertical {\\n  min-width: 50px;\\n}\\n.IconVertical.iconBorder {\\n  padding: 0 5px 0 10px;\\n}\\n\\n.iconVertical_icon {\\n  color: #00ac94;\\n  font-weight: 600;\\n}\\n.iconVertical_icon.IconGreenColor {\\n  color: #00ac94;\\n}\\n.iconVertical_icon.IconYellowColor {\\n  color: #ffa000;\\n}\\n.iconVertical_icon.IconRedColor {\\n  color: #ff3e2d;\\n}\\n.iconVertical_icon.IconSapphireWarningColor {\\n  color: #b10100;\\n}\\n.iconVertical_icon.IconOrangeColor {\\n  color: #c37b03;\\n}\\n.iconVertical_icon.IconDarkGreyColor {\\n  color: #333;\\n}\\n.iconVertical_icon.AllGreenIcon .icon {\\n  color: #00ac94;\\n}\\n.iconVertical_label {\\n  color: #777777;\\n  font-family: \\\"LatoRegular\\\";\\n  text-decoration: none;\\n}\\n.iconVertical_label.LabelGreen {\\n  color: #00ac94;\\n}\\n.iconVertical_label.LabelColorGreen {\\n  color: #00ac94;\\n}\\n.iconVertical_label.LabelColorYellow {\\n  color: #ffa000;\\n}\\n.iconVertical_label.LabelColorRed {\\n  color: #ff3e2d;\\n}\\n.iconVertical_label.LabelColorSapphireWarning {\\n  color: #b10100;\\n}\\n.iconVertical_label.LabelColorOrange {\\n  color: #c37b03;\\n}\\n.iconVertical_label.LabelColorDarkGrey {\\n  color: #333;\\n}\\n.iconVertical_icon.IconBlackColor {\\n  color: #333;\\n}\\n.iconVertical_label {\\n  font-size: 1em;\\n}\\n\\n.IconHorizontal:hover {\\n  text-decoration: none;\\n}\\n\\n.iconHorizontal_icon {\\n  color: #00ac94;\\n  font-weight: 600;\\n}\\n.iconHorizontal_icon.IconGreenColor {\\n  color: #00ac94;\\n}\\n.iconHorizontal_icon.IconYellowColor {\\n  color: #ffa000;\\n}\\n.iconHorizontal_icon.IconRedColor {\\n  color: #ff3e2d;\\n}\\n.iconHorizontal_icon.IconSapphireWarningColor {\\n  color: #b10100;\\n}\\n.iconHorizontal_icon.IconOrangeColor {\\n  color: #c37b03;\\n}\\n.iconHorizontal_icon.IconDarkGreyColor {\\n  color: #333;\\n}\\n.iconHorizontal_icon.AllGreenIcon .icon {\\n  color: #00ac94;\\n}\\n.iconHorizontal_label {\\n  color: #777777;\\n  font-family: \\\"LatoRegular\\\";\\n  text-decoration: none;\\n}\\n.iconHorizontal_label.LabelGreen {\\n  color: #00ac94;\\n}\\n.iconHorizontal_label.LabelColorGreen {\\n  color: #00ac94;\\n}\\n.iconHorizontal_label.LabelColorYellow {\\n  color: #ffa000;\\n}\\n.iconHorizontal_label.LabelColorRed {\\n  color: #ff3e2d;\\n}\\n.iconHorizontal_label.LabelColorSapphireWarning {\\n  color: #b10100;\\n}\\n.iconHorizontal_label.LabelColorOrange {\\n  color: #c37b03;\\n}\\n.iconHorizontal_label.LabelColorDarkGrey {\\n  color: #333;\\n}\\n.iconHorizontal {\\n  font-size: 1em;\\n}\\n.iconHorizontal.iconBorder {\\n  padding: 0 5px 0 10px;\\n}\\n.iconHorizontal_icon {\\n  line-height: 1.43;\\n  max-width: unset;\\n  text-align: center;\\n  vertical-align: middle;\\n}\\n.iconHorizontal_icon.IconBlackColor {\\n  color: #333;\\n  font-weight: bold;\\n}\\n.iconHorizontal_icon span.icon {\\n  display: inline-block;\\n  margin-right: 4px;\\n  margin-top: 4px;\\n}\\n.iconHorizontal_icon span.icon.icon-lg,\\n.iconHorizontal_icon span.icon.icon-1x {\\n  margin-right: 4px;\\n}\\n.iconHorizontal_icon span.icon.icon-2x {\\n  margin-right: 7px;\\n}\\n.iconHorizontal_icon span.icon.icon-3x,\\n.iconHorizontal_icon span.icon.icon-4x {\\n  margin-right: 5px;\\n}\\n.iconHorizontal_label {\\n  vertical-align: middle;\\n}\\n\\n.InvertIconLabel .iconHorizontal {\\n  text-align: left;\\n  transform: scale(-1, 1);\\n}\\n.InvertIconLabel .iconHorizontal_icon {\\n  display: inline-block;\\n  margin-right: 10px;\\n  vertical-align: middle;\\n}\\n.InvertIconLabel .iconHorizontal > div {\\n  transform: scale(-1, 1);\\n}\\n\\n.iconBorder {\\n  border-left: solid 1px #adadad;\\n  border-right: 0;\\n}\\n\\n.iconLabel-disabled,\\n.iconLabel-disabled .iconVertical_icon,\\n.iconLabel-disabled .iconHorizontal_icon,\\n.iconLabel-disabled .iconVertical_label.LabelGreen,\\n.iconLabel-disabled .iconHorizontal_label.LabelGreen,\\n.iconLabel-disabled .iconVertical_icon.AllGreenIcon .icon,\\n.iconLabel-disabled .iconHorizontal_icon.AllGreenIcon .icon {\\n  color: #adadad !important;\\n  cursor: auto;\\n  pointer-events: none;\\n}\\n\\na:link .IconVertical_label,\\na:link .iconVertical_label,\\na:link .IconHorizontal_label,\\na:link .iconHorizontal_label {\\n  font-family: \\\"LatoBold\\\";\\n}\\n.AR a:link .IconVertical_label,\\n.AR a:link .iconVertical_label,\\n.AR a:link .IconHorizontal_label,\\n.AR a:link .iconHorizontal_label {\\n  font-family: \\\"TajawalBold\\\";\\n}\\n\\n.AR .IconVertical,\\n.FA .IconVertical {\\n  padding: 0 10px 0 5px;\\n}\\n.AR .iconHorizontal_label,\\n.FA .iconHorizontal_label {\\n  font-family: \\\"TajawalRegular\\\";\\n}\\n.AR .iconHorizontal_icon,\\n.FA .iconHorizontal_icon {\\n  margin-right: 0 !important;\\n}\\n.AR .iconHorizontal_icon span.icon,\\n.FA .iconHorizontal_icon span.icon {\\n  margin-left: 4px;\\n}\\n.AR .iconHorizontal_icon span.icon.icon-lg,\\n.FA .iconHorizontal_icon span.icon.icon-lg {\\n  margin-left: 4px;\\n}\\n.AR .iconHorizontal_icon span.icon.icon-2x,\\n.FA .iconHorizontal_icon span.icon.icon-2x {\\n  margin-left: 7px;\\n}\\n.AR .iconHorizontal_icon span.icon.icon-3x,\\n.FA .iconHorizontal_icon span.icon.icon-3x {\\n  margin-left: 5px;\\n}\\n.AR .iconHorizontal_icon span.icon.icon-4x,\\n.FA .iconHorizontal_icon span.icon.icon-4x {\\n  margin-left: 5px;\\n}\\n.AR .iconBorder,\\n.FA .iconBorder {\\n  border-left: 0;\\n  border-right: solid 1px #adadad;\\n}\\n\\n.Panel.ConfirmWB {\\n  display: none;\\n  position: absolute;\\n}\\n\\n.PanelContainer.ConfirmWB {\\n  max-width: 450px;\\n}\\n.PanelContainer.ConfirmWB .PanelActions {\\n  display: flex;\\n  gap: 8px;\\n  justify-content: center;\\n}\\n\\nbody.SapphirePanelOpen .PanelContainer.ConfirmWB,\\nbody.SapphirePanelOpen .PanelContainer.Confirm {\\n  display: block !important;\\n}\\n\\nbody.confirmation-opened {\\n  overflow: hidden;\\n  position: static;\\n}\\n\\n.confirm.confirm-wb {\\n  position: absolute;\\n  z-index: 4015;\\n}\\n\\n.confirm-background.confirm-wb {\\n  background-image: radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2));\\n  bottom: 0;\\n  color: #333;\\n  left: 0;\\n  position: fixed;\\n  right: 0;\\n  top: 0;\\n  transition: all 0.14s ease;\\n  z-index: 49;\\n}\\n\\n.confirm-container.confirm-wb {\\n  background: #fff;\\n  border-radius: 8px;\\n  display: none;\\n  left: 50%;\\n  max-width: 480px;\\n  padding: 32px;\\n  position: fixed;\\n  text-align: center;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 100%;\\n  z-index: 51;\\n}\\n\\n.confirm-container.confirm-wb .confirm-title {\\n  color: #333;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.429em;\\n  margin-bottom: 20px;\\n}\\n\\n.confirm-container.confirm-wb .confirm-message {\\n  font-size: 1em;\\n  line-height: normal;\\n  margin-bottom: 30px;\\n  white-space: normal;\\n}\\n\\n.PanelContainer.Confirm .PanelMessage {\\n  font-size: 1em;\\n  margin-bottom: 30px;\\n}\\n.PanelContainer.Confirm .PanelActions .ButtonLink.Is_Default {\\n  padding: 0;\\n}\\n\\n.modalPopup {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  display: none;\\n  height: 100%;\\n  left: 0;\\n  position: fixed;\\n  right: 0;\\n  top: 0;\\n  width: 100%;\\n  z-index: 20;\\n}\\n.modalPopup.Open {\\n  display: flex;\\n}\\n.modalPopup.Open.showclose .modalPopup_close {\\n  cursor: pointer;\\n  display: inline-block;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1em;\\n  max-width: 15px;\\n  position: absolute;\\n  right: 32px;\\n  top: 20px;\\n}\\n.modalPopup.Open .modalPopup_container {\\n  background-color: #fff;\\n  border-radius: 8px;\\n  display: block;\\n  max-height: 80vh;\\n  min-width: 250px;\\n  padding: 16px 32px;\\n  position: fixed;\\n  width: auto;\\n  z-index: 60;\\n}\\n.modalPopup.Open .modalPopup_close {\\n  display: none;\\n}\\n.modalPopup.Open .modalPopup_title {\\n  border-bottom: 1px solid #d6d6d6;\\n  margin-left: -32px;\\n  margin-right: -32px;\\n  padding: 0 32px 16px 32px;\\n}\\n.modalPopup.Open .modalPopup_title:empty {\\n  content: \\\" \\\";\\n}\\n.AR .modalPopup.Open .modalPopup_title {\\n  font-family: \\\"TajawalBold\\\";\\n}\\n.modalPopup.Open .modalPopup_content {\\n  height: 100%;\\n}\\n.modalPopup.Open .modalPopup_content > div {\\n  display: flex;\\n  flex-direction: column;\\n  max-height: calc(80vh - 60px);\\n}\\n.modalPopup.Open .modalPopup_content .Scrollable {\\n  margin-right: -8px;\\n  max-width: 900px;\\n  overscroll-behavior: contain;\\n  padding-right: 8px;\\n}\\n.modalPopup.Open .modalPopup_content .Scrollable .ListRecords > *:first-child {\\n  margin-top: 24px;\\n}\\n.AR .modalPopup.Open .modalPopup_content .Scrollable {\\n  margin-left: -8px;\\n  margin-right: 0;\\n  padding-left: 8px;\\n  padding-right: 0;\\n}\\n.modalPopup.Open .modalPopup_div {\\n  background: rgba(0, 0, 0, 0.3);\\n  height: 100%;\\n  left: 0;\\n  overflow: none;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  z-index: 50;\\n}\\n.modalPopup.Open .modalPopup_actions {\\n  margin-top: 16px;\\n  text-align: right;\\n}\\n\\n.CustomModalPopup {\\n  margin: -16px -32px;\\n  text-align: start;\\n}\\n.CustomModalPopup__Header, .CustomModalPopup__Footer {\\n  align-items: center;\\n  display: inline-flex;\\n  justify-content: space-between;\\n  padding: 16px 24px;\\n}\\n.CustomModalPopup__Header {\\n  border-bottom: 1px solid #d6d6d6;\\n  font-size: 14px;\\n  width: 100%;\\n}\\n.CustomModalPopup__Content {\\n  padding: 24px;\\n}\\n.CustomModalPopup__Footer {\\n  background-color: #f3f3f3;\\n  border-top: 1px solid #d6d6d6;\\n}\\n\\n.PanelById {\\n  -servicestudio-height: auto !important;\\n  -servicestudio-position: relative !important;\\n  -servicestudio-width: 100% !important;\\n}\\n.PanelById .Panel {\\n  display: none;\\n  -servicestudio-display: block !important;\\n  -servicestudio-margin: 0 auto !important;\\n  -servicestudio-position: relative !important;\\n}\\n.PanelById .Panel .PanelContainer {\\n  max-width: 800px;\\n  overflow: unset !important;\\n  z-index: 4;\\n  -servicestudio-display: block !important;\\n  -servicestudio-width: 1500px !important;\\n  -servicestudio-z-index: 0;\\n}\\n.PanelById .Panel .PanelContainer.done {\\n  bottom: 0;\\n}\\n.PanelById .PanelMessage .CheckboxInput {\\n  margin-top: 10px;\\n}\\n.PanelById .PanelBackground {\\n  -servicestudio-display: none !important;\\n}\\n\\n.desktop.hd .PanelById .PanelContainer {\\n  max-height: 700px;\\n  top: 50%;\\n}\\n.desktop.small .PanelById .PanelContainer {\\n  max-height: 600px;\\n  overflow-y: auto;\\n  top: 50%;\\n}\\n.desktop.small .PanelContainer {\\n  max-height: 487px;\\n  overflow-y: auto;\\n  top: 60%;\\n}\\n\\n.Page .PanelById {\\n  -servicestudio-display: none !important;\\n}\\n\\n.PanelContainer.Confirm {\\n  max-width: 400px;\\n}\\n.PanelContainer.Confirm .PanelActions {\\n  white-space: nowrap;\\n}\\n\\n.button-collapse {\\n  display: none;\\n}\\n\\n.Panel {\\n  background-color: transparent;\\n  border: none;\\n  box-shadow: none;\\n  display: none;\\n  font-size: 14px;\\n  position: absolute;\\n}\\n.Panel .PanelBackground {\\n  background-image: radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2));\\n  bottom: 0;\\n  left: 0;\\n  position: fixed;\\n  right: 0;\\n  top: 0;\\n  transition: all 0.14s ease;\\n  z-index: 4;\\n}\\n.Panel .PanelContainer {\\n  left: 50%;\\n  position: absolute;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: #fff;\\n  border-radius: 8px;\\n  display: none;\\n  padding: 32px;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  z-index: 4;\\n}\\n.Panel .PanelContainer .PanelTitle {\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.429em;\\n  margin-bottom: 20px;\\n}\\n.Panel .PanelContainer .PanelMessage {\\n  font-size: 1em;\\n  line-height: normal;\\n  margin-bottom: 30px;\\n  white-space: normal;\\n}\\n\\n.PanelOpened {\\n  overflow: auto;\\n  position: static;\\n}\\n\\n.SapphirePopup {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  z-index: 4012;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup {\\n  border: none;\\n  border-radius: 8px;\\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;\\n  position: relative;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup iframe,\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-content {\\n  border-radius: 8px;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-titlebar {\\n  background: none;\\n  display: none;\\n  height: 0;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-titlebar-close {\\n  background: none;\\n  cursor: pointer;\\n  height: 20px;\\n  right: 30px;\\n  top: 16px;\\n  width: 14px;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-titlebar-close:after {\\n  color: #333;\\n  content: \\\"\\\\e60c\\\";\\n  display: block;\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1em;\\n  left: 0;\\n  position: absolute;\\n  top: 0;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-titlebar-close:hover {\\n  opacity: 1;\\n  transform: rotate(0);\\n}\\n\\n.SelectSystem.select2-container--default .select2-results > .select2-results__options {\\n  max-height: 180px;\\n}\\n\\n.select2 {\\n  width: 100%;\\n}\\n.select2.select2-container--disabled .select2-selection[aria-disabled=true] {\\n  background-color: #ebebeb;\\n  border-color: #d6d6d6;\\n}\\n.select2.select2-container--disabled .select2-selection[aria-disabled=true]:hover {\\n  background-color: #ebebeb;\\n  border-color: #d6d6d6;\\n  border-left-color: #00bfa5;\\n}\\n.select2.select2-container--disabled .select2-selection[aria-disabled=true]:after {\\n  filter: grayscale(100%);\\n  display: none;\\n}\\n.select2.select2-container--disabled .select2-selection[aria-disabled=true] .select2-selection__rendered {\\n  color: #777777;\\n}\\n.select2.select2-container--focus .select2-selection, .select2.select2-container--focus .select2-selection:hover {\\n  background-color: #fff;\\n  border-color: #00bfa5;\\n}\\n.select2.select2-container--open .select2-selection, .select2.select2-container--open .select2-selection:hover {\\n  background-color: #f2fffd;\\n  border-color: #00bfa5;\\n}\\n.select2.select2-container--open .select2-selection[aria-disabled=false] {\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n}\\n.select2 .select2-selection {\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  line-height: 0;\\n  min-height: 36px;\\n  padding-right: 46px;\\n  transition: all 0.1s ease-in;\\n}\\n.select2 .select2-selection:hover {\\n  background-color: #f2fffd;\\n  border-color: #00bfa5;\\n}\\n.select2 .select2-selection:after {\\n  background-color: #fff;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position-x: center;\\n  background-position-y: center;\\n  background-repeat: no-repeat;\\n  border: none;\\n  content: \\\"\\\";\\n  height: 30px;\\n  left: auto;\\n  margin: 0;\\n  position: absolute;\\n  right: 20px;\\n  top: 1px;\\n  width: 10px;\\n  background-color: transparent;\\n  height: 12px;\\n  right: 15px;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n.select2 .select2-selection.select2-selection--multiple.tagCustom {\\n  align-items: center;\\n  display: flex;\\n  border-radius: 100px;\\n}\\n.select2 .select2-selection.select2-selection--multiple.tagCustom:before {\\n  color: #777777;\\n  content: \\\"\\\\e690\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1.143em;\\n  line-height: 20px;\\n  padding-right: 10px;\\n  pointer-events: none;\\n  top: 8px;\\n  transform: rotateY(180deg);\\n  z-index: 1;\\n}\\n.select2 .select2-selection.select2-selection--multiple.MultipleSelect .select2-selection__rendered > li:nth-child(n+2) {\\n  display: none;\\n}\\n.select2 .select2-selection.select2-selection--multiple.MultipleSelect .select2-selection__rendered .select2-selection__choice:first-child {\\n  background-color: transparent;\\n  padding-left: 0;\\n}\\n.select2 .select2-selection.select2-selection--multiple.MultipleSelect .select2-selection__rendered .select2-selection__choice:first-child .select2-selection__choice__remove {\\n  display: none;\\n}\\n.select2 .select2-selection.select2-selection--multiple .select2-selection__rendered {\\n  height: 100%;\\n  line-height: inherit;\\n}\\n.select2 .select2-selection .select2-selection__rendered {\\n  color: #333;\\n  line-height: 36px;\\n  padding-left: 16px;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-search {\\n  height: calc(36px - 2px);\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-search:only-child {\\n  width: 100%;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-search:only-child .select2-search__field {\\n  min-width: -moz-fit-content;\\n  min-width: fit-content;\\n  padding-left: 0 !important;\\n  width: 100% !important;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-search .select2-search__field {\\n  height: 36px;\\n  line-height: calc(36px - 2px);\\n  margin-top: -2px;\\n  padding-left: 0 !important;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-search .select2-search__field::-moz-placeholder {\\n  color: #adadad;\\n  font-family: \\\"LatoRegular\\\";\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-search .select2-search__field::placeholder {\\n  color: #adadad;\\n  font-family: \\\"LatoRegular\\\";\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-selection__choice {\\n  width: auto;\\n  background-color: #c4f0eb;\\n  border: none;\\n  border-radius: 0;\\n  cursor: default;\\n  display: inline-block;\\n  font-family: \\\"LatoBold\\\";\\n  line-height: 22px;\\n  margin-top: 4px;\\n  padding: 2px 25px 2px 15px;\\n  position: relative;\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-selection__choice > div {\\n  max-width: 350px;\\n  overflow: hidden;\\n  white-space: nowrap;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-selection__choice .select2-selection__choice__remove {\\n  border-radius: 50%;\\n  color: #333;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1em;\\n  height: 14px;\\n  line-height: 13px;\\n  margin: 0;\\n  padding: 0;\\n  position: absolute;\\n  right: 6px;\\n  text-align: center;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  width: 14px;\\n}\\n.select2 .select2-selection .select2-selection__rendered .select2-selection__choice .select2-selection__choice__remove:hover {\\n  background-color: rgba(51, 51, 51, 0.2);\\n}\\n.select2 .select2-selection .select2-selection__arrow {\\n  display: none;\\n}\\n\\n.select2-container .select2-dropdown {\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  min-width: 215px;\\n  overflow: hidden;\\n}\\n.select2-container .select2-dropdown--below {\\n  margin-top: 4px;\\n}\\n.select2-container .select2-dropdown--above {\\n  margin-top: -4px;\\n}\\n.select2-container .select2-dropdown.MultipleSelect .select2-results__option:before {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  content: \\\"\\\";\\n  display: inline-block;\\n  height: 20px;\\n  margin-right: 16px;\\n  position: relative;\\n  vertical-align: middle;\\n  width: 20px;\\n}\\n.select2-container .select2-dropdown.MultipleSelect .select2-results__option[aria-selected=true] {\\n  background-color: #f2fffd;\\n}\\n.select2-container .select2-dropdown.MultipleSelect .select2-results__option[aria-selected=true]:before {\\n  background-color: #fff;\\n  color: #00ac94;\\n  content: \\\"\\\\f00c\\\";\\n  display: inline-block;\\n  font-family: FontAwesome;\\n  height: 18px;\\n  line-height: 19px;\\n  padding: 1px;\\n  text-align: center;\\n  width: 18px;\\n}\\n.select2-container .select2-dropdown.MultipleSelect .select2-results__option--highlighted[aria-selected] {\\n  background-color: #f2fffd;\\n  color: #333;\\n}\\n.select2-container .select2-dropdown .select2-search {\\n  padding: 8px;\\n}\\n.select2-container .select2-dropdown .select2-search .select2-search__field {\\n  background: none;\\n  border: 1px solid #00bfa5;\\n  border-radius: 100px;\\n  padding: 0 36px 0 12px !important;\\n}\\n.select2-container .select2-dropdown .select2-search--dropdown:after {\\n  color: #adadad;\\n  content: \\\"\\\\e690\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1.286em;\\n  position: absolute;\\n  right: 22px;\\n  top: 12px;\\n  transform: rotate(270deg);\\n}\\n.select2-container .select2-dropdown .select2-results .select2-results__options::-webkit-scrollbar {\\n  background-color: #fff;\\n  height: 14px;\\n  width: 14px;\\n}\\n.select2-container .select2-dropdown .select2-results .select2-results__options::-webkit-scrollbar-thumb {\\n  background-color: #d6d6d6;\\n  background-clip: padding-box;\\n  border: 4px solid rgba(0, 0, 0, 0);\\n  border-radius: 9999px;\\n}\\n.select2-container .select2-dropdown .select2-results .select2-results__options li.select2-results__option {\\n  border-bottom: none;\\n  padding: 8px;\\n}\\n.select2-container .select2-dropdown .select2-results .select2-results__options li.select2-results__option[aria-selected=true] {\\n  background-color: #00bfa5;\\n  color: #fff;\\n}\\n.select2-container .select2-dropdown .select2-results .select2-results__options li.select2-results__option[aria-selected=true] .fontSelect2Availability {\\n  color: #fff;\\n}\\n.select2-container .select2-dropdown .select2-results .select2-results__options li.select2-results__option.select2-results__option--highlighted[aria-selected=false] {\\n  background-color: #f2fffd;\\n  color: #333;\\n}\\n\\n.Mandatory + .select2.select2-container .select2-selection {\\n  border-left: 3px solid #00bfa5;\\n}\\n\\n.fontSelect2Title {\\n  display: inline-block;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1em;\\n  min-width: 49%;\\n  padding-right: 10px;\\n  width: auto;\\n}\\n\\n.fontSelect2Availability {\\n  color: #00ac94;\\n  display: inline-block;\\n  font-size: 1em;\\n  width: auto;\\n}\\n\\n.SelectSystemFilter .select2 .select2-selection {\\n  border-radius: 100px !important;\\n}\\n\\n.SelectSystemFilter-Selected .select2 .select2-selection {\\n  border: 2px solid #00bfa5;\\n}\\n.SelectSystemFilter-Selected .select2 .select2-selection .select2-selection__rendered {\\n  line-height: 34px;\\n}\\n\\n.isTouch .select2 .select2-selection {\\n  height: 50px;\\n}\\n.isTouch .select2 .select2-selection .select2-selection__rendered {\\n  line-height: 50px;\\n}\\n\\n.AR .select2 .select2-selection,\\n.FA .select2 .select2-selection {\\n  direction: rtl;\\n}\\n.AR .select2 .select2-selection:after,\\n.FA .select2 .select2-selection:after {\\n  left: 16px;\\n  right: auto;\\n}\\n.AR .select2 .select2-selection.select2-selection--multiple.tagCustom:before,\\n.FA .select2 .select2-selection.select2-selection--multiple.tagCustom:before {\\n  left: unset;\\n  padding: 0;\\n  position: absolute;\\n  right: 14px;\\n}\\n.AR .select2 .select2-selection.select2-selection--multiple.tagCustom .select2-selection__rendered,\\n.FA .select2 .select2-selection.select2-selection--multiple.tagCustom .select2-selection__rendered {\\n  padding-left: 36px;\\n  padding-right: 36px;\\n}\\n.AR .select2 .select2-selection.select2-selection--single.customSelect .select2-selection__rendered,\\n.FA .select2 .select2-selection.select2-selection--single.customSelect .select2-selection__rendered {\\n  width: 100%;\\n}\\n.AR .select2 .select2-selection.select2-selection--multiple.tagSystem .select2-selection__rendered,\\n.FA .select2 .select2-selection.select2-selection--multiple.tagSystem .select2-selection__rendered {\\n  padding-left: 36px;\\n}\\n.AR .select2 .select2-selection .select2-selection__rendered,\\n.FA .select2 .select2-selection .select2-selection__rendered {\\n  padding-left: 36px;\\n  padding-right: 16px;\\n}\\n.AR .select2 .select2-selection .select2-selection__rendered .select2-selection__choice,\\n.FA .select2 .select2-selection .select2-selection__rendered .select2-selection__choice {\\n  padding-left: 25px;\\n  padding-right: 15px;\\n}\\n.AR .select2 .select2-selection .select2-selection__rendered .select2-selection__choice .select2-selection__choice__remove,\\n.FA .select2 .select2-selection .select2-selection__rendered .select2-selection__choice .select2-selection__choice__remove {\\n  left: 6px;\\n  right: auto;\\n}\\n.AR .select2-container .select2-dropdown.MultipleSelect .select2-results__option:before,\\n.FA .select2-container .select2-dropdown.MultipleSelect .select2-results__option:before {\\n  margin-left: 16px;\\n  margin-right: 0;\\n}\\n.AR .select2-container .select2-dropdown .select2-search .select2-search__field,\\n.FA .select2-container .select2-dropdown .select2-search .select2-search__field {\\n  direction: rtl;\\n  padding: 0 12px 0 36px !important;\\n  text-align: right;\\n}\\n.AR .select2-container .select2-dropdown .select2-search--dropdown:after,\\n.FA .select2-container .select2-dropdown .select2-search--dropdown:after {\\n  left: 22px;\\n  right: unset;\\n}\\n.AR .select2-container .select2-dropdown .select2-results,\\n.FA .select2-container .select2-dropdown .select2-results {\\n  direction: rtl;\\n}\\n.AR .select2-container .select2-dropdown .select2-results .select2-results__option,\\n.FA .select2-container .select2-dropdown .select2-results .select2-results__option {\\n  text-align: right;\\n}\\n\\n.WizardContent.active .WizardContent__Number {\\n  background-color: #00bfa5;\\n  color: #fff;\\n  opacity: 1;\\n}\\n.WizardContent.active .WizardContent__Label {\\n  font-family: \\\"LatoBold\\\";\\n  line-height: 23px;\\n}\\n.WizardContent:last-of-type .WizardContent_Separator {\\n  display: none;\\n}\\n.WizardContent_Details.DisableWizard {\\n  cursor: default;\\n  pointer-events: none;\\n}\\n.WizardContent_Details.DisableWizard .WizardContent__Number {\\n  color: #d6d6d6;\\n}\\n.WizardContent_Details,\\n.WizardContent_Details label {\\n  cursor: pointer;\\n}\\n.WizardContent__Number {\\n  background-color: #f3f3f3;\\n  border-radius: 50%;\\n  color: #00ac94;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1.143em;\\n  height: 26px;\\n  line-height: 24px;\\n  text-align: center;\\n  width: 26px;\\n}\\n.WizardContent__Number > div {\\n  height: 26px;\\n  width: 26px;\\n}\\n.WizardContent__Label {\\n  font-size: 1.143em;\\n  line-height: 23px;\\n  margin-left: 9px;\\n  text-align: center;\\n}\\n.WizardContent_Separator {\\n  background-color: #d6d6d6;\\n  height: 2px;\\n  margin: 13px 10px 10px 9px;\\n  width: 120px;\\n}\\n\\n.AR .WizardContent__Label,\\n.FA .WizardContent__Label {\\n  margin-left: 0;\\n  margin-right: 9px;\\n}\\n\\n.DropZoneWrapper {\\n  display: inline;\\n}\\n.DropZoneWrapper--horizontal .FileUploadDropZone {\\n  display: flex;\\n  gap: 8px;\\n}\\n.DropZoneWrapper .dropzone {\\n  background: #fff;\\n  border: 1px dashed #adadad;\\n  border-radius: 8px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-height: 56px;\\n  padding: 0;\\n}\\n.DropZoneWrapper .dropzone.dz-started .dz-message {\\n  display: inline-block;\\n  height: 100%;\\n  margin: 0 5px;\\n  position: relative;\\n  right: 0;\\n  top: 0px;\\n  z-index: 50;\\n}\\n.DropZoneWrapper .dropzone .dz-message {\\n  font-size: 14px;\\n  line-height: 56px;\\n  margin: 0;\\n  text-align: center;\\n  width: 100%;\\n}\\n.DropZoneWrapper .dropzone .dz-preview {\\n  height: 100%;\\n  line-height: 34px;\\n  margin: 0;\\n  min-height: 34px;\\n  text-align: right;\\n  vertical-align: middle;\\n  width: 100%;\\n  z-index: 1;\\n}\\n.DropZoneWrapper .dropzone .dz-preview.dz-file-preview .dz-details {\\n  opacity: 0;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-details {\\n  line-height: 20px;\\n  opacity: 1;\\n  padding: 0;\\n  position: static;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-details .dz-size {\\n  display: none;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-details .dz-filename {\\n  display: inline-block;\\n  height: auto;\\n  line-height: initial;\\n  margin: 0 5px;\\n  max-width: 150px;\\n  overflow: hidden;\\n  padding: 0;\\n  text-overflow: ellipsis;\\n  vertical-align: middle;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-details .dz-filename span {\\n  height: auto;\\n  line-height: initial;\\n  margin: 0 5px;\\n  padding: 0;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-image {\\n  display: none;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-progress {\\n  background: #c4f0eb;\\n  border: 1px solid #00ac94;\\n  border-radius: 4px;\\n  height: 10px;\\n  top: 20px;\\n  width: 120px;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-progress .dz-upload {\\n  background: #00ac94;\\n  height: 10px;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-error-mark,\\n.DropZoneWrapper .dropzone .dz-preview .dz-success-mark,\\n.DropZoneWrapper .dropzone .dz-preview .dz-error-message {\\n  display: none;\\n}\\n.DropZoneWrapper .dropzone .dz-preview .dz-success.dz-complete {\\n  display: none;\\n}\\n\\n.FileUploadDropZone {\\n  display: inline-block;\\n  height: auto;\\n  padding: 0 2px;\\n  position: relative;\\n}\\n.FileUploadDropZone .dropzone {\\n  background: transparent;\\n  border: none;\\n}\\n.FileUploadDropZone .dropzone.dz-started .dz-default.dz-message:after {\\n  display: block;\\n  font-size: 12px;\\n  margin-top: 4px;\\n}\\n.FileUploadDropZone .dropzone.dz-clickable {\\n  line-height: unset;\\n  min-height: 0;\\n  padding-bottom: 4px;\\n  padding-top: 0px;\\n}\\n.FileUploadDropZone .dropzone.dz-clickable div.dz-default.dz-message {\\n  display: inline-flex;\\n  justify-content: center;\\n  margin: 0;\\n}\\n.FileUploadDropZone .dropzone.dz-clickable div.dz-default.dz-message .dz-button {\\n  display: none;\\n}\\n.FileUploadDropZone .dropzone .dz-message {\\n  font-size: 1em;\\n  font-weight: 400;\\n  text-align: right;\\n}\\n.FileUploadDropZone .dropzone .dz-message.dz-message:before {\\n  color: #00ac94;\\n  content: \\\"\\\\e931\\\";\\n  display: block;\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 1em;\\n  -webkit-font-smoothing: antialiased;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: normal;\\n  line-height: 1;\\n  margin-top: 2px;\\n  text-align: right;\\n  text-transform: none;\\n}\\n.FileUploadDropZone .dropzone .dz-message.dz-message:after {\\n  display: block;\\n}\\n.FileUploadDropZone .dropzone .dz-message.dz-message:hover:before {\\n  color: #00ac94;\\n}\\n.FileUploadDropZone .dropzone .dz-message.dz-message span,\\n.FileUploadDropZone .dropzone .dz-message.dz-message .dz-button {\\n  display: none;\\n}\\n.FileUploadDropZone .dropzone .dz-preview {\\n  display: none;\\n}\\n.FileUploadDropZone .UploadMessageClass {\\n  bottom: 2px;\\n  color: #00ac94;\\n  cursor: pointer;\\n  font-family: \\\"LatoBold\\\";\\n  font-size: 1em;\\n  line-height: 20px;\\n}\\n\\n.DarkGreyLabel .UploadMessageClass {\\n  color: #333;\\n}\\n\\n.DropZoneButtonThird {\\n  display: inline-block;\\n}\\n.DropZoneButtonThird .DropZoneWrapper .FileUploadDropZone {\\n  align-items: center;\\n  display: flex;\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 100px;\\n  font-size: 13px;\\n  gap: 8px;\\n  height: 30px;\\n  padding: 6px 12px;\\n  transition: all 0.1s ease-in-out;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n.DropZoneButtonThird .DropZoneWrapper .FileUploadDropZone:hover {\\n  background-color: #ebebeb;\\n}\\n.DropZoneButtonThird .DropZoneWrapper .FileUploadDropZone .dropzone.dz-clickable {\\n  padding: 0;\\n}\\n.DropZoneButtonThird .DropZoneWrapper .FileUploadDropZone .dropzone .dz-message {\\n  font-size: unset;\\n}\\n.DropZoneButtonThird .DropZoneWrapper .FileUploadDropZone .dropzone .dz-message::before {\\n  color: #333;\\n  font-size: 1.1467992em;\\n}\\n.DropZoneButtonThird .DropZoneWrapper .FileUploadDropZone .UploadMessageClass {\\n  color: #333;\\n}\\n\\n.AR .FileUploadDropZone .dropzone .dz-default.dz-message:before,\\n.FA .FileUploadDropZone .dropzone .dz-default.dz-message:before {\\n  margin-left: 28px;\\n  text-align: left;\\n}\\n\\ndiv.WizardParent {\\n  position: relative;\\n  padding-right: 1px;\\n  border: none;\\n}\\n.AR div.WizardParent {\\n  padding-left: 1px;\\n  padding-right: 0;\\n}\\ndiv.WizardParent > div {\\n  display: flex;\\n}\\ndiv.WizardParent > div > .ListRecords {\\n  display: flex;\\n  width: 100%;\\n}\\n.ParentGreyBG div.WizardParent > div::after {\\n  background: #f3f3f3;\\n}\\ndiv.WizardParent > div div.WizardStep {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 36px;\\n  margin-left: -18px;\\n  padding: 0;\\n  border: 1px solid #d6d6d6;\\n  flex: 1;\\n  font-family: \\\"LatoRegular\\\";\\n  font-weight: unset;\\n  -servicestudio-width: auto;\\n  -servicestudio-padding: 0 40px 0 20px;\\n}\\n.AR div.WizardParent > div div.WizardStep {\\n  margin-left: 0;\\n  margin-right: -18px;\\n}\\ndiv.WizardParent > div div.WizardStep::after {\\n  height: 24px;\\n  width: 24px;\\n  top: 5px;\\n  border: none;\\n  border-right: 1px solid #d6d6d6;\\n  border-top: 1px solid #d6d6d6;\\n  border-top-right-radius: 6px;\\n  transform: rotate(45deg);\\n  background-color: #fff;\\n  right: 4px;\\n}\\n.AR div.WizardParent > div div.WizardStep::after {\\n  border: none;\\n  border-bottom: 1px solid #d6d6d6;\\n  border-left: 1px solid #d6d6d6;\\n  border-radius: 0;\\n  border-top-left-radius: 6px;\\n  height: 26px;\\n  left: 3px;\\n  right: unset;\\n  top: 2px;\\n  width: 26px;\\n}\\ndiv.WizardParent > div div.WizardStep.LastStep::after, div.WizardParent > div div.WizardStep:last-child::after {\\n  display: none;\\n}\\ndiv.WizardParent > div div.WizardStep::before {\\n  display: none;\\n}\\ndiv.WizardParent > div div.WizardStep:first-of-type {\\n  border-bottom-left-radius: 4px;\\n  border-top-left-radius: 4px;\\n  margin-left: 0;\\n}\\ndiv.WizardParent > div div.WizardStep:first-of-type::before {\\n  display: none !important;\\n}\\n.AR div.WizardParent > div div.WizardStep:first-of-type {\\n  border-radius: 0;\\n  border-bottom-right-radius: 4px;\\n  border-right: 1px solid #d6d6d6;\\n  border-top-right-radius: 4px;\\n  margin-right: 0;\\n}\\ndiv.WizardParent > div div.WizardStep:not(:first-of-type) {\\n  border-left-width: 0;\\n}\\n.AR div.WizardParent > div div.WizardStep:not(:first-of-type) {\\n  border-left-width: 1px;\\n  border-right-width: 0;\\n}\\ndiv.WizardParent > div div.WizardStep:last-of-type {\\n  border-bottom-right-radius: 4px;\\n  border-top-right-radius: 4px;\\n}\\n.AR div.WizardParent > div div.WizardStep:last-of-type {\\n  border-radius: 0;\\n  border-bottom-left-radius: 4px;\\n  border-top-left-radius: 4px;\\n}\\ndiv.WizardParent > div div.WizardStep.Past {\\n  background-color: #f3f3f3;\\n}\\ndiv.WizardParent > div div.WizardStep.Past::after {\\n  background-color: #f3f3f3;\\n}\\ndiv.WizardParent > div div.WizardStep.Past .IconWizard.IconWizardWhite {\\n  background-color: #fff;\\n  border: 1px solid transparent;\\n  color: #00ac94;\\n}\\ndiv.WizardParent > div div.WizardStep.ActiveStep {\\n  background-color: #f2fffd;\\n  border-color: #00bfa5;\\n  color: #333;\\n  font-family: \\\"LatoBold\\\";\\n}\\n.AR div.WizardParent > div div.WizardStep.ActiveStep {\\n  border-right: 1px solid #00bfa5;\\n}\\ndiv.WizardParent > div div.WizardStep.ActiveStep::after {\\n  background-color: #f2fffd;\\n  border-right-color: #00bfa5;\\n  border-top-color: #00bfa5;\\n}\\n.AR div.WizardParent > div div.WizardStep.ActiveStep::after {\\n  border-bottom-color: #00bfa5;\\n  border-left-color: #00bfa5;\\n}\\ndiv.WizardParent > div div.WizardStep.ActiveStep::before {\\n  height: 24px;\\n  width: 24px;\\n  top: 5px;\\n  border: none;\\n  border-right: 1px solid #d6d6d6;\\n  border-top: 1px solid #d6d6d6;\\n  border-top-right-radius: 6px;\\n  transform: rotate(45deg);\\n  display: block;\\n  left: -13px;\\n  border-color: #00bfa5;\\n  background-color: transparent;\\n  z-index: 1;\\n}\\ndiv.WizardParent > div div.WizardStep.ActiveStep a,\\ndiv.WizardParent > div div.WizardStep.ActiveStep a:link,\\ndiv.WizardParent > div div.WizardStep.ActiveStep a[disabled],\\ndiv.WizardParent > div div.WizardStep.ActiveStep a[disabled]:hover {\\n  color: inherit;\\n  font-family: inherit;\\n}\\ndiv.WizardParent > div div.WizardStep.ActiveStep .IconWizard.IconWizardWhite {\\n  background-color: #fff;\\n  border: 1px solid #00bfa5;\\n  color: #00ac94;\\n}\\ndiv.WizardParent > div div.WizardStep.ActiveStep .IconWizard {\\n  border: 1px solid #333;\\n  color: #333;\\n  -servicestudio-color: initial;\\n}\\ndiv.WizardParent > div div.WizardStep .IconWizard {\\n  border: 1px solid #d6d6d6;\\n  color: #d6d6d6;\\n  -servicestudio-display: inline;\\n}\\ndiv.WizardParent > div div.WizardStep a,\\ndiv.WizardParent > div div.WizardStep a:link {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  font-family: \\\"LatoRegular\\\";\\n}\\ndiv.WizardParent > div div.WizardStep a:disabled,\\ndiv.WizardParent > div div.WizardStep a[disabled],\\ndiv.WizardParent > div div.WizardStep a[disabled]:hover {\\n  color: #adadad;\\n}\\ndiv.WizardParent > div div.WizardStep::after, div.WizardParent > div div.WizardStep.ActiveStep::after {\\n  -servicestudio-background-color: transparent;\\n}\\n\\n.IconWizard {\\n  border: 1px solid #00ac94;\\n  border-radius: 50%;\\n  color: #00ac94;\\n  font-size: 0.857em;\\n  height: 20px;\\n  line-height: 18px;\\n  margin-right: 8px;\\n  text-align: center;\\n  vertical-align: middle;\\n  width: 20px;\\n}\\n.AR .IconWizard {\\n  margin-right: 0;\\n  margin-left: 8px;\\n}\\n.IconWizard.IconWizardWhite {\\n  background-color: #fff;\\n  border: 1px solid #00ac94;\\n  color: #00ac94;\\n}\\n\\n.SegmentedControl, .SegmentedControlLight {\\n  margin-bottom: 12px;\\n}\\n.SegmentedControl.NoMargin, .NoMargin.SegmentedControlLight {\\n  margin: 0 0 0 1px !important;\\n}\\n.SegmentedControl.Invalid .SegmentedControlItem:last-child label, .Invalid.SegmentedControlLight .SegmentedControlItem:last-child label, .SegmentedControl.Round.Invalid .SegmentedControlItem:last-child label {\\n  border-color: #ff3e2d;\\n}\\n.SegmentedControl.Invalid .SegmentedControlItem label, .Invalid.SegmentedControlLight .SegmentedControlItem label, .SegmentedControl.Round.Invalid .SegmentedControlItem label {\\n  border-color: #ff3e2d;\\n}\\n.SegmentedControl.Vertical .SegmentedControlItem, .Vertical.SegmentedControlLight .SegmentedControlItem {\\n  display: block;\\n}\\n.SegmentedControl.Vertical .SegmentedControlItem:first-child label, .Vertical.SegmentedControlLight .SegmentedControlItem:first-child label {\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 0;\\n  border-top-left-radius: 4px;\\n  border-top-right-radius: 4px;\\n}\\n.SegmentedControl.Vertical .SegmentedControlItem:last-child label, .Vertical.SegmentedControlLight .SegmentedControlItem:last-child label {\\n  border-bottom: 1px solid #d6d6d6;\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n.SegmentedControl.Vertical .SegmentedControlItem label, .Vertical.SegmentedControlLight .SegmentedControlItem label {\\n  border-bottom: 1px solid transparent;\\n  border-right: 1px solid #d6d6d6;\\n}\\n.SegmentedControl.Vertical .SegmentedControlItem label:hover, .Vertical.SegmentedControlLight .SegmentedControlItem label:hover, .SegmentedControl.Vertical .SegmentedControlItem label:focus, .Vertical.SegmentedControlLight .SegmentedControlItem label:focus {\\n  border-bottom: 1px solid #00bfa5;\\n}\\n.SegmentedControl.Round .SegmentedControlItem, .Round.SegmentedControlLight .SegmentedControlItem {\\n  margin: 0 3px;\\n}\\n.SegmentedControl.Round .SegmentedControlItem:first-child, .Round.SegmentedControlLight .SegmentedControlItem:first-child {\\n  margin-left: 0;\\n}\\n.SegmentedControl.Round .SegmentedControlItem:last-child, .Round.SegmentedControlLight .SegmentedControlItem:last-child {\\n  margin-right: 0;\\n}\\n.SegmentedControl.Round .SegmentedControlItem label, .Round.SegmentedControlLight .SegmentedControlItem label {\\n  border: 1px solid #d6d6d6;\\n  border-radius: 50% !important;\\n  min-width: 36px;\\n  padding: 0;\\n  width: 36px;\\n}\\n.SegmentedControl.Round .SegmentedControlItem > input:disabled ~ label, .Round.SegmentedControlLight .SegmentedControlItem > input:disabled ~ label,\\n.SegmentedControl.Round .SegmentedControlItem > input[disabled] ~ label,\\n.Round.SegmentedControlLight .SegmentedControlItem > input[disabled] ~ label,\\n.SegmentedControl.Round .SegmentedControlItem > input[readonly] ~ label,\\n.Round.SegmentedControlLight .SegmentedControlItem > input[readonly] ~ label {\\n  background: white;\\n  color: #d6d6d6;\\n}\\n.SegmentedControl.Filters, .Filters.SegmentedControlLight {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 100px;\\n}\\n.SegmentedControl.Filters .SegmentedControlItem label, .Filters.SegmentedControlLight .SegmentedControlItem label {\\n  border: none;\\n  border-radius: 100px;\\n  height: 34px;\\n}\\n.SegmentedControl.Filters .SegmentedControlItem label:first-child, .Filters.SegmentedControlLight .SegmentedControlItem label:first-child, .SegmentedControl.Filters .SegmentedControlItem label:last-child, .Filters.SegmentedControlLight .SegmentedControlItem label:last-child {\\n  border: none;\\n  border-radius: 100px;\\n}\\n.SegmentedControl.Filters .SegmentedControlItem label:hover, .Filters.SegmentedControlLight .SegmentedControlItem label:hover, .SegmentedControl.Filters .SegmentedControlItem label:focus, .Filters.SegmentedControlLight .SegmentedControlItem label:focus {\\n  background-color: #ebebeb;\\n  border: none;\\n}\\n.SegmentedControl.Filters .SegmentedControlItem > input[type=radio]:checked ~ label, .Filters.SegmentedControlLight .SegmentedControlItem > input[type=radio]:checked ~ label,\\n.SegmentedControl.Filters .SegmentedControlItem > input[type=checkbox]:checked ~ label,\\n.Filters.SegmentedControlLight .SegmentedControlItem > input[type=checkbox]:checked ~ label {\\n  background-color: #5c5c5c;\\n  border: none;\\n}\\n.SegmentedControl .SegmentedControlItem, .SegmentedControlLight .SegmentedControlItem {\\n  display: inline-block;\\n  font-size: 1em;\\n  min-height: 1.714em;\\n  overflow: hidden;\\n  position: relative;\\n  vertical-align: top;\\n}\\n.SegmentedControl .SegmentedControlItem:first-child label, .SegmentedControlLight .SegmentedControlItem:first-child label {\\n  border-bottom-left-radius: 4px;\\n  border-top-left-radius: 4px;\\n}\\n.SegmentedControl .SegmentedControlItem:last-child label, .SegmentedControlLight .SegmentedControlItem:last-child label {\\n  border-bottom-right-radius: 4px;\\n  border-right: 1px solid #d6d6d6;\\n  border-top-right-radius: 4px;\\n}\\n.SegmentedControl .SegmentedControlItem label, .SegmentedControlLight .SegmentedControlItem label {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-right: 1px solid transparent;\\n  cursor: pointer;\\n  display: block;\\n  line-height: 34px;\\n  min-width: 54px;\\n  padding: 0 16px;\\n  text-align: center;\\n  transition: all 0.1s ease-in-out;\\n  width: 100%;\\n}\\n.SegmentedControl .SegmentedControlItem label:hover, .SegmentedControlLight .SegmentedControlItem label:hover, .SegmentedControl .SegmentedControlItem label:focus, .SegmentedControlLight .SegmentedControlItem label:focus {\\n  background-color: #f2fffd;\\n  border: 1px solid #00bfa5;\\n}\\n.SegmentedControl .SegmentedControlItem label .icon, .SegmentedControlLight .SegmentedControlItem label .icon {\\n  color: #00ac94;\\n  font-size: 1.143em;\\n  padding-right: 4px;\\n}\\n.SegmentedControl .SegmentedControlItem > input[type=radio]:checked ~ label, .SegmentedControlLight .SegmentedControlItem > input[type=radio]:checked ~ label,\\n.SegmentedControl .SegmentedControlItem > input[type=checkbox]:checked ~ label,\\n.SegmentedControlLight .SegmentedControlItem > input[type=checkbox]:checked ~ label {\\n  background-color: #00bfa5;\\n  border-color: #00bfa5;\\n  color: #fff;\\n  text-shadow: 0 0 1px #fff;\\n}\\n.SegmentedControl .SegmentedControlItem > input[type=radio]:checked ~ label .icon, .SegmentedControlLight .SegmentedControlItem > input[type=radio]:checked ~ label .icon,\\n.SegmentedControl .SegmentedControlItem > input[type=checkbox]:checked ~ label .icon,\\n.SegmentedControlLight .SegmentedControlItem > input[type=checkbox]:checked ~ label .icon {\\n  color: #fff;\\n}\\n.SegmentedControl .SegmentedControlItem > input[type=radio]:checked ~ label:hover, .SegmentedControlLight .SegmentedControlItem > input[type=radio]:checked ~ label:hover, .SegmentedControl .SegmentedControlItem > input[type=radio]:checked ~ label:focus, .SegmentedControlLight .SegmentedControlItem > input[type=radio]:checked ~ label:focus,\\n.SegmentedControl .SegmentedControlItem > input[type=checkbox]:checked ~ label:hover,\\n.SegmentedControlLight .SegmentedControlItem > input[type=checkbox]:checked ~ label:hover,\\n.SegmentedControl .SegmentedControlItem > input[type=checkbox]:checked ~ label:focus,\\n.SegmentedControlLight .SegmentedControlItem > input[type=checkbox]:checked ~ label:focus {\\n  border-color: #00bfa5;\\n}\\n.SegmentedControl .SegmentedControlItem > input:disabled ~ label, .SegmentedControlLight .SegmentedControlItem > input:disabled ~ label,\\n.SegmentedControl .SegmentedControlItem > input[disabled] ~ label,\\n.SegmentedControlLight .SegmentedControlItem > input[disabled] ~ label,\\n.SegmentedControl .SegmentedControlItem > input[readonly] ~ label,\\n.SegmentedControlLight .SegmentedControlItem > input[readonly] ~ label {\\n  background: #ebebeb;\\n  color: #777777;\\n  cursor: default;\\n}\\n.SegmentedControl .SegmentedControlItem > input:disabled ~ label .icon, .SegmentedControlLight .SegmentedControlItem > input:disabled ~ label .icon,\\n.SegmentedControl .SegmentedControlItem > input[disabled] ~ label .icon,\\n.SegmentedControlLight .SegmentedControlItem > input[disabled] ~ label .icon,\\n.SegmentedControl .SegmentedControlItem > input[readonly] ~ label .icon,\\n.SegmentedControlLight .SegmentedControlItem > input[readonly] ~ label .icon {\\n  color: #777777;\\n}\\n.SegmentedControl .SegmentedControlItem > input:disabled ~ label:hover, .SegmentedControlLight .SegmentedControlItem > input:disabled ~ label:hover, .SegmentedControl .SegmentedControlItem > input:disabled ~ label:focus, .SegmentedControlLight .SegmentedControlItem > input:disabled ~ label:focus,\\n.SegmentedControl .SegmentedControlItem > input[disabled] ~ label:hover,\\n.SegmentedControlLight .SegmentedControlItem > input[disabled] ~ label:hover,\\n.SegmentedControl .SegmentedControlItem > input[disabled] ~ label:focus,\\n.SegmentedControlLight .SegmentedControlItem > input[disabled] ~ label:focus,\\n.SegmentedControl .SegmentedControlItem > input[readonly] ~ label:hover,\\n.SegmentedControlLight .SegmentedControlItem > input[readonly] ~ label:hover,\\n.SegmentedControl .SegmentedControlItem > input[readonly] ~ label:focus,\\n.SegmentedControlLight .SegmentedControlItem > input[readonly] ~ label:focus {\\n  border-color: #d6d6d6;\\n}\\n\\n.SegmentedControlLight.Filters {\\n  background-color: #f3f3f3;\\n}\\n.SegmentedControlLight.Filters .SegmentedControlItem {\\n  background-color: transparent;\\n}\\n.SegmentedControlLight.Filters .SegmentedControlItem label {\\n  background-color: #f3f3f3;\\n}\\n.SegmentedControlLight.Filters .SegmentedControlItem:first-child > input[type=radio]:checked ~ label,\\n.SegmentedControlLight.Filters .SegmentedControlItem:first-child > input[type=checkbox]:checked ~ label {\\n  background-color: #fff;\\n  border-right: 1px solid #d6d6d6;\\n  color: #333;\\n}\\n.SegmentedControlLight.Filters .SegmentedControlItem:not(:first-child) > input[type=radio]:checked ~ label,\\n.SegmentedControlLight.Filters .SegmentedControlItem:not(:first-child) > input[type=checkbox]:checked ~ label {\\n  background-color: #fff;\\n  box-shadow: inset 0px 0px 0px 2px #00bfa5;\\n  color: #333;\\n}\\n\\n.AR .SegmentedControl.Round .SegmentedControlItem:first-child, .AR .Round.SegmentedControlLight .SegmentedControlItem:first-child,\\n.FA .SegmentedControl.Round .SegmentedControlItem:first-child,\\n.FA .Round.SegmentedControlLight .SegmentedControlItem:first-child {\\n  margin-left: 3px;\\n  margin-right: 0;\\n}\\n.AR .SegmentedControl.Round .SegmentedControlItem:last-child, .AR .Round.SegmentedControlLight .SegmentedControlItem:last-child,\\n.FA .SegmentedControl.Round .SegmentedControlItem:last-child,\\n.FA .Round.SegmentedControlLight .SegmentedControlItem:last-child {\\n  margin-left: 0;\\n  margin-right: 3px;\\n}\\n.AR .SegmentedControl.Round .SegmentedControlItem label, .AR .Round.SegmentedControlLight .SegmentedControlItem label,\\n.FA .SegmentedControl.Round .SegmentedControlItem label,\\n.FA .Round.SegmentedControlLight .SegmentedControlItem label {\\n  border: 1px solid #d6d6d6;\\n}\\n.AR .SegmentedControl:not(.Vertical) .SegmentedControlItem:last-child label, .AR .SegmentedControlLight:not(.Vertical) .SegmentedControlItem:last-child label,\\n.FA .SegmentedControl:not(.Vertical) .SegmentedControlItem:last-child label,\\n.FA .SegmentedControlLight:not(.Vertical) .SegmentedControlItem:last-child label {\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 0;\\n  border-left: 1px solid #d6d6d6;\\n  border-top-left-radius: 4px;\\n  border-top-right-radius: 0;\\n}\\n.AR .SegmentedControl:not(.Vertical) .SegmentedControlItem:first-child label, .AR .SegmentedControlLight:not(.Vertical) .SegmentedControlItem:first-child label,\\n.FA .SegmentedControl:not(.Vertical) .SegmentedControlItem:first-child label,\\n.FA .SegmentedControlLight:not(.Vertical) .SegmentedControlItem:first-child label {\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 4px;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 4px;\\n}\\n.AR .SegmentedControl:not(.Vertical) .SegmentedControlItem label, .AR .SegmentedControlLight:not(.Vertical) .SegmentedControlItem label,\\n.FA .SegmentedControl:not(.Vertical) .SegmentedControlItem label,\\n.FA .SegmentedControlLight:not(.Vertical) .SegmentedControlItem label {\\n  border-left: 1px solid transparent;\\n  border-right: 1px solid #d6d6d6;\\n}\\n.AR .SegmentedControl:not(.Vertical) .SegmentedControlItem label:hover, .AR .SegmentedControlLight:not(.Vertical) .SegmentedControlItem label:hover, .AR .SegmentedControl:not(.Vertical) .SegmentedControlItem label:focus, .AR .SegmentedControlLight:not(.Vertical) .SegmentedControlItem label:focus,\\n.FA .SegmentedControl:not(.Vertical) .SegmentedControlItem label:hover,\\n.FA .SegmentedControlLight:not(.Vertical) .SegmentedControlItem label:hover,\\n.FA .SegmentedControl:not(.Vertical) .SegmentedControlItem label:focus,\\n.FA .SegmentedControlLight:not(.Vertical) .SegmentedControlItem label:focus {\\n  border: 1px solid #00bfa5;\\n}\\n.AR .SegmentedControl.Filters .SegmentedControlItem label[for], .AR .Filters.SegmentedControlLight .SegmentedControlItem label[for],\\n.FA .SegmentedControl.Filters .SegmentedControlItem label[for],\\n.FA .Filters.SegmentedControlLight .SegmentedControlItem label[for] {\\n  border: none;\\n  border-radius: 100px;\\n}\\n\\n.Flex, .FlexEnd, .FlexStart, .FlexSpaceEvenly, .FlexSpaceBetween, .FlexSpaceAround, .FlexCenterHorizontal, .FlexCenterVertical, .FlexCenterFull {\\n  display: flex;\\n}\\n.FlexCenterFull {\\n  align-items: center;\\n  justify-content: center;\\n}\\n.FlexCenterVertical {\\n  align-items: center;\\n}\\n.FlexCenterHorizontal {\\n  justify-content: center;\\n}\\n.FlexSpaceAround {\\n  justify-content: space-around;\\n}\\n.FlexSpaceBetween {\\n  justify-content: space-between;\\n}\\n.FlexSpaceEvenly {\\n  justify-content: space-evenly;\\n}\\n.FlexStart {\\n  justify-content: flex-start;\\n}\\n.FlexEnd {\\n  justify-content: flex-end;\\n}\\n.FlexWrap {\\n  flex-wrap: wrap;\\n}\\n.FlexChild {\\n  flex: 1;\\n}\\n\\n.InlineFlex, .InlineFlexEnd, .InlineFlexStart, .InlineFlexSpaceEvenly, .InlineFlexSpaceBetween, .InlineFlexSpaceAround, .InlineFlexCenterHorizontal, .InlineFlexCenterVertical, .InlineFlexCenterFull {\\n  display: flex;\\n}\\n.InlineFlexCenterFull {\\n  align-items: center;\\n  justify-content: center;\\n}\\n.InlineFlexCenterVertical {\\n  align-items: center;\\n}\\n.InlineFlexCenterHorizontal {\\n  justify-content: center;\\n}\\n.InlineFlexSpaceAround {\\n  justify-content: space-around;\\n}\\n.InlineFlexSpaceBetween {\\n  justify-content: space-between;\\n}\\n.InlineFlexSpaceEvenly {\\n  justify-content: space-evenly;\\n}\\n.InlineFlexStart {\\n  justify-content: flex-start;\\n}\\n.InlineFlexEnd {\\n  justify-content: flex-end;\\n}\\n.InlineFlex, .InlineFlexEnd, .InlineFlexStart, .InlineFlexSpaceEvenly, .InlineFlexSpaceBetween, .InlineFlexSpaceAround, .InlineFlexCenterHorizontal, .InlineFlexCenterVertical, .InlineFlexCenterFull {\\n  display: inline-flex;\\n}\\n\\n.FlexColumn, .FlexColumnEnd, .FlexColumnStart, .FlexColumnSpaceEvenly, .FlexColumnSpaceBetween, .FlexColumnSpaceAround, .FlexColumnCenterHorizontal, .FlexColumnCenterVertical, .FlexColumnCenterFull {\\n  display: flex;\\n}\\n.FlexColumnCenterFull {\\n  align-items: center;\\n  justify-content: center;\\n}\\n.FlexColumnCenterVertical {\\n  align-items: center;\\n}\\n.FlexColumnCenterHorizontal {\\n  justify-content: center;\\n}\\n.FlexColumnSpaceAround {\\n  justify-content: space-around;\\n}\\n.FlexColumnSpaceBetween {\\n  justify-content: space-between;\\n}\\n.FlexColumnSpaceEvenly {\\n  justify-content: space-evenly;\\n}\\n.FlexColumnStart {\\n  justify-content: flex-start;\\n}\\n.FlexColumnEnd {\\n  justify-content: flex-end;\\n}\\n.FlexColumn, .FlexColumnEnd, .FlexColumnStart, .FlexColumnSpaceEvenly, .FlexColumnSpaceBetween, .FlexColumnSpaceAround, .FlexColumnCenterHorizontal, .FlexColumnCenterVertical, .FlexColumnCenterFull {\\n  flex-direction: column;\\n}\\n\\n.FlexList, .FlexListLargeGap, .FlexListMediumGap, .FlexListSmallGap, .FlexListXSmallGap {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 8px;\\n}\\n.FlexListXSmallGap {\\n  gap: 4px;\\n}\\n.FlexListSmallGap {\\n  gap: 8px;\\n}\\n.FlexListMediumGap {\\n  gap: 16px;\\n}\\n.FlexListLargeGap {\\n  gap: 24px;\\n}\\n\\n.InlineFlexList {\\n  display: inline-flex;\\n  flex-wrap: wrap;\\n  gap: 8px;\\n}\\n\\n.FlexNoWrap {\\n  flex-wrap: nowrap !important;\\n}\\n\\n.AlignContentCenter {\\n  align-content: center;\\n}\\n\\n.AlignItemsBaseline {\\n  align-items: baseline;\\n}\\n\\n.FlexBasis75 {\\n  flex-basis: 75%;\\n}\\n\\n.FlexBasis70 {\\n  flex-basis: 70%;\\n}\\n\\n.FlexBasis65 {\\n  flex-basis: 65%;\\n}\\n\\n.FlexBasis60 {\\n  flex-basis: 60%;\\n}\\n\\n.FlexBasis50 {\\n  flex-basis: 50%;\\n}\\n\\n.FlexBasis45 {\\n  flex-basis: 45%;\\n}\\n\\n.FlexBasis40 {\\n  flex-basis: 40%;\\n}\\n\\n.FlexBasis35 {\\n  flex-basis: 35%;\\n}\\n\\n.FlexBasis30 {\\n  flex-basis: 30%;\\n}\\n\\n.FlexBasis25 {\\n  flex-basis: 25%;\\n}\\n\\n.FlexBasis20 {\\n  flex-basis: 20%;\\n}\\n\\n.FlexBasis15 {\\n  flex-basis: 15%;\\n}\\n\\n.FlexBasis10 {\\n  flex-basis: 10%;\\n}\\n\\n.Scrollable::-webkit-scrollbar {\\n  background-color: #fff;\\n  height: 14px;\\n  width: 14px;\\n}\\n.Scrollable::-webkit-scrollbar-thumb {\\n  background-color: #d6d6d6;\\n  background-clip: padding-box;\\n  border: 4px solid rgba(0, 0, 0, 0);\\n  border-radius: 9999px;\\n}\\n.Scrollable {\\n  overflow: auto;\\n}\\n.Scrollable::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n}\\n\\n.ScrollableContainer::-webkit-scrollbar {\\n  background-color: #fff;\\n  height: 14px;\\n  width: 14px;\\n}\\n.ScrollableContainer::-webkit-scrollbar-thumb {\\n  background-color: #d6d6d6;\\n  background-clip: padding-box;\\n  border: 4px solid rgba(0, 0, 0, 0);\\n  border-radius: 9999px;\\n}\\n.ScrollableContainer {\\n  overflow: auto;\\n}\\n.ScrollableContainer::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n}\\n.AR .ScrollableContainer {\\n  margin-left: -8px;\\n  margin-right: auto;\\n  padding-left: 8px;\\n  padding-right: auto;\\n}\\n.ScrollableContainer {\\n  margin-right: -8px;\\n  padding-right: 8px;\\n}\\n\\n.ScrollableWhite::-webkit-scrollbar {\\n  background-color: transparent;\\n  height: 14px;\\n  width: 14px;\\n}\\n.ScrollableWhite::-webkit-scrollbar-track {\\n  border: none;\\n}\\n.ScrollableWhite::-webkit-scrollbar-thumb {\\n  background-color: #fff;\\n  background-clip: padding-box;\\n  border: 4px solid rgba(0, 0, 0, 0);\\n  border-radius: 9999px;\\n}\\n.ScrollableWhite {\\n  overflow: auto;\\n}\\n.ScrollableWhite::before {\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n}\\n\\n.TextUppercase {\\n  text-transform: uppercase;\\n}\\n\\n.TextLowercase {\\n  text-transform: lowercase;\\n}\\n\\n.Bold,\\n.TextBold {\\n  font-family: \\\"LatoBold\\\";\\n}\\n.Bold > .TextRegularAR,\\n.TextBold > .TextRegularAR {\\n  font-family: \\\"TajawalBold\\\";\\n}\\n\\n.TextBoldAR {\\n  font-family: \\\"TajawalBold\\\";\\n}\\n\\n.TextRegular {\\n  font-family: \\\"LatoRegular\\\";\\n}\\n.AR .TextRegular {\\n  font-family: \\\"TajawalRegular\\\";\\n}\\n\\n.TextRegularAR {\\n  font-family: \\\"TajawalRegular\\\";\\n}\\n\\n.TextItalic {\\n  font-style: italic;\\n}\\n\\n.TextUnderline {\\n  text-decoration: underline;\\n}\\n\\n.TextLineThrough {\\n  text-decoration: line-through;\\n}\\n\\n.TextOverflow {\\n  display: block;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n.TextOverflow_Ellipsis {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n.TextOverflowTwoLines {\\n  -webkit-box-orient: vertical;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 2;\\n  overflow: hidden;\\n}\\n.TextOverflowThreeLines {\\n  -webkit-box-orient: vertical;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 3;\\n  overflow: hidden;\\n}\\n\\n.TextCenter {\\n  text-align: center;\\n}\\n\\n.TextLeft {\\n  text-align: left;\\n}\\n\\n.TextRight {\\n  text-align: right;\\n}\\n\\n.Page .Text {\\n  /* Colors */\\n}\\n.Page .Text_sapphireBlue, .Page .mainBlue1-tx {\\n  color: fuchsia;\\n}\\n.Page .Text_sapphireBlue2, .Page .mainBlue2-tx {\\n  color: #00ac94;\\n}\\n.Page .Text_sapphireInactive, .Page .inactiveButton-tx {\\n  color: #d6d6d6;\\n}\\n.Page .Text_sapphireDarkBlue1, .Page .darkBlue1-tx {\\n  color: #333;\\n}\\n.Page .Text_sapphireDarkBlue2, .Page .darkBlue2-tx {\\n  color: #30384a;\\n}\\n.Page .Text_sapphireDarkText, .Page .darkText-tx {\\n  color: #333;\\n}\\n.Page .Text_sapphireLightText, .Page .lightText-tx {\\n  color: #777777;\\n}\\n.Page .Text_sapphireFemale, .Page .female-tx {\\n  color: #ec62ce;\\n}\\n.Page .Text_sapphireMale, .Page .male-tx {\\n  color: #1ba5ec;\\n}\\n.Page .Text_sapphireDarkGrey, .Page .darkGreyText-tx {\\n  color: #5c5c5c;\\n}\\n.Page .Text_sapphireLightBoard, .Page .lightBorder-tx {\\n  color: #d6d6d6;\\n}\\n.Page .Text_sapphireLightContainer, .Page .lightContainer-tx {\\n  color: #f3f3f3;\\n}\\n.Page .Text_sapphireBackground, .Page .background-tx {\\n  color: #f3f3f3;\\n}\\n.Page .Text_sapphireWarning, .Page .warning-tx {\\n  color: #ff3e2d;\\n}\\n.Page .Text_sapphireWhite, .Page .white-tx {\\n  color: #fff;\\n}\\n.Page .Text_sapphireClinician, .Page .clinician-tx {\\n  color: #d6d6d6;\\n}\\n.Page .Text_sapphireLighnesstText, .Page .light-tx {\\n  color: #d6d6d6;\\n}\\n.Page .Text_DarkBlue {\\n  color: #30384a;\\n}\\n.Page .Text_black {\\n  color: #131819;\\n}\\n.Page .Text_blue {\\n  color: #1ba5ec;\\n}\\n.Page .Text_darkBlue {\\n  color: #194968;\\n}\\n.Page .Text_navyBlue {\\n  color: #c4f0eb;\\n}\\n.Page .Text_MiddleBlue {\\n  color: #2a5a6e;\\n}\\n.Page .Text_gray {\\n  color: #777777;\\n}\\n.Page .Text_green {\\n  color: #7cb342;\\n}\\n.Page .Text_Darkgreen {\\n  color: #578329;\\n}\\n.Page .Text_green_Sapphire {\\n  color: #00bfa5;\\n}\\n.Page .Text_lightGreen {\\n  color: #e7f2dc;\\n}\\n.Page .Text_orange {\\n  color: #ffa000;\\n}\\n.Page .Text_orangeDark {\\n  color: #c37b03;\\n}\\n.Page .Text_plum {\\n  color: #ec62ce;\\n}\\n.Page .Text_darkPlum {\\n  color: #980263;\\n}\\n.Page .Text_red {\\n  color: #ff3e2d;\\n}\\n.Page .Text_darkRed {\\n  color: #b10100;\\n}\\n.Page .Text_SapphireRed {\\n  color: #ff3e2d;\\n}\\n.Page .Text_silver {\\n  color: #d6d6d6;\\n}\\n.Page .Text_turquoise {\\n  color: #c4f0eb;\\n}\\n.Page .Text_darkTurquoise {\\n  color: #1ba5ec;\\n}\\n.Page .Text_white {\\n  color: #fff;\\n}\\n.Page .Text_yellow {\\n  color: #fbc02d;\\n}\\n.Page .Text_darkYellow {\\n  color: #c19323;\\n}\\n.Page .Text {\\n  /* Sizes */\\n}\\n.Page .Text_09em {\\n  font-size: 0.9em;\\n}\\n.Page .Text_1em {\\n  font-size: 1em;\\n}\\n.Page .Text_11em {\\n  font-size: 1.1em;\\n}\\n.Page .Text_12em {\\n  font-size: 1.2em;\\n}\\n.Page .Text_13em {\\n  font-size: 1.3em;\\n}\\n.Page .Text_14em {\\n  font-size: 1.4em;\\n}\\n.Page .Text_15em {\\n  font-size: 1.5em;\\n}\\n.Page .Text_09rem {\\n  font-size: 0.9rem;\\n}\\n.Page .Text_1rem {\\n  font-size: 1rem;\\n}\\n.Page .Text_11rem {\\n  font-size: 1.1rem;\\n}\\n.Page .Text_12rem {\\n  font-size: 1.2rem;\\n}\\n.Page .Text_13rem {\\n  font-size: 1.3rem;\\n}\\n.Page .Text_14rem {\\n  font-size: 1.4rem;\\n}\\n.Page .Text_15rem {\\n  font-size: 1.5rem;\\n}\\n.Page .Text_Size11 {\\n  font-size: 11px;\\n}\\n.Page .TextSize12, .Page .Text_Size12 {\\n  font-size: 12px;\\n}\\n.Page .Text_Size13 {\\n  font-size: 13px;\\n}\\n.Page .TextSize14, .Page .Text_Size14 {\\n  font-size: 14px;\\n}\\n.Page .Text_Size15 {\\n  font-size: 15px;\\n}\\n.Page .TextSize16, .Page .Text_Size16 {\\n  font-size: 16px;\\n}\\n.Page .Text_Size17 {\\n  font-size: 17px;\\n}\\n.Page .Text_Size18 {\\n  font-size: 18px;\\n}\\n.Page .TextSize20, .Page .Text_Size20 {\\n  font-size: 20px;\\n}\\n.Page .Text_Size22 {\\n  font-size: 22px;\\n}\\n.Page .Text_Size25 {\\n  font-size: 25px;\\n}\\n.Page .Text_Size30 {\\n  font-size: 30px;\\n}\\n.Page .Text_Size90 {\\n  font-size: 90px;\\n}\\n.Page .Text {\\n  /* General */\\n}\\n.Page .Text_uppercase {\\n  text-transform: uppercase;\\n}\\n.Page .Text_Note {\\n  color: #777777;\\n  font-size: 14px;\\n}\\n\\n.Label {\\n  background-color: transparent;\\n  border-radius: 10px;\\n  max-height: 20px;\\n  padding: 2px 8px;\\n}\\n\\n.Uppercase {\\n  text-transform: uppercase;\\n}\\n\\n.NoWrap {\\n  vertical-align: middle;\\n  white-space: nowrap;\\n}\\n\\n.BreakWord {\\n  overflow-wrap: break-word;\\n}\\n\\n.LineHeightSmall {\\n  line-height: 8px;\\n}\\n\\n.LineHeightMedium {\\n  line-height: 16px;\\n}\\n\\n.LineHeightLarge {\\n  line-height: 24px;\\n}\\n\\n.LineHeightLarger {\\n  line-height: 48px;\\n}\\n\\n.LineHeightLargest {\\n  line-height: 56px;\\n}\\n\\n.LineHeightInputs {\\n  line-height: 36px;\\n}\\n\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-titlebar {\\n  display: block;\\n}\\n.SapphirePopup div.os-internal-ui-dialog.os-internal-Popup .os-internal-ui-dialog-titlebar-close {\\n  display: none;\\n}\\n\\n.LayoutBackoffice .select2-selection__arrow:after {\\n  top: 50% !important;\\n  transform: translateY(-50%) !important;\\n}\\n.LayoutBackoffice .select2-selection__rendered {\\n  line-height: 35px !important;\\n}\\n\\n.select2-container.select2-container--open .select2-search__field {\\n  padding-left: 15px !important;\\n}\\n.select2-container .select2-selection .select2-selection__rendered .select2-selection__choice {\\n  color: #333;\\n}\\n.select2-container .select2-selection .select2-selection__rendered .select2-search:only-child .select2-search__field {\\n  height: 40px;\\n}\\n.select2-container .select2-dropdown .select2-search {\\n  height: 52px;\\n}\\n.select2-container .select2-dropdown .select2-search .select2-search__field {\\n  height: 36px;\\n  padding-left: 15px !important;\\n}\\n.select2-container .select2-dropdown .select2-search--dropdown:after {\\n  display: none;\\n}\\n\\n.LayoutBackoffice .TableRecords > tbody tr td:first-child {\\n  border-left: none;\\n}\\n.LayoutBackoffice .TableRecords > tbody tr td:last-child {\\n  border-right: none;\\n}\\n.LayoutBackoffice .TableRecords_Wrapper .NoResponsive tr.TableRowExpandable.open td,\\n.LayoutBackoffice .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr.TableRowExpandable.open:hover,\\n.LayoutBackoffice .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr.TableRowExpandable.open:hover td {\\n  background: none;\\n}\\n.LayoutBackoffice .TableRecords tr.TableRecords_DisabledRow > * {\\n  color: #adadad;\\n}\\n.LayoutBackoffice.desktop .TableRecords > tbody > tr:hover,\\n.LayoutBackoffice.desktop .TableRecords > tbody > tr:hover td,\\n.LayoutBackoffice.desktop .EditableTable > tbody > tr:hover td {\\n  background: none;\\n}\\n\\n/* Backoffice_Th Legacy */\\n/*\\n\\n    To override a style copy and paste it to\\n    the application theme and then modify it\\n\\n    File: Sapphire Backoffice Theme\\n\\n    $0. Fonts\\n\\n    $1. General Properties\\n     1.1 General Properties > a links\\n     1.2 General Properties > Margins\\n\\n    $2. Structure\\n     2.1 Structure > Header\\n     2.2 Structure > Menu\\n     2.3 Structure > Footer\\n     2.4 Structure > Content\\n     2.5 Structure > Sidebar\\n     2.6 Structure > Title Section\\n\\n    $3. Forms\\n     3.1 Forms > Radio Button & Checkbox\\n     3.2 Forms > Inputs, Selects & Textarea\\n     3.3 Forms > ReadOnly & Disabled\\n     3.4 Forms > Not Valid\\n\\n    $4. Buit-in widgets\\n     4.1 Buit-in widgets > Filter Form\\n     4.2 Buit-in widgets > EditableTable\\n     4.3 Buit-in widgets > TableRecords\\n\\n    $5. RichWidgets\\n     5.1 RichWidgets > Feedback Ajax Loading\\n     5.2 RichWidgets > Feedback Message\\n     5.3 RichWidgets > List Navigation\\n     5.4 RichWidgets > Popup Editor\\n\\n    $6. Login\\n\\n    $7. SILK Patterns\\n     7.1 SILK Patterns > Content\\n     7.2 SILK Patterns > Controls\\n     7.3 SILK Patterns > Data\\n     7.4 SILK Patterns > Layout\\n     7.5 SILK Patterns > Mobile\\n     7.6 SILK Patterns > Navigation\\n\\n    $8. Usefull Classes\\n     8.1 Usefull Classes > Text Classes\\n     8.2 Usefull Classes > Buttons\\n     8.3 Usefull Classes > Background Colors\\n     8.4 Usefull Classes > Text Colors\\n\\n\\n    $9. [Sapphire] Patterns\\n     9.1 [Sapphire] Patterns > [ExpandableExtended]\\n     9.2 [Sapphire] Patterns > [ExpandableTable]\\n     9.3 [Sapphire] Patterns > [MultipleSelect]\\n     9.4 [Sapphire] Patterns > [SectionsDraggable]\\n     9.5 [Sapphire] Patterns > [HorizontalToolbar_MenuItem]\\n     9.6 [Sapphire] Patterns > [ LineWarning ]\\n     9.7 [Sapphire] Patterns > [ HorizontalToolbar ]\\n     9.8 [Sapphire] Patterns > [ ActionsSubMenu ]\\n     9.9 [Sapphire] Patterns > [Timeline]\\n     9.10 [Sapphire] Patterns > [ExpandableLink]\\n     9.11[Sapphire] Patterns > [Wizard]\\n     9.12[Sapphire] Patterns > [CKEditor]\\n     9.13[Sapphire] Patterns > [AlertBar]\\n     9.14[Sapphire] Patterns > [StatusBadge]\\n     9.15[Sapphire] Patterns > [GruopList]\\n     9.16[Sapphire] Patterns > [GroupListLine]\\n\\n\\n    $10. Custom Classes\\n      $10.1 Custom Classes > Additional Classe\\n      $10.2 Custom Classes > NumberCircle\\n    $11. Studio Preview\\n\\n    $12. Print\\n\\n*/\\n/*------------------------------------*\\\\\\n        $0. Fonts\\n\\\\*-------------------------------------*/\\n.icon,\\n.icon:before,\\n.icon:after {\\n  font-family: Sapphire-Icon-Font;\\n}\\n\\n/* Fonts > Font Definition */\\nhtml,\\nbody,\\na,\\nselect,\\nform,\\nfieldset,\\ntable,\\ntr,\\ntd,\\nimg,\\ninput,\\nbutton,\\ntextarea,\\noptgroup,\\noption {\\n  font-family: \\\"LatoRegular\\\";\\n}\\n\\n.TileIcon_text,\\n.TileNumber_text,\\n.TileIconText_label,\\n.Heading1,\\n.Heading2,\\n.Heading3,\\n.Heading4,\\n.Header_title a,\\n.EditableTable thead td,\\n.TableRecords_Header {\\n  font-family: \\\"LatoRegular\\\";\\n}\\n\\n/*------------------------------------*\\\\\\n  $1. General Properties\\n\\\\*-------------------------------------*/\\nhtml,\\nbody,\\nform,\\n.Page {\\n  height: 100%;\\n  position: relative;\\n}\\n\\nbody,\\nselect,\\ntextarea,\\ninput {\\n  color: #333;\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 16px;\\n  font-weight: normal;\\n  line-height: 20px;\\n}\\n\\nbody {\\n  background-color: #f1f1f1;\\n  height: 100%;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 1.1 General Properties > a links ***************************/\\n/*------------------------------------------------------------*/\\na,\\na:link {\\n  color: #009884;\\n  font-weight: 500;\\n  transition: color 100ms ease;\\n}\\n\\na:focus:not(.Button),\\na:link:focus:not(.Button) {\\n  text-decoration: underline;\\n}\\n\\na:visited {\\n  color: #009884;\\n  transition: color 100ms ease;\\n}\\n\\n.desktop a:hover,\\n.desktop a:link:hover,\\n.desktop a:visited:hover {\\n  color: #009884;\\n  cursor: pointer;\\n  text-decoration: underline;\\n}\\n\\na:hover:active,\\na:link:hover:active {\\n  color: #006758;\\n  transition: color 100ms ease;\\n}\\n\\na:disabled,\\na:link:disabled {\\n  color: #9b9b9b;\\n  transition: color 100ms ease;\\n}\\n\\ndiv[onclick] {\\n  cursor: pointer;\\n  /* add a pointer cursor when the div has a click event */\\n}\\n\\na.Link.Remove {\\n  color: #ff3e2d;\\n}\\n\\na.Link.Remove:hover,\\na.Link.Remove:active,\\na.Link.Remove:hover:active {\\n  color: #ff3e2d;\\n  text-decoration: none;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 1.2 General Properties > Margins ***************************/\\n/*------------------------------------------------------------*/\\n.OSAutoMarginTop {\\n  margin-top: 20px;\\n}\\n\\n.OSAutoPaddingTop {\\n  padding-top: 20px;\\n}\\n\\n.OSInlineClear {\\n  /* This style will never be used in runtime.\\n   When applied in Service Studio, it will prevent the style 'OSInline' from being\\n   automatically applied to divs and tables with widths != (fill parent) */\\n}\\n\\n/*------------------------------------*\\\\\\n            $2. Structure\\n\\\\*-------------------------------------*/\\n/*------------------------------------------------------------*/\\n/* 2.1 Structure > Header *************************************/\\n/*------------------------------------------------------------*/\\n.Header {\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\\n  height: 50px;\\n  line-height: 50px;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  z-index: 20;\\n}\\n\\n.Header_center {\\n  position: relative;\\n}\\n\\n.tablet .Header_center.ThemeGrid_Container,\\n.phone .Header_center.ThemeGrid_Container {\\n  padding: 0;\\n}\\n\\n/* Structure > Header Background */\\n.Header_background {\\n  background-color: #fff;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  z-index: -1;\\n}\\n\\n.Page.UseHeaderFade .Header .Header_background {\\n  display: none;\\n}\\n\\n/* Structure > Header Title */\\n.Header_Title {\\n  float: left;\\n  overflow: hidden;\\n  padding-left: 10px;\\n  padding-right: 10px;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n.phone .Header_Title {\\n  left: 60px;\\n  position: absolute;\\n  right: 60px;\\n  text-align: center;\\n}\\n\\n/* Structure > Header Search */\\n.Header_Search {\\n  display: inline-block;\\n  margin-right: 20px;\\n  min-width: 100px;\\n}\\n\\n/* Search inside header */\\n.Search_wrapper input[type=text] {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 100px;\\n  box-shadow: none;\\n  height: 34px;\\n  width: 240px;\\n}\\n\\n.Search_wrapper input[type=text]:focus {\\n  background-color: #fff;\\n  border: 1px solid #009884;\\n  border-radius: 100px;\\n  box-shadow: none;\\n  width: 340px;\\n}\\n\\n.Search_wrapper:after {\\n  left: 10px;\\n  top: 9px;\\n}\\n\\n.Header .Search_wrapper input[type=text] {\\n  background-color: transparent;\\n  border: 1px solid rgba(255, 255, 255, 0.2);\\n  border-radius: 30px;\\n  color: #fff;\\n  transition: all 300ms ease;\\n  width: 100px;\\n}\\n\\n.Header .Search_wrapper input[type=text]:focus {\\n  border: 1px solid rgba(255, 255, 255, 0.3);\\n  width: 200px;\\n}\\n\\n.Header .Search_wrapper:after {\\n  color: #cdcdcd;\\n  left: 10px;\\n  pointer-events: none;\\n}\\n\\n.phone .Application_Menu .Others_Menu .Header_Search {\\n  margin-left: 30px;\\n  margin-right: 0;\\n}\\n\\n/* Structure > Header Menu */\\n.Header_Menu,\\n.Header_Menu .ListRecords {\\n  display: inline-block;\\n}\\n\\n.Header_Menu a,\\n.Header_Menu a:link,\\n.Header_Menu a:visited {\\n  color: #fff;\\n}\\n\\n.Header_Menu a:hover,\\n.Header_Menu a:link:hover,\\n.Header_Menu a:visited:hover {\\n  color: #1d1d1d;\\n  font-family: \\\"LatoRegular\\\";\\n  font-weight: 600;\\n}\\n\\n/* Structure > Header Others Menu */\\n.Others_Menu {\\n  margin-right: 20px;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  white-space: nowrap;\\n}\\n\\n.desktop.small.UseSidebar .Others_Menu {\\n  margin-right: 55px;\\n}\\n\\n.tablet.UseSidebar .Others_Menu {\\n  margin-right: 40px;\\n}\\n\\n.phone .Others_Menu {\\n  display: block;\\n  margin-right: 0;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.phone .Application_Menu .Others_Menu a:link,\\n.phone .Application_Menu .Others_Menu a:visited {\\n  padding: 0;\\n}\\n\\n.phone .Application_Menu .Others_Menu .Login_Info {\\n  width: 100%;\\n}\\n\\n.phone .Application_Menu .Others_Menu .Login_Info a {\\n  display: none;\\n}\\n\\n.phone .Application_Menu .Others_Menu .Login_Info .Logout_Icon a {\\n  display: block;\\n}\\n\\n.phone .Application_Menu .Others_Menu .Login_Info .Logout_Icon {\\n  position: absolute;\\n  right: 15px;\\n}\\n\\n/* Structure > Header Button Menu */\\na.Header_ButtonMenu {\\n  color: #fff;\\n  display: none;\\n  float: left;\\n  font-size: 20px;\\n  text-align: center;\\n  width: 50px;\\n}\\n\\n.desktop a.Header_ButtonMenu {\\n  color: #00bfa5;\\n}\\n\\n.tablet a.Header_ButtonMenu,\\n.phone a.Header_ButtonMenu {\\n  display: block;\\n  width: 50px;\\n}\\n\\n.Page.active .Header_ButtonMenu {\\n  color: #00bfa5;\\n}\\n\\n/* Structure > Header Login Info */\\n.Login_Info,\\n.AppSwitcherContainer,\\na.Login_Info_Username,\\na.Login_Info_Username:link,\\na.Login_Info_Username:visited {\\n  color: #333;\\n  font-size: 100%;\\n  font-weight: normal;\\n}\\n\\n.Login_Info_Logout {\\n  font-size: 22px;\\n}\\n\\n.Login_Info_Logout:before,\\n.Login_Info_Username:before,\\n.AppSwitcherContainer:before,\\n.AppSwitcherLink[disabled]:before {\\n  color: #b3b3b3;\\n  font-family: FontAwesome;\\n  font-size: 14px;\\n  margin-right: 5px;\\n}\\n\\n.Login_Info_Username:before {\\n  content: \\\"\\\\f007\\\";\\n}\\n\\n.Login_Info_Logout:before {\\n  content: \\\"\\\\f011\\\";\\n  margin-right: 0;\\n}\\n\\n/* Responsive Context */\\n.tablet .Login_Info_Logout:before,\\n.phone .Login_Info_Logout:before {\\n  font-size: 20px;\\n}\\n\\n.Logout_Icon {\\n  border-radius: 50%;\\n  text-align: center;\\n  width: 22px;\\n}\\n\\n.Application_Title a,\\n.Application_Title a:link,\\n.Application_Title a:visited,\\n.Application_Title a:hover {\\n  color: #5c5c5c;\\n  padding-right: 10px;\\n  text-decoration: none;\\n}\\n\\n.desktop .Application_Title a:hover {\\n  color: #5c5c5c;\\n  text-decoration: none;\\n}\\n\\n.Header .Application_Title img {\\n  max-height: 30px;\\n  vertical-align: middle;\\n}\\n\\n/* Responsive Context */\\n.tablet .Application_Title,\\n.phone .Application_Title {\\n  padding: 0;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 2.2 Structure > Menu ***************************************/\\n/*------------------------------------------------------------*/\\n.Menu_TopMenus {\\n  width: 100%;\\n}\\n\\n/* Item Menu */\\n.Menu_TopMenu {\\n  position: relative;\\n}\\n\\n/* Link/Button Menu */\\n.Menu_TopMenu a:link,\\n.Menu_TopMenu a:visited,\\n.Menu_TopMenu a {\\n  color: #1d1d1d;\\n  display: inline-block;\\n  font-family: \\\"LatoRegular\\\";\\n  padding: 0 20px;\\n  text-align: center;\\n  text-decoration: none;\\n  transition: all 300ms ease;\\n}\\n\\n.tablet .Menu_TopMenu a,\\n.phone .Menu_TopMenu a {\\n  text-align: left;\\n}\\n\\n/* Hover Menu */\\n.Menu_TopMenu a:hover {\\n  color: #fff;\\n}\\n\\n/* Pointer */\\n.Menu_TopMenu .Menu_DropDownArrow {\\n  border-top-color: #5c5c5c;\\n  opacity: 0.5;\\n  position: absolute;\\n  right: 0;\\n  top: 50%;\\n  transition: all 300ms ease;\\n}\\n\\n.Sidebar_menu .Menu_TopMenu .Menu_DropDownArrow {\\n  right: 26px;\\n}\\n\\n.desktop .Sidebar a:hover,\\n.desktop .Sidebar a:link:hover,\\n.desktop .Sidebar a:visited:hover {\\n  text-decoration: none;\\n}\\n\\n.Menu_DropDownButton.open .Menu_TopMenu .Menu_DropDownArrow,\\n.Menu_DropDOwnButton .Menu_TopMenuActive .Menu_DropDownArrow {\\n  border-top-color: #5c5c5c;\\n  opacity: 1;\\n  transform: rotate(180deg) translateY(2px);\\n}\\n\\n.Menu_DropDownButton.open .Menu_TopMenu a,\\n.Menu_DropDownButton .Menu_TopMenuActive a {\\n  color: #1d1d1d;\\n  font-family: \\\"LatoRegular\\\";\\n  font-weight: 600;\\n}\\n\\n/* Active Menu */\\n.Menu_TopMenuActive {\\n  background-color: #fff;\\n  border-top: 0;\\n  box-shadow: none;\\n  height: 49px;\\n  line-height: 49px;\\n}\\n\\n/* Submenu Item */\\n.Menu_DropDownPanel {\\n  background-color: #fff;\\n  border: none;\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\\n}\\n\\n/* Active Menus */\\n.Menu_TopMenuActive a:link,\\n.Menu_TopMenuActive a:visited,\\na.Menu_SubMenuItemActive:link,\\na.Menu_SubMenuItemActive:visited {\\n  color: #1d1d1d;\\n  font-family: \\\"LatoRegular\\\";\\n  font-weight: 600;\\n}\\n\\n/* Reset any inherit styles (e.g.: ChicagoMobile -> Chicago) */\\ndiv.Menu_DropDownPanel a,\\ndiv.Menu_DropDownPanel a:link,\\ndiv.Menu_DropDownPanel a:visited {\\n  color: #717578;\\n  height: auto;\\n}\\n\\ndiv.Menu_DropDownPanel a:hover,\\ndiv.Menu_DropDownPanel a:link:hover,\\ndiv.Menu_DropDownPanel a:visited:hover {\\n  color: #1d1d1d;\\n  font-weight: 600;\\n}\\n\\n/* SubMenu */\\n.Menu_DropDownPanel a.Menu_SubMenuItem,\\n.Menu_DropDownPanel a.Menu_SubMenuItem:link,\\n.Menu_DropDownPanel a.Menu_SubMenuItem:visited {\\n  display: block;\\n  padding: 3px 20px;\\n}\\n\\n/* hover submenu item */\\n.Menu_DropDownPanel a.Menu_SubMenuItem:hover,\\n.Menu_DropDownPanel a.Menu_SubMenuItem.Menu_SubMenuItemActive {\\n  background-color: #444;\\n  color: #00bfa5;\\n}\\n\\n.tablet .Sidebar,\\n.phone .Sidebar {\\n  width: auto;\\n}\\n\\n.MenuSlider_IsOpen .LoginInfo {\\n  font-size: 30px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 2.3 Structure > Footer *************************************/\\n/*------------------------------------------------------------*/\\n.Footer {\\n  font-size: 12px;\\n  line-height: 40px;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.Footer a,\\n.Footer a:link,\\n.Footer a:visited {\\n  color: #00bfa5;\\n  font-size: 12px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 2.4 Structure > Content ************************************/\\n/*------------------------------------------------------------*/\\n.Page > .Content {\\n  padding-top: 0;\\n}\\n\\n/* If we use sidebar */\\n.desktop:not(.small).UseSidebar .Content {\\n  margin-right: 300px;\\n}\\n\\nhtml .ThemeGrid_Container {\\n  padding-left: 20px;\\n  padding-right: 20px;\\n}\\n\\n.ThemeGrid_Container {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n/* Structure > Main Content */\\n.MainContent {\\n  min-height: 100%;\\n  padding: 40px 20px 0 60px;\\n}\\n\\n.Page.active .MainContent {\\n  pointer-events: none;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 2.5 Structure > Sidebar ************************************/\\n/*------------------------------------------------------------*/\\na.Header_ButtonSidebar {\\n  color: #fff;\\n  display: none;\\n  float: right;\\n  font-size: 20px;\\n  text-align: center;\\n  width: 40px;\\n}\\n\\n.desktop.small.UseSidebar a.Header_ButtonSidebar,\\n.tablet.UseSidebar a.Header_ButtonSidebar {\\n  display: block;\\n}\\n\\n.Sidebar {\\n  border-left: 1px solid #ddd;\\n  height: 100%;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n  padding: 20px 10px;\\n  position: relative;\\n  right: -320px;\\n  top: 50px;\\n  width: 300px;\\n}\\n\\n/*\\n.desktop .Sidebar,\\n.desktop.hd .Sidebar,\\n.desktop.big .Sidebar {\\n  right: 0;\\n}\\n\\n.desktop.small .Sidebar,\\n.tablet .Sidebar {\\n  background-color: #edf1f3;\\n  right: -300px;\\n  -webkit-transition: -webkit-transform 300ms ease;\\n          transition:         transform 300ms ease;\\n}\\n\\n.desktop.small .Sidebar.open,\\n.tablet .Sidebar.open {\\n  -webkit-transform: translateX(-300px);\\n          transform: translateX(-300px);\\n}*/\\n.ie8.desktop.small .Sidebar.open {\\n  right: 0;\\n}\\n\\n.phone .Sidebar {\\n  position: relative;\\n  right: 0;\\n  width: 100%;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 2.6 Structure > Title Section ******************************/\\n/*------------------------------------------------------------*/\\n.Title_Section .Title {\\n  line-height: 40px;\\n  margin: 0;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  width: 50%;\\n}\\n\\n.Title_Section {\\n  background-color: #fff;\\n  background-position: center center;\\n  background-size: cover;\\n  box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.15);\\n  color: #333;\\n  margin-top: 0;\\n  padding: 80px 20px 30px 20px;\\n}\\n\\n.Title_Section.Black {\\n  background-color: #131819;\\n  color: #fff;\\n}\\n\\n.Title_Section.Blue {\\n  background-color: #0074c1;\\n  color: #fff;\\n}\\n\\n.Title_Section.Transparent {\\n  background-color: transparent;\\n}\\n\\n.Title_Section.White {\\n  background-color: #fff;\\n}\\n\\n.Title_Section.Yellow {\\n  background-color: #dab702;\\n  color: #fff;\\n}\\n\\n.Title_Section.Orange {\\n  background-color: #da6802;\\n  color: #fff;\\n}\\n\\n.Title_Section.Red {\\n  background-color: #d01a1a;\\n  color: #fff;\\n}\\n\\n.Title_Section.DarkRed {\\n  background-color: #b10000;\\n  color: #fff;\\n}\\n\\n.Title_Section.Plum {\\n  background-color: #c32b87;\\n  color: #fff;\\n}\\n\\n.Title_Section.DarkPlum {\\n  background-color: #970263;\\n  color: #fff;\\n}\\n\\n.Title_Section.Green {\\n  background-color: #388e3c;\\n  color: #fff;\\n}\\n\\n.Title_Section.LightGreen {\\n  background-color: #64be68;\\n  color: #fff;\\n}\\n\\n.Title_Section.Turquoise {\\n  background-color: #00b0c1;\\n  color: #fff;\\n}\\n\\n.Title_Section.DarkBlue {\\n  background-color: #194968;\\n  color: #fff;\\n}\\n\\n.Title_Section.Silver {\\n  background-color: #dadbde;\\n}\\n\\n.Title_Section.Gray {\\n  background-color: #79868a;\\n  color: #fff;\\n}\\n\\n.Title_Section.BackgroundFixed {\\n  background-attachment: fixed;\\n}\\n\\n.tablet .Title_Section.BackgroundFixed,\\n.phone .Title_Section.BackgroundFixed {\\n  background-attachment: scroll;\\n}\\n\\n.UseSidebar .Title_Section {\\n  margin: 70px 20px 0 20px;\\n  padding: 20px;\\n}\\n\\n.Title_Section.Silver .SectionWebsite_title,\\n.Title_Section.Transparent .SectionWebsite_title,\\n.Title_Section.White .SectionWebsite_title {\\n  color: #333;\\n}\\n\\n.Title_Section.Yellow .SectionWebsite_title {\\n  color: #fff;\\n}\\n\\n/* Structure > Page Title Actions */\\n.Title_Section .Actions {\\n  line-height: 32px;\\n  text-align: right;\\n  width: 50%;\\n}\\n\\n.Title_Section .Actions a {\\n  margin-left: 20px;\\n  text-decoration: none;\\n}\\n\\n.Title_Section .Actions a:first-child {\\n  margin-left: 0;\\n}\\n\\n.phone.portrait .Actions {\\n  margin-bottom: 0;\\n  position: relative;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.phone.portrait .Actions .Button {\\n  margin: 0;\\n  margin-bottom: 10px;\\n  width: 100%;\\n}\\n\\n.phone.portrait .Actions .Button:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.phone .Title_Section .Title {\\n  margin-bottom: 10px;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.phone .Title_Section .Actions,\\n.phone .Title_Section a.ActionAdd,\\n.phone .Title_Section a.ActionEdit,\\n.phone .Title_Section a.ActionDelete,\\n.phone .Title_Section a.ActionChange {\\n  width: 100%;\\n}\\n\\n.Title_Links {\\n  font-size: 14px;\\n  margin-top: 5px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 2.7 Structure > Website ************************************/\\n/*------------------------------------------------------------*/\\n.Website .ThemeGrid_Container {\\n  max-width: 1280px;\\n}\\n\\n.Website .MainContent {\\n  margin: 0;\\n  min-height: inherit;\\n  padding: 0;\\n}\\n\\n.Website .Footer {\\n  background-color: inherit;\\n  height: auto;\\n  padding: 0;\\n  position: static;\\n  width: auto;\\n}\\n\\n.SectionWebsite {\\n  text-align: center;\\n}\\n\\n.SectionWebsite.UsePadding {\\n  padding: 40px 0;\\n}\\n\\n.SectionWebsite .AccordionVertical,\\n.SectionWebsite .Box.Silver,\\n.SectionWebsite .Box.White,\\n.SectionWebsite .Panel,\\n.SectionWebsite .Card,\\n.SectionWebsite .SectionExpandable,\\n.SectionWebsite.Transparent .Box.Transparent,\\n.SectionWebsite.Silver .Box.Transparent,\\n.SectionWebsite.Silver .Section,\\n.SectionWebsite.White .Box.Transparent,\\n.SectionWebsite.Transparent .Section {\\n  color: #333;\\n}\\n\\n.SectionWebsite .Box,\\n.SectionWebsite .Box.Transparent {\\n  color: #fff;\\n}\\n\\n.SectionWebsite_title {\\n  color: #fff;\\n  margin-bottom: 40px;\\n  text-align: center;\\n}\\n\\n/*------------------------------------*\\\\\\n  $3. Forms\\n\\\\*-------------------------------------*/\\nhtml input {\\n  height: 34px;\\n}\\n\\ntextarea,\\nselect,\\ninput {\\n  font-size: 14px;\\n}\\n\\ntextarea:focus,\\nselect:focus,\\ninput:focus {\\n  border-color: #aaa;\\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\\n}\\n\\ntextarea:focus {\\n  border: 2px solid #00bfa5;\\n  box-shadow: none;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 3.1 Forms > Radio Button & Checkbox ************************/\\n/*------------------------------------------------------------*/\\nhtml input[type=radio],\\nhtml input[type=checkbox] {\\n  background-color: transparent;\\n  box-shadow: none !important;\\n}\\n\\nhtml input[type=radio]:before {\\n  box-shadow: none;\\n  height: 16px;\\n  width: 16px;\\n}\\n\\ninput[type=radio]:disabled,\\ninput[type=checkbox]:disabled {\\n  border: none;\\n}\\n\\ninput[type=radio]:hover:after,\\ninput[type=radio]:after {\\n  background: #00bfa5;\\n  border: 2px solid #00bfa5;\\n  border-radius: 8px;\\n  content: \\\" \\\";\\n  display: table;\\n  height: 8px;\\n  left: 20%;\\n  opacity: 0;\\n  position: absolute;\\n  top: 22%;\\n  width: 8px;\\n}\\n\\ninput[type=checkbox] {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  background: transparent;\\n  border: 0;\\n  cursor: pointer;\\n  display: inline-block;\\n  height: 16px;\\n  margin-right: 10px;\\n  position: relative;\\n  width: 16px;\\n}\\n\\ninput[type=radio]:hover:before {\\n  background-color: #fff;\\n  border: 1px solid #5c5c5c;\\n}\\n\\ninput[type=checkbox]:after {\\n  border: 2px solid #fff;\\n  border-right: 0;\\n  border-top: 0;\\n  height: 5px;\\n  left: 24%;\\n  top: 22%;\\n  width: 9px;\\n}\\n\\ninput[type=checkbox]:before {\\n  border: 1px solid #d6d6d6;\\n  box-shadow: none;\\n}\\n\\ninput[type=checkbox]:hover:before {\\n  background-color: #fff;\\n  border: 1px solid #5c5c5c;\\n}\\n\\ninput[type=radio]:focus,\\ninput[type=checkbox]:focus {\\n  border: 0;\\n}\\n\\n.ie input[type=radio],\\n.ie input[type=checkbox],\\n.ie .Form input[type=radio],\\n.ie .Form input[type=checkbox] {\\n  border-radius: 0;\\n}\\n\\ninput[type=checkbox]:checked:hover:before,\\ninput[type=checkbox]:checked:before {\\n  background-color: #00bfa5;\\n  border-color: #00bfa5;\\n}\\n\\ninput[type=radio]:checked:hover:before,\\ninput[type=radio]:checked:hover:after {\\n  color: #00bfa5;\\n  opacity: 1;\\n}\\n\\ninput[type=radio]:checked:before {\\n  background-color: #00bfa5;\\n  border-color: #00bfa5;\\n}\\n\\ninput[type=radio]:checked:after {\\n  background-color: #fff;\\n  height: 6px;\\n  width: 6px;\\n}\\n\\ninput[type=radio]:disabled:before {\\n  background-color: #f5f5f5;\\n  border: 1px solid #adadad;\\n  box-shadow: none;\\n}\\n\\ninput[type=checkbox]:disabled:before,\\ninput[type=checkbox]:disabled:hover:before,\\ninput[type=checkbox]:checked:disabled:hover:before,\\ninput[type=checkbox]:checked:disabled:before {\\n  background-color: #f5f5f5;\\n  border: 1px solid #adadad;\\n  box-shadow: none;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 3.2 Forms > Inputs, Selects & Textarea *********************/\\n/*------------------------------------------------------------*/\\ntextarea,\\nselect,\\ninput[type=text],\\ninput[type=password],\\ninput[type=datetime],\\ninput[type=datetime-local],\\ninput[type=date],\\ninput[type=month],\\ninput[type=time],\\ninput[type=week],\\ninput[type=number],\\ninput[type=email],\\ninput[type=url],\\ninput[type=search],\\ninput[type=tel],\\ninput[type=color] {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 1px;\\n  color: #333;\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 16px;\\n  height: 42px;\\n  line-height: 42px;\\n  min-width: 60px;\\n  padding: 0 0 0 10px;\\n  vertical-align: initial;\\n}\\n\\ntextarea {\\n  line-height: 22px;\\n  min-height: 84px;\\n  resize: none;\\n}\\n\\ninput::-moz-placeholder {\\n  color: #adadad;\\n  font-size: 16px;\\n  font-style: italic;\\n}\\n\\ninput::placeholder {\\n  color: #adadad;\\n  font-size: 16px;\\n  font-style: italic;\\n}\\n\\n/* Webkit browsers like Safari and Chrome */\\ninput[type=number]::-webkit-inner-spin-button,\\ninput[type=number]::-webkit-outer-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0;\\n}\\n\\n/*---- Input Mandatory and Validation  --  WIP----- */\\n.ValidationMessage {\\n  color: #f44336;\\n}\\n\\ninput[type].Not_Valid:focus,\\ninput[type].Mandatory.Not_Valid {\\n  background-color: #fff;\\n  border: 2px solid #ff3e2d;\\n  border-radius: 0;\\n}\\n\\ninput[type].Not_Valid {\\n  background-color: #fff0ef;\\n  border: 2px solid #ff3e2d;\\n  border-radius: 0;\\n}\\n\\ninput[readonly]:focus {\\n  border: 1px solid #d6d6d6;\\n  box-shadow: none !important;\\n}\\n\\n/*Error Input*/\\n.InputErrorDiv {\\n  display: inline;\\n  position: relative;\\n}\\n\\n.InputErrorDiv span {\\n  display: inline-block !important;\\n  width: 100%;\\n}\\n\\n.InputErrorDiv input.Not_Valid + span:after {\\n  color: #858585;\\n  content: \\\"\\\\e921\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 15px;\\n  position: absolute;\\n  right: 10px;\\n  top: 0;\\n}\\n\\n.InputErrorDiv input {\\n  background-color: rgba(255, 62, 45, 0.08);\\n  border: 2px solid #ff3e2d;\\n  border-radius: 1px;\\n  pointer-events: none;\\n}\\n\\n.InputErrorDiv:after {\\n  color: #858585;\\n  content: \\\"\\\\e921\\\";\\n  cursor: pointer;\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 16px;\\n  height: 14px;\\n  position: absolute;\\n  right: 20px;\\n  top: -1px;\\n  width: 16px;\\n}\\n\\n/*Mandatory Input*/\\n.InputMandatoryDiv span {\\n  display: inline-block !important;\\n}\\n\\n.InputMandatoryDiv {\\n  color: #ff3e2d;\\n  font-size: 26px;\\n  margin-left: 6px;\\n  vertical-align: middle;\\n}\\n\\n.InputMandatoryDiv input.Not_Valid + span:after {\\n  color: transparent;\\n  content: \\\"*\\\";\\n  font-size: 28px;\\n  position: absolute;\\n  right: 10px;\\n  top: 5px;\\n}\\n\\nlabel.MandatoryLabel:after {\\n  color: #bf1601;\\n  content: \\\"*\\\";\\n  font-size: 22px;\\n  font-weight: normal;\\n  padding: 0px 5px 5px 3px;\\n  position: absolute;\\n}\\n\\n.ListInputMandatory:after {\\n  color: red;\\n  content: \\\"*\\\";\\n  margin: 10px;\\n  position: absolute;\\n}\\n\\n/* when * exists text doesnt appear*/\\n.ListInputMandatory .ValidationMessage {\\n  display: none;\\n}\\n\\n/*---- ------- */\\ninput {\\n  padding: 0 10px;\\n}\\n\\ninput:focus {\\n  border: 2px solid #00bfa5;\\n  box-shadow: none;\\n}\\n\\ninput:disabled {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n}\\n\\nselect {\\n  box-shadow: none;\\n  height: 42px;\\n  line-height: 35px;\\n  padding-bottom: 4px;\\n  padding-left: 6px;\\n  padding-right: 20px;\\n  padding-top: 4px;\\n}\\n\\n.ie8 select {\\n  padding: 6px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 3.3 Forms > ReadOnly & Disabled ****************************/\\n/*------------------------------------------------------------*/\\n.Form:not(.ReadOnly) {\\n  cursor: text;\\n}\\n\\nselect.ReadOnly {\\n  cursor: pointer;\\n}\\n\\nselect[disabled] {\\n  padding-top: 0;\\n}\\n\\n.Form input.ReadOnly,\\n.Form textarea.ReadOnly,\\n.Form select.ReadOnly {\\n  font-size: 12px;\\n}\\n\\n.Form input.ReadOnly:not(.Not_Valid),\\n.Form textarea.ReadOnly:not(.Not_Valid),\\n.Form select.ReadOnly:not(.Not_Valid) {\\n  border-radius: 2px;\\n  box-shadow: none;\\n  cursor: pointer;\\n  font-size: 12px;\\n}\\n\\n.Form input.ReadOnly:not(.Not_Valid):focus,\\n.Form textarea.ReadOnly:not(.Not_Valid):focus,\\n.Form select.ReadOnly:not(.Not_Valid):focus {\\n  background-color: #fff;\\n  border: 1px solid #aaa;\\n  border-radius: 2px;\\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\\n  font-size: 12px;\\n}\\n\\n.Form input.ReadOnly:not(.Not_Valid),\\n.Form textarea.ReadOnly:not(.Not_Valid),\\n.Form select.ReadOnly:not(.Not_Valid) {\\n  background-color: transparent;\\n  border: 1px solid #ccc;\\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\\n}\\n\\n.Form textarea.ReadOnly[readonly],\\n.Form textarea.ReadOnly[disabled],\\n.Form select.ReadOnly[disabled],\\n.Form input.ReadOnly[readonly],\\n.Form input.ReadOnly[disabled],\\n.Form input[disabled].ReadOnly:not(.Not_Valid),\\n.Form input[readonly].ReadOnly:not(.Not_Valid),\\n.Form textarea[disabled].ReadOnly:not(.Not_Valid),\\n.Form textarea[readonly].ReadOnly:not(.Not_Valid),\\n.Form select[disabled].ReadOnly:not(.Not_Valid),\\n.Form select[readonly].ReadOnly:not(.Not_Valid),\\ntextarea[disabled],\\ntextarea[readonly],\\nselect[disabled],\\ninput[readonly],\\ninput[disabled] {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 1px;\\n  cursor: not-allowed;\\n}\\n\\ninput[disabled][type=text]:focus,\\ninput[disabled][type=password]:focus,\\ntextarea[disabled]:focus,\\ntextarea[readonly]:focus,\\nselect[disabled]:focus,\\ninput[readonly]:focus,\\ninput[disabled]:focus,\\n.Form input[readonly].ReadOnly:not(.Not_Valid):focus,\\n.Form input[disabled].ReadOnly:not(.Not_Valid):focus,\\n.Form textarea[readonly].ReadOnly:not(.Not_Valid):focus,\\n.Form textarea[disabled].ReadOnly:not(.Not_Valid):focus,\\n.Form select[readonly].ReadOnly:not(.Not_Valid):focus,\\n.Form select[disabled].ReadOnly:not(.Not_Valid):focus {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\\n}\\n\\ninput[type=radio].ReadOnly,\\ninput[type=checkbox].ReadOnly,\\n.Form input.ReadOnly[disabled][type=radio],\\n.Form input.ReadOnly[readonly][type=radio],\\n.Form input.ReadOnly[disabled][type=checkbox],\\n.Form input.ReadOnly[readonly][type=checkbox],\\n.Form input[type=radio].ReadOnly,\\n.Form input[type=checkbox].ReadOnly {\\n  background-color: transparent;\\n  border-width: 0;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 3.4 Forms > Not Valid **************************************/\\n/*------------------------------------------------------------*/\\n.Form input.Not_Valid,\\n.Form select.Not_Valid,\\n.Form textarea.Not_Valid,\\ninput.Not_Valid,\\nselect.Not_Valid,\\ntextarea.Not_Valid {\\n  border-radius: 4px;\\n}\\n\\n.Form select.Not_Valid,\\nselect.Not_Valid,\\n.Form select.Not_Valid:focus,\\nselect.Not_Valid:focus {\\n  border: 2px solid #ff3e2d;\\n  border-radius: 1px;\\n  box-shadow: none;\\n}\\n\\n/*\\ntextarea.Not_Valid:focus,\\ntextarea.Not_Valid */\\n.Form textarea.Not_Valid:focus,\\n.Form textarea.Not_Valid {\\n  font-size: 12px;\\n  padding: 10px 12px;\\n}\\n\\ntextarea.Not_Valid:focus,\\ntextarea.Not_Valid {\\n  font-size: 16px;\\n  line-height: 42px;\\n  padding: 0 0 0 10px;\\n}\\n\\n/*select.Not_Valid:focus,\\ninput.Not_Valid:focus,\\ntextarea.Not_Valid:focus {\\n  border: 1px solid #bf1601;\\n}*/\\ntextarea.Not_Valid,\\ntextarea.Not_Valid:focus {\\n  background-color: #fff;\\n  border: 2px solid #ff3e2d;\\n  border-radius: 0;\\n}\\n\\n.Form input[type=checkbox].Not_Valid,\\n.Form input[type=radio].Not_Valid,\\ninput[type=checkbox].Not_Valid,\\ninput[type=radio].Not_Valid {\\n  border: transparent;\\n  padding: 0;\\n}\\n\\n.Form input.ReadOnly,\\n.Form textarea.ReadOnly {\\n  background: #fff;\\n}\\n\\n.SmartInput_Undo + .FormEditPencil {\\n  display: none;\\n}\\n\\n/*------------------------------------*\\\\\\n  $4. Buit-in widgets\\n\\\\*-------------------------------------*/\\n/*------------------------------------------------------------*/\\n/* 4.1 Buit-in widgets > Filter Form **************************/\\n/*------------------------------------------------------------*/\\n.Filters_Wrapper {\\n  background: #fff;\\n  border-radius: 0;\\n  line-height: 32px;\\n  padding: 10px;\\n}\\n\\n.Filters_Wrapper .Button {\\n  margin-left: 10px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 4.2 Buit-in widgets > EditableTable ************************/\\n/*------------------------------------------------------------*/\\n.EditableTable {\\n  border: 1px solid #ddd;\\n}\\n\\n.EditableTable thead tr th {\\n  background-color: #fff;\\n  border-bottom: 1px solid #ddd;\\n}\\n\\n.EditableTable thead td {\\n  color: #333;\\n  font-weight: bold;\\n}\\n\\n.EditableTable tr:nth-child(odd) {\\n  background-color: #fafafa;\\n}\\n\\n.EditableTable tbody tr:not(.RowControlGroup) td {\\n  border-bottom: 1px solid #ddd;\\n}\\n\\ntd.RowWithAddAction {\\n  background: none repeat scroll 0 0 #fff;\\n  border-bottom: none;\\n  padding: 0;\\n}\\n\\ntd.RowWithAddAction a {\\n  padding: 10px 0 10px 22px;\\n}\\n\\n.EditableTable tr.RowControlGroup a {\\n  color: #009884;\\n}\\n\\n.EditableTable tr.RowControlGroup a:hover {\\n  color: #00bfa5;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 4.3 Buit-in widgets > TableRecords *************************/\\n/*------------------------------------------------------------*/\\n.TableRecords {\\n  border: none;\\n  border-radius: 4px;\\n  margin-top: 0;\\n}\\n\\n.TableRecords_Header {\\n  border-bottom: solid 1px #d6d6d6;\\n  color: #858585;\\n  font-size: 11px;\\n  font-weight: 600;\\n  height: 26px;\\n  line-height: 18px;\\n  padding: 0 10px 0 7px;\\n  text-transform: uppercase;\\n}\\n\\n.TableRecords thead tr {\\n  height: 35px;\\n}\\n\\n/* For when exist Filter */\\n.TableRecords_Wrapper.TableTopFix thead th {\\n  top: 132px;\\n}\\n\\n.TableRecords_BottomNavigation {\\n  margin-top: 0;\\n  padding: 16px 26px 16px 0;\\n}\\n\\n.TableRecords_BottomNavigation > div {\\n  vertical-align: middle;\\n}\\n\\n.TableRecords_BottomNavigation .Counter_Message {\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  font-weight: 400;\\n}\\n\\n.desktop .TableRecords_OddLine:first-child,\\n.desktop .TableRecords_EvenLine:first-child,\\n.desktop .TableRecords_Header:first-child,\\n.tablet .TableRecords_OddLine:first-child,\\n.tablet .TableRecords_EvenLine:first-child,\\n.tablet .TableRecords_Header:first-child {\\n  padding-left: 10px;\\n}\\n\\n.desktop .TableRecords_Header,\\n.tablet .TableRecords_Header {\\n  padding: 0 10px 0 10px;\\n}\\n\\n.TableRecords.fixed {\\n  background-color: #fff;\\n  border: none;\\n  display: none;\\n  margin: 0;\\n  padding: 0 10px;\\n  position: sticky;\\n  right: 0;\\n  top: 81px;\\n  width: 100%;\\n  z-index: 50;\\n}\\n\\n.TableRecords > tbody > tr {\\n  height: auto;\\n}\\n\\n.TableRecords > tbody > tr:hover {\\n  background: #fff;\\n}\\n\\n.TableRecords_OddLine,\\n.TableRecords_EvenLine {\\n  border-bottom-color: #d6d6d6;\\n  padding-bottom: 20px;\\n  padding-top: 20px;\\n  vertical-align: top;\\n  word-break: break-word;\\n}\\n\\n.TableRecords_OddLine:last-child,\\n.TableRecords_EvenLine:last-child,\\n.TableRecords_Header:last-child {\\n  line-height: normal;\\n  padding-right: 10px;\\n}\\n\\n.TableRecords_OddLine:last-child .icon-reorder,\\n.TableRecords_EvenLine:last-child .icon-reorder,\\n.TableRecords_Header:last-child .icon-reorder {\\n  cursor: -webkit-grab;\\n  float: right;\\n}\\n\\n.TableRecords + .InfoTips {\\n  padding-left: 26px;\\n}\\n\\n.desktop .TableRecords > tbody > tr:hover,\\n.desktop .EditableTable > tbody > tr:hover td {\\n  background-color: #f5f5f5;\\n}\\n\\n.desktop .TableRecords > tbody > tr:hover,\\n.desktop .TableRecords > tbody > tr:hover td,\\n.desktop .EditableTable > tbody > tr:hover td {\\n  background: #f5f5f5;\\n}\\n\\n.EditTable .TableRecords {\\n  padding: 0;\\n}\\n\\n/*------------------------------------*\\\\\\n            $5. RichWidgets\\n\\\\*-------------------------------------*/\\n/*------------------------------------------------------------*/\\n/* 5.1 RichWidgets > Feedback Ajax Loading ********************/\\n/*------------------------------------------------------------*/\\n.Feedback_AjaxWait {\\n  background-color: white;\\n  border-radius: 0;\\n  border-top-left-radius: 6px;\\n  border-top-right-radius: 6px;\\n  bottom: 0;\\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\\n  color: #00bfa5;\\n  font-size: 12px;\\n  height: 60px;\\n  padding: 16px 20px 10px 20px;\\n  right: 20px;\\n}\\n\\n.Feedback_AjaxWait .Loader {\\n  height: 16px;\\n  position: relative;\\n  text-indent: -9999em;\\n  width: 16px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 5.2 RichWidgets > Feedback Message *************************/\\n/*------------------------------------------------------------*/\\ndiv.Feedback_Message_Wrapper {\\n  left: 0;\\n  margin-top: 102px;\\n  z-index: 4022;\\n}\\n\\ndiv.Feedback_Message_Error,\\ndiv.Feedback_Message_Success,\\ndiv.Feedback_Message_Warning,\\ndiv.Feedback_Message_Info {\\n  -webkit-backface-visibility: hidden;\\n  border-radius: 3px;\\n  box-shadow: none;\\n  box-sizing: border-box;\\n  line-height: normal;\\n  max-width: 100%;\\n  min-width: 300px;\\n  padding: 10px 40px 10px 40px;\\n  word-break: break-word;\\n}\\n\\ndiv.Feedback_Message_Info:before,\\ndiv.Feedback_Message_Success:before,\\ndiv.Feedback_Message_Error:before,\\ndiv.Feedback_Message_Warning:before {\\n  font-size: 20px;\\n  left: 15px;\\n  top: 9px;\\n}\\n\\na.Feedback_Message_Wrapper_Close {\\n  color: #000;\\n  opacity: 0.3;\\n  right: 10px;\\n  top: 8px;\\n}\\n\\na.Feedback_Message_Wrapper_Close:hover {\\n  opacity: 0.6;\\n}\\n\\n.tablet a.Feedback_Message_Wrapper_Close,\\n.phone a.Feedback_Message_Wrapper_Close {\\n  pointer-events: none;\\n}\\n\\ndiv.Feedback_Message_Error .Feedback_Message_Wrapper_Close:after,\\ndiv.Feedback_Message_Warning .Feedback_Message_Wrapper_Close:after,\\ndiv.Feedback_Message_Info .Feedback_Message_Wrapper_Close:after,\\ndiv.Feedback_Message_Success .Feedback_Message_Wrapper_Close:after {\\n  color: #000;\\n  content: \\\"\\\\f00d\\\";\\n  font-family: FontAwesome;\\n  text-align: right;\\n}\\n\\ndiv.Feedback_Message_Success a.Feedback_Message_Wrapper_Close,\\ndiv.Feedback_Message_Error a.Feedback_Message_Wrapper_Close,\\ndiv.Feedback_Message_Warning a.Feedback_Message_Wrapper_Close,\\ndiv.Feedback_Message_Info a.Feedback_Message_Wrapper_Close {\\n  opacity: 1;\\n}\\n\\n/* RichWidgets > Feedback Message > Success */\\ndiv.Feedback_Message_Success {\\n  background-color: #dff0d8;\\n  border: 1px solid #cbe0ba;\\n  color: #346b35;\\n}\\n\\ndiv.Feedback_Message_Success:before {\\n  color: #7dc62b;\\n}\\n\\ndiv.Feedback_Message_Success a.Feedback_Message_Wrapper_Close:after {\\n  color: #346b35;\\n}\\n\\n/* RichWidgets > Feedback Message > Error */\\ndiv.Feedback_Message_Error {\\n  background-color: #f5e7e7;\\n  border: 1px solid #ead8d8;\\n  color: #843534;\\n}\\n\\ndiv.Feedback_Message_Error:before {\\n  color: #e58d8d;\\n}\\n\\ndiv.Feedback_Message_Error a.Feedback_Message_Wrapper_Close:after {\\n  color: #843557;\\n}\\n\\n/* RichWidgets > Feedback Message > Warning */\\ndiv.Feedback_Message_Warning {\\n  background-color: #fcf8e3;\\n  border: 1px solid #f1deb6;\\n  color: #8a6d3b;\\n}\\n\\ndiv.Feedback_Message_Warning:before {\\n  color: #eabd30;\\n}\\n\\ndiv.Feedback_Message_Warning a.Feedback_Message_Wrapper_Close:after {\\n  color: #8a6d3b;\\n}\\n\\n/* RichWidgets > Feedback Message > Info */\\ndiv.Feedback_Message_Info {\\n  background-color: #fcf8e3;\\n  border: 1px solid #f1deb6;\\n  color: #8a6d3b;\\n}\\n\\ndiv.Feedback_Message_Info:before {\\n  color: #eabd30;\\n}\\n\\ndiv.Feedback_Message_Info a.Feedback_Message_Wrapper_Close:after {\\n  color: #8a6d3b;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 5.3 RichWidgets > List Navigation **************************/\\n/*------------------------------------------------------------*/\\n.ListNavigation_Wrapper {\\n  padding: 0 26px 10px;\\n}\\n\\na.ListNavigation_PageNumber:link,\\nspan.ListNavigation_CurrentPageNumber,\\nspan.ListNavigation_Ellipsis,\\na.ListNavigation_Previous:link,\\na.ListNavigation_Next:link {\\n  background: transparent;\\n  border: none;\\n  border-radius: 50%;\\n  color: #1d1d1d;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-size: 14px;\\n  font-weight: normal;\\n  height: 26px;\\n  margin-bottom: 0;\\n  text-align: center;\\n  text-shadow: none;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n  width: 26px;\\n}\\n\\na.ListNavigation_Previous:link {\\n  background-color: transparent;\\n  font-size: 10px;\\n  overflow: hidden;\\n  text-indent: 40px;\\n  white-space: nowrap;\\n}\\n\\na.ListNavigation_Previous:link:before {\\n  color: #858585;\\n  content: \\\"\\\\e69c\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 10px;\\n  position: absolute;\\n  text-indent: -80px;\\n}\\n\\na.ListNavigation_Next:link {\\n  background-color: transparent;\\n  font-size: 10px;\\n  overflow: hidden;\\n  text-indent: 40px;\\n  white-space: nowrap;\\n}\\n\\na.ListNavigation_Next:link:before {\\n  color: #858585;\\n  content: \\\"\\\\e69d\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 10px;\\n  position: absolute;\\n  text-indent: -80px;\\n}\\n\\na.ListNavigation_PageNumber:link {\\n  color: #858585;\\n}\\n\\nspan.ListNavigation_CurrentPageNumber {\\n  background-color: #00bfa5;\\n  border-radius: 50%;\\n  color: #fff;\\n}\\n\\nspan.ListNavigation_DisabledNext,\\nspan.ListNavigation_DisabledPrevious {\\n  color: transparent;\\n  display: inline-block;\\n  opacity: 0.4;\\n  padding: 0;\\n  position: relative;\\n  visibility: hidden;\\n}\\n\\n.ListNavigation_DisabledPrevious:before {\\n  color: #9b9b9b;\\n  content: \\\"\\\\e69c\\\";\\n  display: inline-block;\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 10px;\\n  height: 26px;\\n  margin-right: 5px;\\n  position: absolute;\\n  right: 4px;\\n  top: 1px;\\n  visibility: visible;\\n  width: 26px;\\n}\\n\\n.ListNavigation_DisabledNext:after {\\n  color: #9b9b9b;\\n  content: \\\"\\\\e69d\\\";\\n  display: inline-block;\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 10px;\\n  height: 26px;\\n  left: -17px;\\n  margin-right: 5px;\\n  position: absolute;\\n  top: 1px;\\n  visibility: visible;\\n  width: 26px;\\n}\\n\\nspan.ListNavigation_Ellipsis {\\n  display: none;\\n}\\n\\n.desktop .ListNavigation_Wrapper a:hover,\\n.desktop .ListNavigation_Wrapper a:link:hover,\\n.desktop .ListNavigation_Wrapper a:visited:hover {\\n  background-color: #d6d6d6;\\n  color: #858585;\\n  text-decoration: none;\\n}\\n\\n.ListNavigation_Wrapper a:hover:active,\\n.ListNavigation_Wrapper a:link:hover:active {\\n  background-color: #d6d6d6;\\n  color: #858585;\\n  transition: color 100ms ease;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 5.4 RichWidgets > Popup Editor *****************************/\\n/*------------------------------------------------------------*/\\n/*\\ndiv.os-internal-Popup .os-internal-ui-dialog,\\ndiv.os-internal-Popup.os-internal-ui-dialog {\\n  height: auto !important;\\n  padding: 58px 68px 0 68px;\\n  width: auto !important;\\n}\\n\\ndiv.os-internal-Popup .os-internal-ui-dialog .os-internal-ui-dialog-titlebar,\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-titlebar {\\n  background-color: #fff;\\n  height: 50px;\\n}\\n\\ndiv.os-internal-Popup .os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close,\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close {\\n  background-image: none;\\n  opacity: 1;\\n  right: 20px;\\n  top: 20px;\\n}\\n\\ndiv.os-internal-Popup .os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close:before,\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close:before {\\n  color: #333;\\n  content: \\\"\\\\e60c\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 18px;\\n}\\n\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close-no-title {\\n  opacity: 1;\\n}\\n\\ndiv.os-internal-Popup .os-internal-ui-dialog .os-internal-ui-dialog-title,\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-title {\\n  color: #333;\\n  font-size: 20px;\\n  font-weight: 900;\\n  left: 0;\\n}\\n\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-content {\\n  margin-top: 26px;\\n}\\n\\ndiv.os-internal-Popup .os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close:hover,\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close:hover {\\n  opacity: 1;\\n  transform: none;\\n}*/\\ndiv.os-internal-Popup.os-internal-ui-dialog .os-internal-ui-dialog-titlebar-close-no-title {\\n  background: url(\\\"/WebPatterns/img/PopupCloseDark.png\\\") no-repeat;\\n  height: 20px;\\n  right: 20px;\\n  top: 5px;\\n  transition: all 0.3s ease;\\n  width: 20px;\\n}\\n\\n/*------------------------------------*\\\\\\n      $6. Login\\n\\\\*------------------------------------*/\\n.Login {\\n  background-color: #666;\\n  background-image: radial-gradient(circle 497px at 16.42% 87.08%, rgba(255, 255, 255, 0.2) 0%, transparent 100%), radial-gradient(circle 242px at 21.53% 91.67%, #222731 0%, #222731 100%);\\n  color: #fff;\\n  height: 100%;\\n  min-height: 280px;\\n  position: absolute;\\n  width: 100%;\\n}\\n\\n.Login_Box {\\n  padding-top: 20px;\\n}\\n\\n.phone .Login_Box {\\n  left: 50%;\\n  margin-left: 0 !important;\\n  margin-top: 0 !important;\\n  padding-top: 0;\\n  top: 50%;\\n  transform: translateX(-50%) translateY(-50%);\\n}\\n\\n.Login__Logo {\\n  padding-bottom: 10px;\\n}\\n\\n.Login__Form {\\n  background-color: transparent;\\n  padding: 20px 20px;\\n}\\n\\n.phone .Login_Footer {\\n  padding: 15px 0;\\n}\\n\\n/* Accordion Harrow */\\n.fa-angle-down:before {\\n  padding-left: 1px;\\n}\\n\\n/* Burguer */\\n.fa-bars {\\n  cursor: pointer;\\n}\\n\\n/*------------------------------------*\\\\\\n      $7 SILK Patterns\\n\\\\*------------------------------------*/\\n/*------------------------------------------------------------*/\\n/* 7.1 SILK Patterns > Content ********************************/\\n/*------------------------------------------------------------*/\\n/* SILK Patterns > Accordion */\\n.AccordionVertical {\\n  background-color: #fff;\\n  box-shadow: 0 1px 3px rgba(211, 211, 211, 0.5);\\n}\\n\\n.AccordionVertical_item.open .AccordionVertical__header {\\n  font-weight: 400;\\n}\\n\\n.AccordionVertical___title {\\n  color: #00bfa5;\\n}\\n\\n.AccordionVertical___icon {\\n  border-left: 0;\\n  color: #949fa3;\\n}\\n\\n.AccordionVertical___icon > .fa {\\n  border: 0;\\n}\\n\\n.AccordionVertical_item.open .AccordionVertical___icon > .fa {\\n  border: 0;\\n  color: #00bfa5;\\n}\\n\\n/* SILK Patterns > Alert */\\n.Alert {\\n  border-radius: 2px;\\n}\\n\\n.Alert.Info {\\n  background-color: #d9edf7;\\n  border-color: #c8dee9;\\n  color: #31708f;\\n}\\n\\n.Alert.Info span.fa {\\n  color: #5eb1db;\\n}\\n\\n.Alert.Success {\\n  background-color: #dff0d8;\\n  border-color: #cbe0ba;\\n  color: #346b35;\\n}\\n\\n.Alert.Success span.fa {\\n  color: #7dc62b;\\n}\\n\\n.Alert.Error {\\n  background-color: #f5e7e7;\\n  border-color: #ead8d8;\\n  color: #843534;\\n}\\n\\n.Alert.Error span.fa {\\n  color: #e58d8d;\\n}\\n\\n.Alert.Warning {\\n  background-color: #fcf8e3;\\n  border-color: #f1deb6;\\n  color: #8a6d3b;\\n}\\n\\n.Alert.Warning span.fa {\\n  color: #eabd30;\\n}\\n\\n/* SILK Patterns > Balloon */\\n.Balloon {\\n  border-radius: 3px;\\n}\\n\\n/* Format the Balloon Arrow Position */\\n.Balloon .tooltipster-arrow-top.tooltipster-arrow {\\n  top: 0;\\n}\\n\\n.Balloon .tooltipster-arrow-bottom.tooltipster-arrow {\\n  top: 0;\\n}\\n\\n.Balloon .tooltipster-arrow-left.tooltipster-arrow {\\n  left: -1px;\\n}\\n\\n.Balloon .tooltipster-arrow-right.tooltipster-arrow {\\n  left: 1px;\\n}\\n\\n/* SILK Patterns > BlankSlate */\\n.Blank {\\n  border: 1px dashed;\\n  border-color: #adadad;\\n  border-radius: 4px;\\n  height: 140px;\\n  padding: 18px 0 19px;\\n}\\n\\n.Blank_desc {\\n  color: #858585;\\n  font-size: 20px;\\n  margin-top: 16px;\\n}\\n\\n.Blank_wrapper {\\n  color: #adadad;\\n  font-weight: 600;\\n}\\n\\n.Blank_icon {\\n  font-size: 42px;\\n}\\n\\n.Blank_action {\\n  color: #009884;\\n  margin-top: 10px;\\n}\\n\\n.Blank_wrapper a {\\n  color: #009884;\\n  font-size: 16px;\\n  font-weight: 600;\\n}\\n\\n/* SILK Patterns > Box */\\n/* SILK Patterns > Bullets */\\n/* SILK Patterns > ButtonsArea */\\n/* SILK Patterns > Cards */\\n.Card {\\n  background-color: #fff;\\n  border: 1px solid #dadbde;\\n  box-shadow: 0 1px 3px rgba(211, 211, 211, 0.5);\\n}\\n\\n/* SILK Patterns > Carousel */\\n.owl-theme .owl-controls .owl-buttons div {\\n  background: transparent;\\n  color: #79868a;\\n  font-size: 30px;\\n}\\n\\n.owl-theme .owl-controls .owl-page.active span,\\n.owl-theme .owl-controls.clickable .owl-page:hover span {\\n  background-color: #00bfa5;\\n}\\n\\n/* SILK Patterns > Info */\\n/* SILK Patterns > Modal */\\n.ModalContainer {\\n  border: none;\\n  transition: all 1s;\\n}\\n\\nbody.ModalOpened .ModalContainer {\\n  bottom: 50%;\\n}\\n\\n/* SILK Patterns > Panel */\\n.Panel {\\n  border: none;\\n  min-height: 0;\\n}\\n\\n.Panel .Panel_footer {\\n  border-top-style: dashed;\\n}\\n\\n.desktop.hd .PanelById .PanelContainer {\\n  max-height: 700px;\\n  top: 50%;\\n}\\n\\n.PanelById .PanelTitle {\\n  color: #333333;\\n  font-size: 20px;\\n  font-weight: 900;\\n  line-height: 24px;\\n}\\n\\n.PanelById .PanelMessage {\\n  color: #333;\\n  font-size: 16px;\\n  line-height: 24px;\\n  margin-bottom: 46px;\\n  text-align: center;\\n}\\n\\n.PanelById .PanelContainer a + .Button,\\na + a.Button {\\n  margin-left: 16px;\\n}\\n\\n.PanelById .PanelActions a:not(.Button) {\\n  color: #5c5c5c;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 19px;\\n}\\n\\n/* SILK Patterns > Post */\\n.Post .Post_icon img {\\n  border: 1px solid #dadbde;\\n  border-radius: 4px;\\n}\\n\\n.Post .Post__label {\\n  font-size: 16px;\\n}\\n\\n/* SILK Patterns > Section */\\n/* SILK Patterns > Section Expandable */\\n.SectionExpandable {\\n  background-color: #fff;\\n  border: 1px solid #dadbde;\\n  box-shadow: 0 1px 3px rgba(211, 211, 211, 0.5);\\n}\\n\\n.SectionExpandable .SectionExpandable_header {\\n  padding: 10px;\\n}\\n\\n.SectionExpandable .SectionExpandable_header .Heading2 {\\n  font-size: 14px;\\n  font-weight: 400;\\n}\\n\\n.SectionExpandable_content {\\n  visibility: hidden;\\n}\\n\\n.SectionExpandable.expanded {\\n  visibility: visible;\\n}\\n\\n.SectionExpandable.expanded .SectionExpandable_header .Heading2 {\\n  color: #009884;\\n  font-weight: 600;\\n}\\n\\n.SectionExpandable .SectionExpandable_header .Heading2 {\\n  color: #333;\\n  font-weight: 600;\\n}\\n\\n.SectionExpandable .SectionExpandable_header .Heading2.SectionExpandable__icon {\\n  font-size: 24px;\\n}\\n\\n/* SILK Patterns > Separator */\\n.Separator {\\n  margin: 26px 0;\\n}\\n\\n/* SILK Patterns > Tooltip */\\n.tooltip_style {\\n  background-color: #f5f5f5;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  box-shadow: none;\\n  color: #000;\\n  text-align: left;\\n}\\n\\n.tooltip_style .tooltipster-content {\\n  color: #333;\\n  font-size: 14px;\\n  line-height: 16px;\\n  overflow: hidden;\\n  padding: 8px 10px;\\n}\\n\\n/*\\n.tooltipstered span:before {\\n  color: #5c5c5c;\\n  content: \\\"\\\\e625\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 16px;\\n}\\n*/\\n.tooltipster-arrow-right .tooltipster-arrow-border {\\n  left: -8px;\\n}\\n\\n.tooltipster-arrow-right span {\\n  left: -8px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 7.2 SILK Patterns > Controls *******************************/\\n/*------------------------------------------------------------*/\\n/* SILK Patterns > ButtonGroup */\\n.ButtonGroup_button.Button:first-child {\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.ButtonGroup_button.Button:last-child {\\n  border-radius: 0 3px 3px 0;\\n}\\n\\n.desktop .ButtonGroup_button.Button.disabled,\\n.desktop .ButtonGroup_button.Button.disabled:hover {\\n  background-color: #f5f5f5;\\n  box-shadow: inset 0 -1px 0 rgba(19, 24, 25, 0.3);\\n}\\n\\n.ButtonGroup_button.active,\\n.desktop .ButtonGroup_button.active:hover {\\n  background: none;\\n  background-color: #8ce2d6;\\n  border: 1px solid #8ce2d6;\\n  box-shadow: none;\\n  color: #333;\\n  font-weight: bold;\\n}\\n\\n.ButtonGroup_button.active span.fa,\\n.desktop .ButtonGroup_button.active:hover span.fa {\\n  color: #fff;\\n}\\n\\n.phone .ButtonGroup_button.Button:first-child {\\n  border-bottom-left-radius: 0;\\n  border-top-right-radius: 3px;\\n}\\n\\n.phone .ButtonGroup_button.Button:last-child {\\n  border-bottom-left-radius: 3px;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n\\n.phone .NoResponsive > .ButtonGroup .ButtonGroup_button.Button:first-child {\\n  border-bottom-left-radius: 3px;\\n  border-top-right-radius: 0;\\n}\\n\\n.phone .NoResponsive > .ButtonGroup .ButtonGroup_button.Button:last-child {\\n  border-bottom-left-radius: 0;\\n  border-top-right-radius: 3px;\\n}\\n\\n/* SILK Patterns > Calendar */\\n/* Calendar **************************/\\n.pika-table td {\\n  padding-top: 12px;\\n  text-align: -webkit-center;\\n}\\n\\n.pika-table .pika-button {\\n  height: 34px;\\n  line-height: 26px;\\n  width: 34px;\\n}\\n\\n.pika-single {\\n  border: 1px solid #d6d6d6;\\n  border-radius: 1px;\\n  font-size: 16px;\\n  padding: 10px;\\n  z-index: 2;\\n}\\n\\n.pika-title {\\n  border-bottom: none;\\n  font-size: 16px;\\n  height: 42px;\\n  position: relative;\\n  text-align: center;\\n}\\n\\n.pika-lendar .Calendar-prevYear,\\n.pika-lendar .Calendar-nextYear {\\n  border: none;\\n}\\n\\n.pika-label {\\n  background-color: #fff;\\n  display: inline-block;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 23px;\\n  margin: 0;\\n  overflow: hidden;\\n  padding: 0;\\n  /*padding-top: 5px;*/\\n  position: relative;\\n}\\n\\n.pika-label:first-child {\\n  margin-right: 10px;\\n}\\n\\n.pika-title select {\\n  cursor: pointer;\\n  filter: alpha(opacity=0);\\n  left: 0;\\n  margin: 0;\\n  opacity: 0;\\n  position: absolute;\\n  top: 5px;\\n  z-index: 9998;\\n}\\n\\n.pika-prev,\\n.pika-next {\\n  background-color: transparent;\\n  border: 0;\\n  color: transparent;\\n  content: \\\"\\\";\\n  cursor: pointer;\\n  display: block;\\n  height: 50px;\\n  outline: none;\\n  overflow: hidden;\\n  padding: 0;\\n  position: absolute;\\n  position: absolute;\\n  top: 0;\\n  white-space: nowrap;\\n  width: 30px;\\n  z-index: 9999;\\n}\\n\\n.pika-prev,\\n.is-rtl .pika-next {\\n  border-right: none;\\n  left: 30px;\\n  top: 0;\\n}\\n\\n.pika-prev:after {\\n  color: #5c5c5c;\\n  content: \\\"\\\\e69c\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 10px;\\n  height: 6px;\\n  left: 0;\\n  position: absolute;\\n  top: 10px;\\n  width: 100%;\\n  z-index: 999999;\\n}\\n\\n.pika-next,\\n.is-rtl .pika-prev {\\n  border-left: none;\\n  right: 30px;\\n  top: 0;\\n}\\n\\n.pika-next:after {\\n  color: #5c5c5c;\\n  content: \\\"\\\\e69d\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 10px;\\n  height: 6px;\\n  left: 0;\\n  position: absolute;\\n  top: 10px;\\n  width: 100%;\\n  z-index: 999999;\\n}\\n\\n.pika-table th {\\n  border-bottom: 1px solid #adadad;\\n  color: #5c5c5c;\\n  font-size: 11px;\\n  font-weight: 600;\\n  line-height: 32px;\\n  opacity: 1;\\n  text-align: center;\\n  text-decoration: none;\\n}\\n\\n.pika-table th abbr {\\n  text-decoration: none;\\n}\\n\\n.pika-table th:nth-child(6),\\n.pika-table th:nth-child(7) {\\n  color: #adadad;\\n}\\n\\n.pika-button {\\n  color: #5c5c5c;\\n  font-size: 16px;\\n  font-weight: 600;\\n}\\n\\n.triggerTime.goToday {\\n  display: none !important;\\n}\\n\\n.triggerTime {\\n  width: 100% !important;\\n}\\n\\n.has-event .pika-button:after {\\n  background-color: #ff3e2d;\\n  border-radius: 0;\\n  bottom: -3px;\\n  content: \\\"\\\";\\n  height: 2px;\\n  left: 38%;\\n  margin-left: 0;\\n  position: absolute;\\n  width: 16px;\\n}\\n\\n.is-disabled .pika-button {\\n  background-color: transparent;\\n  color: #d6d6d6;\\n  opacity: 1 !important;\\n}\\n\\ntd.is-disabled {\\n  position: relative;\\n}\\n\\n.is-disabled .pika-button:after {\\n  background-color: #adadad;\\n  content: \\\"\\\";\\n  height: 2px;\\n  left: 34%;\\n  position: absolute;\\n  top: 60%;\\n  width: 26px;\\n}\\n\\n.pika-button:hover {\\n  background: #f5f5f5;\\n  border-radius: 100px;\\n  color: #5c5c5c;\\n}\\n\\n.is-selected .pika-button:hover,\\n.is-selected .pika-button {\\n  background: #00bfa5;\\n  border-radius: 50%;\\n  color: #fff;\\n  font-weight: 600;\\n}\\n\\n.is-today .pika-button {\\n  background: #00bfa5;\\n  border-radius: 100px;\\n}\\n\\n.is-selected.has-event .pika-button:after,\\n.is-selected.is-today.has-event .pika-button:after {\\n  background-color: #ff3e2d;\\n}\\n\\n.tablet .triggerTime:hover,\\n.tablet .pika-button:hover {\\n  background-color: #fff;\\n  color: #5c5c5c;\\n}\\n\\n.Calendar-day:hover,\\n.Calendar-bottomBar-today:hover,\\n.triggerTime:hover,\\n.triggerTimeBack:hover {\\n  background: #00bfa5;\\n  border-radius: 4px;\\n  color: #fff;\\n  cursor: pointer;\\n}\\n\\n.Calendar-navBtn > div {\\n  color: #5c5c5c;\\n  font-size: 27px;\\n  height: 22px;\\n  line-height: 28px;\\n}\\n\\n.Calendar-previousYear-arrow.pika-select-previous-year {\\n  position: absolute;\\n  right: 7px;\\n}\\n\\n.Calendar-nextYear-arrow.pika-select-next-year {\\n  left: 7px;\\n  position: absolute;\\n}\\n\\n.is-outside-current-month button {\\n  color: #adadad;\\n}\\n\\n/* SILK Patterns > Dropdown */\\n.DropdownMenu .PH > a {\\n  color: #333;\\n  padding-left: 0;\\n  padding-right: 0;\\n}\\n\\n.DropdownMenu .PH > a:focus {\\n  text-decoration: underline;\\n}\\n\\n.DropdownMenu {\\n  background-color: #fff;\\n  border: 1px solid #f5f5f5;\\n  border-radius: 4px;\\n  box-shadow: 0 8px 18px 2px rgba(0, 0, 0, 0.2);\\n  padding: 15px 20px;\\n  top: 100%;\\n}\\n\\n.ButtonDropdown.open .ButtonDropdown_button.Button {\\n  background-color: #fff;\\n  border: 1px solid #56d3c2;\\n  box-shadow: none;\\n}\\n\\n.ButtonDropdown.open .ButtonDropdown_button.Button .ButtonDropdown_icon {\\n  background-color: transparent;\\n}\\n\\n.open > .DropdownMenu {\\n  min-width: 100%;\\n}\\n\\n.ButtonDropdown.open .ButtonDropdown_button.Button .ButtonDropdown_icon .fa {\\n  color: #009884;\\n}\\n\\n.ButtonDropdown_button.Button {\\n  padding-left: 20px;\\n  padding-right: 0;\\n}\\n\\n.ButtonDropdown_icon {\\n  background-color: transparent;\\n  height: 42px;\\n  width: 42px;\\n}\\n\\n.ButtonDropdown_text {\\n  color: #00bfa5;\\n  font-weight: bold;\\n}\\n\\n.phone .ButtonDropdown_icon,\\n.tablet .ButtonDropdown_icon {\\n  height: 35px;\\n}\\n\\n.ButtonDropdown_button.Button:hover .ButtonDropdown_icon {\\n  background-color: transparent;\\n  transition: all 100ms ease;\\n}\\n\\n.IconDropdown_button.Button {\\n  padding-right: 0;\\n}\\n\\n.IconDropdown_button.Button .IconDown {\\n  background-color: transparent;\\n  height: 29px;\\n  margin-left: 10px;\\n  width: 30px;\\n}\\n\\n.phone .IconDropdown_button.Button .IconDown,\\n.tablet .IconDropdown_button.Button .IconDown {\\n  height: 35px;\\n}\\n\\n.IconDropdown_button.Button:hover .IconDown {\\n  background-color: transparent;\\n  transition: all 100ms ease;\\n}\\n\\n.IconDropdown.open .IconDropdown_button.Button {\\n  background-color: #f5f5f5;\\n  box-shadow: inset 0 2px 4px 0 rgba(18, 20, 20, 0.2);\\n}\\n\\n.IconDropdown.open .IconDropdown_button.Button .IconDown {\\n  background-color: transparent;\\n}\\n\\n.DropdownMenu .PH > a:hover {\\n  background-color: transparent;\\n}\\n\\n/* Dropdown: InlineDropdown **************************/\\n.InlineDropdown {\\n  background: transparent;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 0 1px 1px 1px;\\n  height: 42px;\\n  line-height: 42px;\\n  padding: 0 10px;\\n  position: relative;\\n  width: 140px;\\n}\\n\\n.InlineDropdown_icon {\\n  padding-left: 22px;\\n}\\n\\n.InlineDropdown_icon .fa {\\n  font-family: Sapphire-Icon-Font;\\n}\\n\\n.InlineDropdown_icon .fa-caret-down:before {\\n  color: #d6d6d6;\\n  content: \\\"\\\\e611\\\";\\n}\\n\\n.InlineDropdown.open {\\n  border: 1px solid #00bfa5;\\n}\\n\\n.InlineDropdown.open span {\\n  animation: myrotate 2s linear;\\n}\\n\\n@keyframes myrotate {\\n  100% {\\n    transform: rotate(180deg);\\n  }\\n}\\n/* SILK Patterns > FileUpload */\\n.FileUpload {\\n  background-color: transparent;\\n  border: none;\\n  padding: 0;\\n}\\n\\n.FileUpload_Label {\\n  padding: 5px 10px 0;\\n}\\n\\n/* SILK Patterns > InputWithIcons */\\n.InputWithIcons.Right .InputIcon {\\n  border-bottom-right-radius: 1px;\\n  border-top-right-radius: 1px;\\n}\\n\\n.InputWithIcons .InputIcon {\\n  border-bottom-left-radius: 1px;\\n  border-top-left-radius: 1px;\\n}\\n\\n/* SILK Patterns > RangeSlider */\\n.SliderRange .ui-slider-range {\\n  background-color: #00bfa5;\\n  border-radius: 16px;\\n  box-shadow: none;\\n  height: 16px;\\n}\\n\\n.SliderRange {\\n  background-color: #dadbde;\\n  border: none;\\n  border-radius: 16px;\\n  box-shadow: none;\\n  height: 16px;\\n}\\n\\n.SliderRange .ui-slider-handle,\\n.phone .SliderRange .ui-slider-handle,\\n.tablet .SliderRange .ui-slider-handle {\\n  background: none;\\n  background-color: #fff;\\n  border-radius: 30px;\\n  box-shadow: 0 1px 3px rgba(107, 107, 107, 0.3);\\n  height: 30px;\\n  top: -6px;\\n  width: 30px;\\n}\\n\\n.SliderRange .ui-slider-handle:before,\\n.phone .SliderRange .ui-slider-handle:before,\\n.tablet .SliderRange .ui-slider-handle:before {\\n  height: 12px;\\n  left: 9px;\\n  margin-left: 0;\\n  top: 8px;\\n}\\n\\n.SliderRange .ui-slider-handle:after,\\n.phone .SliderRange .ui-slider-handle:after,\\n.tablet .SliderRange .ui-slider-handle:after {\\n  height: 12px;\\n  left: 13px;\\n  top: 8px;\\n  width: 2px;\\n}\\n\\n.SliderRange .ui-slider-handle:active {\\n  box-shadow: none;\\n}\\n\\n/* SILK Patterns > Search */\\n/* SILK Patterns > Select2 */\\n.select2-container .select2-choice {\\n  background-clip: padding-box;\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 1px;\\n  color: #444;\\n  display: block;\\n  height: 26px;\\n  line-height: 26px;\\n  overflow: hidden;\\n  padding: 0 0 0 8px;\\n  position: relative;\\n  text-decoration: none;\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  user-select: none;\\n  white-space: nowrap;\\n}\\n\\n.select2-container .select2-choice > .select2-chosen {\\n  display: block;\\n  float: none;\\n  margin-right: 26px;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  width: auto;\\n}\\n\\n.select2-container .select2-choice abbr {\\n  display: none;\\n}\\n\\n.select2-drop {\\n  background: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 0 0 4px 4px;\\n  border-top: 0;\\n  box-shadow: none;\\n  color: #000;\\n  margin-top: -1px;\\n  position: absolute;\\n  top: 100%;\\n  width: 100%;\\n  z-index: 9999;\\n}\\n\\n.select2-drop-auto-width {\\n  border-top: 1px solid #d6d6d6;\\n  width: auto;\\n}\\n\\n.select2-container .select2-choice .select2-arrow {\\n  background: #adadad;\\n  background-clip: padding-box;\\n  border-left: 1px solid #aaa;\\n  border-radius: 0 4px 4px 0;\\n  display: inline-block;\\n  height: 100%;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 18px;\\n}\\n\\n.select2-container .select2-choice .select2-arrow b {\\n  display: none;\\n}\\n\\n.select2-container.select-hide .select2-arrow:after {\\n  color: #333;\\n  content: \\\"\\\\e610\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 10px;\\n  top: -5px;\\n}\\n\\n.select2-container.select-hide.select2-dropdown-open .select2-arrow:after {\\n  position: absolute;\\n  right: 8px;\\n  top: 5px;\\n}\\n\\n.select2-dropdown-open .select2-arrow {\\n  transform: rotate(180deg);\\n}\\n\\n.select2-container a {\\n  text-decoration: none;\\n}\\n\\n.select2-search {\\n  display: inline-block;\\n  margin: 0;\\n  min-height: 26px;\\n  padding: 4px 4px 0 4px;\\n  position: relative;\\n  white-space: nowrap;\\n  width: 100%;\\n  z-index: 10000;\\n}\\n\\n.select2-search input {\\n  width: 100%;\\n}\\n\\n.select2-container a:link:hover,\\n.select2-container a:hover {\\n  text-decoration: none;\\n}\\n\\n/* results */\\n.select2-results {\\n  margin: 4px 4px 4px 0;\\n  max-height: 200px;\\n  overflow-y: auto;\\n  padding: 0 0 0 4px;\\n}\\n\\n.select2-results ul.select2-result-sub {\\n  margin: 0;\\n  padding-left: 0;\\n}\\n\\n.select2-results .select2-result-label {\\n  cursor: pointer;\\n  margin: 0;\\n  min-height: 1em;\\n  padding: 10px 10px 12px;\\n}\\n\\n.select2-offscreen,\\n.select2-offscreen:focus {\\n  border: 0 !important;\\n  clip: rect(0 0 0 0) !important;\\n  height: 1px !important;\\n  left: 0 !important;\\n  margin: 0 !important;\\n  outline: 0 !important;\\n  overflow: hidden !important;\\n  padding: 0 !important;\\n  position: absolute !important;\\n  width: 1px !important;\\n}\\n\\n.select2-hidden-accessible {\\n  /* display: none;*/\\n}\\n\\n.select2-measure-scrollbar {\\n  height: 100px;\\n  left: -10000px;\\n  overflow: scroll;\\n  position: absolute;\\n  top: -10000px;\\n  width: 100px;\\n}\\n\\n.select2-container .select2-choice .select2-arrow,\\n.select2-container .select2-choice div {\\n  border-left: 0;\\n  width: 30px;\\n}\\n\\n.select2-search {\\n  border: none;\\n  height: 42px;\\n  padding: 0;\\n}\\n\\n.select2-results {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.select2-results .select2-highlighted {\\n  background-color: #8ce2d6;\\n  color: #333;\\n}\\n\\n.select2-results li {\\n  line-height: 26px;\\n}\\n\\n.select2-results .select2-result-label {\\n  height: 42px;\\n  transform: translateY(0);\\n  white-space: nowrap;\\n}\\n\\n.select2-container .select2-choice {\\n  height: 42px;\\n  line-height: 42px;\\n}\\n\\n.select2-display-none {\\n  display: none;\\n}\\n\\n.select2-container .select2-choice .select2-arrow {\\n  background-color: transparent;\\n  color: #5c5c5c;\\n  top: 13%;\\n}\\n\\n.select2-container .select2-choice > .select2-chosen {\\n  color: #333;\\n  font-size: 16px;\\n}\\n\\n.select2-dropdown-open .select2-choice {\\n  border: 2px solid #00bfa5;\\n  border-radius: 1px 1px 0 0;\\n}\\n\\n.select2-container-active .select2-choice,\\n.select2-container-active .select2-choices {\\n  box-shadow: none;\\n}\\n\\n.select2-container.Not_Valid .select2-choice {\\n  border: 2px solid #ff3e2d;\\n}\\n\\n.Not_Valid + .select2-container {\\n  border: 2px solid #ff3e2d;\\n}\\n\\n/**Dropdown**/\\n.Dropdown .select2-choice {\\n  height: 42px;\\n  min-width: 140px;\\n  padding-left: 10px;\\n}\\n\\n.Dropdown a.select2-choice:hover {\\n  text-decoration: none;\\n}\\n\\n.select2-container.select-hide.Dropdown b {\\n  display: none;\\n}\\n\\n.select2-container.select-hide.Dropdown .select2-arrow:after {\\n  color: #333;\\n  content: \\\"\\\\e610\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 10px;\\n  top: -5px;\\n}\\n\\n.select2-container.select-hide.Dropdown.select2-dropdown-open .select2-arrow:after {\\n  position: absolute;\\n  right: 8px;\\n  top: 5px;\\n}\\n\\n.Dropdown.select2-dropdown-open .select2-arrow {\\n  transform: rotate(180deg);\\n}\\n\\n.Select2Generic .Dropdown .select2-search {\\n  display: none;\\n}\\n\\n.Dropdown {\\n  border-radius: 0 1px 1px 1px;\\n  box-shadow: none;\\n  margin-top: 0.1px;\\n}\\n\\n.Dropdown .select2-results {\\n  color: #333;\\n  font-size: 16px;\\n}\\n\\n.Dropdown .select2-results .select2-result-label {\\n  line-height: 24px;\\n  padding: 9px 10px;\\n}\\n\\n.Dropdown .select2-results li:hover {\\n  background: #f5f5f5;\\n}\\n\\n.Dropdown,\\n.Dropdown:focus {\\n  background-color: #fff;\\n  border: 2px solid #00bfa5;\\n  border-radius: 1px 1px 0 0;\\n}\\n\\n/** Select2 **/\\n.Select2 .select2-choice {\\n  height: 42px;\\n  min-width: 140px;\\n}\\n\\n.select2-container.select-hide.Select2 .select2-arrow:after {\\n  color: #333;\\n  content: \\\"\\\\e610\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 10px;\\n  top: -5px;\\n}\\n\\n.select2-container.select-hide.Select2.select2-dropdown-open .select2-arrow:after {\\n  position: absolute;\\n  right: 8px;\\n  top: 5px;\\n}\\n\\n.Select2 a.select2-choice:hover {\\n  text-decoration: none;\\n}\\n\\n.select2-container.select-hide.Select2 b {\\n  display: none;\\n}\\n\\n.Select2.select2-dropdown-open .select2-arrow {\\n  transform: rotate(180deg);\\n}\\n\\n.Select2.select2-with-searchbox.select2-drop-active .select2-search:after {\\n  color: #adadad;\\n  content: \\\"\\\\e690\\\";\\n  font-family: Sapphire-Icon-Font;\\n  left: 10px;\\n  position: absolute;\\n  top: 10px;\\n  transform: scale(-1, 1);\\n}\\n\\n.select2-search input {\\n  background: none;\\n  border: none;\\n  border-bottom: 1px solid #ccc;\\n  border-top: 1px solid #00bfa5;\\n  padding-left: 30px;\\n}\\n\\n.Select2 .select2-results li:hover {\\n  background: #f5f5f5;\\n}\\n\\n/** Filters **/\\n.Filters .select2-choice {\\n  background-color: transparent;\\n  border: none;\\n  height: 42px;\\n}\\n\\na.select2-choice.Filters {\\n  background-color: transparent;\\n  border: 0;\\n  box-shadow: none;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 24px;\\n}\\n\\n.select2-drop.select2-display-none.select2-with-searchbox.Filters.select2-drop-active {\\n  box-shadow: none;\\n  min-width: 120px !important;\\n  width: auto !important;\\n}\\n\\n.select2-container.select-hide.Filters .select2-arrow:after {\\n  color: #333;\\n  content: \\\"\\\\e69e\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 0;\\n  top: -5px;\\n  transform: rotate(90deg);\\n}\\n\\n.select2-container.select-hide.Filters.select2-dropdown-open .select2-arrow:after {\\n  color: #333;\\n  position: absolute;\\n  right: 18px;\\n  top: 5px;\\n}\\n\\n.select2-container.select-hide.Filters .select2-arrow {\\n  background-color: transparent;\\n}\\n\\n.Filters.select2-dropdown-open .select2-arrow {\\n  background-color: transparent;\\n  transform: rotate(180deg);\\n}\\n\\n.select2-container.select-hide.Filters b {\\n  display: none;\\n}\\n\\n.Filters a.select2-choice:hover {\\n  text-decoration: none;\\n}\\n\\n.Filters .select2-search input {\\n  border-top: 1px solid #d6d6d6;\\n}\\n\\n.Filters.select2-with-searchbox.select2-drop-active .select2-search:after {\\n  color: #adadad;\\n  content: \\\"\\\\e690\\\";\\n  font-family: Sapphire-Icon-Font;\\n  left: 10px;\\n  position: absolute;\\n  top: 10px;\\n  transform: scale(-1, 1);\\n}\\n\\n.Filters .select2-results li:hover {\\n  background: #f5f5f5;\\n}\\n\\n.Filters .select2-container.select2-choice.select2-arrow {\\n  right: 8px;\\n}\\n\\n/* Select2 v. 4.0.6 */\\n.select2-container--default .select2-selection--single .select2-selection__rendered {\\n  line-height: 30px;\\n}\\n\\nspan.select2-selection.select2-selection--single.Select2Ajax,\\nspan.select2-selection.select2-selection--single.select-hide.Select2 {\\n  background-color: #fff;\\n  border-radius: 1px 1px 0 0;\\n  height: 42px;\\n  line-height: 42px;\\n  padding: 0 0 0 8px;\\n}\\n\\nspan.select2-selection__arrow:after {\\n  color: #333;\\n  content: \\\"\\\\e610\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  /* right: 8px;\\n   top: 8px; */\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__arrow b {\\n  display: none;\\n}\\n\\n.select2-container--open .select2-selection__arrow:after {\\n  top: 10px;\\n  transform: rotate(180deg);\\n}\\n\\n.select2-results__option.select2-results__option--highlighted {\\n  background-color: #8ce2d6;\\n  color: #333;\\n}\\n\\n.select2-container--default .select2-search--dropdown .select2-search__field {\\n  background: none;\\n  border: none;\\n  border-bottom: 1px solid #ccc;\\n  border-top: 1px solid #d6d6d6;\\n  padding-left: 30px !important;\\n}\\n\\n.select2-container--default .select2-search--dropdown:after {\\n  color: #adadad;\\n  content: \\\"\\\\e690\\\";\\n  font-family: Sapphire-Icon-Font;\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n  transform: scale(-1, 1);\\n}\\n\\n.select2-container--default .Filters.select2-selection--single {\\n  background-color: transparent;\\n  border: none;\\n  height: 36px;\\n  line-height: 36px;\\n}\\n\\n.select2-container--open .Filters.select2-selection--single .select2-selection__arrow:after {\\n  transform: rotate(270deg);\\n}\\n\\n.Filters.select2-selection--single span.select2-selection__arrow:after {\\n  color: #333;\\n  content: \\\"\\\\e69e\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  transform: rotate(90deg);\\n}\\n\\n.select2-dropdown.Dropdown .select2-search__field,\\n.select2-dropdown.Dropdown .select2-search.select2-search--dropdown {\\n  display: none;\\n}\\n\\n.select2-container--default .select2-selection--single.Dropdown {\\n  background-color: #fff;\\n  border-radius: 1px 1px 0 0;\\n  font-size: 16px;\\n  height: 42px;\\n  line-height: 42px;\\n  padding: 0 0 0 8px;\\n}\\n\\n/* Fix Select 2 width */\\n[class*=ThemeGrid_Width].select2-selection--single,\\n[class*=ThemeGrid_Width].select2-selection--multiple {\\n  width: 100%;\\n}\\n\\n/* Fix Select 2 margin */\\n.ThemeGrid_MarginGutter.select2-selection--single,\\n.ThemeGrid_MarginGutter.select2-selection--multiple {\\n  margin-left: 0;\\n}\\n\\n/* Copies Outsystems invalid combo behaviour */\\nspan.select2-container.Not_Valid,\\nspan.select2-selection--multiple.Not_Valid,\\nspan.select2-selection--single.Not_Valid {\\n  border: 2px solid #00bfa5;\\n}\\n\\nspan.select2-selection--multiple:focus,\\nspan.select2-selection--single:focus,\\n.select2-container--open span.select2-selection--single,\\n.select2-container--open span.select2-selection--multiple {\\n  border: 1px solid #aaa;\\n}\\n\\n.select2-container {\\n  box-sizing: border-box;\\n  display: inline-block;\\n  margin: 0;\\n  position: relative;\\n  vertical-align: middle;\\n  z-index: 1;\\n  /*2*/\\n  /*3*/\\n}\\n\\n.layed .select2-container {\\n  box-sizing: border-box;\\n  display: inline-block;\\n  margin: 0;\\n  position: relative;\\n  vertical-align: middle;\\n  z-index: 500;\\n}\\n\\n.select2-container .select2-selection--single {\\n  box-sizing: border-box;\\n  cursor: pointer;\\n  display: block;\\n  height: 28px;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n       user-select: none;\\n}\\n\\n.select2-container .select2-selection--single .select2-selection__rendered {\\n  display: block;\\n  overflow: hidden;\\n  padding-left: 8px;\\n  padding-right: 20px;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n.select2-container[dir=rtl] .select2-selection--single .select2-selection__rendered {\\n  padding-left: 20px;\\n  padding-right: 8px;\\n}\\n\\n.select2-container .select2-search--inline .select2-search__field {\\n  box-sizing: border-box;\\n  font-size: 100%;\\n}\\n\\n.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {\\n  -webkit-appearance: none;\\n}\\n\\n.select2-dropdown {\\n  background-color: white;\\n  background-image: none;\\n  border: 1px solid #aaa;\\n  border-radius: 4px;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n  box-sizing: border-box;\\n  display: block;\\n  left: -100000px;\\n  position: absolute;\\n  width: 100%;\\n  z-index: 1051;\\n}\\n\\n.select2-results {\\n  display: block;\\n}\\n\\n.select2-results__options {\\n  list-style: none;\\n  margin: 0;\\n  max-height: 200px;\\n  overflow-y: auto;\\n  padding: 0;\\n}\\n\\n.select2-results__option {\\n  padding: 6px;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n       user-select: none;\\n}\\n\\n.select2-results__option[aria-selected] {\\n  cursor: pointer;\\n}\\n\\n.select2-container--open .select2-dropdown {\\n  left: 0;\\n}\\n\\n.select2-container--open .select2-dropdown--above {\\n  border-bottom: none;\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n\\n.select2-search--dropdown {\\n  display: block;\\n}\\n\\n.select2-search--dropdown .select2-search__field {\\n  box-sizing: border-box;\\n  padding: 4px;\\n  width: 100%;\\n}\\n\\n.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {\\n  -webkit-appearance: none;\\n}\\n\\n.select2-search--dropdown.select2-search--hide {\\n  display: none;\\n}\\n\\n.select2-close-mask {\\n  background-color: #fff;\\n  border: 0;\\n  display: block;\\n  filter: alpha(opacity=0);\\n  height: auto;\\n  left: 0;\\n  margin: 0;\\n  min-height: 100%;\\n  min-width: 100%;\\n  opacity: 0;\\n  padding: 0;\\n  position: fixed;\\n  top: 0;\\n  width: auto;\\n  z-index: 99;\\n}\\n\\n.select2-hidden-accessible {\\n  border: 0;\\n  clip: rect(0 0 0 0);\\n  height: 1px;\\n  margin: -1px;\\n  overflow: hidden;\\n  padding: 0;\\n  position: absolute;\\n  width: 1px;\\n}\\n\\n.select2-container--default .select2-selection--single {\\n  background-color: #fff;\\n  border: 1px solid #aaa;\\n  border-radius: 4px;\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__rendered {\\n  color: #444;\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__clear {\\n  cursor: pointer;\\n  float: right;\\n  font-weight: bold;\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__placeholder {\\n  color: #999;\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__arrow {\\n  height: 30px;\\n  position: absolute;\\n  right: 1px;\\n  top: 1px;\\n  width: 20px;\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__arrow b {\\n  border-color: #888 transparent transparent transparent;\\n  border-style: solid;\\n  border-width: 5px 4px 0 4px;\\n  height: 0;\\n  left: 50%;\\n  margin-left: -4px;\\n  margin-top: -2px;\\n  position: absolute;\\n  top: 50%;\\n  width: 0;\\n}\\n\\n.select2-container--default[dir=rtl] .select2-selection--single .select2-selection__clear {\\n  float: left;\\n}\\n\\n.select2-container--default[dir=rtl] .select2-selection--single .select2-selection__arrow {\\n  left: 1px;\\n  right: auto;\\n}\\n\\n.select2-container--default.select2-container--disabled .select2-selection--single {\\n  background-color: #eee;\\n  cursor: default;\\n}\\n\\n.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {\\n  display: none;\\n}\\n\\n.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {\\n  border-color: transparent transparent #888 transparent;\\n  border-width: 0 4px 5px 4px;\\n}\\n\\n.select2-container--default.select2-container--open.select2-container--above .select2-selection--single {\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n\\n.select2-selection__choice__remove {\\n  color: #000;\\n  cursor: pointer;\\n  display: inline-block;\\n  float: right;\\n  font-size: 22px;\\n  font-weight: normal;\\n  margin-left: 11px;\\n  margin-right: 0;\\n  margin-top: -8px;\\n}\\n\\n.select2-result {\\n  border-radius: 10px;\\n  box-shadow: 0 1px 9px 4px rgba(0, 0, 0, 0.25);\\n}\\n\\n.select2-results li {\\n  background-image: none;\\n  border-radius: 0;\\n  box-shadow: none;\\n  display: list-item;\\n  list-style: none;\\n}\\n\\n.select2-container--open span.select2-selection--multiple.SelectTagsDropDown {\\n  border: 1px solid #199da5;\\n}\\n\\n.selectTagLayer.open {\\n  background-color: rgba(0, 0, 0, 0.25);\\n  bottom: 0;\\n  height: 100%;\\n  left: 0;\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  z-index: 200;\\n}\\n\\n.OverlayVisible .OverlayDiv {\\n  display: block;\\n  filter: alpha(opacity=45);\\n  opacity: 0.45;\\n}\\n\\n/* SILK Patterns > ToggleButton */\\n.ToggleButton {\\n  background-color: transparent;\\n  border: 0;\\n  height: auto;\\n  outline: 0;\\n  transition: none;\\n  width: auto;\\n}\\n\\n.ToggleButton.changed {\\n  background-color: transparent;\\n}\\n\\n.ToggleButton_label:after {\\n  background-color: #00bfa5;\\n  border-radius: 20px;\\n  box-shadow: none;\\n  right: 27px;\\n  top: 5px;\\n}\\n\\n.ToggleButton_label.changed:after {\\n  border-radius: 20px;\\n  box-shadow: none;\\n  left: 27px;\\n  top: 5px;\\n}\\n\\n.ToggleButton_label {\\n  background-color: #fff;\\n  border: 1px solid #ccc;\\n  border-radius: 100px;\\n}\\n\\n.ToggleButton_label.changed {\\n  background-color: #00bfa5;\\n}\\n\\n/*ToggleControlItem*/\\n.ToggleControl {\\n  border: 1px solid #c9cdce;\\n  border: none;\\n  border-radius: 4px;\\n}\\n\\n.ToggleControlItem {\\n  border: 0;\\n  color: #11455d;\\n  display: inline-block;\\n  height: 36px;\\n  line-height: 18px;\\n  margin: 10px 2px;\\n  min-height: 36px;\\n  overflow: hidden;\\n  position: relative;\\n  vertical-align: top;\\n}\\n\\n.ToggleControlItem input {\\n  left: -20px;\\n  margin: 0 5px 0 0;\\n  opacity: 1;\\n  padding: 0;\\n  position: absolute;\\n}\\n\\n.ToggleControlItem label {\\n  border: 1px solid #56d3c2;\\n  border-radius: 4px;\\n  color: #0d1d22;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-size: 14px;\\n  font-weight: 400;\\n  height: 100%;\\n  line-height: 34px;\\n  padding: 0px 30px 0 30px;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.ToggleControlItem label:hover,\\n.ToggleControlItem label:focus {\\n  background-color: #e6f3f5;\\n  border-radius: 2px;\\n}\\n\\n.ToggleControlItem > input[type=radio]:checked ~ label,\\n.ToggleControlItem > input[type=checkbox]:checked ~ label {\\n  background: #d8e6ec;\\n  border-radius: 2px;\\n}\\n\\n.ToggleControlItem > input:disabled ~ label,\\n.ToggleControlItem > input[disabled] ~ label,\\n.ToggleControlItem > input[readonly] ~ label {\\n  background: #e9e9e9;\\n  color: #73929f;\\n  cursor: default;\\n}\\n\\n.ToggleControlItem label:hover {\\n  background: none;\\n  background-color: #def8f5;\\n  border: 1px solid #08a5ae;\\n  border-radius: 4px;\\n}\\n\\n.ToggleControlItem input[type=radio],\\n.ToggleControlItem input[type=radio]:hover {\\n  background-color: transparent;\\n  box-shadow: none;\\n  height: 16px;\\n  left: 6px;\\n  margin: 0;\\n  position: absolute;\\n  top: 9px;\\n  vertical-align: middle;\\n  width: 16px;\\n  z-index: 1;\\n  /* padding-right: 10px; */\\n}\\n\\n.ToggleControlItem input[type=radio]:before {\\n  background-color: #00bfa5;\\n  border-color: #00bfa5;\\n  border-radius: 50%;\\n  border-style: solid;\\n  border-width: 1px;\\n  content: \\\" \\\";\\n  display: block;\\n  height: 14px;\\n  width: 14px;\\n}\\n\\n.ToggleControlItem input[type=radio]:after {\\n  background-color: white;\\n  border: 2px solid transparent;\\n  border-radius: 8px;\\n  content: \\\" \\\";\\n  display: table;\\n  height: 2px;\\n  left: 5px;\\n  opacity: 0;\\n  position: absolute;\\n  top: 5px;\\n  width: 2px;\\n}\\n\\n.ToggleControlItem input[type=radio]:checked:after {\\n  opacity: 1;\\n}\\n\\n.ToggleControlItem input[type=radio]:checked ~ label {\\n  background: none;\\n  background-color: white;\\n  border: 1px solid #00bfa5;\\n  border-radius: 4px;\\n}\\n\\n.ToggleControlItem input[type=radio]:not(:checked):before {\\n  background-color: #fff;\\n  border-color: #d6d6d6;\\n}\\n\\n.ToggleControlItem input[type=radio]:hover:before {\\n  border-color: #5c5c5c;\\n}\\n\\n.ToggleControlItem :not(:checked) {\\n  border-color: #d6d6d6;\\n}\\n\\n/*AR*/\\n.FA .ToggleControlItem input,\\n.AR .ToggleControlItem input {\\n  left: auto;\\n  right: -20px;\\n}\\n\\n.FA .ToggleControlItem input,\\n.AR .ToggleControlItem input {\\n  left: auto;\\n  right: -20px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 7.3 SILK Patterns > Data ***********************************/\\n/*------------------------------------------------------------*/\\n/* SILK Patterns > Badge */\\n.Badge {\\n  border-radius: 0;\\n  padding: 1px 0;\\n}\\n\\n/* SILK Patterns > Counter */\\n.Counter {\\n  background-color: #fff;\\n  border-bottom: solid 4px #fff;\\n}\\n\\n.Counter_label {\\n  color: #949fa3;\\n}\\n\\n.Counter_number {\\n  color: #384142;\\n  font-weight: bold;\\n}\\n\\n/* SILK Patterns > IconBadge */\\n.IconBadge_number {\\n  border: 0;\\n  border-radius: 0;\\n  position: absolute;\\n  text-shadow: none;\\n  top: -6px;\\n}\\n\\n/* SILK Patterns > ProgressBar */\\n.Progress {\\n  background-color: #dadbde;\\n  border-radius: 40px;\\n  box-shadow: none;\\n}\\n\\n.Progress_bar {\\n  border-radius: 40px;\\n}\\n\\n/* SILK Patterns > Tile */\\n.Tile {\\n  background-color: #fff;\\n  border: 1px solid #e9e9e9 !important;\\n  border-radius: 4px;\\n  color: #949fa3;\\n  max-width: 300px;\\n}\\n\\n.TileIcon_icon,\\n.TileNumber_number,\\n.TileIconText_icon {\\n  color: #384142;\\n}\\n\\n.Tile.Small {\\n  line-height: 35px;\\n  min-height: 110px;\\n}\\n\\n.Tile.Medium {\\n  line-height: 35px;\\n}\\n\\n.Tile.Large {\\n  line-height: 50px;\\n}\\n\\n/* Tile: InfoTooltip IF Small, Medium or Large **************************/\\n.Tile.Small .InfoTooltip {\\n  font-size: 12px;\\n  right: 15px;\\n  top: 0;\\n}\\n\\n.Tile.Medium .InfoTooltip {\\n  font-size: 14px;\\n  right: 6px;\\n  top: 0;\\n}\\n\\n.Tile.Large .InfoTooltip {\\n  font-size: 14px;\\n  right: 5px;\\n  top: 10px;\\n}\\n\\n/* Tile: TileIcon **************************/\\n.Tile.TileIcon {\\n  padding: 20px 0 10px;\\n}\\n\\n.Tile .fa-fw:before {\\n  content: \\\"\\\\e625\\\";\\n  font-family: Sapphire-Icon-Font;\\n}\\n\\n.TileIcon_icon {\\n  display: table-cell;\\n  font-size: 48px;\\n  vertical-align: middle;\\n}\\n\\n.TileIcon_text {\\n  display: table-cell;\\n  font-size: 16px;\\n  vertical-align: middle;\\n}\\n\\n.Tile.Small .InfoTooltip {\\n  margin-right: -9px;\\n  top: -2px;\\n}\\n\\n.Tile.Medium .InfoTooltip {\\n  margin-right: 0;\\n  top: -2px;\\n}\\n\\n.Tile.Large .InfoTooltip {\\n  margin-right: 0;\\n  top: -10px;\\n}\\n\\n.Tile .InfoTooltip:hover {\\n  color: #333;\\n}\\n\\n/* TileIcon IF Small, Medium or Large **************************/\\n.Tile.Small .TileIcon_icon,\\n.Tile.Medium .TileIcon_icon,\\n.Tile.Large .TileIcon_icon {\\n  font-size: 30px;\\n}\\n\\n.Tile.Medium .TileIcon_text,\\n.Tile.Large .TileIcon_text,\\n.Tile.Small .TileIcon_text {\\n  font-size: 16px;\\n}\\n\\n/* Tile: TileIconText **************************/\\n.TileIconText_icon {\\n  display: table-cell;\\n  font-size: 60px;\\n  vertical-align: middle;\\n  width: 120px;\\n}\\n\\n.TileIconText_right {\\n  display: table-cell;\\n  font-size: 16px;\\n  padding-right: 20px;\\n  vertical-align: middle;\\n}\\n\\n/* Tile: TileIconText_icon IF Small, Medium or Large **************************/\\n.Tile.Small .TileIconText_icon,\\n.Tile.Medium .TileIconText_icon,\\n.Tile.Large .TileIconText_icon {\\n  font-size: 36px;\\n}\\n\\n.Tile.Small .TileIconText_right,\\n.Tile.Medium .TileIconText_right,\\n.Tile.Large .TileIconText_right {\\n  font-size: 16px;\\n}\\n\\n/* Tile vertical alignment: Medium and Large */\\n.Tile.Medium .TileNumber_number,\\n.Tile.Medium .TileNumber_text,\\n.Tile.Large .TileNumber_number,\\n.Tile.Large .TileNumber_text {\\n  transform: translateY(25%);\\n}\\n\\n/* Tile: TileNumber **************************/\\n.TileNumber_number {\\n  display: table-cell;\\n  font-size: 45px;\\n  font-weight: 700;\\n  vertical-align: bottom;\\n}\\n\\n.TileNumber_text {\\n  display: table-cell;\\n  vertical-align: top;\\n}\\n\\n/* Tile: TileNumber IF Small **************************/\\n.Small .TileNumber_number {\\n  color: #333;\\n  font-size: 36px;\\n  font-weight: 600;\\n}\\n\\n.Tile.Small .TileNumber_text {\\n  color: #858585;\\n  font-size: 16px;\\n  font-weight: 600;\\n}\\n\\n/* SILK Patterns > UserInitials */\\n.UserInitials {\\n  background-color: transparent;\\n  border: solid 2px transparent;\\n  box-sizing: content-box;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 7.4 SILK Patterns > Layout *********************************/\\n/*------------------------------------------------------------*/\\n/* SILK Patterns > Layout Popup */\\n.MainPopup {\\n  background-color: #fff;\\n}\\n\\n.MainPopup .Button.ThemeGrid_MarginGutter {\\n  margin-left: 10px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 7.5 SILK Patterns > Mobile *********************************/\\n/*------------------------------------------------------------*/\\n/* SILK Patterns > BottomMenu */\\n.BottomMenu_wrapper {\\n  background-color: transparent;\\n}\\n\\n.BottomMenu_item.active {\\n  background-color: #00bfa5;\\n}\\n\\n.BottomMenu_item.active span.fa {\\n  color: #fff;\\n}\\n\\n.BottomMenu_wrapper a span.fa,\\n.BottomMenu_item span.fa {\\n  color: #bdc5c7;\\n}\\n\\n/* SILK Patterns > ListItem */\\n.ListItem {\\n  background-color: #fff;\\n  border: 1px solid #dadbde;\\n  padding-left: 15px;\\n}\\n\\na .ListItem:after {\\n  color: #949fa3;\\n}\\n\\n/* SILK Patterns > ListItemGroup */\\n.ListItemGroup .ListItem {\\n  border: 0;\\n  border-bottom: solid 1px #dadbde;\\n}\\n\\n/* SILK Patterns > ListItemToggle */\\n/*------------------------------------------------------------*/\\n/* 7.6 SILK Patterns > Navigation *****************************/\\n/*------------------------------------------------------------*/\\n/* SILK Patterns > Breadbrumbs */\\n.Breadcrumbs {\\n  font-size: 1em;\\n}\\n\\n.Breadcrumbs a,\\n.desktop .Breadcrumbs a:hover,\\n.desktop .Breadcrumbs a:link:hover {\\n  text-decoration: none;\\n}\\n\\n.Breadcrumbs div span {\\n  box-sizing: border-box;\\n  color: #333;\\n  height: 12px;\\n}\\n\\n.Breadcrumbs {\\n  margin-bottom: 0;\\n}\\n\\n.Breadcrumbs span {\\n  margin: 0 2px 0 6px;\\n}\\n\\n.Breadcrumbs > div:first-child .Heading2 {\\n  color: #009884;\\n}\\n\\n.Breadcrumbs a:visited {\\n  font-size: 20px;\\n  font-weight: 700;\\n}\\n\\n.Breadcrumbs .fa-angle-right:before {\\n  color: #333;\\n  height: 6px;\\n}\\n\\n.BreadActionsWrapper .MainContent_actions,\\n.BreadActionsWrapper .MainContent_BreadCrumbs {\\n  vertical-align: middle;\\n}\\n\\n/* SILK Patterns > NavigationBar */\\n.NavigationBar {\\n  border-bottom: 1px solid #d6d6d6;\\n}\\n\\n.NavigationBar a,\\n.NavigationBar a:link,\\n.NavigationBar a:visited {\\n  border-bottom: transparent;\\n  color: #999;\\n  display: inline-block;\\n  margin-bottom: -1px;\\n  margin-right: 26px;\\n  padding: 20px 0 20px 0;\\n  position: relative;\\n}\\n\\n.desktop .NavigationBar a,\\n.desktop .NavigationBar a:link,\\n.desktop .NavigationBar a:visited {\\n  color: #5c5c5c;\\n  font-size: 16px;\\n}\\n\\n.NavigationBar a.Active:after {\\n  background-color: #00bfa5;\\n}\\n\\n.NavigationBar a.Active:not(.ie7):before,\\n.NavigationBar a.Active:not(.ie8):before {\\n  border-bottom: 3px solid #00bfa5;\\n  border-left: solid #00bfa5;\\n  border-right: solid #00bfa5;\\n  bottom: 0;\\n  left: 0;\\n  margin-left: 0;\\n  width: 96%;\\n}\\n\\n.desktop .NavigationBar a:hover:after,\\n.desktop .NavigationBar a:link:hover:after {\\n  background-color: transparent;\\n  height: 3px;\\n}\\n\\n.desktop .NavigationBar a:hover,\\n.desktop .NavigationBar a:link:hover {\\n  color: #333;\\n  font-weight: 600;\\n}\\n\\n.desktop .NavigationBar a:after {\\n  content: attr(title);\\n  display: block;\\n  font-weight: 600;\\n  overflow: hidden;\\n  visibility: hidden;\\n}\\n\\n.desktop .NavigationBar a.Active,\\n.desktop .NavigationBar a.Active:hover {\\n  color: #333;\\n  font-weight: 700;\\n  text-shadow: none;\\n}\\n\\n.NavigationBar_wrapper a:hover,\\n.NavigationBar_wrapper a:link:hover,\\n.NavigationBar_wrapper a:visited:hover {\\n  text-decoration: none;\\n}\\n\\n.phone .NavigationBar a:active,\\n.phone .NavigationBar a:link:active,\\n.tablet .NavigationBar a:active,\\n.tablet .NavigationBar a:link:active {\\n  color: #212121;\\n}\\n\\n.phone .NavigationBar a:active:after,\\n.phone .NavigationBar a:link:active:after,\\n.tablet .NavigationBar a:active:after,\\n.tablet .NavigationBar a:link:active:after {\\n  background-color: #00bfa5;\\n}\\n\\n.NavigationBar a:after,\\n.NavigationBar a:link:after {\\n  background-color: #d6d6d6;\\n  bottom: 0;\\n  content: \\\"\\\";\\n  height: 0;\\n  left: 1%;\\n  position: absolute;\\n  right: 1%;\\n  width: 100%;\\n  width: auto;\\n}\\n\\n.NavigationBar a:active:after {\\n  background-color: #00bfa5;\\n  height: 3px;\\n}\\n\\n.tablet .NavigationBar .InlineDropdown,\\n.tablet .NavigationBar .InlineDropdown.open {\\n  border: none;\\n}\\n\\n.tablet .NavigationBar .InlineDropdown.open .DropdownMenu {\\n  top: 130%;\\n}\\n\\n/* SILK Patterns > SectionIndex */\\n.SectionIndex.vertical a.active,\\n.SectionIndex.vertical a:hover {\\n  border-left-color: #009884;\\n}\\n\\n.SectionIndex a.active,\\n.SectionIndex a:hover {\\n  color: #1d1d1d;\\n  font-weight: bold;\\n  /*   line-height: 38px;*/\\n}\\n\\n/* SILK Patterns > Tabs */\\n/* SILK Patterns > Tabs */\\n.Tabs {\\n  border: 0;\\n  border-color: none;\\n}\\n\\n.Tabs_body {\\n  background-color: transparent;\\n}\\n\\n.Tabs_header,\\n.Tabs__tab {\\n  background: transparent;\\n  border: 0;\\n  color: #212121;\\n  width: auto;\\n}\\n\\n.Tabs__tab:hover {\\n  background-color: transparent;\\n  border-bottom: solid 3px #00bfa5;\\n  color: #212121;\\n  font-weight: 600;\\n  padding-bottom: 2px;\\n}\\n\\n.Tabs__tab.active {\\n  background: transparent;\\n  background-color: transparent;\\n  border-bottom: solid 3px #00bfa5;\\n  color: #384142;\\n  color: #212121;\\n  font-weight: 600;\\n}\\n\\n.Tabs__tab.active:hover {\\n  padding-bottom: 5px;\\n}\\n\\n/* SILK Patterns > Wizard */\\n.WizardParent {\\n  border: 0;\\n}\\n\\n.WizardStep a,\\n.WizardStep a:link,\\n.WizardStep a[disabled],\\n.WizardStep a[disabled]:hover {\\n  color: #79868a;\\n}\\n\\n.WizardStep:before {\\n  border-bottom-width: 19px;\\n  border-top-width: 19px;\\n}\\n\\n.WizardStep.Past a,\\n.WizardStep.Past a:link,\\n.WizardStep.Past a[disabled],\\n.WizardStep.Past a[disabled]:hover {\\n  color: #00bfa5;\\n}\\n\\n.WizardStep.Past {\\n  background-color: #ebeada;\\n}\\n\\n.WizardStep.Past:before {\\n  border-bottom-color: #ebeada;\\n  border-top-color: #ebeada;\\n}\\n\\n.WizardStep.Past:after {\\n  border-right-color: #00bfa5;\\n  border-top-color: #00bfa5;\\n}\\n\\n.WizardStep.ActiveStep {\\n  background-color: #00bfa5;\\n  color: #fff;\\n}\\n\\n.WizardStep.ActiveStep a,\\n.WizardStep.ActiveStep a:link,\\n.WizardStep.ActiveStep a[disabled],\\n.WizardStep.ActiveStep a[disabled]:hover {\\n  color: #fff;\\n}\\n\\n.WizardStep.ActiveStep:before {\\n  border-bottom-color: #00bfa5;\\n  border-top-color: #00bfa5;\\n}\\n\\n/*------------------------------------*\\\\\\n    $8. Usefull Classes\\n\\\\*------------------------------------*/\\n.VerticalAlignMiddle {\\n  vertical-align: middle !important;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 8.1 Usefull Classes > Text Classes *************************/\\n/*------------------------------------------------------------*/\\n.Title {\\n  color: #333;\\n  font-size: 27px;\\n  font-weight: bold;\\n  line-height: 32px;\\n}\\n\\n.TableHeader {\\n  color: #858585;\\n  font-size: 11px;\\n  font-weight: 600;\\n  line-height: 16px;\\n  text-transform: uppercase;\\n}\\n\\n.Heading1 {\\n  font-size: 27px;\\n  font-weight: 900;\\n  line-height: 32px;\\n}\\n\\n.Heading2 {\\n  font-size: 20px;\\n  font-weight: 900;\\n}\\n\\n.Heading3 {\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n.Heading4 {\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n.Label {\\n  background-color: transparent;\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  font-weight: normal;\\n  line-height: 22px;\\n  white-space: normal;\\n}\\n\\n.Text,\\n.Text_Note {\\n  color: #333;\\n  font-size: 16px;\\n  font-weight: normal;\\n  line-height: 18px;\\n}\\n\\n.Text_Error {\\n  color: #f44336;\\n  font-size: 11px;\\n  line-height: 16px;\\n}\\n\\n.Subtitle {\\n  color: #333;\\n  color: #333;\\n  font-size: 20px;\\n  font-weight: heavy;\\n  line-height: 24px;\\n}\\n\\n.Subtitle2 {\\n  color: #333;\\n  color: #333;\\n  font-size: 18px;\\n  font-weight: semibold;\\n  line-height: 24px;\\n}\\n\\n.Placeholder {\\n  color: #858585;\\n  font-size: 16px;\\n  font-style: italic;\\n  line-height: 24px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 8.2 Usefull Classes > Buttons ******************************/\\n/*------------------------------------------------------------*/\\n.Button,\\na.Button {\\n  background-color: #fff;\\n  border: 1px solid #00bfa5;\\n  border-radius: 100px;\\n  box-shadow: none;\\n  color: #009884;\\n  font-size: 16px;\\n  font-weight: 500;\\n  height: 42px;\\n  line-height: 40px;\\n  margin: 0 auto;\\n  margin-left: 20px;\\n  min-width: 120px;\\n  padding: 0 20px;\\n  transition: all 100ms ease;\\n}\\n\\na + .Button,\\na + a.Button {\\n  margin-left: 42px;\\n}\\n\\n.Button + .Button,\\n.Button + a.Button {\\n  margin-left: 16px;\\n}\\n\\n.ButtonGroup_button.Button + .ButtonGroup_button.Button {\\n  margin-left: 0;\\n}\\n\\ninput.Button {\\n  border-radius: 100px;\\n  /*when input is disable*/\\n}\\n\\n.desktop .Button:hover,\\n.desktop a.Button:hover {\\n  background-color: #f2fcfa;\\n  border: 1px solid #009884;\\n  border-bottom-width: 1px;\\n  box-shadow: none;\\n  text-decoration: none;\\n}\\n\\n.Button:hover:active,\\na.Button:hover:active {\\n  border-bottom-width: 1px;\\n  border-color: #006758;\\n  box-shadow: none;\\n  color: #006758;\\n}\\n\\n.Button:active,\\na.Button:active {\\n  background-color: #fff;\\n  border: 1px solid #006758;\\n  color: #006758;\\n}\\n\\n.Button:focus {\\n  border-color: #363636;\\n}\\n\\n.Button:disabled,\\n.Button.Is_Default[disabled],\\n.Button.ButtonDefault[disabled],\\n.Button.Is_Default:disabled,\\n.Button.ButtonDefault:disabled,\\n.Button.Danger[disabled],\\n.Button.Danger:disabled,\\n.Button.Success[disabled],\\n.Button.Success:disabled,\\na.Button[disabled],\\na.Button:disabled,\\na.Button.Is_Default[disabled],\\na.Button.ButtonDefault[disabled],\\na.Button.Is_Default:disabled,\\na.Button.ButtonDefault:disabled,\\na.Button.Danger[disabled],\\na.Button.Danger:disabled,\\na.Button.Success[disabled],\\na.Button.Success:disabled {\\n  background-color: #d6d6d6;\\n  color: #9b9b9b;\\n}\\n\\n.Button[disabled],\\na.Button[disabled] {\\n  background-color: #fff;\\n  border: 1px solid #9b9b9b;\\n  color: #9b9b9b;\\n}\\n\\ninput.Button:focus {\\n  border-width: 1px;\\n  box-shadow: none;\\n}\\n\\n.ie8 .Button,\\n.ie8 a.Button {\\n  border-bottom-width: 1px;\\n}\\n\\ninput.Button {\\n  height: 42px;\\n  line-height: 31px;\\n}\\n\\n/* Usefull Classes > Default Action Button */\\n.Button.ButtonDefault,\\n.Button.Is_Default {\\n  background-color: #00bfa5;\\n  border-color: #00bfa5;\\n  border-radius: 100px;\\n  box-shadow: none;\\n  color: #fff;\\n  font-size: 16px;\\n}\\n\\n.Button.ButtonDefault:focus,\\n.Button.Is_Default:focus {\\n  border-color: #363636;\\n}\\n\\n.desktop .Button.ButtonDefault:hover,\\n.desktop .Button.Is_Default:hover {\\n  background-color: #009884;\\n  border-color: #009884;\\n  color: #fff;\\n}\\n\\n.Button.ButtonDefault:hover:active,\\n.Button.Is_Default:hover:active {\\n  background-color: #006758;\\n  border-color: #006758;\\n  color: #fff;\\n}\\n\\n.Button.ButtonDefault:disabled,\\n.Button.Is_Default:disabled {\\n  background-color: #d6d6d6;\\n  border-color: #d6d6d6;\\n  color: #adadad;\\n}\\n\\n/* Scaffolding buttons */\\na.ActionAdd,\\na.ActionAdd:link,\\na.ActionAdd:visited,\\na.ActionEdit,\\na.ActionEdit:link,\\na.ActionEdit:visited,\\na.ActionDelete,\\na.ActionDelete:link,\\na.ActionDelete:visited,\\na.ActionChange,\\na.ActionChange:link,\\na.ActionChange:visited {\\n  background-color: #00bfa5;\\n  border: 1px solid #00bfa5;\\n  border-bottom: 0;\\n  border-radius: 3px;\\n  box-shadow: inset 0 -2px 0 rgba(19, 24, 25, 0.2);\\n  color: #fff;\\n  display: inline-block;\\n  line-height: 30px;\\n  margin-left: 10px;\\n  min-width: 80px;\\n  padding: 0 15px;\\n  text-align: center;\\n  transition: all 100ms ease;\\n}\\n\\n.desktop a.ActionAdd:hover,\\n.desktop a.ActionAdd:hover:visited,\\n.desktop a.ActionAdd:link:hover,\\n.desktop a.ActionEdit:hover,\\n.desktop a.ActionEdit:link:hover,\\n.desktop a.ActionEdit:link:visited,\\n.desktop a.ActionDelete:hover,\\n.desktop a.ActionDelete:hover:visited,\\n.desktop a.ActionDelete:link:hover,\\n.desktop a.ActionChange:hover,\\n.desktop a.ActionChange:hover:visited,\\n.desktop a.ActionChange:link:hover {\\n  background-color: #00bfa5;\\n  border-bottom-width: 1px;\\n  border-color: #00bfa5;\\n  box-shadow: none;\\n  color: #fff;\\n}\\n\\n.desktop a.ActionAdd:hover:active,\\n.desktop a.ActionEdit:hover:active,\\n.desktop a.ActionDelete:hover:active,\\n.desktop a.ActionChange:hover:active {\\n  background-color: #00bfa5;\\n  border-color: #00bfa5;\\n  color: #fff;\\n}\\n\\n/* Usefull Classes > Other buttons */\\n.Button.Cancel {\\n  background-color: transparent;\\n  border: none;\\n  color: #5c5c5c;\\n  font-size: 16px;\\n}\\n\\n.Button.Cancel:focus {\\n  text-decoration: underline;\\n}\\n\\n.desktop .Button.Cancel:hover {\\n  background-color: transparent;\\n  border: none;\\n  color: #5c5c5c;\\n}\\n\\n.Button.Cancel:active {\\n  background-color: transparent;\\n  border: none;\\n  color: #5c5c5c;\\n}\\n\\n.Button.Cancel:hover:active {\\n  color: #5c5c5c;\\n}\\n\\n.Button.Success {\\n  background-color: #66bb6a;\\n  border-color: #66bb6a;\\n  color: #fff;\\n}\\n\\n.Button.Success:focus {\\n  border-color: #363636;\\n}\\n\\n.desktop .Button.Success:hover {\\n  background-color: #559f59;\\n  border-color: #559f59;\\n  color: #fff;\\n}\\n\\n.Button.Success:hover:active {\\n  background-color: #559f59;\\n  border-color: #559f59;\\n  color: #fff;\\n}\\n\\n.Button.Danger,\\na.ActionDelete {\\n  background-color: #ff3e2d;\\n  border-color: #ff3e2d;\\n  color: #fff;\\n}\\n\\n.Button.Danger:focus,\\na.ActionDelete:focus {\\n  border-color: #363636;\\n}\\n\\n.desktop .Button.Danger:hover {\\n  background-color: #ce461b;\\n  border-color: #ce461b;\\n  color: #fff;\\n}\\n\\n.Button.Danger:hover:active {\\n  background-color: #ce461b;\\n  border-color: #ce461b;\\n  color: #fff;\\n}\\n\\n.Button.Link {\\n  background-color: transparent;\\n  border-color: transparent;\\n  box-shadow: none;\\n  color: #009884;\\n  font-weight: 600;\\n}\\n\\n.Button.Link:focus {\\n  text-decoration: underline;\\n}\\n\\n.desktop .Button.Link:hover {\\n  background-color: transparent;\\n  border-color: transparent;\\n  color: #009884;\\n  text-decoration: underline;\\n}\\n\\n.desktop .Button.Link:hover:active {\\n  background-color: transparent;\\n  border-color: transparent;\\n  color: #006758;\\n}\\n\\na.Button.Link:active,\\n.Button.Link:active {\\n  background-color: transparent;\\n  border-color: transparent;\\n  color: #006758;\\n}\\n\\na.Button.Link:disabled,\\n.Button.Link:disabled {\\n  background-color: transparent;\\n  border-color: transparent;\\n  color: #9b9b9b;\\n}\\n\\n.Button.Small,\\n.Panel__Actions .Button,\\n.Section_Actions .Button {\\n  font-size: 14px;\\n  height: 26px;\\n  line-height: 24px;\\n  min-width: 60px;\\n  padding-left: 10px;\\n  padding-right: 10px;\\n}\\n\\n.Button.Small {\\n  height: 30px;\\n  line-height: 30px;\\n  min-width: 100px;\\n}\\n\\n.Button.Icon {\\n  min-width: 0;\\n}\\n\\n.Button.Icon span.fa {\\n  margin: 0;\\n}\\n\\n.Button.Loading:before,\\n.Button.Loading[disabled]:before,\\n.Button.Loading:disabled:before {\\n  background-size: 16px 16px;\\n  content: \\\"\\\";\\n  display: inline-block;\\n  height: 16px;\\n  margin-right: 5px;\\n  margin-top: -2px;\\n  vertical-align: middle;\\n  width: 16px;\\n}\\n\\n.Button.Small.Loading:before {\\n  margin-top: 4px;\\n}\\n\\n.Button.Loading.Icon:before {\\n  margin-right: 0;\\n}\\n\\n.Button.Loading span.fa {\\n  display: none;\\n}\\n\\n/* Pagination **************************/\\na.ListNavigation_PageNumber:link,\\nspan.ListNavigation_CurrentPageNumber,\\nspan.ListNavigation_Ellipsis {\\n  font-size: 16px;\\n  margin: 0 10px 0 10px;\\n  padding: 4px;\\n}\\n\\nspan.ListNavigation_Ellipsis {\\n  display: none;\\n}\\n\\na.ListNavigation_Previous:link:hover:before,\\na.ListNavigation_Next:link:hover:before {\\n  color: #858585;\\n}\\n\\na.ListNavigation_Previous:link,\\na.ListNavigation_Next:link {\\n  padding: 4px 12px 4px 13px;\\n  position: relative;\\n}\\n\\n/* Responsive Context **************************/\\n.phone .Button,\\n.tablet .Button,\\n.phone a.Button,\\n.tablet a.Button {\\n  height: 42px;\\n  line-height: 41px;\\n  text-decoration: none;\\n}\\n\\n.phone input.Button:focus,\\n.tablet input.Button:focus,\\n.phone input.Button,\\n.tablet input.Button {\\n  height: 37px;\\n  line-height: 37px;\\n}\\n\\n.phone .Button.Small,\\n.tablet .Button.Small {\\n  height: 30px;\\n  line-height: 28px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 8.3 Usefull Classes > Background Colors ********************/\\n/*------------------------------------------------------------*/\\n.PrimaryColor {\\n  background-color: #00bfa5;\\n}\\n\\n.Black {\\n  background-color: #333;\\n}\\n\\n.Blue {\\n  background-color: #039be5;\\n}\\n\\n.DarkBlue {\\n  background-color: #30384a;\\n}\\n\\n.DarkPlum {\\n  background-color: #970263;\\n}\\n\\n.DarkRed {\\n  background-color: #b10000;\\n}\\n\\n.Gray {\\n  background-color: #79868a;\\n}\\n\\n.Green {\\n  background-color: #7cb342;\\n}\\n\\n.LightGreen {\\n  background-color: #64be68;\\n}\\n\\n.Orange {\\n  background-color: #ff7800;\\n}\\n\\n.Plum {\\n  background-color: #c32b87;\\n}\\n\\n.Red {\\n  background-color: #ff3e2d;\\n}\\n\\n.Silver {\\n  background-color: #dadbde;\\n}\\n\\n.Turquoise {\\n  background-color: #00b0c1;\\n}\\n\\n.White {\\n  background-color: #fff;\\n}\\n\\n.Yellow {\\n  background-color: #fbc02d;\\n}\\n\\n/* Green Scale*/\\n.Green1 {\\n  background-color: #c4f0eb;\\n}\\n\\n.Green2 {\\n  background-color: #8ce2d6;\\n}\\n\\n.Green3 {\\n  background-color: #56d3c2;\\n}\\n\\n.Green4 {\\n  background-color: #21c5ae;\\n}\\n\\n.Green5 {\\n  background-color: #009884;\\n}\\n\\n.Green6 {\\n  background-color: #006758;\\n}\\n\\n.Green7 {\\n  background-color: #00433a;\\n}\\n\\n/* Grey Scale */\\n.Grey1 {\\n  background-color: #f5f5f5;\\n}\\n\\n.Grey2 {\\n  background-color: #d6d6d6;\\n}\\n\\n.Grey3 {\\n  background-color: #adadad;\\n}\\n\\n.Grey4 {\\n  background-color: #9b9b9b;\\n}\\n\\n.Grey5 {\\n  background-color: #858585;\\n}\\n\\n.Grey6 {\\n  background-color: #5c5c5c;\\n}\\n\\n/* Usefull Classes > Counter & Tile Background */\\n.Counter.Black,\\n.Tile.Black {\\n  background-color: #fff;\\n  border-bottom-color: #131819;\\n}\\n\\n.Counter.Blue,\\n.Tile.Blue {\\n  background-color: #fff;\\n  border-bottom-color: #0074c1;\\n}\\n\\n.Counter.DarkBlue,\\n.Tile.DarkBlue {\\n  background-color: #fff;\\n  border-bottom-color: #194968;\\n}\\n\\n.Counter.DarkPlum,\\n.Tile.DarkPlum {\\n  background-color: #fff;\\n  border-bottom-color: #970263;\\n}\\n\\n.Counter.DarkRed,\\n.Tile.DarkRed {\\n  background-color: #fff;\\n  border-bottom-color: #b10000;\\n}\\n\\n.Counter.Gray,\\n.Tile.Gray {\\n  background-color: #fff;\\n  border-bottom-color: #79868a;\\n}\\n\\n.Counter.Green,\\n.Tile.Green {\\n  background-color: #fff;\\n  border-bottom-color: #388e3c;\\n}\\n\\n.Counter.LightGreen,\\n.Tile.LightGreen {\\n  background-color: #fff;\\n  border-bottom-color: #64be68;\\n}\\n\\n.Counter.Orange,\\n.Tile.Orange {\\n  background-color: #fff;\\n  border-bottom-color: #da6802;\\n}\\n\\n.Counter.Plum,\\n.Tile.Plum {\\n  background-color: #fff;\\n  border-bottom-color: #c32b87;\\n}\\n\\n.Counter.Red,\\n.Tile.Red {\\n  background-color: #fff;\\n  border-bottom-color: #d01a1a;\\n}\\n\\n.Counter.Silver,\\n.Tile.Silver {\\n  background-color: #fff;\\n  border-bottom-color: #dadbde;\\n}\\n\\n.Counter.Transparent,\\n.Tile.Transparent {\\n  background-color: #fff;\\n  border-bottom-color: transparent;\\n}\\n\\n.Counter.Turquoise,\\n.Tile.Turquoise {\\n  background-color: #fff;\\n  border-bottom-color: #00b0c1;\\n}\\n\\n.Counter.White,\\n.Tile.White {\\n  background-color: #fff;\\n  border-bottom-color: #fff;\\n}\\n\\n.Counter.Yellow,\\n.Tile.Yellow {\\n  background-color: #fff;\\n  border-bottom-color: #dab702;\\n}\\n\\n/* Usefull Classes > User Initials Background */\\n.UserInitials.Black {\\n  border-color: #131819;\\n  color: #131819;\\n}\\n\\n.UserInitials.Blue {\\n  border-color: #0074c1;\\n  color: #0074c1;\\n}\\n\\n.UserInitials.DarkBlue {\\n  border-color: #194968;\\n  color: #194968;\\n}\\n\\n.UserInitials.DarkPlum {\\n  border-color: #970263;\\n  color: #970263;\\n}\\n\\n.UserInitials.DarkRed {\\n  border-color: #b10000;\\n  color: #b10000;\\n}\\n\\n.UserInitials.Gray {\\n  border-color: #79868a;\\n  color: #79868a;\\n}\\n\\n.UserInitials.Green {\\n  border-color: #388e3c;\\n  color: #388e3c;\\n}\\n\\n.UserInitials.LightGreen {\\n  border-color: #64be68;\\n  color: #64be68;\\n}\\n\\n.UserInitials.Orange {\\n  border-color: #da6802;\\n  color: #da6802;\\n}\\n\\n.UserInitials.Plum {\\n  border-color: #c32b87;\\n  color: #c32b87;\\n}\\n\\n.UserInitials.Red {\\n  border-color: #d01a1a;\\n  color: #d01a1a;\\n}\\n\\n.UserInitials.Silver {\\n  border-color: #dadbde;\\n  color: #dadbde;\\n}\\n\\n.UserInitials.Transparent {\\n  border-color: transparent;\\n  color: transparent;\\n}\\n\\n.UserInitials.Turquoise {\\n  border-color: #00b0c1;\\n  color: #00b0c1;\\n}\\n\\n.UserInitials.White {\\n  border-color: #fff;\\n  color: #fff;\\n}\\n\\n.UserInitials.Yellow {\\n  border-color: #00bfa5;\\n  color: #00bfa5;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 8.4 Usefull Classes > Text Colors **************************/\\n/*------------------------------------------------------------*/\\n.Page .Text_black {\\n  color: #333;\\n}\\n\\n.Page .Text_PrimaryColor {\\n  color: #00bfa5;\\n}\\n\\n.Page .Text_blue {\\n  color: #039be5;\\n}\\n\\n.Page .Text_darkBlue {\\n  color: #30384a;\\n}\\n\\n.Page .Text_darkPlum {\\n  color: #970263;\\n}\\n\\n.Page .Text_darkRed {\\n  color: #b10000;\\n}\\n\\n.Page .Text_gray {\\n  color: #79868a;\\n}\\n\\n.Page .Text_green {\\n  color: #7cb342;\\n}\\n\\n.Page .Text_lightGreen {\\n  color: #64be68;\\n}\\n\\n.Page .Text_orange {\\n  color: #ff7800;\\n}\\n\\n.Page .Text_plum {\\n  color: #c32b87;\\n}\\n\\n.Page .Text_red {\\n  color: #ff3e2d;\\n}\\n\\n.Page .Text_silver {\\n  color: #dadbde;\\n}\\n\\n.Page .Text_turquoise {\\n  color: #00b0c1;\\n}\\n\\n.Page .Text_white {\\n  color: #fff;\\n}\\n\\n.Page .Text_yellow {\\n  color: #fbc02d;\\n}\\n\\n/* Green Scale*/\\n.Page .Text_green1 {\\n  color: #c4f0eb;\\n}\\n\\n.Page .Text_green2 {\\n  color: #8ce2d6;\\n}\\n\\n.Page .Text_green3 {\\n  color: #56d3c2;\\n}\\n\\n.Page .Text_green4 {\\n  color: #21c5ae;\\n}\\n\\n.Page .Text_green5 {\\n  color: #009884;\\n}\\n\\n.Page .Text_green6 {\\n  color: #006758;\\n}\\n\\n.Page .Text_green7 {\\n  color: #00433a;\\n}\\n\\n/* Grey Scale */\\n.Page .Text_grey1 {\\n  color: #f5f5f5;\\n}\\n\\n.Page .Text_grey2 {\\n  color: #d6d6d6;\\n}\\n\\n.Page .Text_grey3 {\\n  color: #adadad;\\n}\\n\\n.Page .Text_grey4 {\\n  color: #9b9b9b;\\n}\\n\\n.Page .Text_grey5 {\\n  color: #858585;\\n}\\n\\n.Page .Text_grey6 {\\n  color: #5c5c5c;\\n}\\n\\n/*------------------------------------*\\\\\\n    $9. [Sapphire] Patterns\\n\\\\*------------------------------------*/\\n/* $9.1. [ExpandableExtended] */\\n.ExpandableContainer .SectionExpandable {\\n  border: none;\\n  border-radius: 4px;\\n  box-shadow: none;\\n}\\n\\n.ExpandableContainer .SectionExpandable_header {\\n  border-bottom: none;\\n  height: 68px;\\n  padding: 10px 26px;\\n  transform: scale(-1, 1);\\n}\\n\\n.ExpandableContainer .SectionExpandable_header .SectionExpandable__title {\\n  transform: scale(-1, 1);\\n}\\n\\n.ExpandableContainer .SectionExpandable.expanded .SectionExpandable_header .Heading2 {\\n  color: #333;\\n}\\n\\n.ExpandableContainer .SectionExpandable .SectionExpandable_header .ExpandableContainer_Title {\\n  font-size: 16px;\\n  font-weight: normal;\\n  line-height: 48px;\\n  margin-left: 16px;\\n  width: 50%;\\n}\\n\\n.ExpandableContainer .SectionExpandable .SectionExpandable_header .ExpandableContainer_TitleActions {\\n  font-size: 16px;\\n  transform: translateY(21%);\\n  width: 48%;\\n}\\n\\n.ExpandableContainer .SectionExpandable__icon span:before {\\n  content: \\\"\\\\e69e\\\";\\n  font-family: Sapphire-Icon-Font;\\n}\\n\\n.ExpandableContainer .SectionExpandable .SectionExpandable__icon {\\n  transform: scale(-1, -1);\\n  transition: transform 0.3s;\\n}\\n\\n.ExpandableContainer .SectionExpandable.expanded .SectionExpandable__icon {\\n  transform: rotate(-270deg);\\n}\\n\\n.ExpandableContainer .ExpandableContainer_TitleActions a.Button {\\n  float: right;\\n}\\n\\n.ExpandableContainer .SectionExpandable .SectionExpandable_content {\\n  padding: 0 26px;\\n}\\n\\n.ExpandableContainer .SectionExpandable.expanded .SectionExpandable_content {\\n  padding: 26px;\\n  padding-top: 10px;\\n}\\n\\n.ExpandableContainer.notExpandable .SectionExpandable__icon span {\\n  display: none;\\n  pointer-events: none;\\n}\\n\\n.ExpandableContainer.notExpandable .SectionExpandable,\\n.ExpandableContainer.notExpandable .SectionExpandable__icon {\\n  pointer-events: none;\\n}\\n\\n.ExpandableContainer .SectionExpandable .SectionExpandable_header .Heading2.SectionExpandable__icon span {\\n  font-size: 14px;\\n  vertical-align: middle;\\n}\\n\\n.tablet.portrait .ExpandableContainer .SectionExpandable .SectionExpandable_header .ExpandableContainer_TitleActions {\\n  width: 47%;\\n}\\n\\n/****/\\n.SectionExpandable_header .SectionExpandable__title {\\n  display: flex;\\n}\\n\\n.SectionExpandable_header .SectionExpandable__title div {\\n  white-space: nowrap;\\n}\\n\\n/*DocumentTable (Extra for ExpandableExtended)*/\\n.DocumentTableWrapper {\\n  padding: 10px 26px 16px;\\n}\\n\\n.DocumentTableContent .SectionExpandable.expanded .SectionExpandable_header,\\n.DocumentTableContent .SectionExpandable .SectionExpandable_header {\\n  border-bottom: 1px solid #d6d6d6;\\n}\\n\\n.DocumentTableContent .ExpandableContainer.expanded {\\n  border-bottom: none;\\n}\\n\\n.DocumentTableContent .ExpandableContainer_Title .Columns {\\n  display: inline;\\n  text-align: center;\\n}\\n\\n.DocumentTableContent .ExpandableContainer_Title .Column.ColFirst {\\n  text-align: left;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable .SectionExpandable_content,\\n.DocumentTableContent .ExpandableContainer .SectionExpandable.expanded .SectionExpandable_content {\\n  padding: 0;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable.expanded .ExpandableContainer .SectionExpandable_header,\\n.DocumentTableContent .ExpandableContainer .SectionExpandable.expanded .ExpandableContainer,\\n.DocumentTableContent .ExpandableContainer .ExpandableContainer {\\n  border-bottom: none;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable .ExpandableContainer .SectionExpandable_header,\\n.DocumentTableContent .ExpandableContainer .SectionExpandable.expanded .ExpandableContainer .SectionExpandable_header {\\n  background-color: #f5f5f5;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable.expanded .ExpandableContainer .SectionExpandable_header {\\n  border-bottom: 1px solid #d6d6d6;\\n}\\n\\n.DocumentTableContent .SectionExpandable_header .SectionExpandable__title div {\\n  font-weight: 400;\\n}\\n\\n.DocumentTableContent .ExpandableContainer:last-child .SectionExpandable_header {\\n  border-bottom: none;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable_header {\\n  padding: 10px 0;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) .SectionExpandable_header .ExpandableContainer_Title {\\n  color: #858585;\\n  font-size: 11px;\\n  font-weight: 600;\\n  height: 26px;\\n  line-height: 26px;\\n  text-align: left;\\n  text-transform: uppercase;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) .SectionExpandable_header {\\n  height: 26px;\\n  padding-bottom: 0;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) {\\n  height: 26px;\\n  margin-bottom: 10px;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) .ExpandableContainer_Title .Column.LeftMiddle {\\n  padding-right: 15px;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) .ExpandableContainer_Title .Column.RightMiddle {\\n  padding-right: 20px;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) .ExpandableContainer_Title .Column.ColLast {\\n  padding-right: 10px;\\n}\\n\\n.DocumentTableContent .SectionExpandable .SectionExpandable_header {\\n  padding-left: 10px;\\n}\\n\\n.DocumentTableContent > .ExpandableContainer:nth-child(1) .SectionExpandable__title div {\\n  font-weight: 600;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable .ExpandableContainer.notExpandable .SectionExpandable .SectionExpandable_header .SectionExpandable__title,\\n.DocumentTableContent .ExpandableContainer.notExpandable {\\n  padding-left: 2px;\\n}\\n\\n.DocumentTableContent .ExpandableContainer .SectionExpandable .ExpandableContainer.notExpandable {\\n  padding-left: 0;\\n}\\n\\n/*desktop small behavior*/\\n.desktop.small .DocumentTableContent .Columns .Column {\\n  width: 25%;\\n}\\n\\n.desktop.small .DocumentTableContent > .ExpandableContainer:nth-child(1) .SectionExpandable_header .ExpandableContainer_Title {\\n  font-size: 9px;\\n}\\n\\n.desktop.small .DocumentTableContent > .ExpandableContainer .SectionExpandable_header .ExpandableContainer_Title {\\n  font-size: 10px;\\n  font-weight: 600;\\n}\\n\\n.desktop.small .DocumentTableContent .Column.ColLast .Button {\\n  min-width: 15px;\\n}\\n\\n.desktop.small .DocumentTableContent .Column.ColLast a * {\\n  font-size: 10px;\\n}\\n\\n/*------------------------------------------------------------*/\\n/* 9.1 Sapphire BackOffice Patterns > Filter Container ********/\\n/*------------------------------------------------------------*/\\n/* $9.2. [ExpandableTable] */\\n.TableRecords_Wrapper.NoResponsive .TableRecords.ExpandableRows.NoResponsive {\\n  background: white;\\n  padding: 20px 26px 16px;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords.ExpandableRows td .ExpandLink {\\n  color: #5f6f79;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable .TableRowExpandable_Content {\\n  box-sizing: content-box;\\n  height: 0;\\n  overflow: hidden;\\n  padding: 0 40px;\\n  transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1);\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open .TableRowExpandable_Content {\\n  height: auto;\\n  overflow: visible;\\n  padding: 20px 40px;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable .TableRowExpandable_Content.Column {\\n  padding: 0 5px;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable .TableRowExpandable_Content.Column,\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open .TableRowExpandable_Content.Column {\\n  color: #333;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 48px;\\n  padding: 0;\\n  text-align: left;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords thead tr {\\n  height: auto;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.ActiveRow td,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr.ActiveRow:hover,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr.ActiveRow:hover td {\\n  background: white;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr td:first-child {\\n  border-left: 1px solid transparent;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr td:last-child {\\n  border-right: 1px solid transparent;\\n}\\n\\n.TableRecords_Wrapper .NoResponsive tr.TableRowExpandable.open td,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr.TableRowExpandable.open:hover,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr.TableRowExpandable.open:hover td {\\n  background: #f5f5f5;\\n  border-bottom: 1px solid #d6d6d6;\\n}\\n\\n/* Expandable Table responsive */\\n.phone .TableRecords_Wrapper.NoResponsive .TableRecords_Wrapper.NoResponsive {\\n  max-width: 100%;\\n  overflow-x: auto;\\n}\\n\\n.phone .TableRecords_Wrapper.NoResponsive .TableRecords.NoResponsive .TableRecords_Header {\\n  white-space: nowrap;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open td:first-child {\\n  border-left: 1px solid transparent;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive tr.TableRowExpandable.open td:last-child {\\n  border-right: 1px solid transparent;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header {\\n  background-color: transparent;\\n  color: #6f7071;\\n  font-size: 11px;\\n  font-weight: 600;\\n  text-align: left;\\n  text-transform: uppercase;\\n}\\n\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords_OddLine:first-child,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine:first-child,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords_Header:first-child,\\n.tablet .TableRecords_Wrapper.NoResponsive .TableRecords_OddLine:first-child,\\n.tablet .TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine:first-child,\\n.tablet .TableRecords_Wrapper.NoResponsive .TableRecords_Header:first-child {\\n  padding-left: 0;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr {\\n  height: auto;\\n  line-height: 0;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr:hover {\\n  background-color: White;\\n}\\n\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr:hover,\\n.desktop .TableRecords_Wrapper.NoResponsive .TableRecords > tbody > tr:hover td,\\n.desktop .TableRecords_Wrapper.NoResponsive .EditableTable > tbody > tr:hover td {\\n  background: white;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header a,\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header a:link,\\n.TableRecords_Wrapper.NoResponsive .TableRecords_Header a:visited {\\n  color: #999;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords {\\n  background: transparent;\\n  text-align: center;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .TableRecords_OddLine,\\n.TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine {\\n  border-bottom: 1px solid #d6d6d6;\\n  color: #333;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 48px;\\n  text-align: left;\\n}\\n\\n/*seta animation*/\\n.TableRecords_Wrapper.NoResponsive .TableRecords_OddLine:first-child span,\\n.TableRecords_Wrapper.NoResponsive .TableRecords_EvenLine:first-child span {\\n  transform: rotate(270deg);\\n  transition: transform 0.3s;\\n}\\n\\n.TableRecords_Wrapper.NoResponsive .ActiveRow .TableRecords_OddLine:first-child span,\\n.TableRecords_Wrapper.NoResponsive .ActiveRow .TableRecords_EvenLine:first-child span {\\n  transform: rotate(360deg);\\n}\\n\\n/* Responsive */\\n.landscape.desktop.hd .TableRecords_Wrapper.NoResponsive {\\n  min-width: 100%;\\n  overflow-x: auto;\\n  white-space: nowrap;\\n}\\n\\n.landscape.desktop .TableRecords_Wrapper.NoResponsive {\\n  max-width: 1082px;\\n  overflow-x: auto;\\n  white-space: nowrap;\\n}\\n\\n.landscape.desktop.small .TableRecords_Wrapper.NoResponsive {\\n  max-width: 1029px;\\n  overflow-x: auto;\\n  white-space: nowrap;\\n}\\n\\n.tablet .TableRecords_Wrapper.NoResponsive {\\n  max-width: auto;\\n  overflow-x: auto;\\n  white-space: nowrap;\\n}\\n\\n.phone .TableRecords_Wrapper.NoResponsive {\\n  min-width: 318px;\\n  overflow-x: auto;\\n  white-space: nowrap;\\n}\\n\\n/* $9.3. [MultipleSelect] */\\n.ms-parent {\\n  display: inline-block;\\n  position: relative;\\n  vertical-align: middle;\\n  width: 100%;\\n}\\n\\n.ms-choice {\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 4px;\\n  color: #444;\\n  cursor: pointer;\\n  display: block;\\n  font-size: 16px;\\n  height: 42px;\\n  line-height: 42px;\\n  overflow: hidden;\\n  padding: 0;\\n  text-align: left;\\n  text-decoration: none;\\n  white-space: nowrap;\\n  width: 100% !important;\\n}\\n\\n.ms-choice.disabled {\\n  background-color: #f4f4f4;\\n  background-image: none;\\n  border: 1px solid #ddd;\\n  cursor: default;\\n}\\n\\n.ms-choice > span {\\n  display: block;\\n  left: 0;\\n  overflow: hidden;\\n  padding-left: 10px;\\n  position: absolute;\\n  right: 20px;\\n  text-overflow: ellipsis;\\n  top: 0;\\n  white-space: nowrap;\\n}\\n\\n.ms-choice > span.placeholder {\\n  color: #adadad;\\n  font-size: 16px;\\n  font-style: italic;\\n  font-weight: normal;\\n}\\n\\n.ms-choice > div {\\n  height: 25px;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 20px;\\n}\\n\\n.ms-choice > div:after {\\n  content: \\\"\\\\e610\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 10px;\\n}\\n\\n.ms-choice > div.open:after {\\n  content: \\\"\\\\e611\\\";\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 12px;\\n  position: absolute;\\n  right: 10px;\\n}\\n\\n.ms-drop {\\n  background: #fff;\\n  border: 1px solid #aaa;\\n  border-radius: 0 0 4px 4px;\\n  border-top: none;\\n  color: #000;\\n  display: none;\\n  margin-top: -3px;\\n  overflow: hidden;\\n  padding: 0;\\n  position: absolute;\\n  width: 100% !important;\\n  z-index: 1000;\\n}\\n\\n.ms-drop li:hover {\\n  background: #f5f5f5;\\n}\\n\\n.ms-drop.bottom {\\n  top: 100%;\\n  width: 100% !important;\\n}\\n\\n.ms-drop.top {\\n  bottom: 100%;\\n}\\n\\n.ms-search {\\n  border-bottom: 1px solid #ccc;\\n  border-top: 2px solid #00bfa5;\\n  display: inline-block;\\n  margin: 0;\\n  min-height: 26px;\\n  position: relative;\\n  white-space: nowrap;\\n  width: 100%;\\n  z-index: 10000;\\n}\\n\\n.ms-search.Hidden {\\n  display: none;\\n}\\n\\n.ms-search.Hidden + ul {\\n  border-top: 2px solid #00bfa5;\\n}\\n\\n.ms-search input[type=text] {\\n  border: none;\\n  border-left: 0;\\n  border-radius: 0;\\n  border-right: 0;\\n  box-shadow: none;\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 1em;\\n  margin: 0;\\n  min-height: 24px;\\n  outline: 0;\\n  padding-left: 30px;\\n  width: 100%;\\n}\\n\\n.ms-search:after {\\n  color: #adadad;\\n  content: \\\"\\\\e690\\\";\\n  font-family: Sapphire-Icon-Font;\\n  left: 10px;\\n  position: absolute;\\n  top: 11px;\\n  transform: scale(-1, 1);\\n}\\n\\n.ms-search,\\n.ms-search input {\\n  -ms-box-sizing: border-box;\\n  -khtml-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n.ms-drop ul {\\n  margin: 0;\\n  overflow: auto;\\n}\\n\\n.ms-drop ul > li {\\n  background-image: none;\\n  display: list-item;\\n  height: auto;\\n  line-height: normal;\\n  list-style: none;\\n  position: static;\\n}\\n\\n.ms-drop ul > li label {\\n  display: block;\\n  font-size: 16px;\\n  height: auto;\\n  line-height: 28px;\\n  padding: 5px 10px;\\n}\\n\\n.ms-drop ul > li.active {\\n  background-color: #8ce2d6;\\n}\\n\\n.ms-drop ul > li .disabled {\\n  filter: Alpha(Opacity=35);\\n  opacity: 0.35;\\n}\\n\\n.ms-drop ul > li.multiple {\\n  display: block;\\n  float: left;\\n}\\n\\n.ms-drop ul > li.group {\\n  clear: both;\\n}\\n\\n.ms-drop ul > li.multiple label {\\n  display: block;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  width: 100%;\\n}\\n\\n.ms-drop ul > li label.optgroup {\\n  font-weight: bold;\\n}\\n\\n.ms-drop input[type=checkbox] {\\n  margin-left: auto;\\n  margin-right: 10px;\\n  margin-top: 5px;\\n  vertical-align: top;\\n}\\n\\n.ms-drop .ms-no-results {\\n  display: none;\\n}\\n\\nbutton.ms-choice.open {\\n  border: 2px solid #00bfa5;\\n}\\n\\n/*** 9.4 [Sapphire] Patterns > [SectionsDraggable] ***/\\n.desktop .WrapDraggableContent .TableRecords > tbody > tr:hover,\\n.desktop .WrapDraggableContent .TableRecords > tbody > tr:hover td,\\n.desktop .WrapDraggableContent .EditableTable > tbody > tr:hover td {\\n  background: transparent;\\n}\\n\\n.desktop .WrapDraggableContent .TableRecords_OddLine:first-child,\\n.desktop .WrapDraggableContent .TableRecords_EvenLine:first-child,\\n.desktop .WrapDraggableContent .TableRecords_Header:first-child,\\n.tablet .WrapDraggableContent .TableRecords_OddLine:first-child,\\n.tablet .WrapDraggableContent .TableRecords_EvenLine:first-child,\\n.tablet .WrapDraggableContent .TableRecords_Header:first-child {\\n  padding-left: 0;\\n}\\n\\n.icon-reorder:hover {\\n  cursor: -webkit-grab;\\n}\\n\\n.WrapDraggableContent .Section_content .Section_header .Heading2 {\\n  background: #d6d6d6;\\n  color: #858585;\\n  font-size: 14px;\\n  font-weight: 600;\\n  height: 26px;\\n  padding: 3px 10px;\\n}\\n\\n.WrapDraggableContent .SectionName {\\n  background-color: #adadad;\\n  color: #fff;\\n  display: table;\\n  font-size: 14px;\\n  font-weight: 600;\\n  height: 26px;\\n  padding: 3px 10px;\\n  width: 100%;\\n}\\n\\n.SectionName > div {\\n  display: table-cell;\\n  vertical-align: middle;\\n}\\n\\n.WrapDraggableContent .Section_header {\\n  border-bottom: none;\\n  height: 26px;\\n  min-height: 0;\\n  padding: 0;\\n}\\n\\n.WrapDraggableContent .SubSection {\\n  border: 1px solid #d6d6d6;\\n}\\n\\n.WrapDraggableContent td:first-child {\\n  width: 2%;\\n}\\n\\n.SubSection .Section_content .RefreshContent tr:last-of-type td {\\n  border-bottom: none;\\n}\\n\\n.WrapDraggableContent > .Section > .Section_header > .Section__actions {\\n  background-color: transparent;\\n}\\n\\n.WrapDraggableContent .Section__actions {\\n  background-color: #d6d6d6;\\n}\\n\\n.Editactions,\\n.RemoveActions,\\n.Section__actions > div {\\n  color: #858585;\\n  font-size: 11px;\\n  font-weight: 600;\\n  line-height: 14px;\\n  margin: 0 26px;\\n  padding: 2px;\\n  text-align: center;\\n}\\n\\n.Section__actions > div .icon {\\n  font-size: 15px;\\n}\\n\\n.RemoveActions .icon-delete,\\n.Section__actions .icon-delete {\\n  color: #ff3e2d;\\n  cursor: pointer;\\n}\\n\\n.Editactions .icon-change,\\n.Section__actions .icon-change {\\n  color: #00bfa5;\\n}\\n\\n.WrapDraggableContent .Section_header .Section__actions .icon-change,\\n.WrapDraggableContent .Section_header .Section__actions .icon-delete {\\n  color: #858585;\\n}\\n\\n/*** 9.5 [Sapphire] Patterns > [HorizontalToolbar_MenuItem] ***/\\n.MenuItemWrapper {\\n  padding: 10px;\\n  position: relative;\\n  text-align: center;\\n}\\n\\n.MenuItemWrapper_Container {\\n  color: #5c5c5c;\\n  display: flex;\\n  font-size: 16px;\\n}\\n\\n.MenuItemWrapper__Label {\\n  margin-left: 10px;\\n}\\n\\n.MenuItemWrapper__icon:empty ~ .MenuItemWrapper__Label {\\n  margin-left: 0;\\n}\\n\\n.MenuItemWrapper_Badge {\\n  background-color: #cd0005;\\n  border-radius: 100%;\\n  color: #fff;\\n  font-size: 10px;\\n  height: 15px;\\n  line-height: 16px;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 15px;\\n}\\n\\n.MenuItemWrapper.Active {\\n  background-color: #00bfa5;\\n  border-radius: 4px;\\n  padding: 12px;\\n}\\n\\n.MenuItemWrapper.Active .MenuItemWrapper_Container {\\n  color: #fff;\\n}\\n\\n/* 9.6 Sapphire Patterns > Custom_Patterns > LineWarning */\\n.LineWarns .LineWarns_list {\\n  border-radius: 2px;\\n  color: #262525;\\n  display: table;\\n  font-size: 14px;\\n  /* min-height: 80px;*/\\n  /*line-height: 40px;*/\\n  overflow: hidden;\\n  padding: 5px 10px;\\n  white-space: nowrap;\\n  width: 100%;\\n}\\n\\n.LineWarns .LineWarns_list > div {\\n  display: table-cell;\\n  vertical-align: middle;\\n}\\n\\n.LineWarns .LineWarns__icon {\\n  color: rgba(50, 50, 50, 0.3);\\n  font-size: initial;\\n  min-width: 24px;\\n}\\n\\n.LineWarns.BgYellow {\\n  background-color: #feffc9;\\n  border: 1px solid #d7d8a6;\\n}\\n\\n.LineWarns.BgRed {\\n  background-color: #f9d5d5;\\n  border: 1px solid #ccc;\\n  border-radius: 4px;\\n  box-shadow: 0 1px 2px rgba(167, 166, 166, 0.65);\\n}\\n\\n.LineWarns__message {\\n  width: 75%;\\n}\\n\\n.desktop .LineWarningActions {\\n  display: inline-block;\\n  float: right;\\n  min-width: 10%;\\n  /* line-height: 80px;*/\\n}\\n\\n.phone .LineWarningActions .Button,\\n.tablet .LineWarningActions .Button,\\n.LineWarningActions .Button {\\n  margin-top: 0;\\n}\\n\\n.tablet .LineWarningActions,\\n.phone .LineWarningActions {\\n  display: block;\\n}\\n\\n.AR.desktop .LineWarningActions {\\n  display: block;\\n}\\n\\n.LineWarns.BgRed:hover {\\n  box-shadow: none;\\n}\\n\\n.desktop .LineWarns__message {\\n  width: 86%;\\n}\\n\\n.desktop.small .LineWarns__message {\\n  width: 66%;\\n}\\n\\n.tablet .LineWarns__message {\\n  max-width: 100%;\\n}\\n\\n.tablet .LineWarns .LineWarns__buttonContainer {\\n  text-align: right;\\n  width: 19%;\\n}\\n\\n.AR.tablet .LineWarns .LineWarns__buttonContainer {\\n  text-align: left;\\n}\\n\\n.tablet.portrait .LineWarns_list,\\n.phone .LineWarns_list {\\n  display: table;\\n  white-space: normal;\\n}\\n\\n.tablet.portrait .LineWarns_list > div,\\n.phone .LineWarns_list > div {\\n  display: table-cell;\\n  line-height: 2;\\n  white-space: normal;\\n}\\n\\n.tablet.portrait .LineWarns_list > span,\\n.phone .LineWarns_list > span {\\n  display: none;\\n}\\n\\n.phone .LineWarns .LineWarns__buttonContainer {\\n  line-height: 18px;\\n  width: 49%;\\n}\\n\\n.LineWarns .LineWarns__buttonContainer {\\n  text-align: right;\\n  width: 11%;\\n}\\n\\n.AR .LineWarns .LineWarns__buttonContainer {\\n  text-align: left;\\n}\\n\\n/* 9.7 Sapphire Patterns > Custom_Patterns > HorizontalToolbar */\\n.Toolbar {\\n  width: 100%;\\n}\\n\\n.Toolbar_container {\\n  position: relative;\\n}\\n\\n.Toolbar__Items {\\n  display: block;\\n  overflow: hidden;\\n  padding: 0 25px;\\n}\\n\\n.Toolbar__Items .ListRecords {\\n  display: inline-flex;\\n}\\n\\n.Toolbar__leftBtn {\\n  bottom: 50%;\\n  cursor: pointer;\\n  left: 0;\\n  position: absolute;\\n  text-align: center;\\n  width: 25px;\\n}\\n\\n.Toolbar__leftBtn:before {\\n  content: \\\" \\\\e69c\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n}\\n\\n.Toolbar__rightBtn {\\n  bottom: 50%;\\n  cursor: pointer;\\n  position: absolute;\\n  right: 0;\\n  text-align: center;\\n  width: 25px;\\n}\\n\\n.Toolbar__rightBtn:before {\\n  content: \\\"\\\\e69d\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n}\\n\\n/* 9.8 Sapphire Patterns > Custom_Patterns > ActionsSubMenu */\\n.PatientHeaderActions {\\n  position: relative;\\n}\\n\\n.PatientHeaderActions_menuItem {\\n  text-align: right;\\n}\\n\\n.PatientHeaderActions__actions {\\n  background-color: #00bfa5;\\n  border-radius: 50%;\\n  color: #fff;\\n  cursor: pointer;\\n  height: 26px;\\n  line-height: 32px;\\n  text-align: center;\\n  width: 26px;\\n}\\n\\n.PatientHeaderActions__subMenu {\\n  background-color: #fff;\\n  border: 1px solid #e0e1e3;\\n  border-radius: 3px;\\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);\\n  display: none;\\n  padding: 10px;\\n  padding-top: 0;\\n  position: absolute;\\n  right: -13px;\\n  text-align: left;\\n  top: 43px;\\n  white-space: nowrap;\\n  z-index: 1;\\n}\\n\\n.PatientHeaderActions__subMenu .iconHorizontal {\\n  cursor: pointer;\\n}\\n\\n.SubMenuBlock {\\n  display: block;\\n}\\n\\n.PatientHeaderActions__subMenu > div {\\n  margin-top: 10px;\\n}\\n\\n.PatientHeaderActions_subMenu .PatientHeaderActions__subMenu .iconHorizontal_label {\\n  color: #00bfa5;\\n  font-size: 12px;\\n}\\n\\n.PatientHeaderActions__subMenu .iconHorizontal_icon {\\n  color: #00bfa5;\\n  font-size: 16px;\\n  margin-right: 15px;\\n}\\n\\n.PatientHeaderActions__subMenu:before {\\n  border: solid 10px transparent;\\n  border-bottom: solid 10px #ccc;\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n  left: 165px;\\n  position: absolute;\\n  top: -22px;\\n  width: 1px;\\n}\\n\\n.PatientHeaderActions__subMenu:after {\\n  border: solid 10px transparent;\\n  border-bottom: solid 10px #fff;\\n  content: \\\"\\\";\\n  display: block;\\n  height: 1px;\\n  left: 165px;\\n  position: absolute;\\n  top: -21px;\\n  width: 1px;\\n}\\n\\n/* 9.9 Sapphire Patterns > Custom_Patterns > Timeline */\\n/* wb TimelineDaySparator */\\n.TimelineDetail_content {\\n  background-color: #ebebeb;\\n  color: #113041;\\n  font-size: 16px;\\n  font-weight: 700;\\n  line-height: 40px;\\n  min-height: 40px;\\n  padding-left: 20px;\\n}\\n\\n.AR .TimelineDetail_content {\\n  padding-left: auto;\\n  padding-right: 20px;\\n}\\n\\n/* wb TimelineDescriptionBlock */\\n.TimelineDescription {\\n  font-size: 14px;\\n  margin-left: 10px;\\n}\\n\\n.AR .TimelineDescription {\\n  margin-left: auto;\\n  margin-right: 10px;\\n}\\n\\n.TimelineDescription_title {\\n  color: #5f6f79;\\n  font-size: 14px;\\n}\\n\\n.TimelineDescription_description {\\n  color: #262626;\\n  font-size: 14px;\\n  margin-top: 5px;\\n}\\n\\n/* wb TimelineHistoryContent */\\n.TimelineHistoryContent_header {\\n  color: #11455d;\\n  font-size: 18px;\\n  font-weight: 700;\\n  padding-left: 10px;\\n}\\n\\n.TimelineHistoryContent_header a:link {\\n  color: #11455d;\\n}\\n\\n/* wb TimelineHistoryItem */\\n.TimelineItem {\\n  min-height: 50px;\\n  position: relative;\\n}\\n\\n.TimelineItem.Line:after {\\n  border-left: 1px solid #ccc;\\n  bottom: 0;\\n  content: \\\"\\\";\\n  left: 25px;\\n  position: absolute;\\n  top: 0;\\n  z-index: 0;\\n}\\n\\n.AR .TimelineItem.Line:after {\\n  left: auto;\\n  right: 25px;\\n}\\n\\n.TimelineItem_circleIcon {\\n  background-color: #f7f4ef;\\n  border: 2px solid #ccc;\\n  border-radius: 50%;\\n  display: inline-block;\\n  height: 40px;\\n  left: 0;\\n  line-height: 40px;\\n  margin: 5px;\\n  position: absolute;\\n  text-align: center;\\n  top: 0;\\n  width: 40px;\\n  z-index: 2;\\n}\\n\\n.AR .TimelineItem_circleIcon {\\n  left: auto;\\n  right: 0;\\n}\\n\\n.TimelineItem_content {\\n  margin-left: 50px;\\n}\\n\\n.AR .TimelineItem_content {\\n  margin-left: auto;\\n  margin-right: 50px;\\n}\\n\\n.TimelineItem__date {\\n  color: #4d5c66;\\n  font-size: 12px;\\n  font-weight: 600;\\n}\\n\\n.TimelineItem__description {\\n  font-size: 14px;\\n  font-weight: 600;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n}\\n\\n.TimelineItem:hover .TimelineItem_circleIcon {\\n  border: 2px solid #08a6af;\\n}\\n\\n/* wb TimelineHospitalizationDetail */\\n.TimelineDetail {\\n  background-color: transparent;\\n  border-bottom: 1px solid #c9cdce;\\n  display: table;\\n  min-height: 40px;\\n  width: 100%;\\n}\\n\\n.TimelineDetail_leftContent {\\n  color: #262626;\\n  display: table-cell;\\n  font-weight: 700;\\n  margin-left: 5px;\\n  min-width: 90px;\\n  padding-bottom: 10px;\\n  padding-left: 10px;\\n  padding-top: 15px;\\n  text-align: center;\\n  width: 1%;\\n}\\n\\n.AR .TimelineDetail_leftContent {\\n  margin-left: auto;\\n  margin-right: 5px;\\n  padding-left: auto;\\n  padding-right: 10px;\\n}\\n\\n.TimelineDetail__time {\\n  font-size: 14px;\\n  margin-bottom: 10px;\\n}\\n\\n.TimelineDetail__label {\\n  text-align: center;\\n}\\n\\n.TimelineDetail_rightContent {\\n  display: table-cell;\\n  padding: 15px 20px 15px 10px;\\n}\\n\\n.AR .TimelineDetail_rightContent {\\n  padding: 15px 10px 15px 20px;\\n}\\n\\n/* wb TimelineItemLineLeftContent */\\n.TimelineItemLineLeftContent {\\n  color: #262626;\\n  font-size: 14px;\\n  font-weight: 700;\\n}\\n\\n.TimelineItemLineLeftContent_number,\\n.TimelineItemLineLeftContent_icon,\\n.TimelineItemLineLeftContent_title {\\n  display: inline-block;\\n}\\n\\n.TimelineItemLineLeftContent___icoLineContent {\\n  margin-left: 5px;\\n}\\n\\n.TimelineItemLineLeftContent__iconBgColor {\\n  background-color: #cd0005;\\n  border-radius: 10%;\\n  color: white;\\n  height: 30px;\\n  line-height: 20px;\\n  margin-left: 10px;\\n  width: 30px;\\n}\\n\\n/* wb TimelineNoItems */\\n.TimelineNoItems {\\n  background-color: #ebebeb;\\n  border: 1px solid #c9cdce;\\n  color: #11455d;\\n  display: table;\\n  font-size: inherit;\\n  padding: 0;\\n  width: 100%;\\n}\\n\\n.TimelineNoItems_row {\\n  display: table-row;\\n  width: 100%;\\n}\\n\\n.TimelineNoItems__icon {\\n  display: table-cell;\\n  vertical-align: middle;\\n  width: 1%;\\n}\\n\\n.TimelineNoItems__message {\\n  display: table-cell;\\n  font-size: 18px;\\n  line-height: 22px;\\n  padding-left: 10px;\\n  vertical-align: middle;\\n}\\n\\n.AR .TimelineNoItems__message {\\n  padding-left: auto;\\n  padding-right: 10px;\\n}\\n\\n/* wb TimelineSeparator */\\n.TimeSeparator {\\n  color: #4d5c66;\\n  font-size: 18px;\\n  font-weight: 700;\\n  overflow: hidden;\\n  padding: 15px 0 10px 15px;\\n}\\n\\n.TimeSeparator:after {\\n  border-top: 1px solid #d3d6d7;\\n  content: \\\"\\\";\\n  display: inline-block;\\n  height: 8px;\\n  margin-left: 10px;\\n  margin-right: -100%;\\n  vertical-align: bottom;\\n  width: 100%;\\n}\\n\\n.AR .TimeSeparator:after {\\n  margin-left: -100%;\\n  margin-right: 10px;\\n}\\n\\n/* wb LineTimeline */\\n.LineTimeLine {\\n  border: 1px solid #c9cdce;\\n  border-bottom: none;\\n}\\n\\n.LineTimeLine_header {\\n  background: #ebebeb;\\n  border-bottom: 1px solid #c9cdce;\\n  color: #11455d;\\n  display: table;\\n  width: 100%;\\n}\\n\\n.LineTimeLine__row {\\n  display: table-row;\\n  height: 58px;\\n  width: 100%;\\n}\\n\\n.LineTimeLine___date {\\n  border-right: 1px solid #c9cdce;\\n  display: table-cell;\\n  text-align: center;\\n  vertical-align: middle;\\n  width: 60px;\\n}\\n\\n.AR .LineTimeLine___date {\\n  border-left: 1px solid #c9cdce;\\n  border-right: none;\\n}\\n\\n.LineTimeLine____day {\\n  font-size: 20px;\\n}\\n\\n.LineTimeLine____month {\\n  font-size: 16px;\\n}\\n\\n.LineTimeLine____desktopIcon {\\n  color: #b1b5b6;\\n  display: table-cell;\\n  padding: 5px 0 3px 15px;\\n  vertical-align: middle;\\n  width: 1%;\\n}\\n\\n.LineTimeLine____desktopLabel {\\n  display: table-cell;\\n  font-size: 18px;\\n  line-height: 22px;\\n  vertical-align: middle;\\n  width: 1%;\\n}\\n\\n.desktop .LineTimeLine____desktopDescription {\\n  color: #262626;\\n  display: table-cell;\\n  font-size: 14px;\\n  line-height: 12px;\\n  padding: 0 25px 0 15px;\\n  vertical-align: middle;\\n}\\n\\n.tablet .LineTimeLine____desktopDescription,\\n.phone .LineTimeLine____desktopDescription {\\n  display: none;\\n}\\n\\n.LineTimeLine___actions {\\n  display: table-cell;\\n  font-size: 18px;\\n  line-height: 12px;\\n  min-width: 80px;\\n  padding: 5px 15px 5px 0;\\n  text-align: right;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n}\\n\\n.desktop .LineTimeLine___mobileDescription {\\n  display: none;\\n}\\n\\n.tablet .LineTimeLine___mobileDescription,\\n.phone .LineTimeLine___mobileDescription {\\n  display: table-cell;\\n  padding-left: 10px;\\n}\\n\\n.LineTimeLine___desktop {\\n  margin-top: 12px;\\n}\\n\\n.LineTimeLine____desktopLabel {\\n  border-right: 1px solid #c9cdce;\\n  color: #262626;\\n  font-size: 18px;\\n  font-weight: 700;\\n  padding: 5px 15px 5px 10px;\\n}\\n\\n.LineTimeLine_content {\\n  background: #fff;\\n  height: 100%;\\n}\\n\\n.LineTimeLine__showMore {\\n  background-color: #e6f3f5;\\n  border-bottom: 1px solid #d9d9d9;\\n  color: #16979f;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 35px;\\n  text-align: center;\\n}\\n\\n.TimeLineHideLogs .LineSubTimeLineHidden {\\n  display: none;\\n}\\n\\n.LineTimeLine_content:not(.TimeLineHideLogs) > .LineTimeLine__showMore {\\n  display: none;\\n}\\n\\n.AR .LineTimeLine____desktopIcon {\\n  padding: 5px 15px 3px 0;\\n}\\n\\n.AR .LineTimeLine___actions {\\n  padding: 5px 0 5px 15px;\\n  text-align: left;\\n}\\n\\n.AR .LineTimeLine____desktopLabel {\\n  border-left: 1px solid #c9cdce;\\n  border-right: none;\\n  padding: 5px 10px 5px 15px;\\n}\\n\\n.AR .LineTimeLine____desktopDescription {\\n  padding: 0 15px 0 25px;\\n}\\n\\n.AR .tablet .LineTimeLine___mobileDescription,\\n.AR .phone .LineTimeLine___mobileDescription {\\n  padding-left: auto;\\n  padding-right: 10px;\\n}\\n\\n.LineTimeLine__content .ExpandableLinkWrapper_Header {\\n  border-bottom: 1px solid #c9cdce;\\n  color: #113041;\\n  font-size: 16px;\\n  padding: 7px 15px;\\n  vertical-align: middle;\\n}\\n\\n.LineTimeLine__content .ExpandableLinkWrapper_content {\\n  margin: 0;\\n}\\n\\n.LineTimeLine__content .ExpandableLinkWrapper__icon {\\n  font-size: 14px;\\n  vertical-align: middle;\\n}\\n\\n.LineTimeLine__content .ExpandableLinkWrapper__icon .icon {\\n  vertical-align: middle;\\n}\\n\\n.LineTimeLine__content .ExpandableLinkWrapper.Active .ExpandableLinkWrapper__icon {\\n  margin-top: 3px;\\n}\\n\\n/* wb LineSubTimeLine */\\n.LineSubTimeLine {\\n  background: transparent;\\n  border-bottom: 1px solid #c9cdce;\\n  min-height: 60px;\\n  padding: 5px 10px 0 10px;\\n}\\n\\n.LineSubTimeLine_left {\\n  min-width: 140px;\\n  width: 200px;\\n}\\n\\n.LineSubTimeLine_right {\\n  width: calc(100% - 200px);\\n}\\n\\n.LineSubTimeLine_right .blueText {\\n  color: #11455d;\\n  font-weight: 400;\\n}\\n\\n.LineSubTimeLine_right .grayText {\\n  color: #7c7f7f;\\n  font-weight: 400;\\n}\\n\\n.LineSubTimeLine_right .ItalicText {\\n  color: #6a7176;\\n  font-size: 14px;\\n  font-style: italic;\\n}\\n\\n.LineSubTimeLine__leftContent {\\n  color: #262626;\\n  font-weight: 700;\\n  margin: 10px;\\n}\\n\\n.LineSubTimeLine__rightContent {\\n  font-size: 14px;\\n  margin: 10px;\\n}\\n\\n.LineSubTimeLine .ItemRemoved,\\n.TimelineHospitalizationDetail .ItemRemoved {\\n  color: #7c7f7f;\\n  text-decoration: line-through;\\n}\\n\\n/* wb TimelineShowMore */\\n.TimelineShowMore {\\n  font-size: 20px;\\n  width: 100%;\\n}\\n\\n/** 9.10 Sapphire Patterns > ExpandableLink **/\\n.ExpandableLinkWrapper_Header {\\n  cursor: pointer;\\n}\\n\\n.ExpandableLinkWrapper__icon {\\n  color: #16979f;\\n}\\n\\n.ExpandableLinkWrapper__link {\\n  margin-left: 10px;\\n}\\n\\n.ExpandableLinkWrapper_content {\\n  display: none;\\n  margin-top: 10px;\\n}\\n\\n.ExpandableLinkWrapper.Active .ExpandableLinkWrapper_content {\\n  display: block;\\n}\\n\\n.ExpandableLinkWrapper .ExpandableLinkWrapper__icon {\\n  transition: transform 0.5s;\\n}\\n\\n.ExpandableLinkWrapper.Active .ExpandableLinkWrapper__icon {\\n  transform: rotate(-180deg);\\n}\\n\\n/*-----$9.12 Sapphire Patternsi  > CKEditor -----------------------*\\\\\\n\\n\\n/** CKEDITOR confirm button **/\\na.cke_dialog_ui_button_ok:focus,\\na.cke_dialog_ui_button_ok:active,\\na.cke_dialog_ui_button_ok {\\n  background-color: #00bfa5 !important;\\n  border-color: #00bfa5 !important;\\n  box-shadow: none !important;\\n  color: #fff !important;\\n}\\n\\na.cke_dialog_ui_button_ok:hover {\\n  background-color: #009884 !important;\\n  border-color: #009884 !important;\\n  color: #fff !important;\\n}\\n\\n/*-----$9.13 Sapphire Patterns  > AlertBar -----------------------*/\\n.AlertBar {\\n  background-color: #ff7800;\\n  color: #fff;\\n  left: 240px;\\n  padding: 10px 28px;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  z-index: 1;\\n}\\n\\n.AlertBar .AlertBar_Icon,\\n.AlertBar .AlertBar_Text,\\n.AlertBar .AlertBar_Actions {\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n\\n.AlertBar .AlertBar_Text {\\n  margin-left: 10px;\\n}\\n\\n.AlertBar .AlertBar_Actions {\\n  margin-left: 10px;\\n}\\n\\n/*Button in AlertBar*/\\n.AlertBar .AlertBar_Actions .Button.Small {\\n  background-color: #ff7800;\\n  border: 1px solid #fff;\\n  color: #fff;\\n  margin: 0;\\n  padding: 0 20px;\\n}\\n\\n.AlertBar .AlertBar_Actions .Button.Small:hover {\\n  background-color: #ee5244;\\n  border: 1px solid #ffffff;\\n}\\n\\n.AlertBar .AlertBar_Actions .Button.Small:disabled {\\n  border: 1px solid #ff3e2d;\\n  color: #ff3e2d;\\n}\\n\\n.AlertBar .AlertBar_Actions .Button.Small:hover:active {\\n  background-color: #ffffff;\\n  border: 1px solid #ffffff;\\n  color: #ff7800;\\n}\\n\\n/*alertCard red*/\\n.AlertBar.red {\\n  background-color: #ff3e2d;\\n}\\n\\n/*Buttons*/\\n.AlertBar.red .AlertBar_Actions .Button.Small {\\n  background-color: #ff3e2d;\\n}\\n\\n.AlertBar.red .AlertBar_Actions .Button.Small:hover {\\n  background-color: #d42013;\\n  border: 1px solid #ffffff;\\n}\\n\\n.AlertBar.red .AlertBar_Actions .Button.Small:disabled {\\n  border: 1px solid #d42013;\\n  color: #d42013;\\n}\\n\\n.AlertBar.red .AlertBar_Actions .Button.Small:hover:active {\\n  background-color: #ffffff;\\n  border: 1px solid #ffffff;\\n  color: #ff3e2d;\\n}\\n\\n/*alertCard green*/\\n.AlertBar.green {\\n  background-color: #7cb342;\\n}\\n\\n/*Buttons*/\\n.AlertBar.green .AlertBar_Actions .Button.Small {\\n  background-color: #7cb342;\\n}\\n\\n.AlertBar.green .AlertBar_Actions .Button.Small:hover {\\n  background-color: #639131;\\n  border: 1px solid #ffffff;\\n}\\n\\n.AlertBar.green .AlertBar_Actions .Button.Small:disabled {\\n  border: 1px solid #639131;\\n  color: #639131;\\n}\\n\\n.AlertBar.green .AlertBar_Actions .Button.Small:hover:active {\\n  background-color: #ffffff;\\n  border: 1px solid #ffffff;\\n  color: #7cb342;\\n}\\n\\n/*-----$9.14 Sapphire Patterns  > StatusBadge -----------------------*/\\n.StatusBadges {\\n  border-radius: 11px;\\n  color: #fff;\\n  font-size: 11px;\\n  font-weight: bold;\\n  line-height: 13px;\\n  padding: 5px 18px;\\n  vertical-align: middle;\\n}\\n\\n.StatusBadges.BadgeOrange {\\n  background-color: #ff7800;\\n  border: 1px solid #ff7800;\\n  color: #fff;\\n}\\n\\n.StatusBadges.BadgeYellow {\\n  background-color: #e6e2aa;\\n  border: 1px solid #e6e2aa;\\n  color: #928d09;\\n}\\n\\n.StatusBadges.BadgeRed {\\n  background-color: #ffdede;\\n  border: 1px solid #ffdede;\\n  color: #ff9496;\\n}\\n\\n.StatusBadges.BadgeGreen {\\n  background-color: #c2dea8;\\n  border: 1px solid #c2dea8;\\n  color: #4c762b;\\n}\\n\\n.StatusBadges.BadgeGrey {\\n  background-color: #c9cdce;\\n  border: 1px solid #c9cdce;\\n  color: #9a9a9a;\\n}\\n\\n.StatusBadges.BadgeBlue {\\n  background-color: #31708f;\\n  border: 1px solid #31708f;\\n  color: #fff;\\n}\\n\\n.StatusBadges.BadgeWhite {\\n  background-color: #fff;\\n  border: 1px solid #b6d882;\\n  color: #b6d882;\\n}\\n\\n/*New Parameters StatusBadge*/\\n/*NoBackground*/\\n.StatusBadges.InvertBackground.BadgeRed {\\n  background-color: #fff;\\n  border: 1px solid #cd1d02;\\n  color: #cd1d02;\\n}\\n\\n.StatusBadges.InvertBackground.BadgeGreen {\\n  background-color: #fff;\\n  border: 1px solid #169c20;\\n  color: #169c20;\\n}\\n\\n.StatusBadges.InvertBackground.BadgeYellow {\\n  background-color: #fff;\\n  border: 1px solid #eab62b;\\n  color: #eab62b;\\n}\\n\\n.StatusBadges.InvertBackground.BadgeGrey {\\n  background-color: #fff;\\n  border: 1px solid #dae0e4;\\n  color: #dae0e4;\\n}\\n\\n.StatusBadges.InvertBackground.BadgeBlue {\\n  background-color: #fff;\\n  border: 1px solid #31708f;\\n  color: #31708f;\\n}\\n\\n/*SmallHeight*/\\n/*IconTextColor*/\\n.StatusBadges.InvertBackground.IconTextRed,\\n.StatusBadges.IconTextRed {\\n  color: #cd1d02;\\n}\\n\\n.StatusBadges.InvertBackground.IconTextBlack,\\n.StatusBadges.IconTextBlack {\\n  color: #0c1d22;\\n}\\n\\n/*-----$9.15 Sapphire Patterns  > GroupList -----------------------*/\\n.GroupList .GroupList_header {\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 22px;\\n}\\n\\n.GroupList .ExpandableContainer .SectionExpandable_header {\\n  height: auto;\\n  padding: 7px 14px;\\n}\\n\\n.GroupList .ExpandableContainer .SectionExpandable .SectionExpandable_content,\\n.GroupList .ExpandableContainer .SectionExpandable.expanded .SectionExpandable_content {\\n  padding: 0;\\n}\\n\\n.GroupList .SectionExpandable_header {\\n  background-color: #e9e9e9;\\n  border: 1px solid #e9e9e9;\\n}\\n\\n.GroupList .ExpandableContainer_Title {\\n  width: 100%;\\n}\\n\\n.GroupList .ExpandableContainer_TitleActions {\\n  display: none;\\n}\\n\\n.GroupList .SectionExpandable_content {\\n  border: 1px solid #e9e9e9;\\n}\\n\\n/*GtoupList inside ExpandableContainer*/\\n.ExpandableContainer .SectionExpandable.expanded .GroupList .ExpandableContainer .SectionExpandable .SectionExpandable_content {\\n  display: none;\\n}\\n\\n.ExpandableContainer .SectionExpandable.expanded .GroupList .ExpandableContainer .SectionExpandable.expanded .SectionExpandable_content {\\n  display: block;\\n}\\n\\n/*-----$9.16 Sapphire Patterns  > GroupListLine -----------------------*/\\n.GroupListLine {\\n  border-bottom: 1px solid #d6d6d6;\\n  display: flex;\\n  padding: 15px 25px;\\n  width: 100%;\\n}\\n\\n.GroupListLine_content {\\n  align-self: center;\\n}\\n\\n.GroupListLine_title {\\n  border-right: 1px solid #d6d6d6;\\n  display: flex;\\n  flex-direction: row;\\n  min-width: 250px;\\n  width: 20%;\\n}\\n\\n.GroupListLine_content {\\n  padding-left: 25px;\\n}\\n\\n.GroupListLine:last-of-type {\\n  border-bottom: none;\\n}\\n\\n/*------------------------------------*\\\\\\n    $10. Custom Classes\\n\\\\*------------------------------------*/\\n/*-----$10.1 Aditional Classes-----------------------*\\\\\\n*/\\n.FileUpload_Button .Button {\\n  background-color: #fff;\\n  border: 1px solid #00bfa5;\\n  border-radius: 5px;\\n  color: #009884;\\n}\\n\\n/*-----$10.2 NumberCircle-----------------------*/\\n.NumberCircle {\\n  background-color: #ff7800;\\n  border: 1px solid #ff7800;\\n  border-radius: 50%;\\n  color: #fff;\\n  font-size: 11px;\\n  font-weight: 600;\\n  height: 25px;\\n  line-height: 25px;\\n  text-align: center;\\n  vertical-align: middle;\\n  width: 25px;\\n}\\n\\n.Bold,\\n.SemiBold {\\n  font-weight: 700;\\n}\\n\\n.Heavy {\\n  font-weight: 800;\\n}\\n\\n/** multimarginSmall **/\\n.MultiMarginSmall {\\n  margin: 10px;\\n}\\n\\n.MultiMarginLeftSmall {\\n  margin-left: 10px;\\n}\\n\\n.MultiMarginRightSmall {\\n  margin-right: 10px;\\n}\\n\\n.MultiMarginTopSmall {\\n  margin-top: 10px;\\n}\\n\\n.MultiMarginBottomSmall {\\n  margin-bottom: 10px;\\n}\\n\\n.MultiMarginTopXSmall {\\n  margin-top: 4px;\\n}\\n\\n/** multPaddingSmall **/\\n.MultiPaddingSmall {\\n  padding: 10px;\\n}\\n\\n.MultiPaddingLeftSmall {\\n  padding-left: 10px;\\n}\\n\\n.MultiPaddingRightSmall {\\n  padding-right: 10px;\\n}\\n\\n.MultiPaddingTopSmall {\\n  padding-top: 10px;\\n}\\n\\n.MultiPaddingBottomSmall {\\n  padding-bottom: 10px;\\n}\\n\\n/** multimarginMedium **/\\n.MultiMarginMedium {\\n  margin: 16px;\\n}\\n\\n.MultiMarginLeftMedium {\\n  margin-left: 16px;\\n}\\n\\n.MultiMarginRightMedium {\\n  margin-right: 16px;\\n}\\n\\n.MultiMarginTopMedium {\\n  margin-top: 16px;\\n}\\n\\n.MultiMarginBottomMedium {\\n  margin-bottom: 16px;\\n}\\n\\n/** multPaddingMedium **/\\n.MultiPaddingMedium {\\n  padding: 16px;\\n}\\n\\n.MultiPaddingLeftMedium {\\n  padding-left: 16px;\\n}\\n\\n.MultiPaddingRightMedium {\\n  padding-right: 16px;\\n}\\n\\n.MultiPaddingTopMedium {\\n  padding-top: 16px;\\n}\\n\\n.MultiPaddingBottomMedium {\\n  padding-bottom: 16px;\\n}\\n\\n/** multimarginLarge **/\\n.MultiMarginLarge {\\n  margin: 26px;\\n}\\n\\n.MultiMarginLeftLarge {\\n  margin-left: 26px;\\n}\\n\\n.MultiMarginRightLarge {\\n  margin-right: 26px;\\n}\\n\\n.MultiMarginTopLarge {\\n  margin-top: 26px;\\n}\\n\\n.MultiMarginBottomLarge {\\n  margin-bottom: 26px;\\n}\\n\\n/** multPaddingLarge **/\\n.MultiPaddingLarge {\\n  padding: 26px;\\n}\\n\\n.MultiPaddingLeftLarge {\\n  padding-left: 26px;\\n}\\n\\n.MultiPaddingRightLarge {\\n  padding-right: 26px;\\n}\\n\\n.MultiPaddingTopLarge {\\n  padding-top: 26px;\\n}\\n\\n.MultiPaddingBottomLarge {\\n  padding-bottom: 26px;\\n}\\n\\n/** multimarginLargest **/\\n.MultiMarginLargest {\\n  margin: 42px;\\n}\\n\\n.MultiMarginLeftLargest {\\n  margin-left: 42px;\\n}\\n\\n.MultiMarginRightLargest {\\n  margin-right: 42px;\\n}\\n\\n.MultiMarginTopLargest {\\n  margin-top: 42px;\\n}\\n\\n.MultiMarginBottomLargest {\\n  margin-bottom: 42px;\\n}\\n\\n/** multPaddingLarge **/\\n.MultiPaddingLargest {\\n  padding: 42px;\\n}\\n\\n.MultiPaddingLeftLargest {\\n  padding-left: 42px;\\n}\\n\\n.MultiPaddingRightLargest {\\n  padding-right: 42px;\\n}\\n\\n.MultiPaddingTopLargest {\\n  padding-top: 42px;\\n}\\n\\n.MultiPaddingBottomLargest {\\n  padding-bottom: 42px;\\n}\\n\\n/**    No Paddings **/\\n.NoPaddingTop {\\n  padding-top: 0px;\\n}\\n\\n.NoPaddingRight {\\n  padding-right: 0;\\n}\\n\\n.NoPaddingLeft {\\n  padding-left: 0;\\n}\\n\\n.NoPaddingBottom {\\n  padding-bottom: 0;\\n}\\n\\n.NoPadding {\\n  padding: 0;\\n}\\n\\n/**   No Margins **/\\n.NoMarginTop {\\n  margin-top: 0px;\\n}\\n\\n.NoMarginRight {\\n  margin-right: 0px;\\n}\\n\\n.NoMarginLeft {\\n  margin-left: 0px;\\n}\\n\\n.NoMarginBottom {\\n  margin-bottom: 0px;\\n}\\n\\n.NoMargin {\\n  margin: 0 !important;\\n}\\n\\n/** AlignText    **/\\n.TextAlignRight {\\n  text-align: right;\\n}\\n\\n.TextAlignLeft {\\n  text-align: left;\\n}\\n\\n/** Resizable **/\\n.notResizable {\\n  overflow: auto;\\n  resize: none;\\n}\\n\\n.ResizableVertical {\\n  resize: vertical;\\n}\\n\\n.ResizableHorizontal {\\n  resize: Horizontal;\\n}\\n\\n.ResizableBoth {\\n  resize: both;\\n}\\n\\n/**** Borders  *****/\\n/** redborder **/\\n.RedBorder {\\n  border: 1px solid #ff3e2d;\\n}\\n\\n.GrayBorder {\\n  border: 1px solid #d6d6d6;\\n}\\n\\n/*------------------------------------*\\\\\\n    $11. Studio Preview\\n\\\\*------------------------------------*/\\n[class*=ThemeGrid_Width] {\\n  -servicestudio-display: inline-block !important;\\n}\\n\\n/*------------------------------------*\\\\\\n    $12. Print\\n\\\\*------------------------------------*/\\n/*------------------------------------*\\\\\\n    $13. Sapphire Backoffice Layout\\n\\\\*------------------------------------*/\\n.Page .Content {\\n  height: 100%;\\n  margin: 0 auto;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.Page .MainWrapper {\\n  margin-left: 240px;\\n}\\n\\n.Page .MainContent {\\n  margin: 0 auto;\\n  max-width: 1439px;\\n  width: 100%;\\n}\\n\\n.Page .MainContent.Generic .MainContent_others {\\n  padding-bottom: 20px;\\n  padding-top: 20px;\\n  white-space: nowrap;\\n}\\n\\n.Page .MainContent .MainContent_others .ElementSubtitlePicker {\\n  display: block;\\n}\\n\\n.Page .MainContent_Container {\\n  background-color: #fff;\\n  margin-top: 20px;\\n  padding: 8px 24px;\\n}\\n\\n.Page .MainContent_Container.IsTransparent {\\n  background-color: transparent;\\n}\\n\\n.Page .MainContent:not(.Generic) .MainContent_Container {\\n  padding-top: 26px;\\n}\\n\\n.Page .FilterContainer {\\n  margin-top: 10px !important;\\n}\\n\\n.MainContent_Container,\\n.MainWrapper,\\n.MainContent,\\n.MainContent.Generic {\\n  -servicestudio-height: 100%;\\n  -servicestudio-min-height: 400px;\\n}\\n\\n.Sidebar {\\n  background-color: #fff;\\n  left: 0;\\n  max-width: 240px;\\n  padding: 20px 0;\\n  position: fixed;\\n  top: 0;\\n  width: 20%;\\n}\\n\\n.Sidebar_logo {\\n  padding: 0 10px;\\n  position: relative;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.Sidebar_logo .icon {\\n  color: #5c5c5c;\\n  font-size: 45px;\\n}\\n\\n.Sidebar_logo > .LoginInfo {\\n  bottom: -5px;\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n.Sidebar_logo > .LoginInfo .UserName {\\n  color: #858585;\\n  font-size: 12px;\\n  font-weight: bold;\\n  line-height: 15px;\\n}\\n\\n.SidebarMenuContainer {\\n  max-height: 79%;\\n  overflow: auto;\\n  position: relative;\\n}\\n\\n.Sidebar_footer {\\n  background-color: #fff;\\n  border-top: 1px solid #d6d6d6;\\n  bottom: 0;\\n  left: 0;\\n  padding: 20px 20px 25px;\\n  position: fixed;\\n  width: 240px;\\n  z-index: 40;\\n}\\n\\n.Sidebar_footer .LoginInfo .UserName {\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 17px;\\n}\\n\\n.Sidebar_footer .Sidebar__logout {\\n  color: #00bfa5;\\n  font-weight: 600;\\n}\\n\\n/* Sidebar Menu*/\\n.Sidebar .Application_Menu {\\n  margin-top: 40px;\\n}\\n\\n.Sidebar .Menu_DropDownButton .Menu_TopMenu {\\n  background-color: #fff;\\n  color: #5c5c5c;\\n  font-size: 16px;\\n  line-height: 38px;\\n}\\n\\n.Sidebar .Menu_DropDownButton,\\n.Sidebar .Application_Menu .Menu_TopMenus {\\n  margin: 0;\\n  width: 100%;\\n}\\n\\n.Sidebar .Menu_TopMenu .Menu_DropDownArrow {\\n  border-top-color: #5c5c5c;\\n  border-width: 4px 4px 0;\\n}\\n\\n.Sidebar .Menu_DropDownButton.open .Menu_DropDownArrow,\\n.Sidebar .Menu_DropDownButton .Menu_TopMenuActive .Menu_DropDownArrow {\\n  border-top-color: #1d1d1d;\\n}\\n\\n.Sidebar .Menu_DropDownButton.open .Menu_SubItemsPlaceholder,\\n.Sidebar .Menu_DropDownButton .Menu_TopMenuActive .Menu_SubItemsPlaceholder {\\n  padding: 0 40px;\\n}\\n\\n.Sidebar .Menu_DropDownButton.open .Menu_SubItemsPlaceholder a,\\n.Menu_DropDownButton.open .Menu_SubItemsPlaceholder a,\\n.Sidebar .Menu_DropDownButton .Menu_TopMenuActive .Menu_SubItemsPlaceholder a {\\n  background-color: transparent;\\n  color: #5c5c5c;\\n  font-size: 14px;\\n  line-height: 25px;\\n}\\n\\n.Sidebar .Menu_DropDownPanel a.Menu_SubMenuItem:hover,\\n.Sidebar .Menu_DropDownPanel a.Menu_SubMenuItem.Menu_SubMenuItemActive,\\n.Menu_DropDownPanel a.Menu_SubMenuItem.Menu_SubMenuItemActive,\\n.Sidebar .Menu_DropDownPanel a.Menu_SubMenuItem:hover {\\n  background-color: #fff;\\n  color: #333;\\n  font-family: \\\"LatoRegular\\\";\\n  font-weight: 700;\\n}\\n\\n.Sidebar .Application_Menu .Menu_TopMenu a {\\n  border-left: none;\\n  color: #5c5c5c;\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 16px;\\n  line-height: 38px;\\n  padding-left: 23px;\\n  text-align: left;\\n  width: 100%;\\n}\\n\\n.Sidebar .Application_Menu .Menu_TopMenu span.icon {\\n  color: #5c5c5c;\\n  margin-left: 26px;\\n  margin-right: 10px;\\n}\\n\\n.Sidebar .Application_Menu .Menu_TopMenuActive .Menu_DropDownArrow {\\n  border-top-color: #1d1d1d;\\n  opacity: 1;\\n  transform: rotate(180 deg) translateY(2px);\\n}\\n\\n.Sidebar .Application_Menu .Menu_TopMenuActive,\\n.Sidebar .Application_Menu .Menu_TopMenuActive:hover {\\n  background-color: #fff;\\n  border: none;\\n  box-shadow: none;\\n  height: 38px;\\n  width: 100%;\\n}\\n\\n.Sidebar .Application_Menu .Menu_DropDownButton .Menu_TopMenuActive a,\\n.Sidebar .Application_Menu .Menu_DropDownButton .Menu_TopMenu:hover a,\\n.Sidebar .Application_Menu .Menu_DropDownButton.open .Menu_TopMenu a {\\n  border-left: 3px solid #00bfa5;\\n  color: #333;\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 16px;\\n  font-weight: 700;\\n  line-height: 38px;\\n  padding-left: 0;\\n  text-align: left;\\n  width: 100%;\\n}\\n\\n.Sidebar .Application_Menu .Menu_TopMenuActive span.icon,\\n.Sidebar .Application_Menu .Menu_TopMenu:hover span.icon,\\n.Sidebar .Application_Menu .Menu_DropDownButton.open .Menu_TopMenu span.icon {\\n  color: #00bfa5;\\n  margin-left: 23px;\\n}\\n\\n.Sidebar .Menu_DropDownButton.open .Menu_DropDownPanel,\\n.Sidebar .Menu_DropDownButton .Menu_TopMenuActive .Menu_DropDownPanel {\\n  background-color: #fff;\\n  box-shadow: none;\\n  display: block;\\n  overflow: hidden;\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.Sidebar .Menu_TopMenu a:link,\\n.Sidebar .Menu_TopMenu a:visited,\\n.Sidebar .Menu_TopMenu a {\\n  padding: 0;\\n}\\n\\n.Sidebar .Application_Menu .Menu_DropDownButton.open .icon:before {\\n  color: #00bfa5;\\n}\\n\\n.Sidebar .Application_Menu .Menu_DropDownButton .icon:before {\\n  color: #adadad;\\n}\\n\\n/*------------------------------------*\\\\\\n    $13.1 Sapphire Backoffice Layout\\n\\\\*------------------------------------*/\\n/*------------------------------------------------------------*/\\n/* 14 Auxiliar classes **********************/\\n/*------------------------------------------------------------*/\\n.NoOverflow {\\n  overflow: hidden;\\n}\\n\\n.WordBreak {\\n  word-break: break-word;\\n}\\n\\n.NoScrollIframe {\\n  overflow-y: hidden;\\n}\\n\\n.DashedBorder {\\n  border: 1px solid dashed;\\n}\\n\\n.InputDate {\\n  -webkit-appearance: none;\\n  background-color: #fff;\\n  border: 1px solid #d6d6d6;\\n  border-radius: 1px;\\n  box-shadow: none;\\n  font-size: 14px;\\n  line-height: 24px;\\n  min-height: 35px;\\n  min-width: 180px;\\n  padding-right: 30px;\\n}\\n\\n.InputDate input[type=text] {\\n  border: none;\\n  box-shadow: none;\\n}\\n\\n.InputDate:after {\\n  color: #5c5c5c;\\n  content: \\\"\\\\e60b\\\";\\n  font-family: \\\"Sapphire-Icon-Font\\\";\\n  font-size: 20px;\\n  -moz-osx-font-smoothing: grayscale;\\n  -webkit-font-smoothing: antialiased;\\n  font-style: normal;\\n  font-variant: normal;\\n  font-weight: 400;\\n  line-height: 34px;\\n  pointer-events: none;\\n  position: absolute;\\n  speak: none;\\n  text-transform: none;\\n}\\n\\n.PointerEvents {\\n  pointer-events: none;\\n}\\n\\n.Sidebar *::-webkit-scrollbar {\\n  width: 24px;\\n}\\n\\n.Sidebar *::-webkit-scrollbar-thumb {\\n  background: #d6d6d6;\\n  border: 10px #fff solid;\\n  /* change border color to blue to match the background */\\n}\\n\\n.InfoTips {\\n  color: #858585;\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 14px;\\n  font-style: italic;\\n}\\n\\n.InfoTips span:nth-child(2) {\\n  margin-left: 6px;\\n}\\n\\n.BorderBottomLine {\\n  border-bottom: 1px solid #d6d6d6;\\n}\\n\\n/*Change to small/medium/big classes*/\\n.NoMargin {\\n  margin: 0;\\n}\\n\\n.MarginLeft6 {\\n  margin-left: 6px;\\n}\\n\\n.MarginLeft10 {\\n  margin-left: 10px;\\n}\\n\\n.MarginLeft16 {\\n  margin-left: 16px;\\n}\\n\\n.MarginLeft26 {\\n  margin-left: 26px;\\n}\\n\\n/*MarginRight*/\\n.MarginRight6 {\\n  margin-right: 6px;\\n}\\n\\n.MarginRight10 {\\n  margin-right: 10px;\\n}\\n\\n.MarginRight16 {\\n  margin-right: 16px;\\n}\\n\\n.MarginRight26 {\\n  margin-right: 26px;\\n}\\n\\n/* MarginTop*/\\n.MarginTopSmall {\\n  margin-top: 6px;\\n}\\n\\n.MarginTop {\\n  margin-top: 10px;\\n}\\n\\n.MarginTopMedium {\\n  margin-top: 16px;\\n}\\n\\n.MarginTopBig {\\n  margin-top: 26px;\\n}\\n\\n/* MarginBottom*/\\n.MarginBottomSmall {\\n  margin-bottom: 6px;\\n}\\n\\n.MarginBottom {\\n  margin-bottom: 10px;\\n}\\n\\n.MarginBottomMedium {\\n  margin-bottom: 16px;\\n}\\n\\n.MarginBottomBig {\\n  margin-bottom: 26px;\\n}\\n\\n/*** Tablerecords width auxiliar classes ***/\\n.desktop .TableRecords .tblwidth5 {\\n  width: 5%;\\n}\\n\\n.desktop .TableRecords .tblwidth10 {\\n  width: 10%;\\n}\\n\\n.desktop .TableRecords .tblwidth15 {\\n  width: 15%;\\n}\\n\\n.desktop .TableRecords .tblwidth20 {\\n  width: 20%;\\n}\\n\\n.desktop .TableRecords .tblwidth25 {\\n  width: 25%;\\n}\\n\\n.desktop .TableRecords .tblwidth30 {\\n  width: 30%;\\n}\\n\\n.desktop .TableRecords .tblwidth35 {\\n  width: 35%;\\n}\\n\\n.desktop .TableRecords .tblwidth40 {\\n  width: 40%;\\n}\\n\\n.CancelSearch {\\n  background-color: #adadad;\\n  border: 0;\\n  border-radius: 50%;\\n  color: #fff;\\n  font-size: 10px;\\n  font-weight: 600;\\n  height: 17px;\\n  line-height: 0.5px;\\n  margin: 0;\\n  padding: 0;\\n  pointer-events: visible;\\n  width: 17px;\\n}\\n\\n/*** Time Picker Sapphire BackOffice ***/\\ndiv.time-picker {\\n  background: #fff;\\n  border: 1px solid #aaa;\\n  height: 140px;\\n  margin: 0;\\n  overflow: auto;\\n  position: absolute;\\n  width: 4em;\\n  /* needed for IE */\\n  z-index: 99;\\n}\\n\\ndiv.time-picker-12hours {\\n  width: 6em;\\n  /* needed for IE */\\n}\\n\\ndiv.time-picker ul {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\ndiv.time-picker li {\\n  cursor: pointer;\\n  font-size: 16px;\\n  height: 40px;\\n  line-height: 37px;\\n  padding: 4px 3px;\\n  width: 100%;\\n}\\n\\ndiv.time-picker li.selected {\\n  background: #00bfa5;\\n  color: #fff;\\n  line-height: 37px;\\n}\\n\\n.time-picker-error {\\n  border: 1px solid red;\\n}\\n\\n/*** ******************* ***/\\n/*** Tablet Exceptions****/\\n.tablet.portrait .MainContent_others > div,\\n.tablet.portrait .SapphireSearchControl,\\n.phone .MainContent_others > div,\\n.tablet.portrait .FilterContainer > div > div,\\n.tablet.portrait .FilterContainer div > input[type=text] {\\n  display: block;\\n  margin-top: 5px;\\n  text-align: left;\\n  width: 100%;\\n}\\n\\n.tablet.portrait .SapphireSearch_input input[type=text],\\n.phone .SapphireSearch_input input[type=text] {\\n  width: 100%;\\n}\\n\\n.tablet.portrait .SapphireSearch_input,\\n.tablet.portrait .SapphireSearch_input.expanded,\\n.phone .SapphireSearch_input,\\n.phone .SapphireSearch_input.expanded {\\n  display: block;\\n  margin-bottom: 10px;\\n  margin-right: 0;\\n  padding-right: 0;\\n  position: relative;\\n}\\n\\n.tablet.portrait .SapphireSearch_input.expanded + .SapphireSearch_close.show,\\n.phone .SapphireSearch_input.expanded + .SapphireSearch_close.show {\\n  background-color: #adadad;\\n  border-radius: 50%;\\n  height: 0;\\n  left: 90%;\\n  opacity: 1;\\n  position: absolute;\\n  top: 10px;\\n  visibility: visible;\\n  width: 16px;\\n}\\n\\n.MandatoryField {\\n  color: #bf1601;\\n  font-size: 13px;\\n  font-weight: bold;\\n  padding: 5px;\\n  position: absolute;\\n}\\n\\n/*Favorites BO*/\\n.FavoritesContainer a.Button.Link.active {\\n  background-color: #00bfa5;\\n  border-radius: 4px;\\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\\n  color: #fff;\\n  height: 42px;\\n  line-height: 21px;\\n  padding: 11px 20px 12px;\\n}\\n\\n.desktop .FavoritesContainer .Button.Link.active:hover {\\n  background-color: #00bfa5;\\n  border-radius: 4px;\\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\\n  color: #fff;\\n  height: 42px;\\n  line-height: 21px;\\n  padding: 11px 20px 12px;\\n  text-decoration: none;\\n}\\n\\n.desktop .FavoritesContainer .Button.Link:hover {\\n  text-decoration: none;\\n}\\n\\n.FavoritesContainer .Button.Link label:hover {\\n  cursor: pointer;\\n}\\n\\n/*BO DoctorGroup_Edit*/\\n.AssignedListBox,\\n.AvailableListBox {\\n  border: 1px solid #d6d6d6;\\n  height: 200px;\\n  margin-left: 10px;\\n  overflow-y: scroll;\\n  padding: 10px;\\n}\\n\\n.SplitTablesContainer .Heading2,\\n.TableRecords_Wrapper .Heading2 {\\n  height: 68px;\\n  line-height: 68px;\\n  margin-left: 26px;\\n}\\n\\n.SplitTablesContainer .ExpandableContainer .SectionExpandable .SectionExpandable_header .ExpandableContainer_Title {\\n  line-height: 68px;\\n}\\n\\n/*FaceSheetLabels*/\\n.FSLabel {\\n  line-height: 25px;\\n  padding-left: 26px;\\n  white-space: nowrap;\\n}\\n\\n/* Clinician_Backoffice / ToolbarPreview */\\n.ToolbarByTool .ListRecords {\\n  display: list-item;\\n}\\n\\n.ToolbarByTool .ListRecords > a {\\n  display: table-cell;\\n}\\n\\n.ToolbarByTool .ListRecords > a > div {\\n  background-color: #f7f4ef;\\n  display: table-cell;\\n  padding: 10px;\\n  padding-bottom: 0;\\n  position: relative;\\n  text-align: center;\\n}\\n\\n.MenuCounter {\\n  position: absolute;\\n  right: 5px;\\n  top: 5px;\\n}\\n\\n/*Input  Clinician_Backoffice / InstructionCategories_Edit\\n(ReadOnly class overwrite solution)*/\\n.InstructionCategoryInp.OSFillParent.os-internal-ui-autocomplete-input.SmartInput.ReadOnly,\\n.InstructionCategoryInp.Mandatory.SmartInput.ReadOnly {\\n  box-shadow: none;\\n  font-size: inherit;\\n}\\n\\n/*Clinician_Backoffice AddFavorite PopUp*/\\n.AddFavoritePopUpDiv {\\n  max-height: 650px;\\n  overflow-y: auto;\\n}\\n\\n/*ScrollableContent for TemplateBasedTabs PopUp*/\\n.ScrollableContent {\\n  max-height: 500px;\\n  overflow-y: auto;\\n}\\n\\n.desktop.small .FavoriteTreatmentEdit.ScrollableContent,\\n.FavoriteTreatmentEdit.ScrollableContent {\\n  max-height: 410px;\\n  overflow-y: auto;\\n}\\n\\n.tablet .ScrollableContent,\\n.desktop.small .ScrollableContent {\\n  max-height: 450px;\\n  overflow-y: auto;\\n}\\n\\n/*Agendas PopUp*/\\n.ScrollableContentAgendas {\\n  max-height: 750px;\\n  overflow-y: auto;\\n}\\n\\n.desktop.small .ScrollableContentAgendas {\\n  max-height: 450px;\\n  overflow-y: auto;\\n}\\n\\n/*Level PainLevelWarn */\\n.PainLevelWarn {\\n  background-color: #ee8918;\\n  color: #fff;\\n  font-size: 16px;\\n  font-weight: 600;\\n  padding: 5px 0;\\n  text-align: center;\\n}\\n\\n.desktop .SapphireSearch_show a:hover {\\n  cursor: pointer;\\n  text-decoration: none;\\n}\\n\\nul.os-internal-ui-autocomplete {\\n  /* width:60% !important;*/\\n  padding: 10px;\\n  z-index: 2 !important;\\n}\\n\\n/******** Auxiliar Classes ******/\\n.NoWrap {\\n  white-space: nowrap;\\n}\\n\\n.IconGiven span.icon-given {\\n  color: #00bfa5;\\n}\\n\\n.formatJSON {\\n  white-space: pre-wrap;\\n  word-break: break-word;\\n}\\n\\n/*Ckeditor HTML*/\\npre {\\n  font-family: \\\"LatoRegular\\\";\\n  font-size: 16px;\\n  white-space: pre-wrap;\\n}\\n\\n.Hidden,\\n.hidden {\\n  display: none;\\n}\\n\\n/**************************SELECT2 MULTIPLE *************/\\n.select2-container .select2-selection--multiple {\\n  box-sizing: border-box;\\n  cursor: pointer;\\n  display: block;\\n  min-height: 32px;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n       user-select: none;\\n}\\n\\n.select2-container .select2-selection--multiple .select2-selection__rendered {\\n  display: inline-block;\\n  overflow: hidden;\\n  padding-left: 8px;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n.select2-container--default .select2-selection--multiple {\\n  background-color: white;\\n  border: 1px solid #aaa;\\n  border-radius: 4px;\\n  cursor: text;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-selection__rendered {\\n  box-sizing: border-box;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0 5px;\\n  width: 100%;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-selection__rendered li {\\n  list-style: none;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-selection__clear {\\n  cursor: pointer;\\n  float: right;\\n  font-weight: bold;\\n  margin-right: 10px;\\n  margin-top: 5px;\\n  padding: 1px;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-selection__choice {\\n  background-color: #00bfa5;\\n  border: 1px solid #00bfa5;\\n  border-radius: 4px;\\n  color: #fff;\\n  cursor: default;\\n  float: left;\\n  font-size: 16px;\\n  margin-right: 5px;\\n  margin-top: 5px;\\n  padding: 12px;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {\\n  color: #fff;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-weight: bold;\\n  margin-right: 2px;\\n  margin-top: 0;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-search--inline .select2-search__field {\\n  border: 0;\\n  font-size: 16px;\\n  height: 56px;\\n  width: 50%;\\n}\\n\\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {\\n  color: #fff;\\n}\\n\\n.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__choice,\\n.select2-container--default[dir=rtl] .select2-selection--multiple .select2-search--inline {\\n  float: right;\\n}\\n\\n.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__choice {\\n  margin-left: 5px;\\n  margin-right: auto;\\n}\\n\\n.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__choice__remove {\\n  margin-left: 2px;\\n  margin-right: auto;\\n}\\n\\n.select2-container--default.select2-container--focus .select2-selection--multiple {\\n  border: 2px solid #00bfa5;\\n  outline: 0;\\n}\\n\\n.select2-container--default.select2-container--disabled .select2-selection--multiple {\\n  background-color: #eee;\\n  cursor: default;\\n}\\n\\n.select2-container--classic .select2-selection--multiple {\\n  background-color: white;\\n  border: 1px solid #aaa;\\n  border-radius: 4px;\\n  cursor: text;\\n  outline: 0;\\n}\\n\\n.select2-container--classic .select2-selection--multiple:focus {\\n  border: 1px solid #5897fb;\\n}\\n\\n.select2-container--classic .select2-selection--multiple .select2-selection__rendered {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0 5px;\\n}\\n\\n.select2-container--classic .select2-selection--multiple .select2-selection__clear {\\n  display: none;\\n}\\n\\n.select2-container--classic .select2-selection--multiple .select2-selection__choice {\\n  background-color: #e4e4e4;\\n  border: 1px solid #aaa;\\n  border-radius: 4px;\\n  cursor: default;\\n  float: left;\\n  margin-right: 5px;\\n  margin-top: 5px;\\n  padding: 0 5px;\\n}\\n\\n.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove {\\n  color: #888;\\n  cursor: pointer;\\n  display: inline-block;\\n  font-weight: bold;\\n  margin-right: 2px;\\n}\\n\\n.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover {\\n  color: #555;\\n}\\n\\n.select2-container--classic[dir=rtl] .select2-selection--multiple .select2-selection__choice {\\n  float: right;\\n  margin-left: 5px;\\n  margin-right: auto;\\n}\\n\\n.select2-container--classic[dir=rtl] .select2-selection--multiple .select2-selection__choice__remove {\\n  margin-left: 2px;\\n  margin-right: auto;\\n}\\n\\n.select2-container--classic.select2-container--open .select2-selection--multiple {\\n  border: 1px solid #5897fb;\\n}\\n\\n.select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple {\\n  border-top: none;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0;\\n}\\n\\n.select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple {\\n  border-bottom: none;\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n\\n.select2-dropdown.MultipleSelect .select2-search--dropdown:after {\\n  left: auto;\\n  right: 10px;\\n}\\n\\n.select2-selection.select2-selection--multiple.MultipleSelect .select2-selection__choice {\\n  color: #333;\\n}\\n\\n.select2-dropdown.MultipleSelect .select2-results__option[aria-selected=true]:before {\\n  background-color: #16979f;\\n  color: #fff;\\n  content: \\\"\\\\f00c\\\";\\n  display: inline-block;\\n  font-family: FontAwesome;\\n  height: 20px;\\n  padding-bottom: 5px;\\n  /* border-color: #16979f; */\\n  /* padding-left: 3px; */\\n  padding-left: 4px;\\n  padding-right: 3px;\\n  padding-top: 0px;\\n  width: 16px;\\n}\\n\\n.select2-container--default .MultipleSelect.select2-selection--multiple .select2-selection__placeholder {\\n  padding-top: 5px;\\n}\\n\\n/*\\n.select2-container .select2-selection--single {\\n  height: 40px;\\n}\\n\\n.select2-container--default .select2-selection--single .select2-selection__arrow {\\n  top: 10px;\\n}\\n*/\\n.UploadBox {\\n  background-color: rgb(248, 248, 248);\\n  border: 1px solid #cccccc;\\n  border-radius: 5px;\\n  font-weight: bold;\\n  padding: 5px 10px 5px 10px;\\n}\\n\\n/**********\\nNew SelectSystem rectification css\\n********/\\n.select2-container--default .select2-results__option--highlighted[aria-selected] {\\n  background-color: #8ce2d6 !important;\\n  color: #333;\\n}\\n\\n.select2-container--default .select2-results__option[aria-selected=true] {\\n  background-color: transparent;\\n}\\n\\n.container {\\n  border-color: #d9d9d9;\\n  border-style: solid;\\n  border-width: 1px;\\n}\\n\\n.bordercolor--lightgrey {\\n  border-color: #f2f2f2;\\n}\\n\\n.bordercolor--grey {\\n  border-color: #d9d9d9;\\n}\\n\\n.bordercolor--darkgrey {\\n  border-color: #7c7f7f;\\n}\\n\\n.bordercolor--red {\\n  border-color: #d01a1a;\\n}\\n\\n.bordercolor--darkred {\\n  border-color: #b10000;\\n}\\n\\n.bordercolor--orange {\\n  border-color: #da6802;\\n}\\n\\n.bordercolor--primary {\\n  border-color: #11455d;\\n}\\n\\n.bordercolor--secondary {\\n  border-color: #16979f;\\n}\\n\\n.borderwidth--small {\\n  border-width: 1px;\\n}\\n\\n.borderwidth--medium {\\n  border-width: 2px;\\n}\\n\\n.borderwidth--large {\\n  border-width: 3px;\\n}\\n\\n.borderwidth--xlarge {\\n  border-width: 4px;\\n}\\n\\n.shadow--xsmall {\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n}\\n\\n.shadow--small {\\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\\n}\\n\\n.shadow--medium {\\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\\n}\\n\\n.shadow--large {\\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\\n}\\n\\n.shadow--xlarge {\\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\\n}\\n\\n.borderstyle--dashed {\\n  border-style: dashed;\\n}\\n\\n.borderstyle--dotted {\\n  border-style: dotted;\\n}\\n\\n.borderstyle--double {\\n  border-style: double;\\n}\\n\\n.borderstyle--none {\\n  border-style: none;\\n}\\n\\n.borderstyle--solid {\\n  border-style: solid;\\n}\\n\\n.onlyborder--top {\\n  border-bottom: none;\\n  border-left: none;\\n  border-right: none;\\n}\\n\\n.onlyborder--right {\\n  border-bottom: none;\\n  border-left: none;\\n  border-top: none;\\n}\\n\\n.onlyborder--bottom {\\n  border-left: none;\\n  border-right: none;\\n  border-top: none;\\n}\\n\\n.onlyborder--left {\\n  border-bottom: none;\\n  border-right: none;\\n  border-top: none;\\n}\\n\\n.noborder--top {\\n  border-top: none;\\n}\\n\\n.noborder--right {\\n  border-right: none;\\n}\\n\\n.noborder--bottom {\\n  border-bottom: none;\\n}\\n\\n.noborder--left {\\n  border-left: none;\\n}\\n\\n.MultipleSelectionButton-label {\\n  display: block;\\n}\\n\\n.ButtonCheckboxInp {\\n  height: 34px;\\n  margin-right: 6px;\\n  padding: 0;\\n  position: relative;\\n}\\n\\n.ButtonCheckboxInp.isFullWidth {\\n  display: block;\\n}\\n\\n.ButtonCheckboxInput_CheckBox {\\n  left: 8px;\\n  position: absolute;\\n  top: 8px;\\n}\\n\\n.ButtonCheckboxInp.active > .ButtonCheckboxInput_CheckBox ~ label:hover,\\n.ButtonCheckboxInp.active > .ButtonCheckboxInput_CheckBox ~ label {\\n  background-color: #0da2aa;\\n  border: 1px solid #0da2aa;\\n  border-radius: 5px;\\n  color: #fff;\\n}\\n\\n.ButtonCheckboxInp > .ButtonCheckboxInput_CheckBox ~ label {\\n  background-color: #fff;\\n  border: 1px solid #0da2aa;\\n  border-radius: 5px;\\n  color: #0da2aa;\\n  cursor: pointer;\\n  font-size: 14px;\\n  padding: 6px 10px 6px 35px;\\n}\\n\\n.ButtonCheckboxInp.isFullWidth > .ButtonCheckboxInput_CheckBox ~ label {\\n  display: inline-block;\\n  width: 100%;\\n}\\n\\n.ButtonCheckboxInp > .ButtonCheckboxInput_CheckBox ~ label:hover {\\n  background-color: #e6f3f5;\\n  color: #0da2aa;\\n}\\n\\n.ButtonCheckboxInp.disabled > .ButtonCheckboxInput_CheckBox:hover,\\n.ButtonCheckboxInp.disabled > .ButtonCheckboxInput_CheckBox ~ label {\\n  background: #e9e9e9;\\n  color: #73929f;\\n  cursor: default;\\n  pointer-events: none;\\n}\\n\\n.ButtonCheckboxInp.disabled > .ButtonCheckboxInput_CheckBox ~ label {\\n  background: #e9e9e9;\\n  color: #73929f;\\n  cursor: default;\\n  pointer-events: none;\\n}\\n\\n.SpinnerInput_Container .SpinnerInput input {\\n  background: #fff;\\n  border: solid 1px #bdbdbd;\\n  border-left: none;\\n  border-radius: 0;\\n  border-right: none;\\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15);\\n  height: 36px;\\n  text-align: center;\\n  white-space: nowrap;\\n  width: 36px;\\n}\\n\\ninput::-webkit-outer-spin-button,\\ninput::-webkit-inner-spin-button {\\n  -webkit-appearance: none;\\n  margin: 0;\\n}\\n\\n.SpinnerInput_Container > a {\\n  background-color: #fff;\\n  border: 1px solid #c8d8dc;\\n  cursor: pointer;\\n  display: inline-block;\\n  height: 36px;\\n  -webkit-transition: none;\\n  width: 36px;\\n}\\n\\n.SpinnerInput_Container > a[disabled] {\\n  background-color: #e9e9e9;\\n  color: #73929f;\\n  cursor: default;\\n}\\n\\n.SpinnerInput_Container > a:not([disabled]):hover {\\n  background-color: #e6f3f5;\\n}\\n\\n.SpinnerInput_Container > a:not([disabled]):active {\\n  background-color: #0da2aa;\\n  color: #fff;\\n}\\n\\n.SpinnerInput_Container > a.Plus:before,\\n.SpinnerInput_Container > a.Minus:before {\\n  display: block;\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 22px;\\n  line-height: 36px;\\n  text-align: center;\\n}\\n\\n.SpinnerInput_Container .Minus {\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.SpinnerInput_Container .Minus:before {\\n  content: \\\"\\\\e68f\\\";\\n}\\n\\n.SpinnerInput_Container .Plus {\\n  border-radius: 0 3px 3px 0;\\n}\\n\\n.SpinnerInput_Container .Plus:before {\\n  content: \\\"\\\\e698\\\";\\n}\\n\\n.SpinnerInput_Container > a[disabled] {\\n  background-color: #e9e9e9;\\n  color: #73929f;\\n  cursor: default;\\n}\\n\\n.SpinnerInput_Container > a:not([disabled]):hover {\\n  background-color: #e6f3f5;\\n}\\n\\n.SpinnerInput_Container > a:not([disabled]):active {\\n  background-color: #0da2aa;\\n  color: #fff;\\n}\\n\\n.SpinnerInput_Container > a.Plus:before,\\n.SpinnerInput_Container > a.Minus:before {\\n  display: block;\\n  font-family: Sapphire-Icon-Font;\\n  font-size: 26px;\\n  line-height: 36px;\\n  text-align: center;\\n}\\n\\n.SpinnerInput_Container .Minus {\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.SpinnerInput_Container .Minus:before {\\n  content: \\\"\\\\e68f\\\";\\n}\\n\\n.SpinnerInput_Container .Plus {\\n  border-radius: 0 3px 3px 0;\\n}\\n\\n.SpinnerInput_Container .Plus:before {\\n  content: \\\"\\\\e698\\\";\\n}\\n\\n.FA .SpinnerInput_Container .SpinnerInput input.Mandatory,\\n.AR .SpinnerInput_Container .SpinnerInput input.Mandatory {\\n  border-right: none;\\n}\\n\\n.tablet .SpinnerInput_Container .Plus,\\n.tablet .SpinnerInput_Container .Plus:hover,\\n.tablet .SpinnerInput_Container .Minus,\\n.tablet .SpinnerInput_Container .Minus:hover,\\n.phone .SpinnerInput_Container .Plus,\\n.phone .SpinnerInput_Container .Plus:hover .phone .SpinnerInput_Container .Minus,\\n.phone .SpinnerInput_Container .Minus:hover {\\n  text-decoration: none;\\n}\\n\\n.SegmentedControl {\\n  margin-bottom: 10px;\\n}\\n\\n.SegmentedControl.NoMargin {\\n  margin: 0;\\n}\\n\\n.SegmentedControlItem {\\n  display: inline-block;\\n  font-size: 13px;\\n  margin-left: -1px;\\n  min-height: 28px;\\n  overflow: hidden;\\n  position: relative;\\n  vertical-align: top;\\n}\\n\\n.FA .SegmentedControlItem,\\n.AR .SegmentedControlItem {\\n  border-left: 1px solid #0da2aa;\\n  border-right: solid 1px #0da2aa;\\n  margin-right: -1px;\\n}\\n\\n.Vertical .SegmentedControlItem {\\n  display: block;\\n  margin-top: 5px;\\n}\\n\\n.Vertical .SegmentedControlItem,\\n.SegmentedControlItem:first-child {\\n  border-bottom-left-radius: 5px;\\n  border-top-left-radius: 5px;\\n  margin-left: 0;\\n}\\n\\n.FA .Vertical .SegmentedControlItem,\\n.FA .SegmentedControlItem:first-child,\\n.AR .Vertical .SegmentedControlItem,\\n.AR .SegmentedControlItem:first-child {\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 5px;\\n  border-left: none;\\n  border-right: solid 1px #0da2aa;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 5px;\\n}\\n\\n.Vertical .SegmentedControlItem,\\n.SegmentedControlItem:last-child {\\n  border-bottom-right-radius: 5px;\\n  border-top-right-radius: 5px;\\n}\\n\\n.FA .Vertical .SegmentedControlItem,\\n.FA .SegmentedControlItem:last-child,\\n.AR .Vertical .SegmentedControlItem,\\n.AR .SegmentedControlItem:last-child {\\n  border-bottom-left-radius: 5px;\\n  border-bottom-right-radius: 0;\\n  border-left: solid 1px #0da2aa;\\n  border-top-left-radius: 5px;\\n  border-top-right-radius: 0;\\n}\\n\\n.SegmentedControl input {\\n  left: -20px;\\n  margin: 0 5px 0 0;\\n  opacity: 0;\\n  padding: 0;\\n  position: absolute;\\n}\\n\\n.FA .SegmentedControl input,\\n.AR .SegmentedControl input {\\n  left: auto;\\n  right: -20px;\\n}\\n\\n.SegmentedControlItem label {\\n  background-color: rgb(255, 255, 255);\\n  cursor: pointer;\\n  display: inline-block;\\n  line-height: 34px;\\n  min-width: 54px;\\n  padding: 0 15px;\\n  text-align: center;\\n  vertical-align: top;\\n  width: 100%;\\n}\\n\\n.SegmentedControlItem label:hover,\\n.SegmentedControlItem label:focus {\\n  background: #e6f3f5;\\n}\\n\\n.SegmentedControlItem > input[type=radio]:checked ~ label,\\n.SegmentedControlItem > input[type=checkbox]:checked ~ label {\\n  background: #0da2aa;\\n  color: #fff;\\n}\\n\\n.SegmentedControlItem > input:disabled ~ label,\\n.SegmentedControlItem > input[disabled] ~ label,\\n.SegmentedControlItem > input[readonly] ~ label {\\n  background: #e9e9e9;\\n  color: #73929f;\\n  cursor: default;\\n}\\n\\n.SegmentedControlItem label .icon {\\n  font-size: 18px;\\n  line-height: 35px;\\n  padding-right: 5px;\\n}\\n\\n/*SpinnerVertical*/\\n.SpinnerInput_ContainerVertical .SpinnerInputVertical {\\n  display: table;\\n}\\n\\n.SpinnerInput_ContainerVertical .SpinnerInputVertical input[type=number] {\\n  box-sizing: border-box;\\n  text-align: center;\\n  width: 52px;\\n}\\n\\n.SpinnerInput_ContainerVertical .SpinnerInputVertical .inputVertical {\\n  white-space: nowrap;\\n}\\n\\n.SpinnerInput_ContainerVertical .MinusVertical:before {\\n  content: \\\"\\\\e610\\\";\\n}\\n\\n.SpinnerInput_ContainerVertical .MinusVertical.DisabledSpin {\\n  color: #d6d6d6;\\n  pointer-events: none;\\n}\\n\\n.SpinnerInput_ContainerVertical .PlusVertical:before {\\n  content: \\\"\\\\e611\\\";\\n}\\n\\n.SpinnerInput_ContainerVertical .MinusVertical:before,\\n.SpinnerInput_ContainerVertical .PlusVertical:before {\\n  display: block;\\n  font-family: Sapphire-Icon-Font;\\n  font-weight: 400;\\n  line-height: 30px;\\n  text-align: center;\\n}\\n\\n.SpinnerInput_ContainerVertical > a {\\n  cursor: pointer;\\n  display: inline-block;\\n  min-width: 52px;\\n}\\n\\n.SpinnerInput_ContainerVertical > a[disabled] {\\n  color: #d6d6d6;\\n  pointer-events: none;\\n}\\n\\n/* SelectSystem */\\n.Page .select2.select2-container.select2-container--disabled .select2-selection {\\n  background-color: #f5f5f5;\\n}\", \"\"]);\n17 | // Exports\n18 | /* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n19 | ");

/***/ }),

/***/ "./src/components/03-elements/script.js":
/***/ (function() {

/* Component Textarea */
(function($, window, document, SapphireWidgets) {
  
  $(document).ready(function() {
    CallTextAreaAutoResize();
  });

  window.CallTextAreaAutoResize = function prepareTextAreaAutoResize(TextAreaId){
    
    if(TextAreaId==undefined){
      var textAreaInput = $('textarea');
    }else{
      var textAreaInput = $('#'+TextAreaId);
    }
    textAreaInput.each(function(){
      $(this).attr('rows',2);

      $(this)[0].style.minHeight = '70px';
      resizeTextArea($(this)[0]);
    });

    textAreaInput.on('input', function(){
      resizeTextArea($(this)[0]);
    });
  }

  function resizeTextArea ($textAreaInput) {
    if($textAreaInput.scrollHeight == 0){
      $textAreaInput.style.height = '70px';
    }else{
      $textAreaInput.style.height = 'auto';
      $textAreaInput.style.height = $textAreaInput.scrollHeight + 'px';
    }
  }
})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/country-phone/scripts.js":
/***/ (function() {

/* Component CountryPhone */
(function($, window, SapphireWidgets) {
	const create = config => {
		const $element = document.querySelector(`#${config.widgetId}`);
		const additionalValidations = config.additionalValidations;

		const countryPhoneInput = window.intlTelInput($element, {
			initialCountry: config.initialCountry,
			preferredCountries: config.preferredCountries,
			separateDialCode: config.separateDialCode,
			nationalMode: config.nationalMode,
			autoPlaceholder: config.autoPlaceholder ? 'polite' : false,
			formatOnDisplay: false,
			utilsScript: '/V3_Pat/js/utils.js',
		});

		const $input = $(`#${config.widgetId}`);

		$input.on('keyup', function(e) {
			if ($input.val() === '+' || $input.val() === '') {
				countryPhoneInput.setCountry(config.initialCountry);
			}
		});

		$input.on('keypress', function(e) {
			const selectedCountry = countryPhoneInput.getSelectedCountryData();
			const filter = additionalValidations.find(i => i.CountryPhoneValidations.CountryCode === selectedCountry.iso2);
			const value = $input.val().trim();

			let isValid = true;

			if (filter) {
				const withouCode = value.replace(`+${selectedCountry.dialCode}`, '');

				isValid = withouCode.trim().length + 1 <= filter.CountryPhoneValidations.PhoneLength;
			}

			if (value === `+${selectedCountry.dialCode}`) {
				$input.val(`+${selectedCountry.dialCode} `);
			}

			return (
				isValid &&
				(e.metaKey || // cmd/ctrl
				e.which <= 0 || // arrow keys
				e.which == 8 || // delete key
					(!value.length && e.key === '+') ||
					/[0-9]/.test(String.fromCharCode(e.which)))
			);
		});

		$element.addEventListener('countrychange', function() {
			onChangeCountry();
		});

		const onChangeCountry = () => {
			const $selectedCountryInput = $(`#${config.selectedCountryInput}`);
			const selectedCountry = countryPhoneInput.getSelectedCountryData();

			$selectedCountryInput.val(selectedCountry.iso2);
			$selectedCountryInput.trigger('change');
		};

		$(document).ready(function() {
			onChangeCountry();
		});
	};

	SapphireWidgets.CountryPhone = {
		create,
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/datetime-range-picker/scripts.js":
/***/ (function() {

/* Component DateTimeRangePicker */
(function ($, window, document, SapphireWidgets) {
	var allDateTimeRangePickers = [];

	var create = function (config) {
		for (var i = 0; i < allDateTimeRangePickers.length; i++) {
			if (allDateTimeRangePickers[i].config.widgetId === config.widgetId) {
				allDateTimeRangePickers.splice(i, 1);
			}
		}
		window[config.widgetId] = new DateTimeRangePicker(config);
		allDateTimeRangePickers.push(window[config.widgetId]);
	};

	var DateTimeRangePicker = function (config) {
		console.log('config', config);

		this.config = config;
		this.currentLocale = config.currentLocale;

		this.$widget = $('#' + config.widgetId);
		this.$widget.addClass('DateTimeRangePicker');
		this.$clear = this.$widget.find('.DateTimeRangePicker-clear');
		this.$label = this.$widget.find('.DateTimeRangePicker-label');

		this.isEmptyHour = false;

		if (this.config.attachToInput) {
			this.$widget.addClass('attachedInput');
			this.$model = this.$widget.find('.DateTimeRangePicker-placeholder input[type="text"]');
			this.$model.attr('tabIndex', -1);
		}

		this.$input = $('#' + config.inputId);

		if (!this.config.allowsTyping) {
			this.$input.prop('readonly', true);
		}

		// Just to force kuwait arabic version
		if (this.currentLocale === 'AR') {
			moment.locale('ar-kw');
		} else {
			moment.locale(config.currentLocale);
		}

		var options = {};
		options.startDate = config.startDate;
		options.singleDatePicker = config.singleDatePicker;
		options.autoApply = config.autoApply;
		options.autoUpdateInput = config.autoUpdateInput;
		options.timePicker = config.timePicker;
		options.timePicker24Hour = config.timePicker24Hour;
		options.timePickerIncrement = config.timePickerIncrement;
		options.showDropdowns = config.hasDropdowns; // Month/Year Picker
		options.drops = config.drops;
		options.opens = config.isRTL && config.opens != 'center' ? 'left' : config.opens;

		var stringConnection = '[, ' + config.dateTimeStringConnection + ']';

		if (config.timePicker) {
			//if (!this.config.attachToInput) //changed by Diogo Ribeiro so date picker has a placeholder even if its attached to input (otherwise it never showed)
			this.$input.prop('placeholder', 'DD-MM-YYYY HH:MM');

			if (options.timePicker24Hour) {
				this.config.formatInput = `${this.config.systemDateFormat} HH:mm`;
				this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' + stringConnection + ' HH:mm' : 'D MMM' + stringConnection + ' HH:mm';
			} else {
				this.config.formatInput = `${this.config.systemDateFormat} hh:mm A`;
				this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' + stringConnection + ' hh:mm A' : 'D MMM' + stringConnection + ' hh:mm A';
			}
		} else {
			this.$widget.addClass('onlyDate');

			//if (!this.config.attachToInput)
			this.$input.prop('placeholder', 'DD-MM-YYYY');

			this.config.formatInput = this.config.systemDateFormat;
			this.config.formatLabel = this.config.hasYearWhenText ? 'D MMM YYYY' : 'D MMM';
		}

		if (!config.singleDatePicker) {
			this.$widget.addClass('rangeDates');
		}

		this.config.formatLabel = this.config.hasWeekDayNameWhenText ? 'ddd[, ]' + this.config.formatLabel : this.config.formatLabel;

		options.locale = {
			direction: config.isRTL ? 'rtl' : 'ltr',
			format: this.config.formatInput,
			cancelLabel: this.config.cancelLabel,
			applyLabel: this.config.applyLabel,
		};

		if (config.hasTextTrigger) {
			this.$widget.addClass('textTrigger');
		}

		const nulldDates = ['01-01-1900 00:00:00', '1900-01-01 00:00:00'];

		if (config.endDate && !nulldDates.some((i) => i === config.endDate)) {
			options.endDate = config.endDate;
		}

		if (config.maxDate && !nulldDates.some((i) => i === config.maxDate)) {
			options.maxDate = config.maxDate;
		}

		if (config.minDate && !nulldDates.some((i) => i === config.minDate)) {
			options.minDate = config.minDate;
		}

		if (config.DisabledWeekDays) {
			var disabledWeekDays = config.DisabledWeekDays.split(',');
			options.isInvalidDate = function (date) {
				return disabledWeekDays.includes(moment(date).day().toString());
			};
		}

		var _this = this;

		this.$input.daterangepicker(options, function (startDate, endDate, label) {
			// after a selection is made
			if (_this.config.attachToInput) {
				let format = '';

				if (_this.config.timePicker) {
					format = `${_this.config.systemDateFormat} HH:mm`;
				}

				if (_this.config.singleDatePicker) {
					if (_this.config.timePicker) _this.$model.val(startDate.format(format));
					else _this.$model.val(startDate.format(_this.config.systemDateFormat));
				} else {
					let start, end;

					if (_this.config.timePicker) {
						start = startDate.format(format);
						end = endDate.format(format);
					} else {
						start = startDate.format(_this.config.systemDateFormat);
						end = endDate.format(_this.config.systemDateFormat);
					}

					_this.$model.val(`${start}  ·  ${end}`);
				}

				_this.$model.trigger('change');
			}

			const initialValue = _this.$input.val();
			const allowsMMYY = _this.config.allowsTyping && _this.config.allowsTypeMMYY && _this.config.singleDatePicker;

			if (allowsMMYY && initialValue.length === 4) {
				_this.picker.setStartDate(moment(`01${initialValue}`, 'DDMMYY'));

				if (_this.config.attachToInput) {
					let format = '';

					if (_this.config.timePicker) format = `${_this.config.systemDateFormat} HH:mm`;
					else format = _this.config.systemDateFormat;

					_this.$model.val(_this.picker.startDate.format(format));
					_this.$model.trigger('change');
				}
			}
		});

		// now we have a proper instance
		this.picker = this.$input.data('daterangepicker');

		this.$calendar = $(this.picker.container);

		if (!!this.config.cssClass) {
			this.$calendar.addClass(this.config.cssClass);
		}

		this.$timeHolder = this.$calendar.find('.calendar-time');
		this.$buttonsHolder = this.$calendar.find('.drp-buttons');

		if (this.config.autoApply) {
			this.$buttonsHolder.hide();
		}

		if (config.isEmptyStartDate) {
			this.clear(false);
		} else if (config.isEmptyStartHour) {
			this.isEmptyHour = true;
			this.updateLabeling();
		} else {
			this.updateLabeling();
		}

		if (config.enabled) {
			this.nativeEvents();
			this.customEvents();
		} else {
			this.$clear.hide();
			this.$input.off('click focus keydown keyup');
		}

		if (this.config.attachToInput) {
			this.handleCustomValidation();
		}
	};

	DateTimeRangePicker.prototype.handleCustomValidation = function () {
		// TO DO
	};

	DateTimeRangePicker.prototype.nativeEvents = function () {
		const _this = this;

		this.$input.on('showCalendar.daterangepicker', function (event, picker) {
			if (_this.config.hasGoToday) {
				_this.$calendar
					.find('.calendar-table thead tr')
					.eq(0)
					.after('<tr><td colspan="7" class="DateTimeRangePicker-calendar-gotoday">' + _this.config.goTodayLabel + '</td></tr>');
				if (_this.config.drops === 'up') {
					_this.$calendar.css('top', _this.$calendar.offset().top - 24);
				}
			}
			_this.handleViewportPosition();

			if (!_this.config.singleDatePicker) {
				$('.drp-selected').each(function () {
					let text = $(this).text();
					text = text.replace(/-/gi, '·');

					$(this).text(text);
				});
			}
		});

		this.$input.on('show.daterangepicker', function (event, picker) {
			if (_this.config.timePicker && _this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
				if (_this.isEmptyHour) {
					_this.$timeHolder.css('opacity', 0.5);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
				} else {
					_this.$timeHolder.css('opacity', 1);
					_this.$calendar.find('.DateTimeRangePicker-calendar-clear').removeClass('disabled');
				}
			}
			_this.handleViewportPosition();
			SapphireWidgets.DateTimeRangePicker.openedWidgetId = _this.config.widgetId;

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				const oldBodyHeight = $('body')[0].scrollHeight + 8;
				const calendarSafeHeight = _this.$calendar.outerHeight() + 32;

				const newHeight = oldBodyHeight > calendarSafeHeight ? oldBodyHeight : calendarSafeHeight;

				$('<div class="CalendarPopup__Overlay"></div>').insertAfter(_this.$calendar);

				$(window.frameElement).animate({ minHeight: newHeight });
				$('body').animate({ minHeight: newHeight });
			}
		});

		this.$input.on('hide.daterangepicker', function (event, picker) {
			// ONYX20792 Added START
			if (_this.config.autoApply && _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model.trigger('change');
			}
			// ONYX20792 END

			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').remove();
			_this.updateParentIframe();

			if (_this.config.cssClass === 'CalendarPopup' && window.frameElement) {
				$(window.frameElement).css({ minHeight: 'unset' });
				$('body').css({ minHeight: 'unset' });

				$('.CalendarPopup__Overlay').remove();
			}
		});

		this.$input.on('cancel.daterangepicker', function (event, picker) {});

		this.$input.on('outsideClick.daterangepicker', function (event, picker) {});

		this.$input.on('timechanged.daterangepicker', function (event, picker) {
			_this.isEmptyHour = false;
			_this.$timeHolder.css('opacity', 1);
			if (_this.config.hasClearHour) {
				_this.$calendar.find('.calendar-time').append('<span class="DateTimeRangePicker-calendar-clear"></span>');
			}
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('clickDate.daterangepicker', function (event, picker) {
			if (_this.config.autoApply) {
				_this.$clear.removeClass('disabled');
				_this.updateLabeling();
				_this.sendNotification();
			}
		});

		this.$input.on('apply.daterangepicker', function (event, picker) {
			_this.updateLabeling(); // ONYX20792 This line was moved here. Previously it was right before _this.sendNotification().
			if (_this.config.attachToInput) {
				_this.$model.trigger('change'); //same fix as below for when the date is the same/today, when input is attached it seems we also need this extra step
			}
			_this.$input.trigger('change'); // Fix to call the change when the date is the same/today
			_this.$clear.removeClass('disabled');
			_this.sendNotification();
		});
	};

	DateTimeRangePicker.prototype.customEvents = function () {
		var _this = this;
		this.$label.off('click').on('click', function (event) {
			_this.picker.toggle();
		});
		this.$clear.off('click').on('click', function (event) {
			_this.clear();
			_this.picker.hide();
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-clear', function () {
			if (_this.config.timePicker24Hour) {
				_this.$calendar.find('.hourselect').val('0').trigger('change');
			} else {
				_this.$calendar.find('.hourselect').val('12').trigger('change');
			}
			_this.$calendar.find('.minuteselect').val('0').trigger('change');
			_this.$calendar.find('.ampmselect').val('AM').trigger('change');
			_this.isEmptyHour = true;
			_this.$timeHolder.css('opacity', 0.5);
			_this.$calendar.find('.DateTimeRangePicker-calendar-clear').addClass('disabled');
		});
		this.$calendar.on('click', '.DateTimeRangePicker-calendar-gotoday', function () {
			_this.picker.setStartDate(moment());
			_this.picker.setEndDate(moment());

			_this.picker.hide();

			if (!_this.config.autoUpdateInput || _this.config.hasTextTrigger || _this.config.attachToInput) {
				_this.updateLabeling();
				_this.$model && _this.$model.trigger('change');
			}

			_this.sendNotification();
		});

		if (this.config.attachToInput) {
			// Nothing
		} else {
			this.$input.on('click', function () {
				window.setTimeout(function () {
					_this.updateParentIframe();
				}, 50);
			});
		}
	};

	DateTimeRangePicker.prototype.updateLabeling = function () {
		var labelMask = this.config.formatLabel;
		var inputMask = this.config.formatInput;

		if (moment(this.picker.startDate).isSame(moment(), 'day')) {
			if (labelMask.includes('D MMM YYYY')) {
				labelMask = labelMask.replace('D MMM YYYY', '[Today,] D MMM YYYY');
			} else if (labelMask.includes('D MMM')) {
				labelMask = labelMask.replace('D MMM', '[Today]');
			}
		}
		if (this.isEmptyHour) {
			labelMask = labelMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');
			inputMask = inputMask.replace('hh:mm A', '[--:--]').replace('HH:mm', '[--:--]');

			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));

				if (this.config.timePicker) {
					this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
				} else {
					this.$input.val(this.picker.startDate.format(this.config.systemDateFormat));
				}
			} else {
				this.$input.val(this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`));
			}
		} else {
			if (this.config.hasTextTrigger) {
				this.$label.html(this.config.prefixTextTrigger + this.picker.startDate.format(labelMask));
				this.$input.val(this.picker.startDate.format(inputMask));
			} else {
				if (this.config.attachToInput) {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(inputMask));
						if (this.config.timePicker) {
							this.$model && this.$model.val(this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`));
						} else {
							this.$model && this.$model.val(this.picker.startDate.format(this.config.systemDateFormat));
						}
					} else {
						const startDate = this.picker.startDate.format(inputMask);
						const endDate = this.picker.endDate.format(inputMask);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				} else {
					if (this.config.singleDatePicker) {
						this.$input.val(this.picker.startDate.format(this.config.formatInput));
					} else {
						let startDate = this.picker.startDate.format(this.config.formatInput);
						let endDate = this.picker.endDate.format(this.config.formatInput);

						this.$input.val(`${startDate}  ·  ${endDate}`);
					}
				}
			}
		}
	};

	DateTimeRangePicker.prototype.handleViewportPosition = function () {
		if (window.frameElement && ($(window.frameElement.parentElement).hasClass('tooltipster-content') || $(window.frameElement.parentElement).hasClass('os-internal-ui-dialog-content'))) {
			return;
		}

		if (!this.isInViewport()) {
			var coords = this.$calendar[0].getBoundingClientRect();
			if (this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().top < 0) {
				var point = window.scrollY + coords.bottom + this.$input.height() + 7;
				this.$calendar.removeClass('drop-up').addClass('drop-down').css('top', point);
			} else if (!this.$calendar.hasClass('drop-up') && this.$calendar[0].getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)) {
				if (!window.frameElement || coords.height + this.$input.height() + 7 < document.body.offsetHeight) {
					var point = window.scrollY + coords.top - coords.height - this.$input.height() - 7;
					this.$calendar.addClass('drop-up').css('top', point);
				}
			}
		}
	};

	DateTimeRangePicker.prototype.isInViewport = function () {
		var bounding = this.$calendar[0].getBoundingClientRect();
		return bounding.top >= 0 && bounding.bottom <= (window.innerHeight + 5 || document.documentElement.clientHeight + 5);
	};

	DateTimeRangePicker.prototype.clear = function (sendNotification) {
		this.picker.setStartDate(moment());
		this.picker.setEndDate(moment());
		this.isEmptyHour = false;
		this.$clear.addClass('disabled');
		if (this.config.hasTextTrigger) {
			this.$label.html('-- -- --');
		} else {
			this.$input.val('');
		}
		if (sendNotification || sendNotification == undefined) {
			this.sendNotification(false);
		}
	};

	DateTimeRangePicker.prototype.show = function () {
		this.picker.show();
	};

	DateTimeRangePicker.prototype.hide = function () {
		this.picker.hide();
	};

	DateTimeRangePicker.prototype.cancel = function () {
		this.picker.clickCancel();
	};

	DateTimeRangePicker.prototype.sendNotification = function (sendDate) {
		if (this.$widget.hasClass('attachedInput')) {
			this.$input.trigger('change');

			return false;
		}

		if (sendDate || sendDate == undefined) {
			if (this.isEmptyHour) {
				OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, this.picker.startDate.format(`${this.config.systemDateFormat} [00:00:00]`) + '|' + this.isEmptyHour);
			} else {
				if (this.config.timePicker) {
					OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, this.picker.startDate.format(`${this.config.systemDateFormat} HH:mm:ss`) + '|' + this.isEmptyHour);
				} else {
					OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, this.picker.startDate.format(this.config.systemDateFormat) + '|' + this.isEmptyHour);
				}
			}
		} else {
			OsNotifyWidget(this.config.dateTimeRangePickerFakeNotifyId, 'null|true');
		}
	};

	DateTimeRangePicker.prototype.updateParentIframe = function () {
		if (typeof SapphireWidgets.ResizeParentIframe === 'object') {
			SapphireWidgets.ResizeParentIframe.resize();
		}
		if ($('.Page.LayoutPopup').length === 1) {
			SapphireWidgets.LayoutPopup.redrawDialogWindow();
		}
	};

	SapphireWidgets.DateTimeRangePicker = {
		create: create,
		all: function () {
			return allDateTimeRangePickers;
		},
	};
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/dropzone/dropzone.js":
/***/ (function() {

/* Component Dropzone */
(function ($, window, document, SapphireWidgets) {
	const create = function (config) {
		window.Dropzone.autoDiscover = false;

		$(document).ready(function () {
			bindEvents(config);

			const myDropzone = new window.Dropzone(config.hiddenInputContainer, {
				...config,
				init: function () {
					let prevFile;

					const filesList = config.filesList ? config.filesList.split(',') : [];

					for (const item of filesList) {
						const mockFile = { name: item, size: 12345678 };

						this.emit('addedfile', mockFile);
						this.emit('complete', mockFile);
						this.files.push(mockFile);

						$(`${config.hiddenInputContainer} .dz-filename`).attr('title', item);

						prevFile = mockFile;
					}

					if (+config.maxFiles === 1 && config.isReplacePrevious) {
						this.on('addedfile', function () {
							if (prevFile !== undefined) {
								this.removeFile(prevFile);
							}
						});
					}

					const $notifyInput = $(`#${config.notifyInputId}`);

					this.on('success', function (file, responseText) {
						prevFile = file;

						$(`#${config.notifyInputId} .dz-filename`).attr('title', file.name);
						$notifyInput.val('OK:' + responseText);
						$notifyInput.trigger('change');
					});

					this.on('error', function (file, responseText) {
						prevFile = file;

						$notifyInput.val('ER:' + responseText);
						$notifyInput.trigger('change');
					});
				},
			});
		});
	};

	const bindEvents = function (config) {
		$(`#${config.widgetId} .UploadMessageClass`).on('click', () => {
			$(`#${config.widgetId} .dz-clickable`).click();
		});
	};

	SapphireWidgets.Dropzone = { create };
})(jQuery, window, document, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/hour-picker/scripts.js":
/***/ (function() {

/* Component HourPicker */
(function($, window, SapphireWidgets) {
	class HourPicker {
		constructor(config) {
			// Options used by jQuery Timerpicker (External Lib)
			this.options = {
				...config,
			};

			SapphireWidgets.HourPicker.allIntances.push(config.widgetId);

			this.onComponentInit();
		}

		isComponentValid() {
			let valid = true;
			let message = `Component HourPicker (${this.options.widgetId}):`;
			let errors = '';

			if (this.$model.length && this.$model.length > 1) {
				errors = `${errors} - Needs one - and just one - Input element.`;
				valid = false;
			}

			if (!this.$model.length && this.$component.find('.HourPicker__Placeholder input').length) {
				errors = `${errors}\n - The Input element must be of type Text.`;
				valid = false;
			}

			if (!valid) console.error(`${message} ${errors}`);

			return valid;
		}

		setComponentPosition() {
			const $widget = $('.ui-timepicker-container');
			const labelLeft = this.$label.offset().left;
			const labelWidth = this.$label.width();
			const labelOuterWidth = this.$label.outerWidth();
			const widgetOuterWidth = $widget.outerWidth();
			const widgetMinWidth = +$widget.css('min-width').replace('px', '');
			const isOutsideWindow =
				labelLeft + labelOuterWidth > $(window).scrollLeft() + $(window).width() - widgetOuterWidth;

			$widget.css({
				left: () => {
					let value = labelLeft - (widgetMinWidth - labelWidth) / 2;

					if (isOutsideWindow) value = labelLeft + labelWidth - widgetOuterWidth;
					else if (value < 0) value = labelLeft;

					return value;
				},
			});
		}

		setElementClass(selector, className) {
			return className ? $(selector).addClass(className) : false;
		}

		defineTimeFormat() {
			let format = [];
			let amPm = '';

			format.push(this.options.is24hFormat ? 'HH' : 'hh');
			if (this.options.showMinutes) format.push('mm');
			if (this.options.showSeconds) format.push('ss');
			if (!this.options.is24hFormat) amPm = ' p';

			return `${format.join(':')}${amPm}`;
		}

		convertTime12to24(value) {
			const [time, modifier] = value.split(' ');
			let [hours, minutes = '00', seconds = '00'] = time.split(':');

			if (hours === '12') hours = '00';
			if (modifier === 'PM') hours = parseInt(hours, 10) + 12;

			return `${hours}:${minutes}:${seconds}`;
		}

		convertTimeFormatToMask(value = '') {
			return value.replace(/[a-zA-Z]+/g, '--');
		}

		onChangeEvent(value = '') {
			let model = '01-01-1900 00:00:00'; //i.e. null
			let label = this.convertTimeFormatToMask(this.options.timeFormat);

			if (value && !!value.trim()) {
				// This condition is correct, model always uses the 24h format
				model = this.options.is24hFormat ? value : this.convertTime12to24(value);
				label = value;
			}

			if (this.options.isNotifyEnabled) OsNotifyWidget(this.options.hourPickerFakeNotifyId, model);
			if (this.options.isTextTriggerable) this.$label.text(label);

			this.$model.val(model);
			this.$model.change();

			return;
		}

		onComponentInit() {
			this.$component = $(`#${this.options.widgetId}`);
			this.$model = this.$component.find('.HourPicker__Placeholder input[type="text"]');
			this.$input = this.$component.find('.HourPicker__Displayed .HourPicker__InputValue');
			this.$element = this.$input;

			this.options.timeFormat = this.defineTimeFormat();

			if (!this.isComponentValid()) return;
			else {
				const $container = this.$component;

				if (this.options.isTextTriggerable) {
					$container.addClass('HourPicker--textTrigger');

					this.$label = $container.find('.HourPicker__Displayed .HourPicker__LabelValue');
					this.$element = this.$label;

					this.$label.text(this.convertTimeFormatToMask(this.options.timeFormat));

					this.$label.on('click', () => {
						this.$label.timepicker().open();

						this.setComponentPosition();
					});
				}

				if (this.options.isClearable) {
					this.$buttonClear = $container.find('.HourPicker__Displayed .HourPicker__ButtonClear');

					this.$buttonClear.on('click', () => {
						this.$input.val('');
						this.onChangeEvent();
					});
				}

				this.$element.timepicker({
					...this.options,
					change: time => this.onChangeEvent(time ? $().timepicker.formatTime(this.options.timeFormat, time) : null),
				});

				this.setElementClass('.ui-timepicker-container', this.options.currentLocale === 'AR' ? 'rtl' : 'ltr');

				this.$input.prop('readonly', !this.options.isTypeEnabled);
				this.$input.prop('placeholder', this.options.timeFormat);
			}
		}
	}

	const create = config => {
		window[config.widgetId] = new HourPicker(config);
	};

	SapphireWidgets.HourPicker = {
		create,
		allIntances: [],
	};
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/confirmation-popup.js":
/***/ (function() {

/* Component ConfirmationPopup */
var _isInIframe = window.frameElement != undefined || false;
SapphireWidgets.ConfirmationPopup = {
	isAnyConfirmationOpened: function() {
		if (_isInIframe) {
			return window.top.$('body').hasClass('confirmation-opened') && window.top.$('.confirm-container:visible').length;
		} else {
			return $('body').hasClass('confirmation-opened') && $('.confirm-container:visible').length;
		}
	},

	toggleConfirm: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		if (!OsValidatorOnSubmit()) return;

		if (!this.isAnyConfirmationOpened()) {
			var _body = $('body');
			var _bodyJS = document.body;
			if (_isInIframe) {
				_body = window.top.$('body');
				_bodyJS = window.top.document.body;
			}

			_body.addClass('confirmation-opened');

			var _confirmId = 'confirm_' + _id;

			var _container = document.createElement('DIV');
			_container.setAttribute('id', _confirmId);
			_container.setAttribute('class', 'confirm confirm-wb');
			_container.setAttribute('confirm-trigger-elementid', _id);

			var _background = document.createElement('DIV');
			_background.setAttribute('class', 'confirm-background confirm-wb');
			_background.setAttribute('id', 'bg_' + _confirmId);
			_container.appendChild(_background);

			var _confirm = document.createElement('DIV');
			_confirm.setAttribute('class', 'confirm-container confirm-wb');
			_container.appendChild(_confirm);

			var _confirmTitle = document.createElement('DIV');
			_confirmTitle.setAttribute('class', 'confirm-title');
			var _title = document.createTextNode(_question);
			_confirmTitle.appendChild(_title);
			_confirm.appendChild(_confirmTitle);

			var _confirmMsg = document.createElement('DIV');
			_confirmMsg.setAttribute('class', 'confirm-message');

			_confirmMsg.innerHTML = _message; /* Set HTML to render the message HTML tags, similar to the Escape Content set as No. */
			_confirm.appendChild(_confirmMsg);

			var _confirmActions = document.createElement('DIV');
			_confirmActions.setAttribute('class', 'confirm-actions');
			_confirm.appendChild(_confirmActions);

			var _noBtnLnk = document.createElement('A');
			_noBtnLnk.setAttribute('class', 'Button Third MultiMarginRight10');
			_noBtnLnk.setAttribute('cancel-button', 'cancel-button');
			_noBtnLnk.setAttribute('ui', 'ConfirmNo1');
			if (_HasNotifyOnCancel == 'True') {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'document.getElementById("' +
							'iframe_' +
							_id +
							'").contentWindow.OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'OsNotifyWidget("' +
							_notifyId +
							'","CANCEL"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
							_confirmId +
							'");'
					);
				}
			} else {
				if (_isInIframe) {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				} else {
					_noBtnLnk.setAttribute(
						'onclick',
						'SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' + _confirmId + '");'
					);
				}
			}

			var _noBtn = document.createTextNode('No');
			_noBtnLnk.appendChild(_noBtn);
			_confirmActions.appendChild(_noBtnLnk);

			var _yesBtnLnk = document.createElement('A');
			_yesBtnLnk.setAttribute('class', 'Button SetAsValid Is_Default');
			_yesBtnLnk.setAttribute('cancel-button', '');
			_yesBtnLnk.setAttribute('ui', 'ConfirmYes1');

			if (_isInIframe) {
				_yesBtnLnk.setAttribute(
					'onclick',
					'document.getElementById("' +
						'iframe_' +
						_id +
						'").contentWindow.OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			} else {
				_yesBtnLnk.setAttribute(
					'onclick',
					'OsNotifyWidget("' +
						_notifyId +
						'","OK"); SapphireWidgets.ConfirmationPopup.closeConfirmPopup("' +
						_confirmId +
						'");'
				);
			}
			var _yesBtn = document.createTextNode('Yes');
			_yesBtnLnk.appendChild(_yesBtn);
			_confirmActions.appendChild(_yesBtnLnk);

			_confirm.appendChild(_confirmActions);

			_container.appendChild(_confirm);

			_bodyJS.appendChild(_container);

			if (_isInIframe) {
				window.top.$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					window.top
						.$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					window.top.$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);

				SapphireWidgets.RemoteAppointment.setModalMinimized();
			} else {
				$('#bg_' + _confirmId).fadeIn(140);
				setTimeout(function() {
					$('#' + _confirmId)
						.find('.confirm-container')
						.slideToggle(150);
					$('#' + _confirmId + ' [cancel-button]').focus();
				}, 100);
			}
		}
	},

	closeConfirmPopup: function(_confirmId) {
		$('body').removeClass('confirmation-opened');
		$('body').css('overflow-y', 'scroll');
		$('#bg_' + _confirmId).fadeOut(140);

		setTimeout(function() {
			$('#' + _confirmId)
				.find('.confirm-container')
				.slideUp(150);
			$('#' + _confirmId).remove();
		}, 100);
	},

	create: function(_id, _question, _message, _notifyId, _HasNotifyOnCancel) {
		$(document).ready(function() {
			$('#' + _id)
				.off('click')
				.on('click', function() {
					SapphireWidgets.ConfirmationPopup.toggleConfirm(_id, _question, _message, _notifyId, _HasNotifyOnCancel);
					if (_isInIframe) {
						window.frameElement.setAttribute('menu-id', _id);
						window.frameElement.setAttribute('id', 'iframe_' + _id);
					}
					return false;
				});
		});
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/panel/panel-by-id.js":
/***/ (function() {

/* Component PanelByID */
SapphireWidgets.PanelById = {
	isAnyPanelOpenedDeprecated: function() {
		return $('body').hasClass('PanelOpened');
	},

	toggleButton: function(id) {
		const $toggleButton = $(`#${id}`).parents('.ToggleButton').length
			? $(`#${id}`).parents('.ToggleButton')
			: $(`#${id}`);

		$toggleButton.click();
	},

	togglePanelById: function(Id) {
		const $toggleButton = $(`#${Id}`).parents('.ToggleButton');
		const $panel = $toggleButton.parent().children('.Panel');
		const $panelContainer = $panel.children('.PanelContainer');
		const $panelBackground = $panel.children('.PanelBackground');

		if (!this.isAnyPanelOpenedDeprecated()) {
			$('body').addClass('PanelOpened');
			$('body').css('overflow-y', 'hidden');

			$panel.show();
			$panelContainer.slideDown(200);

			try {
				if (typeof justDragged !== 'undefined') {
					if (justDragged == false) {
						$('.PanelByIdNew_PanelContainer')
							.css('margin-left', panelMarginLeft)
							.css('left', panelLeft)
							.addClass(panelArrowClass);
					}
				}
			} catch (e) {
				console.log(e);
			}

			setTimeout(function() {
				$panelBackground.fadeIn(80);

				$toggleButton.click();
			}, 50);
		} else {
			$panelContainer.slideUp(200);

			$panelBackground.fadeOut(80, () => {
				$toggleButton.click();

				$('body').css('overflow-y', 'scroll');
				$('body').removeClass('PanelOpened');

				$panel.hide();
			});
		}
	},
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/sapphire-popup/scripts.js":
/***/ (function() {

/* Component SapphirePopup */
var RichWidgets_Popup_Editor_notifyWidget;

(function ($, window, SapphireWidgets) {
	// Check if the widget is loaded inside an iFrame
	let isInsideIframe = window.frameElement != undefined || false;

	// Constants
	const POPUP_INITIAL_WIDTH = 300;
	const POPUP_INITIAL_HEIGHT = 100;
	const POPUP_WINDOW_INDEX = 4010;
	const POPUP_CLOSING_TAG = 'closing';
	const POPUP_CLOSING_VALUE = 'true';

	let POPUP_NOTIFY_WIDGET;
	let POPUP_PARENT_URL;

	const create = config => {
		if (config.ignoreIframe) isInsideIframe = false;

		$().ready(function ($) {
			const _id = config.linkId;
			const linkQuery = `#${config.linkId}`;
			let linkWidget;

			try {
				linkWidget = $(linkQuery).get(0);
			} catch (e) { }

			if (typeof linkWidget == 'undefined') {
				//Case the widget is inexistent or invisible, it will show no errors.
				return;
			}

			POPUP_PARENT_URL = config.parentUrl;

			const linkResult = getLinkHREF(linkWidget);
			const linkHref = linkResult[0];
			const isAButton = linkResult[1];

			if (typeof linkHref == 'undefined' || linkHref == '' || linkHref == '#' || linkHref.indexOf('javascript:') == 0) {
				try {
					window.OsHandleException(
						new Error('Popup link id must be the id of a Link or Button Widget with Method Navigate.'),
						outsystems.osErrorCodes.SystemJavascriptError,
						'Popup_Editor'
					);
				} catch (e) { }

				return;
			}

			// Remove the existing on-click event
			if (isAButton) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace('window.location.href=', 'return false;window.location.href=')
				);
			}

			// If there's a confirmation message, store in an attribute the result
			if (linkWidget.getAttribute('onclick') != null) {
				linkWidget.setAttribute(
					'onclick',
					linkWidget
						.getAttribute('onclick')
						.toString()
						.replace(
							'if( ret != true )',
							"$('" + linkQuery + "').get(0).setAttribute('confirmed', ret); if( ret != true )"
						)
				);
			}

			const clickHandler = function (event) {
				// The clickHandler event is registered in osjs and $ for compatibillity reasons, they must not run both for the same click.
				// Variable is set to false in resize function.
				if ($.data(event.target, 'os-internal-processing') == true) {
					return false;
				} else {
					$.data(event.target, 'os-internal-processing', true);
				}

				// Check if the clicked link is disabled
				if (linkWidget.getAttribute('disabled') != null) {
					var linkDisabled = linkWidget
						.getAttribute('disabled')
						.toString()
						.toLowerCase();

					if (linkDisabled == 'disabled' || linkDisabled.indexOf('true') != -1) {
						return false;
					}
				}

				if (linkWidget.getAttribute('confirmed') == 'false') return false;
				if (OsIsIE()) osFocusBackend.ClearFocusedElement();

				let popupDiv;
				let pleaseWaitDiv;

				const waitText = `<div style="margin-top: 36px;">${config.loadingMessage}</div>`;
				const imgHTML = '<div class="lds-ring"><div></div></div>';
				const loadingElement = `<div class="LayoutPopup-loading">${imgHTML} ${waitText}</div>`;
				const iFrameElement = `<iframe id="iframe_${_id}" width="100%" scrolling="no" height="100%" frameborder="0" src="javascript:void(0);"/>`;

				if (isInsideIframe) {
					let _div = document.createElement('DIV');
					_div.setAttribute('style', 'text-align: center; display: none;');
					_div.setAttribute('id', 'window_' + _id);
					window.top.document.body.appendChild(_div);

					popupDiv = window.top.$('#window_' + _id);
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				} else {
					popupDiv = $("<div style='text-align: center; display: none;'></div>").appendTo('body');
					popupDiv.append(iFrameElement);

					pleaseWaitDiv = popupDiv.prepend(loadingElement);
				}

				const loadTargetPage = function () {
					if (isInsideIframe) {
						window.top.POPUP_NOTIFY_WIDGET = config.notifyId;
						// Create a reference to the iframe object on the document parent
						window.top._iframePopup = window.frameElement.contentWindow;
					} else {
						window.top._iframePopup = window;
					}

					POPUP_NOTIFY_WIDGET = config.notifyId;
					RichWidgets_Popup_Editor_notifyWidget = config.notifyId;
					window.top._iframePopup.RichWidgets_Popup_Editor_notifyWidget = config.notifyId;

					// Load target page
					const ohref = getLinkHREF(linkWidget)[0];
					const rhref = ohref.replace(/(\?|&)_=.*?(&|$)/, '$1_=' + +new Date().now + '$2');
					const xhref = rhref + (rhref == ohref ? (rhref.indexOf('?') >= 0 ? '&' : '?') + '_=' + +new Date() : '');

					popupDiv.find('iframe').attr('src', xhref);

					(function (popupDiv) {
						popupDiv.find('iframe').load(function () {
							// After loading try to resize
							resize(popupDiv, _id, config.setWidth, config.setHeight, true, event);
						});
					})(popupDiv);

					popupDiv = null;
					pleaseWaitDiv = null;
				};

				openPopup(popupDiv, pleaseWaitDiv, loadTargetPage, event, config);

				return false;
			};

			$(linkQuery).click(clickHandler);

			SapphireWidgets.SapphirePopup.popupWidth = config.setWidth || POPUP_INITIAL_WIDTH;
		});
	};

	const resize = (divToPopup, _id, setWidth, setHeight, recenter, event) => {
		// Code to support old resize method Popup_Window_resize(setWidth, setHeight, recenter)
		if (typeof recenter == 'undefined') {
			recenter = setHeight;
			setHeight = setWidth;
			setWidth = divToPopup;

			if (isInsideIframe) {
				divToPopup = window.top.$('.os-internal-ui-dialog-content');
			} else {
				divToPopup = $('.os-internal-ui-dialog-content');
			}
		}

		// Resize must bail out immediately if the popup is marked as closing, and not start the animation.
		if ($.data(divToPopup.get(0), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
			return false;
		}

		let documentServer;
		let frameObj = divToPopup.find('iframe')[0];

		if (typeof frameObj == 'undefined') {
			frameObj = window.top.$('#iframe_' + _id)[0];
		}

		if (isInsideIframe) {
			documentServer = window.top.document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		} else {
			documentServer = document.location.href.replace(/(https?:\/\/[^\/]*).*/, '$1');
		}

		if (typeof frameObj != 'undefined') {
			const frameServer = frameObj.src.replace(/(https?:\/\/[^\/]*).*/, '$1');
			const sameOrigin = frameServer.toLowerCase() == documentServer.toLowerCase() || frameServer.indexOf('http') != 0;

			if (!sameOrigin && (setWidth == -1 || setHeight == -1)) {
				throw new Error('A Popup with a screen from a different server (or https) needs explicict width, height set.');
			}

			if (sameOrigin) {
				if (frameObj.contentDocument !== null || frameObj.contentWindow !== null) {
					var innerDoc = frameObj.contentDocument ? frameObj.contentDocument : frameObj.contentWindow.document;
					if (innerDoc.documentElement.scrollHeight == 0)
						// Strangely this event is also triggered on close
						return false;
				}
			}

			let oldHeight;
			if (isInsideIframe) {
				oldHeight = window.top
					.$(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			} else {
				oldHeight = $(divToPopup)
					.parents('.os-internal-Popup')
					.outerHeight();
			}

			let width = setWidth == -1 ? $(innerDoc).width() : setWidth;
			let height = setHeight == -1 ? $(innerDoc).height() : setHeight;

			var titleHeight;
			if (isInsideIframe) {
				titleHeight = window.top.$('.os-internal-ui-dialog-titlebar').height();
			} else {
				titleHeight = $('.os-internal-ui-dialog-titlebar').height();
			}

			// Verify if the parent window width is less than the pop-up window, if so set the responsive class on the iframe body (for responsive themes)
			if (window.innerWidth < width) {
				// only set the class if the origin is the same
				if (sameOrigin) {
					$(innerDoc)
						.find('body')
						.addClass('Responsive');
					width = window.innerWidth - 20; // 10px "padding" effect, to keep the popup look and feel on top of content
				}
			}

			// Fix issues with scrollbars
			if (setHeight == -1) {
				// IE7 needs a little more space to remove the scrollbars
				if ($.browser.msie) height = height + 1;
			}

			if (isInsideIframe) {
				window.top.$(divToPopup).height(height);
			} else {
				$(divToPopup).height(height);
			}

			//Hide ECT
			if (isInsideIframe) {
				window.top
					.$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = window.top.$(divToPopup).parents('.os-internal-Popup');
			} else {
				$(innerDoc)
					.find('.ECT_FeedbackContainer')
					.hide();
				var divPopupOuterWindow = $(divToPopup).parents('.os-internal-Popup');
			}

			var animateFinal = {};

			if (setHeight == -1) {
				var oldTop = parseInt(divPopupOuterWindow.css('top'));
				if (recenter) animateFinal.top = Math.max(20, oldTop + (oldHeight - (height + titleHeight)) / 2);
				animateFinal.height = height + titleHeight;
			}

			if (setWidth == -1) {
				var oldLeft = parseInt(divPopupOuterWindow.css('left'));
				if (recenter) animateFinal.left = oldLeft + (divPopupOuterWindow.width() - width) / 2;
				animateFinal.width = width;
			}

			if (
				divPopupOuterWindow.width() == animateFinal.width &&
				divPopupOuterWindow.height() == animateFinal.height - ($.browser.msie ? 1 : 0)
			) {
				$('.os-internal-ui-dialog-content>.LayoutPopup-loading').hide();
				$(divToPopup).height(height - ($.browser.msie ? 1 : 0)); // restore size
				return true; // nothing to do...
			}

			// hide content in first resize - readjustments will not flickr
			if (divPopupOuterWindow.width() == POPUP_INITIAL_WIDTH && divPopupOuterWindow.height() == POPUP_INITIAL_HEIGHT) {
				$(frameObj).height(0);
			}

			var onAnimationComplete = function () {
				setTimeout(function () {
					if (isInsideIframe) {
						window.top.$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						window.top
							.$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					} else {
						$('.os-internal-ui-dialog-titlebar-close-no-title').css('display', 'block');
						$(divToPopup)
							.find('iframe')
							.height('100%')
							.width(animateFinal.width);
					}
				}, 13);
			};

			var divPleaseWait;
			if (isInsideIframe) {
				divPleaseWait = window.top.$('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			} else {
				divPleaseWait = $('.os-internal-ui-dialog-content>.LayoutPopup-loading');
			}

			divPleaseWait.hide();

			if (setHeight == -1 || setWidth == -1) {
				divPopupOuterWindow.animate(animateFinal, {
					duration: 200,
					complete: onAnimationComplete,
				});
			} else {
				onAnimationComplete();
			}
			innerDoc = null;
			divPopupOuterWindow = null;
			if (isInsideIframe) {
				window.top.$.data(event.target, 'os-internal-processing', false);
			} else {
				$.data(event.target, 'os-internal-processing', false);
			}
			return true;
		}
	};

	const close = () => {

		let popupToClose;
		let popupContainer;

		if (isInsideIframe) {
			popupToClose = window.top.$('.os-internal-ui-dialog-content');
			popupContainer = window.top.$('.SapphirePopup');
		} else {
			popupToClose = $('.os-internal-ui-dialog-content');
			popupContainer = $('.SapphirePopup');
		}

		popupToClose.data(POPUP_CLOSING_TAG, POPUP_CLOSING_VALUE);

		//setTimeout(function() {
		if (popupToClose.length) popupToClose.dialog('close');

		popupToClose.remove();
		popupContainer.remove();
		//}, 0);
	};

	const getLinkHREF = widget => {
		let linkHref;
		let isAButton = false;

		try {
			//Checks if the id is from a link or not
			linkHref = $(widget).attr('href');

			//Tests for visibility/existence
			if (typeof linkHref == 'undefined') {
				const onClick = widget.getAttribute('onclick');

				if (typeof onClick != 'undefined') {
					isAButton = true;

					if (onClick != null) {
						let hrefMatch;

						if ((hrefMatch = onClick.toString().match(/href='([^']*)'/)) != null) {
							linkHref = hrefMatch[1];
						}
					}
				}
			}
		} catch (e) { }

		return [linkHref, isAButton];
	};

	const openPopup = (divToPopup, divPleaseWait, loadTargetPage, event, config) => {
		// Destroy any previous dialog
		close(null);

		if (isInsideIframe) {
			const $jParent = window.top.$;
			$jParent('.os-internal-Popup').remove();
		}

		// If any close is pending, schedule to execute itself asynchronously exit
		// If no close is pending, continue with open operation
		let closingPopups;

		if (isInsideIframe) closingPopups = window.top.$('.os-internal-ui-dialog-content');
		else closingPopups = $('.os-internal-ui-dialog-content');

		for (var i = 0; i < closingPopups.length; i++) {
			if ($.data(closingPopups.get(i), POPUP_CLOSING_TAG) == POPUP_CLOSING_VALUE) {
				setTimeout(function () {
					openPopup(divToPopup, divPleaseWait, loadTargetPage, event, config);
				}, 13);

				return false;
			}
		}

		let _dialog;

		if (isInsideIframe) {
			const popupContainer = document.createElement('DIV');
			popupContainer.setAttribute('class', 'SapphirePopup');

			window.top.document.body.appendChild(popupContainer);

			_dialog = window.top.$(divToPopup);
		} else {
			$('<div class="SapphirePopup"></div>').appendTo('body');

			_dialog = $(divToPopup);
		}

		$(divPleaseWait).show();

		if ($('.ISidebar').length) window.parent.SapphireWidgets.LayoutBase.openSidebarIframe(0);

		_dialog.show().dialog({
			appendTo: '.SapphirePopup',
			dialogClass: 'os-internal-Popup',
			resizable: false,
			autoResize: false,
			closeOnEscape: !config.hideCloseButton,
			bgiframe: true,
			draggable: false,
			autoOpen: true,
			title: config.setTitle,
			modal: !(config.useModal === false),
			height: config.setHeight == -1 ? POPUP_INITIAL_HEIGHT : config.setHeight,
			position: 'center',
			width: config.setWidth == -1 ? POPUP_INITIAL_WIDTH : config.setWidth,
			zIndex: POPUP_WINDOW_INDEX,
			close: function () {

				// If the popup is closed before it is resized (ESC) we need to set the processing event to false.
				$.data(event.target, 'os-internal-processing', false);

				_dialog.find('iframe').unbind('load');
				_dialog.find('iframe').attr('src', 'about:blank');

				setTimeout(function () {
					_dialog.find('iframe').empty();
					_dialog.empty();

					document.querySelectorAll('.SapphirePopup').forEach(el => el.remove());

				}, 13);
			},
		});

		_dialog.find('iframe').height(0);
		_dialog.parents('.os-internal-ui-dialog').dropShadow();

		if (config.CssClasses !== ' ') {
			if (isInsideIframe) window.top.$('.os-internal-ui-dialog').addClass(config.CssClasses);
			else $('.os-internal-ui-dialog').addClass(config.CssClasses);
		}

		loadTargetPage();
	};

	SapphireWidgets.SapphirePopup = { create, close, resize };
})(jQuery, window, SapphireWidgets);


/***/ }),

/***/ "./src/components/05-components/v3-pat/segmented-control/scripts.js":
/***/ (function() {

/* Component SegmentedControl */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
    $(document).ready(function() {
      const $inputSegmented = $(`#${config.widgetId}`).find('.SegmentedControl');
      const $labels = $(`#${config.widgetId}`).find('.SegmentedControl_Label');

      if($inputSegmented){
        if(config.hasError == true) {
          $inputSegmented.addClass('Invalid');
          Array.from($labels).forEach(label => {$(label).addClass('ColorRedText')});
        }
        else {
          $inputSegmented.removeClass('Invalid');
          Array.from($labels).forEach(label => {$(label).removeClass('ColorRedText')})
        }
      }
    });
  };

SapphireWidgets.SegmentedControl = {
  create,
};
})(jQuery, window, document, SapphireWidgets);

/***/ }),

/***/ "./src/components/05-components/v3-pat/select-system/scripts.js":
/***/ (function() {

/* Component SelectSystem */
SapphireWidgets.SelectSystem = (config) => {
	$(function () {
		var Select2Options = {};
		var $WidgetIdentifier;

		if (config.WidgetId === '' && config.WidgetClass != '') {
			$WidgetIdentifier = $('.' + config.WidgetClass);
		} else {
			$WidgetIdentifier = $('#' + config.WidgetId);
		}

		if (config.IsRTL) {
			Select2Options.dir = 'rtl';
		}
		Select2Options.theme = 'default SelectSystem';
		Select2Options.width = $WidgetIdentifier.hasClass('OSFillParent') ? '100%' : 'resolve'; // DE72304

		/*  
					Change select2 search display 
									-Multiple Select2 search UI like Single Select2
			*/
		$.fn.select2.amd.define(
			'SearchLikeSingle',
			[
				'select2/utils',
				'select2/dropdown',
				'select2/dropdown/attachBody',
				'select2/dropdown/attachContainer',
				'select2/dropdown/search',
				'select2/dropdown/minimumResultsForSearch',
			],
			function (Utils, Dropdown, AttachBody, AttachContainer, Search, minimumResultsForSearch) {
				let dropdownSearch = Utils.Decorate(Dropdown, Search);
				dropdownSearch.prototype.render = function () {
					var $rendered = Dropdown.prototype.render.call(this);
					// Add ability for a placeholder in the search box
					let placeholder = this.options.get('placeholderForSearch') || '';
					var $search = $(
						'<span class="select2-search select2-search--dropdown">' +
						'<input class="select2-search__field" placeholder="' +
						placeholder +
						'" type="search"' +
						' tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off"' +
						' spellcheck="false" role="textbox" />' +
						'</span>'
					);

					this.$searchContainer = $search;
					this.$search = $search.find('input');
					$search.addClass('MultipleSelect');

					$rendered.prepend($search);
					$search.parent().addClass('MultipleSelect');
					return $rendered;
				};

				// Decorate the dropdown+search with the containers
				let adapter = Utils.Decorate(dropdownSearch, AttachContainer);
				adapter = Utils.Decorate(adapter, AttachBody);

				return adapter;
			}
		);

		// Other possible values are inputTooLong, inputTooShort and maximumSelected (you can find in Select2 sources).
		Select2Options.language = {
			errorLoading: function () {
				return config.Texts.errorLoading ?? 'Results could not be loaded.';
			},
			loadingMore: function () {
				return config.Texts.loadingMore ?? 'Loading more results…';
			},
			noResults: function () {
				return config.Texts.noResults ?? 'No results found.';
			},
			searching: function () {
				return config.Texts.searching ?? 'Searching…';
			},
			removeAllItems: function () {
				return config.Texts.removeAllItems ?? 'Remove all items';
			},
		};

		if (config.DropdownClass != '') {
			Select2Options.dropdownCssClass = config.DropdownClass;
		}

		if (config.allowClear === 'True') {
			Select2Options.allowClear = true;
		}

		if (config.MaximumLength != '') {
			Select2Options.maximumInputLength = config.MaximumLength;
		}

		if (config.Texts.prompt != '') {
			Select2Options.placeholder = config.Texts.prompt;
		}

		if (config.SelectType === 'Ajax') {
			Select2Options.allowClear = false;

			Select2Options.templateSelection = function (repo) {
				if (!repo.element) {
					return config.Texts.prompt;
				}

				return repo.full_name || repo.text;
			};

			Select2Options.templateResult = function (repo) {
				if (repo.loading) {
					return repo.text;
				}
				var markup = '<div class=""Clearfix"">' + '<div class=""ThemeGrid_Width12"">' + repo.text + '</div>';
				if (repo.description) {
					markup += '<div class=""OSAutoMarginTop"">' + repo.description + '</div>';
				}
				markup += '</div>';
				return markup;
			};

			Select2Options.ajax = {
				url: config.AjaxURL,
				dataType: 'json',
				delay: config.AjaxDelay,
				headers: { AuthInternal: config.Header_Value },
				data: function (params) {
					var Select2AjaxOpt = {};
					var SplitParameter = config.SearchExtraParam1.split(',');
					Select2AjaxOpt.SearchParameter = params.term;
					Select2AjaxOpt.Page = params.page || 1;
					Select2AjaxOpt.PageAmount = config.PageAmount;

					SplitParameter.forEach(function (el) {
						var splitText = el.split(':');
						Select2AjaxOpt[splitText[0]] = splitText[1];
					});

					return Select2AjaxOpt;
				},
				processResults: function (data, params) {
					params.page = params.page || 1;

					return {
						results: data.items,
						pagination: {
							more: params.page * config.PaginationSize < data.total_count,
						},
					};
				},
				cache: true,
			};

			Select2Options.minimumInputLength = config.MinimumInputLenght;

			Select2Options.escapeMarkup = function (markup) {
				return markup;
			};

			if (config.IsMultiple) {
				Select2Options.multiple = true;
				Select2Options.containerCssClass = 'Select2Ajax Multiple';
				Select2Options.dropdownCssClass = 'Select2Ajax Multiple';
			} else {
				Select2Options.multiple = false;
				Select2Options.containerCssClass = 'Select2Ajax';
				Select2Options.dropdownCssClass = 'Select2Ajax';
			}

			Select2Options.minimumResultsForSearch = 0;
			Select2Options.tags = config.HasTags;
			Select2Options.closeOnselect = true;
		}

		if (config.SelectType === 'Checkbox') {
			var isAllSelected = false;
			if ($WidgetIdentifier[0].options.length === $WidgetIdentifier[0].selectedOptions.length) {
				isAllSelected = true;
			}

			if (config.WidgetId != '') {
				option = new Option(config.Texts.selectAll, 'All', true, isAllSelected);
				$WidgetIdentifier.prepend(option);
				$WidgetIdentifier.find('option:first-child').addClass('SelectedAll');
			}
			Select2Options.multiple = true;
			Select2Options.closeOnSelect = false;
			Select2Options.allowHtml = false;
			Select2Options.tags = false;

			if (config.HasSearch) {
				Select2Options.dropdownAdapter = $.fn.select2.amd.require('SearchLikeSingle');
			} else {
				Select2Options.minimumResultsForSearch = -1;
			}

			Select2Options.containerCssClass = 'MultipleSelect';
			Select2Options.dropdownCssClass = 'MultipleSelect';
			Select2Options.templateSelection = function (result) {
				var selectedOptionsList = $WidgetIdentifier.find('option:selected:not(".SelectedAll")');
				var selectedOptions = selectedOptionsList.length;
				var totalOptions = $WidgetIdentifier.find('option:not(".SelectedAll")').length;

				if (selectedOptions === 0) {
					return config.Texts.prompt;
					//return 'Select an option';
				} else if (selectedOptions < 4) {
					var activeValues = '';
					selectedOptionsList.each(function () {
						activeValues = activeValues + ' ' + $(this)[0].innerText;
					});
					activeValues = activeValues.replace(/,\s*$/, '');
					return activeValues;
				} else if (selectedOptions === totalOptions) {
					return config.Texts.allSelected;
				} else {
					return config.Texts.partialSelection
						.replace('{SelectedOptions}', selectedOptions)
						.replace('{TotalOptions}', totalOptions);
				}
			};
		}

		if (config.SelectType === 'HtmlOptions') {
			var dataHtmlOption = [];
			$WidgetIdentifier.find('option').each(function (key, value) {
				var optionObject = {
					id: $(this).val(),
					text: $(this).text(),
					html: $(this).text(),
				};
				dataHtmlOption.push(optionObject);
			});

			Select2Options.containerCssClass = 'customSelect';
			Select2Options.dropdownCssClass = 'dropdownCustom';
			Select2Options.data = dataHtmlOption;
			Select2Options.escapeMarkup = function (markup) {
				return markup;
			};
		}

		if (config.SelectType === 'TagCustom') {
			Select2Options.tags = config.HasTags;
			Select2Options.containerCssClass = 'tagCustom';
			Select2Options.dropdownCssClass = 'tagCustom';
			// According to documentation, this has been replaced with createTag, but this signature looks like for insertTag.
			// No sure how this is supposed to be. See https://select2.org/upgrading/migrating-from-35#renamed-createsearchchoice.
			Select2Options.createSearchChoice = function (term, data) {
				if (
					$(data).filter(function () {
						return this.text.localeCompare(term) === 0;
					}).length === 0
				) {
					return {
						id: term,
						text: term,
					};
				}
			};


			// Set up ResizeObserver to track height changes
			const updateLineTimelineTitlePosition = () => {
				const newHeight = 125 + $('.ResizableContainer').outerHeight();
				document.documentElement.style.setProperty('--line-title-top', newHeight + 'px');
			};

			const resizeObserver = new ResizeObserver(() => {
				updateLineTimelineTitlePosition();
			});

			const $resizeContainer = $('.ResizableContainer');
			if ($resizeContainer.length) {
				resizeObserver.observe($resizeContainer[0]);
			}
		}

		if (config.SelectType === 'TagMultiple') {
			Select2Options.tags = true;
			Select2Options.containerCssClass = 'tagSystem';
			Select2Options.dropdownCssClass = 'tagSystem';
			Select2Options.createTag = function (params) {
				var term = $.trim(params.term);
				if (term === '') {
					return null;
				}
				return {
					id: '#' + term,
					text: term,
					newTag: true,
				};
			};
		}

		if (!config.HasSearch) {
			Select2Options.minimumResultsForSearch = -1;
		}

		$WidgetIdentifier.select2(Select2Options);


		if (!config.AutoHeight) {
			let renderedElement = $WidgetIdentifier.next()[0];
			renderedElement.querySelector('.select2-selection__rendered').style.height = '35px';
			renderedElement.querySelector('.select2-selection__rendered').style.overflowY = 'overlay';
		}


		if (config.OnChange) {
			$WidgetIdentifier.on('change', config.OnChange);
		}

		if (config.SelectType === 'Checkbox') {
			$WidgetIdentifier.on('select2:select', function (e) {
				if (e.params.data.id === 'All') {
					var selectedItems = [];
					var allOptions = $WidgetIdentifier.find('option');
					allOptions.each(function () {
						selectedItems.push($(this).val());
					});
					$WidgetIdentifier.select2('destroy');
					$WidgetIdentifier.val(selectedItems).trigger('change');
					$WidgetIdentifier.select2(Select2Options);
					$WidgetIdentifier.select2('open');
				} else {
					var selectedOptions = $WidgetIdentifier.find('option:selected').length;
					var totalOptions = $WidgetIdentifier.find('option').length;
					if (
						selectedOptions === totalOptions - 1 &&
						$WidgetIdentifier.find('option:selected:first-child').length === 0
					) {
						var selectedItems = [];
						var allOptions = $WidgetIdentifier.find('option');
						allOptions.each(function () {
							selectedItems.push($(this).val());
						});
						$WidgetIdentifier.select2('destroy');
						$WidgetIdentifier.val(selectedItems).trigger('change');
						$WidgetIdentifier.select2(Select2Options);
						$WidgetIdentifier.select2('open');
					}
				}
			});

			$WidgetIdentifier.on('select2:unselect', function (e) {
				if (e.params.data.id === 'All') {
					$WidgetIdentifier.find('option').removeAttr('selected');
					$WidgetIdentifier.select2('destroy');
					$WidgetIdentifier.select2(Select2Options);
					$WidgetIdentifier.select2('open');
					$WidgetIdentifier.val('').trigger('change');
				} else {
					$WidgetIdentifier.find('option:first-child').removeAttr('selected');
					$WidgetIdentifier.select2(Select2Options);
					$WidgetIdentifier.select2('open');
				}
			});
		} else if (config.SelectType === 'Select2') {
			$WidgetIdentifier.on('select2:select', function (e) {
				if (e.target.selectedIndex !== 0) {
					$WidgetIdentifier.parent().addClass('SelectSystemFilter-Selected');
				} else {
					$WidgetIdentifier.parent().removeClass('SelectSystemFilter-Selected');
				}
			});
		} else if (config.SelectType === 'HtmlOptions' || config.SelectType === 'Ajax') {
			// Problem with the title is that it is always escaped, which looks bad when we have HTML there.
			// It should be possible to customize how title is built, but for this we need extra field in source data.
			const removeSelectionTitle = function () {
				$WidgetIdentifier.next().find('.select2-selection__rendered').removeAttr('title');
			};
			$WidgetIdentifier.on('select2:select select2:unselect', removeSelectionTitle);
			removeSelectionTitle();
		}
	});
};


/***/ }),

/***/ "./src/components/05-components/v3-pat/spinner-vertical/scripts.js":
/***/ (function() {

/* Component SpinnerVertical */
(function($, window, document, SapphireWidgets) {
	const create = function(config) {
		$(document).ready(function() {
			const $minusVertical = $(`#${config.widgetId}`).find('.MinusVertical');
			const $inputSpinner = $(`#${config.widgetId} .SpinnerInputVertical input`);

			$inputSpinner.on('blur keyup input', function(event) {
				const currentInputValue = $inputSpinner.val();

				if (config.numberList && event.type === 'blur') {
					const inputValueInt = parseInt(currentInputValue);
					const arrayToSpin = config.numberList;
					const $errorMessage = $(`#${config.widgetId} .SpinnerErrorMessage`);

					if (config.hideErrorMessage == true && (isNaN(inputValueInt) || inputValueInt == 0))
						$errorMessage.css('display', 'none' );
						else if(arrayToSpin.indexOf(inputValueInt) === -1) {
						$errorMessage.css('display', 'block' );
						} else {
						$errorMessage.css('display', 'none' );
						}
				}

				if (currentInputValue < config.minValue) $minusVertical.addClass('DisabledSpin');
				else $minusVertical.removeClass('DisabledSpin');
			});

			if ($inputSpinner.val() <= config.minValue) {
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.numberList && $inputSpinner.val() === '') {
				let currentNumber = 0;
				const arrayToSpin = config.numberList.split(',');

				$inputSpinner.val(arrayToSpin[currentNumber]);
				$minusVertical.addClass('DisabledSpin');
			}

			if (config.isCursorOnFocus) {
				$('body').on('focus', `#${config.inputID} input`, function() {
					var that = this;

					setTimeout(function() {
						that.focus();
						var val = that.value;
						that.value = '';
						that.value = val;
					}, 1);
				});
			}

			if (config.isInputEmpty) {
				$inputSpinner.attr('value', '');
				$minusVertical.addClass('DisabledSpin');
			} else {
				$inputSpinner.blur();
			}
		});
	};

	const increment = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		let $input = $spinner.find('input[type="text"], input[type="number"]').first();

		var forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		var currentValue = parseFloat($input.val());
		var incrementUnit = 1;
		var isDecimals = currentValue % 1 != 0;
		var arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		$minusVertical.removeClass('DisabledSpin');

		if (arraytospin.length) {
			var currentPosition = arraytospin.indexOf(parseInt($input.val()));
			var maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			$plusVertical.removeClass('DisabledSpin');

			if (maximumToSpin - 1 === currentPosition) {
				currentPosition = currentPosition + 1;
				$input.val(arraytospin[currentPosition]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else if (maximumToSpin === currentPosition) {
				currentPosition = currentPosition % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				currentPosition = (currentPosition + 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			if (currentPosition === maximumToSpin) $plusVertical.addClass('DisabledSpin');
			if (currentPosition === 0) $minusVertical.addClass('DisabledSpin');

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (parseFloat(currentValue) < minValue) {
				$minusVertical.addClass('DisabledSpin');
			} else {
				$minusVertical.removeClass('DisabledSpin');
			}

			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) < maxValue) {
					if (currentValue === 0 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue + incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$minusVertical.removeAttr('disabled');
				} else {
					$plusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const decrement = (elementId, minValue, maxValue, triggerOnChange, triggerOnInput, listTospin = []) => {
		const $spinner = $(elementId);
		const $input = $spinner.find('input[type="text"], input[type="number"]').first();

		let forceInteger = $(elementId).data('forceinteger') === 'True' ? true : false;
		let currentValue = parseFloat($input.val());
		let incrementUnit = 1;
		let isDecimals = currentValue % 1 != 0;
		let arraytospin = listTospin;

		const $minusVertical = $(elementId).find('.MinusVertical');
		const $plusVertical = $(elementId).find('.PlusVertical');

		if (arraytospin.length) {
			let currentPosition = arraytospin.indexOf(parseInt($input.val()));
			let maximumToSpin = arraytospin.lastIndexOf(arraytospin.slice(-1)[0]);

			if (currentPosition == 0) {
				$input.val(arraytospin[maximumToSpin]);

				if (triggerOnChange) $input.trigger('change');
				if (triggerOnInput) $input.trigger('input');
			} else {
				currentPosition = (currentPosition - 1) % maximumToSpin;
				$input.val(arraytospin[currentPosition]);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			}

			$spinner.find('.SpinnerErrorMessage').css('display', 'none');
		} else {
			if (!forceInteger && isDecimals) incrementUnit = parseFloat(0.1);

			if (currentValue === undefined || currentValue === '' || isNaN(parseFloat(currentValue))) {
				$input.val(minValue);

				triggerEvents($input, triggerOnChange, triggerOnInput);
			} else {
				if (parseFloat(currentValue) > minValue) {
					if (currentValue === 1 && !forceInteger) incrementUnit = parseFloat(0.1);

					$input.val(parseFloat((currentValue - incrementUnit).toFixed(1)));

					triggerEvents($input, triggerOnChange, triggerOnInput);

					$plusVertical.removeAttr('disabled');
				} else {
					$minusVertical.attr('disabled', 'disabled');
				}
			}

			checkDisabledStatus(elementId, parseFloat($input.val()), minValue, maxValue);
		}
	};

	const triggerEvents = (input, triggerOnChange, triggerOnInput) => {
		if (triggerOnChange) input.trigger('change');
		if (triggerOnInput) input.trigger('input');
	};

	const checkDisabledStatus = (elementId, valueToCheck, minValue, maxValue) => {
		if (valueToCheck <= minValue) {
			$(elementId)
				.find('a.MinusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.MinusVertical')
				.removeAttr('disabled');
		}
		if (valueToCheck >= maxValue) {
			$(elementId)
				.find('a.PlusVertical')
				.attr('disabled', 'disabled');
		} else {
			$(elementId)
				.find('a.PlusVertical')
				.removeAttr('disabled');
		}
	};

	SapphireWidgets.SpinnerVertical = {
		create,
		increment,
		decrement,
	};
})(jQuery, window, document, SapphireWidgets);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
__webpack_require__("./src/backoffice/styles.scss");

SapphireWidgets = window.SapphireWidgets = window.SapphireWidgets || {};

__webpack_require__("./src/backoffice/01-components/layout/layout-backoffice.js");

__webpack_require__("./src/components/05-components/v3-pat/country-phone/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/datetime-range-picker/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/hour-picker/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/panel/confirmation-popup.js");
__webpack_require__("./src/components/05-components/v3-pat/panel/panel-by-id.js");
__webpack_require__("./src/components/05-components/v3-pat/sapphire-popup/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/select-system/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/spinner-vertical/scripts.js");
__webpack_require__("./src/components/05-components/v3-pat/dropzone/dropzone.js");
__webpack_require__("./src/components/03-elements/script.js");
__webpack_require__("./src/components/05-components/v3-pat/segmented-control/scripts.js")
}();
/******/ })()
;