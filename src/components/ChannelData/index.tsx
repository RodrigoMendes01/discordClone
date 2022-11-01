import React, { useRef, useEffect} from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])
  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Rodrigo Mendes"
          date="00/00/0000"
          content="Olá"
        />

        <ChannelMessage
          author="Loritta"
          date="00/00/0000"
          content={
            <>
              <Mention>
                @Rodrigo Mendes
              </Mention>, seja bem-vindo ao servidor!
              
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>

    </Container>
  )
}

export default ChannelData;