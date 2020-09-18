var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenuAnchorTag.length;i++)
{

    //one wayto implement

        // navMenuAnchorTag[i].addEventListener('click',function(event){
        //     event.preventDefault();
        //     var targetSectionId =this.textContent.trim().toLowerCase();
        //     var targetSection=document.getElementById(targetSectionId);
        //     var targetSectionCoordinates=targetSection.getBoundingClientRect();
        //     var interval=setInterval(function(){
        //         var targetSectionCoordinates=targetSection.getBoundingClientRect();
        //         if(targetSectionCoordinates.top<=0){
        //             clearInterval(interval);
        //             return;
        //         }
        //         window.scrollBy(0,50);

        //     },30);
        // });   
        
        
        //another refined way

        navMenuAnchorTag[i].addEventListener('click',function(event){
                event.preventDefault();
                 var targetSectionId =this.textContent.trim().toLowerCase();
                 var targetSection=document.getElementById(targetSectionId);
                 var targetSectionCoordinates=targetSection.getBoundingClientRect();
                  interval=setInterval(scrollVertically,20,targetSection);
        }); 
    
               
              



}



function scrollVertically(targetSection)
{
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
       return;
   }
   window.scrollBy(0,50);
}






// var skillsContainer = document.getElementById('skills-container');
// var progressBar=document.querySelectorAll('.skill-progress > div');
// window.addEventListener('scroll',checkScroll);
// var animationDone=false;

// function initializeBars()
// {
//     for(let bar of progressBar)
//     {
//         bar.style.width= 0 +'%';
//     }
// }


// function fillBar()
// {

//     for(let bar of progressBar)
//          {
            
            
//             let currentProgress=0;
           
            
//             let finalProgress=parseFloat(bar.getAttribute("data-bar-width"));
            
           
//                let interval=setInterval(function(){
                
//                         if(currentProgress>=finalProgress)
//                         {
//                             clearInterval(interval);
//                             return;
//                         }

//                         currentProgress++;
//                         bar.style.width=currentProgress + '%'
                        


//                 },8);

//          }

// }

// function checkScroll(){
//     var coordinates=skillsContainer.getBoundingClientRect();
    
//     if(!animationDone && coordinates.top <= window.innerHeight)
//     {
//         initializeBars();
//        animationDone=true; 
//        fillBar();
       
//     }

//     else if(coordinates.top > window.innerHeight){
//         animationDone=false; 
//     }


// }


 var skillsContainer = document.getElementById('skills-container');
 var progressBar=document.querySelectorAll('.skill-progress > div');

window.addEventListener('scroll',checkScroll);





function initializeBar(bar)
 {
     
    bar.style.width= 0 +'%';
     
 }

 function fillBar(bar)
 {

             let currentProgress=0;
             let finalProgress=parseFloat(bar.getAttribute("data-bar-width"));
            
           
                let interval=setInterval(function(){
                
                         if(currentProgress>=finalProgress)
                         {
                             clearInterval(interval);
                             return;
                        }

                         currentProgress++;
                        bar.style.width=currentProgress + '%'
                        


                 },8);

}


var animationDone=[progressBar.length];

for(let i=0;i<progressBar.length;i++)
{
    animationDone[i]=false;
}
  


 function checkScroll(){
    
        for(let bar=0;bar<progressBar.length;bar++)
        {
            
            
            let coordinates=progressBar[bar].getBoundingClientRect();
            if(!animationDone[bar] && coordinates.top <= window.innerHeight)
            {
             initializeBar(progressBar[bar]);
           animationDone[bar]=true; 
            fillBar(progressBar[bar]);
           
            }

            else if(coordinates.top > window.innerHeight){
                       animationDone[bar]=false; 
                    }

        }
    }