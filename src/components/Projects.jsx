import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';
import image from '../Images/productImage.png';

const theme = {
  bg: "#FAFAFA",          
  cardBg: "#FFFFFF",     
  primary: "#171717",    
  textSub: "#525252",    
  border: "#E5E5E5",     
  highlight: "#000000",  
};

const projects = [
  {
    title: "Food Recognition & Calorie Estimation",
    desc: "End-to-end computer vision pipeline using EfficientNet-B3 for food classification, GrabCut for segmentation, and pixel-area-based portion estimation with USDA API integration.",
    tags: ["Computer Vision", "EfficientNet", "Python", "USDA API"],
    link: "#"
  },
  {
    title: "Edge-Based Digital Twin",
    desc: "IoT digital twin with MQTT telemetry, Improved Hungarian Algorithm for adaptive scheduling, and Random Forest failure prediction for low-latency optimization.",
    tags: ["Edge Computing", "IoT", "MQTT", "Machine Learning"],
    link: "#"
  },
  {
    title: "MERN E-Commerce Platform",
    desc: "Full-stack e-commerce solution with JWT authentication, secure REST APIs, inventory management, and a responsive React frontend.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    link: "#"
  },
  {
    title: "Hotel Management System",
    desc: "Comprehensive management dashboard featuring RESTful APIs for booking operations, database-backed CRUD, and responsive UI components.",
    tags: ["MERN Stack", "REST API", "SCSS", "CRUD"],
    link: "#"
  },
  {
    title: "AI-Powered MCQ Generator",
    desc: "Python automated tool that scrapes web content, processes text, and utilizes the OpenAI API to generate structured quiz questions with PDF export.",
    tags: ["Python", "OpenAI API", "Web Scraping", "Tkinter"],
    link: "#"
  }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.bg};
  font-family: 'Inter', sans-serif;
  padding-bottom: 50px;
`;

const ContentWrapper = styled.div`
  width: 95vw;
  max-width: 1200px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 15px;
  color: ${theme.primary};
  letter-spacing: -1px;
`;

const SubText = styled.p`
  color: ${theme.textSub};
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: ${theme.cardBg};
  border: 1px solid ${theme.border};
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);

  &:hover {
    border-color: ${theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
`;

const FeaturedCard = styled(Card)`
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  background: ${theme.cardBg};
  border: 1px solid ${theme.primary}; 
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme.primary};
  margin: 0 0 12px 0;
`;

const ProjectDesc = styled.p`
  color: ${theme.textSub};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const Tag = styled.span`
  background: #F3F4F6;
  color: ${theme.primary};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #E5E7EB;
`;

const StatusBadge = styled.span`
  background: ${theme.primary};
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  display: inline-block;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 25px;
  color: ${theme.primary};
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${theme.primary};
  }
`;

const Projects = () => {
  return (
    <Container>
      <NavBar />
      
      <ContentWrapper>
        <div style={{ textAlign: 'center' }}>
          <PageTitle>Selected Work</PageTitle>
          <SubText>
            A collection of technical projects focusing on scalable systems, AI integration, and full-stack engineering.
          </SubText>
        </div>

        <Grid>
          <FeaturedCard>
            <div style={{ flex: 1.2 }}>
              <StatusBadge>Current Product</StatusBadge>
              <ProjectTitle style={{ fontSize: '2rem', letterSpacing: '-0.5px' }}>DashFlow</ProjectTitle>
              <ProjectDesc style={{ fontSize: '1.05rem', color: '#333' }}>
                AI-powered dashboard generation platform that ingests CSV or database inputs, extracts schema-level insights, and uses an LLM to recommend optimal visualizations. 
                <br /><br />
                Dashboards are dynamically rendered using reusable React components with support for layout customization, role-based access control, and full CRUD operations backed by MongoDB.
              </ProjectDesc>
              <TagContainer>
                {["GenAI", "React", "MongoDB", "LLM Integration", "RBAC"].map(tag => (
                  <Tag key={tag} style={{ background: '#000', color: '#FFF', border: 'none' }}>{tag}</Tag>
                ))}
              </TagContainer>
            </div>
            
            <div style={{ 
              flex: 0.8, 
              height: '280px', 
              background: '#F5F5F5', 
              borderRadius: '12px',
              border: `1px solid ${theme.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#A3A3A3',
              fontWeight: '500',
              width: '100%'
            }}>
              <img src={image} alt="DashFlow Product" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
            </div>
          </FeaturedCard>

          {projects.map((project, index) => (
            <Card key={index}>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
              </div>
              <TagContainer>
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
            </Card>
          ))}
        </Grid>

      </ContentWrapper>
    </Container>
  );
};

export default Projects;