import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

export const StyledPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const StyledFileInput = styled('div')({
  width: '97%',
  margin: '10px 0',
});

export const StyledButtonSubmit = styled('button')({
  marginBottom: 10,
});
