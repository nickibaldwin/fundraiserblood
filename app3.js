function askDoYouLikeDogs(){
    let userAnswer = prompt('Do you like dogs? Y/N?');
    if (userAnswer == 'y' || userAnswer == 'yes' || userAnswer == 'Y'){
        alert('Yay!')
    
    } else if(userAnswer == 'n' || userAnswer == 'no' || userAnswer == 'N'){
        alert(':(')
    } else {
        alert('Learn how to read')
    }



    document.write(userAnswer)

}


function askHowManyDogsWouldYouLike(){
    let userAnswer = prompt('Please choose 1-3; *we will not sell more than 3 to one family*');
    while (userAnswer < 1 || userAnswer > 3){
        userAnswer = prompt('Incorrect.  Please select a number 1 - 3');
    }
    for(let i = 0; i < userAnswer; i++){
        document.write('<img src="https://goldenhearts.co/wp-content/uploads/2019/02/oliver-1024x536.jpg" />')
    }
}

