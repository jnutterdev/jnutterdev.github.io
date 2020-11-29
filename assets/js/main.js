// function changeText(text)
// {
//     var display = document.getElementById('text-display');
//     display.innerHTML = "";
//     display.innerHTML = "H̶͉̓ị̵̡͂,̶̯̄ ̷̥̎Ĩ̴͍̤̅'̸̙͋ṁ̴̼̠ ̵̠̪̾̀J̵̱̄ȍ̵̗̹̌h̸̰͎̔n̷͇̍ͅ ̴̼̻̄Ṅ̵̹̣̈u̴̬̓t̶̨̧͋t̸͇́́ẹ̷̡͌̈́r̵̺͆!̶̣̎";
//     document.getElementById("text-display").style.color = "#0ff";
// }

// function defaultText()
// {
//     var display = document.getElementById('text-display');
//     display.innerHTML = "";
//     display.innerHTML = "Hi, I'm John Nutter!";
//     document.getElementById("text-display").style.color = "#F294EC";
// }

// const aboutMe = document.getElementById("about-button");

// aboutMe.addEventListener("click", () => {
//     const e = document.getElementsByClassName('hidden-about')[0];

//     if (e.style.display === "none") {
//         e.style.display = "block";
//     } else {
//         e.style.display = "none";
//     }
// });

$(window).on("load", function() {
    $('.pixelate').pixelate({
        'focus': 0.75,

    });
});

$(div).on("mouseenter mouseleave", function() {
    $('.pixelate').pixelate({
        'focus': 1,
    });
});