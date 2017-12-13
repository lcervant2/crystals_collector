$(document).ready(function() {
	var wins = 0;
	var losses = 0;

	var $crystals = $('#crystals img')

	// Generate number value for images
	generateCrystalNumbers($crystals)

	var generateNewGame = function() {
		var counter = 0;
		var randomNumber = 19 + Math.floor(Math.random() * 102)

		$('#randomNumber .value').text(randomNumber)

		$crystals.on('click', function() {
			var crystalValue = $(this).data('value')
			counter = counter + crystalValue

			$('#yourScore').text(counter)

			if (randomNumber === counter) {
				wins++
				$('#win').text(wins)
				$('#yourScore').text('0')
				generateCrystalNumbers($crystals)
				generateNewGame()
			}

			if (counter > randomNumber) {
				losses++
				$('#loss').text(losses)
				$('#yourScore').text('0')
				generateCrystalNumbers($crystals)
				generateNewGame()
			}
		})
	}

	// Generates random number for each image.
	function generateCrystalNumbers(els) {
		els.each(function(index, el) {
			var randomNumber = 1 + Math.ceil(Math.random()*12)
			$(el).attr('data-value', randomNumber)
		})
	}

	// Initialize game
	generateNewGame()

})