import * as z from "zod";


/**
 * This is a schema that signs user in
 *
 * @type {string{}}
 */
export const UserSignInFormSchema = z.object({
    email: z.optional(z.string()),
    password: z.optional(z.string()),
    signature: z.optional(z.string())
  });
  
  /**
   * This is a schema that signs up
   *
   * @type {string{}}
   */
  export const UserRegisterFormSchema = z.object({
    email: z.string().min(4).email(),
    username: z.string().min(4).max(30),
    password: z.string().min(4).max(32),
    signature: z.optional(z.string())
  });
  
  /**
   * This is a schema that supdates user settings
   *
   * @type {string{}}
   */
  export const UserSettingsFormSchema = z.object({
    email: z.optional(z.string().min(4).email()),
    username: z.optional(z.string().min(4).max(30)),
    password: z.optional(z.string().min(4).max(32)),
    image: z.optional(z.string()),
  });