1. I want to calculate the sum of a list of numbers. The function is called sum.

/* 1. Create a function and name it the sum. Don't forget to set it equal to a variable. 
2. Give it parameters - perhaps (x,y)
3. Tell it to return the sum of the parameters */

var sum = function(x,y){
	return x+y
};

2. I want to calculate the average of a list of numbers. The function is called mean.

/* 1. Create a function and name it mean.
2. Give it parameters
3 Tell it to return the sum of the parameters
4. Set this sum equal to another variable - perhaps var total = x+y+z
5. Within the original function you created, create another function - call it whatever you wish.
6. Within this function, have the the new variable (i.e., total) divided by the length of the parameters
*/

/*This is what I interpreted from above*/

var mean = function(x,y,z){
	return x+y+z
	var total = x+y+z
	var ave = function(){
		total/3
	};

};
/* or much more simplified*/
var mean = function(x,y,z){
	return x+y+z/3
})




3. I want to calculate the median of a list of numbers. The function is called median.

/* 1. Create a function and name it the median with parameters.
2. Sort those parameters by length and rename it something like numlength
3. Create an if/else statement that says if the length of the array divided by 2 is 0, then take the average of the two middle numbers.
	if numlength % 2 ==== 0
		console.log(((numlength/2) - 1)) + ((numlength.length/2)) / 2)
4. Create the else statement which returns the middle number if the list has an odd number of parameters.
	else numlength % 2 != 0


		console.log((numlength - 1) / 2)

*/

var median=function(numbers) {
    
    numlength = numbers.length;
    numbers.sort();
    if (numlength % 2 === 0) { 
        console.log((numlength/2)-1) + ((numlength.length/2))/2
    } 
    else { 
    	numlength % 2 != 0
		console.log((numlength - 1) / 2)

    }
    