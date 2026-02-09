import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductDemoSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-5 flex justify-center">
            <Badge variant="outline">See it in action</Badge>
          </div>
          <h2 className="text-3xl font-semibold text-balance md:text-5xl">
            Experience the platform yourself
          </h2>
          <p className="text-muted-foreground mt-6 text-base text-balance md:text-lg">
            Watch how our platform streamlines your workflow and helps you
            achieve more in less time.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-lg border shadow-md transition-all hover:shadow-xl">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-video flex items-center justify-center">
              <div className="relative">
                <div className="bg-primary/90 absolute inset-0 rounded-full blur-2xl transition-all group-hover:scale-110" />
                <Button
                  size="lg"
                  className="relative gap-2 rounded-full"
                  variant="default"
                >
                  <Play className="size-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="bg-muted/50 border-t p-4">
              <h3 className="font-semibold">Quick Start Guide</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                5-minute walkthrough of the essential features
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 aspect-[16/10] flex items-center justify-center p-8">
                <div className="bg-background relative w-full rounded-lg border p-4 shadow-lg">
                  <div className="mb-2 flex gap-2">
                    <div className="size-3 rounded-full bg-red-500" />
                    <div className="size-3 rounded-full bg-yellow-500" />
                    <div className="size-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-muted h-4 w-3/4 rounded" />
                    <div className="bg-muted h-4 w-1/2 rounded" />
                    <div className="bg-primary/20 mt-4 h-8 rounded" />
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 border-t p-4">
                <h3 className="font-semibold">Dashboard Overview</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Intuitive interface for managing your projects
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 aspect-[16/10] flex items-center justify-center p-8">
                <div className="grid w-full grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-background rounded-lg border p-3 shadow transition-transform group-hover:scale-105"
                    >
                      <div className="bg-primary/20 mb-2 h-8 rounded" />
                      <div className="bg-muted h-2 w-full rounded" />
                      <div className="bg-muted mt-1 h-2 w-2/3 rounded" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted/50 border-t p-4">
                <h3 className="font-semibold">Integration Gallery</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Connect with your favorite tools seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
