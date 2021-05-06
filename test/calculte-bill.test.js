describe("Calculate bill factory functions",function(){
    describe("Testing the value output calculate bill widget",function(){
        
        it("Call Should equal to 2.75",function(){
            let calc = calculateBill();
            
            assert.equal(2.75,calc.calculate("call"))
        })
        it("Sms Should equal to 0.75",function(){
            let calc = calculateBill();
            
            assert.equal(0.75,calc.calculate("sms"))
        })
        it("The total of 1 sms and 1 call should equal 3.50",function(){
            let calc = calculateBill();
            
            assert.equal(3.50,calc.calculate("sms,call"))
        })
        it("The test should pass even if there is white space's between string and should equal 14.00",function(){
            let calc = calculateBill();
            
            assert.equal(14.00,calc.calculate(" sms  , call , sms, call, sms  , call , sms, call"))
        })
        it("The test should pass by taking in a letible that holds a string",function(){
            let calc = calculateBill();
            let _str_ = "sms,call,sms,call,sms,sms,call,sms,call,sms"
            assert.equal(15.50,calc.calculate(_str_))
        })
    })

    describe("Testing the warning and critical levels of calculate bill",function(){
        
        it("Should return warning once total is above 20 ", function(){
            let calc_ = calculateBill();
            let above_20 = "sms,call,sms,sms,call,sms,call,sms,sms,call,sms,sms,call,sms"
            assert.equal(20.50,calc_.calculate(above_20))
            assert.equal("warning",calc_.totalClassName())
        });

        it("Should return critical once total is above 30 ", function(){
            let calc_ = calculateBill();
            let above_30 = "sms,call,sms,sms,call,sms,call,sms,sms,call,sms,sms,call,sms,call,call,call,call"
            assert.equal(31.50,calc_.calculate(above_30))
            assert.equal("danger",calc_.totalClassName())
        });
    });

});