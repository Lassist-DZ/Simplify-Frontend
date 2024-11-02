import axios from "axios";
const fetchFAQs = async (setLoading, setFAQs, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://simplify-backend-lsp2h66f1-simplify-f26de8d1.vercel.app/api/faqs/get_faqs_all"
      );

      if (response.status === 200) {
          setFAQs(response.data);
        console.log(response)
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching FAQs");
      setLoading(false);
    }
  };
export default fetchFAQs