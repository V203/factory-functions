

    {

    function textbill() {
        let sms = 0.75;    
        let call = 2.75;
        let smsTotTb = 0;
        let callTot = 0;
        let warn = 30;
        let crit = 50;
    
        
        function add(x) {
            if (x == "call") {
                addCall()
                // return callTot
            }
            else if (x == "sms") {
                addSms()
            }
            addCallSms();
            // smsCallTotal();
            //return smsCallTotal()
        }



        


        // var smsCallTotTb = smsTotTb + callTot

        function getCall() {
            return callTot.toFixed(2);
        }
        function get_call() {
            return call.toFixed(2);
        }

        {
            function getSms() {
                return smsTotTb.toFixed(2);
            }
            function get_sms() {
                return sms.toFixed(2);
            }

            function smsCallTotal() {

                 smsCallTotTb = smsTotTb + callTot;
                 return smsCallTotTb.toFixed(2)

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

            function addCall() {
                return callTot += 2.75
            }
            function addSms() {
                return smsTotTb += 0.75
            }
            function addCallSms(){
                return smsTotTb + callTot
            }





            return {
                getCall,
                get_call,
                getSms,
                get_sms,
                add,
                addCall,
                addSms,
                addCallSms,
                smsCallTotal,
                getWarn,
                setCrit,
                getCrit,
                totalClassName
            }
        }

    }
}