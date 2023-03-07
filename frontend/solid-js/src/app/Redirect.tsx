import { useNavigate } from "@solidjs/router";

type Props = {
  to: string;
};

export default function Redirect({ to }: Props) {
  const navigate = useNavigate();

  return <Navigate href={to} />;
}
