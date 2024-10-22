import axios from "axios";
const fetchPricingModels = async (setLoading, setPricingModels, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/pricing/get_pricing_all"
      );

      if (response.statusText === "OK") {
        setPricingModels(response.data.data);
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching pricing models");
      setLoading(false);
    }
  };
export default fetchPricingModels