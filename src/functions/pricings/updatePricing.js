import axios from "axios";
import { toast, Bounce } from "react-toastify";

const updatePricing = async (id, updatedData, setLoading, setError) => {
  try {
    setLoading(true);
console.log(updatedData)
    const response = await axios.put(
      `https://simplify-backend-ol4xbirab-simplify-f26de8d1.vercel.app/api/pricing/update_pricing_by_id/${id}`,
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

    // Redirect to the pricings page if on the edit page
    if (window.location.pathname.includes("/admin/pricings/update")) {
      window.location.href = "/admin/pricings";
    }
  } catch (err) {
    console.error(err);

    // Handle error with toast and state
    toast.error(err.response?.data?.message || "Failed to update pricing.", {
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

export default updatePricing;