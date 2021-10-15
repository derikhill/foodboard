import React from 'react';
import { useState, useEffect } from 'react';
import Hero from './Hero';
import Results from './Results';
import { Skeleton } from '@webeetle/windy';

const Home = () => {
  const [meals, setMeals] = useState({meals: []});
  const [isLoading, setIsLoading] = useState({loading: false});

  useEffect(() => {
    getMeals();
  }, []);

  async function getMeals() {
    const URL = process.env.REACT_APP_API_URL;
    setIsLoading(true);
    const res = await fetch(
      `${URL}/meals`
    );

    const json = await res.json();

    setMeals(json);
    setIsLoading(false);
  }

  return (
    <div>
      <Hero />
      {isLoading ? (
        <div>
        <div className="w-30 md:w-96 m-20">
          <Skeleton className="w-3/4 mb-3" />
          <Skeleton className="mb-3" />
          <Skeleton className="w-1/2 mb-3" />
        </div>
        <div className="w-30 md:w-96 m-20">
          <Skeleton className="w-3/4 mb-3" />
          <Skeleton className="mb-3" />
          <Skeleton className="w-1/2 mb-3" />
        </div>
        </div>
      ) : (
        <Results meals={meals}/>
      )}
    </div>
  )

};

export default Home;
