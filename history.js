function findAllCombos(artical, phrase) { 
   let arrs = artical.toLowerCase().split(' ');
   phrase = phrase.toLowerCase();
   let count = 0;
   let result = [];

   for (let i = 0; i < arrs.length; i++) { 
      let word = arrs[i];

      if (!phrase.length) { 
         return result;
      }

      if (phrase.startsWith(word)) {
         phrase = phrase.substr(word.length);
         result.push(word);
         i = -1;
      }
   }

   return [];
}

function findAllCombsBinary(artical, phrase) { 
   let arrs = artical.toLowerCase().split(' ');
   phrase = phrase.toLowerCase();

   let allCombs = (1 << arrs.length) - 1;
   let result = [];

   for (let i = 0; i < allCombs; i++) { 
      let selected = [];

      for (let j = 0; j < arrs.length; j++) { 
         if (i >> j & 1 == 1) { 
            selected.push(arrs[j]);
         }
      }

      if (phrase == selected.join('')) { 
         result.push(selected);
      }
   }

   return result;
}

function findAllCombosRecursion(artical, phrase) { 
   let arrs = artical.toLowerCase().split(' ');
   phrase = phrase.toLowerCase();

   let result = [];

   function findAll(unusedWords, usedWords, word) { 
      if (word == "") { 
         console.log(usedWords.join(' '));
         result.push(usedWords);
         usedWords = [];
         return;
      } 

      for (let i = 0; i < unusedWords.length; i++) { 
         let val = unusedWords[i];

         if (word.startsWith(val)) { 
            let unused = unusedWords.filter((x, index) => index != i);
            let used = JSON.parse(JSON.stringify(usedWords));
            used.push(val);

            findAll(unused, used, word.substr(val.length));
         }
      }
   }

   findAll(arrs, [], phrase);

   return result;
}

//superhighway
//"hi When I'm high I way love to travel on the super highway"

