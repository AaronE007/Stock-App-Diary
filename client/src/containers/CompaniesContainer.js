import React, {useContext} from 'react'
import { UserContext } from '../context/user'
import CompaniesList from '../components/CompaniesList'

const CompaniesContainer = () => {
    
  const {companies} = useContext(UserContext)

  return (
    <div>
      <h2>Companies</h2>
      <CompaniesList companies={companies}/>
    </div>
  )

}

export default CompaniesContainer
