import React, { useState } from 'react';
import { AhiInput, onAhiChange } from '@azaleahealth/azalea-kit-ui/dist/react';

const Form = () => {
  const initialState = {
    username: '',
    password: '',
    test: ''
  };
  const [formData, setFormData] = useState(initialState);
  const [value, setValue] = useState("");

  //handle form change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
    console.log(formData);
  };
  const handle = e=> {
    setValue(e.target.value)
    console.log('value--->>', value)


  }
console.log('value--->>', value)
  return (
    <form>
      <input type="text" 
      name="test" 
      value={formData.test} 
      placeholder="test" 
      onChange={handleChange} 
      />

      <AhiInput
        type="text"
        name="userName"
        label="UserName"
        placeholder="userName"
        value={formData.username}
        onAhiChange={handleChange}
      />

      <AhiInput
        type="password"
        name="password"
        value={formData.password}
        label="Password"
        placeholder="Password"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;