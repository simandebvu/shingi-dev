import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>shingi.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
