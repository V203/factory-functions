function calculateBill() {

    var total = 0;
    var warn = 20;
    var crit = 30;
    var total = 0 ;

    function getCrit(){
        return crit
    }
    function getWarn(){
        return warn;
    }
    function getTotal(){
        return total;
    }

    function totalClassName(){
         
        if(getCrit() <= getTotal()){
            return "danger"
        }
        else if(getWarn() <= getTotal()){
            return "warning"
        }
        
    }

    function calculate(str__) {
        var str = str__.split(",");
        for (var i = 0; i < str.length; i++) {
            var billString = str[i].trim();
            if (billString === "call") {
                total += 2.75;
            }
            else if (billString === "sms") {
                total += 0.75;
            }
        } 
        return total 
    }



    return {
        calculate,
        getWarn,
        getCrit,
        getTotal,
        totalClassName

    }

}