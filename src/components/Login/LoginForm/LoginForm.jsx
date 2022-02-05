import { Formik } from "formik"
import React from "react";

const LoginForm = (props) => {
	const submit = (values, { setSubmitting }) => {
		props.login(values.email, values.password, values.rememberMe);
		// setTimeout(() => {
		// alert(JSON.stringify(values, null, 2));
		setSubmitting(false);
		// }, 400);
	}
	return (
		<Formik
			initialValues={{ email: '', password: '', rememberMe: '' }}
			// validate={values => {
			// 	const errors = {};
			// 	if (!values.email) {
			// 		errors.email = 'Required';
			// 	} else if (
			// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			// 	) {
			// 		errors.email = 'Invalid email address';
			// 	}
			// 	return errors;
			// // }}
			// onSubmit={submit}
			onSubmit={submit}

		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							placeholder="email"
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/></div>
					{errors.email && touched.email && errors.email}
					<div>
						<input
							placeholder="password"
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/></div>
					{errors.password && touched.password && errors.password}
					<div>
						<input
							type="checkbox"
							name="rememberMe"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.rememberMe}
						/>remember me</div>
					<button type="submit" disabled={isSubmitting}>
						Login
					</button>
				</form>
			)}
		</Formik>
	)
}

export default LoginForm;