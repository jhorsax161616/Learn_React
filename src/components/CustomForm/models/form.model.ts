import { z } from "zod"

export const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio!").max(20),
  email: z.string().email("Correo inválido!!").min(1, "El correo es obligatorio!"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres!"),
  confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres!"),
}).refine(data => data.password === data.confirmPassword, { // Refinamos el esquema para que la contraseña y la confirmación sean iguales
  message: "Las contraseñas no coinciden!",
  path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>