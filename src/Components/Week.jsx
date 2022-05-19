import {Grid, Paper} from '@mui/material'
function Week() {
    return ( 
        <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <Paper>1</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>2</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>4</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>4</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>4</Paper>
            </Grid>
        </Grid>
        </>
     );
}

export default Week;