var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload = function (){
    var countrydata = JSON.parse(this.response);
    
    //1.
    // var contry = countrydata.filter( (ele)=>{ return ele.region == "Asia";})
    // console.log(contry);   
    
    //2. 
    // var CountryPop = countrydata.filter( (ele) => {return ele.population < 200000 ;})
    // console.log(CountryPop);

    //3.
    // countrydata.forEach(element => {
    //     console.log("1. Name   : " + element.name );
    //     console.log("2. Capital: " + element.capital );
    //     console.log("3. flag:   " +element.flag ); 
    //     console.log("-------------------------------------------")
    // });

    //4.

    // var sum = countrydata.reduce( (acc,current)=>{
    //     return acc + current.population;
    // } ,0)
    // console.log(sum);

    //5.

    // var count = 0;
    // for(i in countrydata)
    // {
    //     if((countrydata[i].currencies[0].code) == "USD")
    //     {
    //         console.log(countrydata[i].name);
    //         count++;
    //     }
    // }
    // console.log(count);
}



