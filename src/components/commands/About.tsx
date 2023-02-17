import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Shingi</HighlightSpan>!
      </p>
      <p>
        I am <HighlightAlt>a full-stack developer</HighlightAlt> based in South Africa.
      </p>
      <p>
        I am passionate about technology and <br />
        developing applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
