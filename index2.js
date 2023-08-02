let p = fetch(
'https://goweather.herokuapp.com/weather/Curitiba');
p.then((value1)=>{
     
      //console.log(value1.status)
     // console.log(value1.ok)
      return value1.json()
    }).then((value2)=>{
    return  value2
})
