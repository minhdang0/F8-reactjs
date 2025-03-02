import React, { useState } from 'react';

import List1 from '../components/ui/List1';
import List2 from '../components/ui/List2';
import Button from '../components/common/Button';

import data from '../assets/data/data';

function ShopPage() {
    const [visiable, setVisiable] = useState(false);
    const handleDisplay = () => {
        setVisiable(!visiable);
    };

    return (
        <div>
            <Button onClick={handleDisplay} size="medium" variant="primary" children= "Chuyển Layout"/>
            {visiable ? <List1 products={data} /> : <List2 products={data} />}
        </div>
    );
}

export default ShopPage;
