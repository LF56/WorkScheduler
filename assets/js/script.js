//display current date in the header with id of currentDay
function displayDate(){    
    setInterval(function() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')) 

    },1000 )
}
function save(e){
    var content = ($(e.target).parent().siblings()[1].innerText)
    var id = ($(e.target).parent().siblings()[1].id)
    console.log(id, content)
   
    localStorage.setItem(id,content)
}



//dividing function practice
// function divideByTwo(number){
//     var quotient = number/2
//     return quotient
// }
// var divide = divideByTwo(6)
// console.log(divide)



displayDate();