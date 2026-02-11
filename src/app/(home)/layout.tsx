import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative overflow-hidden py-8 lg:py-12">
        <div className="container mx-auto max-w-8xl px-8">{children}</div>
      </div>
    </HomeLayout>
  );
}
