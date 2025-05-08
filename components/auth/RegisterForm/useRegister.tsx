import { toast } from "@/hooks/use-toast";
import { registerSchema } from "@/libs/schema";
import authService from "@/services/auth.service";
import { IRegister } from "@/types/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function useRegister() {
  const { push } = useRouter();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerService = async (payload: IRegister) => {
    const result = await authService.register(payload);
    const { data } = result;

    return data;
  };

  const { mutate: mutateRegister, status: registerStatus } = useMutation({
    mutationFn: registerService,
    onError: () => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
        duration: 2000,
      });
      reset();
    },
    onSuccess: () => {
      toast({
        title: "Register Success",
        variant: "default",
        duration: 2000,
      });
      push("/login");
      reset();
    },
  });

  const handleRegister = (data: IRegister) => {
    const payload = {
      ...data,
      role: "User",
    };
    mutateRegister(payload);
  };

  return { control, errors, handleSubmit, handleRegister, registerStatus };
}
