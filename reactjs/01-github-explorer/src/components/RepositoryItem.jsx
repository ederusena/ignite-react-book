export function RepositoryItem(props) {
  const { name, description, link} = props.repository;

  return (
    <li>
      <strong>{ name ?? 'Empty'}</strong>
      <p>{ description }</p>
      <a href={ link }>
        Acessar repositório
      </a>
    </li>
  )
}