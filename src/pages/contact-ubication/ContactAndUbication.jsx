import { Contact } from "./Contact";
import { ContactForm } from "./ContactForm";
import { Ubication } from "./Ubication";
import "./style.css";

export const ContactAndUbication = () => {
  return (
    <div className="pages">
      <div className="contactContainer">
        <div className="contactAndUbication">
          <Contact />
          <Ubication />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
