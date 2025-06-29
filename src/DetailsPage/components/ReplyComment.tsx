import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomFormField from "@/shared/reuseComponents/CustomFormField"
import { formSchema } from "@/shared/schema/schema"


function ReplyComment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      comment: ""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div>
      <h2>Leave a Reply</h2>
      <p className="mb-8">Your email address will not be published. Required fields are marked *</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="basis-1/2">
              <CustomFormField control={form.control}
                name="name" placeholder="Name" />
            </div>
            <div className="basis-1/2">
              <CustomFormField control={form.control}
                name="email" placeholder="Email" />
            </div>

          </div>
          <div>
            <CustomFormField control={form.control}
              name="title" placeholder="Title" />
          </div>
          <div>
            <CustomFormField control={form.control}
              name="comment" placeholder="Comment" as="textarea" />
          </div>
          <Button type="submit" className="mt-5 mb-12 w-[200px] h-[60px] text-white bg-secondaryDesign hover:bg-[#eb662be6] rounded-xl">Post Comment</Button>
        </form>
      </Form>

    </div>
  )
}

export default ReplyComment


