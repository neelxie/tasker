import React, { useState} from 'react'

export const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input  type='text' value={text} onChange={(e) => setText(e.target.value)}placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input  type='text' placeholder='Add Day & Time'/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input  type='checkbox' />
            </div>
            <input type='submit' className='btn btn-block'value='Add Task'/>
        </form>
    )
}
