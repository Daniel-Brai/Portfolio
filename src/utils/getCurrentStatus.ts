import getHoursAndMinutes from './getCurrentTime'
import type { StatusObjects } from '../types'

const $getCurrentStatus = (statuses: StatusObjects) => {
    let time = getHoursAndMinutes()    
    const status = statuses.filter((s) => (s.start_time <= time && time <= s.end_time));
    return status;
};

export default $getCurrentStatus