const users = {
    'noah': 'Noah',
    'jordan': 'jhoover',
    'kyle': 'KyloRennington',
};

const geeseEmojiArr = (emojis, geeseUsers) => {
    let emojiArr = [];

    for (let name of geeseUsers) {
        let newEmoji = emojis.find(emoji => emoji.name === name);
        emojiArr.push(newEmoji);
    }

    return emojiArr;
};

const createGeeseFaceResponse = (guild, geeseGroup) => {
    if (!guild) {
        return 'guild error honk';
    }

    const northernGeese = [
        'yetinate',
        'james',
        'kaleb'
    ];

    const southernGeese = [
        'coolbob',
        'bill',
        'dan',
        'jacob',
        'jake',
        'kelly',
        'kyle',
        'noah'
    ];

    let emojis;
    if (geeseGroup === 'northerngeese') {
        emojis = geeseEmojiArr(guild.emojis, northernGeese);
    } else if (geeseGroup === 'southerngeese') {
        emojis = geeseEmojiArr(guild.emojis, southernGeese);
    } else {
        return 'guild error honk';
    }

    return emojis.join();
};

const makeBotSay = (usr, wordArr) => {
    let sayMsg = '';

    if (usr !== users['noah'] && usr !== users['jordan']) {
        return 'ur not the boss of me';
    }

    for (let i = 0; i < wordArr.length; i++) {
        sayMsg += wordArr[i];
        sayMsg += ' ';
    }

    return sayMsg;
};

const honkMsg = msg => {
    const regex = /^.*(h[ao]nk).*$/;
    let match = msg.toLowerCase().match(regex);

    if (!match) {
        return '';
    }

    return match[1];
};

const imagine = msg => {
    const regex = /^.*(I M A G I N E).*$/;
    let match = msg.toLowerCase().match(regex);

    return "                           ___                    ___                    ___                                         ___                    ___     \n      ___                 /\__\                  /\  \                  /\  \                   ___                 /\__\                  /\  \    \n     /\  \               /::|  |                /::\  \                /::\  \                 /\  \               /::|  |                /::\  \   \n     \:\  \             /:|:|  |               /:/\:\  \              /:/\:\  \                \:\  \             /:|:|  |               /:/\:\  \  \n     /::\__\           /:/|:|__|__            /::\~\:\  \            /:/  \:\  \               /::\__\           /:/|:|  |__            /::\~\:\  \ \n  __/:/\/__/          /:/ |::::\__\          /:/\:\ \:\__\          /:/__/_\:\__\           __/:/\/__/          /:/ |:| /\__\          /:/\:\ \:\__\\n /\/:/  /             \/__/~~/:/  /          \/__\:\/:/  /          \:\  /\ \/__/          /\/:/  /             \/__|:|/:/  /          \:\~\:\ \/__/\n \::/__/                    /:/  /                \::/  /            \:\ \:\__\            \::/__/                  |:/:/  /            \:\ \:\__\  \n  \:\__\                   /:/  /                 /:/  /              \:\/:/  /             \:\__\                  |::/  /              \:\ \/__/  \n   \/__/                  /:/  /                 /:/  /                \::/  /               \/__/                  /:/  /                \:\__\    \n                          \/__/                  \/__/                  \/__/                                       \/__/                  \/__/   \n";
};

/*
* Fuck Strodl Bot
* Does the mocking spongebob text thing to whatever Strodl Bot says. I should extend this to include other users.
* If there is no text to mock, simply tells Strodl Bot to fuck off.
*/
const fuckStrodlBot = (msg, randLetterFn = null) => {
    if (!randLetterFn) {
        randLetterFn = getRandCapLetter;
    }

    let mockingMsg = '';
    let sufficientlyMocked = false;

    for (let i = 0; i < msg.length; i++) {
        let originalLetter = msg.charAt(i);
        let randCapLetter = randLetterFn(originalLetter);

        if (originalLetter !== randCapLetter) {
            sufficientlyMocked = true
        }
        mockingMsg += randCapLetter
    }
    if (mockingMsg === '' || !sufficientlyMocked) {
        mockingMsg = 'fuck u Strodl Bot';
    }

    return mockingMsg;
};

const getRandCapLetter = letter => {
    if (Math.random() <= 0.5) {
        return letter.toUpperCase();
    }
    return letter;
};

module.exports = {users, geeseEmojiArr, createGeeseFaceResponse, honkMsg, fuckStrodlBot, makeBotSay};
