//display current date in the header with id of currentDay
function displayDate(){
    
    setInterval(function() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')) 

    },1000 )
}


displayDate();