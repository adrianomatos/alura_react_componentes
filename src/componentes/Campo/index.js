import './campo.css'

// Posso colocar propriedade props com valores padrões se nãoforem informados
const Campo = ({ type="text", label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
      <div className={`campo campo-${type}`}>
        <label>{label}</label>

        <input
          type={type}
          value={valor}
          onChange={(evento) => aoAlterado(evento.target.value)}
          required={obrigatorio}
          placeholder={placeholder}
        />
      </div>
    );
}

export default Campo