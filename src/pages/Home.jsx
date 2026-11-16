// pàgina principal: mostra els productes destacats de la botiga
const productes = [
  { id: 1, nom: 'Compte RoK Nivell 25', preu: '45€' },
  { id: 2, nom: 'Pack 1M Recursos', preu: '15€' },
  { id: 3, nom: 'Bot de Farming 24h', preu: '30€' },
];

function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inici</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {productes.map((producte) => (
          <div key={producte.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">{producte.nom}</h2>
            <p className="text-gray-600">{producte.preu}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;