import React from 'react';
import LogsItem from './LogsItem'
import PropTypes from 'prop-types'

const styles = {
  log: {
    margin: 0,
    padding: 0,
    width: '100%',
    border: '1px solid #ccc',
    minHeight: '300px'
  }
}
function Logs(props) {

  return (
    <div style={styles.log}>
      {props.logs.map((logs, index) => {
        return (
          <LogsItem
            logs={logs}
            key={logs.time + index}
            index={index}
          />
        )
      })}
    </div>
  )
}



export default Logs