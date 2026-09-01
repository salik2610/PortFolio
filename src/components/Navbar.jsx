import dayjs from "dayjs";

import { navLinks, navIcons, locations } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleNavClick = (type) => {
        if (type === "projects" || type === "finder") {
            setActiveLocation(locations.work);
            openWindow("finder");
        } else if (type === "experience") {
            const expFolder = locations.experience?.children?.[0] || locations.experience;
            setActiveLocation(expFolder);
            openWindow("finder");
        } else {
            openWindow(type);
        }
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Salik's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => handleNavClick(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>
                    {dayjs().format("ddd MMM D h:mm A")}
                </time>
            </div>
        </nav>
    )
}

export default Navbar;