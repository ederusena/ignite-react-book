import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

// https://api.github.com/users/ederusena

export function RepositoryList() {
  const [repositories, setRespositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ederusena/repos')
      .then(response => response.json())
      .then(data => setRespositories(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>Lista de repository</h1>
      <ul>
        { repositories.map(repository =>{
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  )
}