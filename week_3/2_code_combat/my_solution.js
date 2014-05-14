// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//Rescue Mission
//Move Up 1x
//Move right 2x
//Move down 1x
//Attack
 
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
//Move Up 1x
//Move right 1x
//Move left 1x
//Move up 1x
//Attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me
//Move right 1x
//Attack
//Move right 1x
//Move Down 1x
//Move up 1x
//Move right 1x
//Attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown(); 
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt The Guards
//Move right 1x
//Say "Hey there!"
//Move left 2x
//Say "Attack!"
//Move right 1x
//Say "Follow Me!"
//Move right 2x
//Move up 1x
//Move right 1x
//Say "Hey there!"
//Move down 1x
//Move up 1x
//Move right 1x
 
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

 //It's a Trap!
 //Move down 2x
 //Say "Hey there!"
 //Move up 2x

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//Taunt
//Say "Hey!"
//Say "Hey ugly!"
//Say "Yeah you!"
//Say "You scared?"

this.say("Hey!");
this.say("Hey ugly!");
this.say("Yeah you!");
this.say("You scared?");

//Cowardly Taunt
//Move to coordinate 50,60
//Move to coordinate 63,20
//Move to coordinate 70,10
//Say "I can lure them here."
//Move to coordinate 63,20
//Move to coordinate 56,32
//Say "Hey you!"
//Move back to coordinate 63,20
//Move to coordinate 70,10

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  
this.say("I can lure them in here.");
this.moveXY(63, 20);
this.moveXY(56, 32);
this.say("Hey you!");
this.moveXY(63, 20);
this.moveXY(70, 10);

//Commanding Followers
//Move to coordinate 68,52
//Say "Follow Me!"
//Move to coordinate 60,40
//Say "Attack!"

this.moveXY(68,52);
this.say("follow me!");
this.moveXY(60,40);
this.say("attack!");

//Mobile Artillery
//Move to coordinate 49,40
//Attack ogres at coordinate 69,57
//Attack big ogre at coordinate 62,49
//Attack ogres at coordinate 48,64
//Attack big ogre at coordinate 48,56

this.moveXY(49,40);
this.attackXY(69,57);
this.attackXY(62,49);
this.attackXY(48,64);
this.attackXY(48,56);

//this is referring to the object you are targeting.

//() is where you put the condition or expression of the object.

// the semicolon is used for separating statements

// Reflection:
// This was a fun challenge since it wasn't just pure "do this, type that", there were some problem solving involved. 
//However, having to retype the same code over and over again was quite tedious. It was a fun simple way to start learning
//the basics of Javascript.
