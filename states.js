fetch('https://api.covid19india.org/data.json')
    .then(response => response.json())
    .then(result => {
        console.log(result)


        result.statewise.forEach(element => {
            console.log(element)
            console.log(element.state)
            console.log(element.active)
            console.log(element.confirmed)
            console.log(element.deaths)
            console.log(element.deltaconfirmed)
            console.log(element.deltadeaths)
            console.log(element.deltarecovered)
            console.log(element.recovered)


            document.getElementById('statecard').innerHTML += ` <div class="col-sm-4 asd" > 
                <div class="card st" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${element.state}</h5>
                <a style="color:red;">  active </a><span class="badge badge-secondary">${element.active} </span></br>
                <a style="color:red;"> confirmed </a><span class="badge badge-secondary">${element.confirmed} </span><br>
                <a style="color:red;">deaths </a><span class="badge badge-secondary">${element.deaths} </span><br>
    
                <a style="color:red;">delta confirmed)</a><span class="badge badge-secondary">${element.deltaconfirmed} </span></br>
                <a style="color:red;">delta deaths</a><span class="badge badge-secondary">${element.deltadeaths } </span><br>
                <a style="color:lime;">delta recovered </a><span class="badge badge-secondary">${element.deltarecovered} </span><br>
                <a style="color:lime;">  recovered </a><span class="badge badge-secondary">${element.recovered} </span>
                </div>
              </div></br></div>`

        })

    })