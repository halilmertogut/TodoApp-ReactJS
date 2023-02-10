import { useState } from 'react';



function TodoCreate({ onCreate }) {

    const [txt, setTxt] = useState('');

    const handleChange = (event) => {
        setTxt(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(txt);
        setTxt('');
    }

    return (
    <div className="book-create">
        <form onSubmit={handleSubmit}>
            <label style={{fontWeight:'bold',color:'white',marginBottom:'20px'}}>What to do?</label>
            <input className="input is-rounded is-info" value={txt} onChange={handleChange} />
            <button className="button is-black is-rounded">Enter</button>
        </form>
    </div>
    );
}


export default TodoCreate;