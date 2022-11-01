import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
} ) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Rodrigo Mendes"/>

      <Role>Offline - 14</Role>
      <UserRow nickname="Loritta" isBot/>
      <UserRow nickname="User 2"/>
      <UserRow nickname="User 3"/>
      <UserRow nickname="User 4"/>
      <UserRow nickname="User 5"/>
      <UserRow nickname="User 6"/>
      <UserRow nickname="User 7"/>
      <UserRow nickname="User 8"/>
      <UserRow nickname="User 9"/>
      <UserRow nickname="User 10"/>
      <UserRow nickname="User 11"/>
      <UserRow nickname="User 12"/>
      <UserRow nickname="User 13"/>
      <UserRow nickname="User 14"/>
    </Container>
  );
};

export default UserList