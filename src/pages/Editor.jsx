import { Link } from 'react-router-dom'
// import { ListDividers } from "../components/ListDividers";
import { Inputs } from "../components/Inputs";
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')({
  bottom: '3rem',
  left: '0',
  position: 'fixed',
  right: '0',
  top: '3rem',
  padding: '0 1rem',
  // overflow-y: 'scroll',
});

const DivBlock = styled('div')({
  display: 'block',
  'background-color': 'white',
  border: '1px solid gray',
  width: '100%',
  padding: '1rem',
  margin: '1rem 0',
  'text-align': 'left',
  // 'max-width':
});

export const Editor = () => {
  return (
    <>
      <div>
        <h1>Editor</h1>
      </div>
      {/* <ListDividers /> */}
      <Wrapper>
        <DivBlock>
          <Link to="/">
            TOP
          </Link>
        </DivBlock>
      </Wrapper>
      <Inputs />
    </>
  );
};
