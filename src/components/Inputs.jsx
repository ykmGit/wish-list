import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';

const ariaLabel = { 'aria-label': 'description' };

const Wrapper = styled('div')({
  bottom: '3rem',
  left: '0',
  position: 'fixed',
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
            <Input defaultValue="Hello world" inputProps={ariaLabel} /><br />
            <Input defaultValue="Hello world" inputProps={ariaLabel} /><br />
            <Input defaultValue="Hello world" inputProps={ariaLabel} /><br />
            <Input defaultValue="Hello world" inputProps={ariaLabel} /><br />
            {/* <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
      <Input defaultValue="Error" error inputProps={ariaLabel} /> */}
          </Box>
        </Memo>
      </Wrapper>
    </>

  );
}
