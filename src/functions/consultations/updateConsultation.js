import axios from "axios";
import { toast, Bounce } from "react-toastify";

const updateConsultation = async (id, updatedData, setLoading, setError) => {
  try {
    setLoading(true);

    const response = await axios.put(
      `https://simplify-backend-50i4p642b-simplify-f26de8d1.vercel.app/api/consultations/update_consultation_by_id/${id}`,
      
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
    if (window.location.pathname.includes("/admin/consultations/update")) {
      window.location.href = "/admin/consultations";
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

export default updateConsultation;
