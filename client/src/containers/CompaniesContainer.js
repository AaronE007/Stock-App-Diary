import React from 'react'
import {useState, useEffect} from 'react'
import CompaniesList from '../components/CompaniesList'

const CompaniesContainer = () => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
      fetch('/companies')
      .then((r) => r.json())
      .then(data => setCompanies(data))
  }, []);
  debugger
  return (
    <div>
      <h2>Companies</h2>
      <CompaniesList companies={companies}/>
    </div>
  )

}

export default CompaniesContainer
