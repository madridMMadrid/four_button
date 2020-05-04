import React, { Component } from 'react'
import ButtonList from './Buttons/ButtonList'
import Logs from './Logs/log'
import Context from './context'

function App() {

  const [button, setButton] = React.useState([
    { id: 1, title: 'Кнопка', disabled: false },
    { id: 2, title: 'Кнопка', disabled: false },
    { id: 3, title: 'Кнопка', disabled: false }
  ])

  const [logs, setLog] = React.useState([])


  const removeLog = () => {
    setLog([])
  }

  const disabledButton = (id) => {
    setButton(button.map(button => {
      // if (button.id === id) {
        button.disabled = !button.disabled
      // }
      return button
    }))
  }

 const addLog = title => {
    let timeout = title.id * 1000
    let time = Date.now()
    let date = new Date().toLocaleTimeString()
    let id = title.id
    let a = [{
      id: time,
      time: date,
      lastDate: new Date().toLocaleTimeString(),
      title,
      disabled: false
    }]

    disabledButton(id)
    setTimeout(() => {
      setLog(logs.concat(a))
      disabledButton(id)
    }, timeout);
  }

  return (
    <Context.Provider value={{ removeLog, addLog }}>
      <div className="wrapper">
        <ButtonList buttons={button} />
        {logs.length ? <Logs logs={logs} /> : 'Логи пустые'}
      </div>
    </Context.Provider>
  )
}

export default App ;
