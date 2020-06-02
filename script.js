let sign = 'X',
    disp = $('#player'),
    isko = "",
    player1 = prompt('Who is player 1?'),
    player2 = prompt('Who is player 2?'),
    x = 0,
    o = 0;

if (player1 == "" && player2 == "") {
    player1 = "Player 1";
    player2 = "Player 2";
}
$('.player1').text(player1);
$('.player2').text(player2);

printx = (number) => {
    isko = $('#r' + number);
    if (!$(isko).html()) {
        $(isko).text(sign).css('background-color', 'rgb(230, 230, 230)').css('color', 'black');
        winner();
        checksign();
        $(disp).html(`<center><span style="color:#dc3545;"> ${sign == 'X' ? player1 : player2}</span>, it's your turn to play.</center>`);
    } else {
        throw 'error';
    }
}

checksign = () => {
    sign == 'X' ? sign = "O" : sign = "X";
}

getbox = (number) => {
    return $('#r' + number).text();
}

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

reset = () => {
    $('#x').text(x);
    $('#o').text(o);
    isko = "";
    $(disp).html(`<center>Winner plays first! <span style="color:#dc3545;"> ${sign == 'X' ? player1 : player2}</span>, Your turn!</center>`)
    for (let i = 1; i < 10; i++) {
        $('#r' + i).html("").css('background-color', 'rgb(187, 186, 186)');
    }
}

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
        sign == 'X' ? x++ : o++;
        setTimeout(reset, 3000);
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
        }
    }
}