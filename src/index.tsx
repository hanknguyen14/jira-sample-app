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
import { summarize, initSummarizationClient, initImageGenerationClient, imageGenerate } from './services';
import { getIssueDescription } from './services/jira.service';

const App = () => {
  const {
    //@ts-ignore
    platformContext: { issueKey },
  } = useProductContext();
  const summarizationClient = initSummarizationClient();
  const imageGenerationClient = initImageGenerationClient();

  const [textPrompt, setTextPrompt] = useState('');
  const [wireframeSrc, setWireframeSrc] = useState(
    'https://balsamiq.com/assets/learn/articles/loremipsum_text_wireframe.png',
  );

  async function handleClick() {
    const { description } = await getIssueDescription(issueKey);
    const { summary_text } = await summarize(summarizationClient, description);
    setTextPrompt(summary_text);
    const { url } = await imageGenerate(imageGenerationClient, summary_text);
    setWireframeSrc(url);
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
      <Image src={wireframeSrc} alt="wireframe" />
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>,
);
