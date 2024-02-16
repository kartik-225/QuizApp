import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import Registration from './components/Registration.jsx';
import { RouterProvider } from 'react-router';
import RegistrationCard from './components/RegistrationCard.jsx';
import Quiz from './components/Quiz.jsx';
import QuizReport from './components/QuizReport.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="" element={<RegistrationCard/>} />
            <Route path="quiz" element={<Quiz/>} />
            <Route path="quizReport" element={<QuizReport/>} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
