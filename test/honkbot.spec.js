const expect = require('chai').expect;
const honkbot = require('../honkbot.js');

describe('makeBotSay', function () {
    it("should say 'ur not the boss of me' if not an awesome person", function () {
        expect(honkbot.makeBotSay('KyloRennington', ['test'])).to.equal('ur not the boss of me');
    });
    it('should return message back if an awesome person', function () {
        expect(honkbot.makeBotSay('Noah', ['Fuck', 'Kyle'])).to.equal('Fuck Kyle ');
    });
});

describe('honkMsg', function () {
    it("should honk if passed 'honk'", function () {
        expect(honkbot.honkMsg('honk')).to.equal('honk');
    });
    it("should hank if passed 'hank'", function () {
        expect(honkbot.honkMsg('hank')).to.equal('hank');
    });
    it("should respond with hank if passed 'thanks'", function () {
        expect(honkbot.honkMsg('THANKS')).to.equal('hank');
    });
    it("should only return a word if it contains 'hank' or 'honk'", function () {
        expect(honkbot.honkMsg('test')).to.equal('');
    });
    it('should respond with nothing if passed nothing', function () {
        expect(honkbot.honkMsg('')).to.equal('');
    });
});

describe('fuckStrodlBot', function () {
    it('should return the string with various capitalization changes', function () {
        expect(honkbot.fuckStrodlBot('TeST').toLowerCase()).to.equal('test');
    });
    it("should say 'ur not the boss of me' if not an awesome person", function () {
        expect(honkbot.fuckStrodlBot('test')).to.not.have.string('fuck u Strodl Bot');
    });
    it('should tell strodl bot to fuck off if there is no text to mock', function () {
        expect(honkbot.fuckStrodlBot('')).to.equal('fuck u Strodl Bot');
    });
});