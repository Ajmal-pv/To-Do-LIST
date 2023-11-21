import './App.css';
import { useState } from 'react';

function App() {
  const [Todos, setTodos] = useState([]);
  const [Todo, setTodo] = useState('');
  const [editId, setEditId] = useState(null);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>whoops It's Tuesday</h2>
      </div>
      <div className="input">
        <input
          value={Todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos([...Todos, { id: Date.now(), text: Todo, status: false }]);
            setTodo('');
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {Todos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              {editId === obj.id ? (
                <input
                  value={obj.text}
                  onChange={(e) => {
                    setTodos(
                      Todos.map((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.text = e.target.value;
                        }
                        return obj2;
                      })
                    );
                  }}
                  type="text"
                  placeholder="🖊️ Edit item..."
                />
              ) : (
                <>
                  <input
                    value={obj.status}
                    onChange={(e) => {
                      setTodos(
                        Todos.map((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </>
              )}
            </div>
            <div className="right">
              {editId === obj.id ? (
                <i
                  onClick={() => {
                    setEditId(null);
                  }}
                  className="fas fa-check"
                ></i>
              ) : (
                <>
                  <i
                    onClick={() => {
                      setEditId(obj.id);
                    }}
                    className="fas fa-edit"
                  ></i>
                  <i
                    onClick={() => {
                      setTodos(Todos.filter((obj2) => obj2.id !== obj.id));
                    }}
                    className="fas fa-times"
                  ></i>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
