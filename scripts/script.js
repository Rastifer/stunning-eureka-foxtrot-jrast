$(document).ready(function () {
    console.log("Let's learn something about me!");
  
    //Button facts
  
    $("#btnMyFacts").click(function () {
      $("#coolFactsOutput").html();
      
  
      let userNumber = $("#userNumber").val();
      console.log("user number = ", userNumber);
      //let coolFactsOutput = generateCoolFacts(userNumber);
  
      //console.log("name length f/n = ", nameLength(userName));
  
      //console.log("you clicked the button");
      //console.log("from ln 12", generateCoolNameFacts(userName));
  
      $("#coolFactsOutput").html(number(userNumber));
      $("#coolFactsOutputs").html(getCoolFact(userNumber));
    });
  });
  
  
  
  
  
  function number(userNumber) {
            return;
  }
  
  
  
  function getCoolFact(userNumber) {
    //flow control: case switch, loop, if/then
  
    if (userNumber == 1) {
      //execute some code
      return "My eyes have changed colors over the past 5 years.";
    } 
  
    else if (userNumber == 2) {
      //execute some code
      return "I am obsessed with the Dr. Pimple Popper videos.";
    } 
  
    else if (userNumber == 3) {
      //execute some code
      return "I love cooking for my wife and me!";
    } 
  
    else if (userNumber == 4) {
      //execute some code
      return "I earned my Eagle Scout badge in 2008!";
    } 
  
    else if (userNumber == 5) {
      //execute some code
      return "I'm a massive LSU fan! GEAUX TIGERS!!";
    } 
  
    else if (userNumber == 6) {
      //execute some code
      return "I have a one year old dog named Coco, she's a rescue.";
    } 
  
    else if (userNumber == 7) {
      //execute some code
      return "I've never travelled outside of the United States.";
    } 
  
    else if (userNumber == 8) {
      //execute some code
      return "My wife and I are planning on starting a family next year!";
    } 
  
    else if (userNumber == 9) {
      //execute some code
      return "I played football and lacrosse all through middle school and high school.";
    } 
  
    else if (userNumber == 10) {
      //execute some code
      return "My favorite anime is My Hero Academia.";
    } 

    else if (userNumber > 10) {
        //execute some code
        return "Hey hey, that's all the facts I can think of!";
      } 
  
    else {
      return "Ya gotta enter an actual number to learn a fact!";
    }
    
  }


