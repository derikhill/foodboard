import React, { useState } from 'react';
import { Button, Input, Select, Panel } from "@webeetle/windy";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const AddMealForm = () => {
  const [formData, setFormData] = useState({})
  const URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const requestObject = {
    method: 'POST',
    headers: {'Content-Type': 'text/plain'},
    body: formData
  }
  async function addMeal() {
    // const res = await fetch (
    //   `${URL}/meals`, requestObject
    // )
    // const json = await res.json();
  }

  return (
    <div className="m-8">
      <Panel layout="paper" className="p-8 md:p-16 w-full md:w-1/2 md:m-auto">
        <h1 className="text-3xl font-bold mb-8">Add A New Meal</h1>
        <form 
          className="flex flex-col justify-center space-y-9"
          onSubmit={ (e) => {
            e.preventDefault();
            addMeal() 
            }
          }
        >
          <label>Title
            <Input type="text" name="title" placeholder="Meal title" onChange={ handleChange } />
          </label>
          <label>Category
            <Select
              onSelect={ ({ value }) => { setFormData({"category": value })} }
              name="category"
              selected="Vegan"
              options= {[
                {label: "Pizza", value: "Pizza"},
                {label: "Breakfast", value: "Breakfast"},
                {label: "Burgers", value: "Burgers"},
                {label: "Vegan", value: "Vegan"},
              ]}
            />
          </label>
          <div className="flex flex-col">
            <label className="mb-1">Description</label>
            <textarea 
              label="label"
              name="description" 
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 ring-1 ring-gray-300 shadow-md px-3 py-2"
              onChange={ handleChange }
            >
            </textarea>
          </div>
          <Button shadow="md" className="justify-center">Submit</Button>
        </form>
      </Panel>
    </div>
  )
}

// export default withAuthenticationRequired(AddMealForm);
export default AddMealForm;
