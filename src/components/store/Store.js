import React from 'react';
import Layout from '../MainLayout';

import StoreGrid from './StoreGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1>KFC DUONG BA TRAC</h1>
                    
                    <p>Address:105 DUONG BA TRAC,P1,Q8,TPHCM</p>
                </div>
                <StoreGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;