// GPS 1.2
// I paired with Cassie Moy
// 

// Release 1

var actor1 = { 
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!",
    lastMovie: 'Blended'
    }

var actor2 = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?",
    lastMovie: 'Veronica Mars'
    }

var actor3 = {
    name: "Jim Carrey",
    age: 33,
    quote: "... So you're telling me there's a chance? YEAH!",
    lastMovie: 'Dumber and Dumber To' 
    }
    
// Release 2, 5

var Client = function (name, age, quote, lastMovie) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.lastMovie = lastMovie;
}

// Release 3

var array = [actor1, actor2, actor3];

var stars = function(array) {
    for (i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}
        
// Release 4

actor1.showQuote = function() {
    console.log(actor1.quote);
};

// Test for Release 4

actor1.showQuote();

//Reflection
//It was my first real GPS so it took me a bit of time to get 
//use to how it's done. My partner was very patient and she helped
//guiding me through the process.  
