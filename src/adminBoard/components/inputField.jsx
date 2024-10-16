import { Input } from "../../shadcn/ui/input"
import { Textarea } from "../../shadcn/ui/textarea"
const InputField = ({type, attribute, placeholder, value, onChange}) => {
    return  <div className='flex items-center border-b border-gray-300 py-2'>
    {
        type !== "textarea" ? 
        <Input
        type= {type}
        className='w-full py-2 px-3 placeholder-gray-300 text-gray-900 border bg-transparent border-transparent focus:outline-none'
        id={attribute}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      /> :
      <Textarea
                id={attribute}
                rows={3}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='w-full py-2 px-3 border placeholder-gray-300 text-gray-900 bg-transparent border-transparent focus:outline-none resize-none'
              />
    }
  </div>
}
export default InputField