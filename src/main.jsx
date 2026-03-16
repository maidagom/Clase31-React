import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './_App.jsx'

createRoot(document.querySelector('#root')).render(<><App /></>,)
