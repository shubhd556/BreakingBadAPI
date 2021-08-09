import React from 'react'

function CharCard({item}) {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Date of Birth</strong> {item.birthday}
              </li>
              <li>
                <strong>Occupation:</strong> {item.occupation}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Seasons</strong> {item.appearance}
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharCard
