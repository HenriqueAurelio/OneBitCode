const setTagAsDone = async (element, id) => {
  try {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let body = JSON.stringify({ task: { done: element.checked } })
    let response = await fetch(`/tasks/${id}?_method=put`, {
      method: 'PUT',
      headers: headers,
      body: body,
    })
    let data = await response.json()
    let task = data.task
    let parent = element.parentNode
    if (task.done) {
      element.checked = true
      parent.classList.add('has-text-success')
      parent.classList.add('is-italic')
    } else {
      element.checked = false
      parent.classList.remove('has-text-success')
      parent.classList.remove('is-italic')
    }
  } catch (error) {
    alert('Erro ao atualizar a tarefa')
  }
}
