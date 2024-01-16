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
    hoursBottom.innerText = time.getHours() < 10 ?  '0' + time.getHours() : time.getHours()
    minutesBottom.innerText = time.getMinutes() < 10 ?  '0' + time.getMinutes() :  time.getMinutes()

    setTimeout(() => {
        clock()
    }, 1000); 
}
clock()


// second.animate(
//     [
//         {transform:`rotate(${sec}deg)`},
//         {transform:`rotate(${sec + 6}deg)`},
//     ],
//     {
//         fill:'forwards',
//         duration:1000,
//         easing:'linear'
//     }
// )




const tabsItem = document.querySelectorAll('.tabsItem')

for (let i = 0; i < tabsItem.length; i++) {
    
    tabsItem[i].addEventListener('click', function() {
for (let x = 0; x < tabsItem.length; x++) {
    
    tabsItem[x].classList.remove('active')
    tabsContent[x].classList.remove('active')
    
}
        tabsItem[i].classList.add('active')
        tabsContent[i].classList.add('active')
    })

}

const tabsContent = document.querySelectorAll('.tabsContentItem')
const secund = document.querySelector('.stopwatch__seconds')
const minut = document.querySelector('.stopwatch__minutes')

const btn = document.querySelector('.stopwatch__btn')

btn.addEventListener('click', function () {
    
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        let i = 0 
        setTimeout(() => stopWatch(this, i), 1000)
    }else if(btn.innerHTML == 'stop' ){
        btn.innerHTML = 'clear'
    }else if (btn.innerHTML == 'clear'){
        btn.innerHTML = 'start'
    }
    
    
    
})


function stopWatch(btn, i, x) {
    
    if (btn.innerHTML == 'stop') {
        if (i == 59) {
            x = minut.innerHTML
            x++
            minut.innerHTML = x
            secund.innerHTML = i
            i = 0

        } else {
            i++
            secund.innerHTML = i
        }
        
    }
    setTimeout(() => {
        stopWatch(btn, i, x)
    }, 1000);

    if (btn.innerHTML == 'start'){

    minut.innerHTML = 0
    secund.innerHTML = 0
    

    }
}



