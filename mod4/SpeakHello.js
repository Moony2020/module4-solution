(function (window) {
   var helloSpeaker = {}; //Create an object, called 'helloSpeaker'
   var speakWord = "Hello"; // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
   helloSpeaker.speak = function (name) { //  attach the "speak" method and expose to the global context

   //function speak(name) {/////////////////////   ///////////////////////
    console.log(speakWord + " " + name);
  //}
   }
      window.helloSpeaker= helloSpeaker;    //Expose the 'helloSpeaker' object to the global scope
})(window);

