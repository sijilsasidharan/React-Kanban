import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { KanbanColumnContext } from "./../kanban-context/kanban-column.context";
import { HEX } from "@/types";
import { Button } from "@/components/ui/button";
import { CircleX, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { AddColumnFormSchema, LoginFormSchema } from "./AddColumnSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

interface ColumnFormProps {
  onClose: () => void;
}

const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

const ColumnForm: React.FC<ColumnFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState<HEX>("#00ff00");
  const { addColumn } = useContext(KanbanColumnContext);

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(AddColumnFormSchema),
    defaultValues: {
      name: "",
      color: "#00ff00",
    },
    mode: "onChange",
  });

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleAddColumn = (event: FormEvent) => {
    event.preventDefault();
    addColumn(name, color);
    onClose();
  };

  const handleColorChange = (value: HEX) => {
    if (hexRegex.test(value)) {
      setColor(value);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleAddColumn}>
        <label htmlFor="name">Name: </label>
        <Input
          ref={ref}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="name">Color: </label>
        <Input
          type="color"
          pattern={`${hexRegex}`}
          onChange={(event) => handleColorChange(event.target.value as HEX)}
        />
        <br />
        <Button
          type="submit"
          className="flex justify-between items-center gap-2"
          disabled={!name}
        >
          <Plus />
          <span>Add Column</span>
        </Button>
      </form>
    </Form>
  );
};

export default ColumnForm;
