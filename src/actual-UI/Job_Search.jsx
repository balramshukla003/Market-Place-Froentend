import React from 'react'
import JobsFilters from './JobsFilters'
const Job_Search = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const query = urlParams.get('query');
  const category = urlParams.get('category');
  const location = urlParams.get('location');


  urlParams.delete('query');
  urlParams.delete('category');
  urlParams.delete('location');


  return (
    <>
      <JobsFilters />
    </>
  )

}

export default Job_Search
