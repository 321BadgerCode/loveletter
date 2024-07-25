const first = ['Darling', 'Dear', 'Honey', 'Jewel'];
const second = ['duck', 'love', 'moppet', 'sweetheart'];
const adjectives = [
	'adorable', 'affectionate', 'amorous', 'anxious', 'ardent', 'avid', 'breathless', 
	'burning', 'covetous', 'craving', 'curious', 'darling', 'dear', 'devoted', 'eager', 
	'erotic', 'fervent', 'fond', 'impatient', 'keen', 'little', 'loveable', 'lovesick', 
	'loving', 'passionate', 'precious', 'sweet', 'sympathetic', 'tender', 'unsatisfied', 'wistful'
];
const nouns = [
	'adoration', 'affection', 'ambition', 'appetite', 'ardour', 'charm', 'desire', 
	'devotion', 'eagerness', 'enchantment', 'enthusiasm', 'fancy', 'fellow feeling', 
	'fervour', 'fondness', 'heart', 'hunger', 'infatuation', 'liking', 'longing', 'love', 
	'lust', 'passion', 'rapture', 'sympathy', 'tenderness', 'thirst', 'wish', 'yearning'
];
const adverbs = [
	'affectionately', 'anxiously', 'ardently', 'avidly', 'beautifully', 'breathlessly', 
	'burningly', 'covetously', 'curiously', 'devotedly', 'eagerly', 'fervently', 'fondly', 
	'impatiently', 'keenly', 'lovingly', 'passionately', 'seductively', 'tenderly', 
	'winningly', 'wistfully'
];
const verbs = [
	'adores', 'attracts', 'cares for', 'cherishes', 'clings to', 'desires', 'holds dear', 
	'hopes for', 'hungers for', 'is wedded to', 'likes', 'longs for', 'loves', 'lusts after', 
	'pants for', 'pines for', 'prizes', 'sighs for', 'tempts', 'thirsts for', 'treasures', 
	'wants', 'wishes', 'woos', 'yearns for'
];

function choice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function maybe(words) {
	return Math.random() > 0.5 ? ' ' + choice(words) : '';
}

function longer() {
	return (
		' My' + maybe(adjectives) + ' ' + choice(nouns) + maybe(adverbs) + ' ' + choice(verbs) + 
		' your' + maybe(adjectives) + ' ' + choice(nouns) + '.'
	);
}

function shorter() {
	return ' ' + choice(adjectives) + ' ' + choice(nouns) + '.';
}

function body() {
	let text = '';
	let youAre = false;
	for (let i = 0; i < 5; i++) {
		const type = Math.random() > 0.5 ? 'longer' : 'shorter';
		if (type === 'longer') {
			text += longer();
			youAre = false;
		} else {
			if (youAre) {
				text = text.slice(0, -1) + ': my' + shorter();
				youAre = false;
			} else {
				text += ' You are my' + shorter();
				youAre = true;
			}
		}
	}
	return text;
}

function letter() {
	return (
		choice(first) + ' ' + choice(second) + ',\n\n\t' + 
		body() + '\n\n' + 
		'\t\tYours ' + choice(adverbs) + ',\n\n' + 
		'\t\t\tM.U.C.'
	);
}

function displayLetter() {
	const letterElement = document.getElementById('letter');
	letterElement.textContent = letter();
}

document.getElementById('generate-btn').addEventListener('click', displayLetter);

displayLetter();