"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function ButtonSubmit() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Hello Guys!",
          description: "I'm just a simple toast",
          variant: "default",
          duration: 1500,
        });
      }}
    >
      Submit <Send />
    </Button>
  );
}
