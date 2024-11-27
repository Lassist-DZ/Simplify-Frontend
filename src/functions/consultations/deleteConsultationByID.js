import axios from "axios";
import { toast, Bounce } from "react-toastify";
import config from "../../config";

const deleteConsultationByID = async (id, setLoading, setError) => {
    console.log(id)
  try {
    setError(null);
    setLoading(true);

    const response = await axios.delete(
      config.API_URL + `consultations/delete_consultation_by_id/${id}` 
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
    const errorMessage = err.response?.data?.message || "An error occurred while deleting the consultation.";
    
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

export default deleteConsultationByID;
