function radiobill(){
    var call = 2.75;
    var callTot = 0;

    var sms = 0.75;
    var smsTot =0;

    var call_smsTot = 0; 

    var warn = 30;
    var crit = 50;

    function getSmsTot(){
        return smsTot;
    }

    function getCallTot(){
        return callTot;
    }

    function getWarn(){ 
        return warn;
    }
    function getCrit(){ 
        return crit;
    }

    function callSmsTot(){
        return call_smsTot = smsTot + callTot;
    } 

    function checked(value){
        if(value == "call"){
            callTot += call;

        }else if(value == "sms"){
            smsTot += sms;
        }

    }

        function totalClassName(){
            if (callSmsTot() >= getCrit()){
                return "critical"
            }
           else if(callSmsTot() >= getWarn()){
                return "warning"
            }
            
        }

    
    
    return{
        getSmsTot,
        getCallTot,
        getWarn,
        getCrit,
        callSmsTot,
        checked,
        totalClassName
        
    }
}