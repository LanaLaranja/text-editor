let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ');

console.log(storyWords.length);

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(word=> {
  return !unnecessaryWords.includes(word);
  });

console.log(betterWords.length);

/* aqui eu pego a array betterWords, analizo quando as strings really, very e basically se repetem.
e deveria voltar quanto que cada string se repete */

  let countingOverused = betterWords.filter(word => {
    if (word === 'really'){
      return word;
    } else if (word === 'very'){
        return word;
    } else if (word === 'basically'){
        return word;
    }
  });

console.log('You have ' + countingOverused.length + ' overused words.');


let sentenceEnd = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    return sentenceEnd += 1;
  }
});

 console.log(sentenceEnd);
