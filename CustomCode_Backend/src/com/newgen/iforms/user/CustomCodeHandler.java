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

public void executeServerEvent_button1() {ifr.setValue("textbox456", "lol");} 
    
   
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
