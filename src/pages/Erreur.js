//& Import "React" &//
import React, { Fragment } from 'react';
//& Import "Header", "Footer" &//
import Header from '../components/Header';
import Footer from '../components/Footer';

//! ------------------------------------------------------------------------------------------------------------------------------------------------------------------ !//

function Erreur() {
    return (
        <Fragment>
            < Header />
            <p>404 ERROR</p>
            < Footer />
        </Fragment>
    );
}

export default Erreur;