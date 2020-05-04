import React from 'react'

const styles = {
  div: {
    padding: '2px 3px',
    marginBottom: '2px'
  },
}

function LogItem ({logs}) {

  return (
    <div style={styles.div}>
      <div>
        <ul>
          <li>{logs.time}</li>
          <li>{logs.title.id}</li>
          <li>{logs.lastDate}</li>
        </ul>
      </div>
    </div>
  )
}

export default LogItem