import React, { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input
            style={{ padding: 10, margin: 10 }}
            type="text"
            placeholder="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
        /><br />
        <input
            style={{ padding: 10, margin: 10 }}
            type="text"
            placeholder="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
        /><br />

        <button
            style={{ padding: 10, margin: 10 }}
            onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description
                    })
                }).then(async function (res) {
                    const json = await res.json();
                    alert("to do added");
                });
            }}
        > Add a Todo</button>

    </div>
}
//rather than using module .exports we directly use the export