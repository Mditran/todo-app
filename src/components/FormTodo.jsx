import React, { useState } from "react";

//Los props son de solo lectura
//Es el estado de la pagina y solo se puede leer
const FormTodo = props => {
    const [description, setDescription] = useState("");

    const { addItem } = props;

    //El e toma la forma del que lo llama, en este casi es la etiqueta form
    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);

        addItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });

        setDescription("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input type="text"
                        className="text"
                        value={description}
                        //e = elemento actual, se hace referencia a si mismo
                        onChange={e => setDescription(e.target.value)} />
                    <button className="button pink"
                        disabled={description ? "" : "disabled"}
                    /* 
                        Lo mismo:
                        if(descrption == ""){
                            disabled = "disables"
                        }else{
                            disabled=""
                        }
                    */
                    >
                        Agregar Tarea
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormTodo;