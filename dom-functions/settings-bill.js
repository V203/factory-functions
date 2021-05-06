

function billWithSettings() {
    let call = 0;
    let callTotal = 0;

    let sms = 0;
    let smsTotal = 0;

    let total = 0;
    let callSmsTotal = 0;

    let warn = 0;
    let crit = 0;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    function setCall(call_) {
        return call = call_;

    }

    function getCall() {
        return call;
    }
    function getCallTotal() {
        return callTotal.toFixed(2);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setSms(sms_) {
        return sms = sms_
    }


    function getSms() {
        return sms;
    }


    function getSmsTotal() {
        return smsTotal.toFixed(2)
    }



    function togLevel() {
        if (total >= warnLevel) {
            totalSettings.classList.add("warning")
        }
        if (total >= critLevel) {
            totalSettings.classList.remove("danger")
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getTotal() {
        return total = call + sms;
    }

    function getCallSmsTotal() {
         callSmsTotal = smsTotal+callTotal ;
         return callSmsTotal.toFixed(2)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function makeCall() {
        if (!hasReachedCriticalLevel()) {
          return  callTotal += call;
        }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function sendSms() {
        if (!hasReachedCriticalLevel()) {
            return   smsTotal += sms
        }

    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setWarn(warn_) {
        return warn = warn_

    }
    function getWarn() {
        return warn
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setCrit(crit_) {
        return crit = crit_;
    }
    function getCrit() {
        return crit;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function totalClassName() {
        if (hasReachedCriticalLevel()) {
            return "danger";
        }
        if (getCallSmsTotal() >= getWarn()) {
            return "warning";
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function hasReachedCriticalLevel() {
        return getCallSmsTotal() >= getCrit();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function calc(value) {
        if (value === "call") {
           return makeCall();
        }
        else if (value === "sms") {
          return  sendSms();

        }
        callSmsTotal = smsTotal+ callTotal
       return callSmsTotal.toFixed(2)
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
        getCrit,
        totalClassName,
        hasReachedCriticalLevel,
        togLevel,
        calc



    }



}
