import { Link } from "react-router-dom";
import logo from '../assets/images/image1.jpg'
import '../assets/Pages.css'

export default function WelcomePage(props){
    return(
        <div className='Page'>
            <img src={logo} alt='' className='logo'></img>
            <h1>ZapRecall</h1>
            <Link to='/flashcards'><button className='button'>Iniciar Recall!</button></Link>
        </div>
    )
}