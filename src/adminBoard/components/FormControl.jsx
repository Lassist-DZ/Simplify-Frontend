
import { Input } from '../../shadcn/ui/input';
import { Label } from '../../shadcn/ui/label';
import { Card, CardContent, CardHeader } from '../../shadcn/ui/card';
import { Textarea } from '../../shadcn/ui/textarea';
import InputField from './inputField';
const FormControl = ({ pricingData, onInputChange }) => {
  return (
    <div className="space-y-6">
      {/* Form Card */}
      <Card className='px-8 py-8 rounded bg-[#424242]'>
        <CardHeader>
          <h3 className="text-xl font-semibold text-white mb-4">Pricing Model Details</h3>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Category Input */}
            <InputField type={"text"} attribute={"category"} placeholder={"Enter plan category"} value={pricingData.category} onChange={(e) => onInputChange(e.target.id, e.target.value)}/>
            <InputField type={"text"} attribute={"assistants_count"} placeholder={"How many assistants are provided for this plan?"} value={pricingData.assistants_count} onChange={(e) => onInputChange(e.target.id, e.target.value)}/>
            <InputField type={"text"} attribute={"users_count"} placeholder={"How many users are allowed in this plan?"} value={pricingData.users_count} onChange={(e) => onInputChange(e.target.id, e.target.value)}/>
            <InputField type={"number"} attribute={"price_per_hour"} placeholder={"Enter price per hour"} value={pricingData.price_per_hour} onChange={(e) => onInputChange(e.target.id, e.target.value)}/>         
            <InputField type={"textarea"} attribute={"services"} placeholder={"Enter the services included in this plan (comma-separated)"} value={pricingData.SERVICES} onChange={(e) => onInputChange(e.target.id, e.target.value)}/>         
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormControl;
