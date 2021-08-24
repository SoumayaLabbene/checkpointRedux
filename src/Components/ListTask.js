import React from 'react';
import Task from './Task';
const ListTask = () => {
	const tasks = [
        {'id':"1",
        'description': "task 1",
          'isDone': true
        },
        {'id':"2",
        'description': "task 2",
          'isDone': false
        },
        {'id':"3",
        'description': "task 3",
          'isDone': false
        }
      ]

	return (
		<ul className='list-group'>
			{tasks.map((task) => (
				<Task id={task.id} description={task.description} completed={task.completed} />
			))}
		</ul>
	);
};

export default ListTask;

