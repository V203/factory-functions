

    {
    let smsTotTb = 0;
    let callTotTb = 0;

    function textbill() {
        // let sms = 0.75;    
        // let call = 2.75;
        
        function addTb(x) {
            if (x == "call") {
                addCall()
                // return callTotTb
            }
            else if (x == "sms") {
                addSms()
            }
            addCallSms();
            // smsCallTotalTb();
            //return smsCallTotalTb()
        }



        let warn = 30;
        let crit = 50;


        // var smsCallTotTb = smsTotTb + callTotTb

        function getCall() {
            return callTotTb.toFixed(2);
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

            function smsCallTotalTb() {

                return smsCallTotTb = smsTotTb + callTotTb;

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
                if (smsCallTotalTb() >= getCrit()) {
                    return "danger"
                }
                else if (smsCallTotalTb() >= getWarn()) {
                    return "warning"
                }
            }

            function addCall() {
                return callTotTb += 2.75
            }
            function addSms() {
                return smsTotTb += 0.75
            }
            function addCallSms(){
                return smsTotTb + callTotTb
            }





            return {
                getCall,
                get_call,
                getSms,
                get_sms,
                addTb,
                addCall,
                addSms,
                addCallSms,
                smsCallTotalTb,
                getWarn,
                setCrit,
                getCrit,
                totalClassName
            }
        }

    }
}