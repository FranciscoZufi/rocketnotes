import { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useNavigate }  from 'react-router-dom'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes]= useState([])
  
  const navigate = useNavigate()
  
function handleTagSelected(tagName){
  if(tagName === 'all'){
    return setTagsSelected([])
  }

  const alreadySelected = tagsSelected.includes(tagName)
  
  if(alreadySelected){
    const filteredTags = tagsSelected.filter(tag => tag !== tagName)
    setTagsSelected(filteredTags)
  }else{
    setTagsSelected(prevState => [...prevState, tagName])
  }

}

function handleDetails(id){
  navigate(`/details/${id}`)
}

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header>
        
      </Header>

      <Menu>
      <li><ButtonText title='All' isActive={tagsSelected.length === 0} onClick={() => handleTagSelected('all')}/></li>
       {
        tags && tags.map(tag => (
        <li key={String(tag.id)}><ButtonText 
        title={tag.name} 
        onClick={() => handleTagSelected(tag.name)}
        isActive={tagsSelected.includes(tag.name)}/>
        </li>
        ))
        }
      
      </Menu>

      <Search>
        <Input 
        placeholder="Search by title" 
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes">
        { 
          notes.map(note => (
            <Note 
            key={String(note.id)}
            data={note} 
            onClick={() => handleDetails(note.id)}
            />
          ))
        }
        </Section>
      </Content>

      <NewNote to='/new'>
       <FiPlus />
        Create note
      </NewNote>
    </Container>
  )
}