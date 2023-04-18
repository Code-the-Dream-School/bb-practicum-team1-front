import React from 'react';

// Footer should include a copyright logo. If desktop or mobile only should include a disclaimer that it was designed as such. 
// Should be visible on every page
// Should always be at the very bottom of the page regardless of content length.

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>© 2023 ShelfShare</p>
            <div className='git-links'>
                <p>Follow Us on GitHub:</p>
                <div className='links-without'>
                    <a href="https://github.com/Manizha-khorram" target="_blank" rel="noreferrer" title='Manizha'><img src="https://ca.slack-edge.com/T07EHJ738-U03G77AKPFY-1878db5f4c82-512" alt="Manizha"/></a>
                    <a href="https://github.com/larasodjati" target="_blank" rel="noreferrer" title='Lara' ><img src="https://avatars.githubusercontent.com/u/108501073?v=4" alt="Lara"/></a>
                    <a href="https://github.com/Ekaterina-Bondareva" target="_blank" rel="noreferrer" title='Ekaterina'><img src="https://avatars.githubusercontent.com/u/107886514?v=4" alt="Kate"/></a>
                    <a href="https://github.com/cecerodrgz" target="_blank" rel="noreferrer" title='Cecilia'><img src="https://ca.slack-edge.com/T07EHJ738-U02V69WEB98-81e1d9faa462-512" alt="Cecilia"/></a>
                    <a href="https://github.com/SimonjShurety" target="_blank" rel="noreferrer" title='Simon'><img src="https://avatars.githubusercontent.com/u/102368650?v=4" alt="Simon"/></a>
                    <a href="https://github.com/koral14" target="_blank" rel="noreferrer" title='Olga'><img src="https://avatars.githubusercontent.com/u/105457134?v=4" alt="Olga"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;