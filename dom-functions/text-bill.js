{
var sms = 0.75;
var callTot = 0;
var smsTot = 0;
var call = 2.75;
var smsCallTot ;


function textbill() {
    var warn = 30;
    var crit = 50;

    function get_Call() {
        return call;
    }
    function get_Sms() {
        return sms;
    }

    function getCall() {
        return callTot;
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
        return smsTot;
    }

    function smsCallTotal() {
        return callTot + smsTot

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