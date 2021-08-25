var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.hex('#FF8800')("Let's see how well do you know Indian Entrepreneurs 😉 \n"));
var userName = readlineSync.question(chalk.magentaBright("Please enter your name : \n"));
console.log(chalk.hex('#6366F1')("\nHi & Welcome " + userName + " ❤️"));
console.log(chalk.black.bold.bgWhite("\nRemember: for each correct answer you will be given 1 point\n"));
console.log(chalk.white.bold.bgBlack("Note:please Enter a/ b/ c as answers for each question\n"));
var score = 0;
//play function
function play(question,answer){
var userAns = readlineSync.question(question);
if (userAns.toUpperCase() === answer.toUpperCase()){
console.log(chalk.green.bold(userName +" Congo you are right!"));
score++;
} 
else{
  console.log(chalk.red.bold("You have chosen the wrong answer!"));
}
console.log("Your current score: "+score);
console.log("\n----------------------\n")
}

var allQuestion =[
        {question:"1.His was a story of rags to riches. He was the founder of the first Indian company that featured in the Forbes 500 list. The company was Reliance. The man was ___________ _____________.\nA.Ghanshyamdas Birla\nB.Dhirubhai Ambani\nC.Narayana Murthy\nD.None of the above\n", answer:"B"},
        {question:"2. Before becoming a successful businessman, he became the first pilot of India. He went on to set up Air India International, India's first international airline. The township that he built for his employees was selected as a UN Global Compact City.\nA.Dhirubhai Ambani\nB.JRD Tata\nC.Ratan Tata\nD.None of the above\n", answer:"B"},
        {question:"3. A graduate of management from the Massachusetts Institute of Technology, this man took the family business of locks and vegetable-based soaps to unbelievable heights.\nA.Jamshedji Tata\nB.Dhirubhai Ambani\nC.Adi Godrej\nD.None of the above\n", answer:"C"},
        {question:"4. While studying in Stanford, this young man was called back to handle the family business after his father's sudden death. He took the family business of oils, soaps, lighting and toiletries and made it one of the biggest software companies in India\nA.Narayana Murthy\nB.Azim Premji\nC.Shiv Nadar\nD.None of the above\n", answer:"B"},
        {question:"5. A freedom fighter and consultant to Mahatma Gandhi, this great man started with cotton and jute mills and expanded into the fields of chemicals, cement, rayon etc. BITS, the famous engineering college in Pilani was founded by his company.\nA.Ghanshyam Das Birla\nB.Dhirubhai Ambani\nC.Shiv Nadar\nD.None of the above\n", answer:"A"},
        {question:"6. He is aptly called the father of the hotel industry of India. Slowly acquiring hotels across India in the pre-independence era, he became the first Indian to own and run a chain of hotels in India.\nA.Adi Godrej\nB.M. S. Oberoi\nC.Ghanshyam Das Birla\nD.None of the aboven", answer:"B"},
        {question:"7. It started with the death of a patient who couldn't fly to Texas for a heart surgery. The incident moved this man enough to create Apollo Hospitals, providing world-class medical and health care right in India.\nA.Dr. B.D. Agarwal\nB.Dr. Pratap Reddy\nC.Dr. Shams Moopen\nD.None of the above\n", answer:"B"},
        {question:"8. She founded a whole range of skincare products. Married at the age of 15, she went on to establish a world-famous brand, carried by Bloomingdales, Harrods and Selfridges to name a few.\nA. Mallika Sherawat\nB.Shahnaz Hussain\nC.Sudha Narayana Murthy\nD.None of the above\n", answer:"B"},
        {question:"9.Founder of the Kingfisher group, this man owns businesses ranging from breweries to airlines! Known for his flashy and flamboyant lifestyle, his group is now a multinational conglomerate of companies.\nA.Vijay Merchant\nB.Vijay Mallya\nC.Vikram Gokhale\nD.None of the above\n", answer:"B"},
        {question:"10. He is the CEO of HCL (Hindustan Computers Limited). At the time when IBM shut down operations in India in the 70s, HCL stepped in to fill the void. Today it is India's largest IT conglomerate.\nA.Narayana Murthy\nB.Shiv Nadar\nC.Azim Premji\nD.None of the above\n", answer:"B"}

];
for(var i=0; i<allQuestion.length;i++){
  var currentQuestion = allQuestion[i];
  play(currentQuestion.question, currentQuestion.answer);
}
var highScore =[{name:"Nikhil",topScore:"10"},];

console.log(chalk.keyword('yellow').bold("YOUR FINAL SCORE IS : "+score));

console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));
printScoreBoard(highScore);
var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}
console.log('---------------------------------')

if(scoreBeaten){
  console.log(chalk.black.bold.bgWhite("Congratulations "+userName+" , you have beaten the SCORE-BOARD. You know stories of Indian Entrepreneurs very well ❤️"));

  console.log(chalk.keyword('orange').bold("\n***** U P D A T E D    S C O R E B O A R D *****"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard ❤️\n\n\n\n");
  console.log("\nScoreboard will be consisting of only upto Top 5 Scorers 😉\n\n\n");
}

else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you need to read more about Indian Entrepreneurs 🙃\n"));
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard ❤️\n\n");
  console.log("\nScoreboard will be consisting of only upto Top 5 Scorers 😉\n\n\n");
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.cyan.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}