// ==================== CONFIGURATION FILE ====================
// Tùy chỉnh toàn bộ thông tin cá nhân của bạn tại đây

const CONFIG = {
    // ==================== THÔNG TIN CÁ NHÂN ====================
    personal: {
        name: "Bá Trí",
        firstName: "Tên",
        lastName: "Họ",
        dateOfBirth: "DD/MM/YYYY",
        location: "Thành phố, Việt Nam",
        email: "your.email@example.com",
        phone: "+84 xxx xxx xxx",
        avatar: "https://via.placeholder.com/300", // Link ảnh avatar
        aboutImage: "https://via.placeholder.com/400", // Link ảnh trong about section
        description: "Mô tả ngắn gọn về bản thân bạn, đam mê, và những gì bạn đang làm...",
        cvFile: "assets/cv/your-cv.pdf" // Đường dẫn file CV
    },

    // ==================== ROLES/TITLES ====================
    roles: [
        "Web Developer",
        "UI/UX Designer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer"
    ],

    // ==================== SOCIAL MEDIA ====================
    social: {
        github: "https://github.com/your-username",
        linkedin: "https://linkedin.com/in/your-username",
        twitter: "https://twitter.com/your-username",
        facebook: "https://facebook.com/your-username",
        instagram: "https://instagram.com/your-username",
        youtube: "https://youtube.com/@your-channel",
        dribbble: "https://dribbble.com/your-username",
        behance: "https://behance.net/your-username"
    },

    // ==================== ABOUT ====================
    about: {
        title: "Chào mừng đến với portfolio của tôi!",
        paragraphs: [
            "Điền thông tin chi tiết về bản thân bạn tại đây. Hãy kể về hành trình, đam mê, và những gì bạn đang làm hiện tại. Ví dụ: 'Tôi là một developer đam mê công nghệ...'",
            "Thêm thông tin về sở thích, mục tiêu nghề nghiệp, hoặc bất cứ điều gì bạn muốn chia sẻ với người xem portfolio của bạn."
        ]
    },

    // ==================== SKILLS ====================
    skills: {
        frontend: [
            { name: "HTML/CSS", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "React/Vue", level: 80 },
            { name: "TypeScript", level: 75 },
            { name: "Tailwind CSS", level: 85 }
        ],
        backend: [
            { name: "Node.js", level: 75 },
            { name: "Python", level: 70 },
            { name: "Database (SQL/NoSQL)", level: 80 },
            { name: "REST API", level: 85 },
            { name: "GraphQL", level: 70 }
        ],
        other: [
            { name: "UI/UX Design", level: 75 },
            { name: "Git/Version Control", level: 85 },
            { name: "Docker", level: 70 },
            { name: "AWS/Cloud", level: 65 }
        ]
    },

    // ==================== TECH STACK ====================
    techStack: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Docker", icon: "fab fa-docker" }
    ],

    // ==================== PROJECTS ====================
    projects: [
        {
            id: 1,
            title: "Tên Dự Án 1",
            description: "Mô tả ngắn gọn về dự án này, công nghệ sử dụng và những gì bạn đã làm...",
            image: "https://via.placeholder.com/600x400",
            category: "web",
            tags: ["React", "Node.js", "MongoDB"],
            demoLink: "https://demo-link.com",
            githubLink: "https://github.com/your-username/project-1",
            featured: true
        },
        {
            id: 2,
            title: "Tên Dự Án 2",
            description: "Mô tả ngắn gọn về dự án này...",
            image: "https://via.placeholder.com/600x400",
            category: "mobile",
            tags: ["React Native", "Firebase"],
            demoLink: "https://demo-link.com",
            githubLink: "https://github.com/your-username/project-2",
            featured: false
        },
        {
            id: 3,
            title: "Tên Dự Án 3",
            description: "Mô tả ngắn gọn về dự án này...",
            image: "https://via.placeholder.com/600x400",
            category: "web",
            tags: ["Vue.js", "Express", "PostgreSQL"],
            demoLink: "https://demo-link.com",
            githubLink: "https://github.com/your-username/project-3",
            featured: true
        },
        // Thêm các dự án khác...
    ],

    // ==================== EXPERIENCE ====================
    experience: [
        {
            id: 1,
            type: "work", // work hoặc education
            title: "Senior Web Developer",
            company: "Tên công ty",
            location: "Thành phố, Việt Nam",
            startDate: "01/2023",
            endDate: "Hiện tại",
            description: "Mô tả công việc, trách nhiệm và thành tựu của bạn tại vị trí này...",
            highlights: [
                "Thành tựu 1: Tăng performance website lên 50%",
                "Thành tựu 2: Lead team 5 developers",
                "Thành tựu 3: Xây dựng hệ thống mới từ đầu"
            ]
        },
        {
            id: 2,
            type: "work",
            title: "Web Developer",
            company: "Tên công ty cũ",
            location: "Thành phố, Việt Nam",
            startDate: "01/2021",
            endDate: "12/2022",
            description: "Mô tả công việc...",
            highlights: [
                "Thành tựu 1",
                "Thành tựu 2"
            ]
        },
        {
            id: 3,
            type: "education",
            title: "Cử nhân Công nghệ Thông tin",
            company: "Đại học XYZ",
            location: "Thành phố, Việt Nam",
            startDate: "2018",
            endDate: "2022",
            description: "Tốt nghiệp loại Giỏi, GPA: 3.8/4.0",
            highlights: []
        }
    ],

    // ==================== ACHIEVEMENTS ====================
    achievements: [
        {
            id: 1,
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2023",
            image: "https://via.placeholder.com/200",
            credentialLink: "https://credential-link.com"
        },
        {
            id: 2,
            title: "Google Analytics Certified",
            issuer: "Google",
            date: "2023",
            image: "https://via.placeholder.com/200",
            credentialLink: "https://credential-link.com"
        },
        {
            id: 3,
            title: "Hackathon Winner",
            issuer: "Tech Event 2023",
            date: "2023",
            image: "https://via.placeholder.com/200",
            credentialLink: ""
        }
    ],

    // ==================== SERVICES ====================
    services: [
        {
            id: 1,
            icon: "fas fa-laptop-code",
            title: "Web Development",
            description: "Xây dựng website hiện đại, responsive và tối ưu SEO sử dụng các công nghệ mới nhất.",
            features: [
                "Responsive Design",
                "SEO Optimization",
                "Fast Loading Speed",
                "Cross-browser Compatible"
            ]
        },
        {
            id: 2,
            icon: "fas fa-mobile-alt",
            title: "Mobile App Development",
            description: "Phát triển ứng dụng mobile đa nền tảng với React Native hoặc Flutter.",
            features: [
                "iOS & Android",
                "Native Performance",
                "Beautiful UI/UX",
                "API Integration"
            ]
        },
        {
            id: 3,
            icon: "fas fa-palette",
            title: "UI/UX Design",
            description: "Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tối ưu.",
            features: [
                "User Research",
                "Wireframing",
                "Prototyping",
                "Visual Design"
            ]
        },
        {
            id: 4,
            icon: "fas fa-server",
            title: "Backend Development",
            description: "Xây dựng API và hệ thống backend mạnh mẽ, bảo mật và scalable.",
            features: [
                "RESTful API",
                "Database Design",
                "Authentication",
                "Cloud Deployment"
            ]
        }
    ],

    // ==================== TESTIMONIALS ====================
    testimonials: [
        {
            id: 1,
            name: "Nguyễn Văn A",
            position: "CEO tại Công ty ABC",
            avatar: "https://via.placeholder.com/100",
            rating: 5,
            text: "Làm việc với [Tên bạn] là một trải nghiệm tuyệt vời. Dự án được hoàn thành đúng deadline với chất lượng vượt mong đợi.",
            date: "2023"
        },
        {
            id: 2,
            name: "Trần Thị B",
            position: "Project Manager tại XYZ Corp",
            avatar: "https://via.placeholder.com/100",
            rating: 5,
            text: "Kỹ năng chuyên môn tốt, nhiệt tình và luôn sẵn sàng hỗ trợ. Tôi chắc chắn sẽ hợp tác lại trong tương lai.",
            date: "2023"
        },
        {
            id: 3,
            name: "Lê Văn C",
            position: "Founder tại Startup DEF",
            avatar: "https://via.placeholder.com/100",
            rating: 5,
            text: "Đã giúp chúng tôi xây dựng MVP trong thời gian ngắn. Rất chuyên nghiệp và sáng tạo trong cách tiếp cận.",
            date: "2023"
        }
    ],

    // ==================== BLOG POSTS ====================
    blogPosts: [
        {
            id: 1,
            title: "10 Tips để viết Clean Code trong JavaScript",
            excerpt: "Khám phá các best practices để viết code JavaScript sạch, dễ đọc và dễ maintain...",
            image: "https://via.placeholder.com/400x250",
            category: "JavaScript",
            date: "2024-01-15",
            readTime: "5 phút đọc",
            link: "https://your-blog.com/post-1"
        },
        {
            id: 2,
            title: "React Hooks: Từ cơ bản đến nâng cao",
            excerpt: "Hướng dẫn chi tiết về React Hooks với các ví dụ thực tế và use cases phổ biến...",
            image: "https://via.placeholder.com/400x250",
            category: "React",
            date: "2024-01-10",
            readTime: "8 phút đọc",
            link: "https://your-blog.com/post-2"
        },
        {
            id: 3,
            title: "CSS Grid vs Flexbox: Khi nào nên dùng gì?",
            excerpt: "So sánh chi tiết giữa CSS Grid và Flexbox, giúp bạn chọn đúng công cụ cho từng tình huống...",
            image: "https://via.placeholder.com/400x250",
            category: "CSS",
            date: "2024-01-05",
            readTime: "6 phút đọc",
            link: "https://your-blog.com/post-3"
        }
    ],

    // ==================== THEME SETTINGS ====================
    theme: {
        defaultMode: "dark", // dark hoặc light
        colors: {
            primary: "#6366f1",
            secondary: "#8b5cf6",
            accent: "#ec4899"
        }
    },

    // ==================== ANIMATION SETTINGS ====================
    animations: {
        enableParticles: true,
        enableCursorFollower: true,
        enableScrollAnimations: true,
        particleCount: 80
    },

    // ==================== SEO ====================
    seo: {
        title: "Portfolio - Your Name",
        description: "Portfolio website của [Tên bạn] - Web Developer & Designer",
        keywords: "web developer, portfolio, javascript, react, nodejs",
        author: "Your Name",
        ogImage: "https://your-site.com/og-image.jpg"
    }
};

// ==================== EXPORT CONFIG ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}