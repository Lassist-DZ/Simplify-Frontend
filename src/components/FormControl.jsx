import { Card, CardContent } from '../shadcn/ui/card';
import InputField from './inputField';

const FormControl = ({ formData, onInputChange, fields }) => {
  return (
    <div className="w-full">
      <Card className='border-none '>
        <CardContent>
          <form>
            {fields.map((field) => (
              <div key={field.attribute}>
                {field.label && (
                  <label htmlFor={field.value} className='text-[#8D8D8D] font-size-paragraph'>
                    {field.label}
                  </label>
                )}
                <InputField
                  type={field.type}
                  attribute={field.attribute}
                  placeholder={field.placeholder}
                  value={field.type === 'file' ? undefined : formData[field.attribute]}
                  onChange={(e) =>
                    onInputChange(
                      field.attribute,
                      field.type === "file" ? e : field.type === "select" ? e : e.target.value
                    )
                  }
                  allowedFileTypes={field.attribute === "icon" ? ["image/svg+xml"]: field.attribute === "witness_image" ? ["image/svg+xml", "image/png", "image/jpeg"]: null}
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
