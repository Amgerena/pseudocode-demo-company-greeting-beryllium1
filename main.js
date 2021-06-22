let userName = prompt("What is your name?");
let todaysDate = new Date(); //sunday = 0
let dayWeek = todaysDate.getDay();
//let dayWeek = 5;  //use to test dates
let hoursLogged = 41 ; //Change to test result
let isFridayHoliday = true; //Change to test result
let companyName = "Archnemesis, Inc.";
let day;
let longWeekend;
if (dayWeek === 0){
    day = "Happy silly Sunday! I hope you brought in your silly hat today! 🥳 ";
} else if (dayWeek === 1){
    day = "Do you have a case of the Mondays😪?.. We have complimentary coffee in the break room! Stop on by after submitting your weekly reports! ";
} else if (dayWeek === 2){
    day = "Taco Tuesday is live in the breakroom! Come on by! 🌮 ";
} else if (dayWeek === 3){
    day = "Happy humpday! It's Wednesday and we're half way through the week. 🐪 ";
} else if (dayWeek === 4){
    day = "Happy Thursday! Remember to submit any payroll changes to HR before the week ends. ";
     if (isFridayHoliday) {
        longWeekend = "Tomorrow is a holiday so enjoy your long weekend! They are sparce! ";
    }
} else if (dayWeek === 5){
    day = "Happy Friday! Let's finish this week strong so we can enjoy the weekend! ";
    if (isFridayHoliday) {
        longWeekend = "Monday is a holiday so enjoy your long weekend! They are sparce! ";
    }
} else if (dayWeek === 6){
    day = "Happy silver Saturday! Remember to sign up for the drawing to win a silver medal of accomplishment! ";
}
let greeting = "Hello " + userName + "! " + day + "<p>Welcome back to another wonderful day here at " + companyName + " </p>";
if (isFridayHoliday === true && dayWeek === 4 || dayWeek === 5){
    greeting += longWeekend;
}
if (40 > hoursLogged > 35) {
    let overtime = ("<p>Reminder: You currently have " + hoursLogged + " hours logged. Make sure to not go over 40! </p>");
    greeting += overtime;
} else if(hoursLogged >= 40) {
    let overtime = ("<p>Reminder: You currently have " + hoursLogged + " hours logged. Log out for the day! </p>");
    greeting += overtime;
}

document.write(greeting);