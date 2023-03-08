function Card(props) {
    return (
        <div class="card">
            <h2>Información del alumno:</h2>
            <p>Nombre: {props.nombre}</p>
            <p>Mail: {props.email}</p>
        </div>
    );
}
export default Card;
