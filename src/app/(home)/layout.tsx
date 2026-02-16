import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="relative overflow-hidden pt-8 lg:pt-12">
        <div className="container mx-auto max-w-8xl px-8">{children}</div>
      </div>
    </HomeLayout>
  );
}
