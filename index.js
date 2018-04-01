const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    }else {
        console.log('this is an empty box');
    }
};

console.log(getUserChoice('paper'));
console.log(getUserChoice('forx'));
