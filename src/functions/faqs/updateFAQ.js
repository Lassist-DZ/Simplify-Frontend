import axios from "axios";
import { toast, Bounce } from "react-toastify";
import config from "../../config";

const updateFAQ = async (id, updatedData, setLoading, setError) => {
  try {
    setLoading(true);

    const response = await axios.put(
      config.API_URL + `faqs/update_faq_by_id/${id}`,
      
      updatedData
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

    // Redirect to the consultations page if on the edit page
    if (window.location.pathname.includes("/admin/faqs/update")) {
      window.location.href = "/admin/faqs";
    }
  } catch (err) {
    console.error(err);

    // Handle error with toast and state
    toast.error(err.response?.data?.message || "Failed to update consultation.", {
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

    setError(err.response?.data?.message || "An error occurred.");
    setLoading(false);
  }
};

export default updateFAQ;