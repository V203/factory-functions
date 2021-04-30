describe("Radio bill factory functions", function () {
    describe("Testing the values", function () {
        it("Should ttest if the value of call is equal to 2.75", function () {
            let radio_bill = radiobill();
            radio_bill.checked("call");
            assert.equal(2.75, radio_bill.getCallTot());
            assert.equal(2.75, radio_bill.callSmsTot());
        })

        it("Should ttest if the value of sms is equal to 0.75", function () {
            let radio_bill = radiobill();
            radio_bill.checked("sms");
            assert.equal(0.75, radio_bill.getSmsTot());
            assert.equal(0.75, radio_bill.callSmsTot());
        })
        it("Should test if the value of 2 sms's and 2 call's is equal to 7.00", function () {
            let radio_bill = radiobill();
            radio_bill.checked("sms");
            radio_bill.checked("call");
            radio_bill.checked("sms");
            radio_bill.checked("call");

            assert.equal(1.50, radio_bill.getSmsTot())
            assert.equal(5.50, radio_bill.getCallTot())
            assert.equal(7.00, radio_bill.callSmsTot());
        })
        it("Should test if the value of warning level is equal to 30", function () {
            let radio_bill = radiobill();

            assert.equal(30, radio_bill.getWarn());

        })

        it("Should test if the value of 'critical' level is equal to 50", function () {
            let radio_bill = radiobill();

            assert.equal(50, radio_bill.getCrit());

        })
    })

    describe("Using the radio bill values", function () {

        it("sms should equal 4.50 and call should equal 0.00 and grand total should equal 4.50", function () {
            let radio_bill = radiobill();
            radio_bill.checked("sms"); radio_bill.checked("sms"); radio_bill.checked("sms");
            radio_bill.checked("sms"); radio_bill.checked("sms"); radio_bill.checked("sms");

            assert.equal(4.50, radio_bill.getSmsTot());
            assert.equal(4.50, radio_bill.callSmsTot());
            assert.equal(0.00, radio_bill.getCallTot());

        })
        it("should sms total equal 2.25 ,call total equal 8.25 and grand total equal 10.50", function () {
            let radio_bill = radiobill();
            radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("call");
            radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");

            assert.equal(2.25, radio_bill.getSmsTot());
            assert.equal(8.25, radio_bill.getCallTot());
            assert.equal(10.50, radio_bill.callSmsTot());
        })

        it("Should return warning if the if warning level is reached", function () {
            let radio_bill = radiobill();
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");

            assert.equal(6.75, radio_bill.getSmsTot());
            assert.equal(24.75, radio_bill.getCallTot());
            assert.equal(31.50, radio_bill.callSmsTot());
            assert.equal("warning", radio_bill.totalClassName())
        })

        it("Should return 'critical'  if the if critical level is reached", function () {
            let radio_bill = radiobill();
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");
            radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms"); radio_bill.checked("call"); radio_bill.checked("sms");

            assert.equal(11.25, radio_bill.getSmsTot());
            assert.equal(41.25, radio_bill.getCallTot());
            assert.equal(52.50, radio_bill.callSmsTot());
            assert.equal("danger", radio_bill.totalClassName())
        })
    });
})
