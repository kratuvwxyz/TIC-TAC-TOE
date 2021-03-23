letsPlay = () => {
  $("#intro-text").fadeOut(2e3), $(".hidePlayerOne").fadeIn(2e3);
};
let player1 = "",
  player2 = "";
function hideThem(e, r, o, t) {
  "" == e ? $("#" + r).toggleClass("shake") : ($("." + o).hide(), $("." + t).fadeIn(2e3));
}
$(document).on("click", ".nextPlayerTwo", () => {
  (player1 = $("#playerOne").val()), hideThem(player1, "playerOne", "hidePlayerOne", "hidePlayerTwo");
}),
  $(".nextShowGame").click(() => {
    (player2 = $("#playerTwo").val()), hideThem(player2, "playerTwo", "hidePlayerTwo", "hideGame"), gameUp();
  });
let sign = "X",
  disp = $("#player"),
  isko = "",
  x = 0,
  o = 0;
gameUp = () => {
  $(".player1Name").text(player1).addClass("textTransform"),
    $(".player2Name").text(player2).addClass("textTransform"),
    disp.html(`Let's Play! <span style="color:#fff;" class="textTransform">${"X" == sign ? player1 : player2}</span>, it's your turn!`),
    (printx = (e) => {
      if (((isko = $("#r" + e)), $(isko).html())) throw "error";
      $(isko).text(sign).css("background-color", "rgb(230, 230, 230)").css("color", "black").css("cursor", "grab"), winner(), checksign(), $(disp).html(`<center><span style="color:#fff;" class="textTransform"> ${"X" == sign ? player1 : player2}</span>, it's your turn to play.</center>`);
    }),
    (checksign = () => {
      sign = "X" == sign ? "O" : "X";
    }),
    (getbox = (e) => $("#r" + e).text()),
    (starbox = (e) =>
      $("#r" + e)
        .text("•")
        .css("color", "#2a2a2a")),
    (checkmove = (e, r, o, t) =>
      getbox(e) == t &&
      getbox(r) == t &&
      getbox(o) == t &&
      ($("#r" + e)
        .css("background-color", "#dc3545")
        .css("color", "#ffffff"),
      $("#r" + r)
        .css("background-color", "#dc3545")
        .css("color", "#ffffff"),
      $("#r" + o)
        .css("background-color", "#dc3545")
        .css("color", "#ffffff"),
      !0)),
    (reset = () => {
      $("#x").text(x), $("#o").text(o), (isko = ""), $(disp).html(`<center>Winner plays first! <span style="color:#fff;" class="textTransform"> ${"X" == sign ? player1 : player2}</span>, Your turn!</center>`);
      for (let e = 1; e < 10; e++)
        $("#r" + e)
          .html("")
          .css("background-color", "rgb(187, 186, 186)")
          .css("cursor", "grabbing");
    }),
    (winner = () => {
      if (checkmove(1, 2, 3, sign) || checkmove(4, 5, 6, sign) || checkmove(7, 8, 9, sign) || checkmove(1, 4, 7, sign) || checkmove(2, 5, 8, sign) || checkmove(3, 6, 9, sign) || checkmove(1, 5, 9, sign) || checkmove(3, 5, 7, sign)) throw ($(disp).html(`<center>Winner winner <span style='color: #fff;' class="textTransform"> ${"X" == sign ? player1 : player2}</span> is the winner!</center>`), "X" == sign ? x++ : o++, "" == getbox(1) && starbox(1), "" == getbox(2) && starbox(2), "" == getbox(3) && starbox(3), "" == getbox(4) && starbox(4), "" == getbox(5) && starbox(5), "" == getbox(6) && starbox(6), "" == getbox(7) && starbox(7), "" == getbox(8) && starbox(8), "" == getbox(9) && starbox(9), setTimeout(reset, 3e3), "game over");
      if ("" != getbox(1) && "" != getbox(2) && "" != getbox(3) && "" != getbox(4) && "" != getbox(5) && "" != getbox(6) && "" != getbox(7) && "" != getbox(8) && "" != getbox(9)) throw ($(disp).html("<center>It's a tie. Play again</center>"), setTimeout(reset, 3e3), "it is a tie");
    });
};

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/