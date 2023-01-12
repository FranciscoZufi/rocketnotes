import {Container, Links, Content} from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


export function Details() {


  return (
    <Container>
      <Header/>
      <main>
        <Content>
      <ButtonText title='Excluir nota'/>
      
      <h1>Introduction to React</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae omnis ullam consequatur, consectetur ut facere tenetur maiores. Hic id error quidem fuga blanditiis molestias pariatur explicabo molestiae et illo?</p>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        
        </Links>
      </Section>
      <Section title="Bookmarks">
        <Tag title='express' />
        <Tag title='nodejs' />
    
      </Section>
       <Button title="Come back" />
       </Content>
      </main>
    </Container>
    
  )
}