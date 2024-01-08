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
    public void beforeFormLoad(final FormDef arg0, final IFormReference arg1) {
        // Code here will get executed on opening of form and application
        
    }
    
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
    public String executeServerEvent(IFormReference ifr, String string, String string1, String string2) {

//          DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy"); 
//          LocalDateTime now = LocalDateTime.now();
//          dtf.format(now);
//        
//          ifr.setValue("currentDate",dtf.toString());
//          ifr.setValue("address", "4150 S. Four Mile Run Dr.");
//          ifr.setValue("userName","Name  :  Ms. Aldana Alexendra Victoria");
//          ifr.setValue("dateOfBirth","DOB  :  30/05/1995");
//          ifr.setValue("aadharId","Aadhar  :  323211110000");
//          ifr.setValue("panNo","PAN  :  CHGPJ1243K");
//          ifr.setValue("jointAccount","Joint Account  :  No");
          
//        ifr.clearTable("table1");        

//        JSONArray obj=new JSONArray();
//        obj.add("ritika");
//        obj.add("test");
//        ifr.setValue("listbox1", obj);
//        
//        int[] arr1=new int[2];
//        arr1[0]=0;
//        arr1[1]=2 ;
//        int[] arr2=new int[2];
//        arr2[0]=0;
//        arr2[1]=1;
//        int[] arr1 = {0,1,3};
//        int[] arr2 = {0,1,2};
//        JSONObject obj=new JSONObject();
//        JSONArray arr=new JSONArray();
//        obj.put("Column","New");
//        obj.put("Column2","abc");
//        obj.put("Column3","Column");
//        arr.add(obj);
//        ifr.deleteRowsFromGrid("table1", arr1);
//        ifr.deleteRowsFromGrid("table2", arr2);
//        ifr.setStyle("textbox8","backcolor","yellow");
//        ifr.addDataToGrid("table1",arr);
//        String value = ifr.getTableCellValue("table1", 0, 0);
//        ifr.setValue("textbox7",value);
//        String value2 = ifr.getValue("textbox8");
//        ifr.setTableCellValue("table1",0,1,"Akshit");
//        ifr.setTableCellValue("table1", 0,1, "34");
//        ifr.setTableCellValue("table2", 0,2, "testingsetvalue");
//        ifr.setTableCellValue("table3", 0,0, "newtestingsetvalue");

//        ifr.addItemInCombo("combo1", "employee name", "employee-abc", "select employee");
//        ifr.removeItemFromCombo("combo2", 0);

//      ifr.addItemInTableCellCombo("table1", 0, 1, "string", "name");
//      ifr.removeItemFromTableCellCombo("table2", 1, 1, 0);
//
//      ifr.setStyle("textbox7","readonly","true");
//      ifr.setStyle("textbox8","custompattern","pattern");
//    
//
//      ifr.setStyle("toggle1","fontweight","bold") ;
//
//
//      ifr.setStyle("radio1","fontweight","italic");
//
//
//      ifr.setStyle("slider1","fontweight","italic");
//      ifr.setStyle("slider2","fontcolor","#0000ff") ;
//
//
//      ifr.setStyle("label1","fontsize","26px");
//      ifr.setStyle("label2","fontcolor","#00FF00");
//      ifr.setStyle("label3","fontweight","italic");
//
      
//      for(int j = 0; j < )
//      for(int i = 0; i < 5000; i++) {
//        String val = "abc_" + i;
//        ifr.addItemInTableCellCombo("table1",0,1,val,val);
//      }
//
//       for(int i = 0; i < 5000; i++) {
//            String val = "abc_" + i;
//            ifr.addItemInTableCellCombo("table2",1,1,val,val);
//        }

//      ApplicationLogger.writeConsoleLog("ng1post11apr","IFormViewer","listbox and table clear");
//        String s = (String) ifr.getValue("textbox1");
//        String s1 = (String) ifr.getValue("textbox2");
//        String s2 = (String) ifr.getValue("textbox3");
//        String s3 = (String) ifr.getValue("textbox4");
       
//        ApplicationLogger.writeConsoleLog("ng1release27apr", IFormConstants.DESIGNER_LOGGER_NAME, "Invalid parameters in DB Linking Event -->" + s +" "+s1 +" "+s2 +" "+s3);

//String str1 = String.valueOf(ifr.getTableCellValue(string, 0, string1));
//        ApplicationLogger.writeConsoleLog("ng1release27apr", IFormConstants.DESIGNER_LOGGER_NAME, "RESULT for str1" + str1);
//        String str2 = String.valueOf(ifr.getTableCellValue(string, 0, 1));
//        ApplicationLogger.writeConsoleLog("ng1release27apr", IFormConstants.DESIGNER_LOGGER_NAME, "RESULT  for str2 " + str2);
            try {
                
//                JSONArray obj=new JSONArray();
//                obj.add("ritika");
//                obj.add("test");
//                ifr.setValue("listbox1", obj);
//                ifr.applyGroup("Control Set 1");  
//                ifr.applyGroup("Control Set 2");
//                ifr.resetGroup("Control Set 2");
//                ifr.resetGroup("Control Set 1");
//                ifr.getTableCellValue("table45", 0, 0);
//                String value = "Supervisor";
//                String query = "select UserName from PDBUser where PersonalName ='" + value + "'";
//                List<List<String>> data= ifr.getDataFromDB(query);
//                String userName = (String)((List)data.get(0)).get(0);

//                ifr.clearDocList("doclist1");
//                ApplicationLogger.writeConsoleLog(null, IFormConstants.DESIGNER_LOGGER_NAME, "CustomCodeHandler : ClearDocList() called");

                ifr.setStyle("frame1", "loadSection", "Y");
                com.newgen.json.JSONArray res = (com.newgen.json.JSONArray)ifr.getTableCellValue("table1",0,"listbox1");
                System.out.println("getTableCellValue - " + res);
                
                String prevVal = (String)ifr.getValue("radio1");
                System.out.println("getValue radio1 prevVal - " + prevVal);
                ifr.setValue("radio1", "true");
                String NewVal = (String)ifr.getValue("radio1");
                System.out.println("getValue radio1 NewVal - " + NewVal);
                
            } catch (Exception e) {
                ApplicationLogger.writeConsoleLog(null, IFormConstants.DESIGNER_LOGGER_NAME, "Exception in CustomCodeHandler : " + e.getMessage());
            }
               return "";
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