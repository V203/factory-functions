describe("Bill Settings Factory functions", function () {




    it("Should test if the correct ogica is ereturned", function () {
        let billWithSettingsA = billWithSettings();
        billWithSettingsA.setCallCost(2.00);
        assert.equal(2.00, billWithSettingsA.getCallCost())



    });
    it("Should check if sms caost is returning the correct amountthe correct", function () {
        let billWithSettingsB = billWithSettings();
        billWithSettingsB.setSmsCost(1.50);
        assert.equal(1.50, billWithSettingsB.getSmsCost());
    });


    it("Should check if the total is returning the amount  equal smsCost + callCost", function () {
        const billWithSettingsC = billWithSettings();
        billWithSettingsC.setCallCost(3.00);
        billWithSettingsC.setSmsCost(2.00);

        assert.equal(5.00, billWithSettingsC.getTotal())


    });

    it("Checks if the warnLevel is set Ccorrectly", function () {
        const billWithSettingsD = billWithSettings();
        billWithSettingsD.setWarnLevel(25);
        assert.equal(25, billWithSettingsD.getWarnLevel())


    })

    it("Checks if the warnLevel is set Ccorrectly", function () {
        const billWithSettingsE = billWithSettings();
        billWithSettingsE.setCritLevel(45);
        assert.equal(45, billWithSettingsE.getCritLevel())

    });

    describe("Using the values",function(){
        it("TBC",function(){
            var billWithSettingsF = billWithSettings();
            billWithSettingsF.setCallCost(1)
            billWithSettingsF.makeCall();
            billWithSettingsF.makeCall();
            assert.equal(2,billWithSettingsF.getCallCost())


    })
});
});