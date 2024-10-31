import axios from "axios";
const fetchTestimonials = async (setLoading, setPricingModels, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://simplify-backend-p6g56yj6r-simplify-f26de8d1.vercel.app/api/testimonials/get_testimonials_all"
      );

      if (response.status === 200) {
        setPricingModels(response.data);
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching pricing models");
      setLoading(false);
    }
  };
export default fetchTestimonials