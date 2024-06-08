import styles from './CheckListDesafios.module.css'
import  { useState } from 'react';
import { Checkbox, ConfigProvider } from 'antd';

export const CheckListDesafios = () =>{
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: false },
        { id: 3, name: 'Task 3', completed: false }
      ]);
    
      const handleTaskChange = (taskId) => {
        setTasks(tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed }; 
          }
          return task;
        }));
      };
    
      return (
        <div className={styles.container}>
          <ConfigProvider
            theme={{
              token: {
                colorBorder: '#f2b66d', 
                colorPrimary: '#f2b66d', 
                colorPrimaryHover: 'rgba(242, 182, 109, 0.5)', 
              },
            }}
          >
            {tasks.map(task => (
              <div key={task.id} className={styles.bloco}>
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleTaskChange(task.id)}
                  className={styles.check}
                >
                  {task.name}
                </Checkbox>
              </div>
            ))}
          </ConfigProvider>
        </div>

    )
}