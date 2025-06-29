
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import React from "react"

const items = [
    {
        id: "hiking",
        label: "Nature Tours",
    },
    {
        id: "home",
        label: "Adventure Tours",
    },
    {
        id: "applications",
        label: "Cultural Tours",
    },
    {
        id: "desktop",
        label: "Food Tours",
    },
    {
        id: "downloads",
        label: "City Tours",
    },
    {
        id: "documents",
        label: "Cruises Tours",
    },
] as const

const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
})

export function CheckboxField({ setContentSearch }: { setContentSearch: React.Dispatch<React.SetStateAction<string>> }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: [],
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem>
                            {items.map((item) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="items"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={item.id}
                                                className="flex flex-row items-center gap-2"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        className={cn(
                                                            "border-gray-400 data-[state=checked]:bg-primaryDesign data-[state=checked]:border-primaryDesign"
                                                        )} checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked) => {
                                                            setContentSearch(item.id || "")
                                                            return checked
                                                                ? field.onChange([...field.value, item.id])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== item.id
                                                                    )
                                                                )
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-sm font-normal">
                                                    {item.label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
