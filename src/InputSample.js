import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    nam1e: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input onChange={onChange} name="name" placeholder="이름" value={name} />
      <input onChange={onChange} name="nickname" placeholder="닉네임" value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}  ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
