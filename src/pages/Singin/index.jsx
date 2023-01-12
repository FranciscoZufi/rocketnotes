import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock} from 'react-icons/fi'

export function SingIn() {
return (
  <Container>
    <Form>
      <h1>Rocket Notes</h1>
      <p>Application to save and manage your useful links</p>

      <h2>LogIn</h2>

      <Input placeholder="E-mail" type="text" icon={FiMail}/>
      <Input placeholder="Password" type="password" icon={FiLock}/>
      <Button title="Enter"/>
      <a href="#">Create account</a>
    </Form>
    <Background/>
  </Container>
)
}