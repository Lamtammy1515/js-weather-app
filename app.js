window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description")
    let temperatureDegree = document.querySelector(".temperature-degree")
    let locationTimezone = document.querySelector(".location-timezone")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`

            fetch(api)
            .then(resp =>{
                return resp.json();
            })
            .then(data => {
                console.log(data)
                const { temperature, summary } = data.currently;
                //set DOM elements from the API

            })
        })
    }
})

//http://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/37.8267,-122.4233
