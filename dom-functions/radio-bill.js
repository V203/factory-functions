
{





    function radiobill() {
        let smsTot = 0;

        let call_smsTot = 0;
        let sms = 0.75;
        let call = 2.75;
        let warn = 30;
        let crit = 50;
        let callTot = 0;



        function checked(value) {


            if (value === "call") {
                addCall()
            }
            else if (value === "sms") {

                addSms()
            }
            // call_smsTot = smsTot + callTot;
        }
        function getSmsTot() {
            return smsTot.toFixed(2);
        }
        function getCallTot() {
            return callTot.toFixed(2)
        }
        function getWarn() {
            return warn;
        }
        function getCrit() {
            return crit;
        }
        function callSmsTot() {
             call_smsTot = callTot + smsTot;
            return call_smsTot.toFixed(2)
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
        } function addCall() {
            return callTot += call
        }
        function addSms() {
            return smsTot += sms
        }


        return {
            setSms,
            getSmsTot,
            setCall,
            getCallTot,
            addCall,
            addSms,
            getWarn,
            getCrit,
            callSmsTot,
            checked,
            totalClassName,

        }
    }
}