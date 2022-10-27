import React from 'react'
import CompaniesForm from '../components/CompaniesForm'
import CompanyList from '../components/CompanyList'

const CompaniessContainer = () => {

return (
    <div>
      <h3>Add Companies Here</h3>
      <CompaniesForm/>
      <br/>
      <br/>
      <h2>Companies</h2>
      <CompanyList/>
    </div>
  )
}

export default CompaniessContainer
