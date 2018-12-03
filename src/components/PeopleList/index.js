import React from 'react'
import ContactUser from '../ContactUser'
import style from './index.module.css'

const PeopleList = ({ people, onRemove, onSelect }) => (
  people.length > 0 ? (
    <div className={style.component}>
      <h3>People</h3>
      <wrapper->
        {people.map(
          user => ContactUser({ user, onRemove, onSelect })
        )}
      </wrapper->
    </div>
  ) : null
)

export default PeopleList
