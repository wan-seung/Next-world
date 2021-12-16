import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../components/store";
import { todoDelete, todoCreate } from "../components/todo";

// export const getServerSideProps = wrapper.getServerSideProps()

const TodoList = () => {
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.list);
  console.log(initialState);
  // const state = useSelector(state => state.)
  const [input, setInput] = useState("");

  const checkId = () => {
    return initialState.length;
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const addItem = () => {
    dispatch(todoCreate({ title: input, id: checkId() }));
  };

  const deleteItem = (item) => {
    const { title, id } = item;

    dispatch(todoDelete({ title, id }));
  };

  return (
    <>
      <Link href="/">
        <button type="button">홈으로</button>
      </Link>
      <div>
        <input type="text" onChange={handleInput} value={input}></input>
        <button type="button" onClick={addItem}>
          추가하기
        </button>
      </div>
      <div>
        {initialState &&
          initialState.map((todo) => (
            <div key={todo.id}>
              <Item
                id={todo.id}
                title={todo.title}
                data={todo}
                deleteItem={deleteItem}
              ></Item>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;

const Item = ({ key, id, title, data, deleteItem }) => {
  return (
    <div style={{ marginTop: "50px", display: "flex" }} id={key}>
      순서 : {id}
      <h1>{title}</h1>
      <button
        type="button"
        onClick={() => {
          deleteItem(data);
        }}
      >
        삭제
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { todoList: state.todoLIst };
// };
