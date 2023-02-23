import React, {useState} from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [formClass, setFormClass] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    

    let sendData = (obj) => {

        setLineClass('');
        setFormClass('hide');
        

        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
        .then (response => response.json())
        .then (response => {
            // console.log(response);
            if (response.result) {
                setUrl(env.url + response.url)
            }

        })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === "") {
            alert("Заполните поле");
            return false;
        }
        sendData({"note" : note})
    }
  return (
    <div>
        <div className='m-2 p-2 w-50 mx-auto'>
        <form onSubmit={loadDataFromForm} className={formClass}>
            <label htmlFor="note" className='form-control p-2 m-2 bg-warning'>Введите заметку</label>
            <textarea name="note" id="note" defaultValue="note" className='form-control p-2 m-2 '></textarea>
            <button type='submit' className='btn btn-outline-primary p-2 m-2'>Создать</button>
        </form>
    </div>

    <div className='mb-3'>
            <div className={lineClass}>
                <div className='alert alert-primary p-2 m-2'>{url}</div>
                <div><button className='btn btn-warning p-2 m-2' onClick={function(){window.location.reload()}}>Создать еще один note</button></div>
                <br /> <br /> <br />  <br /> 
            </div>
            
        </div>


        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />  <br /> <br /> <br />
    </div>
  )
}

export default Create;