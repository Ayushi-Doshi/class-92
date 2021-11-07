p1n = localStorage.getItem("p1n");
p2n = localStorage.getItem("p2n");

p1s = 0;
p2s = 0;

qt = "p1n";
at = "p2n";

document.getElementById("p1n").innerHTML = p1n + ":";
document.getElementById("p2n").innerHTML = p2n + ":";

document.getElementById("p1s").innerHTML = p1s ;
document.getElementById("p2s").innerHTML = p2s ;

document.getElementById("pq").innerHTML = "Question Turn - " + p1n ;
document.getElementById("pa").innerHTML = "Answer Turn - " + p2n ;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    qw = "<h4 id='wd'> Q. "+remove_charAt3+"</h4>";
    ib = "<br>Answer : <input type='text' id='input_check_box'>";
    cb = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="  ";
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer == word)
    {
        if(at == "p1n")
        {
            p1s = p1s +1;
            document.getElementById("p1s").innerHTML = p1s;

        }

        else
    {
        p2s = p2s +1;
        document.getElementById("p2s").innerHTML = p2s;
        
    }
    }
    if(qt == "p1n")
    {
       
            qt = "p2n" ;
            document.getElementById("pq").innerHTML = "Question Turn - " + p2n ;

    }
    else
    {
       
        qt = "p1n" ;
        document.getElementById("pq").innerHTML = "Question Turn - " + p1n ;
    }

    if(at == "p1n")
    {
       
            at = "p2n" ;
            document.getElementById("pa").innerHTML = "Answer Turn - " + p2n ;

    }
    else
    {
       
        at = "p1n" ;
        document.getElementById("pa").innerHTML = "Answer Turn - " + p1n ;
    }
    document.getElementById("output").innerHTML=" ";
}