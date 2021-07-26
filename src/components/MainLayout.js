import React from 'react';
import Header from '../components/others/header';


import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'


const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title }</title>
            <meta name = "description" content={ description } />
        </Helmet>
        <Header/>
        <main className="container" style={{marginBottom: '5%'}}>
            {children}
        </main>
        </>
     );
}
 
export default Layout;