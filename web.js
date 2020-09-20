// function sendServerRequest() {
//     return new Promise((resolve, reject) => {
//         // step 1
//         const xhr = new XMLHttpRequest();

//         // step 2.1
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 resolve(xhr.responseText);
//             } else if (xhr.readyState === 4 && xhr.status !== 200) {
//                 reject(xhr.status);
//             }
//         }

//         // step 2.2
//         const city1 = "london"
//         const kostil = "https://cors-anywhere.herokuapp.com";
//         const realServer = `https://www.metaweather.com/api/location/search/?query=${city1}`;
//         xhr.open('GET', `${kostil}/${realServer}`);

//         // step 3
//         xhr.send();
//     });
// }

// sendServerRequest()
// .then(responseText => JSON.parse(responseText))
// .then(json => {
//     const { woeid, latt_long } = json[0];
//         console.log(json);
//         txt.innerHTML = `London id is <b>${woeid}</b> and coordiantes: <i>${latt_long}</i>`
// })
// .catch(err => {
//     console.error(err);
// })



// //FETCH 



// const kostil = "https://cors-anywhere.herokuapp.com";
// const realServer = "https://www.metaweather.com/api/location/44418/";
// fetch(`${kostil}/${realServer}`)
// .then(response => response.json())
// .then(json => {
//     weather.innerHTML = json.consolidated_weather[0].the_temp;
//     icon.src = `https://www.metaweather.com//static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`
//     time.innerHTML = json.time;
// })
// .catch(err => console.error(err));



// //jQuery (XMLHttpRequest)



// $(function () {
//     // $(.otherhtml).load('index.html #contact_form')
//     $.get(`${kostil}/${realServer}`, data => {
//         $('#jqweather').html(data.consolidated_weather[0].the_temp)
//     }, 'json')
//     $.getJSON(`${kostil}/${realServer}`, data => {
//         console.log(data.consolidated_weather[3].the_temp);
//         console.log(data.consolidated_weather[0].the_temp);

//     })
// })







// // HOMEWORK







// homework XMLhttpRequest

CityInputButton.addEventListener('click', () => {
    // const CityInputButton = document.getElementById('CityInputButton');
    const city = document.getElementById('CityInput').value;
    console.log(city);
    
    function sendServerRequest() {
        return new Promise((resolve, reject) => {
            // step 1
            const xhr = new XMLHttpRequest();
    
            // step 2.1
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                } else if (xhr.readyState === 4 && xhr.status !== 200) {
                    reject(xhr.status);
                }
            }
    
            // step 2.2
            const kostil = "https://cors-anywhere.herokuapp.com";
            const realServer = `https://www.metaweather.com/api/location/search/?query=${city}`;
            console.log(`https://www.metaweather.com/api/location/search/?query=${city}`);
            xhr.open('GET', `${kostil}/${realServer}`);
    
            // step 3
            xhr.send();
        });
    }
    
    sendServerRequest()
    .then(responseText => JSON.parse(responseText))
    .then(json => {
        const { woeid } = json[0];
        CityId.innerHTML = `${woeid}`
        IdInput.value = `${woeid}`
    })
    .catch(err => {
        alert('Такого города больше не существует!');
        console.error(err);
    });
});

IdInputButton.addEventListener('click', () => {
    // const IdInputButton = document.getElementById('IdInputButton');
    const id = document.getElementById('IdInput').value;
    console.log(id);
    
    function sendServerRequest() {
        return new Promise((resolve, reject) => {
            // step 1
            const xhr = new XMLHttpRequest();
    
            // step 2.1
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                } else if (xhr.readyState === 4 && xhr.status !== 200) {
                    reject(xhr.status);
                }
            }
    
            // step 2.2
            const kostil = "https://cors-anywhere.herokuapp.com";
            const realServer = `https://www.metaweather.com/api/location/${id}`;
            console.log(`https://www.metaweather.com/api/location/${id}`);
            xhr.open('GET', `${kostil}/${realServer}`);
    
            // step 3
            xhr.send();
        });
    }
    
    sendServerRequest()
    .then(responseText => JSON.parse(responseText))
    .then(json => {
        for (let i = 0; i < 5; i++) {
            let { the_temp, weather_state_name } = json.consolidated_weather[i];
            var node = document.createElement("td");
            var textnode = document.createTextNode(`${the_temp}`);
            node.appendChild(textnode);
            let cell1 = document.getElementById("table").appendChild(node);

            // cell1.innerHTML = `Температура такая ${the_temp}, а направление ветра ${weather_state_name[i]}`;
            // cell1.innerHTML = 'foods[i]';
            // WeatherIcon.src = `https://www.metaweather.com//static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`;
        }
    })
    .catch(err => {
        alert('Упс, ошибка!');
        console.error(err);
    });
});







// homework Fetch





// $(#CityInput).val()

// $('#CityInputButton').click(function() {
//     const city = document.getElementById('CityInput').value;
//     const kostil = "https://cors-anywhere.herokuapp.com";
//     const realServer =  `https://www.metaweather.com/api/location/search/?query=${city}`;
//     fetch(`${kostil}/${realServer}`)
//     .then(response => response.json())
//     .then(json => {
//         CityId.innerHTML = json[0].woeid;
//         IdInput.value = json[0].woeid;
//     })
//     .catch(err => {
//          alert('Такого города больше не существует!');
//          console.error(err);
//     });
// });

