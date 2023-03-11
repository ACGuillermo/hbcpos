type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

// TODO: style the button properly
const variants = {
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  secondary:
    'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-base',
  lg: 'py-3 px-8 text-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'sm',
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className={`flex items-center justify-center rounded-md border border-gray-300 font-medium shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 ${className} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {props.children}
    </button>
  );
};
