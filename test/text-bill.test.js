describe("Text Bill factory functions", function () {
    describe("Testing the values of the text bill factory functions ", function () {
        it("Sending a sms sould equal 0.75", function () {
            let billtext = textbill();
            assert.equal(0.75, billtext.sendSms())
        })
        it("Making  a call sould equal 2.75", function () {
            let billtext = textbill();
            assert.equal(2.75, billtext.makeCall())
        })
        it("Call and sms added together should equal the expected total 3.50", function () {
            let billtext = textbill();
            billtext.makeCall();
            billtext.sendSms();
            assert.equal(3.50, billtext.smsCallTotal())
        })

        it("The warning level should be 30.00", function () {
            let billtext = textbill();
            billtext.makeCall();
            assert.equal(30, billtext.getWarn())
        });

        it("The critical level should be 50.00", function () {
            let billtext = textbill();
            billtext.makeCall();
            billtext.makeCall()
            assert.equal(50, billtext.getCrit())
            assert.equal(5.50, billtext.getCall())
        });

    })


    describe("Using the text bill values", function () {
        
        it("Should return warning if the total is above 30.00",function(){
            let billtext = textbill();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();

            assert.equal(24.75,billtext.getCall());
            assert.equal(6,billtext.getSms());
            assert.equal("warning",billtext.totalClassName())

        })

        it("Should return warning if the total is above 30.00",function(){
            let billtext = textbill();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.makeCall();billtext.makeCall();billtext.makeCall();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();
            billtext.sendSms();billtext.sendSms();billtext.sendSms();billtext.sendSms();

            assert.equal(67.50,billtext.smsCallTotal())
            assert.equal(18.00,billtext.getSms())
            assert.equal(49.50,billtext.getCall())
            assert.equal("critical",billtext.totalClassName())
            

        })
        

    })




});