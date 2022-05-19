const datetime={
    convertDtToDate: (dt)=>{
        const date=new Date(dt*1000);
        const daily=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const day = daily[date.getDay()]
        const hour =date.getHours()
        const min=(date.getHours()>12) ? `${date.getMinutes()} pm` : `${date.getMinutes()} am`
        return `${day}, ${hour}:${min}`;
    }
}
export default datetime