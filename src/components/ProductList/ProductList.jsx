import React, { useState } from 'react';

import List1 from '../ui/List1';
import List2 from '../ui/List2';
import Button from '../common/Button';

import data from '../../assets/data/data';

function ProductList() {
    const [isGridLayout, setGridLayout] = useState(false);
    const handleDisplay = () => {
        setGridLayout(!isGridLayout)
    };

    return (
        <div className='mt-4'>
            <Button onClick={handleDisplay} size="medium" variant="primary" children= "Chuyển Layout"/>
            {isGridLayout ? <List1 products={data} /> : <List2 products={data} />}
        </div>
    );
}

export default ProductList;
