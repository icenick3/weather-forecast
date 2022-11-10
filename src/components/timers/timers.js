export function firstTimer(duration) {
    return new Promise((resolve) => {
        setTimeout(()=>resolve('first'), duration)
    })
}

export function secondTimer(duration) {
    return new Promise((resolve) => {
        setTimeout(()=> resolve('second'), duration)
    })
}



