import {TextField} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { fontSize } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import datetime from '../helper/datetime'
import { getWeatherAsync } from '../Redux/weatherReducer';

const useStyles = makeStyles({
    inputField: {
        marginTop: "30px",
        '& input':{
            height: "0.5em",
        }
    },
    pict:{
        width: '60%',
    },
    pict2:{
        width:'100%',
        borderRadius:'7px',
        marginTop: '13px'
    },
    location:{
        fontWeight:'bold',
    },
    city:{
        fontSize: '2rem',
    },
    degree:{
        fontSize : '2.5rem',
    },
    weather: {
        color: '#6c757d',
        textTransform: 'capitalize',
        lineHeight:'1.5',
        listStyleType: 'none',
        paddingTop:'10px'
    },
    img_bot:{
        position: 'relative',
        width: '90%'
    },
    img_caption:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        color: '#fff',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    }

})
function Sidebar(){
    const dispatch = useDispatch();
    const classes=  useStyles();
    const weather = useSelector((state)=>state.weather.weather)
    const time=datetime.convertDtToDate(weather?.current?.dt)
    return(
        <>
            <TextField
                className={classes.inputField}
                placeholder="Search"  
                onKeyDown={(e)=>{
                    if(e.code==='NumpadEnter'||e.code==='Enter'){
                        dispatch(getWeatherAsync(e.target.value))
                        e.target.value=''
                    }
                }}
            >
            </TextField>
            <img className={classes.pict} src={`http://openweathermap.org/img/wn/${weather?.current?.weather?.[0].icon}@2x.png`} alt='weather'/>
            <div className={classes.location}>
                <div className={classes.city}>{weather?.cityName}</div>
                <div className={classes.degree}>{weather?.current?.temp}°C</div>
                <div className={classes.day}>{time}</div>
            </div>
            <ul className={classes.weather}>
                <li>{weather?.current?.weather[0].description}</li>
                <li>Clouds {weather?.current?.clouds}%</li>
            </ul>
            <div className={classes.img_bot}>
                <img className={classes.pict2} src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6" alt="img2" />
                <p className={classes.img_caption}>{weather?.cityName}</p>
            </div>
        </>
    )
}
export default Sidebar;