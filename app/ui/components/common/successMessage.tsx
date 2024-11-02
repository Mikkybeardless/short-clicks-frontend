import { Message } from "@/app/types";

export const Success = ({message}: Message) => {

  return (
    <div>
        <div className="mt-4 text-green-600 font-semibold">{message}</div>
    </div>
  );
}