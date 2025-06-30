import React from 'react'
import CompanyProfile from './CompanyProfile'
import ContractLists from './ContractLists'

export default function ProfileTeam() {
  return (
    <div className='flex flex-col space-y-6'>
        <CompanyProfile />
        <ContractLists />
    </div>
  )
}
