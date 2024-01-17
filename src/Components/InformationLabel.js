import React, { useEffect, useState } from "react";

function InformationLabel({title ,Product}){

    return <div className='product-information'>
            <p className='description-text regular'>{title}</p>
            <p className='description-text strong'>{Product}</p>
        </div>
}
export default InformationLabel;