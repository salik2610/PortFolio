const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "projects",
    },
    {
        id: 2,
        name: "Experience",
        type: "experience",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

// const blogPosts = [
//     {
//         id: 1,
//         date: "Sep 2, 2025",
//         title:
//             "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
//         image: "/images/blog1.png",
//         link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
//     },
//     {
//         id: 2,
//         date: "Aug 28, 2025",
//         title: "The Ultimate Guide to Mastering Three.js for 3D Development",
//         image: "/images/blog2.png",
//         link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
//     },
//     {
//         id: 3,
//         date: "Aug 15, 2025",
//         title: "The Ultimate Guide to Mastering GSAP Animations",
//         image: "/images/blog3.png",
//         link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
//     },
// ];

const techStack = [
    {
        category: "Programming Languages",
        items: ["Java", "Python", "JavaScript"],
    },
    // {
    //     category: "Styling",
    //     items: ["Tailwind CSS", "Bootstrap", "CSS"],
    // },
    {
        category: "Technical Skills",
        items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Database Management", "Software Development", "Machine Learning", "Deep Learning"],
    },
    {
        category: "Frameworks & Libraries",
        items: ["React", "Node.js", "Tailwind CSS", "CNN", "Keras", "TensorFlow"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "VScode", "Antigravity"],
    },
    {
        category: "Tools & Platform",
        items: ["Git", "GitHub", "MySQL", "Claude", "MS Office", "Excel"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#000000ff",
        link: "https://github.com/salik2610",
    },
    // {
    //     id: 2,
    //     text: "Platform",
    //     icon: "/icons/atom.svg",
    //     bg: "#4bcb63",
    //     link: "https://jsmastery.com/",
    // },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#1DA1F2",
        link: "https://x.com/inam_salik",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#0A66C2",
        link: "https://www.linkedin.com/in/salikinam/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    // {
    //     id: 4,
    //     img: "/images/gal4.jpg",
    // },
    {
        id: 2,
        img: "/images/gal2.jpg",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    // {
    //     id: 4,
    //     img: "/images/gal4.jpeg",
    // },
];

export {
    navLinks,
    navIcons,
    dockApps,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: "loc-work",
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Traffic Hive",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Traffic Hive Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Traffic Hive is a smart system designed to improve Delhi’s traffic and make travel easier. Instead of normal traffic control, it uses real-time data to manage signals, parking, and routes in a better way",
                        "It helps by syncing traffic lights, showing available parking, and guiding people through less crowded routes.",
                        "Think of it like a smart controller that keeps traffic moving smoothly and reduces jams.",
                        "It is built using React and Tailwind for a simple and fast design, and Node.js for handling data efficiently. It also uses AI to study traffic and give useful insights.",
                    ],
                },
                {
                    id: 2,
                    name: "Traffic Hive",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://traffic-hive.onrender.com/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "Traffic Hive.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 right-20",
                // },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Smart Sanitation",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Smart Sanitation.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Smart Sanitation is a simple and smart solution designed to improve public toilets on highways and make them clean, safe, and always available.",
                        "Instead of poorly managed facilities, it uses technology and feedback to ensure toilets are cleaned on time and properly maintained.",
                        "Think of it like a smart system that checks cleanliness, collects user feedback, and ensures accountability for better hygiene.",
                        "The platform is built using React and Tailwind for a clean and responsive frontend, and Node.js for backend operations. It uses REST APIs for smooth communication between systems and integrates AI models for monitoring and insights.",
                    ],
                },
                {
                    id: 2,
                    name: "Smart Sanitation.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://smart-sanitation-ai.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "Smart Sanitation.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                // {
                //     id: 5,
                //     name: "Design.fig",
                //     icon: "/images/plain.png",
                //     kind: "file",
                //     fileType: "fig",
                //     href: "https://google.com",
                //     position: "top-60 left-5",
                // },
            ],
        },

        //     // ▶ Project 3
        //     {
        //         id: 7,
        //         name: "Food Delivery App",
        //         icon: "/images/folder.png",
        //         kind: "folder",
        //         position: "top-10 left-80",
        //         windowPosition: "top-[33vh] left-7",
        //         children: [
        //             {
        //                 id: 1,
        //                 name: "Food Delivery App Project.txt",
        //                 icon: "/images/txt.png",
        //                 kind: "file",
        //                 fileType: "txt",
        //                 position: "top-5 left-10",
        //                 description: [
        //                     "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
        //                     "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
        //                     "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
        //                     "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
        //                 ],
        //             },
        //             {
        //                 id: 2,
        //                 name: "food-delivery-app.com",
        //                 icon: "/images/safari.png",
        //                 kind: "file",
        //                 fileType: "url",
        //                 href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
        //                 position: "top-10 right-20",
        //             },
        //             {
        //                 id: 4,
        //                 name: "food-delivery-app.png",
        //                 icon: "/images/image.png",
        //                 kind: "file",
        //                 fileType: "img",
        //                 position: "top-52 right-80",
        //                 imageUrl: "/images/project-3.png",
        //             },
        //             {
        //                 id: 5,
        //                 name: "Design.fig",
        //                 icon: "/images/plain.png",
        //                 kind: "file",
        //                 fileType: "fig",
        //                 href: "https://google.com",
        //                 position: "top-60 right-20",
        //             },
        //         ],
        //     },
    ],
};

const ABOUT_LOCATION = {
    id: "loc-about",
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/Salik.jpeg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/salik-3.jpeg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/gal3.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/Salik.jpeg",
            description: [
                "Hey! I’m Salik 👋, a full-stack developer who enjoys building sleek, interactive web applications that actually work well.",
                "I specialize in Node.js on the backend and use React and modern web technologies to create fast, scalable, and efficient systems. I work with tools like MongoDB, MySQL, Docker, and Git to build end-to-end solutions that are reliable and production-ready",
                "I have a strong foundation in Data Structures & Algorithms, OOP, and system design, which helps me write clean, maintainable code and design intuitive user experiences.",
                "Outside of development, I’m usually refining projects late at night, exploring new tech, or working on ideas that turn into my next build.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: "loc-resume",
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: "loc-trash",
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

const EXPERIENCE_LOCATION = {
    id: "loc-experience",
    type: "experience",
    name: "Experience",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Experience 1: CSIR NISCPR
        {
            id: 20,
            name: "CSIR-NIScPR",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[10vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Roles & Responsibilities.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    subtitle: "Research & Development Intern — CSIR NISCPR",
                    description: [
                        "Developed a ConvMixer-based Indian Sign Language recognition model achieving 92.87% accuracy, through preprocessing, augmentation, feature extraction, and classification.",
                        "Researched Continuous Indian Sign Language Recognition (CISLR) by analyzing CNN, RNN, GRU and ConvMixer architectures.",
                        "Evaluated public ISL datasets and existing methodologies, identifying key challenges in sign-language recognition.",
                    ],
                },
                {
                    id: 2,
                    name: "LOR.png",
                    icon: "/images/lor.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/lor.png",
                },
                // {
                //     id: 3,
                //     name: "GitHub Repository",
                //     icon: "/icons/github.svg",
                //     kind: "file",
                //     fileType: "url",
                //     href: "https://github.com/salik2610",
                //     position: "top-10 right-20",
                // },
            ],
        },

        // ▶ Experience 2: Indraprastha Gas Limited
        // {
        //     id: 21,
        //     name: "Indraprastha Gas Limited",
        //     icon: "/images/folder.png",
        //     kind: "folder",
        //     position: "top-52 right-80",
        //     windowPosition: "top-[25vh] left-7",
        //     children: [
        //         {
        //             id: 1,
        //             name: "Roles & Responsibilities.txt",
        //             icon: "/images/txt.png",
        //             kind: "file",
        //             fileType: "txt",
        //             position: "top-5 right-10",
        //             subtitle: "Intern — Indraprastha Gas Limited (IGL)",
        //             description: [
        //                 "Worked on technical projects, process automation, and data tracking systems at Indraprastha Gas Limited (IGL).",
        //                 "Assisted in analyzing operational workflows and developing software utilities for internal reporting.",
        //             ],
        //         },
        //         {
        //             id: 2,
        //             name: "Certificate.png",
        //             icon: "/images/image.png",
        //             kind: "file",
        //             fileType: "img",
        //             position: "top-52 left-80",
        //             imageUrl: "/images/project-2.png",
        //         },
        //         {
        //             id: 3,
        //             name: "GitHub Repository",
        //             icon: "/icons/github.svg",
        //             kind: "file",
        //             fileType: "url",
        //             href: "https://github.com/salik2610",
        //             position: "top-20 left-20",
        //         },
        //     ],
        // },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    experience: EXPERIENCE_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };