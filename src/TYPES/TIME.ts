export interface TimeFormat {
    hours: number,
    minutes: number,
    seconds: number,
}

export const calcTime = (T: TimeFormat) => {
    return (T.hours * 60 * 60 + T.minutes * 60 + T.seconds)
}
export const exportTime = (T: number) => {
    const hours = Math.floor(T / 60);
    const minutes = Math.floor(T % 60);
    const seconds = (T - (hours * 60 + minutes)) * 60
    return { hours, minutes, seconds }
}