import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import { useDispatch } from 'react-redux';

import Icon from './icon';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	// const dispatch = useDispatch();

	const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleSubmit = () => {

	}

	const handleChange = () => {

	}

	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
		handleShowPassword(false);
	}

	const googleSuccess = async (res) => {
		console.log(res);
		// const result = res?.profileObj;
		// const token = res?.tokenId;

		// try {
		// 	dispatch({ type: 'AUTH', data: { result, token } });
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	const googleFailure = (error) => {
		console.log(error);
		console.log('Google Sign In was unsuccessfull, try again later');
	}

	return(
	 <Container component='main' maxWidth='xs'>
	 	<Paper className={classes.paper} elevation={3}>
	 		<Avatar className={classes.avatar}>
	 			<LockOutLinedIcon />
	 		</Avatar>
	 		<Typography variant='h5'>
	 			{isSignup ? 'Sign Up' : 'Sign In'}
	 		</Typography>
	 		<form className={classes.form} onSubmit={handleSubmit}>
	 			<Grid container spacing={2}>
	 				{
	 					isSignup && (
	 					 <>
	 					 		<Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
	 					 		<Input name='firstName' label='First Name' handleChange={handleChange} half />
	 					 </>
	 					)
	 				}
	 				<Input name='email' label='Email Address' handleChange={handleChange} type='email' />
	 				<Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
	 				{ isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
	 			</Grid>
	 			<Button className={classes.submit} type='submit' fullWidth variant='contained' color='primary'>
	 				{ isSignup ? 'Sign Up' : 'Sign In' }
	 			</Button>
	 			<GoogleOAuthProvider>
	 			<GoogleLogin
	 				clientId='858538264989-9smqm9ei0hsj6gokadg03vmm2qavs50c.apps.googleusercontent.com'
	 				render={(renderProps) => (
	 					<Button
	 					className={classes.googleButton}
	 					color='primary'
	 					fullWidth
	 					onClick={renderProps.onClick}
	 					disabled={renderProps.disabled}
	 					startIcon={<Icon />}
	 					variant='contained'

	 				>
	 					{ isSignup ? 'Google Sign Up' : 'Google Sign In'}
	 					</Button>
	 				)}
	 				onSuccess = { googleSuccess }
	 				onFailure = { googleFailure }
	 				cookiePolicy = 'single_host_origin'
	 			/>
	 			</GoogleOAuthProvider>
	 			<Grid container justifyContent='flex-end'>
	 				<Grid item>
	 					<Button onClick={switchMode}>
	 						{ isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
	 					</Button>
	 				</Grid>
	 			</Grid>
	 		</form>
	 	</Paper>
	 	
	 </Container>

	)
}

export default Auth;