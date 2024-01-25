import { useState, useEffect } from "react";

// npx json-server --watch data/db.json --port 8000

// NOTE: custom hooks
const useFetch = (url) => {
    // NOTE: React hooks
    const [ data, setBlogs ] = useState(null);
    const [ isPending, setPending ] = useState(true);
    const [ errApi, setErrApi ] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("couldn't not fetch data from the resource.");
                }
                return res.json()
            })
            .then((data) => {
                setPending(false);
                setErrApi(null);
                setBlogs(data);
            })
            .catch((err) => {
                setPending(false);
                setErrApi(err.message);
                setBlogs(null);
            });
    }, [ url ]); // this fire when url changed 
    // [] for when component first rendered

    return { data, isPending, errApi }
};

export default useFetch;