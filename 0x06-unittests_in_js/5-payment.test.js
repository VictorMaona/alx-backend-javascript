const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("prepare spy to employ for every exam", function() {
	sinon.spy(console, "log");
    });
    afterEach("reinstate spy following every test", function() {
	console.log.restore();
    });
    it("verify that correct arg is used when calling console.log", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("verify that correct arg is used when calling console.log", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
