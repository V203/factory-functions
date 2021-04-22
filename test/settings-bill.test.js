describe("Testing the bill with widgets factory functions", function () {
    it("should be able to test the call cost test", function () {
        var theSmsCost = 0;
        var theCallCost = 0;
        var theTotal = 0;

        function setCallCost(callCost){
            return theCallCost = callCost;

        }

        function getCallCost(){
            return theCallCost;
        }

        function setSmsCost(SmsCost){
            return theSmsCost += SmsCost;;
        }
        function getSmsCost(){
            return theSmsCost;
        }
        setCallCost(2.75)
        assert.equal(2.75,getCallCost());

        return{
            getCallCost,
            setCallCost
        }
    })

    
})