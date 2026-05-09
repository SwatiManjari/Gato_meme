var n=document.querySelectorAll("button").length;

for(var i=0;i<n;i++)

document.querySelectorAll("button")[i].addEventListener("click",function()
{
    var buttonInnerHTML=this.innerHTML;
    MakeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

})

function MakeSound(key){
    switch (key) {
        case "cat1":
            var cat1=new Audio("./aagh.mp3");
            cat1.play();
            break;
        case "cat2":
            var cat2=new Audio("./cool.mp3");
            cat2.play();
            break;
        case "cat3":
            var cat3=new Audio("./doggy.mp3");
            cat3.play();
            break;
        case "cat4":
            var cat4=new Audio("./fahh.mp3");
            cat4.play();
            break;
        case "cat5":
            var cat5=new Audio("./freaky.mp3");
            cat5.play();
            break;
        case "cat6":
            var cat6=new Audio("./huh.mp3");
            cat6.play();
            break;
        case "cat7":
            var cat7=new Audio("./laugh.mp3");
            cat7.play();
            break;
        case "cat8":
            var cat8=new Audio("./oioiioiioioioi.mp3");
            cat8.play();
            break;
        case "cat9":
            var cat9=new Audio("./sad.mp3");
            cat9.play();
            break;
        case "cat10":
            var cat10=new Audio("./sleepy.mp3");
            cat10.play();
            break;
        case "cat11":
            var cat11=new Audio("./sus.mp3");
            cat11.play();
            break;
        case "cat12":
            var cat12=new Audio("./war-sound.mp3");
            cat12.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
{
    activeButton.classList.remove("pressed");
},100);
}
