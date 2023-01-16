import {useState} from 'react'
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { api } from '../../services/api'

export function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password) {
      return alert('Fill in all fields!')
    }
    api.post('/users', {name, email, password}).then(() => {
      alert('Successfully registered user')
      navigate('/')
    }).catch( error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Could not register')
      }
    })
  }
return (
  <Container>
    <Background/>
    <Form>
      <h1>Rocket Notes</h1>
      <p>Application to save and manage your useful links</p>

      <h2>Create account</h2>
      <Input placeholder="Name" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>
      <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
      <Input placeholder="Password" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
      <Button title="Register" onClick={handleSignUp}/>
      <Link to="/">Back to LogIn</Link>
    </Form>
  </Container>
)
}