import './App.css'

import { useForm } from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  function onSubmit(data) {
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
        className= {errors.firstname ? 'input-error' : ""}
        {...register('firstname',
          {
          required:true,
          minLength:{value:3, message:'Min len at least 3'},
          maxLength:{value:6, message:"max length atmost 6"}
})} />
        
        {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
      </div>
      <br/>
      <div>
        <label>Middle Name:</label>
        <input {...register('middlename')} />
        {errors.middlename && <p>{errors.middlename.message}</p>}
      </div>
      <br/>
      <div>
        <label>Last Name:</label>
        <input {...register('lastname')} />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>
      <br/>
      <input type='submit' />
    </form>
  )
}

export default App
