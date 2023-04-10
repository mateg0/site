import React from "react";

export default function Technolodgies() {
    return (
        <>
            <h1 className='text-center my-5'>Использованные технологии</h1>
            <div className='row row-cols-3 logos'>
                <div className='col h-75'> <img src="logo512.png" className='d-flex mx-auto h-100' alt="React" /> </div>
                <div className='col h-75'> <img src='Apache.webp' className='d-flex mx-auto h-100' alt='Apache' /></div>
                <div className='col h-75'> <img src='NodeJS.png' className='d-flex mx-auto h-100' alt='Node.js' /></div>
                <div className="col">
                    <div className='fs-3 text-center'>React</div>
                </div>
                <div className="col"><div className='fs-3 text-center'>Apache</div></div>
                <div className="col"><div className="fs-3 text-center">Node.js</div></div>
            </div>
        </>
    );
}