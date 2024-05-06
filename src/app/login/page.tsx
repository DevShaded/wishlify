import { signIn } from "@/auth"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function SignIn() {
    return (
        <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-20 lg:px-8">
            <Card className="w-full sm:max-w-md mt-6 px-6 py-4">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Login with GitHub to continue</p>
                </CardContent>
                <CardFooter>
                    <form action={async () => {
                        "use server"
                        await signIn("github", {redirectTo: '/dashboard'})
                    }}>
                        <Button type="submit">Sign in with GitHub</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}
