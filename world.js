fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(result => {
        // console.log(result.Countries)
        result.Countries.forEach(element => {
            console.log(element)
            console.log(element.Country)
            console.log(element.Date)
            console.log(element.NewConfirmed)
            console.log(element.NewDeaths)
            console.log(element.NewRecovered)
            console.log(element.TotalConfirmed)
            console.log(element.TotalDeaths)
            console.log(element.TotalRecovered)
            document.getElementById('statecard').innerHTML += ` <div class="col-sm-4 asd" > 
                <div class="card st" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.Country}</h5>
                <a style="color:red;">New Confirm </a><span class="badge badge-secondary">${element.NewConfirmed} </span></br>
                <a style="color:red;">New Death </a><span class="badge badge-secondary">${element.NewDeaths } </span><br>
                <a style="color:lime;">New Recovered </a><span class="badge badge-secondary">${element.NewRecovered} </span></br>
                <a style="color:red;">Total Confirm </a><span class="badge badge-secondary">${element.TotalConfirmed} </span></br>
                <a style="color:red;">Total Death </a><span class="badge badge-secondary">${element.TotalDeaths } </span><br>
                <a style="color:lime;">Total Recovered </a><span class="badge badge-secondary">${element.TotalRecovered} </span>
                </div>
              </div></br></div>`
        })

    })