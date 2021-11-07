function addUser()
{
    p1n= document.getElementById("player_name_input1").value;
    p2n= document.getElementById("player_name_input2").value;
    localStorage.setItem("p1n",p1n);
    localStorage.setItem("p2n",p2n);
    window.location = "game_page.html";
}