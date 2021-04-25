describe("Bill with settings: setting the functions.", function () {
    var billSetA = billWithSettings();
    it("Should test if call set twice at 2.50 is equal to 5.00.", function () {

        billSetA.setCall(2.50);
        billSetA.setCall(2.50);

        assert.equal(5.00, billSetA.getTotal());

    })
    it("Should test if sms is set twice at 0.51 is equal 1.02.", function () {
        var billSetB = billWithSettings();
        billSetB.setSms(0.51);
        billSetB.setSms(0.51);

        assert.equal(1.02, billSetB.getTotal());

    })

    it("Should test if call Total is equal to 3.75 @ 1.25 per call.", function () {
        var billSetC = billWithSettings();
        billSetC.setCall(1.25);
        billSetC.setCall(1.25);
        billSetC.setCall(1.25);

        assert.equal(3.75, billSetC.getCall());
    })

    it("Should Test if sms total is equal 1.50 @ 0.50 per sms * 3.", function () {
        var billSetD = billWithSettings();
        billSetD.setSms(0.50);
        billSetD.setSms(0.50);
        billSetD.setSms(0.50);

        assert.equal(1.50, billSetD.getSms());

    })
    it("General total's test: total call, total sms.", function () {
        var billSetE = billWithSettings();
        billSetE.setCall(1.20);
        billSetE.setSms(0.51);
        billSetE.setCall(1.20);
        billSetE.setSms(0.51);

        assert.equal(2.40, billSetE.getCall());
        assert.equal(1.02, billSetE.getSms());
        assert.equal(3.42, billSetE.getTotal());

    })



});
describe("Bill with settings: using the functions.", function () {
    var billSetF = billWithSettings();

    it("The makeCall functions should be equal to 2.04 @ 1.02 per call.", function () {
        billSetF.setCall(1.02)
        billSetF.makeCall();
        billSetF.makeCall();

        assert.equal(2.04, billSetF.getCallTotal());
    })
    it("The sendSms functions should be equal to 1.56 @ 0.52 * 3 per sms.", function () {
        billSetF.setSms(0.52)
        billSetF.sendSms();
        billSetF.sendSms();
        billSetF.sendSms();

        assert.equal(1.56, billSetF.getSmsTotal());
    })
    it("Should test  if makeCall and sendCall added together are equal to callSmsTotal.", function () {
        var billSetG = billWithSettings();
        billSetG.setCall(1.50);
        billSetG.setSms(0.50);
        billSetG.makeCall();
        billSetG.sendSms();

        assert.equal(2.00, billSetG.getCallSmsTotal());
    })

});

describe("Bill with settings: setting the warning and critical levels.", function () {
    var billSetH = billWithSettings();
    it("Should be able to set the warning level to 20",function(){
        billSetH.setWarn(20);

        assert.equal(20,billSetH.getWarn())
    })
    it("Should be able to set the critical level to 40",function(){
        billSetH.setCrit(40);

        assert.equal(40,billSetH.getCrit())
    })
});