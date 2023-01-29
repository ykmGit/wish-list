// import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import React, { useState } from "react";

// const ariaLabel = { 'aria-label': 'description' };
// const { useState, useEffect } = React

const Wrapper = styled('div')({
  bottom: '3rem',
  left: '0',
  // position: 'fixed',
  right: '0',
  top: '10rem',
  padding: '0 1rem',
  // overflow-y: 'scroll',
});

const Memo = styled('button')({
  display: 'block',
  'background-color': 'white',
  border: '1px solid gray',
  width: '100%',
  padding: '1rem',
  margin: '1rem 0',
  'text-align': 'left',
});

// const MemoTitle = styled('div')({
//   'font-size': '1rem',
//   'margin-bottom': '0.5rem',
// });

// const MemoText = styled('div')({
//   'font-size': '0.85rem',
//   overflow: 'hidden',
//   'text-overflow': 'ellipsis',
//   'white-space': 'nowrap',
// });

export const Inputs = () => {

  const [text, setText] = useState("");
  // const [value, setValue] = useState(0)
  // const print = () => {
  //   setText(100)
  //   console.log('print')
  // }

  return (
    <>
      <Wrapper>
        <Memo>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Input onChange={(event) => setText(event.target.value)} /><p>{text}</p><br />
            {/* <Input placeholder="Placeholder" inputProps={ariaLabel} />
            <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
            <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
          </Box>
        </Memo>
      </Wrapper>
    </>

  );
}
