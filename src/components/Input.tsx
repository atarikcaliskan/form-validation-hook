import React from 'react';
import { RegisterType } from '../hooks/useForm';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	register: RegisterType;
}

export const Input: React.FC<InputProps> = ({ register, name, ...props }) => {
	return <input {...props} {...register(name)} />;
};
