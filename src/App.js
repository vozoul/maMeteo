import React from "react"
import { init } from "@rematch/core"
import { Provider } from "react-redux"
import { app } from "Services/appModels"
import AppNavigation from "Services/Navigation/AppNavigation"

const store = init({
  models: { app }
})

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
