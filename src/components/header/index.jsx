import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/franciscozufi.png" alt="Foto do usuário" />
        <div>
          <span>Welcome,</span>
          <strong>Francisco Zufi</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}