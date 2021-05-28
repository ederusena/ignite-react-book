import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

// https://api.github.com/users/ederusena

const repository = {
  name: 'ederusena',
  description: 'Forms in React',
  link: 'https://github.com/ederusena'
}

export function RepositoryList() {
  const [repositories, setRespositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ederusena')
      .then(response => response.json())
      .then(data => setRespositories(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>Lista de repository</h1>
      
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}