// src/hooks/useBikeData.js
import { useState, useEffect } from 'react';
import { bikeService } from '../services/api';

export function useBikeData(bikeId) {
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBike() {
      try {
        const response = await bikeService.getBikeDetails(bikeId);
        setBike(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    if (bikeId) {
      fetchBike();
    }
  }, [bikeId]);

  return { bike, loading, error };
}