export const AmPmTo24hFormat = (time:string, type: Timeframe ) => {
    const [hours, minutes="00"] = time.split(":")
    const newTimeInt = (parseInt(hours)%12);
    let newTime = "";
    if(type === Timeframe.AM){
        newTime = newTimeInt.toString();
    }else{
        newTime = (newTimeInt+12).toString();
    }
    if(newTime.length === 1){
        newTime = "0"+newTime;
    }
    return newTime+":"+minutes;
}
export enum Timeframe {
    "AM","PM"
}
export const getDay = () => {
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const date = new Date();
    return days[date.getDay()];
}

const getTime = (date:Date) => {
    var hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesString = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutesString + ' ' + ampm;
    return strTime;
}
const getDate = (date:Date) => {
    const currentDate = Date.now();
    const diffTime = currentDate -  date.getTime();
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    if(days>365){
        return (days/365)+` year${days/365 > 1 ? "s":""} ago - `
    }else if(days>30){
        return (days/365)+` month${days/30 > 1 ? "s":""} ago - `
    }else if(days===0){
        return`Today  - `
    }else{
        return (days)+` day${days> 1 ? "s":""} ago - `
    }
}
export const dateToAMPM = (date:Date) => {
    return getDate(date)+ getTime(date);
}