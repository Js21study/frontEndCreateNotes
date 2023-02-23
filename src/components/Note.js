import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {

    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');


    useEffect(()=> {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url" : noteURL })
            })
            .then(response => response.json())
            .then(response => {
                // console.log(response);
                if (response.result) {
                    setNoteText(response.note);
                    setLineClass('');
                    setErrorClass('hide');
                    setFormClass('hide');
                } 
                else if (!response.result) {
                    setLineClass('hide');
                    setErrorClass('');
                    setFormClass('hide');
                }
                
            })
        } 
        else {
            setLineClass('hide');
            setErrorClass('hide');
            setFormClass('');
        }
    }, [noteURL]);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;

        if (url === '') {
            alert('Заполните поля');
            return false;
            
        } 
        noteURL = url;
        window.location.href = env.url + url;
        
    }

    function searchNote() {
        window.location.href = env.url;
    }


  return (
    <div>
        <div className='m-2 p-2'>
            <div className={lineClass}>
                <h4 className='px-2'>Note: </h4>
                <div className='alert alert-success m-2 p-2'>{noteText}</div>
                <div><button  className='btn btn-outline-warning m-2 p-2' onClick={searchNote}>Смотреть еще один Note</button></div>
            </div>
        </div>

        <div className='m-2 p-2'>
            
            <div className={errorClass}>
                <div className='alert alert-danger m-2 p-2'>
                    <p>Произошла ошибка. Такой хеш не найден!</p> 
                    
                </div>
                <br /><br /><br /> <br />
            </div>
        </div>
         
        <div className='m-2 p-2 w-50 mx-auto'>
            <div className={formClass}>
                <form onSubmit={getNote}>
                    <label className='form-control m-2 p-2 bg-warning' htmlFor="url">Введите хеш заметки</label>
                    <input className='form-control m-2 p-2' type="text" id='url' name='url' />
                    <button type='submit' className='btn btn-outline-primary m-2 p-2'>Искать Note</button>
                </form>
            </div>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Note;