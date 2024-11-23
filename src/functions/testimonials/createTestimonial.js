import axios from "axios";
import { toast, Bounce } from "react-toastify";

const createNewTestimonial = async (setLoading, formData, setError) => {
  try {
    setLoading(true);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    const response = await axios.post(
      "http://localhost:3000/api/testimonials/create_testimonial",
      formData,
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
      theme: "dark",
      transition: Bounce,
    });
    setLoading(false);
    window.location.href = "/admin/testimonials";
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
    setError(err.response.data.message);
    setLoading(false);
  }
};

export default createNewTestimonial;
