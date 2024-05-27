let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let words = story.split(' ');
console.log("Word count:", words.length);

let betterWords = words.filter(word => !unnecessaryWords.includes(word));

let overusedCounts = {};
overusedWords.forEach(word => {
    let count = betterWords.filter(w => w === word).length;
    overusedCounts[word] = count;
});
console.log("Overused word counts:", overusedCounts);

let sentenceCount = story.split(' ').filter(sentence => sentence.trim() !== '').length;
console.log("Sentence count:", sentenceCount);

console.log("Word count:", words.length);
console.log("Sentence count:", sentenceCount);
console.log("Overused word counts:", overusedCounts);

console.log("Better words:", betterWords.join(" "));

for (let i = 0; i < overusedWords.length; i++) {
    let word = overusedWords[i];
    let count = overusedCounts[word];
    for (let j = 0; j < count; j++) {
        let index = betterWords.indexOf(word);
        if (index !== -1) {
            betterWords.splice(index, 1);
            overusedCounts[word]--;
        }
    }
}

console.log("Improved better words:", betterWords.join(" "));
