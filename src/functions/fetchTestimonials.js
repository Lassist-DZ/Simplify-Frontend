import axios from "axios";
const fetchTestimonials = async (setLoading, setPricingModels, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/testimonials/get_testimonials_all"
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
export default fetchTestimonials