$(document).ready(function(){
  
  function newQuote(){
    
    var zaphodQuotes = ["I refuse to answer that question on the grounds that I don’t know the answer.",
                        "If there’s anything more important than my ego around, I want it caught and shot now",
                        "You guys are so unhip it’s a wonder your bums don’t fall off.",
                        "I’m so amazingly cool you could keep a side of meat inside me for a month.",
                        "Listen, three eyes, don’t you try to outweird me, I get stranger things than you free with my breakfast cereal.",
                        "If I ever meet myself, I’ll hit myself so hard I won’t know what’s hit me.",
                        "That really is truly amazing. It’s so amazingly amazing, I think I’d like to steal it.",
                        "OK, so 10 out of 10 for style, but minus several million for good thinking, yeah?"
                       ];
    
    var randomNumber = Math.floor(Math.random()*zaphodQuotes.length);
    var randomQuote = zaphodQuotes[randomNumber]

      $(".currentQuote").text(randomQuote);
    
    };
  
    $(".btn-click").on("click", function(){
      newQuote();
    });
  
});
