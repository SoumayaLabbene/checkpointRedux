import React, { useState } from 'react';

const AddTask = () => {
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
		<div style={{textAlign:'center'}}>
                <h1>Add Task</h1>
                </div>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add your task'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
<div style={{textAlign:'center'}}>
			<button type='submit' className='btn btn-outline-success mb-2'>
				Add
                </button>
                </div>
		</form>
	);
};

export default AddTask;