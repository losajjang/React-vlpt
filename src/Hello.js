import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <>
      <div style={{ color: color }}>
        {isSpecial ? <b>*</b> : null}
        {name}
      </div>
    </>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
