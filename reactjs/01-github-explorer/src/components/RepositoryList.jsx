import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'ederusena',
  description: 'Forms in React',
  link: 'https://github.com/ederusena'
}

export function RepositoryList() {
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