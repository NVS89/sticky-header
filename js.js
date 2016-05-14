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
                var isOn = false;
               if(elem.getBoundingClientRect().top < (document.body.scrollTop-elemHeight) && (elem.getBoundingClientRect().top <= 0)){

                   elem.className = "containerfx";

                }else {

                   elem.className = "container";
               }
            };
        })
    }
)();