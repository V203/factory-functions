describe("Bill Settings Factory functions", function () {
    var billSetA = billWithSettings()
    it("Should test if call set twice at 2.50 is equal to 5.00", function () {
        
        billSetA.setCall(2.50);
        billSetA.setCall(2.50);        
        assert.equal(5.00,billSetA.getTotal()); 

    })
    it("Should test if sms is set twice at 0.51 is equal 1.02", function () {
        var billSetB = billWithSettings()        
        billSetB.setSms(0.51);
        billSetB.setSms(0.51)                
        assert.equal(1.02,billSetB.getTotal()); 

    })

    it("Should test if call Total is equal to 3.75 @ 1.25 per call ",function(){
        var billSetC = billWithSettings();
        billSetC.setCall(1.25);
        billSetC.setCall(1.25);
        billSetC.setCall(1.25);
        assert.equal(3.75,billSetC.getCallTotal());
    })

    it("Should Test if sms total is equal 1.50 @ 0.50 per sms * 3",function(){
        var billSetD = billWithSettings();
        billSetD.setSms(0.50)
        billSetD.setSms(0.50)
        billSetD.setSms(0.50)
        assert.equal(1.50,billSetD.getSmsTotal());

    })
    it("General total's test: total call, total sms ",function(){
        var billSetE = billWithSettings();
        billSetE.setCall(1.20);
        billSetE.setSms(0.51);
        billSetE.setCall(1.20);
        billSetE.setSms(0.51);

        assert.equal(2.40,billSetE.getCallTotal())
        assert.equal(1.02,billSetE.getSmsTotal())
        assert.equal(3.42,billSetE.getTotal())

    })
    


});
describe("Using the functions",function(){
    var billSetF = billWithSettings();
    
    it("The makeCall functions should be to 1.02",function(){
        billSetF.setCall(1.02)
        billSetF.makeCall();
        
        
        assert.equal(1.02,billSetF.getCallTotal())
    })

})