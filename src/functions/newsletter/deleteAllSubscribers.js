import axios from "axios"
import { toast, Bounce } from "react-toastify";
const deleteAllSubscribers = async (token, setLoading, setError) => {
    try {
      setLoading(true);

      const response = await axios.delete(
        "https://simplify-backend-xr7o6faws-simplify-f26de8d1.vercel.app/api/newsletter_subs/delete_all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.message, {
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
      toast.error(err.response.message, {
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
      setError(err.response.message);
      setLoading(false);
    }
  };

export default deleteAllSubscribers