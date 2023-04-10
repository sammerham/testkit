import React, { useState } from 'react';
import { AhiInput } from '@azaleahealth/azalea-kit-ui/dist/react';

const Form = () => {
  const initialState = {
    username: '',
    password: '',
    test: ''
  };
  const [formData, setFormData] = useState(initialState);

  //handle form change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  console.log(formData);

  return (
    <form>
      <input type="text" name="test" value={formData.test} placeholder="test" onChange={handleChange} />
      <AhiInput
        type="text"
        label="UserName"
        name="username"
        placeholder="UserName"
        value={formData.username}
        onChange={handleChange}
      />

      <AhiInput
        value={formData.password}
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;