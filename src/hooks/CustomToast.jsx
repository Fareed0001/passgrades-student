import { useToast } from "../../src/Components/ui/use-toast";

const useCustomToast = () => {
  const { toast } = useToast();

  const showToast = (message, appearance = "destrutive") => {
    toast({
      title: message,
      variant: appearance,
      description: "try again",
    });
  };

  return { showToast };
};

export default useCustomToast;
