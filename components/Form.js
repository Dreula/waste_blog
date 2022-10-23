import { useState, useReducer } from "react"
import { useMutation } from "react-query"
import { addEmail } from "../lib/helper"

const formReducer = (state, event) => {
    return{
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form(){
   const [phone, setPhone] = useState('0');
   const [formData, setFormData] =useReducer(formReducer, {})
   const addMutation = useMutation(addEmail,{
      onSuccess :()=>{
         alert("Email Sent Successful")
      }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length==0) return console.log("Dont Have Form Data");
        let { name, email, phone, message} = formData;

        const model = {
         name, email, phone, message
        }

        addMutation.mutate(model)
    }

    if(addMutation.isLoading) return <div className="text-xl font-bold text-yellow-500">Sending...</div>
    if(addMutation.isError) return <div message={addMutation.error.message}></div>
    if(addMutation.isSuccess) return <div className="text-xl font-bold text-rose-500">Email Sent!</div>

    return (
        <form onSubmit={handleSubmit}>
                     
        <div className='mb-6'>
           <input
              type="text"
              name="name"
              onChange={setFormData}
              placeholder="Your Name"
              className="
              w-full
              rounded
              py-3
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
            required
            />
        </div>
        <div className="mb-6"> 
        <input
           type="email"
           name="email"
           onChange={setFormData}
           placeholder="Your Email"
           className="
           w-full
           rounded
           py-3
           px-[14px]
           text-body-color text-base
           border border-[f0f0f0]
           outline-none
           focus-visible:shadow-none
           focus:border-primary
           "
           required
           />
        </div>
        <div className="mb-6">
        <input
           type="number"
           name="phone"
           defaultValue=" " 
           onChange={setFormData}
           placeholder="Your Phone (optional)"
           className="
           w-full
           rounded
           py-3
           px-[14px]
           text-body-color text-base
           border border-[f0f0f0]
           outline-none
           focus-visible:shadow-none
           focus:border-primary
           "
           onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
           />
        </div>
        <div className="mb-6">
           <textarea
              rows="3"
              name="message"
              onChange={setFormData}
              placeholder="Your Message"
              className="
              w-full
              rounded
              py-3
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              resize-none
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
              required
              ></textarea>
        </div>
        <div>
           <button
              type="submit"
              className="
              w-full
              text-white
              bg-green-600
              rounded
              border border-primary
              p-3
              transition
              hover:bg-opacity-90

              "
              >
           Send Message
           </button>
        </div>
  </form>
    )

}