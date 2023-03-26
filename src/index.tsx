import ForgeUI, { render, Fragment, Text, IssuePanel, Image, Button, Code, Strong } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>
        <Strong>Text prompt: </Strong>
        <Code text="This is a text prompt" />
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
