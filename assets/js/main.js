function changeText(text)
{
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = "H̶͉̓ị̵̡͂,̶̯̄ ̷̥̎Ĩ̴͍̤̅'̸̙͋ṁ̴̼̠ ̵̠̪̾̀J̵̱̄ȍ̵̗̹̌h̸̰͎̔n̷͇̍ͅ ̴̼̻̄Ṅ̵̹̣̈u̴̬̓t̶̨̧͋t̸͇́́ẹ̷̡͌̈́r̵̺͆!̶̣̎";
    document.getElementById("text-display").style.color = "#0ff";
}
      
function defaultText()
{
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = "Hi, I'm John Nutter!";
    document.getElementById("text-display").style.color = "#F294EC";
}