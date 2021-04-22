

function billWithSettings() {
    let call = 0;
    let sms = 0;
    let total = 0;
    let warnLevel = 0;
    let critLevel = 0;
    function setCallCost(call_) {
        return call += call_;
    }

    function getCallCost() {
        return call;
    }

    function setSmsCost(sms_) {
        sms += sms_;
    }

    function getSmsCost() {
        return sms
    }

    function getTotal() {
        return total = sms + call;
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

    function makeCall() {
        return call += call
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotal,
        setWarnLevel,
        getWarnLevel,
        getCritLevel,
        setCritLevel,
        makeCall
    }

}
