import axios from "axios";
import { toast, Bounce } from "react-toastify";
import config from "../../config";

const updateTestimonial = async (id, updatedData, setLoading, setError) => {
  try {
    setLoading(true);
console.log(updatedData)
    const response = await axios.put(
      config.API_URL + `testimonials/update_testimonial_by_id/${id}`,
      updatedData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
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

    // Redirect to the testimonials page if on the edit page
    if (window.location.pathname.includes("/admin/testimonials/update")) {
      window.location.href = "/admin/testimonials";
    }
  } catch (err) {
    console.error(err);

    // Handle error with toast and state
    toast.error(err.response?.data?.message || "Failed to update testimonial.", {
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

export default updateTestimonial;
