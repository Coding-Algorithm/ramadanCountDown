            let Days = document.querySelector('.days');
            let Hours = document.querySelector('.hrs');
            let Minutes = document.querySelector('.min');
            let Seconds = document.querySelector('.sec');
            
            
            let eventDate = new Date(2022,03,2);
        
            function countdown(){

                let now = new Date();

                DateDiff = eventDate.getTime() - now.getTime();

                ToGoSeconds = Math.floor((DateDiff/1000) % 60)
                ToGoMinutes = Math.floor(ToGoSeconds/60)
                ToGoHours = Math.floor(ToGoMinutes/60)
                ToGoDays = Math.floor(ToGoHours/24)

//                 ToGoMinutes %= 60
//                 ToGoHours %= 24
                


                if(ToGoSeconds < 10){
                    Seconds.textContent = '0' + ToGoSeconds;
                }else{
                    Seconds.textContent = ToGoSeconds
                }

                if(ToGoMinutes < 10){
                    Minutes.textContent = '0' + ToGoMinutes;
                }else{
                    Minutes.textContent = ToGoMinutes
                }

                if(ToGoHours < 10){
                    Hours.textContent = '0' + ToGoHours;
                }else{
                    Hours.textContent = ToGoHours
                }

                if(ToGoDays < 10){
                    Days.textContent = '0' + ToGoDays;
                }else{
                    Days.textContent = ToGoDays
                }


                // console.log(ToGoSeconds + ' ::: '+ ToGoMinutes + ' ::: ' + ToGoHours + ' ::: ' + ToGoDays)
            }

            
            setInterval(countdown, 1000)
