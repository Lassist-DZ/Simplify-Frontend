import axios from "axios";
const fetchTestimonials = async (setLoading, setPricingModels, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/testimonials/get_testimonials_all"
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
export default fetchTestimonials