import React from 'react'
import {useState, useEffect} from 'react'

const CompaniesContainer = () => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
      fetch("/api/v1/posts")
      .then(r => r.json())
      .then(data => setCompanies(data.data.map(c => c.attributes)))
  }, []);

  return (
    <div>
      <h2>Companies</h2>
      <CompaniesList>companies={companies}</CompaniesList>
    </div>
  )

}

export default CompaniesContainer
