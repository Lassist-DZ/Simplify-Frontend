import axios from "axios";
const fetchPricingModels = async (setLoading, setPricingModels, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
       "https://simplify-backend-p6g56yj6r-simplify-f26de8d1.vercel.app/api/pricing/get_pricing_all"
      );
      if (response.status === 200) {
        setPricingModels(response.data.data);
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching pricing models");
      setLoading(false);
    }
  };
export default fetchPricingModels