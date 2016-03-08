var fs = require('fs');
var _ = require('lodash');

/**
 * The Prompt schema (https://www.npmjs.com/package/prompt#prompting-with-validation-default-values-and-more-complex-properties)
 */
 var promptSchema = {
   properties: {
     numbers: {
       pattern: /^(truth|\-?[0-9]+\s+\-?[0-9]+\s+\-?[0-9]+)$/i,
       message: 'Either `truth` or three +/-ve integers, separated with spaces',
       required: true
     }
   }
 };

 /**
  * Checks for truth
  */
 var checkForTruth = function(statement){
   statement = statement.numbers;
   if(statement === 'truth'){ //`truth` will terminate the trial and error loop...
     return 'stop';
   }

   var numbers = _.map(statement.split(' '),function(item){
     return parseInt(item);
   });
   var a = numbers[0], b = numbers[1], c = numbers[2];

   if((b > a) && (c > b)){
     return true;
   }
   else{
     return false
   }
 };

exports.instructions = fs.readFileSync('./instructions.txt', 'utf8'); //The first instructions
exports.truth = 'The truth is c > b > a'; //The actual truth in text
exports.promptSchema = promptSchema; //The promt schema https://www.npmjs.com/package/prompt#prompting-with-validation-default-values-and-more-complex-properties
exports.isTrue = checkForTruth; //The function to check for truth
exports.truthStatement = 'Your statement is true'; //The `true` output
exports.falseStatement = 'Your statement is not true'; //The `false` output
