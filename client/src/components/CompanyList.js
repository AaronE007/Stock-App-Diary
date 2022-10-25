import React, {useContext} from 'react'
import CompanyCard from './CompanyCard'
import { UserContext } from '../context/user'


const CompanyList = () => {

  const {companies} = useContext(UserContext)
  const renderCompanies = companies.map(company => <CompanyCard key={company.id} company={company}/>)

  return (
    <div>
      {renderCompanies}
    </div>
  )
}

export default CompanyList
