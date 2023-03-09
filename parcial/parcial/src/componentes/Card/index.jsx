export const Input = ({handlerChange}) => {
    return (
      <input
        id="color"
        name="color"
        onChange={handlerChange}
        placeholder="Ingresar color preferido"
    />
    )
  }