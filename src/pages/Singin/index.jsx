import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { FiMail, FiLock} from 'react-icons/fi'

import { useAuth} from '../../hooks/auth'

export function SingIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { singIn } = useAuth()

  function handleSignIn(){
    singIn({email, password})
  }
return (
  <Container>
    <Form>
      <h1>Rocket Notes</h1>
      <p>Application to save and manage your useful links</p>

      <h2>LogIn</h2>

      <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
      <Input placeholder="Password" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
      <Button title="Enter" onClick={handleSignIn}/>
      <Link to='/register'>Create account</Link>
    </Form>
    <Background/>
  </Container>
)
}