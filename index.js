const div = document.getElementById("shutka")
fetch("https://api.chucknorris.io/jokes/random")
.then((res) => {
    return res.json() })
.then((joke) => {
    div.prepend(joke.value)
})
.catch((e)=> {
    consolee.log(e)
})