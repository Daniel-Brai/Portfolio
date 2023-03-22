import type { StatusObjects } from '../types'

const $getCurrentStatus = (statuses: StatusObjects) => {
    let date = new Date()
    let currentHour = date.getHours()
    let currentMinute = date.getMinutes()
    
    for (const element of statuses){
        const status = element
        const startTime = status.start_time.split(":")
        const endTime = status.end_time.split(":")
        const startHour = parseInt(startTime[0], 10)
        const startMinute = parseInt(startTime[1], 10)
        const endHour = parseInt(endTime[0], 10)
        const endMinute = parseInt(endTime[1], 10)

        if (
            (currentHour > startHour || (currentHour === startHour  && currentMinute >= startMinute))
            && (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute))
        ) {
            return status
        }
        return null
    }
};

export default $getCurrentStatus