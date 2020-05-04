import React, {useContext} from 'react';

import PropTypes from 'prop-types'
import ButtonItem from './ButtonItem'
import Context from '../context'


const styles = {
  buttons: {
    margin: 0,
    padding: 0,
    display: 'flex'
  },
  div: {
    padding: '2px 3px',
    marginBottom: '.5rem'
  },
}

function ButtonList(props) {
  const { removeLog } = useContext(Context)

  return (
    <div style={styles.buttons}>
      {props.buttons.map((button, index) => {
        return (
          <ButtonItem
            button={button}
            key={button.id}
            index={index}
          />
        )
      })}
      <div style={styles.div}>
        <button className="rm" onClick={removeLog.bind(null, props.logs)}>Удалить</button>
      </div>
    </div>
  )
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//   acceptChange: PropTypes.func.isRequired

// }



export default ButtonList