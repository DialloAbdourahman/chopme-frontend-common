import { z } from "zod";

export const createClientSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),

  email: z.email("Enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
      "Password must contain uppercase, lowercase, number and special character",
    ),
});

export type CreateClientDto = z.infer<typeof createClientSchema>;

// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// import {
//   createClientSchema,
//   type CreateClientDto,
// } from '@chopme/shared';

// export function RegisterPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<CreateClientDto>({
//     resolver: zodResolver(createClientSchema),
//     defaultValues: {
//       fullName: '',
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = (data: CreateClientDto) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         placeholder="Full name"
//         {...register('fullName')}
//       />
//       <p>{errors.fullName?.message}</p>

//       <input
//         placeholder="Email"
//         {...register('email')}
//       />
//       <p>{errors.email?.message}</p>

//       <input
//         type="password"
//         placeholder="Password"
//         {...register('password')}
//       />
//       <p>{errors.password?.message}</p>

//       <button type="submit">
//         Register
//       </button>
//     </form>
//   );
// }
