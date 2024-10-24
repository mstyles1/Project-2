$(document).ready(()=>{

    $("$submit").click(()=>{
        let userInput = $("#search").val()
        alert(userInput)
        $.ajax({
            url: `api.giphy.com/v1/gifs/search/?AYyh40hWbkpevIR5LRy7GIN3YSd382bx${userInput}`
        })
        .done(()=>{
            
        })
    })
})