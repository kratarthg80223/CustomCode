package com.newgen.iforms.user;

import java.util.Locale;
import java.io.File;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import com.newgen.iforms.EControl;
import org.json.simple.JSONArray;
import com.newgen.iforms.custom.IFormReference;
import com.newgen.iforms.FormDef;
import com.newgen.iforms.custom.IFormServerEventHandler;
import com.newgen.iforms.custom.IFormCustomHooks;
import com.newgen.webclientcodebase.model.WorkdeskModel;
import com.newgen.ApplicationLogger;
import com.newgen.iforms.controls.util.IFormConstants;
import org.json.simple.JSONArray;
import java.time.format.DateTimeFormatter; 
import java.time.LocalDateTime;   
import java.util.List;
import org.json.simple.JSONObject;

public class CustomCodeHandler extends IFormCustomHooks implements IFormServerEventHandler
{    
    @Override
    public void beforeFormLoad(final FormDef arg0, final IFormReference arg1) { return null; }
    
    @Override
    public String executeCustomService(final FormDef arg0, final IFormReference arg1, final String arg2, final String arg3, final String arg4) {
        return null;
    }
    
    @Override
    public JSONArray executeEvent(final FormDef arg0, final IFormReference arg1, final String arg2, final String arg3) {
        return null;
    }
    
    @Override
    public String generateHTML(final EControl arg0) {
        return null;
    }
    
    @Override
    public String getCustomFilterXML(final FormDef arg0, final IFormReference arg1, final String arg2) {
        return null;
    }
    
    @Override
    public boolean introduceWorkItemInSpecificProcess(final IFormReference arg0, final String arg1) {
        return false;
    }
    
    @Override
    public String introduceWorkItemInWorkFlow(final IFormReference arg0, final HttpServletRequest arg1, final HttpServletResponse arg2) {
        return null;
    }
    
    @Override
    public String introduceWorkItemInWorkFlow(final IFormReference arg0, final HttpServletRequest arg1, final HttpServletResponse arg2, final WorkdeskModel arg3) {
        return null;
    }
    
    @Override
    public String onChangeEventServerSide(final IFormReference arg0, final String arg1) {
        return null;
    }
    
    @Override
    public String postHookExportToPDF(final IFormReference arg0, final File arg1) {
        return null;
    }
    
    @Override
    public void postHookOnDocumentUpload(final IFormReference arg0, final String arg1, final String arg2, final File arg3, final int arg4) {
    }
    
    public void postHookOnDocumentUpload(final IFormReference arg0, final String arg1, final String arg2, final int arg3, final int arg4) {
        
        System.out.println("----------postHookOnDocumentUpload()----------");
        System.out.println("controlId - " + arg1 + " docType - " + arg2 + " docSize - " + arg3 + " docImageIndex - " + arg4);
    }
    
    @Override
    public String setMaskedValue(final String arg0, final String arg1) {
        return arg1;
    }
    
    @Override
    public void updateDataInWidget(final IFormReference arg0, final String arg1) {
    }
    
    @Override
    public String validateDocumentConfiguration(final String arg0, final String arg1, final File arg2, final Locale arg3) {
        return null;
    }
    
    @Override
    public JSONArray validateSubmittedForm(final FormDef arg0, final IFormReference arg1, final String arg2) {
        return null;
    }
    
    @Override
    public String executeServerEvent(IFormReference ifr, String string, String string1, String string2, String string3) {
   if(ctrlId.equals(button7)){
   newer123();
   } 
   if(ctrlId.equals(button7)){
   newer12();
   } 
   if(ctrlId.equals(button7)){
   newer();
   } 
   if(ctrlId.equals(button6)){
   newerName();
   } 
   if(ctrlId.equals(button5)){
   executeServerEvent_e0618518ddd0f88ab5cd0c2324fb5();
   } 
   if(ctrlId.equals(button2)){
   executeServerEvent_ca7e4504c4f7ef5218fd1d576384f();
   } 
   if(ctrlId.equals(undefined)){
   executeServerEvent_217174caad5684accfab00a46fa82();
   } 
   if(ctrlId.equals(undefined)){
   executeServerEvent_217174caad5684accfab00a46fa82();
   } 
   if(ctrlId.equals(button5)){
   executeServerEvent_71af588f08d6380dd6fd32f4ea1bff();
   } 
   if(ctrlId.equals(button5)){
   executeServerEvent_71af588f08d6380dd6fd32f4ea1bff();
   } 
   if(ctrlId.equals(button15)){
   executeServerEvent_0c2134ff-a079-4bc1-9f05-f04957bbb1b8();
   } 
   if(ctrlId.equals(button3)){
   executeServerEvent_button3();
   } 
   if(ctrlId.equals(button4)){
   executeServerEvent_button4();
   } 
        try {
            ifr.setValue("textbox10", "great!! way");                
        } catch (Exception e) {
            ApplicationLogger.writeConsoleLog(null, IFormConstants.DESIGNER_LOGGER_NAME, "Exception in CustomCodeHandler : " + e.getMessage());
        }
           return "";
    }

public String newer123(IFormReference ifr, String string, String string1, String string2, String string3){
 
}

public String newer12(IFormReference ifr, String string, String string1, String string2, String string3){
 
}

public String newer(IFormReference ifr, String string, String string1, String string2, String string3){
 
}

public String newerName(IFormReference ifr, String string, String string1, String string2, String string3){
    String s = "dev";
}

public String executeServerEvent_e0618518ddd0f88ab5cd0c2324fb5(IFormReference ifr, String string, String string1, String string2, String string3){


123141565433sdfghjk.


}

public String karan(IFormReference ifr, String string, String string1, String string2, String string3){

}

public String afaaagag(IFormReference ifr, String string, String string1, String string2, String string3){
agagagag
}

public String dev(IFormReference ifr, String string, String string1, String string2, String string3){
afaafaffa
}

public String abdulblublub(IFormReference ifr, String string, String string1, String string2, String string3){
    String a = "asdf";
}

public String bank(IFormReference ifr, String string, String string1, String string2, String string3){
    
}

public String executeServerEvent_0c2134ff-a079-4bc1-9f05-f04957bbb1b8(IFormReference ifr, String string, String string1, String string2, String string3){
    System.out.println("hello");
}

public String executeServerEvent_button3(IFormReference ifr, String string, String string1, String string2, String string3){
alert("Version 2")
}

public String executeServerEvent_button4(IFormReference ifr, String string, String string1, String string2, String string3){

    new test;
    alert("Version 1")

}


    @Override
    public void postHookOnDocumentOperations(IFormReference objReference, String controlId, String docType, int docImageIndex, String operationType) {
//        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        System.out.println("----------postHookOnDocumentOperations()----------");
        System.out.println("controlId - " + controlId + " docType - " + docType + " docSize - " + docImageIndex + " operationType - " + operationType);
    }

    public String getUserNameInPortal(final IFormReference arg1) {
        // Code here will get executed on opening of form and application
        return "";
    }
    
    
}
