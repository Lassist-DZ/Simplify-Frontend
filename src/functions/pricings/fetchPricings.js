import axios from "axios";
import config from "../../config";
const fetchPricingModels = async (setLoading, setPricingModels, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
       config.API_URL + "pricing/get_pricing_all"
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