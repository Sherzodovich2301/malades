import { useEffect } from "react"
import { useState } from "react"


export  function UseFetchHook(url) {

    const [api, setApi] = useState(null)

    useEffect(()=>{
        const FetchApi = async() => {
            const request = await fetch(url);
            const response = await request.json();
            setApi(response)
            console.log(response);
            
        }
        FetchApi()
    }, [])

  return{ api }
}
