type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

// TODO: style the button properly
const variants = {
  primary: 'bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-md',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-md',
  danger: 'bg-red-500 hover:bg-red-700 text-white font-bold rounded-md',
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
      className={`flex items-center justify-center rounded-md border border-gray-300 font-medium shadow-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 ${className} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {props.children}
    </button>
  );
};
