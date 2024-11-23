import axios from "axios";
import { toast, Bounce } from "react-toastify";

const deleteTestimonialByID = async (id, setLoading, setError) => {
    console.log(id)
  try {
    setError(null);
    setLoading(true);

    const response = await axios.delete(
      `http://localhost:3000/api/testimonials/delete_testimonial_by_id/${id}` 
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
    window.location.reload();
  } catch (err) {
    console.error(err);
    const errorMessage = err.response?.data?.message || "An error occurred while deleting the pricing.";
    
    toast.error(errorMessage, {
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

    setError(errorMessage);
    setLoading(false);
  }
};

export default deleteTestimonialByID;
