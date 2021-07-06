interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  const { name, description, html_url} = props.repository;

  return (
    <li>
      <strong>{ name }</strong>
      <p>{ description }</p>
      <a href={ html_url }>
        Acessar repositório
      </a>
    </li>
  )
}