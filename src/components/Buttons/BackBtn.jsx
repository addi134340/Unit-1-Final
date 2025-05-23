import { useNavigate } from 'react-router-dom';
import '../../html-css/BackBtn.css'

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(-1)}>
             ←
        </button>
    );
}