import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" })
})

export function InputForm({ overlapping = false }: { overlapping?: boolean }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    })
    const onSubmit = () => {
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row gap-3 max-md:flex-col">
                <FormField
                    control={form.control}
                    name="email"

                    render={({ field }) => (
                        <FormItem className="mt-8">
                            <FormLabel className="text-white font-light">Get a magic link sent to your email</FormLabel>
                            <FormControl>
                                <Input placeholder={`${overlapping ? "Your email address" : "Email"}`} {...field} className={`bg-white ${overlapping ? "w-72" : "w-80 max-md:w-72"} h-[60px] rounded-xl focus-visible:ring-0`} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className={`${overlapping ? "-ml-[80px] shadow-none w-16" : "w-28 hover:bg-transparent hover:border-2 hover:border-white hover:text-white "} bg-white mt-[62px] max-md:mt-4 max-md:ml-auto  h-[60px] rounded-xl  text-[#4A43C4] `}>Send</Button>
            </form>
        </Form>
    )
}
