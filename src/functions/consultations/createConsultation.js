import axios from "axios"
import config from "../../config"
import { toast, Bounce } from "react-toastify";
const createConsultation = async (setLoading, newPricingModel, setError) => {
    try {
      setLoading(true);

      const response = await axios.post(
        config.API_URL + "consultations/create_consultation",
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
      if (window.location.pathname === "/admin/consultations/new") {
        window.location.href = "/admin/consultations";
      }
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

export default createConsultation