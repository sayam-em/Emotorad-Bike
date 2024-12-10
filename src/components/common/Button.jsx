// src/components/common/Button.jsx
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
  }) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors';
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    };
  
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  