import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'

export function Home() {
  return (
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header>
        
      </Header>

      <Menu>
       <li><ButtonText title="Todos" isActive/></li>
       <li><ButtonText title="Nodejs" /></li>
       <li><ButtonText title="React" /></li>
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>

      </NewNote>
    </Container>
  )
}