import { MapPin, Search } from "lucide-react";
import { Input } from "./components/internal";

export const App = () => (
  <Input.Root>
    <Input.Icon icon={MapPin} />
    <Input.Field type="text" placeholder="Digite aqui" />
    <Input.Icon icon={Search} />
  </Input.Root>
);
