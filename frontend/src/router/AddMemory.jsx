import axios from "axios"

import { useState } from "react"

import "./AddMemory.css"



const AddMemory = () => {
  return (
    <div className="add-memory-page">
      <h2>Crie uma nova memória</h2>
      <form>
        <label>
            <p>Título:</p>
            <input type="text" placeholder="Defina um título" name="title" />
        </label>
        <label>
            <p>Descrição:</p>
            <textarea name="description" placeholder="Explique o que aconteceu..."></textarea>
        </label>
        <label>
            <p>Foto:</p>
            <input type="file" name="image" />
        </label>
        <input type="submit" className="btn" value="Enviar" />
      </form>
    </div>
  )
}

export default AddMemory
