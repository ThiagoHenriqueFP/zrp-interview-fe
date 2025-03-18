import { Dispatch, SetStateAction } from "react";

export type ToastData = {
  type: "warning" | "error";
  text: string;
  isHidden: boolean;
};

interface ToastProps {
  data: ToastData;
  setData: Dispatch<SetStateAction<ToastData>>;
}
export function Toast({ data, setData }: ToastProps) {
  switch (data.type) {
    case "error":
      return (
        <div
          className={`z-150 px-4 p-2 border text-white relative top-0 rounded ml-auto min-w-[180px] max-w-fit flex items-center justify-between border-red-500 bg-red-700 ${
            data.isHidden ? "hidden" : ""
          }`}
        >
          <p className="">{data.text}</p>
          <button
            onClick={() =>
              setData((props) => {
                return {
                  ...props,
                  isHidden: true,
                };
              })
            }
          >
            X
          </button>
        </div>
      );
    default:
      return (
        <div
          className={`px-4 p-2 border border-yellow-500 bg-yellow-700 text-white relative top-0 rounded ,ml-auto min-w-[180px] flex items-center justify-between ${
            data.isHidden ? "hidden" : ""
          }`}
        >
          <p className="">{data.text}</p>
          <button
            onClick={() =>
              setData((props) => {
                return {
                  ...props,
                  isHidden: true,
                };
              })
            }
          >
            X
          </button>
        </div>
      );
  }
}
