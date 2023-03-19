import { useForm } from "react-hook-form";
import Form from "./form/Form";
import {
  BlueDiv,
  LeftDiv,
  MainDiv,
  P,
  RightDiv,
  Title,
  ValidationDiv,
} from "./app.styled";
function App() {
  return (
    <MainDiv>
      <LeftDiv>
        <Title>Learn to code by watching others</Title>
        <P>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </P>
      </LeftDiv>
      <RightDiv>
        <BlueDiv>Try it free 7 days then $20/mo. thereafter</BlueDiv>
        <ValidationDiv>
          <Form />
        </ValidationDiv>
      </RightDiv>
    </MainDiv>
  );
}

export default App;
