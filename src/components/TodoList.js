import Todo from './Todo';

function TodoList({tasks, setTask}) {
  return (
    <table className="table table-stripped" style={{width: "600px"}}>
      <thead>
        <tr>
          <td style={{padding: "0"}}>
            <h3>TodoList</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        {tasks.map((item, index) => {
          return <Todo name={item.name} tasks={tasks} setTask={setTask} task={item} key={index} status={item.status} />
        })}
      </tbody>
    </table>
  )
}

export default TodoList