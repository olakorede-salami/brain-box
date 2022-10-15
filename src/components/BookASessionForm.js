import React from 'react'
import { useForm } from "react-hook-form";

function BookASessionForm() {

    const {register, handleSubmit} = useForm();

    // const onSubmit = data => console.log(data);

    return ( 
            <form 
                onSubmit={handleSubmit((data) => {
                console.log(data)
            })} className='book-a-session-form'>
                <h2>Fill in the infomation below</h2>
                <input type='text'  {...register("studentName")} placeholder='Name of Student' className='book-a-session-input' />
                <input type='text'  {...register("guardianName")} placeholder='Name of Guardian' className='book-a-session-input' />
                <input type='email'  {...register("email")} placeholder='Email Address' className='book-a-session-input' />
                <input type='tel'  {...register("tel")} placeholder='Contact Number' className='book-a-session-input' />
                <textarea type='text'  {...register("message")} placeholder='Notes' className='book-a-session-input' />
                <button type='submit' className='start-tuition'>Submit</button>
            </form>
     );
}

export default BookASessionForm;