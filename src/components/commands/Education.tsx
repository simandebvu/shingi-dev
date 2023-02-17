import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc Computer and Information Systems",
    desc: "Africa University | 2009 ~ 2013",
  },
  {
    title: "Fullstack Software Development Program",
    desc: "Microverse  | 2021 - 2021",
  }
];

export default Education;
