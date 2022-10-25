import React, {useContext} from 'react'
import CompanyCard from './CompanyCard'
import { UserContext } from '../context/user'


const CompanyList = () => {

  const {companies} = useContext(UserContext)
  const renderCompanies = Companies.map(comany => <CompanyCard key={company.id} company={company}/>)

  return (





    <div>
      
    </div>
  )
}

export default CompanyList
