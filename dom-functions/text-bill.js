function textbill() {
    var sms = 0.75;
    var smsTot = 0;

    var call = 2.75;
    var callTot = 0;
    var smsCallTot = 0;

    var warn = 30;
    var crit = 50;

    function get_Call() {
        return call;
    }
    function get_Sms() {
        return call;
    }

    function getCall() {
        return callTot;
    }
    function add(_) {
       
        if(_ === "call"){
          return  callTot += get_Call()

        }
        else if(_ === "sms"){
            return smsTot += sms;
        }
        return getCall();
        return  smsCallTotal();
        return getSms()

    }


    function getSms() {
        return smsTot;
    }

    function smsCallTotal() {
        return smsCallTot = callTot + smsTot

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
            return "critical"
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
        add,
        smsCallTotal,
        getWarn,
        setCrit,
        getCrit,
        totalClassName
    }
}