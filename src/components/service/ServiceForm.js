import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

  const [service, setService] = useState({})

  function submit(e) {
    // Escopo
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChane(e) {
    // Escopo
    setService({...service, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChane}
      />
      <Input
        type="number"
        text="Custo do Serviço"
        name="cost"
        placeholder="Insira o Valor Total"
        handleOnChange={handleChane}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descreva o Serviço"
        handleOnChange={handleChane}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}
export default ServiceForm