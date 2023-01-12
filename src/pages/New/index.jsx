import { Header } from '../../components/header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New(){
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1> Create note</h1>
            <a href="/">Return</a>
          </header>
          <Input placeholder="Title"/>
          <Textarea placeholder="comments"/>
          <Section title="Useful links">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="New link"/>
          </Section>

          <Section title="markers">
            <div className='tags'>
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="New tag"/>
            </div>
          </Section>
          <Button title="Save" />
        </Form>
      </main>
    </Container>
  )
}