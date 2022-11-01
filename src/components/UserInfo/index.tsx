import React from "react";

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadIcon, SettingsIcon } from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar/>
        <UserData>
          <strong>Rodrigo Mendes</strong>
          <span>#8697</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon/>
        <HeadIcon/>
        <SettingsIcon/>
      </Icons>
    </Container>
  )
}

export default UserInfo;