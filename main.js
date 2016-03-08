var prompt = require('prompt');
var truth = require('./truth.js');

//
// Start the prompt
//
prompt.start();

// Print out the instructions
console.log(truth.instructions);

// Start the trial process
var setPrompt = function(){
  prompt.get(truth.promptSchema, function (err, result) {

    if(err){
      console.log("Some error! Please retry running the prompt");
    }

    if(truth.isTrue(result) === 'stop'){
      console.log(truth.truth);
    }
    else if(!!truth.isTrue(result)){
      console.log(truth.truthStatement);
      setPrompt();
    }
    else{
      console.log(truth.falseStatement);
      setPrompt();
    }
  });
};

// Initiate...
if(!module.parent){
  setPrompt();
}
