import { WindowControlls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/windowWrapper";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControlls target="contact" />
                <h2>Contact</h2>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/Salik.jpeg" alt="Salik" className="h-22 w-28 rounded-full scale-120" />
                <h3>Let's Connect</h3>
                <p>I'm always open to new opportunities and collaborations.</p>
                <p>Contact: salikinam@gmail.com</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;