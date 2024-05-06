import { signIn } from "@/auth"

export default async function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github", { redirectTo: '/dashboard' })
            }}
        >
            <button type="submit">Signin with GitHub</button>
        </form>
    )
}