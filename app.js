//create sentance parts
//part 1 - nouns
//part 2 - actions
//part 3 = duration
//part 3 - articles

//select RANDOM part 1 & 2 & 3

//apply into sentance and output
//give sentance a capital letter and full stop


const nouns = [
    'he',
    'we',
    'javascript programming',
    'my primary school teacher',
    'Percy',
    'the champion boxer',
    'Mancheter United',
    'Chicken-Licken'
];

const actions = [
    'drank coffee',
    'howled',
    'ate chocolate',
    'kicked a ball',
    'danced in the rain',
    'flipped a pancake',
    'turned a somersault'
];

const duration = [
    'for a year',
    'all day',
    'every hour',
    'until next Tuesday',
    'every full moon',
    'since Christmas',
    'until the sky fell in'
];

function randomlySelectPart(sentancePartArray) {
    const randomNumber = Math.floor(Math.random() * (sentancePartArray.length));
    return sentancePartArray[randomNumber];
};

randomlySelectPart(duration);

let sentance = `${randomlySelectPart(nouns)} ${randomlySelectPart(actions)} ${randomlySelectPart(duration)}${randomlySelectPart(punctuation)}`;