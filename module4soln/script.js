(function (window) {
	var names = ["Yaakov", "John", "Jason", "Paul", "Frank"
	, "Larry", "Paula", "Laura","Arun","Jacob","Garima","Shaivika","Jhamb", "Jim"];
	for (var i in names) {
		  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
		  if (firstLetter == 'j') {
    	  window.byeSpeaker.speak(names[i]);
     } else {
    window.helloSpeaker.speak(names[i]);
   }
 }
})(window);