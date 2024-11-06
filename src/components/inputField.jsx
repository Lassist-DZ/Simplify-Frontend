import { Input } from "../shadcn/ui/input";
import { Textarea } from "../shadcn/ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../shadcn/ui/select";
import { useEffect, useState } from "react";
import fetchPricingModels from "../functions/fetchPricings";

const InputField = ({ type, attribute, placeholder, value, onChange }) => {
  const [pricingModels, setPricingModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [selectedValue, setSelectedValue] = useState();
  // console.log(selectedValue)
  useEffect(() => {
    fetchPricingModels(setLoading, setPricingModels, setError);
  }, []);

  

  if (type === "select") {
    return (
    <select onChange={(e) => onChange(e.target.value)} className="w-[200px] mx-auto my-6 px-4 py-2 border rounded">
  <option value="" disabled selected >
    Pricing Plan
  </option>
  {pricingModels.map((model) => (
    <option key={model._id} className="px-2 py-2" value={model._id}>
      {model.category}
    </option>
  ))}
</select>

    );
  } else {
    return (
      <div className="flex items-center border-b border-[#8D8D8D] py-2 font-paragraph" id={attribute}>
        {type === "textarea" ? (
          <Textarea
            id={attribute}
            rows={1}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full py-2 px-3 border placeholder-[#8D8D8D] text-black placeholder-text-[0.625rem] bg-transparent border-transparent focus:outline-none resize-none"
          />
        ) : (
          <Input
            type={type}
            className="w-full py-2 px-3 placeholder-[#8D8D8D] text-black border bg-transparent border-transparent placeholder-text-[0.625rem] focus:outline-none"
            id={attribute}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    );
  }
};

export default InputField;
