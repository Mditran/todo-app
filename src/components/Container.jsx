import React, { useState } from "react";
import FormTodo from './FormTodo';
import TaskList from './TaskList';

const Container = () => {
    const [list, setList] = useState([]);

    const addItem = addItem => {
        setList([...list, addItem])
    };

    return (
        <div>
            <FormTodo addItem={addItem} />
            <TaskList list={list} setList={setList} />
        </div>
    );
}

//Sirve para exportar una sola cosa o una sola dependencia
export default Container;