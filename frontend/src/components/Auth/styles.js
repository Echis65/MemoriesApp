import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  header:{
    fontFamily: 'Dancing Script',
      },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  separator:{
   display: "flex",
   alignItems : "center",
  },
  p : {
    padding : "0.2rem"
   },
   line : {
     flex: 1,
    height :1,
     backgroundColor: "gray"
   },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
  googleButton: {
    marginBottom: theme.spacing(2),
   display:"flex",
   justifyContent:"center",
  },
}));