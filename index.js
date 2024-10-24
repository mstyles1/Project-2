async function clickHandler_fetchdata(AYyh40hWbkpevIR5LRy7GIN3YSd382bx) {
    let response = await fetch ()
    let data = await response.json()
    data.forEeach(element => {
        console.log(element)
    });
}
