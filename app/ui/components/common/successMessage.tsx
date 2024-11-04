import { Message } from "@/app/types";

export const Success = ({message}: Message) => {

  return (
    <div>
        <div className="mt-4 text-green-600 md:text-2xl font-semibold">{message}</div>
    </div>
  );
}