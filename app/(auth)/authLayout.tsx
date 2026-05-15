import { AuthWrapper2 } from "@/components/layout/AuthWrapper";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthWrapper2>{children}</AuthWrapper2>;
}
