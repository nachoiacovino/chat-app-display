const formatTime = epoch => {
    const date = new Date(parseInt(`${epoch}000`))
    const leadingZero = num => `0${num}`.slice(-2)
    return `${leadingZero(date.getHours())}:${leadingZero(date.getMinutes())}`
} 

export default formatTime