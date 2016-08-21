$(document).ready(function(){
   
    var images = ['normLeft.png','breathLeft.png','walkLeft1.png','walkLeft2.png','normRight.png','breathRight.png','walkRight1.png','walkRight2.png','normUp.png','breatUp.png','walkUp1.png','walkUp2.png','normDown.png','breathDown.png','walkDown1.png','walkDown2.png'];
    var index = 0;
    
    $(document).keydown(function(key){

        switch(parseInt(key.which,10)){
                
            //Right Arrow pressed go right
            case 39:
                if(index != 6 && index != 7)
                    index = 6;
                
                if(index == 6){
                    index = 7;
                }
                else{
                    index = 6;
                }
                $('#character').attr('src','./character/'+images[index]);
                $('#character').animate({left: '+=2'}, 0);
                break;
            //Left Arrow pressed go left
            case 37:
                if(index != 2 && index != 3)
                    index = 2;
                
                if(index == 2){
                    index = 3;
                }
                else{
                    index = 2;
                }
                $('#character').attr('src','./character/'+images[index]);
                $('#character').animate({left: '-=2'}, 0);
                break;
            //Up Arrow pressed go up
            case 38:
                if(index != 10 && index != 11)
                    index = 10;
                
                if(index == 10){
                    index = 11;
                }
                else{
                    index = 10;
                }
                $('#character').attr('src','./character/'+images[index]);
                $('#character').animate({top: '-=2'}, 0);
                break;
            //Down Arrow pressed go down
            case 40:
                if(index != 14 && index != 15)
                    index = 14;
                
                if(index == 14){
                    index = 15;
                }
                else{
                    index = 14;
                }
                $('#character').attr('src','./character/'+images[index]);
                $('#character').animate({top: '+=10'}, 0);
                break;
        }
        

    })
});
