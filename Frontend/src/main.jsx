import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { store } from './app/Store.jsx'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)
