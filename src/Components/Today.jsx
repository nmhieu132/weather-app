import {Grid, Paper} from '@mui/material'
import {Box} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { useSelector } from 'react-redux'
import Sunny from '../img/Sunny.png'
import {grey} from '@mui/material/colors'
import { fontWeight } from '@mui/system'
import {BsSun, BsThermometerHalf} from 'react-icons/bs'
import {BiWind} from 'react-icons/bi'
import {WiHumidity} from 'react-icons/wi'
import {MdVisibility} from 'react-icons/md'


const useStyles = makeStyles({
    descript:{
        color: '#9e9e9e',
        fontSize:'1.25rem',
        fontWeight:'semibold'
    },
    block:{
        padding: '15px',
    },
    illus_img: {
        fontSize: "60px",
        margin: "15px auto",
        display: 'block'
    },
    num: {
        color: '#757575',
        fontSize: '1.75rem',
        fontWeight: 'bold',
        margin:'0 auto',
        width:'fit-content'
    }
})
function Today() {
    const classes=  useStyles();
    const weather =useSelector(state => state.weather.weather);
    return ( 
        <>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
                <Paper className={classes.block}>
                    <div className={classes.descript}>UV index</div>
                    <BsSun className={classes.illus_img} color="#ffc107"/>
                    <div className={classes.num}>{weather?.current?.uvi}</div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.block}>
                    <div className={classes.descript}>Wind Status</div>
                    <BiWind className={classes.illus_img} color="#0d6efdc4"/>
                    <div className={classes.num}>{weather?.current?.wind_speed} km/h</div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.block}>
                    <div className={classes.descript}>UV index</div>
                    <BsSun className={classes.illus_img} color="#ffc107"/>
                    <div className={classes.num}>{weather?.current?.uvi}</div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.block}>
                    <div className={classes.descript}>Humidity</div>
                    <WiHumidity className={classes.illus_img} color="#0d6efdc4"/>
                    <div className={classes.num}>{weather?.current?.humidity}%</div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.block}>
                    <div className={classes.descript}>Visibility</div>
                    <MdVisibility className={classes.illus_img} color="#ffc107"/>
                    <div className={classes.num}> {`${weather?.current?.visibility / 1000}`} km</div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.block}>
                    <div className={classes.descript}>Pressure</div>
                    <BsThermometerHalf className={classes.illus_img} color="#0d6efdc4"/>
                    <div className={classes.num}> {weather?.current?.pressure} hPa</div>
                </Paper>
            </Grid>

            
        </Grid>
        </Box>
        </>
     );
}

export default Today;