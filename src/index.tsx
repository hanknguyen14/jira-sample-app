import ForgeUI, {
  render,
  Fragment,
  Text,
  IssuePanel,
  Image,
  Code,
  Strong,
  Button,
  useProductContext,
  useState,
} from '@forge/ui';
import { summarize, initSummarizationClient } from './services';
import { getIssueDescription } from './services/jira.service';

const App = () => {
  const {
    //@ts-ignore
    platformContext: { issueKey },
  } = useProductContext();
  const summarizationClient = initSummarizationClient();

  const [textPrompt, setTextPrompt] = useState('');

  async function handleClick() {
    const { description } = await getIssueDescription(issueKey);
    const { summary_text } = await summarize(summarizationClient, description);
    setTextPrompt(summary_text);
  }

  return (
    <Fragment>
      <Button
        text={'Generate wireframe'}
        onClick={async () => {
          await handleClick();
        }}
      />
      <Text>
        <Strong>Text prompt: </Strong>
        <Code text={textPrompt} />
      </Text>
      <Image src="https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif" alt="homer" />
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>,
);
