setInterval(()=>{
    const date = new Date()
    const [dd, MM, DD, YYYY] = date.toDateString().split(" ")
    const hms = date.toTimeString().split(' ')[0];
    document.getElementById('date').innerHTML = `${dd} ${MM} ${DD} ${hms}`
}, 50);