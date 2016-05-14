/**
 * Created by Nick-PC on 12.05.2016.
 */
(
    function(){
        document.addEventListener("DOMContentLoaded",function(){
            console.log("document is ready");
            var elem = document.getElementsByClassName('container')[0];
            var elemHeight = elem.getBoundingClientRect().top ;

            console.log( 'start top ' + elem.getBoundingClientRect().top  );
            addEventListener('scroll', sticky);

            function sticky (){
                console.log( 'top ' + elem.getBoundingClientRect().top  );
                console.log( 'scroll top '+ document.body.scrollTop );
              //  console.log('scroll summ ' + elemHeight);

               if(document.body.scrollTop-elemHeight)>0 || document.documentElement.scrollTop-elemHeight>0)){

                   elem.className = "containerfx";

                }else {

                   elem.className = "container";
               }
            };
        })
    }
)();