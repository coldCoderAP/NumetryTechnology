import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/comoponent/emp.css";

function emp() {
    const [employees, setEmployees] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", position: "", salary: "" });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get("http://localhost:5000/employees");
        setEmployees(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.name && form.email && form.position && form.salary) {
            await axios.post("http://localhost:5000/employees", form);
            setForm({ name: "", email: "", position: "", salary: "" });
            fetchEmployees();
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/employees/${id}`);
        fetchEmployees();
    };

    return (
        <div className="container">
            <h1>Employee Management System</h1>

            {/* Add Employee Form */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <input type="text" placeholder="Position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} required />
                <input type="number" placeholder="Salary" value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} required />
                <button type="submit">Add Employee</button>
            </form>

            {/* Employee List */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.position}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={() => handleDelete(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default emp;
