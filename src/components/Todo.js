function Todo({ task, name, status, tasks, setTask }) {
    var statusCheck = (status === 1) ? "checked": ""
    console.log(status)

    function onCheckHandler() {
        var checked = task.status == 0 ? 1 : 0
        var updateData = {id : task.id, status: checked}
        fetch("http://192.168.1.73:3000/tasks/", {method: "PUT", headers: {"Content-Type": "application/json"},  body: JSON.stringify(updateData)})
            .then((res) => {
                const updatedItem = tasks.map((item) => {
                    if(item.id === task.id) {
                        return {...item, status: checked}
                    }
                    return item
                }) 
                console.log(updatedItem)
                setTask(updatedItem)
            }).catch(() => {
                // TODO: Handle Api Rejects
            })
    }

    function onDeleteHandler(e) {
        var deleteId = {id : task.id}
        fetch("http://192.168.1.73:3000/tasks/", {method: "DELETE", headers: {"Content-Type": "application/json"},  body: JSON.stringify(deleteId)})
            .then((res) => {
                const deletetedItem = tasks.filter((item) => !(item.id == task.id))
                setTask(deletetedItem)
            }).catch(() => {
                // TODO: Handle Api Rejects
            })
    }

    return(
        <tr>
            <td className="form-check ms-3">
                <input onChange={onCheckHandler} className="form-check-input" type="checkbox" value="" id="taskCheck" checked={statusCheck}/>
                <label className="form-check-label" >{name}</label>
                <button className="btn btn-outlined-secondary float-end" onClick={onDeleteHandler}><i className="icon bi-trash-fill"></i></button>
            </td>
        </tr>
    )    
}

export default Todo