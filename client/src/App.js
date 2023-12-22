import React from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { StyledAppBar, StyledTypography, StyledImage } from './styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    return (
        <Container maxWidth="lg">
            <StyledAppBar position="static" color="inherit">
                <StyledTypography variant="h2" align="center">Moments</StyledTypography>
                <StyledImage src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6AfJOf4nONPlkuCNyq0LyXStKnC7-tbj6E0gqx55Pv0YpIkfkW5W4_7IjdkVZxWoZClM&usqp=CAU'} alt="icon" height="60" />
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
