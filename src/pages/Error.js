import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
  <Wrapper>
  <div>
    <h1>Error 404</h1>
    <h3>sorry, this page does not exist</h3>
    <Link to='/' className='btn'>
      Return To Home
    </Link>
  </div>
</Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: #e3afbc;
    margin-bottom: 1.5rem;
  }
`;
export default Error;
