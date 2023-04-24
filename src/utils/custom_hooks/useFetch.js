import { useEffect, useState } from 'react';

const useFetch = (switchRoute) => {
    // It stores the carousel data movie fetched from the API, it stores singular data depended on what you want display.
    const [data, setData] = useState(undefined);
    const index = switchRoute.findIndex((element) => element.isSelected);
    const path = switchRoute[index].path;

    const fetchData = () => {
        fetch(path)
        .then(response => response.json())
        .then(data => setData(data));
    }

    // Fetches the data and then store that data.
    useEffect(() => fetchData(),[switchRoute]);

    return data;
}

export default useFetch;
