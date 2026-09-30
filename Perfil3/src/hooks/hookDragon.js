import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://dragonball-api.com/api/planets?limit=20';

export default function useDragon() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlanets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error ${response.status} al obtener los planetas`);
      }
      const data = await response.json();
      setPlanets(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return { planets, loading, error, refetch: fetchPlanets };
}
