function InputForm({tasks, setTask, inputForm,setInputForm}) {

  function inputTextHandler(e) {
    setInputForm(e.target.value)
  }

  function buttonHandler(e) {
    const task = {"name": inputForm}
    setInputForm('')

    fetch("http://192.168.1.73:3000/tasks/", {method: "POST", headers: {"Content-Type": "application/json"},  body: JSON.stringify(task)})
      .then((res) => {
        res.json().then((body) => {
          task["id"] = body.id
        })
        task["status"] = 0
        setTask([
          ...tasks,
          task
        ])
      }).catch(() => {
        // TODO: Handle Api Rejects
      })
  }

  return (
    <div className="input-group" style={{marginBottom: "50px"}}>
      <input type="text" onChange={inputTextHandler} value={inputForm} className="form-control" placeholder="Write tasks ..." aria-describedby="add"/>
      <button onClick={buttonHandler} className="btn btn-outline-secondary" type="button" id="add">+</button>
    </div>
  )
}

export default InputForm