import React from 'react';
import styled from 'styled-components';
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
  padding-bottom: 50px;
`;

const ContentWrapper = styled.div`
  width: 95vw;
  max-width: 1200px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const GlassCard = styled.div`
  background: ${theme.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${theme.glassBorder};
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  background: linear-gradient(135deg, ${theme.textMain} 0%, ${theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.textMain};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 6px;
    height: 24px;
    background: ${theme.secondary};
    border-radius: 4px;
  }
`;

const Text = styled.p`
  color: ${theme.textSub};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 15px;
  
  b { color: ${theme.primary}; font-weight: 600; }
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  position: relative;

  &:last-child { margin-bottom: 0; }
`;

const Year = styled.div`
  min-width: 120px;
  font-weight: 800;
  color: ${theme.primary};
  text-align: right;
  padding-top: 5px;
  font-size: 0.9rem;
`;

const Details = styled.div`
  border-left: 2px solid rgba(0,0,0,0.1);
  padding-left: 25px;
  padding-bottom: 10px;
  flex: 1;

  h3 { margin: 0 0 5px 0; color: ${theme.textMain}; font-size: 1.2rem; }
  h4 { margin: 0 0 10px 0; color: ${theme.textSub}; font-weight: 500; font-size: 1rem; }
  span { 
    background: white; 
    padding: 4px 10px; 
    border-radius: 8px; 
    font-size: 0.85rem; 
    border: 1px solid rgba(0,0,0,0.05);
    font-weight: 600;
    color: ${theme.secondary};
  }
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const BookCard = styled.div`
  background: rgba(255,255,255,0.6);
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.5);
  text-align: center;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 { margin: 0; color: ${theme.textMain}; font-size: 1rem; font-weight: 600; }
  
  &:hover {
    background: white;
    transform: scale(1.05);
    border-color: ${theme.primary};
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }
`;

const HobbyContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const HobbyCard = styled.div`
  flex: 1;
  min-width: 250px;
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  h3 { margin: 0; color: ${theme.primary}; font-size: 1.1rem; }
  p { margin: 0; color: ${theme.textSub}; font-size: 0.95rem; line-height: 1.6; }
`;

const About = () => {
  return (
    <Container>
      <NavBar />

      <ContentWrapper>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <PageTitle>About Me</PageTitle>
          <Text style={{ maxWidth: '600px', margin: '0 auto' }}>
            A glimpse into my journey, my education, and the habits that shape who I am.
          </Text>
        </div>

        <GlassCard>
          <SectionTitle>My Journey</SectionTitle>
          <Text>
            Hi, I'm <b>Sreepathy Vadakkath Joshy</b>. I am a passionate developer currently 
            pursuing my engineering degree. I strongly believe in the compounding effect of 
            small habits—whether it's writing code, reading pages, or lifting weights.
          </Text>

          <div style={{ marginTop: '40px' }}>
            <TimelineItem>
              <Year>Present</Year>
              <Details>
                <h3>Amrita Vishwa Vidyapeetham</h3>
                <h4>B.Tech in Computer Science & Engineering</h4>
                <span>CGPA: 7.95 / 10</span>
              </Details>
            </TimelineItem>

            <TimelineItem>
              <Year>High School</Year>
              <Details>
                <h3>Sharjah Indian School</h3>
                <h4>Higher Secondary Education</h4>
                <span>Grade 12: 83.6%</span> &nbsp; <span>Grade 10: 82.4%</span>
              </Details>
            </TimelineItem>
          </div>
        </GlassCard>

        <GlassCard>
          <SectionTitle>The Library</SectionTitle>
          <Text>
            Reading is where I find mental clarity. Here are some of the titles that have 
            shaped my thinking recently:
          </Text>
          <BookGrid>
            <BookCard><h4>Ikigai</h4></BookCard>
            <BookCard><h4>The Mountain Is You</h4></BookCard>
            <BookCard><h4>The Art of Laziness</h4></BookCard>
            <BookCard><h4>Psychology of Money</h4></BookCard>
            <BookCard><h4>The Courage to Be Disliked</h4></BookCard>
          </BookGrid>
        </GlassCard>

        <GlassCard>
          <SectionTitle>Beyond the Code</SectionTitle>
          <HobbyContainer>
            <HobbyCard>
              <h3>💪 Body & Mind</h3>
              <p>
                I maintain a strict routine of going to the <b>gym</b> and strictly following 
                a <b>healthy diet</b>. I believe physical discipline translates directly to mental resilience.
              </p>
            </HobbyCard>

            <HobbyCard>
              <h3>🧩 Problem Solving</h3>
              <p>
                In my free time, you'll find me grinding <b>LeetCode</b> problems. 
                I treat data structures and algorithms as mental gymnastics to keep my logic sharp.
              </p>
            </HobbyCard>

            <HobbyCard>
              <h3>📚 Continuous Learning</h3>
              <p>
                I enjoy indulging in high-quality tech content and documentaries, 
                always looking for the next concept to learn or system to deconstruct.
              </p>
            </HobbyCard>
          </HobbyContainer>
        </GlassCard>

      </ContentWrapper>
    </Container>
  );
};

export default About;