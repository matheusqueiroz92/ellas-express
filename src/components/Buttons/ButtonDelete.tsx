import { DeleteIcon } from "../Icons/DeleteIcon";

interface ButtonDeleteProps {
  productId: string,
  handleDelete(id: string): void,
}

export function ButtonDelete({productId, handleDelete}: ButtonDeleteProps) {
  return (
    <button
      aria-label="deletar"
      onClick={() => handleDelete(productId)}
    >
      <DeleteIcon/>
    </button>
  )
}