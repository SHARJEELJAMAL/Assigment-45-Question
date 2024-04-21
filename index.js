var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Question:02
Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
var message = 'sharjeel jamal';
console.log("Hello ".concat(message, ", would you like to learn some Python today?"));
/*Question:03
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.
*/
var person_name = 'sharjeel jamal';
console.log(person_name.toLowerCase());
console.log(person_name.toLocaleUpperCase());
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1));
/*Question:04
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/
console.log('Tate once said,“Find a person who is as successful as you would like to be, ask them what to do, do it and work hard”');
/*Question:05
Famous Quote 2:
Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.
*/
var famous_person = 'Winston Churchil';
var quote = '"If you are going through hell, keep going."';
console.log("".concat(famous_person, " Once said, ").concat(quote));
/*Question0:06
Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
var Name = "\t\n sharjeel \t\n";
console.log(Name);
console.log(Name.trim());
/*Question:07
Number Eight:
Write addition, subtraction, multiplication, and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results.
*/
console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
/*Question:08
You should create four lines that look like this:
console.log(5 + 3)
*/
console.log(6 + 2);
console.log(15 - 7);
console.log(4 * 2);
console.log(64 / 8);
/*Question:09
Favorite Number:
Store your favorite number in a variable. Then, using that variable, create a message that reveals
your favorite number. Print that message.*/
var favoriteNumber = 4;
console.log("My favorite number is ".concat(favoriteNumber, "."));
/*Question:10
Adding Comments:
Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything
specific to write because your programs are too simple at this point, just add your name and the current date
at the top of each program file. Then write one sentence describing what the program does.
*/
// sharjeel, 21-04-2024
// This program prints a personal message.
var myName = "Sharjeel Jamal";
console.log("Hello ".concat(myName, ", would you like to learn some Python today?"));
/*Question:11
Names:
Store the names of a few of your friends in an array called names. Print each person’s name by accessing each
element in the list, one at a time.*/
var names = ["Akif", "Munib", "Raheel"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/*Question:12
Greetings:
Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
with the person’s name.
*/
var Names = ["Honey", "Ahmed", "Fahim"];
for (var _i = 0, Names_1 = Names; _i < Names_1.length; _i++) {
    var name_1 = Names_1[_i];
    console.log("Hello ".concat(Names, ", would you like to learn some TypeScript today?"));
}
/*Question:13
Your Own Array:
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”
*/
var transport = ["Suzuki Motorcycle", "BMW Car", "Banaweer Bicycle"];
transport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
/*Question:14
Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner.
*/
var guest = ["ghufran", "muneeb", "emad"];
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
/*Question:15
Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
name of the guest who can’t make it.
*/
var unableToAttend = "Umar";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Bilal";
guest[guest.indexOf(unableToAttend)] = newGuest;
// New invitations
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
/*Question:16
More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite
to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var guests = ["Imran", "Sameer", "Bilal"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Ali");
guests.splice(guests.length / 2, 0, "Naveed");
guests.push("Adda");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
/*Question:17
Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for
only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to
dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program.
*/
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
/*Question:18
Seeing the World:
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
 has changed.
*/
var places = ["Saudi Arabia", "United Kingdom", "Germany", "Switzerland", "Finand"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
/*Question:19
Dinner Guests:
Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people
you are inviting to dinner.
*/
var Guest = ["Imran", "Sameer", "Bilal", "Ali", "Adda"];
console.log("I am inviting ".concat(Guest.length, " people to dinner."));
/*Question:20
Think of something you could store in an array. For example, you could make a list of mountains, rivers,
countries, cities, languages, or anything else you’d like. Write a program that creates a list containing
these items.
*/
var Places = ["Mariana Trench", "Singapore", "London", "Niagra falls"];
console.log("places i would like to visit:", Places);
/*Question:21
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing
these items.*/
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
/*Question:22
Intentional Error:
If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an
index in one of your programs to produce an index error. Make sure you correct the error before closing the
program.
*/
var friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.
/*Question:23
Conditional Tests:
Write a series of conditional tests. Print a statement describing each test and your prediction for the results
of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
/*Question:25
Alien Colors #1:
Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of
'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)
*/
var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
/*Question:26
Alien Colors #2:
Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
/*Question:27
Alien Colors #3:
Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
/*Question:28
Stages of Life:
Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
*/
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
/*Question:30
Hello Admin:
Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will
print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to
each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
/*Question:31
No Users:
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Greet users
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
/*Question:32
Checking Usernames:
Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a
message that the person will need to enter a new username. If a username has not been used, print a message
saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ["user 1", "admin", "user 3", "user 4", "user 5"];
var new_users = ["User 1", "User 6", "user 7", "admin", "User 9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
/*Question:33
Ordinal Numbers:
Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except
1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should
read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
/*Question:34
Pizzas:
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for
loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of the
pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni
pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output
should consist of three or more lines about the kinds of pizza, you like and then an additional sentence, such
as I really love pizza!
*/
var pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
/*Question:35
Animals:
Think of at least three different animals that have a common characteristic. Store the names of these animals
in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence
such as Any of these animals would make a great pet!
*/
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
/*Question:38
Cities:
Write a function called describe_city() that accepts the name of a city and its country. The function
should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a
default value. Call your function for three different cities, at least one of which is not in the default
country.
*/
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
/*Question:39
City Names:
Write a function called city_country() that takes in the name of a city and its country. The function
should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three
city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
/*Question:40
Album:
Write a function called make_album() that builds an Object describing a music album. The function should take
in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show
that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the
calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least
one new function call that includes the number of tracks on an album.
*/
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) { //@ts-ignore
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
/*Question:41
Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the
name of each magician in the array.
*/
var Magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(Magicians);
/*Question:42
Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the
array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that
the list has actually been modified.
*/
function make_Great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(Magicians); // Modifies the original array
show_magicians(Magicians); // Shows modified names
/*Question:43
Unchanged Magicians:
Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’
names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with
the Great added to each magician’s name.
*/
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    }); //@ts-ignore
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
/*Question:44
Sandwiches:
Write a function that accepts an array of items a person wants on a sandwich. The function should have one
parameter that collects as many items as the function call provides, and it should print a summary of the
sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
/*Question:45
Cars:
Write a function that stores information about a car in an Object. The function should always receive a
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    //@ts-ignore
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
