import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./contexts/ContextProvider";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <>
      <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      <ContextProvider>
        <RoutesMain/>
      </ContextProvider>
    </>
  );
}

export default App;
