import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    asyncStorage,
    networking
} from "reactotron-react-native"
import { reactotron, reactotronRedux } from "reactotron-redux"

if(__DEV__) {
    Reactotron.configure({
        host: "localhost",
        name: "maMeteo"
    })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(reactotronRedux())
    .use(asyncStorage())
    .use(networking())
    .connect()

    console.tron = Reactotron
}