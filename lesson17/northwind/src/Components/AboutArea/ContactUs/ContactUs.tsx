import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import { Clear, ContactMail, Send } from "@material-ui/icons";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">
			<Typography variant="h3" className="Headline">Contact us</Typography>
            <ContactMail/>
            <form>
                <TextField label="Name" variant="outlined"/>
                <TextField label="Email" variant="outlined" type="email"/>
                <TextField label="Message" variant="outlined" className="TextBox"/>
                <FormControlLabel label="I'm satisfied" control={<Checkbox/>}></FormControlLabel>
                <FormControlLabel label="Please spam me with Emails" control={<Checkbox/>}></FormControlLabel>
                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" type="submit" startIcon={<Send/>}>Send</Button>
                    <Button color="secondary" type="reset" startIcon={<Clear/>}>Clear</Button>
                </ButtonGroup>

            </form>
        </div>
    );
}

export default ContactUs;
