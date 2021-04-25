

function billWithSettings() {
    var call = 0;
    var callTotal = 0;

    var sms = 0;
    var smsTotal = 0;

    var total = 0;
    var CallSmsTotal = 0;

    var warn = 0;
    var crit = 0;
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    function setCall(call_) {
        return call += call_;

    }

    function getCall() {
        return call;
    }
    function getCallTotal(){
        return callTotal;
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setSms(sms_){
        return sms += sms_
    }

    function getSms(){
        return sms;
    }
    function getSmsTotal(){
        return smsTotal
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getTotal(){
        return total = call + sms;
    }

    function getCallSmsTotal(){
        return CallSmsTotal = callTotal + smsTotal;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function makeCall(){
        return callTotal += call;
    }

    function sendSms(){
      return  smsTotal += sms
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setWarn(warn_){
        return warn += warn_

    }
    function getWarn(){
        return warn
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setCrit(crit_){
        return crit += crit_;
    }
    function getCrit(){
        return crit;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return {
        setCall,
        getCall,
        getCallTotal,
        setSms,
        getSms,
        getSmsTotal,
        getTotal,
        getCallSmsTotal,
        makeCall,
        sendSms,
        setWarn,
        getWarn,
        setCrit,
        getCrit



    }



}
