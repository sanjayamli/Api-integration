let p = fetch(
'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=8LZk8hSNsVm0xKjpdwaBEkNg2zYRpbiC');
p.then((value1)=>{
     
      console.log(value1.status)
      console.log(value1.ok)
      return value1.json()
    }).then((value2)=>{
    console.log( value2)
})