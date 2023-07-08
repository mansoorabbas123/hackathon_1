import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  custom?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    console.log("props in input", props);
    if (props?.custom) {
      return (
        <div className="flex items-center w-full">
          <div className="flex justify-center items-center w-8 h-8 rounded-md border border-r-0 rounded-br-none rounded-tr-none bg-transparent ring-offset-background">
            <Search size={18} strokeWidth="1" />
          </div>
          <input
            type={type}
            className={cn(
              "flex h-8 w-full rounded-md border border-l-0 rounded-bl-none rounded-tl-none border-input bg-transparent text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 placeholder:pl-0",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 focus:border-2",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
