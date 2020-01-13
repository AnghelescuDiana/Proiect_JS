<input type="button" name="clickMe" value="Click pentru a afla daca primesti cupon!"
onclick="setTimeout('alert('Felicitari! 50% reducere')', 5000)"/>



var BUYIntervalId = 0;

function BUYClickHandler ( )
{
  if ( document.getElementById("BUYButton").value == "Click me!" )
  {
    // Start the timer
    document.getElementById("BUYButton").value = "Stop!";
    BUYIntervalId = setInterval ( "BUY()", 1000 );
  }
  else
  {
    document.getElementById("BUYMessage").innerHTML = "";
    document.getElementById("BUYButton").value = "Click me!";
    clearInterval ( BUYIntervalId );
  }
}

function BUY ( )
{
  if ( Math.random ( ) > .5 )
  {
    document.getElementById("BUYMessage").innerHTML = "BUY!";
  }
  else
  {
    document.getElementById("wooYayMessage").innerHTML = "NOW!";
  }

  setTimeout ( 'document.getElementById("wooYayMessage").innerHTML = ""', 500 );

}





function range(1234,4567) {
document.getElementById("_1234").checked = true;
document.getElementById("_2345").checked = true;
document.getElementById("_3456").checked = true;
document.getElementById("_4567").checked = true;
}