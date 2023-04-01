import React from 'react';

const Cart = ({ times, texts }) => {

    // console.log(times)
    return (
        <div className='position-sticky top-0'>
            <p className='btn bg-transparent border border-3 fw-bold text-info border-info w-100'>Spent time on read : {times} min</p>
            <div className='card bg-secondary bg-opacity-25'>
                <p className='fw-bold'>Bookmarked Blogs : {texts.length}</p>
                {
                    texts.map(text => <p className='card bg-light'>{text}</p>)
                }
            </div>
        </div>
    );

};

export default Cart;