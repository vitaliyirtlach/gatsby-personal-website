import { RouteComponentProps } from "@reach/router"
import React from "react"
import { AppLayout } from "../../components/layout/layout"
import { IconByName } from "../../shared/utils/IconByName"
import emailjs from 'emailjs-com';
import { Snackbar } from "@material-ui/core";
import ContactStyles from "../../styles/Contact.module.scss"
import { socialLinks } from "../../shared/utils/socialLinks";

interface Props extends RouteComponentProps {}


const Contact: React.FC<Props> = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const sendEmail = (e: any) => {
        e.preventDefault()
        emailjs.sendForm("service_1s4yrev", 'template_e0rmpfi', e.target, 'user_Y2R8fwABpTLSnt06IBMvX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
        e.target.reset()
        setOpen(true)
      }
    
    return <AppLayout title="Contact">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        message="Message was successfully send! "
        key="top bottom"
      />
      <h1>Contact</h1>
      <div className={ContactStyles["contacts"]}>
        <ul className="uk-list uk-list-divider">
            {socialLinks.map(contact =>  
              <li>
                  <a href={contact.href}>
                      <IconByName name={contact.icon} size={20} /> {contact.icon.toUpperCase()}
                  </a>
              </li>
            )}
        </ul>
        <form onSubmit={sendEmail}>
            <fieldset className="uk-fieldset">
                <legend className="uk-legend"><IconByName name="gmail" /> Message to me!</legend>
                <div className="uk-margin">
                    <input className="uk-input" type="text" name="user_name" placeholder="Enter your name" />
                </div>
                <div className="uk-margin">
                    <input className="uk-input" type="text" name="user_email" placeholder="Enter your email" />
                </div>
                <div className="uk-margin">
                    <textarea className="uk-textarea" rows={5} name="message" placeholder="Your message" />
                </div>
                <button className="uk-button uk-button-secondary uk-width-1-1" type="submit">Send</button>
            </fieldset>
        </form>
      </div>
   
      
  </AppLayout>
}
    
export default Contact 