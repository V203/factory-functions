
   
    let call_bs = 0;
    let callTotal_bs = 0;
    
    let sms_bs = 0;
    let smsTotal_bs = 0;
    
    let total_bs = 0;
    let CallSmsTotal_bs = 0;

function billWithSettings() {
    let warn = 0;
    let crit = 0;


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    function setCall(call_) {
        return callTotal_bs += call_;

    }

    function getCall() {
        return call_bs;
    }
    function getCallTotal() {
        return callTotal_bs;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setSms(sms_) {
        return smsTotal_bs += sms_
    }

    function getSms() {
        return sms_bs;
    }
    function getSmsTotal() {
        return smsTotal_bs
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getTotal() {
        return total_bs = call_bs + sms_bs;
    }

    function getCallSmsTotal() {
        CallSmsTotal_bs = callTotal_bs + smsTotal_bs;
        return CallSmsTotal_bs.toFixed(2)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function makeCall() {
        if (!hasReachedCriticalLevel()) {
            return callTotal_bs += call_bs;
        }

    }

    function sendSms() {
        if (!hasReachedCriticalLevel()) {
            return smsTotal_bs += sms_bs
        }

    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setWarn(warn_) {
        return warn += warn_

    }
    function getWarn() {
        return warn
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setCrit(crit_) {
        return crit += crit_;
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function calc_bs(y) {


        if (y === "call") {
            makeCall();
            // callTotalSettings.innerHTML = getCall();
        }
        else if (y === "sms") {
            sendSms();
            
            // smsTotalSettings.innerHTML = getSms();
        }

        //  totalSettings.innerHTML = getCallSmsTotal()
        // if (total <= critLevel ){
        //  total = total;

        // }
        // totalSettings.innerHTML = total.toFixed(2);
        // if (total >= warnLevel) {
        //     totalSettings.classList.add("warning");

        // } if (total >= critLevel) {
        //     totalSettings.classList.add("danger");
        // }

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
        calc_bs

    }
}
