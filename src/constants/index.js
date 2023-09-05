import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    memegen,
    gamestoremenu,
    gamestore,
    minesweeper,
    myverr,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    vue,
    sass,
    express,
    docker,
    caLogo,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

const services = [
    {
        title: "Front-End Developer",
        icon: web,
    },
    {
        title: "Full-Stack Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: backend,
    },
    {
        title: "Web Enthusiast",
        icon: creator,
    },
]

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Sass",
        icon: sass,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
]

const experiences = [
    {
        title: "Web Developement",
        company_name: "Coding Academy-MisterBit",
        icon: caLogo,
        iconBg: "#fff",
        date: "May 2023 - Aug 2023",
        points: [
            "Graduate of the Coding Academy's intensive coding bootcamp (640 hours).",
            "Qualified as a Full Stack Developer, proficient in both frontend and backend development.",
            "Developed and deployed web applications, showcasing hands-on coding skills.",
            "Collaborated on group projects, honing teamwork and problem-solving abilities.",
            "Practiced agile methodologies, version control, and coding best practices.",
        ],
    }
]

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
]

const projects = [
    {
        name: "Myverr",
        description:
            "Presenting a Fiverr-inspired web platform, redefining the landscape of professional freelancing. This sophisticated solution facilitates seamless discovery, collaboration, and management of a diverse spectrum of adept freelancers.",
        tags: [
            {
                name: "VUE",
                color: "green-text-gradient",
            },
            {
                name: "mongoDB",
                color: "white-text-gradient",
            },
            {
                name: "nodeJS",
                color: "orange-text-gradient",
            },
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            }
        ],
        image: myverr,
        source_code_link: "https://github.com/GaashShmilovich/Myverr-frontend",
        demo_link: "https://myverr.onrender.com/#/"
    },
    {
        name: "Meme Generator",
        description:
            "Designed and implemented a dynamic meme generator web application using advanced JavaScript ES6 features and HTML5 Canvas. This interactive tool enables users to effortlessly create and customize memes, showcasing my proficiency in modern web development techniques and interactivity through code.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "HTML5",
                color: "green-text-gradient",
            },
            {
                name: "Canvas",
                color: "pink-text-gradient",
            },
        ],
        image: memegen,
        source_code_link: "https://github.com/GaashShmilovich/Meme-Generator",
        demo_link: "https://gaashshmilovich.github.io/Meme-Generator/"
    },
    {
        name: "Gamers Store",
        description:
            "Crafted a dynamic Console Games Store mobile app using React and enhanced styling with Sass. This project demonstrates my expertise in front-end development, delivering an engaging user interface and seamless shopping experience.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "API",
                color: "green-text-gradient",
            },
            {
                name: "Saas",
                color: "pink-text-gradient",
            },
        ],
        image: gamestore,
        secondImage: gamestoremenu,
        source_code_link: "https://github.com/GaashShmilovich/gamersstore",
        demo_link: "https://gaashshmilovich.github.io/gamersstore/"
    },
    {
        name: "Mine Sweeper",
        description:
            "Created a Minesweeper game using vanilla JavaScript, featuring dynamic grid generation and efficient mine detection. Demonstrated strong front-end development and problem-solving skills.",
        tags: [
            {
                name: "JavaScript",
                color: "white-text-gradient",
            },
            {
                name: "HTML5",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: minesweeper,
        source_code_link: "https://github.com/GaashShmilovich/mineSweeper",
        demo_link: "https://gaashshmilovich.github.io/mineSweeper/"
    },

]

export { services, technologies, experiences, testimonials, projects }