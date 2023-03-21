function getHoursAndMinutes(): number {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let time = `${hours}` + `${minutes}`
    return Number(time)
}

export default getHoursAndMinutes