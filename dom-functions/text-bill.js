{
let sms = 0.75;
let callTot = 0;
let smsTot = 0;
let call = 2.75;
let smsCallTot ;
let warn = 30;
let crit = 50;

function textbill() {
   

    function get_Call() {
        return call;
    }
    function get_Sms() {
        return sms;
    }

    function getCall() {
        return callTot.toFixed(2);
    }
    //////////////////////////////////////////////////////////////////////////////////
    function _add(value) {

        if (value == "call") {
          return  callTot += call;

        }
        else if (value == "sms") {
           return smsTot += sms;
        }

        // return smsCallTotal()
    }
    ///////////////////////////////////////////////////////////////////////////////////////////

    function getSms() {
        return smsTot.toFixed(2);
    }

    function smsCallTotal() {
         smsCallTot= callTot + smsTot
         return smsCallTot.toFixed(2)
    }

    function getWarn() {
        return warn
    }
    function setCrit(crit_) {
        return crit += crit_;
    }
    function getCrit() {
        return crit;
    }
    function totalClassName() {
        if (smsCallTotal() >= getCrit()) {
            return "danger"
        }
        else if (smsCallTotal() >= getWarn()) {
            return "warning"
        }
    }

    return {
        getCall,
        get_Call,
        getSms,
        get_Sms,
        _add,
        smsCallTotal,
        getWarn,
        setCrit,
        getCrit,
        totalClassName
    }
}

}