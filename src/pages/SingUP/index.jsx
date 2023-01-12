import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'

export function SingUp() {
return (
  <Container>
    <Background/>
    <Form>
      <h1>Rocket Notes</h1>
      <p>Application to save and manage your useful links</p>

      <h2>Create account</h2>
      <Input placeholder="Name" type="text" icon={FiUser}/>
      <Input placeholder="E-mail" type="text" icon={FiMail}/>
      <Input placeholder="Password" type="password" icon={FiLock}/>
      <Button title="Register"/>
      <a href="#">Back to LogIn</a>
    </Form>
  </Container>
)
}