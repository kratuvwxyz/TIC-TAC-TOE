// display information
letsPlay = () => {
    $('#intro-text').hide();
    $('.hidePlayerOne').fadeIn(2000);
}

let player1 = "",
    player2 = "";
    
function hideThem (x, y, z, w) {

	if(x == ""){
		$('#'+y).toggleClass('shake');
	} else {
		$("."+z).hide();
		$("."+w).fadeIn(2000);
	}
	
	
}
    
$(document).on('click', '.nextPlayerTwo', () => {
	player1 = $('#playerOne').val();
	hideThem (player1, "playerOne", "hidePlayerOne", "hidePlayerTwo");    
});



$('.nextShowGame').click(() => {
	
	player2 = $('#playerTwo').val();
	hideThem (player2, "playerTwo", "hidePlayerTwo", "hideGame"); 
	gameUp();
});

// before we start, let's setup!

let sign = 'X',
    disp = $('#player'),
    isko = "",
    x = 0,
    o = 0;
console.log(player1);
console.log(player2);

gameUp = () => {
    
    // else keep the name in the prompt
    $('.player1Name').text(player1);
    $('.player2Name').text(player2);
    disp.html(`Let's Play! <span style="color:#dc3545;">${sign == 'X' ? player1 : player2}</span>, it's your turn!`)
    
    // main function 
    printx = (number) => {
        isko = $('#r' + number);
        // !(not) let throw an error if user want to add on something alrady typed
        if (!$(isko).html()) {
            $(isko).text(sign).css('background-color', 'rgb(230, 230, 230)').css('color', 'black').css('cursor', 'grab');
            winner();//check if you win or not
            checksign();//change user
            $(disp).html(`<center><span style="color:#dc3545;"> ${sign == 'X' ? player1 : player2}</span>, it's your turn to play.</center>`);
        } else {
            throw 'error';
        }
    }
    
    // change 'X' or 'O'
    checksign = () => {
        sign == 'X' ? sign = "O" : sign = "X";
    }
    
    // return id value
    getbox = (number) => {
        return $('#r' + number).text();
    }
    
    // if all are matching then return true (win) else false
    checkmove = (a, b, c, m) => {
        if (getbox(a) == m && getbox(b) == m && getbox(c) == m) {
            $('#r' + a).css('background-color', '#dc3545').css('color', '#ffffff');
            $('#r' + b).css('background-color', '#dc3545').css('color', '#ffffff');
            $('#r' + c).css('background-color', '#dc3545').css('color', '#ffffff');
            return true;
        } else {
            return false;
        }
    }
    
    // reset after game done
    reset = () => {
        $('#x').text(x);
        $('#o').text(o);
        isko = "";
        $(disp).html(`<center>Winner plays first! <span style="color:#dc3545;"> ${sign == 'X' ? player1 : player2}</span>, Your turn!</center>`)
        for (let i = 1; i < 10; i++) {
            $('#r' + i).html("").css('background-color', 'rgb(187, 186, 186)').css('cursor', 'grabbing');
        }
    }
    
    // check winner in every move
    winner = () => {
        if (
            checkmove(1, 2, 3, sign) ||
            checkmove(4, 5, 6, sign) ||
            checkmove(7, 8, 9, sign) ||
            checkmove(1, 4, 7, sign) ||
            checkmove(2, 5, 8, sign) ||
            checkmove(3, 6, 9, sign) ||
            checkmove(1, 5, 9, sign) ||
            checkmove(3, 5, 7, sign)) {
            $(disp).html(`<center>Winner winner chicken dinner, <span style='color: #dc3545;'> ${sign == 'X' ? player1 : player2} wins.</span></center>`);
            // score
            sign == 'X' ? x++ : o++;
            // adding set time out for 3 sec. to see the final result
            setTimeout(reset, 3000);
            // end of the game
            throw 'game over';
        } else {
            if (getbox(1) != "" &&
                getbox(2) != "" &&
                getbox(3) != "" &&
                getbox(4) != "" &&
                getbox(5) != "" &&
                getbox(6) != "" &&
                getbox(7) != "" &&
                getbox(8) != "" &&
                getbox(9) != "") {
                $(disp).html(`<center>It's a tie. Play again</center>`);
                setTimeout(reset, 3000);
                throw 'it is a tie'
            }
        }
    }

};


//     ╥╥  DESIGNED AND DEVELOPED BY...
//     ║║ 
//     ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
//     ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
// ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
// ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
// ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
// ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
// ║║  ║║  .STUDIO             ║║     ║║     ╙╙ LLC
// ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
//     LLC © HTTPS://DESAIGN.APP
//     ALL RIGHTS RESERVED
//     --
//     Call: 1-860-DESAIGN
//     Mail: MEET@DESAIGN.STUDIO
//     Post: PO BOX 200001, AUSTIN TX 78720