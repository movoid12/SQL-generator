import MessageDisplay from "../MessageDisplay/MessageDisplay";
import { Container, ScrollArea, Stack, Text } from "@mantine/core";

const MessagesCollectionDisplay = () => {
  return (
    <Container size="lg">
      <Stack p={"md"} bg="#FAFBFC" h={300} spacing="xl" w={500} mb={"md"}>
        <ScrollArea>
          <MessageDisplay />
          <MessageDisplay />
          <MessageDisplay />
          <MessageDisplay />
          <MessageDisplay />
          <MessageDisplay />
          <MessageDisplay />
        </ScrollArea>
      </Stack>
    </Container>
  );
};

export default MessagesCollectionDisplay;
