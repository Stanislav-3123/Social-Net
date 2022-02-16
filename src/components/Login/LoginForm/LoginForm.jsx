import { Formik } from "formik"
import React from "react";

const LoginForm = ({ login }) => {
	const submit = (values, { setSubmitting }) => {
		login(values.email, values.password, values.rememberMe);
		setSubmitting(false);
	}
	return (
		<Formik
			initialValues={{ email: '', password: '', rememberMe: '' }}
			onSubmit={submit}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting
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