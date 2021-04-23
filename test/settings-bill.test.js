describe("Bill Settings Factory functions", function () {

    it("Should test if the Call cost is equall to 2.00", function () {
        let billWithSettingsA = billWithSettings();
        billWithSettingsA.setCallCost(2.00);
        assert.equal(2.00, billWithSettingsA.getCallCost())

    });
    it("Should check if sms cost is returning 1.50", function () {
        let billWithSettingsB = billWithSettings();
        billWithSettingsB.setSmsCost(1.50);
        assert.equal(1.50, billWithSettingsB.getSmsCost());
    });


    it("Should check if the total is returning the amount  equal smsCost + callCost", function () {
        const billWithSettingsC = billWithSettings();
        billWithSettingsC.setCallCost(3.00);
        billWithSettingsC.setSmsCost(2.00);

        assert.equal(5.00, billWithSettingsC.getCostTotal())


    });

    it("Should check if the warning leves are settable levels", function () {
        const billWithSettingsD = billWithSettings();
        billWithSettingsD.setWarnLevel(25);
        assert.equal(25, billWithSettingsD.getWarnLevel())


    })

    it("Should check if the critical leves are settable levels", function () {
        const billWithSettingsE = billWithSettings();
        billWithSettingsE.setCritLevel(45);
        assert.equal(45, billWithSettingsE.getCritLevel())

    });


});
describe("Using the settings bill value's", function () {
    it("Should Should Test if makeCall  and sendSms are addinng the required total's   ", function () {
        var billWithSettingsF = billWithSettings();
        billWithSettingsF.setCallCost(2);
        billWithSettingsF.setSmsCost(0.54);;
        billWithSettingsF.makeCall();
        billWithSettingsF.makeCall();

        billWithSettingsF.sendSms();

       // assert.equal(0, billWithSettingsF.getTotal());
        assert.equal(4, billWithSettingsF.getCallTotal());
        assert.equal(0.54, billWithSettingsF.getSmsCost());


    })
    it("Should test if the total is equal to call and sms", function () {
        var billWithSettingsG = billWithSettings();
        billWithSettingsG.setCallTotal(3.50)
        billWithSettingsG.setSmsTotal(3.50)
        assert.equal(7.00, billWithSettingsG.getTotal());
    })
    it("Should send sms twice should equal 3.00", function () {
        var billWithSettingsH = billWithSettings();
        billWithSettingsH.setSmsCost(1.50)
        billWithSettingsH.sendSms()
        billWithSettingsH.sendSms()
        assert.equal(3.00, billWithSettingsH.getSmsTotal());
        
    })


    describe("Bill with Settings Warning levels and Critical level's", function () {

        it("Should check if the warning and the critical  level can be set", function () {
            var billWithSettingsJ = billWithSettings();
            billWithSettingsJ.setCritLevel(12)
            billWithSettingsJ.setWarnLevel(10);
            assert.equal(10, billWithSettingsJ.getWarnLevel())
            assert.equal(12, billWithSettingsJ.getCritLevel())
        })
        it("Should check if the critical is reached", function () {

        })

    });


});