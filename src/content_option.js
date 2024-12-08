const logotext = "Rishabh";
const meta = {
    title: "Rishabh Sharma",
    description: "Hi there! My name is Rishabh, and I’m a data scientist with a passion for deep learning and big data.",
};

const introdata = {
    title: "I'm Rishabh Sharma",
    animated: {
        first: "Data Scientist & ML Engineer",
        second: "AI/ML Ops Specialist",
        third: "Data Engineering Expert",
        fourth: "Full-Stack Developer",
    },
    description: "Hi there! I'm a versatile Data Scientist with expertise in ML/AI Operations and Data Engineering. I specialize in building end-to-end ML pipelines, developing scalable data architectures, and implementing production-ready AI solutions. With experience in both AWS and Azure cloud platforms, I bridge the gap between data science research and production deployment. My passion lies in leveraging cutting-edge technologies like TensorFlow, PyTorch, and Apache Spark to solve complex data challenges and drive business value.",
    your_img_url: "https://animesher.com/orig/1/194/1943/19438/animesher.com_anime-aesthetic-cyberpunk-aesthetic-1943837.gif",
    skills_highlight: [
        "Machine Learning & Deep Learning",
        "MLOps & Model Deployment",
        "Data Pipeline Architecture",
        "Cloud Infrastructure (AWS/Azure)",
        "Big Data Processing",
        "Full-Stack Development"
    ]
};

const metaData = {
    title: "Rishabh Sharma | Data Scientist | Machine Learning Engineer",
    description: "Rishabh Sharma is a Data Scientist specializing in Machine Learning, Deep Learning, and Big Data. With experience at Dark Matter Technologies and Digital Pass, he builds scalable AI solutions.",
    keywords: "Rishabh Sharma, Data Scientist, Machine Learning Engineer, AI Expert, Deep Learning Specialist, Philadelphia Data Scientist, AWS ML Engineer",
    author: "Rishabh Sharma",
    language: "English",
    siteUrl: "your-website-url.com",
    image: "path-to-your-profile-image",
    twitterHandle: "@rishabhx11"
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rishabh Sharma",
    "jobTitle": "Data Scientist",
    "alumniOf": "Drexel University",
    "knowsAbout": ["Machine Learning", "Deep Learning", "Data Science", "AI", "Big Data"],
    "worksFor": {
        "@type": "Organization",
        "name": "Dark Matter Technologies"
    },
    "url": "your-website-url.com",
    "sameAs": [
        "https://github.com/ris3abh",
        "https://www.linkedin.com/in/rishabh-sharma-06b4a3188/",
        "https://twitter.com/rishabhx11"
    ]
};

const introdatai = {
    title: "Rishabh Sharma - Data Scientist & ML Engineer",
    animated: {
        first: "Expert in Machine Learning",
        second: "Data Scientist with AWS expertise",
        third: "AI/ML Solutions Architect",
    },
    description: "Experienced Data Scientist Rishabh Sharma specializes in developing machine learning models and AI solutions. With expertise in TensorFlow, PyTorch, and AWS, he delivers scalable data science solutions for complex business problems.",
    your_img_url: "[your-image-url]",
};

const dataabout = {
    title: "about my self",
    aboutme: "Wassup!",
    aboutme1: "I’m a passionate Data Scientist with expertise in leveraging cutting-edge technologies to tackle complex data challenges and deliver impactful insights. My commitment to innovation extends beyond work—I'm an avid gamer, anime enthusiast, and tech gadget explorer, always staying curious and inspired.",
    aboutme2: "With a strong foundation in analytical problem-solving and a keen eye on emerging trends, I combine technical proficiency with creativity to drive meaningful outcomes. I'm excited to contribute to forward-thinking projects and thrive in a dynamic team environment.",
    aboutme3: "Let’s transform data into actionable insights and shape the future together!"
};

const achievements = [
    {
        title: "AWS Certified Data Engineer Associate",
        organization: "Amazon Web Services",
        date: "2024",
        icon: require("./assets/images/AWS-logo.png"),
        link: "https://www.credly.com/badges/7772ed70-dfd7-495a-99d4-1eb3aad0f11a/linked_in_profile"
    },
    {
        title: "Social Justice Hackathon Philadelphia Winner",
        organization: "Drexel University",
        date: "2023",
        icon: require("./assets/images/SocialJustics.png"),
        link: "https://bcert.me/bc/html/show-badge.html?b=ygfapcbs"
    },
    {
        title: "Introduction to Machine Learning",
        organization: "Duke University",
        date: "2023",
        icon: require('./assets/images/DukeUni.png'),
        link: "https://www.coursera.org/account/accomplishments/certificate/9VCAFWUEE4S2"
    },
    {
        title: "Neural Network and Deep Learning",
        organization: "DeepLearning.ai",
        date: "2020",
        icon: require('./assets/images/DeepLearningAI.png'),
        link: "https://www.coursera.org/account/accomplishments/certificate/CPK6H69Z4LWZ"
    },
    
];

const worktimeline =[
    {
        jobtitle: "Data Scientist",
        where: "Katbotz",
        date: "September - 2024 - Present",
        description1: "● Developing and implementing SAP S/4HANA data integration solutions, optimizing business processes and improving system efficiency by 25%",
        description2: "● Building automated ETL pipelines for SAP BW/4HANA data warehousing, reducing data processing time by 40% and enhancing data quality",
        description3: "● Implementing machine learning models to analyze SAP transaction data, providing predictive insights for business decision-making",
        description4: "● Creating real-time dashboards and analytics solutions using SAP Analytics Cloud, improving visibility into key business metrics",
        id: 1,
        title: "Katbotz",
        logo: require("./assets/images/katbotz.png"),
        link: "https://www.katbotz.com/"
    },
    {
        jobtitle: "Data Science Assistant",
        where: "Drexel College of Engineering",
        date: "April - 2024 to September - 2024",
        description1: "● Developed deep learning models to analyze MXene material properties and predict performance characteristics with 92% accuracy",
        description2: "● Implemented computer vision algorithms to process and analyze microscopy images of MXene samples, automating material analysis",
        description3: "● Created data pipelines to process experimental results from various characterization techniques, improving research efficiency by 30%",
        description4: "● Collaborated with research team to develop predictive models for MXene synthesis optimization, reducing experimental iterations by 40%",
        id: 2,
        title: "Drexel College of Engineering",
        logo: require("./assets/images/drexel.png"),
        link: "https://drexel.edu/engineering/"
    },
    {
        jobtitle: "AI/ML Ops Co-op",
        where: "Dark Matter Technologies",
        date: "July - 2023 to December - 2023",
        description1: "● Led AIVA's A/B testing pipeline integration into loan processes with AWS CodeBuild and CodePipeline, boosting deployment speed and efficiency by 12%.",
        description2: "● Deployed machine learning models via AWS SageMaker to mimic cognitive thinking, improving data analysis and productivity by 17%.",
        description3: "● Implemented containerization with Docker and leveraged MPP frameworks for scalable AI/ML model deployment, ensuring robust performance and efficiency across financial services.",
        description4: "● Enhanced document verification by optimizing BERT and image processing pipelines(CI/CD) with AWS, increasing process accuracy and efficiency.",
        id: 3,
        title: "Dark Matter Technologies",
        logo: require("./assets/images/dmt.png"),
        link: "https://dmatter.com/"
    },
    {
        jobtitle: "Data Scientist",
        where: "Digital Pass",
        date: "June - 2021 to June - 2022",
        description1: "● Implemented Python-based sentiment analysis on a 50TB dataset from a NoSQL database (MongoDB) containing application data, achieving a 13% improvement in customer sentiment accuracy and insights.",
        description2: "● Played a key role in the design and implementation of Azure-based data warehousing solutions, improving data analysis efficiency by 30%. Streamlined and maintained ETL processes using Python and Talend, facilitating efficient data transformation and loading.",
        description3: "● Mapped user interactions and enhancing content dissemination by leveraging graph theory to refine social media marketing approaches which led to marked improvements in audience engagement and campaign performance metrics by 18%.",
        description4: "● Developed ETL processes utilizing Azure Data Factory and Python, improving data transformation and loading efficiency. Worked extensively with Azure SQL Database for data warehousing, contributing to a 30% improvement in data analysis efficiency.",
        id: 5,
        title: "Digital Pass",
        logo: require("./assets/images/DP.png"),
        link: ""
    },
    {
        jobtitle: "Data Science Intern",
        where: "SK Enterprises",
        date: "November - 2020 to June - 2021",
        description1: "● Enhanced product demand forecasting accuracy by applying predictive modeling and machine learning solutions to inform data-driven strategies and enhance operational efficiencies by 7%.",
        description2: "● Developed a predictive system to monitor machine performance and downtime with a 94% accuracy rate, leading to a 14% increase in overall equipment effectiveness(OEE)",
        description3: "● Utilized statistical forecasting with LSTM to boost the accuracy of demand predictions for 36 products by 40%, directly contributing to more effective inventory management and customer satisfaction.", 
        description4: "● Engineered and validated advanced quantitative models to optimize inventory management, significantly reducing overstock scenarios.",
        id: 6,
        title: "SK Enterprises",
        logo: require("./assets/images/SK.png"),
        link: ""
    },
    {
        jobtitle: "SDE Intern",
        where: "Oyelazy",
        date: "August - 2020 to Oct - 2020",
        description1: "● Spearheaded the development of a React JS and Node JS-based web application, emulating the functionalities of UrbanClap, to connect service providers with consumers in real-time.", 
        description2: "● Engineered a robust backend API leveraging Node JS and MongoDB, ensuring seamless data exchange and operational integrity for user transactions and service bookings.",
        description3: "● Enhanced web application performance by 20% through strategic code optimization and the implementation of advanced caching techniques, leading to improved user experience and faster load times.",
        description4: "● Contributed to the creation of a user-friendly interface, incorporating dynamic search functionalities and real-time service status updates to facilitate easier navigation and engagement for users.",
        id: 4,
        title: "Oyelazy",
        logo: require("./assets/images/OyeLazy.png"),
        link: "https://www.linkedin.com/company/oyelazy/"
    },
    {
        jobtitle: "SDE Intern",
        where: "Resilience",
        date: "May - 2020 to August - 2020",
        description1: "● Developed a comprehensive React JS and Node JS web application for online tuition classes targeting IIT aspirants, featuring an intuitive user interface and seamless course navigation.",
        description2: "● Implemented a cutting-edge live video streaming interface utilizing WebRTC, supporting both one-to-one and one-to-many conferencing options for interactive doubt clearing sessions.",
        description3: "● Architected a scalable backend API using Node JS and MongoDB, catering to the educational platform's requirements for content delivery, user management, and live session scheduling.",
        description4: "● Pioneered the integration of interactive whiteboard functionality within live video sessions, enabling real-time collaboration and problem-solving between instructors and students.",
        id: 5,
        title: "Resilience",
        logo: require("./assets/images/Resillience.png"),
        link: "https://www.resillience.in/"
    }
];

const skills = [{
        name: "Python",
        value: 100,
    },
    {
        name: "R",
        value: 90,
    },
    {
        name: "Machine Learning",
        value: 100,
    },
    {
        name: "Deep Learning",
        value: 90,
    },
    {
        name: "Hadoop",
        value: 85,
    },
    {
        name: "Pysparks",
        value: 100,
    },
    {
        name: "Data Science",
        value: 100,
    },
    {
        name: "Data Engineering",
        value: 90,
    },
    {
        name: "Data Mining",
        value: 90,
    },
    {
        name: "Natural Language Processing",
        value: 90,
    },
    {
        name: "Data Modeling",
        value: 90,
    },
    {
        name: "Data Architecture",
        value: 90,
    },
    {   
        name: "React JS",
        value: 80,
    },
    {
        name: "Node JS",
        value: 80,
    },

];

const dataportfolio = [
    {
        img: "https://leehallwriter.com/wp-content/uploads/2021/03/gr-.jpg",
        description: "Developed a real-time data pipeline for GoodReads API data processing and analytics using ETL jobs and Redshift warehouse.",
        link: "https://github.com/ris3abh/The_GoodReads_Pipeline",
        title: "GoodReads Data Pipeline Project"
    },
    {
        img: "https://assets.intersystems.com/dims4/default/b9afc6f/2147483647/strip/true/crop/780x422+0+0/resize/780x422!/format/webp/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg",
        description: "Built an Airflow-orchestrated ETL pipeline using AWS EMR and Spark for processing delivery deadline data.",
        link: "https://github.com/ris3abh/ETL-pipeline-using-Airflow-and-AWS-EMR",
        title: "ETL Pipeline Using AWS EMR and Airflow"
    },
    {
        img: "https://www.callcentrehelper.com/images/stories/2007/05/pie-segment-760.jpg",
        description: "Developed predictive models for family size estimation based on customer attributes and purchase patterns.",
        link: "https://github.com/ris3abh/customer_segmentation",
        title: "Predicting Family Size Using Deep Learning for Enhanced Business Insights"
    },
    {
        img: "https://cdn-copjn.nitrocdn.com/MPSySGIBVHyrabywLcubwpqTtkOwocIm/assets/images/optimized/rev-23d1311/attorneybrianwhite.com/wp-content/uploads/2021/01/Car-Crash-with-police-660523594_1258x839.jpeg",
        description: "Analyzed crash data and developed ML models using XGBoost, CatBoost, and LightGBM to predict injury severity.",
        link: "https://github.com/ris3abh/Collisions_prediction",
        title: "Crash Data Analysis and Classification using XGBoost, CatBoost, and LightGBM"
    },
    {
        img: "https://www.thegreatapps.com/application/upload/Apps/2024/05/home-credit-personal-loan-app-172.png",
        description: "Implemented credit risk assessment models for Home Credit Group to expand financial inclusion for unbanked populations.",
        link: "https://github.com/ris3abh/Home-Credit-Default-Risk",
        title: "Credit Default Risk Detection"
    },
    {
        img: "https://media.npr.org/assets/img/2023/11/22/maestro_20221020_23442r_custom-ab20c21b4f3159fbc479d70bca9984b04d30ec8b.jpg?s=1100&c=85&f=webp",
        description: "Created MAESTRO.ai, an automated music production system using WaveNet, GANs, and transformer models for real-time audio processing.",
        link: "https://github.com/ris3abh/MAESTRO",
        title: "Music Analytics & Enhanced Style Transfer Research Optimizer"
    },
    {
        img: "https://imgs.search.brave.com/mp2xdVuOGfbFPTUzDfLUVVZKpyRSb3b_1Yz_cHE8VXM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA1L0J1cm5vdXRf/b3BzX29uX01hbmd1/bV9GaXJlX01jQ2Fs/bF9TbW9rZWp1bXBl/cnMuanBn",
        description: "Enhanced wildfire dataset quality and detection precision using advanced preprocessing and AI models, culminating in high-accuracy wildfire tracing and hazard monitoring.",
        link: "https://github.com/ris3abh/DL-firefighters",
        title: "Wildfire and Perimeter Detection using GeoTIF Images"
    },
    {
        img: "https://saratoga-ophthalmology.com/wp-content/uploads/2017/12/Retina-Fundus.jpg",
        description: "Deep Learning Model for Multi-labeled classification of Diseases in Fundus Images.",
        link: "https://github.com/ris3abh/rfmd",
        title: "DL - Mulitlabled Fundus Image Classification for Retinal Diseases from Scratch"
    },
    {
        img: "https://imgs.search.brave.com/DkQiaAwfRGrdzhJwFDb3HeUv3BATEaEb2ZyfCxpK7qU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3BvcnRzYm9va3Jl/dmlldy5jb20vdXBs/b2Fkcy8zZmJiMTQ2/ZC03YmYyLTQwOWIt/OWY2ZC1kNGEzM2Nk/ZmQzYjguanBn",
        description: "This project focuses on predicting the Over/Under outcome of NBA games based on the historical performance of the teams involved. It's important to note that the objective is not to surpass the accuracy of the predictions made by betting websites.",
        link: "https://github.com/ris3abh/NBA_Betting",
        title: "NBA Over/Under Betting Detection"
    },
    {
        img: "https://www.centercityphila.org/uploads/attachments/cleis8iq20uwisaqdfj9dhnrg-point-breeze-aerial-photography-wefilmphilly-1-1.635.821.4168.2605.full.jpg",
        description: "ML to predict type of sentencing. Currently this project is used by the Thomas R. Kline School of Law at Drexel University.",
        link: "https://github.com/ris3abh/Sentencing-prediction-on-docket-data",
        title: "Sentencing Prediction using Docket Data for Court Cases and Judge Verdict"
    },
    {
        img: "https://airows.com/.image/t_share/MTI5MDAxNzk4MTE0NTc5NzMw/close-encounters-of-the-third-kind-1977-005-poster-00n-1id.jpg",
        description: "Impact and Sentiment analysis of Scientific Films",
        link: "https://github.com/ris3abh/impact-sentiment-Analysis-Of-Scientific-Films",
        title: "Impact and Sentiment analysis of Scientific Films"
    },
    {
        img: "https://media.tenor.com/aVlSy7iGN8IAAAAC/groovin-music.gif",
        description: "This is a project where I am trying to train a Generative Adversarial Network. This is my current on going project.",
        link: "https://github.com/ris3abh/lyrics-generator",
        title: "Lyrics Generator"
    },
    {
        img: "https://www.cnet.com/a/img/resize/b20f2b84030420ff9152e25dabd8be35d1b574b8/hub/2014/08/01/7fee1a9f-0bce-4317-b839-7f315e3bcfd8/flappy-birds-family.png?auto=webp&width=1200",
        description: "The Flappy Birds.",
        link: "https://github.com/ris3abh/FlappyBirds",
        title: "Training AI to play Flappy Birds"
    },
    {
        img: "https://raw.githubusercontent.com/ris3abh/DSCI521Covid-19DashBoard/main/images/forecast_confirmed.png",
        description: "Covid-19 Time Series Forecasting and Death Prediction in Mexico.",
        link: "https://github.com/ris3abh/DSCI521Covid-19DashBoard",
        title: "Time Series Forecasting of Covid-19"
    },

    {
        img: "https://pbs.twimg.com/media/ERUzNkZUcAAf3It.jpg:large",
        description: "Solving Complex Mathematical Equations using Deep Learning.",
        link: "https://github.com/ris3abh/Solving_math",
        title: "Solving Mathematical Equations using Deep Learning"
    },
];

const contactConfig = {
    YOUR_EMAIL: "rishabh.sharma1103@gmail.com",
    YOUR_FONE: "+1-(445)-260-7077",
    description: "I’m currently looking for a full-time position as a data scientist. If you’re interested in working with me, then please feel free to reach out",
    YOUR_SERVICE_ID: "service_70d0zad",
    YOUR_TEMPLATE_ID: "template_tu0xodc",
    YOUR_USER_ID: "gop9oZUBzzmNNxi4Z",
};

const blogContent = [
    {
        id: 1,
        title: "DL Activation Functions",
        summary: "Deep Learning Activation Functions & their mathematical implementation.",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Deep Learning",
        thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OGFvJgMe21_5fCzUUyLwrw.png",
        platform: "Medium",
        link: "https://medium.com/nerd-for-tech/deep-learning-activation-functions-their-mathematical-implementation-b620d536d39b?source=user_profile_page---------2-------------6045468c518a---------------",
        tags: [""]
    },
    {
        id: 2,
        title: "Linear Regression(Maths and Code)",
        summary: "Traditional ML- Linear Regression(Maths and Code)",
        date: "March 10, 2024",
        readTime: "7 min read",
        category: "Machine Learning",
        thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*MN9QQtVgKR0H_t-N",
        platform: "Medium",
        link: "https://medium.com/nerd-for-tech/traditional-ml-linear-regression-maths-and-code-ec67e25ea500",
        tags: [""]
    },
    {
        id: 3,
        title: "Data Science Best Practices",
        summary: "Essential practices for effective data science projects.",
        date: "March 5, 2024",
        readTime: "6 min read",
        category: "Data Science",
        thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*O5MXhx5F5ZFY_t-U.jpg",
        platform: "Medium",
        link: "https://medium.com/nerd-for-tech/maestro-ai-ai-powered-music-production-9fbe3deb34b2",
        tags: [""]
    }
];

const socialprofils = {
    github: "https://github.com/ris3abh",
    facebook: "/",
    linkedin: "https://www.linkedin.com/in/rishabh-sharma-06b4a3188/",
    twitter: "https://twitter.com/rishabhx11",
};

export {
    meta,
    dataabout,
    dataportfolio,
    achievements,
    worktimeline,
    skills,
    introdata,
    blogContent,
    contactConfig,
    socialprofils,
    logotext,
    introdatai,
    structuredData,
    metaData
};