import { toast } from "@/hooks/use-toast";
import { loginSchema } from "@/libs/schema";
import authService from "@/services/auth.service";
import { ILogin } from "@/types/Auth";
import { setTokenCookie } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function useLogin() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const loginService = async (payload: ILogin) => {
    const result = await authService.login(payload);
    const { data } = result;

    return data;
  };

  const { mutate: mutateLogin, status: loginStatus } = useMutation({
    mutationFn: loginService,
    onError: () => {
      toast({
        title: "Invalid Credentials",
        variant: "destructive",
        duration: 2000,
      });
      reset();
    },
    onSuccess: (data) => {
      if ("token" in data) {
        setTokenCookie(data.token);
      }
      toast({
        title: "Login Success",
        variant: "default",
        duration: 2000,
      });
      reset();
    },
  });

  const handleLogin = async (data: ILogin) => mutateLogin(data);

  return {
    control,
    errors,
    handleSubmit,
    handleLogin,
    loginStatus,
  };
}
