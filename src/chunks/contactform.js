import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import axios from "axios";
import SendIcon from '@material-ui/icons/Send';
import ReCAPTCHA from "react-google-recaptcha";


const useStyles = makeStyles((theme) => ({
  form:{
      display:"block",
      margin: "20px auto",
      maxWidth: "100%",
      padding: "20px",
      marginLeft: "300px"
  },
  input:{
    display: "block",
    marginTop: "30px",
  },
  textfield:{
      display: "block",
      marginTop: "30px",
  },
  button:{
      display: "block",
      margin: "20px auto",
      padding: "10px 15px",
      paddingTop: "4.5px",
      textAlign: "center",
      marginTop: "50px"
  },
  email:{
      marginLeft: "20px",
      width: "50%"
  },
  equal:{
      display:"flex",
      justifyContent:"space-between",
      alignItems: "center"
  },
  name:{
      width: "50%"
  },
  placesend:{
      top: "50%",
      left: "50%",
      transform: "translate(30%,25%)"
  }
}));


export default function Contactform() {

    const recaptchaRef = React.createRef();

    function sbmit(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        if(name!==""&&email!==""&&subject!==""&&message!==""){

            axios.post('/auth/mail', {
                'name': name,
                'email': email,
                'subject': subject,
                'message': message,
                "g-recaptcha-response":recaptchaRef.current.getValue()
            })
            .then(res => {
                alert(res["data"]["result"])
            })
            .catch(err =>{
                alert(err)
            })
        }
        else{
            alert("Plz Fillout All the Fields.")
        }
    }
    const classes = useStyles();
    return (
        <form className={clsx(classes.form,"conform")}>
            <div className={clsx(classes.equal,"dbfromflex")}>
            <TextField className={clsx(classes.name,"cformname")} type="text" id="name" label="Name" variant="outlined" required/>
            <TextField className={clsx(classes.email,"cformemail")} type="email" id="email" label="Email" variant="outlined" required/>
            </div>
            <TextField fullWidth className={classes.input} type="text" id="subject" label="Subject" variant="outlined" required/>
            <TextField fullWidth className={classes.textfield} type="text" id="message" label="Message" variant="outlined"  rows={4} multiline required/>
            <div className="recaptchacont">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LcDKRocAAAAAL2Xa15RUeeKhNEH36pJ3unnZpzP"
            />
            </div>
            <Button className={classes.button} onClick={()=>{sbmit()}} variant="contained" color="primary">Send <SendIcon className={classes.placesend}/></Button>
            
        </form>
    )
}
