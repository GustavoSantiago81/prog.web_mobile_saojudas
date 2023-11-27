function carregarTarefas() {

    const selectedDepartmentId = document.querySelector(
      '#selectDepartments',
    ).value 
 
    console.log("id")
    console.log(selectedDepartmentId)
 
    axios
      .get(
        `https://b24-4qk6uy.bitrix24.com.br/rest/1/1yt2djsnutdogdar/task.item.list.json`,
      )
      .then((response) => {
 
       const tarefasFiltradas = response.data.result.filter((task) => {
         return task.GROUP_ID == +selectedDepartmentId + 1
       })
 
       console.log("tarefas")
       console.log(tarefasFiltradas)
 
       const nomesSemRepeticao = tarefasFiltradas.filter((funciHor)=> {
         console.log("id do f")
         console.log(tarefasFiltradas.RESPONSIBLE_ID)
       })
        const tabelaBitrix24 = document.querySelector(
          '#tabelaBitrix24 tbody',
        )
        tabelaBitrix24.innerHTML = '' // Limpar as linhas existentes na tabela
 
        tarefasFiltradas.forEach((task) => {
          const tr = document.createElement('tr')
 
          const tdFuncionario = document.createElement('td')
          tdFuncionario.textContent =
            task.RESPONSIBLE_NAME + ' ' + task.RESPONSIBLE_LAST_NAME
 
          const tdIdTarefa = document.createElement('td')
          tdIdTarefa.textContent = task.ID
 
          const tdTempoDecorrido = document.createElement('td')
          tdTempoDecorrido.textContent =
            task.TIME_SPENT_IN_LOGS +
            ' minutos' +
            ' ' +
            (task.TIME_SPENT_IN_LOGS / 60 + ' horas')
 
          tr.appendChild(tdFuncionario)
          tr.appendChild(tdIdTarefa)
          tr.appendChild(tdTempoDecorrido)
 
          tabelaBitrix24.appendChild(tr)
        })
 
        console.log(response.data.result)
        console.log(tarefasFiltradas)
      })
      .catch((error) => {
        console.error(error)
      })
  }