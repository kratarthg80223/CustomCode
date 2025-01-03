function getExternalJSPaths(){
    // path to load multiple files are to given here comma seperated
    const filePaths=[];
    return filePaths;
}

function getExternalFonts(){
    // path to load multiple font files are to given here comma seperated
    const filePaths=["Lora-Bold", "Lora-Italic" ];
    return filePaths;
}

function onRowClick(listviewId,rowIndex){
    return true
}

function clickLabelLink() {console.log("magic")}

function handleFocus(){
	functions.setStyle("textbox8", "BackColor", "#E0F10D")
}

function onClickEvent(){
	functions.executeServerEvent("", "", "", true)
}

function onChangeSectionState(frameId, state)
{
    //console.log(frameId,state);
}

function postHookPickListOk(columns,controlId){
   // console.log(columns, controlId);
}

function postHookDBLink() {
    //will call after dblinking
}

function tableOperation(tableId, operationType){
    if(operationType === "AddRow"){
        return true
    } else if(operationType === "DeleteRow"){
        return true
    } else if(operationType === "CopyRow"){
        return true
    }
}


function subFormLoad(buttonId){
    //console.log(buttonId);
}

function customValidation(type) {
    if(type === "D") {
        //operation that need to perform on Done button
    }
    else if(type === "S") {
        //operation that need to perform on Save button
    }
    else if(type === "I") {
        //operation that need to perform on Introduce button
    }
    return true;
}

function formLoad(name, parth, mohit, nitin){
    console.log("why worry again !!!!!!!");
}

function handleCustomKeyEvent(){
    consoe.log("demo given")
}

function subformDoneClick(buttonId){ 
    //Custom Code // Doubt
    //console.log(buttonId);
}

function picklistPreHook(controlId){ 
    //Custom Code 
    //console.log(controlId);
}

function subFormPreHook(buttonId){ 
    //console.log(buttonId);
    return true; 
}

function postHookPickListCancel(textid){ 
    //CustomCode 
//    console.log(textid);
}

function clearPicklistPostHook(controlId){
    //Custom Code 
  //  console.log(controlId);
}

function formChangeHook(ref){
    //console.log(ref);
}

function addRowPostHook(tableId){ 
    //Custom Code 
    //console.log(tableId);
}

function deleteRowPostHook(tableId, rowIndices){ 
    //Custom Code 
    //console.log(tableId, rowIndices);
}

function onTableCellChange(rowIndex,colIndex,ref,controlId){ 
    //custom code 
    //console.log(rowIndex,colIndex,ref,controlId);
}

function selectRowHook(tableId,selectedRowsArray,isAllRowsSelected){
    //custom code 
    //console.log(tableId, selectedRowsArray, isAllRowsSelected);
}

function saveAndNextPreHook(tabId){    
    return false;
}

function closeWorkitemHook() {
    
}

function skipValidation() {
    
    return false;
}


function preHookDeleteDocument() {
    return true;
}

function restrictMultipleDocUpload() {
    return false;
}

function setDefaultPrecisionForControl(){
    return 2
}

function clearEditableComboBoxValueIFNotExists(){
    return true
}
































/*******************************************  Custom Code Implementation for fetching Workitem Information ************************************************
	1. Custom Implementation should call window.getWorkitemDataHandler(["form_data","doc","excp","todo"], true) to fetch Workitem Information.
		This function takes array of options and flag for DataStore. Application can pass options as per requirements.
		"form_data": Workitem's form data or attributes name and value(s)
		"doc": Workitem's document(s) information
		"excp": Workitem's exception(s) information
		"todo": Workitem's todo(s) information
		Callback: Callback is called when workitem Information is ready. Implementation should write custom code in window.workitemDataProcessor() method.
		fromDataStore (true, false): If true then it will fetch workitem data from DB else from current session store. Default is true.
		
	2. Output returned is in json format whose sample is provided at bottom of this article.	
***********************************************************************************************************************************************************/

window.getWorkitemDataHandler = function (){	
	window._getWorkitemData(["form_data","doc","excp","todo"], window.workitemDataProcessor, true);
}

window.workitemDataProcessor = function (workitemData){
	// ==============================================	Custom Implementation Start here	==========================================================    
	var workitemDataJson = JSON.parse(workitemData);
		
	if(workitemDataJson.data.doc){
		var docStatus = workitemDataJson.data.doc.status;
		if(docStatus.maincode == "0"){
			var docData = workitemDataJson.data.doc.data;
			//alert("##docData="+docData);
		}
	} 
	
	if(workitemDataJson.data.excp){
		var excpStatus = workitemDataJson.data.excp.status;
		if(excpStatus.maincode == "0"){
			var excpData = workitemDataJson.data.excp.data;	
			//alert("##excpData="+excpData);
		}
	} 
	
	if(workitemDataJson.data.form_data){
		var formDataStatus = workitemDataJson.data.form_data.status;
		if(formDataStatus.maincode == "0"){
			var formData = workitemDataJson.data.form_data.data;
			//alert("##formData="+formData);
		}
	} 
	
	if(workitemDataJson.data.todo){
		var todoStatus = workitemDataJson.data.todo.status;
		if(todoStatus.maincode == "0"){
			var todoData = workitemDataJson.data.todo.data;
			//alert("##todoData="+todoData);
		}
	}
	
	
	/* 	Uncomment below code to unlock the workitem. 
		This is required if Application load data from DB and does not store it in Web Session e.g Mobile App. Desktop Application version unlocks workiem on browser window close automatically so explicit call is not required.
	*/	
	//window._unlockWorkitem(workitemUnlockProcessor);
}

window.workitemUnlockProcessor = function (workitemUnlockData){
	workitemUnlockDataJson = JSON.parse(workitemUnlockData);
	
	var workitemUnlockStatus = workitemUnlockDataJson.status;
	if(workitemUnlockStatus.maincode == "0"){
		var workitemStatus = workitemUnlockDataJson.data.status_list[0].status; //"Success"
		//alert("##workitemStatus="+workitemStatus);
	}
}


/* Response JSON format of window._getWorkitemData(["data","doc","excp","todo"], true) method
***********************************************************************************************************************************************************
{"data": {"doc": {"data": {"allow_comment": true, "available_doc_types": [{"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": false, "id": "0", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "Conversation"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "2", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D1"}, {"allowed_file_types": ["JPG", "JPEG", "WAV", "TXT", "TIFF", "PDF", "DOCM", "DOC", "XPS", "M4A", "3GP", "XLS", "DOCX", "MSG", "BMP", "DOTM", "EML", "GIF", "CSV", "XLSM", "M4V", "OGG", "DOTX", "TIF", "MP4", "XLSX", "WEBM", "MP3", "ICO", "MOV", "GTAR"], "description": "", "enable_upload": true, "id": "3", "mandatory": false, "max_file_size": 100, "multiple_upload": true, "name": "D2"}], "available_owners": ["admin"], "default_doc_info": {"doc_index": "1006"}, "doc_upload_options": {"camera": true, "google_drive": false, "omnidocs": true, "scan": true, "system": true}, "documents": [{"checkout_by": "", "checkout_status": "N", "comments": "chrome_7JlmLwmXaY", "created_on": "05/Jul/2023 15:18:03", "doc_order_no": "1", "doc_type": {"description": "", "id": "2", "mandatory": false, "name": "D1"}, "enable_annotate": false, "enable_checkin": false, "enable_checkout": true, "enable_delete": true, "enable_download": true, "enable_print": true, "enable_version": true, "extension": "png", "i_s_index": "424#1#", "id": "1006", "is_conversation": false, "last_modified_by": "", "last_modified_on": "05/Jul/2023 15:18:03", "name": "chrome_7JlmLwmXaY.png", "no_of_pages": "1", "org_name": "D1(chrome_7JlmLwmXaY.png)", "owner": "admin", "owner_index": "507", "pinned": false, "pinned_order": "", "resource_type": "N", "show_multi_page": true, "site_id": "1", "size": "190.064 KB", "thumbnail": "", "url_info": {"get_annotation": "/wd-rest/app/viewimageannotation", "get_document": "/wd-rest/app/getdocuments?ImgIndex=424&VolIndex=1&DocExt=png&DocIndex=1006&PageNo=1&docType=N&DocSize=194626&ArchivalMode=N&ArchivalCabinet=&wid=1&pid=NewNPCase-0000000010-process&taskid=&WD_SID=e24d129f-ee5b-4313-b445-1c049c038365&WD_RID=455c4bfb-8388-4ccf-834a-e6eb06e1d9fc&DocumentName=D1.png", "get_stamp": "/wd-rest/app/stampServlet", "get_stamp_annotation": "/wd-rest/app/viewimagestamp", "get_stamp_ini": "/wd-rest/app/getdocstamps", "save_annotation": "/wd-rest/app/imageannotation"}, "version": "1.0", "version_flag": "N"}], "docviewer_info": {"opall_params": {"AllPages": true, "AnnotationColor": "", "AnnotationOption": "0", "colorViewerCanvas": "16777215", "cropImageMinQuality": "0.2", "CroppedImageSize": "32", "CurrentUserName": "admin", "DefaultFontSettings": "", "initialZoomLensPercentage": "100%", "initialZoomLensStatus": false, "IsZoomWindowChangeRequired": true, "MenuBar": true, "pageSetupIE": "{'bheader': false, 'bfooter': false}", "printApproach": "1", "printOption": "2", "PrintParameter": "1", "RequestMethod": "POST", "resizeExMaxPixelLimit": "10000000", "resizeExMaxZoomLimit": "-100", "resizeOption": "0", "ResizePercentage": "1", "RetainAngleSettings": false, "SaveAnnotationDialog": true, "StampWithoutINI": false, "TextWaterMarkPosition": "4", "TransformOption": "0", "ViewWaterMark": false, "Watermark_Properties": "50,90,Courier,0,20,0,0.5", "watermarkPrinting": "4", "ZoomLens": false, "ZoomLensForZoning": "300,200,1,true"}}, "enable_filter": true, "enable_search": true, "enable_sorting": true, "sort_on": 5, "sort_order": "D", "sort_type": 1, "upload_doc_as": {"new": true, "new_version": true, "overwrite": true}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "excp": {"data": {"exceptions": [{"category_id": "0", "category_name": "Ungrouped", "description": "ds", "id": "1", "name": "E1", "raised": [], "type": "VR"}, {"category_id": "0", "category_name": "Ungrouped", "description": "dsa", "id": "2", "name": "E2", "raised": [], "type": "VR"}, {"category_id": "1", "category_name": "G1", "description": "sd", "id": "3", "name": "E3", "raised": [], "type": "VR"}, {"category_id": "2", "category_name": "G2", "description": "sd", "id": "5", "name": "E5", "raised": [], "type": "VR"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "form_data": {"data": {"attributes": [{"array": false, "disabled": false, "field_type": "163", "label": "NP Integer 1", "length": "", "name": "NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "166", "label": "NP Float 1", "length": "15", "name": "NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "168", "label": "NP Date 1(dd/MMM/yyyy)  :", "length": "", "name": "NP Date 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "164", "label": "NP Long 1", "length": "", "name": "NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "1610", "label": "NP Text 1", "length": "255", "name": "NP Text 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "2610", "label": "New Ext NP String 1", "length": "255", "name": "New Ext NP String 1", "type": "10", "value": ""}, {"array": false, "disabled": false, "field_type": "263", "label": "New Ext NP Integer 1", "length": "", "name": "New Ext NP Integer 1", "type": "3", "value": ""}, {"array": false, "disabled": false, "field_type": "264", "label": "New Ext NP Long 1", "length": "", "name": "New Ext NP Long 1", "type": "4", "value": ""}, {"array": false, "disabled": false, "field_type": "266", "label": "New Ext NP Float 1", "length": "15", "name": "New Ext NP Float 1", "type": "6", "value": ""}, {"array": false, "disabled": false, "field_type": "268", "label": "New Ext NP Date Time 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP Date Time 1", "type": "8", "value": ""}, {"array": false, "disabled": false, "field_type": "2612", "label": "New Ext NP Boolean 1", "length": "", "name": "New Ext NP Boolean 1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "disabled": false, "field_type": "2615", "label": "New Ext NP ShrtDte 1(dd/MMM/yyyy)  :", "length": "", "name": "New Ext NP ShrtDte 1", "type": "15", "value": ""}, {"array": true, "attributes": [[{"array": false, "field_type": "2610", "label": "new_complex_np2_string_1", "length": "255", "name": "Complex NP 2-new_complex_np2_string_1", "type": "10", "value": ""}, {"array": false, "field_type": "263", "label": "new_complex_np2_integer_1", "length": "", "name": "Complex NP 2-new_complex_np2_integer_1", "type": "3", "value": ""}, {"array": false, "field_type": "264", "label": "new_complex_np2_long1", "length": "", "name": "Complex NP 2-new_complex_np2_long1", "type": "4", "value": ""}, {"array": false, "field_type": "266", "label": "new_complex_np2_float_1", "length": "15", "name": "Complex NP 2-new_complex_np2_float_1", "type": "6", "value": ""}, {"array": false, "field_type": "268", "label": "new_complex_np2_dattim1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_dattim1", "type": "8", "value": ""}, {"array": false, "field_type": "2612", "label": "new_complex_np2_boolean1", "length": "", "name": "Complex NP 2-new_complex_np2_boolean1", "options": [{"label": "", "value": ""}, {"label": "True", "value": "true"}, {"label": "False", "value": "false"}], "type": "12", "value": ""}, {"array": false, "field_type": "2615", "label": "new_complex_np2_shrtdat1(dd/MMM/yyyy)  :", "length": "", "name": "Complex NP 2-new_complex_np2_shrtdat1", "type": "15", "value": ""}, {"array": false, "field_type": "2618", "label": "new_complex_np2_ntext1", "length": "", "name": "Complex NP 2-new_complex_np2_ntext1", "type": "18", "value": ""}], []], "disabled": false, "field_type": "2611", "label": "Complex NP 2", "length": "", "name": "Complex NP 2", "type": "11"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}, "todo": {"data": {"show_todo_desc": false, "todos": [{"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "sda", "mandatory": false, "name": "T1", "picklist": ["Yes", "No", "N/A"], "picklist_count": "4", "read_only": false, "right_flag": "M", "todo_external_object_index": "1", "todo_histories": [], "todo_index": "1", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "M"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "0", "category_name": "Ungrouped", "current_value": "", "description": "dsa", "mandatory": false, "name": "T2", "picklist": ["V1", "V2", "V3", "V4", "V5"], "picklist_count": "5", "read_only": false, "right_flag": "M", "todo_external_object_index": "2", "todo_histories": [], "todo_index": "2", "todo_variable_id": "42#0", "trigger_list": [], "view_type": "P"}, {"additional_todo_item": "N", "associated_field": "&lt;None&gt;", "category_id": "1", "category_name": "TriggerToDos", "current_value": "", "description": "sad", "mandatory": false, "name": "SetOneTrigger", "picklist": [], "picklist_count": "", "read_only": false, "right_flag": "M", "todo_external_object_index": "3", "todo_histories": [], "todo_index": "3", "todo_variable_id": "42#0", "trigger_list": [{"trigger_index": "1", "trigger_name": "SetOneTrigger", "trigger_type": "S", "var_to_set_list": [{"param": "2023-06-01", "type1": "U", "type2": "C", "variable_id1": "11#0", "variable_id2": "0#0", "variable_name": "NP Date 1"}, {"param": "1.1", "type1": "U", "type2": "C", "variable_id1": "9#0", "variable_id2": "0#0", "variable_name": "NP Float 1"}, {"param": "1", "type1": "U", "type2": "C", "variable_id1": "1#0", "variable_id2": "0#0", "variable_name": "NP Integer 1"}, {"param": "111", "type1": "U", "type2": "C", "variable_id1": "15#0", "variable_id2": "0#0", "variable_name": "NP Long 1"}, {"param": "One", "type1": "U", "type2": "C", "variable_id1": "19#0", "variable_id2": "0#0", "variable_name": "NP Text 1"}, {"param": "true", "type1": "I", "type2": "C", "variable_id1": "63#0", "variable_id2": "0#0", "variable_name": "New Ext NP Boolean 1"}, {"param": "2023-06-01", "type1": "I", "type2": "C", "variable_id1": "62#0", "variable_id2": "0#0", "variable_name": "New Ext NP Date Time 1"}, {"param": "1.1", "type1": "I", "type2": "C", "variable_id1": "61#0", "variable_id2": "0#0", "variable_name": "New Ext NP Float 1"}, {"param": "1", "type1": "I", "type2": "C", "variable_id1": "59#0", "variable_id2": "0#0", "variable_name": "New Ext NP Integer 1"}, {"param": "111", "type1": "I", "type2": "C", "variable_id1": "60#0", "variable_id2": "0#0", "variable_name": "New Ext NP Long 1"}, {"param": "01-06-2023", "type1": "I", "type2": "C", "variable_id1": "64#0", "variable_id2": "0#0", "variable_name": "New Ext NP ShrtDte 1"}, {"param": "One", "type1": "I", "type2": "C", "variable_id1": "58#0", "variable_id2": "0#0", "variable_name": "New Ext NP String 1"}]}], "view_type": "T"}]}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}}, "status": {"description": "", "errormsg": "", "maincode": "0", "suberrorcode": "0", "subject": ""}}

 Response JSON format of window._unlockWorkitem() method
***********************************************************************************************************************************************************
{
  "data" : {
    "status_list" : [ {
      "registration_no" : "NewNPCase-0000000019-process",
      "status" : "Success",
      "message" : "Workitem unlocked"
    } ]
  },
  "status" : {
    "maincode" : "0",
    "suberrorcode" : "0",
    "subject" : "",
    "description" : "",
    "errormsg" : ""
  }
}
***********************************************************************************************************************************************************/

var isWebViewReady = false;

window.addEventListener("flutterInAppWebViewPlatformReady", function (event) {
    isWebViewReady = true;
});

function triggerMobileCustomCode(requestName, data) {
    //Prepare data for the mobile request
    var argsObj = {
        "RequestId": requestName,
        "Data": data
    };
    var argsJsonString = JSON.stringify(argsObj);
    //Custom trggering of mobile handler
    console.log("Triggering handler");
    return window.flutter_inappwebview.callHandler('customMobileCodeHandler', argsJsonString);
}

function onEventRecievedFromMobile(recievedDataString) {
    //Whenever a event will be triggered from Mobile side
    //This method will be triggered with data and eventName 
    var dataObj = JSON.parse(recievedDataString);
    console.log("Event triggered from Mobile" + recievedDataString);
    var eventId = dataObj["RequestId"];
    var dataFromMobileEnd = dataObj["Data"];
    //The above data will be used for funther operations to be performed by form accordingly
}

function xyz(){
    alert("abcd");
    alert("new addition");
    functions.changeSectionCaption("frameId", "Caption");
    alert("hello");
    alert("Version 2");
    functions.changeSectionCaption("frameId", "Version3");
    alert("Version 4")
    alert("Alright")
}

function fetchRecords(){
    
    functions.setStyle("textbox1", "visible", "false");
}

function clientEvent_bb91ddf5-4777-47d5-a9dd-1b4cf923452d() {
    alert("new button");
}
function xyz(){
    alert("abcd");
    alert("new addition");
    functions.changeSectionCaption("frameId", "Caption");
    alert("hello");
    alert("Version 2");
    functions.changeSectionCaption("frameId", "Version3");
    alert("Version 4")
    alert("Alright")
}
function clientEvent_1a36ccd4-a77f-4d63-9a8a-6c520484e9b0() {
    alert("new function");
    alert("new function 2");
}
function devkh() {
    alert("new button")
}
function devkh() {
    alert("new button")
}
function abcd() {
    alert("hehhe")
}
function abcd() {
    alert("No homo")
}
function abcd() {
    alert("No homo")
}
function abcd() {
    alert("No homo")
}
function clie() {

}
function aditya() {
    alert("new");
}
function newbutton() {
    alert("jahfjaf")
}
function avinashchutiya() {
    alert("jai ho")
}
function sinko() {
    alert("asdf")
}
function pinko() {
    alert("asdf")
    alert("kirmada")
}
function clientEvent_b6bd31fcb0e8dec03f4c1832e682d() {
    jzfjzgf
}
function aditya1() {
    alert("new");
}
function aditya1() {
    alert("new");
}
function aditya() {
    alert("new");
}
function aditya() {
    alert("new");
}
function aditya() {
    alert("new");
}
function aditya2() {
    alert("newq");
}
function clientEvent_c5b3a11baa8c3e823b3fdd1f647() {
alert("new")
}
function dev() {
    alert("new")
}
function test() {

}
function test2() {
    alert("new");
}
function dev1(){
    alert("new");
}
function AvinashKumarSingh() {
    alert("new");
}
function test1() {

}
function test12344() {
    alert("New");
}
function Test123() {
afafa
}
function dev2() {
    alert("new2")
}
function dev3() {
    alert("new3")
}
function clientEvent_6fbf5d21cad4124ffeb31e12d0260c6() {

}
function clientEvent_a3a4268db132d52e4de6abd121a833() {
    abschah
}
function clientEvent_00bc14be1b41f223243c51684f141() {
asdfghjkl
}
function clientEvent_873d20d576d88bc470efc3a2e0462() {
    test123
}
function clientEvent_752687044540c1f775df2cb3f20() {
    alert("afaf.applicationname");
}
function clientEvent_f2abef645ecb142e004a46a80af1110() {
    alert("afaf.applicationname");
}
function clientEvent_f2abef645ecb142e004a46a80af1110() {
    alert("afaf.applicationname");
}
function hello123() {
    alert("afaf.applicationname1");
}
function hello1234() {
    alert("afaf.applicationname1");
}
function hello12345() {
    alert("afaf.applicationname1");
}
function hellonew() {

}
function hellonew1() {

}
function clientEvent_d0e5482516260a23c1ed0f304ff42b0() {
    alert("hellp");
}
function hellodev() {

}
function hello212() {

}
function hello222() {

}
function hello232() {

}
function hello242() {

}
function hellohello() {

}
function helohelo() {

}
function hellohello() {

}
function wowhello() {

}
function wowhelloNice() {

}
function clientEvent_a7c527cdb5ccb4f185da45e1e853a3() {

}
function test() {

}
function hello() {

}
function hello1() {

}
function hello12() {

}
function hello2() {
}
function evernNewer(2) {
    alert("Newer")
}
function test12() {
}
function test123() {
}
function test1234() {
}