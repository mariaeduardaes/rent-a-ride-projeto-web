const get = () =>
  fetch("reserva/listar", { method: "GET" }).then((response) =>
    response.json()
  );

export { get };
