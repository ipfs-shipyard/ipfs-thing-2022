export default function Button({target="_self", href="#", children, className}) {  
  return (
    <a
      href={href}
      target={target}
      type="button"
      className={`inline-block px-12 py-2 text-md font-medium text-white bg-blue-500 hover:bg-blue-400 px-8 py-3 rounded-lg rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${className}`}
    >
      {children}
    </a>
  )
}


