

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click",function(e)
{alert("are you sure you want this kitty to evolve?");
document.getElementById("my_head").innerHTML = "The kitty has evolved!";
document.getElementById("my_head").style.color = "pink";
document.getElementById("paragraph").innerHTML = "Your kitty has evolved to unicat!";
document.getElementById("paragraph").style.color = "pink";
document.body.style.background = "purple";
document.getElementById("image").src = "images/cat.png";
})

console.log(document.getElementById("my_head").innerHTML);
