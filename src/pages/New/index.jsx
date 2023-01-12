import { Header } from '../../components/header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

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
        </Form>
      </main>
    </Container>
  )
}