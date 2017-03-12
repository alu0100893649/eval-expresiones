/*
For each of the following items, write a regular expression to test
whether any of the given substrings occur in a string. The regular
expression should match only strings containing one of the substrings
described. Do not worry about word boundaries unless explicitly
mentioned. When your expression works, see whether you can make it
any smaller.

car and cat
pop and prop
ferret, ferry, and ferrari
Any word ending in ious
A whitespace character followed by a dot, comma, colon, or semicolon
A word longer than six letters
A word without the letter e
Refer to the table in the chapter summary for help. Test each solution with a few test strings.
*/

var unwritten = 0;

// Fill in the regular expressions

verify(/ca[xf]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/.../,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/.../,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/.../,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/.../,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/.../,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/.../,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

if (unwritten) console.log("Quedan "+unwritten+" regexps sin escribir");

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  var error = 0;
  if (regexp.source == "...") {
   unwritten++; 
   return;
  }
  yes.forEach(function(s) {
    if (!regexp.test(s)) {
      console.log("Failure to match '" + s + "'");
      error++;
    }
  });
  no.forEach(function(s) {
    if (regexp.test(s)) {
      console.log("Unexpected match for '" + s + "'");
      error++;
    }
  });
  if (error) console.log(`${error} error${error>1? 's' : ''}`);
}
