import axios from "axios"
import { toast, Bounce } from "react-toastify";
const deleteAllFAQs = async (setLoading, setError) => {
    try {
      setLoading(true);

      const response = await axios.delete(
        "https://simplify-backend-ap9i58wxa-simplify-f26de8d1.vercel.app/api/faqs/delete_all"
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
      window.location.reload()
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

export default deleteAllFAQs