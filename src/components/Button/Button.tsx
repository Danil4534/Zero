
type ButtonProps = {
  
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";   
};
const Button:React.FC<ButtonProps> =({  children, className, type }: ButtonProps) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
export default Button;