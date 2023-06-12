function getBotResponse(input) {
    
    //intro//
    if(input=="hi")
    {
        return "How can I help you ?";
    }
    else if(input=="who are you")
        return "I am Robo🐱‍🚀.";

    else if(input=="What Is Counselling?")
        return "Counseling psychology is a psychological specialty that began with a focus on vocational counseling, but later moved its emphasis to adjustment counseling, and then expanded to cover all normal psychology psychotherapy."
    
        
    // //rock paper scissors
    // if (input == "rock") {
    //     return "paper";
    // } else if (input == "paper") {
    //     return "scissors";
    // } else if (input == "scissors") {
    //     return "rock";
    // }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Sorry, I didn't understand";
    }
}