$(document).ready(function(){
	var turn = 1;


	$('.column').click(function(){
		var that = $(this);
		if(turn % 2 === 0){
			that.text('X');
			that.addClass('X');
			n = 'X'
		}
		else{
			that.text('O');
			that.addClass('O');
			n = 'O';
		}
		checkIfWon(n);
		turn++;
		that.off('click')
	});

// Crazy method by Chris Gahan, very interesting to note that all the elements with class column save in an array 
// with the proper index according to the grid layour allowing for the check to work. 

							// // [0 1 2]  
							// // [3 4 5]
							// // [6 7 8]
							
							// var cells = $(".column")
							// var winning_positions = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]

							// // winning_positions.any? { |triple| triple.all? { |n| cells[n].hasClass(player) } }

						 //  var check_winner = function(player) {
							// 	for (var i = 0; i < winning_positions.length; i++) {
							// 		var row = winning_positions[i];

							// 		var winner = true;

							// 		for (var j = 0; j < row.length; j++) {
							// 			if (!$(cells[j]).hasClass(player))
							// 				winner = false;
							// 		}

							// 		if (winner)
							// 			return true;
									
							// 	}

							// 	return false;
							// // }

var checkIfWon = function(n){
	if (
		 ($('#grid1').hasClass(n) && $('#grid2').hasClass(n) && $('#grid3').hasClass(n)) ||
		 ($('#grid1').hasClass(n) && $('#grid4').hasClass(n) && $('#grid7').hasClass(n)) ||
		 ($('#grid2').hasClass(n) && $('#grid5').hasClass(n) && $('#grid8').hasClass(n)) ||
		 ($('#grid3').hasClass(n) && $('#grid6').hasClass(n) && $('#grid9').hasClass(n)) ||
		 ($('#grid1').hasClass(n) && $('#grid5').hasClass(n) && $('#grid9').hasClass(n)) ||
		 ($('#grid3').hasClass(n) && $('#grid5').hasClass(n) && $('#grid7').hasClass(n)) ||
		 ($('#grid4').hasClass(n) && $('#grid5').hasClass(n) && $('#grid6').hasClass(n)) ||
		 ($('#grid7').hasClass(n) && $('#grid8').hasClass(n) && $('#grid9').hasClass(n))
		)
	// if (check_winner(n)) {
		{
		console.log(turn);
		window.alert(n + " has won!!");
		$('.column').off('click');
	} else if (turn ===9) {
		window.alert("It's a Tie");
	}
}

});