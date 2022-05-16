
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import WelcomePage from './Components/WelcomePage';
import FlashCards from './Components/FlashCards'
import './assets/reset.css'
import './assets/styles.css'
import './assets/Pages.css'

export default function App(){
    
    return (
        <div>
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/flashcards" element={<FlashCards/>}/>
			</Routes>
		</BrowserRouter>
        </div>
    
    )
}