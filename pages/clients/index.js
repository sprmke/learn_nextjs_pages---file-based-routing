import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    { id: 'mike', name: 'Mike' },
    { id: 'aring', name: 'Aring' },
  ];

  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
