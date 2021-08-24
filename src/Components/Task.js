import React from 'react';

const Task= ({ id, description, isDone }) => {
	return (
		<li className={`list-group-item ${isDone && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={isDone}></input> 
					   {description}
				</span>
				<button className='btn btn-outline-danger'>Delete</button>
			</div>
		</li>
	);
};
export default Task;