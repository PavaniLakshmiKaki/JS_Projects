

var l= document.querySelectorAll('.drum');
var aud;

for (let a=0;a<l.length;a++){
 l[a].addEventListener('click',function()
    {
        
        var button=this.innerHTML;

        //using switch 

        switch(button){
            case "w":
                aud=new Audio('sounds/crash.mp3');
                aud.play();
                break;
            case "a":
                aud=new Audio('sounds/kick-bass.mp3');
                aud.play();
                break;
            case "s":
                aud=new Audio('sounds/snare.mp3');
                aud.play();
                break;
            case "d":
                aud=new Audio('sounds/tom-1.mp3');
                aud.play();
                break;
            case "j":
                aud=new Audio('sounds/tom-2.mp3');
                aud.play();
                break;
            case "k":
                aud=new Audio('sounds/tom-3.mp3');
                aud.play();
                break;
            case "l":
                aud=new Audio('sounds/tom-4.mp3');
                aud.play();
                break;
            default:
                console.log(this.button);
        }
        
        //using if else 
        /*if ( l[a].textContent == 'w'){
            aud=new Audio('sounds/crash.mp3');
            aud.play();
        }
        else if (l[a].textContent == 'a'){
            aud=new Audio('sounds/kick-bass.mp3');
            aud.play();
        }
        else if (l[a].textContent == 's'){
            aud=new Audio('sounds/snare.mp3');
            aud.play();
        }
        else if (l[a].textContent == 'd'){
            aud=new Audio('sounds/tom-1.mp3');
            aud.play();
        }
        else if (l[a].textContent == 'j'){
            aud=new Audio('sounds/tom-2.mp3');
            aud.play();
        }
        else if (l[a].textContent == 'k'){
            aud=new Audio('sounds/tom-3.mp3');
            aud.play();
        }
        else{
            aud=new Audio('sounds/tom-4.mp3');
            aud.play();
        }
    });*/

           /*
        aud=new Audio('sounds/crash.mp3');
        aud.play();
    */
    
    });
}

document.addEventListener('keydown', function(event){
    alert('Key is pressed');
});