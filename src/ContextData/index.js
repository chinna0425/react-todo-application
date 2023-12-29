import React from 'react'

const ContextValue = React.createContext({
  listOfToDos: [],
  addToStorage: () => {},
})

export default ContextValue
