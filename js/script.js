const second = document.querySelector('.s')
const minutes = document.querySelector('.m')
const hours = document.querySelector('.h')
const hoursBottom = document.querySelector('.hours')
const minutesBottom = document.querySelector('.minutes')




function clock() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    second.style = `transform: rotate(${sec}deg)`
    minutes.style = `transform: rotate(${min}deg)`
    hours.style = `transform: rotate(${hour + (min / 12)}deg)`
    setTimeout(() => {
        clock()
    }, 1000); 
}
clock()


function bottom() {
    let time = new Date()
    let minut = time.getMinutes()
    let hours = time.getHours()
    
    if (minut < 10) {
        
        minut = '0' + minut

    } else {
        minut = minut
    }
    


    if (hours < 10) {
        
        hours = '0' + hours

    } else {
        hours = hours
    }
    hoursBottom.innerText = hours
    minutesBottom.innerText = minut
    
    setTimeout(() => {
        bottom()
    }, 1000);
    
}
bottom()






