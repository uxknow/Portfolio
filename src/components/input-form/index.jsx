
export const FormInput = ({error, ...args}) => {
  return (
    <div className="w-full">
      <input {...args} className="w-full outline-none peer border border-slate-400 rounded px-4 py-1 focus:outline-blue-400 focus:border-none invalid:animate-shake"/>
      <span className="hidden peer-invalid:block text-xs text-red-500 ml-2 mt-1">{error}</span>
    </div>
  )
}
