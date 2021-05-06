function calculateBill() {

    let warn = 20;
    let crit = 30;
    let call = 2.75;
    let sms = 0.75;
    let total = 0;

    function getCrit() {
        return crit
    }
    function getWarn() {
        return warn;
    }
    function getTotal() {
        return total;
    }

    function totalClassName(){
         
        if(getCrit() <= getTotal()){
            return "danger"
        }
        else if (getWarn() <= getTotal()) {
            return "warning"
        }

    }

    function calculate(str__) {
        let str = str__.split(",");
        for (let i = 0; i < str.length; i++) {
            let billString = str[i].trim();
            if (billString === "call") {
                total += 2.75;
            }
            else if (billString === "sms") {
                total += 0.75;
            }
            
            


        }
        return total.toFixed(2);
    }



    return {
        calculate,
        getWarn,
        getCrit,
        getTotal,
        totalClassName

    }

}