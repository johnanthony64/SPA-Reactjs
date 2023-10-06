import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';

export default function PropertyList() {
  const url =
    'https://raw.githubusercontent.com/johnanthony64/johnanthony64.github.io/main/Properties.json';

  const [data, setData] = useState([]);

  useEffect(() => {
    async function makeRequest() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    makeRequest();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((property) => (
          <PropertyCard
            key={property.id}
            name={property.name}
            type={property.type}
            location={property.location}
          />
        ))}
      </div>
    </div>
  );
}
