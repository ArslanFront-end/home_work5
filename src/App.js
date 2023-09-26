import React, {useState} from 'react';


export default function App(props) {
    const [prototypeForm, setPrototypeForm] = useState({
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    })

    const stylesForUl = {
        margin: '0 auto',
        padding: '15px',
        borderRadius: '20px',
        background: 'orange',
        width: '200px'
    }

    const stylesForLi = {
        color: 'black',
        fontSize: '20px'

    }


    return (
        <>
            <ul style={{...stylesForUl}}>
                <li style={{...stylesForLi}}>{prototypeForm.key1}</li>
                <li style={{...stylesForLi}}>{prototypeForm.key2}</li>
                <li style={{...stylesForLi}}>{prototypeForm.key3}</li>
                <li style={{...stylesForLi}}>{prototypeForm.key4}</li>
            </ul>
        </>
    );
}
