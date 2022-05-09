import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  header:{
textDecoration: "none",
color : "black",
fontFamily: 'Dancing Script',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  /* signin: {
  
    
  }, */
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    /* display: 'flex',
    justifyContent: 'flex-end',
    width: '400px', */
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: "10px"
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
   marginRight: "10px"
  },
}));
