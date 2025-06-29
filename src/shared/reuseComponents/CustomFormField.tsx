import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Control, FieldValues, Path } from "react-hook-form";

type CustomFormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  as?: "input" | "textarea";
};

function CustomFormField<T extends FieldValues>({
  control,
  name,
  placeholder,
  as = "input",
}: CustomFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {as === "input" ? (
              <Input {...field} placeholder={placeholder} className="rounded-xl border border-[#E7E6E6] p-7 focus-visible:ring-0"/>
            ) : as === "textarea" ? (
              <Textarea {...field} placeholder={placeholder} className="rounded-xl border border-[#E7E6E6] h-[130px] p-7 resize-none focus-visible:ring-0" />
            ) : null}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;
