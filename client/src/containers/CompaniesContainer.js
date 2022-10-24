import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import CompaniesList from '../components/CompaniesList'
import CompaniesForm from '../components/CompaniesForm'

const CompaniesContainer = () => {
    
  const {companies} = useContext(UserContext)

  return (
    <div>
      <h2>Add Companies Here: </h2>
      <CompaniesForm/>
      <h2>Companies Listed: </h2>
      <CompaniesList companies={companies}/>
    </div>
  )

}

export default CompaniesContainer
