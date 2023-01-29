import { Link } from 'react-router-dom'
// import { ListDividers } from "../components/ListDividers";
import { Inputs } from "../components/Inputs";
import { styled } from '@mui/material/styles';
import React, { useState } from "react";
import '../index.css';

const Wrapper = styled('div')({
  padding: '0 1rem',
});

const DivBlock = styled('div')({
  display: 'block',
  'background-color': 'white',
  width: 'unset',
  padding: '1rem',
  margin: '1rem 0',
  'text-align': 'left',
});

export const Editor = () => {

  const [text, setText] = useState("");

  return (
    <>
      <Wrapper>
        <h1>Editor</h1>
      </Wrapper>
      <Inputs
        text={text}
        setText={setText}
      />
      <DivBlock>
        <Link to="/">
          TOP
        </Link>
      </DivBlock>
    </>
  );
};
