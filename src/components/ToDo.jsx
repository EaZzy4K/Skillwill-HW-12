import React from 'react';

const ToDo = ({ taskId, taskName, finishedId, finishedName, finishTask, removeUnfinishedTask, removeFinishedTask}) => {
  return (
    <div className="container">
      <div className="column">
        <h3>To be done</h3>
        <div className="unfinished-tasks">
          <p>Quest number: {taskId}</p>
          <p>Quest: {taskName}</p>
          <button className="finishBtn" onClick={() => finishTask(taskId)}>Finish Task</button>
          <button className='removeBtn' onClick={() => removeUnfinishedTask(taskId)}>Remove</button>
        </div>
      </div>
      <div className="column">
        <h3>Finished tasks</h3>
        <div className="finished-tasks">
          <p>Quest number: {finishedId}</p>
          <p>Quest: {finishedName}</p>
          <button onClick={() => removeFinishedTask(finishedId)}>Remove Finished Task</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
