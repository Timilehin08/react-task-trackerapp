//import { useState } from 'react'
import { FaTimes/*,FaCheckCircle,FaPen*/ } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle/*, edit*/ }) => {
	/*const [showDiv,setShowDiv]=useState(false);
  const [text,setText]=useState('');
  const [date,setDate]=useState('');


  const show=()=>{
      setShowDiv(!showDiv);
      setText(task.text);
      setDate(task.date);
  }
  const save=(id)=>{
      setShowDiv(!showDiv);
      edit(id,text,date);*/
	return (
		<div className={`task ${task.reminder && 'reminder'}`} 
		onDoubleClick={() => 
		onToggle(task.id)}>
			<h3> {task.text} 
			<FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}/>
			</h3>
			<p>{task.day}</p>
		</div>
	)
}

export default Task
