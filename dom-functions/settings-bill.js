

function billWithSettings() {
    var call = 0;
    var sms = 0;
    var total = 0;
    var warnLevel = 0;
    var critLevel = 0;
    var smsTotal = 0;
    var callTotal = 0;

    function setCallCost(call_) {
        return call += call_;
    }

    function getCallCost() {
        return call;
    }
    function getCostTotal(){
        return total = call + sms
    }

    function setSmsCost(sms_) {
        sms += sms_;
    }

    function getSmsCost() {
        return sms
    }

    function getTotal() {
        return total = smsTotal + callTotal;
    }
    function setWarnLevel(warnLevel_) {
        return warnLevel += warnLevel_;
    }

    function getWarnLevel() {
        return warnLevel;
    }

    function setCritLevel(critLevel_) {
        return critLevel += critLevel_;
    }

    function getCritLevel() {
        return critLevel;
    }
    function setCallTotal(callTotal_){
        return callTotal += callTotal_
    }
    function setSmsTotal(smsTotal_){
        return smsTotal += smsTotal_
    }

    function makeCall() {
      callTotal += call;      
    }
    function sendSms(){
        return smsTotal += sms;
    }

    function setTotal(total_){
        total = total_

    }
    function getCallTotal(){
        return callTotal
    }
    function setCallTotal(callTotal_){
        return callTotal += callTotal_
    }
    function getSmsTotal(){
        return smsTotal
    }
    function hasReachedWarn(){
        return getTotal() >= getWarnLevel()
 
    }
    function hasReachedCrit(){

    }
   

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotal,
        setTotal,
        setWarnLevel,
        getWarnLevel,
        getCritLevel,
        setCritLevel,
        makeCall,
        callTotal,
        smsTotal,
        setCallTotal,
        sendSms,
        getCallTotal,
        getCostTotal,
        setSmsTotal,
        getSmsTotal,
        hasReachedCrit,
        hasReachedWarn
        
                
    }

}
