import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../src/App.css";
import Axios from "axios";
import "bootstrap-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Navbar from "./components/Navbar";
import Swal from "sweetalert2";
import Footer from "./components/Footer";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [item, setItem] = useState("");
  const [precio, setPrecio] = useState(0);

  const [id, setId] = useState(0);

  const [actualizar, setActualizar] = useState(false);
  const [clientes, setClientes] = useState([]);

  //opciones de select
  const options = [
    { value: "Anis Cartujo", label: "Anis Cartujo" },
    { value: "5 Estrellas", label: "5 Estrellas" },
    { value: "Mal Portada", label: "Mal Portada" },
    { value: "Cervezas", label: "Cervezas" },
  ];

  const valueSelect = (selected) => {
    setItem(selected.value);
  };

  const add = () => {
    Axios.post("http://localhost:8000/blogs", {
      nombre: nombre,
      item: item,
      precio: precio,
    })
      .then(() => {
        Swal.fire({
          title: "Registred",
          text: "seccessfully registred",
          icon: "success",
          timer: 3000,
        });
        mostarClientes();
        limpiarCampos();
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: JSON.parse(JSON.stringify(error)).message,
        });
      });
  };

  const eliminarCliente = (val) => {
    Swal.fire({
      title: "¿Seguro?",
      text: "No podrás deshacer esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:8000/blogs/${val.id}`)
          .then(() => {
            Swal.fire(
              "Eliminado",
              "El blog se eliminó correctamente",
              "success"
            );
            mostarClientes();
            limpiarCampos();
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: JSON.parse(JSON.stringify(error)).message,
            });
          });
      }
    });
  };

  const actualizarClientes = () => {
    Axios.put(`http://localhost:8000/blogs/${id}`, {
      nombre: nombre,
      item: item,
      precio: precio,
    })
      .then(() => {
        Swal.fire({
          title: "Updated!",
          text: "successfully updated!",
          icon: "success",
        });
        mostarClientes();
        setActualizar(false);
        limpiarCampos();
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: JSON.parse(JSON.stringify(error)).message,
        });
      });
  };

  const mostarClientes = () => {
    Axios.get("http://localhost:8000/blogs").then((response) => {
      setClientes(response.data);
    });
  };

  const editar = (val) => {
    setActualizar(true);

    setNombre(val.nombre);
    setItem(val.item);
    setPrecio(val.precio);
    setId(val.id);
  };

  const limpiarCampos = () => {
    setNombre("");
    setItem("");
    setPrecio("");
  };

  useEffect(() => {
    mostarClientes();
  }, []);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container card text-center mt-1 w-50">
          <div className="card-header">Gestion de clientes</div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre:
              </span>
              <input
                value={nombre}
                type="text"
                className="form-control"
                placeholder="Ingrese un nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
              />
            </div>
            <Select
              value={item}
              options={options}
              onChange={valueSelect}
              className="select mb-3"
            />

            <div className="input-group">
              <input
                value={precio}
                type="number"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={(event) => {
                  setPrecio(event.target.value);
                }}
              />
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
          </div>
          <div className="card-footer text-muted">
            {actualizar ? (
              <div>
                <button
                  className="btn btn-warning m-2"
                  onClick={() => {
                    actualizarClientes();
                  }}
                >
                  Actualizar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setActualizar(false);
                    limpiarCampos();
                  }}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button className="btn btn-success" onClick={add}>
                Registrar
              </button>
            )}
          </div>
        </div>
        <table className="container table table-striped mt-1 w-50">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Fecha</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((val, key) => {
              return (
                <tr key={val.id}>
                  <th scope="row">{key + 1}</th>
                  <td>{val.nombre}</td>
                  <td>{val.item}</td>
                  <td>{val.precio}</td>
                  <td>{val.updatedAt}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          editar(val);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          eliminarCliente(val);
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
}
