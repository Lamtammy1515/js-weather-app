window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude;

            const api = `http://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`

            fetch(api)
            .then(resp =>{
                return resp.json();
            })
            .then(data => {
                console.log(data)
            })
        })
    }
})

//http://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/37.8267,-122.4233
