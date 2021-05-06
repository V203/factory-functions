describe("Text Bill factory functions", function () {
    describe("Testing the values of the text bill factory functions ", function () {
        it("The add function with parameter of 'sms' should equal 0.75", function () {
            let billtext = textbill();
            billtext.add("sms")
            assert.equal(0.75,billtext.getSms() )
        })
        it("The add function with parameter of 'call' should equal 2.75", function () {
            let billtext = textbill();
            billtext.add("call")
            assert.equal(2.75, billtext.getCall())
        })
        it("Call and sms added together should equal the expected total 3.50", function () {
            let billtext = textbill();
            billtext.add("call");
            billtext.add("sms");
            assert.equal(3.50, billtext.smsCallTotal())
        })
        
        it("The warning level should be 30.00", function () {
            let billtext = textbill();
            billtext.add("call");
            assert.equal(2.75, billtext.smsCallTotal())
            assert.equal(30, billtext.getWarn())
        });

        it("The critical level should be 50.00", function () {
            let billtext = textbill();
            billtext.add("call");
            billtext.add("call")
            assert.equal(50, billtext.getCrit())
            assert.equal(5.50, billtext.getCall())
        });

    })


    describe("Using the text bill values", function () {

        it("Should return warning if the total is above 30.00", function () {
            let billtext = textbill();
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");


            
            assert.equal(13.50, billtext.getSms());
            assert.equal(63.00, billtext.smsCallTotal());
            assert.equal("danger", billtext.totalClassName())

        })

        it("Should return critical if the total is above 50.00", function () {
            let billtext = textbill();
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");
            billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms"); billtext.add("call"); billtext.add("sms");

            assert.equal(42.00, billtext.smsCallTotal())
            assert.equal(9.00, billtext.getSms())
            assert.equal(33.00, billtext.getCall())
            assert.equal("warning", billtext.totalClassName())


        })


    })

    




});