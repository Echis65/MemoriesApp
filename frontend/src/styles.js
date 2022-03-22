import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ( {
   
    heading: {
        color: "rgba(0,183,255,1)"
    },
    image: {
        marginLeft: "15px",
    },
    [theme.breakpoints.down("sm")]: {
        mainContainer: {
            flexDirection: "column-reverse",
        },
      
    }
} ) )