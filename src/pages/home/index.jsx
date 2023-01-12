import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'

export function Home() {
  return (
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header>
        
      </Header>

      <Menu>
       <li><ButtonText title="All" isActive/></li>
       <li><ButtonText title="Nodejs" /></li>
       <li><ButtonText title="React" /></li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="My notes">
        <Note data={{ title:'React', tags: [{id: '1', name:'react'}, {id: '2', name:'rocketseat'}]}}/>
        </Section>
      </Content>

      <NewNote to='/new'>
       <FiPlus />
        Create note
      </NewNote>
    </Container>
  )
}