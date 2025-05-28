let pit11 = {
    nip: "1234567890",
    taxYear: 2021,
    isValid: false,
    
    checkRule1() {
        this.isValid = this.taxYear == 2021;
    },
    checkAllRules() {
        this.checkRule1();

        if (this.isValid)
            console.log("OK");
        else
            console.log("You shall not pass!");
    }
};

pit11.checkAllRules();

pit11.taxYear = 2022;
pit11.checkAllRules();
