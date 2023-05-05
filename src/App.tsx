import { Button, Container, Group, Input, Stack } from "@mantine/core";
import CodeDisplay from "./components/CodeDisplay/CodeDisplay";
import MessagesCollectionDisplay from "./components/MessagesCollectionDisplay/MessagesCollectionDisplay";

const App = () => {
  return (
    <Stack>
      <MessagesCollectionDisplay />
      <Input size="lg" placeholder="write what you think to generate sql for you :)" radius="xl" />
      <Group position="center">
        <Button color="teal">Get Query</Button>
        <Button color="yellow">Clear Chat</Button>
      </Group>
      <CodeDisplay />
    </Stack>
  );
};

export default App;
