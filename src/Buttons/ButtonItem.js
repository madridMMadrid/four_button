import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  div: {
    padding: '2px 3px',
    marginBottom: '.5rem'
  },
}

const onClick = event => {
  setTimeout(() => {

    return [{
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      lastDate: new Date().toLocaleTimeString(),
      title: 'jhjh',
      disabled: false
    }]
  }, 1000)
}

const AddLog = ({ button, index }) => {
  const { addLog } = useContext(Context)
  return (
    <div style={styles.div}>
      {/* <button disabled={button.disabled}  className="rm" onClick={addLog.bind(null, button)}>{button.title} {++index}</button> */}
      <button disabled={button.disabled} className="rm" onClick={() => onClick()}>{button.title} {++index}</button>
    </div>
  )
}

// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   i: PropTypes.number,
//   backChangeApp: PropTypes.func.isRequired
// }

export default AddLog