import React, {useEffect, useState} from 'react';
import { apiKey, domainName, image } from '../../../utils/apiUrls';

export default function ProviderMedia({homePage, mediaType, id}) {
    // Hook that store the info of the providers.
    const [logoProvider, setLogoProvider] = useState(0);

    // Function that fetches info from api about streaming providers.
    function fetchProvider() {
        fetch(`${domainName}${mediaType}/${id}/watch/providers?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setLogoProvider(data.results.AR.flatrate[0].logo_path));
    }

    // Hook that trigger the fetchProvider once.
    useEffect(() => fetchProvider(), []);

    return (
        <div className='provider--company'>
            <div className='container--provider'>
                <img  className="provider--logo" src={`${image}${logoProvider}`} />
                <div className='redirecting--link'>
                    <p>Now streaming</p>
                    <a href={homePage}>Watch Now</a>
                </div>
            </div>
        </div>
    );
}