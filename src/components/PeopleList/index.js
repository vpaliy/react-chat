import React from 'react'
import ContactUser from '../ContactUser'
import style from './index.module.css'

const PeopleList = ({ people, onRemove, onSelect }) => (
  <div className={style.component}>
    <h3>People</h3>
    {people.length > 0 ? (
      <wrapper->
        {people
          .map(user => ContactUser({
             user, onRemove, onSelect
           }))}
      </wrapper->
    ) : ( null )}
  </div>
)

export default PeopleList
