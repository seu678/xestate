import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));

function Title (){
    const classes = useStyles();
    return(

    <div>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            제주살아봤수꽈
        </Typography>
        {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
            어떤 집을 찾으시나요?
        </Typography> */}
        <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
            <Grid item>
            <Button variant="contained" color="primary" href="/login">
                로그인
            </Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" color="primary" href="/signup">
                회원가입
            </Button>
            </Grid>
        </Grid>
    </div>
    </div>   
    );
}

export default Title;
