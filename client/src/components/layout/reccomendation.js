import React from 'react';
import { getRecommend } from '../../utlis/api';

import RecNav from './reccommendationNav';
import RecLists from './recommendationLists';


const Reccomendation = () => {
  const [recData, setRecData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);


  const onNavChanged = async (navTitle) => {
    setIsLoading(true);

    try {
      const res = await getRecommend(navTitle);
      setRecData(res.data?.businesses);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='text-center'>
      <h1 className='m-4'>Recommendations</h1>
      <RecNav onNavChanged={onNavChanged} />
      <RecLists data={recData} loading={isLoading} />
    </div>
  );
};

export default Reccomendation;
