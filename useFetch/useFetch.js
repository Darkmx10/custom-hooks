import { useEffect, useState } from "react";


export const useFetch = (url) => { //<--acepta una URL como parámetro.

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({  //<--carga el state con sus valores iniciales pero el isLoading en true, antes de ejecutar el await que carga los datos
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url); //<--Realiza una solicitud fetch a la URL proporcionada.
        const data = await resp.json(); //<--Espera una respuesta y luego la convierte a JSON.

        setState({
            // data: data,  <-- es redundante y equivale a:
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {  //<--ejecuta un efecto secundario (en este caso, la función getFetch) después de que el componente se haya renderizado.

        getFetch();

    }, [url]) //<--el efecto se ejecutará cada vez que la URL cambie.

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}


//fetch:  proporciona una manera fácil y lógica de obtener recursos a través de la red, incluso en múltiples protocolos y dominios.
//Se utiliza principalmente para realizar solicitudes HTTP.

//Función Asíncrona: await sólo puede ser utilizado dentro de una función declarada con la palabra clave async.
//Una función asíncrona devuelve una promesa, lo cual permite el uso de await para esperar las promesas dentro de ella.

//Cuando colocas await antes de una promesa, hace que la ejecución de la función se pause hasta que la promesa sea resuelta o rechazada.
//Si la promesa es resuelta, la expresión await devuelve el valor resuelto. Si la promesa es rechazada, lanza un error, que puedes capturar usando try/catch.