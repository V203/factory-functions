

function billWithSettings() {
    var call = 0;
    var callTotal = 0;

    var sms = 0;
    var smsTotal = 0;

    var total = 0;

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
        return call;
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setSms(sms_){
        return sms += sms_
    }

    function getSms(){
        return sms;
    }
    function getSmsTotal(){
        return sms
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getTotal(){
        return total = call + sms;
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function makeCall(){
        return call++;
    }

    function sendSms(){
        sms += sms
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
        makeCall,
        sendSms,
        setWarn,
        getWarn,
        setCrit,
        getCrit



    }



}
