import { Mail, Search } from "lucide-react";
import windowWrapper from "#hoc/windowWrapper";
import WindowControlls from "#components/WindowControlls";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControlls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id} className="flex items-center gap-2">
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul className="grid grid-cols-3 gap-2">
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    })
                                }
                            >
                                <img
                                    src={img}
                                    alt={`Gallery image ${id}`}
                                    className="w-full h-full object-cover"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default windowWrapper(Photos, "photos");