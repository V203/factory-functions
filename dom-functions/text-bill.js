function textbill() {
    var sms = 0.75;
    var smsTot = 0;

    var call = 2.75;
    var callTot = 0;
    var smsCallTot = 0;

    var warn = 30;
    var crit = 50;



    function getCall() {
        return callTot;
    }
    function get_call(){
        return call;
    }


    
       
            // total_ = call_ + sms_
           
            // if (total_ >= 50) {
            //     totalOne.classList.add("danger")
            // } else if (total_ >= 30) {
            //     totalOne.classList.add("warning")
            // }
   


    // function add(par1) {
        
    //     if (par1 == "call") {
    //         return callTot += call;

    //     }
    //     else if (par1 == "sms") {
    //         return smsTot += sms;

    //     }
    //     return smsTot,callTot;
        
    // }

    function getSms() {
        return smsTot;
    }
    function get_sms(){
        return sms
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
            return "danger"
        }
        else if (smsCallTotal() >= getWarn()) {
            return "warning"
        }
    }
    function add(x) {
       

             if (x === "call") {
                 callTot += call
                 
             }
             else if (x=== "sms") {
                 smsTot += sms
                 
             }
        
             smsCallTotal()
            
             
         }

    return {
        getCall,
        get_call,
        getSms,
        get_sms,
        add,
        smsCallTotal,
        getWarn,
        setCrit,
        getCrit,
        totalClassName
    }
}