"use strict";

describe("Card Module Tests", function () {
    describe("Is Autorized Test", function () {
        var instance;
        var card;

        beforeEach(function() {
            instance = new CardModule();
            card = new CardDataModel();
            instance.setCard(card)
        });

        it("check default", function () {
            assert.isFalse(instance.readCard(card));
        });

        it("check if user can continue with this card", function () {
            var p = [1,1,1,1];
            assert.isFalse(instance.checkDate() == instance.checkPin(p));
        });
    });
});