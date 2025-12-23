import React from 'react';
import styled, { keyframes } from 'styled-components';
import NavBar from './NavBar.jsx';
import img1 from '../Images/img1.jpeg';

const theme = {
  bg: "#FAFAFA",           
  primary: "#171717",      
  secondary: "#737373",    
  textMain: "#171717",    
  textSub: "#525252",     
  glass: "rgba(255, 255, 255, 0.9)", 
  glassBorder: "#E5E5E5",  
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
);


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.bg};
  background-image: 
    radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(219, 39, 119, 0.1) 0px, transparent 50%);
  font-family: 'Inter', sans-serif;
`;

const CardContainer = styled.div`
  display: flex;
  width: 95vw; 
  max-width: 1400px;
  margin-top: 20px;
  height: calc(100vh - 110px);
  gap: 20px;
`;

const GlassCard = styled.div`
  background: ${theme.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${theme.glassBorder};
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  
  flex: ${props => props.flex || 1};
  gap: ${props => props.gap || "15px"};
  align-items: ${props => props.align || "flex-start"};
  justify-content: ${props => props.justify || "flex-start"};

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-color: white;
  }
`;

const RoleTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(135deg, ${theme.textMain} 0%, ${theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubText = styled.p`
  color: ${theme.textSub};
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
  
  b { color: ${theme.primary}; }
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${theme.textSub};
  font-weight: 700;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${theme.secondary};
    border-radius: 50%;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid white;
`;

const TechPill = styled.span`
  background: white;
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.textMain};
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 2px 5px rgba(0,0,0,0.03);
  transition: 0.2s;

  &:hover {
    color: ${theme.primary};
    border-color: ${theme.primary};
    transform: translateY(-1px);
  }
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectItem = styled.div`
  width: 100%;
  padding: 16px;
  background: rgba(255,255,255,0.5);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;

  &:hover {
    background: white;
    border-color: ${theme.primary};
    transform: scale(1.02);
  }

  h4 { margin: 0; font-size: 1rem; color: ${theme.textMain}; }
  span { font-size: 0.8rem; color: ${theme.textSub}; }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: space-between;
`;

const SocialLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  background: white;
  color: ${theme.textMain};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.primary};
    color: ${theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.15);
  }
`;

const ConnectButton = styled.a`
  background: ${theme.textMain};
  color: white;
  width: 100%;
  height: 60px; 
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary});
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after { opacity: 1; }
  
  span { position: relative; z-index: 2; }
`;

const HomePage = () => {
  return (
    <Container>
      <NavBar />
      
      <CardContainer>
        <div style={{ flex: 2.2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ flex: 1.4, display: 'flex', gap: '20px' }}>
            <GlassCard flex={1.5} justify="center">
              <div style={{ marginBottom: '15px' }}>
                <span style={{ background: '#EEF2FF', color: theme.primary, padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  🚀 Open to Work
                </span>
              </div>
              <RoleTitle>Software<br/>Engineer.</RoleTitle>
              <SubText style={{ marginTop: '20px' }}>
                I am a software engineer with strong experience in full-stack development, edge computing, and applied machine learning, 
                focused on building scalable, low-latency, and data-driven systems. My work spans intelligent IoT architectures, computer vision 
                pipelines, and production-ready web applications.
              </SubText>
            </GlassCard>
            
            <GlassCard flex={1} style={{ padding: '5px' }}>
              <ProfileImg src={img1} alt="Sreepathy Joshy" />
            </GlassCard>
          </div>

          <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
            
            <GlassCard flex={1}>
              <SectionTitle>Background</SectionTitle>
              <SubText style={{ fontSize: '0.9rem' }}>
                I am pursuing a B.E. in Computer Science, blending software engineering with applied research.
                <br /><br />
                My experience ranges from <b>industrial edge-based scheduling</b> and food-recognition pipelines 
                to secure <b>MERN-stack applications</b>.
              </SubText>
            </GlassCard>

            <GlassCard flex={1}>
              <SectionTitle>Skills</SectionTitle>
              <PillContainer>
                <TechPill>Data Structures</TechPill>
                <TechPill>Python</TechPill>
                <TechPill>Java</TechPill>
                <TechPill>JavaScript</TechPill>
                
                <TechPill>MERN Stack</TechPill>
                <TechPill>REST APIs</TechPill>
                
                <TechPill style={{ color: theme.primary, borderColor: theme.primary }}>Machine Learning</TechPill>
                <TechPill>Edge Computing</TechPill>
                <TechPill>MQTT</TechPill>
                <TechPill>Git</TechPill>
              </PillContainer>
            </GlassCard>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <GlassCard flex={3}>
            <SectionTitle>Featured Work</SectionTitle>
            
            <ProjectItem>
              <div>
                <h4>DashFlow</h4>
                <span>MERN Stack + LLM</span>
              </div>
              <div style={{width:'10px', height:'10px', background:'#10B981', borderRadius:'50%'}}></div>
            </ProjectItem>

            <ProjectItem>
              <div>
                <h4>Edge Digital Twin</h4>
                <span>Job Shop Scheduling</span>
              </div>
              <span>→</span>
            </ProjectItem>

            <ProjectItem>
              <div>
                <h4>Food & Calorie AI</h4>
                <span>Image Prediction & CV</span>
              </div>
              <span>→</span>
            </ProjectItem>
            
            <ProjectItem>
              <div>
                <h4>MERN E-Commerce</h4>
                <span>Full Stack App</span>
              </div>
              <span>→</span>
            </ProjectItem>

            <div style={{ marginTop: 'auto', width: '100%', textAlign: 'center', fontSize: '0.9rem', color: theme.primary, cursor: 'pointer', fontWeight: '600' }}>
              View GitHub Profile ↗
            </div>
          </GlassCard>

          <GlassCard flex={0.8} style={{ padding: '20px', gap:'15px', justifyContent:'center' }}>
            
            <SocialContainer>
              <SocialLink href="https://github.com/NutZz1" target="_blank" title="GitHub">
                <GitHubIcon /> <span>NutZz1</span>
              </SocialLink>
              
              <SocialLink href="https://leetcode.com/u/TyKLa9fGV6/" target="_blank" title="LeetCode">
                <LeetCodeIcon /> <span>LeetCode</span>
              </SocialLink>
              
              <SocialLink href="https://www.linkedin.com/in/grow-with-sreepathy/" target="_blank" title="LinkedIn">
                <LinkedInIcon /> <span>LinkedIn</span>
              </SocialLink>
            </SocialContainer>

            <ConnectButton href="mailto:sreepathy20067@gmail.com">
              <span>Let's Talk</span>
            </ConnectButton>
          </GlassCard>
        
        </div>
      </CardContainer>
    </Container>
  )
}

export default HomePage;