





var warn = 30;
var crit = 50;


var callTot = 0;
var smsTot = 0;
var sms = 0.75;
var call = 2.75;
var call_smsTot =0 ;

function radiobill() {

    function checked(value) {
        if (value === "call") {
            callTot += call   
        } 
        else if (value === "sms") {
            smsTot += sms
        }
        return call_smsTot = smsTot+callTot;
    }
    function getSmsTot() {
        return smsTot.toFixed(2);
    }
    function getCallTot() {
        return callTot.toFixed(2);
    }
    function getWarn() {
        return warn;
    }
    function getCrit() {
        return crit;
    }
    function callSmsTot() {
        return call_smsTot.toFixed(2);
    }

    function totalClassName() {
        if (callSmsTot() >= getCrit()) {
            return "danger"
        }
        else if (callSmsTot() >= getWarn()) {
            return "warning"
        }
    }
    function setCall() {
        return call;
    }
    function setSms() {
        return sms;
    }

    return {
        setSms,
        getSmsTot,
        setCall,
        getCallTot,
        getWarn,
        getCrit,
        callSmsTot,
        checked,
        totalClassName,

    }
}