import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    let [contador, setContador] = useState(5);

    useEffect(() => {
        const parar = setTimeout(() => {
            setContador(--contador)
        }, 1000)

        
        setTimeout(() => {
            navigate('/');
        }, 5000)
        return () => {
            clearTimeout(parar)
        }
    });

    return (
        <>
            <h2>Redirecionando em {contador} segundos</h2>
            <img src="https://http.cat/404" alt="404 Cat" />
        </>
    )
}

export default NotFound;