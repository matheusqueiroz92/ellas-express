import BackIcon from "../Icons/BackIcon";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`

interface ButtonBackProps {
  navigate: string
}

export function ButtonBack({navigate}: ButtonBackProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  }

  return (
    <Button
      onClick={handleNavigate}
    >
      <BackIcon/>
    </Button>
  )
}