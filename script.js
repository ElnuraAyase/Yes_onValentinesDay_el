/**/
/* select no and yes buttons + counting clicks */

const noButton = getElementById('noButton');
const yesButton = getElementById ('yesButton');
let clickCount = 0;

/* adding even listener to N0 */
noButton.addEventListener('click',()  =>{
  //adding click count
  clickCount++;
  //changing the size of yes
  tesButton.style.transform = 'scale(${1+clickCount + 0.05})';
  //array phrases for NO
  const phrases = ["Are you sure?", "Why not?", "Think again", "pleasepleaseplease", "DON'T AGREE!!!", "You've got another chance", "How dare you?", "BUT WHYYYYY?", "Sorry, huh?", "Ops, you clicked the wrong button", "Think wisely", "Don't be stubborn", "I know you wanted to click YES ", "this is not a YES button", "DO NOT CLICK", "why did you click it?", "you have a death wish?", "what's wrong with your fingers?", "ok, what's wrong with your eyes", "Not accepted", "put on your glasses", "you could finish it earlier by pressing yes", "let me be honest with you , there is no button 'NO'", "good luck with that", "seriously?", "it never be clickable", "you literally can't say no", "you wish", "who cares?", "you think you can decide?", "nice try", "you're wasting your time", "there is only yes in my plans", "yes"];
  //Random selection for phrases
  const randomIndex = Math.floor(Math.random() * phrase.length);
  noButton.textContent + phrases[randomIndex];

  // hiding no button in 20 clicks
  if (clickCount >=20) {
    noButton,style.displaye = 'none';
  }
  
  
  
} );


                        
