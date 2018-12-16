const expect = require('chai').expect;
const honkFeatures = require('../honkFeatures');

describe('createGeeseFaceResponse', function () {
    let guild;

    before(function () {
        guild = {
            emojis: [
                {
                    name: 'yetinate'
                },
                {
                    name: 'james'
                },
                {
                    name: 'kaleb'
                },
                {
                    name: 'coolbob'
                }
            ]
        };


        it("should return 'guild error honk' if no guild provided", function () {
            expect(honkFeatures.createGeeseFaceResponse({}, [])).to.deep.equal(geeseEmojis);
        });
    });
});

describe('geeseEmojiArr', function () {
    let emojis;

    before(function () {
        emojis = [
            {
                name: 'yetinate'
            },
            {
                name: 'james'
            },
            {
                name: 'kaleb'
            },
            {
                name: 'coolbob'
            }
        ]
    });


    it('should filter out emojis by array provided', function () {
        const geese = [
            'yetinate',
            'james'
        ];

        const geeseEmojis = [
            {
                name: 'yetinate'
            },
            {
                name: 'james'
            }
        ];

        expect(honkFeatures.geeseEmojiArr(emojis, geese)).to.deep.equal(geeseEmojis);
    });
});

describe('makeBotSay', function () {
    it("should say 'ur not the boss of me' if not an awesome person", function () {
        expect(honkFeatures.makeBotSay('KyloRennington', ['test'])).to.equal('ur not the boss of me');
    });
    it('should return message back if an awesome person', function () {
        expect(honkFeatures.makeBotSay('Noah', ['Fuck', 'Kyle'])).to.equal('Fuck Kyle ');
    });
});

describe('honkMsg', function () {
    it("should honk if passed 'honk'", function () {
        expect(honkFeatures.honkMsg('honk')).to.equal('honk');
    });
    it("should hank if passed 'hank'", function () {
        expect(honkFeatures.honkMsg('hank')).to.equal('hank');
    });
    it("should respond with hank if passed 'thanks'", function () {
        expect(honkFeatures.honkMsg('THANKS')).to.equal('hank');
    });
    it("should only return a word if it contains 'hank' or 'honk'", function () {
        expect(honkFeatures.honkMsg('test')).to.equal('');
    });
    it('should respond with nothing if passed nothing', function () {
        expect(honkFeatures.honkMsg('')).to.equal('');
    });
});

describe('fuckStrodlBot', function () {
    let getRandCapLetter;

    before(function () {
        getRandCapLetter = letter => {
            return letter.toUpperCase();
        };
    });

    it('should return the string with various capitalization changes', function () {
        expect(honkFeatures.fuckStrodlBot('TeST', getRandCapLetter).toLowerCase()).to.equal('test');
    });
    it("should not return 'fuck you strodl bot' if not empty", function () {
        expect(honkFeatures.fuckStrodlBot('test', getRandCapLetter)).to.not.have.string('fuck u Strodl Bot');
    });
    it('should tell strodl bot to fuck off if there is no text to mock', function () {
        expect(honkFeatures.fuckStrodlBot('', getRandCapLetter)).to.equal('fuck u Strodl Bot');
    });
});