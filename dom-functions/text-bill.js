   function textbill() {
    var sms = 0.75;
    var smsTot =0;

    var call = 2.75 ;
    var callTot = 0;
    var smsCallTot = 0;

    var warn = 30;
    var crit = 50;

    

    function getCall(){
            return callTot;
    }
    function add(_){
        if(_ == "call"){
            return callTot += call;

        }
        else if(_ == "sms"){
            return smsTot += sms;

        }

    }
    
    function getSms(){
        return smsTot;
    }

    function smsCallTotal(){
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
    function totalClassName (){
        if(smsCallTotal() >= getCrit()){
            return "critical"
        }
        else if(smsCallTotal() >= getWarn()){
            return "warning"
        }
    }

    return{
        getCall,
        getSms,
        add,
        smsCallTotal,
        getWarn,
        setCrit,
        getCrit,
        totalClassName
    }
}