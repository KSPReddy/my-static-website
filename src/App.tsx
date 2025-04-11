import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './components/Timeline';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { Code2, Database, Cloud, Terminal, Cog, Workflow, Brain, Server, Github, Linkedin } from 'lucide-react';

function App() {
  const education = [
    {
      year: "August 2015 - July 2020",
      title: "Integrated Masters in Electronics and Communication Engineering",
      subtitle: "IIIT- Bangalore"
    },
    {
      year: "January 2022 - May 2023",
      title: "Master of Science in Data Analytics",
      subtitle: "George Mason University",
    }
  ];

  const experience = [
    {
      title: "Data Engineer",
      subtitle: "Walmart Labs",
      year: "Aug 2023 - Nov 2024",
      description: "Involved in designing and maintaining scalable data pipelines and cloud-based architectures using GCP, Spark, and Kafka. Hands-on experience in orchestrating and monitoring ETL Pipelines, optimizing complex SQL across BigQuery and Snowflake, and integrating AI/ML pipelines with Vertex AI. I've also designed dashboards in Tableau and Power BI that make management see the future—or at least the next quarter—while proving that numbers can be fun."
    },
    {
      title: "Data Engineer",
      subtitle: "eGovernments Foundation",
      year: "Sept 2019 - Dec 2021",
      description: "Utilized PySpark, Hadoop, and Spark for transforming raw data into analytics-ready formats. Implemented data governance frameworks with Informatica and developed ETL workflows using Airflow and Azure Data Factory. I also improved job performance on Kubernetes clusters and enabled real-time streaming with Kafka and Hive."
    },
    {
      title: "Data Engineer Intern",
      subtitle: "Accenture Labs",
      year: "Sept 2018 - Aug 2019",
      description: "During my time as an Intern at Accenture Labs, I was involved in building real-time streaming data pipelines using Spark Streaming, Kafka, and Azure Stream Analytics. I developed and maintained data integration workflows across Hadoop, RDBMS, and NoSQL systems. I also automated ingestion with Azure Data Factory and Informatica, and leveraged Alteryx for cross-platform data analytics."
    }
  ];

  const projects = [
    {
      title: "Risk predictions for Complications during Preganancy ",
      subtitle: "CapStone Project",
      description: "The main objective of this project is to develop a machine learning model that can accurately classify new pregnancies based on the level of risk they pose (Low, Medium, or High).Additionally, the model should be able to identify potential complications that may arise during the early stages of pregnancy, using past patient records. This would enable healthcare providers to take proactive measures to prevent or mitigate such complications during the early stages of pregnancy.Overall, the project aims to leverage machine learning to improve pregnancy outcomes and maternal health.",
      image: "https://assets.radcliffecardiology.com/s3fs-public/article/2021-09/figure1-impact-of-adverse-pregnancy-outcomes.png",
      technologies: ["Python", "NLP", "Synthetic Data GAN", "Random Forest", "SVM", "Decision Tree", "Naive Bayes", "WordCloud", ],
      links: {
        github: "https://github.com/TeamBlitz-Daen/Blitz",
        dataset: "https://github.com/TeamBlitz-Daen/Blitz/blob/main/final_dataset.csv"
      }
    },
    {
      title: "E-Commerce prototype (FlipKart)",
      subtitle: "Web Application",
      description: "With the principles of Design pattern and Object oriented programming, the main idea of this project is to design a proto-type for an e-commerce website. From selecting an item and adding items to the cart and then processing the payments is the end to end workflow for this prototype.The frontend is typically developed with React.js  while the backend uses Java and used Spring framework to handle API routes.Products are fetched from MySQL Database and displayed on the homepage. When a user selects a product, they can view details and add items to a global cart managed via React Context or Redux. Once payment succeeds, the backend stores the order data and redirects the user to a confirmation page. Authentication can be added using JWT,",
      image: "https://media.assettype.com/fortuneindia%2F2018-05%2F4193eb34-ea12-4373-8d6f-aea6bb9daa50%2FFlipkart.jpg?auto=format&q=35&w=1200",
      technologies: ["Java", "MySQL", "SpringBoot", "REST-API", "React"],
      links: {
        github: "https://github.com/pranith563/ecommerce",
      }
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code2 size={24} />,
      skills: ["Python", "Java", "SQL", "R", "Scala"]
    },
    {
      category: "Cloud Services",
      icon: <Cloud size={24} />,
      skills: ["AWS (EC2, S3, Lambda)", "GCP (BigQuery, Dataflow, DataProc)"]
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "Cassandra", "BigQuery"]
    },
    {
      category: "ETL Tools",
      icon: <Workflow size={24} />,
      skills: ["Airflow", "NiFi", "DBT", "Informatica", "Talend"]
    },
    {
      category: "Big Data Technologies",
      icon: <Server size={24} />,
      skills: ["DataBricks", "Hadoop", "HDFS", "Hive", "Kafka", "PySpark"]
    },
    {
      category: "Machine Learning and AI",
      icon: <Brain size={24} />,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Vertex AI", "LangChain", "RAG"]
    },
    {
      category: "Visualization Tools",
      icon: <Cog size={24} />,
      skills: ["PowerBI", "Tableau", "Grafana"]
    },
    {
      category: "Version Control",
      icon: <Cog size={24} />,
      skills: ["Git", "DBT", "Docker", "Kubernetes", "Jenkins", "Terraform", "Maven", "Gradle"]
    },
    {
      category: "Web Development",
      icon: <Code2 size={24} />,
      skills: ["React", "Node.js", "Express", "FastAPI", "Django", "HTML/CSS", "REST APIs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sai Praneeth Reddy Kethiri</h1>
            <p className="text-xl mb-6">Data Engineer</p>
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://github.com/KSPReddy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-praneeth-/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-20">
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hi! I'm a passionate Data Engineer with over 4 years of professional experience in implementing ETL pipelines. 
              My journey in technology began with my integrated masters in Electronics and Communication Engineering, 
              followed by a Master's in Data Analytics, which has given me a unique perspective on building data-driven applications.
            </p>
            <p className="text-gray-600 mb-4">
              I worked as a Data Engineer at Walmart Labs, I specialize in creating efficient data pipelines 
              and developing API endpoints. I'm particularly interested in the field of data engineering,
               always looking for ways to create more intelligent and responsive user experiences.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, 
              or exploring the latest developments in data engineering.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20" id="projects">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            I'm currently open for new opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:kethirisaipraneethreddy0701@gmail.com" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Email Me
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Sai Praneeth Reddy Kethiri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;