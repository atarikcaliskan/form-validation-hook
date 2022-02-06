import React from 'react';
import Nope from 'nope-validator';

import './App.css';
import { useForm } from './hooks/useForm';
import { Input } from './components/Input';

type FormInputs = {
	email: string;
	password: string;
};

const schema = Nope.object().shape({
	email: Nope.string().email('Email is invalid').required('Email is required'),
	password: Nope.string().required('Password is required.'),
});

function App() {
	// const { register, formState, handleSubmit } = useForm<FormInputs>({ resolver: nopeResolver(schema) });
	const { register, handleSubmit, errors } = useForm<FormInputs>({ schema });

	const onSubmit = (data: FormInputs) => {
		console.log({ email: data.email, password: data.password });
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="label">Email:</label>
				<input type="text" placeholder="Email" {...register('email')} />
				<p className="error">{errors.email?.message}</p>
				<label className="label">Password:</label>
				{/* <input type="password" placeholder="Password" {...register('password')} /> */}
				<Input type="password" name="password" placeholder="Password" register={register} />
				<p className="error">{errors.password?.message}</p>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
