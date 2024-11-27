import axios from "axios";
import { Bounce, toast } from "react-toastify";
import config from "../config"
const validateForm = (email, password) => {
    if (!email) {
      return "Email is required.";
    }
    if (!password) {
      return "Password is required.";
    }
    return null;
  };

const handleLogin = async (e, setLoading, setError, email, password, navigate) => {
    e.preventDefault();

    const validationError = validateForm(email, password);
    if (validationError) {
      toast.error(validationError, {
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
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        config.API_URL + "auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem("token", response.data.token);

        // Navigate to the home page after successful login
        navigate("/admin/"); // Replace "/home" with the actual route you want to navigate to
      } else {
        toast.error("Login failed. Please check your credentials.", {
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
      }
    } catch (err) {
      // Display error with toast notification
      toast.error(err.response?.data?.message || "An error occurred. Please try again.", {
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
    } finally {
      setLoading(false);
    }
  };
export default handleLogin