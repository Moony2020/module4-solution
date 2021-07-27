(function (window) {
    var byeSpeaker = {}; //Create an object, called 'helloSpeaker'
    var speakWord = "Good Bye"; // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    byeSpeaker.speak = function (name) { //  attach the "speak" method and expose to the global context

    //function speak(name) {////////////////////////////////////////////
    console.log(speakWord + " " + name);
  }
  //}
    window.byeSpeaker = byeSpeaker;    //Expose the 'helloSpeaker' object to the global scope
})(window);
