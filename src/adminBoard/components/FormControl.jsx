import { Card, CardContent, CardHeader } from '../../shadcn/ui/card';
import InputField from './inputField';

const FormControl = ({ formData, onInputChange, fields, title }) => {
  return (
    <div className="space-y-6">
      <Card className="px-8 py-8 rounded bg-[#424242]">
        <CardHeader>
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {fields.map((field) => (
              <InputField
                key={field.attribute}
                type={field.type}
                attribute={field.attribute}
                placeholder={field.placeholder}
                value={field.type === 'file' ? undefined : formData[field.attribute]}
                onChange={(e) =>
                  onInputChange(
                    field.attribute,
                    field.type === "file" ? e.target.files[0] : e.target.value
                  )
                }
              />
            ))}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormControl;
