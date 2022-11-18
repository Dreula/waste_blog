import React, { useReducer } from "react"
import { addVolunteer } from '../lib/helper'
import { useMutation } from "react-query"

const formReducer = (state, event) => {
  return{
      ...state,
      [event.target.name]: event.target.value
  }
}

export default function FormVolunteer(){
    const [formData, setFormData] =useReducer(formReducer, {})

    const addMutation = useMutation(addVolunteer,{
        onSuccess :()=>{
           formData.name = ''
           formData.age = ''
           formData.address = ''
           formData.contact = ''
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.age < 18) {
            alert('Only 18years old and above can volunteer')
            return
        }

        if(Object.keys(formData).length==0) return console.log("Dont Have Form Data");
        let { name, age, address, contact} = formData;
    
        const model = {
         name, age, address, contact
        }
    
        addMutation.mutate(model)
      } 
    console.log(formData)

    if(addMutation.isLoading) return <div className="text-xl font-bold text-yellow-500">Sending...</div>
    if(addMutation.isError) return <div message={addMutation.error.message}></div>
    if(addMutation.isSuccess) return <div className="text-xl font-bold text-rose-500">Volunteer Application Sent!</div>

    return(
        <form onSubmit={handleSubmit} >
                    <span className='py-2 block'>Fill up the Form:</span>

                      <div className='grid gap-6 mb-6 md:grid-cols-2 border p-2'>
                          <div>
                              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                              <input 
                                  type="text" 
                                  id="name"
                                  name="name" 
                                  onChange={setFormData}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                  placeholder="John Doe" 
                                  required 
                              />
                          </div>
                          <div>
                              <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                              <input 
                                  type="number" 
                                  id="age"
                                  name="age" 
                                  onChange={setFormData}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                  placeholder="18+" 
                                  required 
                              />
                          </div>
                          <div>
                              <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
                              <input 
                                  type="text" 
                                  id="address"
                                  name="address" 
                                  onChange={setFormData}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                  placeholder="Las Pinas City" 
                                  required 
                              />
                          </div>  
                          <div>
                              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 ">Contact Information (Email or Number)</label>
                              <input 
                                  type="text" 
                                  id="contact" 
                                  name="contact"
                                  onChange={setFormData}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                  placeholder="09123... or johndoe@email.com" 
                                  required 
                              />
                          </div>
                          <div className="flex items-start mb-6">
                              <div className="flex items-center h-5">
                              <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                              </div>
                              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                          </div>
                          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-44 sm:w-auto px-5 py-2.5 text-center">
                              Submit
                          </button>
                        </div>
                    </form>
    )
}