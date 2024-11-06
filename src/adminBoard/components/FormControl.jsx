import { Card, CardContent, CardHeader } from '../../shadcn/ui/card';
import InputField from '../../components/inputField';

const FormControl = ({ formData, onInputChange, fields, title }) => {
  return (
    <div className="w-full">
      <Card className='border-none '>
       {title &&  <CardHeader>
          <h3 className=" text-white">{title}</h3>
        </CardHeader>
        }
        <CardContent>
          <form>
            {fields.map((field) => (
              <div>
              {
                field.label && <label htmlFor={field.value} className='text-[#8D8D8D] font-size-paragraph'> {field.label}</label>
              }
              <InputField
                key={field.attribute}
                type={field.type}
                attribute={field.attribute}
                placeholder={field.placeholder}
                value={field.type === 'file' ? undefined : formData[field.attribute]}
                onChange={(e) =>
                  onInputChange(
                    field.attribute,
                    field.type === "file" ? e.target.files[0] : field.type === "select" ? e: e.target.value
                  )
                }
              />
              </div>
            ))}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormControl;
