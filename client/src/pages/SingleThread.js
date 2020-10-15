import React from 'react';
//import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THREADS } from '../utils/queries';
import { useSelector } from 'react-redux';
import Book from '../components/Book';



const SingleThread = props => {

  // const state = useSelector((state) => state.thread);
  // const { loading, data } = useQuery(QUERY_THREADS, {
  //   variables: state ,
  // });
  // const threads = data?.threads || [];

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Book/>
    </div>
  );
};


export default SingleThread;
