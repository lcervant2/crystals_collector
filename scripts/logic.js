$(document).ready(function() {

	var stoneOneValue, stoneTwoValue, stibeThreeValue, stoneFourValue;
	var wins = 0;
	var losses = 0;

	var randomComputerNumber;
	
	var userTallyScore;

	function initializeVariables() {
		
		randomComputerNumber = 19 + Math.floor(Math.random() * 102);
		
		stoneOneValue = 1 + Math.floor(Math.random() * 12);
		stoneTwoValue = 1 + Math.floor(Math.random() * 12);
		stoneThreeValue = 1 + Math.floor(Math.random() * 12);
		stoneFourValue = 1 + Math.floor(Math.random() * 12);
		
		userTallyScore = 0;
		
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomComputerNumber);
		$("#userScore").html(userTallyScore);
		consoleLogVariables();
	}

	function hasUserWonOrLost() {
	
		if (userTallyScore > randomComputerNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		
		if (userTallyScore == randomComputerNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}


	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("stoneOneValue: ", stoneOneValue + " stoneTwoValue: " + stoneTwoValue + " stoneThreeValue: " + stoneThreeValue + " stoneFourValue: " + stoneFourValue);
		console.log("randomComputerNumber: " + randomComputerNumber + " userTallyScore: " + userTallyScore);
		console.log("----------------------------------");

	}

	

	initializeVariables();

	
	$(".stone").on("click", function() {
		
		var pressed = $(this).attr("value");
        console.log(pressed);
      
        if (pressed == "stone1") {
        	userTallyScore += stoneOneValue;
        } else if (pressed == "stone2") {
        	userTallyScore += stoneTwoValue;
        } else if (pressed == "stone3") {
        	userTallyScore += stoneThreeValue;
        } else if (pressed == "stone4") {
        	userTallyScore += stoneFourValue;
        } else {
        	console.log("error");
        }
        
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
       
        hasUserWonOrLost();
	});

});