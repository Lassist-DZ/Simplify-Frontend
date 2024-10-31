import axios from "axios"
import { toast, Bounce } from "react-toastify";
const createSubscriber = async (setLoading, newPricingModel, setError) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://simplify-backend-p6g56yj6r-simplify-f26de8d1.vercel.app/api/newsletter_subs/create_subscriber",
        newPricingModel
      );
      toast.success(response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setLoading(false);
      window.location.href = '/admin/newsletter_subs'; 
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setError(err.response.data.message);
      setLoading(false);
    }
  };

export default createSubscriber