/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.newgen.iforms.user;

import com.newgen.iforms.custom.IFormListenerFactory;
import com.newgen.iforms.custom.IFormReference;
import com.newgen.iforms.custom.IFormServerEventHandler;

/**
 *
 * @author mohit.sharma
 */
public class IFormListener implements IFormListenerFactory{

    @Override
    public IFormServerEventHandler getClassInstance(IFormReference ifr) {
        //String procName = ifr.getProcessName();
        //if(procName.equals("hello me")){
            return new CustomCodeHandler();
       // }
        
    }
}
