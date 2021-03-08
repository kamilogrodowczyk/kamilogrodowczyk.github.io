if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('kamilogrodowczyk.github.io/sw.js', {scope: 'kamilogrodowczyk.github.io'})
    .then(registration => {
        console.log(registration)
    }).catch(error => {
        console.log(error)
    })
}