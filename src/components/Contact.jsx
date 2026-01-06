import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';

const theme = {
  bg: "#FAFAFA",
  primary: "#171717",
  secondary: "#737373",
  textMain: "#171717",
  textSub: "#525252",
  glass: "rgba(255, 255, 255, 0.9)",
  glassBorder: "#E5E5E5",
  inputBg: "rgba(255, 255, 255, 0.5)"
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
`;

const ContactWrapper = styled.div`
  width: 95vw;
  max-width: 800px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const GlassCard = styled.div`
  background: ${theme.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${theme.glassBorder};
  border-radius: 24px;
  padding: 50px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Header = styled.div`
  text-align: center;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  background: linear-gradient(135deg, ${theme.textMain} 0%, ${theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubText = styled.p`
  color: ${theme.textSub};
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.textMain};
  margin-left: 4px;
`;

const Input = styled.input`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${theme.glassBorder};
  background: ${theme.inputBg};
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  color: ${theme.textMain};
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: ${theme.primary};
    background: white;
    box-shadow: 0 0 0 4px rgba(23, 23, 23, 0.05);
  }
`;

const TextArea = styled.textarea`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${theme.glassBorder};
  background: ${theme.inputBg};
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  color: ${theme.textMain};
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: ${theme.primary};
    background: white;
    box-shadow: 0 0 0 4px rgba(23, 23, 23, 0.05);
  }
`;

const SubmitButton = styled.button`
  background: ${theme.textMain};
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  color: ${theme.textSub};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;

const ContactPage = () => {
  return (
    <Container>
      <NavBar />
      
      <ContactWrapper>
        <GlassCard>
          <Header>
            <Title>Get in Touch</Title>
            <SubText>
              Have a project in mind or just want to say hi? <br/>
              Fill out the form below or send me an email directly.
            </SubText>
          </Header>
          <Form action="mailto:sreepathy20067@gmail.com" method="POST" encType="text/plain">
            <InputGroup>
              <Label>Name</Label>
              <Input type="text" name="name" placeholder="Your Name" required />
            </InputGroup>

            <InputGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="your@email.com" required />
            </InputGroup>

            <InputGroup>
              <Label>Message</Label>
              <TextArea name="message" placeholder="Tell me about your project..." required />
            </InputGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>

          <ContactInfo>
            <span>📍 Ettimadai, India</span>
            <span>•</span>
            <span>📧 sreepathy20067@gmail.com</span>
          </ContactInfo>

        </GlassCard>
      </ContactWrapper>
    </Container>
  );
};

export default ContactPage;